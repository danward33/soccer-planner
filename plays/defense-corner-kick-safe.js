plays.push({
  id: 'def-ck-strong',
  situation: 'Corner Kick',
  level: 'strong',
  side: 'defense',
  title: 'Defense Corner Kick — Compact Zonal Block',
  goal: 'Hold your zone and do not break the shape. LCB and RCB stay tight near goal to mark attackers. All four midfielders form a flat wall at the edge of the box — no one presses out. LF and RF hold near midfield ready to go.',
  steps: [
    { text: 'LCB and RCB take up tight positions close to goal, marking the attackers in the box. LB and RB cover the post areas.' },
    { text: 'All four midfielders hold a flat line at the edge of the penalty area — nobody breaks out of that line.' },
    { text: 'LF and RF stay near midfield. Do not come back into the box — you are the counter-attack outlet.' },
    { text: 'Win the ball and clear it long. The moment we clear, LF and RF go forward right away.' }
  ],
  keys: [
    'LCB and RCB stay deep near goal — mark the attackers tightly',
    'Midfield flat line holds — do not break the line to chase the ball',
    'LF and RF near midfield — do not come back into the box',
    'Clear it long — then LF and RF attack right away'
  ],
  playerData: {
    GK: {
      role: 'Own the 6-yard box — go and claim anything that comes into that area.',
      before: 'Position in the center of goal, a step or two off your line. Watch where the kicker is aiming.',
      during: 'If the ball comes toward you, go and get it with both hands high. If it goes far post, hold your position.',
      tips: ['Go for the ball early — do not wait', 'If you cannot catch it cleanly, punch it out beyond the box', 'Stay focused — do not get distracted by runners']
    },
    LB: {
      role: 'Cover the near-post zone — go to any ball delivered to that area.',
      before: 'Position between the near post and center. Your zone is the near-post area.',
      during: 'Go to any ball delivered near post. Head it away long, or let the goalkeeper take it.',
      tips: ['Go to the near-post ball first', 'Do not let anyone get a free header in your zone', 'If you clear, clear it long down the line']
    },
    LCB: {
      role: 'Stay tight near goal and mark your attacker. Win every header in your zone.',
      before: 'Position close to goal, goal-side of the attacker in your area. Stay between her and goal.',
      during: 'Go to any ball in your zone. Head it away with power — up and away from goal.',
      tips: ['Stay close to goal — do not step up', 'Head it away from goal, not across', 'Do not leave your mark to chase']
    },
    RCB: {
      role: 'Stay tight near goal and win every aerial challenge in your zone.',
      before: 'Position close to goal on the right-center. Be goal-side of your attacker.',
      during: 'Go to any ball in your zone. Head it away with power — up and away.',
      tips: ['Be aggressive — go to the ball early', 'Head it up and away', 'Do not let their players get free headers in your zone']
    },
    RB: {
      role: 'Cover the far-post zone — go to any ball delivered to that area.',
      before: 'Position between the far post and center. Your zone is the far-post area.',
      during: 'Go to any ball pulled back to the far post. Head or kick it away — long down the right flank.',
      tips: ['Cover the far-post zone', 'Go to the ball — do not be passive', 'If you clear, clear it long out of danger']
    },
    LM: {
      role: 'Hold the edge of the box as part of the midfield wall. Do not press forward.',
      before: 'Position at the top-left of the penalty area. Stay in the wall line with the other midfielders.',
      during: 'Hold your position. If a second ball drops to you at the edge of the box, win it and play forward.',
      tips: ['Hold the line — do not break forward', 'Be first to any ball that drops to the edge of the box', 'Win it and play it forward quickly']
    },
    LCM: {
      role: 'Hold the midfield wall line — win any second ball that drops to you.',
      before: 'Position at the top of the penalty area, center-left. Stay level with LM.',
      during: 'Win any ball that drops to you. Do not go deeper into the box.',
      tips: ['Stay at the edge of the penalty area — hold the line', 'Win second balls and play forward', 'Do not go into the box']
    },
    RCM: {
      role: 'Hold the midfield wall line on the right. Mirror LCM.',
      before: 'Position at the top of the penalty area, center-right. Level with the other midfielders.',
      during: 'Win second balls at the edge of the box. Clear anything that drops to you.',
      tips: ['Stay in your area — do not drift into the box', 'Win second balls', 'Play it long or wide when you win it']
    },
    RM: {
      role: 'Hold the right edge of the midfield wall. Do not break forward.',
      before: 'Position at the top-right of the penalty area. Mirror LM on the other side.',
      during: 'Hold the wall line. Win any ball that drops your way.',
      tips: ['Hold the wall — do not press forward', 'Win second balls at the top of the box', 'Play it forward quickly']
    },
    LF: {
      role: 'Hold near midfield — you are the counter-attack outlet on the left.',
      before: 'Stay near midfield on the left side. Do not come back into the box.',
      during: 'The moment we clear, receive the ball and go forward right away.',
      tips: ['Stay near midfield — do not come back', 'Be the first counter-attack option', 'Run onto the clearance right away']
    },
    RF: {
      role: 'Hold near midfield — be ready to receive the clearance and go.',
      before: 'Stay near midfield on the right side. Do not come back into the box.',
      during: 'If we clear the ball, make your run. Be the outlet to launch a fast counter-attack.',
      tips: ['Stay near midfield — be the counter outlet', 'Run onto the clearance', 'Move forward right away — do not wait']
    }
  },
  elements: {
    players: [
      { x: 50, y: 97, color: OUR, label: 'GK' },
      { x: 22, y: 87, color: OUR, label: 'LB' },
      { x: 38, y: 92, color: OUR, label: 'LCB' },
      { x: 62, y: 92, color: OUR, label: 'RCB' },
      { x: 78, y: 87, color: OUR, label: 'RB' },
      { x: 26, y: 80, color: OUR, label: 'LM' },
      { x: 40, y: 80, color: OUR, label: 'LCM' },
      { x: 60, y: 80, color: OUR, label: 'RCM' },
      { x: 74, y: 80, color: OUR, label: 'RM' },
      { x: 16, y: 56, color: OUR, label: 'LF' },
      { x: 84, y: 56, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 18, y: 22, color: OPP, label: 'LB' },
      { x: 36, y: 20, color: OPP, label: 'LCB' },
      { x: 64, y: 20, color: OPP, label: 'RCB' },
      { x: 82, y: 22, color: OPP, label: 'RB' },
      { x: 26, y: 82, color: OPP, label: 'LM' },
      { x: 42, y: 88, color: OPP, label: 'LCM' },
      { x: 58, y: 91, color: OPP, label: 'RCM' },
      { x: 72, y: 86, color: OPP, label: 'RM' },
      { x: 40, y: 93, color: OPP, label: 'LF' },
      { x: 62, y: 91, color: OPP, label: 'RF' },
      { x: 100, y: 100, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: corner kick delivery into the box
      { x1: 100, y1: 100, x2: 46, y2: 89, color: OPP,  style: 'solid' },
      // OPP: LF runner attacks near post
      { x1: 40,  y1: 93,  x2: 36, y2: 97, color: OPP,  style: 'dash' },
      // OPP: RF runner attacks far post
      { x1: 62,  y1: 91,  x2: 62, y2: 97, color: OPP,  style: 'dash' },
      // OPP: LCM crashes to penalty spot
      { x1: 42,  y1: 88,  x2: 42, y2: 83, color: OPP,  style: 'dash' },
      // OPP: RCM crashes to back post
      { x1: 58,  y1: 91,  x2: 54, y2: 96, color: OPP,  style: 'dash' },
      // OUR: GK steps out to claim
      { x1: 50,  y1: 97,  x2: 50, y2: 92, color: ARR,  style: 'solid' },
      // OUR: LB covers near-post area
      { x1: 22,  y1: 87,  x2: 28, y2: 92, color: ARR,  style: 'solid' },
      // OUR: RB covers far-post area
      { x1: 78,  y1: 87,  x2: 72, y2: 92, color: ARR,  style: 'solid' },
      // OUR: midfield wall holds — LM and RM anchor the line
      { x1: 26,  y1: 80,  x2: 26, y2: 78, color: ARR2, style: 'dash' },
      { x1: 74,  y1: 80,  x2: 74, y2: 78, color: ARR2, style: 'dash' },
      // OUR: LF/RF hold near midfield ready for counter
      { x1: 16,  y1: 56,  x2: 16, y2: 50, color: ARR2, style: 'dash' },
      { x1: 84,  y1: 56,  x2: 84, y2: 50, color: ARR2, style: 'dash' }
    ]
  }
});
