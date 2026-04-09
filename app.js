// ── CANVAS ──
const canvas=document.getElementById('field');
const ctx=canvas.getContext('2d');
let currentPlay=plays[0];

const POSITION_NAMES={
  GK:'Goalkeeper',LB:'Left Back',LCB:'Left Center Back',RCB:'Right Center Back',RB:'Right Back',
  LM:'Left Midfielder',LCM:'Left Center Mid',RCM:'Right Center Mid',RM:'Right Midfielder',
  LF:'Left Forward',RF:'Right Forward'
};

const SIT_LEVEL_LABELS={
  'Direct Free Kick':['Defensive End','Midfield','Offensive End']
};
const DEFAULT_LEVEL_LABELS=['Option A — Safe','Option B — Balanced','Option C — Attack'];
const DEFENSE_LEVEL_LABELS=['Option A — Zonal','Option B — Man-to-Man','Option C — Press'];

const FMX=0.09,FMY=0.05;
function px(p,d,fm){return fm*d+(p/100)*d*(1-2*fm);}

function drawField(W,H){
  const fx0=FMX*W,fy0=FMY*H,fW=W*(1-2*FMX),fH=H*(1-2*FMY);
  ctx.fillStyle='#111827';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#2a6329';ctx.fillRect(fx0,fy0,fW,fH);
  for(let i=0;i<8;i++){if(i%2===0){ctx.fillStyle='rgba(0,0,0,0.07)';ctx.fillRect(fx0,fy0+i*(fH/8),fW,fH/8);}}
  ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineWidth=Math.max(1.5,W/200);
  const lw=ctx.lineWidth/2;
  ctx.strokeRect(fx0+lw,fy0+lw,fW-lw*2,fH-lw*2);
  ctx.beginPath();ctx.moveTo(fx0+lw,fy0+fH/2);ctx.lineTo(fx0+fW-lw,fy0+fH/2);ctx.stroke();
  ctx.beginPath();ctx.arc(fx0+fW/2,fy0+fH/2,fW*.155,0,Math.PI*2);ctx.stroke();
  ctx.beginPath();ctx.arc(fx0+fW/2,fy0+fH/2,4,0,Math.PI*2);ctx.fillStyle='white';ctx.fill();
  const pa_h=fH*.16,pa_w=fW*.57;
  ctx.strokeRect(fx0+(fW-pa_w)/2,fy0+lw,pa_w,pa_h);
  ctx.strokeRect(fx0+(fW-pa_w)/2,fy0+fH-lw-pa_h,pa_w,pa_h);
  const ga_h=fH*.055,ga_w=fW*.26;
  ctx.strokeRect(fx0+(fW-ga_w)/2,fy0+lw,ga_w,ga_h);
  ctx.strokeRect(fx0+(fW-ga_w)/2,fy0+fH-lw-ga_h,ga_w,ga_h);
  const g_w=fW*.14,g_d=fH*.018;
  ctx.strokeRect(fx0+(fW-g_w)/2,fy0+lw-g_d,g_w,g_d);
  ctx.strokeRect(fx0+(fW-g_w)/2,fy0+fH-lw,g_w,g_d);
  [[fx0+fW/2,fy0+fH*.12],[fx0+fW/2,fy0+fH*.88]].forEach(([cx,cy])=>{ctx.beginPath();ctx.arc(cx,cy,3,0,Math.PI*2);ctx.fillStyle='white';ctx.fill();});
  function fieldPill(text,x,y,textColor,bgColor){
    const fs=Math.max(7,fW*.032);
    ctx.font=`bold ${fs}px 'IBM Plex Mono',monospace`;
    ctx.textAlign='center';ctx.textBaseline='middle';
    const tw=ctx.measureText(text).width;
    const ph=fs*1.7,pw=tw+fs*1.4,r=3;
    const rx=x-pw/2,ry=y-ph/2;
    ctx.fillStyle=bgColor;
    ctx.beginPath();ctx.roundRect(rx,ry,pw,ph,r);ctx.fill();
    ctx.fillStyle=textColor;
    ctx.fillText(text,x,y);
  }
  const pa_mid_top=fy0+pa_h/2;
  const pa_mid_bot=fy0+fH-pa_h/2;
  fieldPill('▲ ATTACK',fx0+fW/2,pa_mid_top,'rgba(255,255,255,.75)','rgba(0,0,0,.32)');
  fieldPill('▼ DEFEND',fx0+fW/2,pa_mid_bot,'rgba(255,255,255,.5)','rgba(0,0,0,.22)');
}

function drawArrow(x1p,y1p,x2p,y2p,col,style,W,H,weight){
  weight=weight||1;
  const x1=px(x1p,W,FMX),y1=px(y1p,H,FMY),x2=px(x2p,W,FMX),y2=px(y2p,H,FMY);
  const dx=x2-x1,dy=y2-y1,len=Math.sqrt(dx*dx+dy*dy);
  if(len<4)return;
  const ux=dx/len,uy=dy/len,hl=Math.max(8,W*.03)*weight,hw=Math.max(3,W*.01)*weight;
  const ex=x2-ux*hl*.5,ey=y2-uy*hl*.5;
  ctx.strokeStyle=col;ctx.lineWidth=Math.max(1.8,W/150)*weight;
  ctx.setLineDash(style==='dash'?[6,4]:[]);
  ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(ex,ey);ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle=col;
  ctx.beginPath();ctx.moveTo(x2,y2);
  ctx.lineTo(x2-ux*hl-uy*hw,y2-uy*hl+ux*hw);
  ctx.lineTo(x2-ux*hl+uy*hw,y2-uy*hl-ux*hw);
  ctx.closePath();ctx.fill();
}

function drawPlayer(xp,yp,col,label,W,H,highlighted){
  const x=px(xp,W,FMX),y=px(yp,H,FMY),R=Math.max(11,W*.035);
  if(col===BALL){
    const R=Math.max(7,W*.022);
    // Drop shadow
    ctx.beginPath();ctx.arc(x+1.5,y+1.5,R,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,.4)';ctx.fill();
    // White base
    ctx.beginPath();ctx.arc(x,y,R,0,Math.PI*2);ctx.fillStyle='white';ctx.fill();
    // Clip black patches to circle
    ctx.save();
    ctx.beginPath();ctx.arc(x,y,R,0,Math.PI*2);ctx.clip();
    ctx.fillStyle='#111';
    const pent=(cx,cy,r,rot)=>{
      ctx.beginPath();
      for(let i=0;i<5;i++){const a=i*2*Math.PI/5+rot;i===0?ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a)):ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));}
      ctx.closePath();ctx.fill();
    };
    // Center pentagon, one vertex pointing up
    pent(x,y,R*.38,-Math.PI/2);
    // 5 outer pentagons aligned with the edges of the center pentagon
    for(let i=0;i<5;i++){
      const a=-Math.PI/2+Math.PI/5+i*2*Math.PI/5;
      pent(x+R*1.15*Math.cos(a),y+R*1.15*Math.sin(a),R*.38,a+Math.PI);
    }
    ctx.restore();
    // Outline
    ctx.beginPath();ctx.arc(x,y,R,0,Math.PI*2);ctx.strokeStyle='#bbb';ctx.lineWidth=1;ctx.stroke();
    return;
  }
  if(highlighted){
    // Outer glow ring
    ctx.beginPath();ctx.arc(x,y,R+5,0,Math.PI*2);
    ctx.strokeStyle='rgba(255,255,255,0.9)';ctx.lineWidth=3;ctx.stroke();
    col='#c0c0c0'; // silver
  }
  ctx.beginPath();ctx.arc(x+2,y+2,R,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,.35)';ctx.fill();
  ctx.beginPath();ctx.arc(x,y,R,0,Math.PI*2);ctx.fillStyle=col;ctx.fill();
  ctx.strokeStyle=highlighted?'rgba(255,255,255,1)':'rgba(255,255,255,.6)';
  ctx.lineWidth=highlighted?2.5:1.5;ctx.stroke();
  if(label){
    ctx.fillStyle=highlighted?'#111':'white';
    ctx.font=`bold ${Math.max(8,R*.7)}px 'IBM Plex Mono',monospace`;
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(label.substring(0,4),x,y);
  }
}

// Find arrows that start near a given player position (within 3 percentage units)
function getPlayerArrows(arrows,player){
  const PROX=3;
  return arrows.filter(a=>Math.abs(a.x1-player.x)<PROX&&Math.abs(a.y1-player.y)<PROX);
}

function isMobile(){return window.innerWidth<768;}

function redraw(){
  const wrap=document.getElementById('canvasArea');
  const panelCollapsed=document.getElementById('infoPanel').classList.contains('collapsed');
  const mobile=isMobile();
  const panelW=(!mobile&&!panelCollapsed)?285:0;
  const panelH=(mobile&&!panelCollapsed)?Math.round(wrap.clientHeight*.48):0;
  const maxW=wrap.clientWidth-8-panelW,maxH=wrap.clientHeight-8-panelH;
  const aspect=68/105;
  let W=maxW,H=maxW/aspect;
  if(H>maxH){H=maxH;W=H*aspect;}
  canvas.width=Math.floor(W);canvas.height=Math.floor(H);
  canvas.style.transition='none';
  canvas.style.marginLeft=(!mobile&&!panelCollapsed)?'-285px':'';
  canvas.getBoundingClientRect();
  canvas.style.transition='';
  ctx.clearRect(0,0,W,H);
  drawField(W,H);
  if(!currentPlay)return;
  const els=currentPlay.elements;
  const arrows=els.arrows||[];
  const players=els.players||[];

  if(currentPosition==='team'){
    arrows.forEach(a=>drawArrow(a.x1,a.y1,a.x2,a.y2,a.color,a.style,W,H));
    ctx.globalAlpha=0.4;
    players.filter(p=>p.color===OPP).forEach(p=>drawPlayer(p.x,p.y,p.color,p.label,W,H));
    ctx.globalAlpha=1;
    players.filter(p=>p.color!==BALL&&p.color!==OPP).forEach(p=>drawPlayer(p.x,p.y,p.color,p.label,W,H));
    players.filter(p=>p.color===BALL).forEach(p=>drawPlayer(p.x,p.y,p.color,p.label,W,H));
  } else {
    // Find the selected player on our team
    const selP=players.find(p=>p.label===currentPosition&&p.color!==BALL&&p.color!==OPP);
    const selArrows=selP?getPlayerArrows(arrows,selP):[];
    const selArrowSet=new Set(selArrows);

    // Draw non-player arrows dimmed
    ctx.globalAlpha=0.35;
    arrows.filter(a=>!selArrowSet.has(a)).forEach(a=>drawArrow(a.x1,a.y1,a.x2,a.y2,a.color,a.style,W,H));
    ctx.globalAlpha=1;

    // Draw player arrows bright + thick
    selArrows.forEach(a=>drawArrow(a.x1,a.y1,a.x2,a.y2,'#ffffff','solid',W,H,2));

    // Draw OPP faded underneath, other OUR players dimmed on top
    ctx.globalAlpha=0.4;
    players.filter(p=>p.color===OPP).forEach(p=>drawPlayer(p.x,p.y,p.color,p.label,W,H));
    ctx.globalAlpha=0.5;
    players.filter(p=>p.color!==BALL&&p.color!==OPP&&p!==selP).forEach(p=>drawPlayer(p.x,p.y,p.color,p.label,W,H));
    ctx.globalAlpha=1;

    // Draw selected player highlighted
    if(selP){
      drawPlayer(selP.x,selP.y,selP.color,selP.label,W,H,true);
    }

    // Ball on top
    players.filter(p=>p.color===BALL).forEach(p=>drawPlayer(p.x,p.y,p.color,p.label,W,H));
  }
}

let currentSide='offense';
let currentPosition='team';

function setSide(s){
  currentSide=s;
  currentPosition='team';
  document.getElementById('posSelect').value='team';
  document.getElementById('btnOff').classList.toggle('active',s==='offense');
  document.getElementById('btnDef').classList.toggle('active',s==='defense');
  updatePlay();
}

function updatePlay(){
  const sit=document.getElementById('sitSelect').value;
  const lvlSel=document.getElementById('lvlSelect');
  const customLabels=currentSide==='defense'?DEFENSE_LEVEL_LABELS:SIT_LEVEL_LABELS[sit];
  ['strong','equal','weaker'].forEach((v,i)=>{
    lvlSel.options[i].text=customLabels?customLabels[i]:DEFAULT_LEVEL_LABELS[i];
  });
  const lvl=lvlSel.value;
  const found=plays.find(p=>p.situation===sit&&p.level===lvl&&p.side===currentSide);
  currentPlay=found||null;
  document.getElementById('infoPanel').classList.remove('collapsed');
  redraw();buildInfoPanel();
}

function updatePosition(){
  currentPosition=document.getElementById('posSelect').value;
  redraw();buildInfoPanel();
}

// ── INFO PANEL ──
function togglePanel(){
  const infoPanel=document.getElementById('infoPanel');
  infoPanel.classList.toggle('collapsed');
  const isOpen=!infoPanel.classList.contains('collapsed');
  if(!isMobile()) canvas.style.marginLeft=isOpen?'-285px':'';
  setTimeout(redraw,260);
}

function buildInfoPanel(){
  const content=document.getElementById('panelContent');
  const play=currentPlay;
  if(!play){
    const sit=document.getElementById('sitSelect').value;
    const lv=LEVELS[document.getElementById('lvlSelect').value];
    content.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:10px;text-align:center;padding:20px 0;">
      <div style="font-size:2rem;opacity:.3">🚧</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:2px;color:var(--muted);">COMING SOON</div>
      <div style="font-size:.7rem;color:var(--muted);line-height:1.6;">${sit}<br>${lv.label}<br>Defense play not yet built.</div>
    </div>`;
    return;
  }

  const lv={...LEVELS[play.level],label:play.levelLabel||LEVELS[play.level].label};

  if(currentPosition!=='team'){
    const posName=POSITION_NAMES[currentPosition]||currentPosition;
    const pd=play.playerData&&play.playerData[currentPosition];
    const players=play.elements.players||[];
    const inPlay=players.some(p=>p.label===currentPosition&&p.color!==BALL&&p.color!==OPP);

    content.innerHTML=`
      <div>
        <div class="play-title">${play.title}</div>
        <div class="play-sub">
          <span class="tag tag-sit">${play.situation}</span>
          <span class="tag" style="background:${lv.dot}22;color:${lv.dot}">${lv.label}</span>
        </div>
      </div>
      <div style="background:rgba(192,192,192,.12);border:1px solid rgba(192,192,192,.25);border-radius:5px;padding:8px 10px;">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:.55rem;letter-spacing:2px;color:#c0c0c0;text-transform:uppercase;margin-bottom:3px;">Your Position</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:2px;color:#c0c0c0;">${posName}</div>
      </div>
      ${!inPlay?`<div style="font-size:.72rem;color:var(--muted);line-height:1.5;padding:4px 2px;">You don't have a specific role in this play — hold your position and be ready to support.</div>`:''}
      ${pd?`
        ${pd.role?`<div><div class="sec-lbl">Your Role</div><div class="play-goal">${pd.role}</div></div>`:''}
        ${pd.before?`<div><div class="sec-lbl">Before the Ball is Played</div><div class="steps"><div class="step"><div class="step-num">→</div><p>${pd.before}</p></div></div></div>`:''}
        ${pd.during?`<div><div class="sec-lbl">When the Ball is Played</div><div class="steps"><div class="step"><div class="step-num">→</div><p>${pd.during}</p></div></div></div>`:''}
        ${pd.tips&&pd.tips.length?`<div><div class="sec-lbl">Remember</div><div class="key-points">${pd.tips.map(t=>`<div class="kp">${t}</div>`).join('')}</div></div>`:''}
      `:`<div style="display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;padding:16px 0;">
        <div style="font-size:1.6rem;opacity:.3">📋</div>
        <div style="font-size:.68rem;color:var(--muted);line-height:1.6;">Player-specific instructions<br>coming soon for this play.</div>
      </div>`}
      <div class="legend-box" style="margin-top:auto;">
        <div class="legend-row"><div class="ld" style="background:#c0c0c0;border:1px solid rgba(255,255,255,.4)"></div>You (${currentPosition})</div>
        <div class="legend-row"><div class="ld" style="background:${OUR};opacity:.35"></div>Teammates</div>
        <div class="legend-row"><div class="ld" style="background:${OPP};opacity:.35"></div>Opponents</div>
        <div class="legend-row"><div class="la" style="background:#ffffff"></div>Your movement</div>
      </div>`;
    return;
  }

  // Team view
  content.innerHTML=`
    <div>
      <div class="play-title">${play.title}</div>
      <div class="play-sub">
        <span class="tag tag-sit">${play.situation}</span>
        <span class="tag" style="background:${lv.dot}22;color:${lv.dot}">${lv.label}</span>
      </div>
    </div>
    <div><div class="sec-lbl">Objective</div><div class="play-goal">${play.goal}</div></div>
    <div><div class="sec-lbl">Steps</div><div class="steps">
      ${play.steps.map((s,i)=>`<div class="step"><div class="step-num">${i+1}</div><p>${s.text}</p></div>`).join('')}
    </div></div>
    <div><div class="sec-lbl">Key Points</div><div class="key-points">
      ${play.keys.map(k=>`<div class="kp">${k}</div>`).join('')}
    </div></div>
    <div class="legend-box">
      <div class="sec-lbl" style="margin-bottom:8px">Legend</div>
      <div class="legend-row"><div class="ld" style="background:${OUR}"></div>Our team</div>
      <div class="legend-row"><div class="ld" style="background:${OPP}"></div>Opponents</div>
      <div class="legend-row"><div class="ld" style="background:white;border:1px solid #555"></div>Ball</div>
      <div class="legend-row"><div class="la" style="background:${ARR}"></div>Primary movement / pass</div>
      <div class="legend-row"><div class="la" style="background:${ARR2}"></div>Secondary / support run</div>
    </div>`;
}

// ── PDF EXPORT ──
function hexToRgb(hex){return[parseInt(hex.slice(1,3),16),parseInt(hex.slice(3,5),16),parseInt(hex.slice(5,7),16)];}

function renderOffCanvas(offCtx,W,H,play){
  const fx0=FMX*W,fy0=FMY*H,fW=W*(1-2*FMX),fH=H*(1-2*FMY);
  offCtx.fillStyle='#111827';offCtx.fillRect(0,0,W,H);
  offCtx.fillStyle='#2a6329';offCtx.fillRect(fx0,fy0,fW,fH);
  for(let i=0;i<8;i++){if(i%2===0){offCtx.fillStyle='rgba(0,0,0,0.07)';offCtx.fillRect(fx0,fy0+i*(fH/8),fW,fH/8);}}
  offCtx.strokeStyle='rgba(255,255,255,.85)';offCtx.lineWidth=2;
  const lw=1;
  offCtx.strokeRect(fx0+lw,fy0+lw,fW-lw*2,fH-lw*2);
  offCtx.beginPath();offCtx.moveTo(fx0+lw,fy0+fH/2);offCtx.lineTo(fx0+fW-lw,fy0+fH/2);offCtx.stroke();
  offCtx.beginPath();offCtx.arc(fx0+fW/2,fy0+fH/2,fW*.155,0,Math.PI*2);offCtx.stroke();
  offCtx.beginPath();offCtx.arc(fx0+fW/2,fy0+fH/2,4,0,Math.PI*2);offCtx.fillStyle='white';offCtx.fill();
  const pa_h=fH*.16,pa_w=fW*.57;
  offCtx.strokeRect(fx0+(fW-pa_w)/2,fy0+lw,pa_w,pa_h);offCtx.strokeRect(fx0+(fW-pa_w)/2,fy0+fH-lw-pa_h,pa_w,pa_h);
  const ga_h=fH*.055,ga_w=fW*.26;
  offCtx.strokeRect(fx0+(fW-ga_w)/2,fy0+lw,ga_w,ga_h);offCtx.strokeRect(fx0+(fW-ga_w)/2,fy0+fH-lw-ga_h,ga_w,ga_h);
  const g_w=fW*.14,g_d=fH*.018;
  offCtx.strokeRect(fx0+(fW-g_w)/2,fy0+lw-g_d,g_w,g_d);offCtx.strokeRect(fx0+(fW-g_w)/2,fy0+fH-lw,g_w,g_d);
  [[fx0+fW/2,fy0+fH*.12],[fx0+fW/2,fy0+fH*.88]].forEach(([cx,cy])=>{offCtx.beginPath();offCtx.arc(cx,cy,3,0,Math.PI*2);offCtx.fillStyle='white';offCtx.fill();});
  function op(p,d,fm){return fm*d+(p/100)*d*(1-2*fm);}
  (play.elements.arrows||[]).forEach(a=>{
    const x1=op(a.x1,W,FMX),y1=op(a.y1,H,FMY),x2=op(a.x2,W,FMX),y2=op(a.y2,H,FMY);
    const dx=x2-x1,dy=y2-y1,len=Math.sqrt(dx*dx+dy*dy);if(len<4)return;
    const ux=dx/len,uy=dy/len,hl=14,hw=3.5;
    const ex=x2-ux*hl*.5,ey=y2-uy*hl*.5;
    offCtx.strokeStyle=a.color;offCtx.lineWidth=2;
    offCtx.setLineDash(a.style==='dash'?[5,4]:[]);
    offCtx.beginPath();offCtx.moveTo(x1,y1);offCtx.lineTo(ex,ey);offCtx.stroke();
    offCtx.setLineDash([]);
    offCtx.fillStyle=a.color;
    offCtx.beginPath();offCtx.moveTo(x2,y2);
    offCtx.lineTo(x2-ux*hl-uy*hw,y2-uy*hl+ux*hw);
    offCtx.lineTo(x2-ux*hl+uy*hw,y2-uy*hl-ux*hw);
    offCtx.closePath();offCtx.fill();
  });
  const pls=play.elements.players||[];
  pls.filter(p=>p.color!==BALL).forEach(p=>{
    const x=op(p.x,W,FMX),y=op(p.y,H,FMY),R=12;
    offCtx.beginPath();offCtx.arc(x+1,y+1,R,0,Math.PI*2);offCtx.fillStyle='rgba(0,0,0,.35)';offCtx.fill();
    offCtx.beginPath();offCtx.arc(x,y,R,0,Math.PI*2);offCtx.fillStyle=p.color;offCtx.fill();
    offCtx.strokeStyle='rgba(255,255,255,.6)';offCtx.lineWidth=1.5;offCtx.stroke();
    if(p.label){
      offCtx.fillStyle=(p.color===BALL)?'#111':'white';
      offCtx.font='bold 9px monospace';offCtx.textAlign='center';offCtx.textBaseline='middle';
      offCtx.fillText(p.label.substring(0,4),x,y);
    }
  });
  pls.filter(p=>p.color===BALL).forEach(p=>{
    const x=op(p.x,W,FMX),y=op(p.y,H,FMY),R=9;
    offCtx.beginPath();offCtx.arc(x+1,y+1,R,0,Math.PI*2);offCtx.fillStyle='rgba(0,0,0,.4)';offCtx.fill();
    offCtx.beginPath();offCtx.arc(x,y,R,0,Math.PI*2);offCtx.fillStyle='white';offCtx.fill();
    offCtx.strokeStyle='#333';offCtx.lineWidth=1;offCtx.stroke();
    offCtx.beginPath();offCtx.arc(x,y,R*.28,0,Math.PI*2);offCtx.fillStyle='#222';offCtx.fill();
  });
}

async function exportPDF(){
  const{jsPDF}=window.jspdf;
  const doc=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
  const PW=210,PH=297;

  // cover
  doc.setFillColor(13,17,23);doc.rect(0,0,PW,PH,'F');
  doc.setFillColor(139,32,53);doc.rect(0,0,PW,5,'F');
  doc.setTextColor(139,32,53);doc.setFont('helvetica','bold');doc.setFontSize(30);
  doc.text('SET PIECE PLAYBOOK',PW/2,50,{align:'center'});
  doc.setTextColor(139,148,158);doc.setFontSize(10);
  doc.text('8TH GRADE GIRLS SOCCER  ·  4-4-2  ·  SPEED-BASED',PW/2,62,{align:'center'});
  doc.setDrawColor(48,54,61);doc.setLineWidth(.4);doc.line(20,70,PW-20,70);
  doc.setTextColor(139,148,158);doc.setFontSize(8);doc.setFont('helvetica','normal');
  doc.text('TABLE OF CONTENTS',PW/2,80,{align:'center'});

  let pg=2;
  SITS.forEach((sit,si)=>{
    const y=92+si*40;
    doc.setFillColor(22,27,34);doc.roundedRect(20,y-6,PW-40,34,2,2,'F');
    doc.setTextColor(139,32,53);doc.setFontSize(10);doc.setFont('helvetica','bold');
    doc.text(sit.toUpperCase(),26,y+2);
    plays.filter(p=>p.situation===sit).forEach((play,pi)=>{
      const lv={...LEVELS[play.level],label:play.levelLabel||LEVELS[play.level].label};const py=y+10+pi*7;
      doc.setTextColor(...hexToRgb(lv.dot));doc.setFontSize(7.5);
      doc.text('●',28,py);
      doc.setTextColor(200,210,220);doc.setFont('helvetica','normal');
      doc.text(play.title,35,py);
      doc.setTextColor(80,90,100);
      doc.text(`p.${pg}`,PW-20,py,{align:'right'});
      pg++;
    });
  });
  doc.setTextColor(48,54,61);doc.setFontSize(7);
  doc.text(`Generated ${new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})}`,PW/2,PH-8,{align:'center'});

  const offC=document.createElement('canvas');
  offC.width=380;offC.height=Math.round(380*105/68);
  const offCtx=offC.getContext('2d');

  for(let i=0;i<plays.length;i++){
    const play=plays[i];const lv=LEVELS[play.level];
    doc.addPage();
    doc.setFillColor(13,17,23);doc.rect(0,0,PW,PH,'F');
    doc.setFillColor(139,32,53);doc.rect(0,0,PW,3,'F');
    const[lr,lg,lb]=hexToRgb(lv.dot);
    doc.setFillColor(lr,lg,lb);doc.roundedRect(14,10,16,16,2,2,'F');
    doc.setTextColor(13,17,23);doc.setFont('helvetica','bold');doc.setFontSize(10);
    doc.text(String(i+1),22,21,{align:'center'});
    doc.setTextColor(230,237,243);doc.setFontSize(15);
    doc.text(play.title,36,19);
    doc.setFillColor(lr,lg,lb);
    const tw=doc.getTextWidth(play.situation)+8;
    doc.roundedRect(36,22,tw,6,1.5,1.5,'F');
    doc.setTextColor(13,17,23);doc.setFontSize(6);
    doc.text(play.situation.toUpperCase()+'  ·  '+lv.label.toUpperCase(),40,26.5);
    doc.setDrawColor(48,54,61);doc.setLineWidth(.3);doc.line(14,33,PW-14,33);

    renderOffCanvas(offCtx,offC.width,offC.height,play);
    const img=offC.toDataURL('image/png');
    const fW=82,fH=fW*(105/68);
    doc.addImage(img,'PNG',14,37,fW,fH);

    const ix=14+fW+8,iw=PW-ix-12;
    doc.setTextColor(139,148,158);doc.setFontSize(6);doc.setFont('helvetica','normal');
    doc.text('OBJECTIVE',ix,42);
    doc.setDrawColor(139,32,53);doc.setLineWidth(.25);doc.line(ix,43.5,ix+iw,43.5);
    doc.setTextColor(210,225,200);doc.setFontSize(8);doc.setFont('helvetica','bold');
    const gl=doc.splitTextToSize(play.goal,iw);doc.text(gl,ix,48);

    let ty=48+gl.length*5+5;
    doc.setTextColor(139,148,158);doc.setFontSize(6);doc.setFont('helvetica','normal');
    doc.text('STEPS',ix,ty);ty+=1.5;
    doc.setDrawColor(48,54,61);doc.setLineWidth(.25);doc.line(ix,ty,ix+iw,ty);ty+=5;
    play.steps.forEach((s,si)=>{
      doc.setTextColor(139,32,53);doc.setFontSize(7);doc.setFont('helvetica','bold');
      doc.text(String(si+1),ix,ty);
      doc.setTextColor(195,205,215);doc.setFont('helvetica','normal');
      const sl=doc.splitTextToSize(s.text,iw-7);doc.text(sl,ix+5,ty);
      ty+=sl.length*4.2+2;
    });
    ty+=3;
    doc.setTextColor(139,148,158);doc.setFontSize(6);doc.setFont('helvetica','normal');
    doc.text('KEY POINTS',ix,ty);ty+=1.5;
    doc.setDrawColor(48,54,61);doc.line(ix,ty,ix+iw,ty);ty+=5;
    play.keys.forEach(k=>{
      doc.setTextColor(139,32,53);doc.setFontSize(6.5);doc.text('▸',ix,ty);
      doc.setTextColor(165,175,185);doc.setFont('helvetica','normal');
      const kl=doc.splitTextToSize(k,iw-6);doc.text(kl,ix+5,ty);
      ty+=kl.length*4+2;
    });

    // legend below field
    const ly=37+fH+5;
    [{col:[139,32,53],label:'Our Team'},{col:[88,166,255],label:'Opponents'},
     {col:[255,255,255],label:'Ball'},{col:[192,192,192],label:'Pass/Move'},{col:[120,120,120],label:'Run'}
    ].forEach((item,li)=>{
      const lx=14+li*(fW/5);
      doc.setFillColor(...item.col);doc.circle(lx+2,ly+2,2,'F');
      doc.setTextColor(110,120,130);doc.setFontSize(5.5);
      doc.text(item.label,lx+6,ly+3.5);
    });
    doc.setTextColor(48,54,61);doc.setFontSize(7);
    doc.text(`${i+2}`,PW/2,PH-5,{align:'center'});
  }
  doc.save('soccer-set-piece-playbook.pdf');
}

window.addEventListener('load',()=>{
  buildInfoPanel();redraw();
});
window.addEventListener('resize',redraw);
