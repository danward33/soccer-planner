plays.push({
  id: 'gk-weaker',
  situation: 'Goal Kick',
  level: 'weaker',
  side: 'offense',
  title: 'Goal Kick — Direct & Attack',
  goal: 'Kick the ball long and wide to LM on the left. Once she has it, everyone pushes toward the goal.',
  steps: [
    { text: 'GK kicks one long ball out wide to LM on the left flank.' },
    { text: 'LM takes it forward right away — no stopping.' },
    { text: 'Both forwards and RM flood the box — be ready for a cross.' }
  ],
  keys: [
    'Kick it wide to the outside — not up the middle',
    'LM needs to be in open space before GK kicks',
    'Three players should be running into the box when the ball arrives'
  ],
  playerData: {
    GK: {
      role: 'Take the goal kick. Kick long to LM on the left flank.',
      before: 'Wait until LM is in open space before you kick.',
      during: 'Strike a long ball out wide to LM on the left. Hit it with pace so she can run onto it.',
      tips: ['Wait until LM is free', 'Aim to the space ahead of LM', 'Do not kick through the middle']
    },
    LB: {
      role: 'Hold your defensive position. Stay back.',
      before: 'Stay in the defensive line — do not follow LM forward.',
      during: 'Hold your spot. Be ready to defend on the left if we lose the ball.',
      tips: ['Stay back', 'Do not go forward', 'Cover if LM goes forward']
    },
    LCB: {
      role: 'Hold the defensive line.',
      before: 'Stay in your central position.',
      during: 'Hold your line. Be ready to defend if we lose the ball.',
      tips: ['Stay in your zone', 'Watch for the other team attacking', 'Do not push forward']
    },
    RCB: {
      role: 'Hold the defensive line.',
      before: 'Stay in your central position on the right.',
      during: 'Hold your position — three players are going forward so defense must stay.',
      tips: ['Stay in your zone', 'Keep the shape', 'Be ready if we lose it']
    },
    RB: {
      role: 'Hold your position on the right flank.',
      before: 'Stay wide right.',
      during: 'Hold your spot. Do not push forward.',
      tips: ['Stay back right', 'Do not go forward', 'Cover the right side']
    },
    LM: {
      role: 'You are the main target — receive the long ball and attack right away.',
      before: 'Get into open space on the left before GK kicks.',
      during: 'Sprint onto the long ball from GK and take your first touch forward — attack right away.',
      tips: ['Be in open space before GK kicks', 'First touch forward', 'Attack right away — no hesitation']
    },
    LCM: {
      role: 'Hold your midfield position and be ready to support LM.',
      before: 'Stay in midfield.',
      during: 'Hold your spot and be ready to support LM or defend if we lose the ball.',
      tips: ['Stay in midfield', 'Do not go forward too early', 'Support LM if she needs you']
    },
    RCM: {
      role: 'Hold midfield and be ready to defend.',
      before: 'Stay central.',
      during: 'Hold your position. Be ready to defend if the ball is lost.',
      tips: ['Stay central', 'Be ready to defend', 'Do not chase the ball wide']
    },
    RM: {
      role: 'Run to the far post when LM gets the ball.',
      before: 'Position on the right and get ready to run into the box.',
      during: 'When LM gets the ball, run hard to the far post — be ready for a cross.',
      tips: ['Run to the far post when LM gets the ball', 'Time your run', 'Attack the cross']
    },
    LF: {
      role: 'Sprint into the box when LM attacks. Go to the near post.',
      before: 'Stay forward and be ready to sprint into the box.',
      during: 'When LM receives, sprint to the near post and be ready to finish.',
      tips: ['Go to the near post', 'Arrive as the ball arrives', 'Be ready to shoot']
    },
    RF: {
      role: 'Sprint into the box on the far side.',
      before: 'Stay forward on the right side.',
      during: 'Sprint into the box when LM gets the ball — attack any cross.',
      tips: ['Attack the far side of the box', 'Move on LM\'s first touch', 'Be ready to shoot']
    }
  },
  elements: {
    players: [
      { x: 50, y: 97, color: OUR, label: 'GK' },
      { x: 10, y: 82, color: OUR, label: 'LB' },
      { x: 35, y: 74, color: OUR, label: 'LCB' },
      { x: 62, y: 74, color: OUR, label: 'RCB' },
      { x: 87, y: 82, color: OUR, label: 'RB' },
      { x:  8, y: 64, color: OUR, label: 'LM' },
      { x: 36, y: 66, color: OUR, label: 'LCM' },
      { x: 62, y: 66, color: OUR, label: 'RCM' },
      { x: 87, y: 64, color: OUR, label: 'RM' },
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
      { x: 50, y: 95, color: BALL, label: '' }
    ],
    arrows: [
      // Ball pass
      { x1: 50, y1: 95, x2:  8, y2: 64, color: ARR,  style: 'solid' }, // GK long ball → LM
      // Player movement (short = slow, long = fast)
      { x1: 10, y1: 82, x2: 10, y2: 76, color: ARR2, style: 'dash' },  // LB holds back (6)
      { x1: 35, y1: 74, x2: 35, y2: 68, color: ARR2, style: 'dash' },  // LCB holds (6)
      { x1: 62, y1: 74, x2: 62, y2: 68, color: ARR2, style: 'dash' },  // RCB holds (6)
      { x1: 87, y1: 82, x2: 87, y2: 76, color: ARR2, style: 'dash' },  // RB holds (6)
      { x1:  8, y1: 64, x2:  4, y2: 42, color: ARR,  style: 'solid' }, // LM SPRINTS (22)
      { x1: 36, y1: 66, x2: 36, y2: 58, color: ARR2, style: 'dash' },  // LCM supports (8)
      { x1: 62, y1: 66, x2: 62, y2: 60, color: ARR2, style: 'dash' },  // RCM holds (6)
      { x1: 87, y1: 64, x2: 91, y2: 38, color: ARR,  style: 'solid' }, // RM SPRINTS far post (26)
      { x1: 32, y1: 57, x2: 28, y2: 22, color: ARR,  style: 'solid' }, // LF SPRINTS near post
      { x1: 66, y1: 57, x2: 64, y2: 22, color: ARR,  style: 'solid' }  // RF SPRINTS
    ]
  }
});
