plays.push({
  id: 'ti-strong',
  situation: 'Throw-in',
  level: 'strong',
  side: 'offense',
  title: 'Throw-in — Forward Down the Line',
  goal: 'Always throw forward, never back. Throw the ball down the left line ahead of LM so she can run onto it.',
  steps: [
    { text: 'LB throws forward down the left line — throw it ahead of LM, not to her feet.' },
    { text: 'LM sprints forward to the ball and drives up the flank.' },
    { text: 'LCM supports just inside as a passing option.' }
  ],
  keys: [
    'Always throw forward — never back',
    'Throw down the line, not inside',
    'Throw ahead of the runner, not to where she is standing'
  ],
  playerData: {
    GK: {
      role: 'Hold your goal area and be ready if we lose the ball.',
      before: 'Stay in your goal.',
      during: 'Watch the play. Be ready if they attack.',
      tips: ['Stay in your goal', 'Be ready if we lose the ball']
    },
    LB: {
      role: 'Take the throw-in. Throw forward down the left line to LM.',
      before: 'Get to the sideline and find LM ahead of you on the left line.',
      during: 'Throw forward down the line — throw it ahead of LM so she can run onto it without stopping.',
      tips: ['Always throw forward', 'Throw ahead of LM, not to her feet', 'Down the line, not inside']
    },
    LCB: {
      role: 'Push up and hold your position near the other team\'s forwards.',
      before: 'Position close to the other team\'s forwards.',
      during: 'Hold your position and be ready to defend if we lose the ball.',
      tips: ['Push up near their forwards', 'Hold your shape', 'Be ready to defend']
    },
    RCB: {
      role: 'Push up close to the other team\'s forwards on the right.',
      before: 'Position close to their forwards on your side.',
      during: 'Hold your position. Be ready to defend.',
      tips: ['Stay close to their forwards', 'Hold the line', 'Be ready to defend']
    },
    RB: {
      role: 'Push up on the right flank near the other team\'s forwards.',
      before: 'Get into position wide right.',
      during: 'Hold your advanced position.',
      tips: ['Push up wide right', 'Be ready to defend or support']
    },
    LM: {
      role: 'You are the main target. The throw will land ahead of you — run to it.',
      before: 'Start moving forward along the left line before LB throws.',
      during: 'Sprint forward as LB throws. The ball will land ahead of you — run to it, do not wait.',
      tips: ['Start running before the throw', 'Run to where the ball will land', 'Do not wait for the ball']
    },
    LCM: {
      role: 'Support just inside as a backup option.',
      before: 'Position inside and ahead of the throw spot.',
      during: 'If LM is covered, be ready to receive. LB will throw it ahead of you too.',
      tips: ['Be a backup option for LB', 'Be ready to receive and go forward']
    },
    RCM: {
      role: 'Hold your midfield position and be ready to defend.',
      before: 'Stay in your central midfield spot.',
      during: 'Hold your position. Be ready to win the ball back.',
      tips: ['Stay central', 'Do not go forward', 'Be ready to defend']
    },
    RM: {
      role: 'Hold wide right and be ready if the ball switches.',
      before: 'Stay wide right.',
      during: 'Hold your position.',
      tips: ['Stay wide right', 'Do not come inside', 'Be ready if the ball switches']
    },
    LF: {
      role: 'Run down the left line ahead of LM. Be a second throw option.',
      before: 'Get on the left line ahead of LM and start moving forward.',
      during: 'Sprint forward as LB throws — if the ball comes to you, run onto it and attack.',
      tips: ['Start running before the throw', 'The ball will land ahead of you', 'Attack forward right away']
    },
    RF: {
      role: 'Hold your forward position on the right.',
      before: 'Stay ahead of midfielders on the right.',
      during: 'Hold your line.',
      tips: ['Stay ahead of midfield', 'Hold wide right', 'Be ready when the ball comes forward']
    }
  },
  elements: {
    players: [
      { x: 50, y: 95, color: OUR, label: 'GK' },
      { x: 36, y: 70, color: OUR, label: 'LCB' },
      { x: 62, y: 72, color: OUR, label: 'RCB' },
      { x: 82, y: 68, color: OUR, label: 'RB' },
      { x: 10, y: 54, color: OUR, label: 'LM' },
      { x: 36, y: 46, color: OUR, label: 'LCM' },
      { x: 58, y: 48, color: OUR, label: 'RCM' },
      { x: 80, y: 46, color: OUR, label: 'RM' },
      { x: 14, y: 44, color: OUR, label: 'LF' },
      { x: 62, y: 44, color: OUR, label: 'RF' },
      { x: -6, y: 62, color: OUR, label: 'LB' },
      { x: 50, y:  4, color: OPP, label: 'GK' },
      { x: 22, y: 18, color: OPP, label: 'LB' },
      { x: 38, y: 20, color: OPP, label: 'LCB' },
      { x: 60, y: 20, color: OPP, label: 'RCB' },
      { x: 78, y: 18, color: OPP, label: 'RB' },
      { x: 12, y: 52, color: OPP, label: 'LM' },
      { x: 36, y: 56, color: OPP, label: 'LCM' },
      { x: 58, y: 56, color: OPP, label: 'RCM' },
      { x: 76, y: 52, color: OPP, label: 'RM' },
      { x: 18, y: 68, color: OPP, label: 'LF' },
      { x: 62, y: 68, color: OPP, label: 'RF' },
      { x:  0, y: 61, color: BALL, label: '' }
    ],
    arrows: [
      { x1:  0, y1: 61, x2:  6, y2: 40, color: ARR,  style: 'solid' }, // throw leads LM — lands AHEAD of her
      { x1:  0, y1: 61, x2:  6, y2: 28, color: ARR,  style: 'dash' },  // throw leads LF — option 2
      { x1: 50, y1: 95, x2: 50, y2: 92, color: ARR2, style: 'dash' },  // GK holds
      { x1: 36, y1: 70, x2: 36, y2: 64, color: ARR2, style: 'dash' },  // LCB holds shape
      { x1: 62, y1: 72, x2: 62, y2: 66, color: ARR2, style: 'dash' },  // RCB holds shape
      { x1: 82, y1: 68, x2: 82, y2: 62, color: ARR2, style: 'dash' },  // RB holds
      { x1: 10, y1: 54, x2:  7, y2: 38, color: ARR2, style: 'solid' }, // LM SPRINTS to space ahead
      { x1: 36, y1: 46, x2: 32, y2: 36, color: ARR2, style: 'dash' },  // LCM supports
      { x1: 58, y1: 48, x2: 58, y2: 40, color: ARR2, style: 'dash' },  // RCM advances
      { x1: 80, y1: 46, x2: 80, y2: 38, color: ARR2, style: 'dash' },  // RM advances
      { x1: 14, y1: 44, x2:  7, y2: 26, color: ARR2, style: 'solid' }, // LF SPRINTS to space ahead
      { x1: 62, y1: 44, x2: 62, y2: 38, color: ARR2, style: 'dash' }   // RF holds forward
    ]
  }
});
