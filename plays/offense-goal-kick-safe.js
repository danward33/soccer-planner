plays.push({
  id: 'gk-strong',
  situation: 'Goal Kick',
  level: 'strong',
  side: 'offense',
  title: 'Goal Kick — Safe Recycle',
  goal: 'Keep the ball on the outside. Pass short down the left flank — no passes through the middle.',
  steps: [
    { text: 'GK passes short to LB on the left flank — start the play on the outside.' },
    { text: 'LB passes forward up the left line to LM.' },
    { text: 'Keep short passes moving forward — stay wide.' }
  ],
  keys: [
    'Always start wide — pass to LB first',
    'Never kick through the middle of our own end',
    'Once past the pressure, drive forward'
  ],
  playerData: {
    GK: {
      role: 'Take the goal kick. Pass short to LB on the left side.',
      before: 'Look at LB — make sure she is open and ready before you kick.',
      during: 'Pass to LB on the left flank. Keep it to the outside.',
      tips: ['Pass to LB first', 'Never kick through the middle', 'Wait until LB is ready']
    },
    LB: {
      role: 'You receive first. The play starts with you on the left.',
      before: 'Move wide on the left and give GK a clear target.',
      during: 'Receive from GK and pass forward to LM. If LM is covered, hold the ball.',
      tips: ['Stay wide', 'Pass forward to LM', 'Hold the ball if you are under pressure']
    },
    LCB: {
      role: 'Hold your position while the play builds on the left.',
      before: 'Stay in place. Be ready if LB needs to pass back.',
      during: 'Hold your spot. Stay in the defensive position.',
      tips: ['Do not chase the ball', 'Stay in your defensive spot', 'Cover behind LB']
    },
    RCB: {
      role: 'Hold your position and watch the other team\'s forwards.',
      before: 'Stay on the right side of defense.',
      during: 'Hold your spot. Watch for the other team trying to break forward.',
      tips: ['Stay in your zone', 'Do not drift left', 'Watch the other team\'s forwards']
    },
    RB: {
      role: 'Hold your position on the right side.',
      before: 'Stay wide right and be ready.',
      during: 'Hold your spot. Do not go forward on this play.',
      tips: ['Stay on the right', 'Do not go forward', 'Be ready if the ball switches sides']
    },
    LM: {
      role: 'You receive second. The ball is coming to you from LB.',
      before: 'Move into open space on the left ahead of LB and be ready.',
      during: 'Receive from LB and drive forward. Keep moving.',
      tips: ['Move into space before the ball arrives', 'Take your first touch forward', 'Give LB a clear target up the line']
    },
    LCM: {
      role: 'Be ready as a third option if LM plays inside.',
      before: 'Position just inside and ahead of LM.',
      during: 'If LM passes to you, take one touch forward and keep moving.',
      tips: ['Stay just inside of LM', 'Be ready to receive and go forward', 'Do not go too far forward']
    },
    RCM: {
      role: 'Hold your midfield spot and be ready to defend.',
      before: 'Stay central and ready to defend if we lose the ball.',
      during: 'Hold your position. Do not go wide.',
      tips: ['Stay central', 'Do not go forward', 'Be ready to defend']
    },
    RM: {
      role: 'Hold your right-side position. Be an option if the ball switches.',
      before: 'Stay wide right and be visible.',
      during: 'Hold your position. Do not come inside.',
      tips: ['Stay wide right', 'Do not come inside', 'Be ready if the ball switches sides']
    },
    LF: {
      role: 'Hold your forward position. Be ready when the ball moves forward.',
      before: 'Stay up front. Do not drop back into midfield.',
      during: 'Stay forward. If the ball breaks through, be ready to receive.',
      tips: ['Stay high', 'Do not drop deep', 'Be a target if the ball reaches midfield']
    },
    RF: {
      role: 'Hold your forward position on the right.',
      before: 'Stay in your forward spot on the right.',
      during: 'Hold your line. Be ready if the ball reaches midfield.',
      tips: ['Stay up front', 'Hold your position', 'Be a target if we push forward']
    }
  },
  elements: {
    players: [
      { x: 44, y: 97, color: OUR, label: 'GK' },
      { x: 10, y: 82, color: OUR, label: 'LB' },
      { x: 35, y: 74, color: OUR, label: 'LCB' },
      { x: 62, y: 74, color: OUR, label: 'RCB' },
      { x: 87, y: 82, color: OUR, label: 'RB' },
      { x:  8, y: 65, color: OUR, label: 'LM' },
      { x: 36, y: 64, color: OUR, label: 'LCM' },
      { x: 62, y: 64, color: OUR, label: 'RCM' },
      { x: 87, y: 65, color: OUR, label: 'RM' },
      { x: 32, y: 57, color: OUR, label: 'LF' },
      { x: 66, y: 57, color: OUR, label: 'RF' },
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
      { x1: 44, y1: 95, x2: 10, y2: 82, color: ARR,  style: 'dash' }, // GK → LB
      { x1: 10, y1: 82, x2:  8, y2: 65, color: ARR,  style: 'dash' }, // LB → LM
      { x1:  8, y1: 65, x2: 36, y2: 64, color: ARR,  style: 'dash' }, // LM → LCM
      // Player movement (short = slow, long = fast)
      { x1: 10, y1: 82, x2: 10, y2: 73, color: ARR2, style: 'dash' }, // LB follows up
      { x1: 35, y1: 74, x2: 35, y2: 67, color: ARR2, style: 'dash' }, // LCB slight forward
      { x1: 62, y1: 74, x2: 62, y2: 68, color: ARR2, style: 'dash' }, // RCB holds shape
      { x1: 87, y1: 82, x2: 87, y2: 76, color: ARR2, style: 'dash' }, // RB slight forward
      { x1:  8, y1: 65, x2:  6, y2: 55, color: ARR2, style: 'dash' }, // LM continues
      { x1: 36, y1: 64, x2: 36, y2: 56, color: ARR2, style: 'dash' }, // LCM moves forward
      { x1: 62, y1: 64, x2: 62, y2: 58, color: ARR2, style: 'dash' }, // RCM holds
      { x1: 87, y1: 65, x2: 87, y2: 59, color: ARR2, style: 'dash' }, // RM holds
      { x1: 32, y1: 57, x2: 30, y2: 46, color: ARR2, style: 'dash' }, // LF slight forward
      { x1: 66, y1: 57, x2: 68, y2: 46, color: ARR2, style: 'dash' }  // RF slight forward
    ]
  }
});
