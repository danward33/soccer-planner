plays.push({
  id: 'ti-weaker',
  situation: 'Throw-in',
  level: 'weaker',
  side: 'offense',
  title: 'Throw-in — Attack the Box',
  goal: 'Throw the ball forward down the right line into the box. RF runs forward — throw it ahead of her so she can attack the goal.',
  steps: [
    { text: 'RM takes the throw from the right. Throws forward to RF running into the box.' },
    { text: 'RF drives into the box and crosses or shoots right away.' },
    { text: 'LF rushes to the near post as soon as the ball is thrown.' }
  ],
  keys: [
    'Throw forward and down the line — into the box, not back',
    'Throw ahead of the runner so she receives it moving',
    'Box runners go as the throw is released, not when the ball arrives'
  ],
  playerData: {
    GK: {
      role: 'Hold your goal area and be ready if we lose the ball.',
      before: 'Stay in your goal.',
      during: 'Watch the play.',
      tips: ['Stay in your goal', 'Be ready if we lose it']
    },
    LB: {
      role: 'Hold your defensive position. Be ready to defend.',
      before: 'Stay back left.',
      during: 'Hold your shape.',
      tips: ['Stay back', 'Hold your zone', 'Be ready to defend']
    },
    LCB: {
      role: 'Hold the defensive line.',
      before: 'Stay in your central defensive position.',
      during: 'Hold your line.',
      tips: ['Stay in your zone', 'Hold the line', 'Be ready for a counter']
    },
    RCB: {
      role: 'Hold the defensive line.',
      before: 'Stay in your central spot.',
      during: 'Hold your position.',
      tips: ['Stay in your zone', 'Hold the line', 'Do not go forward']
    },
    LM: {
      role: 'Hold your midfield position on the left.',
      before: 'Stay wide left in midfield.',
      during: 'Hold your position. Be ready if the ball switches left.',
      tips: ['Stay wide left', 'Do not crowd the box', 'Be ready if the ball switches']
    },
    LCM: {
      role: 'Hold your midfield position and support the attack.',
      before: 'Stay in central midfield.',
      during: 'Hold your position. Be ready to shoot any rebound.',
      tips: ['Stay in midfield', 'Be ready to attack any rebound', 'Support from the center']
    },
    RCM: {
      role: 'Run down the right line as a second throw option.',
      before: 'Get on the right line ahead of RM and start moving forward.',
      during: 'Sprint forward as the throw is released — if RM throws to you, run onto it and attack.',
      tips: ['Start running before the throw', 'Run to where the ball will land', 'Attack forward on receiving']
    },
    RM: {
      role: 'Take the throw. Throw forward to RF or RCM running ahead of you.',
      before: 'Get to the sideline and watch RF and RCM start their runs.',
      during: 'Throw forward and ahead of the runner — she must receive it while already moving.',
      tips: ['Throw ahead of the runner', 'The runner comes to the ball', 'Never throw backward']
    },
    LF: {
      role: 'Rush to the near post as soon as the throw is released.',
      before: 'Position inside the box at the near post.',
      during: 'As soon as RM releases the ball, go hard to the near post and finish anything that comes.',
      tips: ['Go as the throw is released', 'Attack the near post', 'Shoot first time']
    },
    RF: {
      role: 'You are the main target. Start moving forward before RM throws.',
      before: 'Get on the right line inside the box and start moving forward before RM throws.',
      during: 'Sprint forward as the throw is released — run to where the ball will land. Do not wait.',
      tips: ['Start moving before the throw', 'Run to the space', 'Shoot or cross right away']
    }
  },
  elements: {
    players: [
      { x: 50, y: 95, color: OUR, label: 'GK' },
      { x: 14, y: 46, color: OUR, label: 'LB' },
      { x: 38, y: 46, color: OUR, label: 'LCB' },
      { x: 62, y: 44, color: OUR, label: 'RCB' },
      { x: 82, y: 38, color: OUR, label: 'RB' },
      { x: 22, y: 26, color: OUR, label: 'LM' },
      { x: 42, y: 26, color: OUR, label: 'LCM' },
      { x: 84, y: 24, color: OUR, label: 'RCM' },
      { x: 80, y: 12, color: OUR, label: 'RF' },
      { x: 34, y: 10, color: OUR, label: 'LF' },
      { x: 106, y: 18, color: OUR, label: 'RM' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 26, y: 12, color: OPP, label: 'LB' },
      { x: 40, y: 14, color: OPP, label: 'LCB' },
      { x: 60, y: 14, color: OPP, label: 'RCB' },
      { x: 74, y: 12, color: OPP, label: 'RB' },
      { x: 20, y: 26, color: OPP, label: 'LM' },
      { x: 40, y: 30, color: OPP, label: 'LCM' },
      { x: 60, y: 30, color: OPP, label: 'RCM' },
      { x: 80, y: 22, color: OPP, label: 'RM' },
      { x: 34, y: 44, color: OPP, label: 'LF' },
      { x: 62, y: 44, color: OPP, label: 'RF' },
      { x: 100, y: 17, color: BALL, label: '' }
    ],
    arrows: [
      { x1: 100, y1: 17, x2: 82, y2:  2, color: ARR,  style: 'solid' }, // throw leads RF — lands AHEAD of her
      { x1: 100, y1: 17, x2: 90, y2: 10, color: ARR,  style: 'dash' },  // throw leads RCM — option 2
      { x1: 50, y1: 95, x2: 50, y2: 92, color: ARR2, style: 'dash' },  // GK holds
      { x1: 14, y1: 46, x2: 14, y2: 40, color: ARR2, style: 'dash' },  // LB holds shape
      { x1: 38, y1: 46, x2: 38, y2: 40, color: ARR2, style: 'dash' },  // LCB holds shape
      { x1: 62, y1: 44, x2: 62, y2: 38, color: ARR2, style: 'dash' },  // RCB holds shape
      { x1: 22, y1: 26, x2: 22, y2: 20, color: ARR2, style: 'dash' },  // LM holds
      { x1: 42, y1: 26, x2: 42, y2: 18, color: ARR2, style: 'dash' },  // LCM supports
      { x1: 84, y1: 24, x2: 88, y2:  8, color: ARR2, style: 'solid' }, // RCM SPRINTS to space ahead
      { x1: 80, y1: 12, x2: 80, y2:  2, color: ARR2, style: 'solid' }, // RF SPRINTS to space ahead
      { x1: 34, y1: 10, x2: 36, y2:  4, color: ARR2, style: 'dash' }   // LF near post
    ]
  }
});
