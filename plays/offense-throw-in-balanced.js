plays.push({
  id: 'ti-equal',
  situation: 'Throw-in',
  level: 'equal',
  side: 'offense',
  title: 'Throw-in — Drive Forward',
  goal: 'Throw the ball forward down the left line. LM will run forward — throw it ahead of her so she receives it at full speed.',
  steps: [
    { text: 'LB throws forward down the left line — throw it ahead of LM, not to her feet.' },
    { text: 'LM drives forward without stopping after she receives.' },
    { text: 'LF makes a forward run to give LM a passing option if the line is blocked.' }
  ],
  keys: [
    'Throw ahead of the runner — not to her feet',
    'Never throw sideways or backward',
    'LM should be moving forward when the ball arrives'
  ],
  playerData: {
    GK: {
      role: 'Hold your goal area and be ready if we lose the ball.',
      before: 'Stay in your goal.',
      during: 'Watch the play.',
      tips: ['Stay in your goal', 'Be ready if we lose it']
    },
    LB: {
      role: 'Take the throw. Throw forward down the line to LM.',
      before: 'Get to the sideline and find LM in space ahead on the left.',
      during: 'Throw forward down the line — throw it ahead of LM so she receives it already moving forward.',
      tips: ['Always throw forward', 'Throw ahead of LM', 'Down the line, not inside']
    },
    LCB: {
      role: 'Push up near the other team\'s forwards.',
      before: 'Position close to their forwards.',
      during: 'Hold your advanced position. Stay with your runner if we lose the ball.',
      tips: ['Push up near their forwards', 'Hold your shape']
    },
    RCB: {
      role: 'Push up near the other team\'s forwards on the right.',
      before: 'Position close to their forwards on your side.',
      during: 'Hold your position. Be ready to defend.',
      tips: ['Stay close to their forwards', 'Hold the line']
    },
    RB: {
      role: 'Push up wide right near the other team\'s forwards.',
      before: 'Get wide right.',
      during: 'Hold your advanced position.',
      tips: ['Push up wide right', 'Be ready to support or defend']
    },
    LM: {
      role: 'You are the main target. Start moving forward before LB throws.',
      before: 'Get on the left line and start moving forward before LB throws.',
      during: 'Sprint forward as the throw is released. Run to where the ball will land — do not wait for it.',
      tips: ['Start moving before the throw', 'Run to the space, not where you are standing', 'Drive forward without stopping']
    },
    LCM: {
      role: 'Support inside as a backup option.',
      before: 'Position inside and just ahead of LB.',
      during: 'If LM is covered, be ready to receive. Take one touch forward and keep moving.',
      tips: ['Be a backup for LB', 'Receive and go forward right away']
    },
    RCM: {
      role: 'Hold your midfield position and be ready to defend.',
      before: 'Stay in your central midfield spot.',
      during: 'Hold your position.',
      tips: ['Stay central', 'Do not go forward', 'Be ready to defend']
    },
    RM: {
      role: 'Hold wide right and be ready.',
      before: 'Stay wide right.',
      during: 'Hold your position.',
      tips: ['Stay wide right', 'Do not come inside', 'Be ready if the ball comes your way']
    },
    LF: {
      role: 'Run down the left line ahead of LM. Be a second throw option.',
      before: 'Get on the left line ahead of LM and start moving forward.',
      during: 'Sprint forward as the throw is released. If LB throws to you, run onto it and attack.',
      tips: ['Start running before the throw', 'Run to the space', 'Attack forward on receiving']
    },
    RF: {
      role: 'Hold well ahead of midfield on the right.',
      before: 'Stay ahead of midfielders on the right.',
      during: 'Hold your line.',
      tips: ['Stay ahead of midfield', 'Hold wide right', 'Be a target going forward']
    }
  },
  elements: {
    players: [
      { x: 50, y: 95, color: OUR, label: 'GK' },
      { x: 34, y: 62, color: OUR, label: 'LCB' },
      { x: 62, y: 60, color: OUR, label: 'RCB' },
      { x: 84, y: 64, color: OUR, label: 'RB' },
      { x: 10, y: 44, color: OUR, label: 'LM' },
      { x: 36, y: 46, color: OUR, label: 'LCM' },
      { x: 60, y: 44, color: OUR, label: 'RCM' },
      { x: 82, y: 42, color: OUR, label: 'RM' },
      { x: 12, y: 32, color: OUR, label: 'LF' },
      { x: 64, y: 30, color: OUR, label: 'RF' },
      { x: -6, y: 52, color: OUR, label: 'LB' },
      { x: 50, y:  4, color: OPP, label: 'GK' },
      { x: 22, y: 18, color: OPP, label: 'LB' },
      { x: 38, y: 20, color: OPP, label: 'LCB' },
      { x: 60, y: 20, color: OPP, label: 'RCB' },
      { x: 78, y: 18, color: OPP, label: 'RB' },
      { x: 12, y: 44, color: OPP, label: 'LM' },
      { x: 36, y: 48, color: OPP, label: 'LCM' },
      { x: 58, y: 48, color: OPP, label: 'RCM' },
      { x: 74, y: 44, color: OPP, label: 'RM' },
      { x: 20, y: 60, color: OPP, label: 'LF' },
      { x: 62, y: 60, color: OPP, label: 'RF' },
      { x:  0, y: 51, color: BALL, label: '' }
    ],
    arrows: [
      { x1:  0, y1: 51, x2:  6, y2: 28, color: ARR,  style: 'solid' }, // throw leads LM — lands AHEAD of her
      { x1:  0, y1: 51, x2:  6, y2: 16, color: ARR,  style: 'dash' },  // throw leads LF — option 2
      { x1: 50, y1: 95, x2: 50, y2: 92, color: ARR2, style: 'dash' },  // GK holds
      { x1: 34, y1: 62, x2: 34, y2: 56, color: ARR2, style: 'dash' },  // LCB holds shape
      { x1: 62, y1: 60, x2: 62, y2: 54, color: ARR2, style: 'dash' },  // RCB holds shape
      { x1: 84, y1: 64, x2: 84, y2: 58, color: ARR2, style: 'dash' },  // RB holds
      { x1: 10, y1: 44, x2:  7, y2: 24, color: ARR2, style: 'solid' }, // LM SPRINTS to space ahead
      { x1: 36, y1: 46, x2: 32, y2: 34, color: ARR2, style: 'dash' },  // LCM supports
      { x1: 60, y1: 44, x2: 60, y2: 38, color: ARR2, style: 'dash' },  // RCM holds
      { x1: 82, y1: 42, x2: 82, y2: 36, color: ARR2, style: 'dash' },  // RM holds
      { x1: 12, y1: 32, x2:  7, y2: 14, color: ARR2, style: 'solid' }, // LF SPRINTS to space ahead
      { x1: 64, y1: 30, x2: 64, y2: 24, color: ARR2, style: 'dash' }   // RF holds forward
    ]
  }
});
