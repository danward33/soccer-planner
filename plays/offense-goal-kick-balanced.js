plays.push({
  id: 'gk-equal',
  situation: 'Goal Kick',
  level: 'equal',
  side: 'offense',
  title: 'Goal Kick — Switch & Sprint',
  goal: 'Pass left first to pull the defense that way, then quickly switch the ball to the open right side. Switch from midfield, not near our own goal.',
  steps: [
    { text: 'GK passes short to LB on the left — pull the defense to that side.' },
    { text: 'LB passes forward to LCM in the middle.' },
    { text: 'LCM switches the ball to RM on the right flank — RM sprints forward onto it.' }
  ],
  keys: [
    'Switch from midfield only — never from near our own goal',
    'RM should start moving before the ball is switched',
    'RM\'s first touch goes forward, not sideways'
  ],
  playerData: {
    GK: {
      role: 'Take the goal kick. Pass short to LB on the left.',
      before: 'Look at LB — wait until she is ready.',
      during: 'Pass to LB on the left to draw the defense left and open space on the right.',
      tips: ['Pass to LB first', 'Do not kick long', 'Wait for LB to be ready']
    },
    LB: {
      role: 'Receive from GK and pass forward to LCM.',
      before: 'Stay wide on the left and be ready to receive.',
      during: 'Receive and quickly pass forward to LCM in the middle.',
      tips: ['Receive and pass forward fast', 'Do not hold the ball too long', 'Draw the defense to your side']
    },
    LCB: {
      role: 'Hold your defensive position while the play builds.',
      before: 'Stay in place. Be ready if LB needs to pass back.',
      during: 'Hold your position. Cover behind LB.',
      tips: ['Do not chase the ball', 'Stay in the center', 'Cover if LB goes forward']
    },
    RCB: {
      role: 'Hold your position and watch the other team\'s forwards.',
      before: 'Stay in your spot.',
      during: 'Hold your position. Be ready to defend if we lose the ball.',
      tips: ['Stay in your zone', 'Watch the other team\'s forwards', 'Do not drift left']
    },
    RB: {
      role: 'Hold your position on the right and support RM if needed.',
      before: 'Stay wide right and be ready.',
      during: 'Hold your spot — you may move forward to support RM if she gets the ball.',
      tips: ['Stay wide right', 'Be ready to support RM', 'Do not come inside']
    },
    LM: {
      role: 'Hold your left-side position. Be a backup option for LB.',
      before: 'Stay on the left flank.',
      during: 'Hold your position — on this play the ball goes left then switches right.',
      tips: ['Stay wide left', 'Do not run forward too early', 'Be a backup for LB']
    },
    LCM: {
      role: 'You are the key link — receive from LB and switch the ball to RM on the right.',
      before: 'Position yourself in midfield so LB has a clear pass.',
      during: 'Receive from LB and switch the ball to RM on the right — one or two touches.',
      tips: ['Look for RM before the ball arrives', 'Switch right away', 'Do not hold it']
    },
    RCM: {
      role: 'Hold your midfield position and be ready to defend.',
      before: 'Stay central.',
      during: 'Hold your position. Be ready to win the ball back.',
      tips: ['Stay central', 'Cover behind the switch', 'Be ready if it breaks down']
    },
    RM: {
      role: 'You are the target of the switch — attack the open space on the right.',
      before: 'Move wide right and be ready — do not run forward too early.',
      during: 'When LCM switches the ball, sprint onto it and take your first touch forward.',
      tips: ['Do not run too early — wait for the switch', 'First touch forward', 'Attack right away']
    },
    LF: {
      role: 'Hold your forward position. Run into the box when RM attacks.',
      before: 'Stay forward on the left.',
      during: 'Run into the box when RM gets the ball.',
      tips: ['Stay forward', 'Run into the box when RM gets the ball', 'Go to the near post']
    },
    RF: {
      role: 'Run forward to give RM more options.',
      before: 'Position ahead of RM and be ready to run.',
      during: 'Sprint forward when RM receives — attack the far post.',
      tips: ['Run forward when the switch happens', 'Attack the far post', 'Keep running']
    }
  },
  elements: {
    players: [
      { x: 44, y: 97, color: OUR, label: 'GK' },
      { x: 10, y: 82, color: OUR, label: 'LB' },
      { x: 35, y: 74, color: OUR, label: 'LCB' },
      { x: 62, y: 74, color: OUR, label: 'RCB' },
      { x: 87, y: 82, color: OUR, label: 'RB' },
      { x: 10, y: 65, color: OUR, label: 'LM' },
      { x: 36, y: 64, color: OUR, label: 'LCM' },
      { x: 62, y: 64, color: OUR, label: 'RCM' },
      { x: 87, y: 62, color: OUR, label: 'RM' },
      { x: 34, y: 57, color: OUR, label: 'LF' },
      { x: 64, y: 57, color: OUR, label: 'RF' },
      { x: 50, y:  4, color: OPP, label: 'GK' },
      { x: 12, y: 52, color: OPP, label: 'LB' },
      { x: 36, y: 52, color: OPP, label: 'LCB' },
      { x: 62, y: 52, color: OPP, label: 'RCB' },
      { x: 86, y: 52, color: OPP, label: 'RB' },
      { x:  8, y: 65, color: OPP, label: 'LM' },
      { x: 36, y: 65, color: OPP, label: 'LCM' },
      { x: 62, y: 65, color: OPP, label: 'RCM' },
      { x: 86, y: 65, color: OPP, label: 'RM' },
      { x: 30, y: 75, color: OPP, label: 'LF' },
      { x: 68, y: 75, color: OPP, label: 'RF' },
      { x: 44, y: 95, color: BALL, label: '' }
    ],
    arrows: [
      // Ball passes
      { x1: 44, y1: 95, x2: 10, y2: 82, color: ARR,  style: 'dash' },  // GK → LB
      { x1: 10, y1: 82, x2: 36, y2: 64, color: ARR,  style: 'dash' },  // LB → LCM
      { x1: 36, y1: 64, x2: 87, y2: 62, color: ARR,  style: 'solid' }, // LCM switch → RM
      // Player movement (short = slow, long = fast)
      { x1: 10, y1: 82, x2: 10, y2: 72, color: ARR2, style: 'dash' },  // LB follows up (10)
      { x1: 35, y1: 74, x2: 35, y2: 68, color: ARR2, style: 'dash' },  // LCB slight (6)
      { x1: 62, y1: 74, x2: 62, y2: 68, color: ARR2, style: 'dash' },  // RCB holds (6)
      { x1: 87, y1: 82, x2: 87, y2: 68, color: ARR2, style: 'dash' },  // RB pushes up (14)
      { x1: 10, y1: 65, x2: 10, y2: 59, color: ARR2, style: 'dash' },  // LM slight (6)
      { x1: 36, y1: 64, x2: 36, y2: 57, color: ARR2, style: 'dash' },  // LCM follows (7)
      { x1: 62, y1: 64, x2: 62, y2: 58, color: ARR2, style: 'dash' },  // RCM holds (6)
      { x1: 87, y1: 62, x2: 92, y2: 38, color: ARR,  style: 'solid' }, // RM SPRINTS (24)
      { x1: 34, y1: 57, x2: 30, y2: 32, color: ARR2, style: 'dash' },  // LF runs into box
      { x1: 64, y1: 57, x2: 70, y2: 28, color: ARR,  style: 'dash' }   // RF far post
    ]
  }
});
