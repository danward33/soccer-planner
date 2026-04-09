plays.push({
  id: 'ck-weaker',
  situation: 'Corner Kick',
  level: 'weaker',
  side: 'offense',
  title: 'Corner Kick — Far Post Delivery',
  goal: 'Swing the ball to the far post for RF to finish. Defenders hold at halfway. Forwards and midfielders fill the box.',
  steps: [
    { text: 'RCM bends the ball to the far post — aimed for the back of the 6-yard box.' },
    { text: 'RF attacks the far post to finish. LF goes to the near post.' },
    { text: 'Midfielders fill the penalty area — shoot any clearance right away.' }
  ],
  keys: [
    'The ball should land in the 6-yard box — not in front',
    'RF and LF go to different posts so one is always free',
    'If cleared, someone must shoot right away'
  ],
  playerData: {
    GK: {
      role: 'Guard the goal and be ready for any cleared ball.',
      before: 'Stay in your goal.',
      during: 'Do not come off your line. Be ready if the ball is cleared.',
      tips: ['Stay in your goal', 'Do not come out early']
    },
    LB: {
      role: 'Stay at halfway and stop any counter.',
      before: 'Stay at halfway.',
      during: 'Hold your position.',
      tips: ['Stay at halfway', 'Do not go forward', 'Stop any long clearance']
    },
    LCB: {
      role: 'Stay at the halfway line.',
      before: 'Stay at halfway with the other defenders.',
      during: 'Hold your line.',
      tips: ['Stay at halfway', 'Hold the line', 'Be ready for a counter']
    },
    RCB: {
      role: 'Stay at the halfway line.',
      before: 'Stay at halfway.',
      during: 'Hold your position.',
      tips: ['Stay at halfway', 'Hold the line', 'Do not go forward']
    },
    RB: {
      role: 'Stay at halfway and protect the right side.',
      before: 'Stay at halfway.',
      during: 'Hold your line.',
      tips: ['Stay at halfway', 'Do not go forward', 'Be ready for a counter']
    },
    LM: {
      role: 'Attack the penalty area for any second ball.',
      before: 'Position just outside the penalty area.',
      during: 'When the corner comes in, move into the box — shoot any ball that falls to you.',
      tips: ['Get to the box', 'Shoot any second ball', 'Keep moving']
    },
    LCM: {
      role: 'Attack the penalty spot for any second ball.',
      before: 'Position at the penalty spot.',
      during: 'Move into the box as the corner is taken — shoot anything that comes your way.',
      tips: ['Attack the penalty spot', 'Shoot first time']
    },
    RCM: {
      role: 'Take the corner kick from the left side. Swing the ball to the far post for RF.',
      before: 'Get to the corner flag on the left. Wait for the forwards and LCM to get into position.',
      during: 'Bend the ball to the far post — aim for the back of the 6-yard box.',
      tips: ['Driven and accurate to the far post', 'Wait until runners are ready', 'Stay at the corner']
    },
    RM: {
      role: 'Attack inside the box on the right. Finish any clearance.',
      before: 'Get inside the penalty area on the right before the corner.',
      during: 'When the corner comes in, attack any ball in the box — shoot first time.',
      tips: ['Stay inside the box', 'Shoot any second ball', 'Keep moving']
    },
    LF: {
      role: 'Attack the near post. Finish anything near your post.',
      before: 'Position at the near post just inside the 6-yard box.',
      during: 'When the corner comes in, attack the near post and shoot.',
      tips: ['Attack the near post hard', 'Shoot first time']
    },
    RF: {
      role: 'Attack the far post and finish the corner.',
      before: 'Position at the far post and be ready to sprint onto the ball.',
      during: 'When the corner swings in, attack the far post hard and finish.',
      tips: ['Attack the far post', 'Arrive as the ball arrives', 'Shoot first time']
    }
  },
  elements: {
    players: [
      { x:  50, y: 97, color: OUR, label: 'GK' },
      { x:  14, y: 46, color: OUR, label: 'LB' },
      { x:  38, y: 46, color: OUR, label: 'LCB' },
      { x:  60, y: 46, color: OUR, label: 'RCB' },
      { x:  86, y: 46, color: OUR, label: 'RB' },
      { x:  32, y: 14, color: OUR, label: 'LM' },
      { x:  44, y: 18, color: OUR, label: 'LCM' },
      { x:  76, y: 14, color: OUR, label: 'RM' },
      { x:  34, y:  8, color: OUR, label: 'LF' },
      { x:  58, y:  8, color: OUR, label: 'RF' },
      { x:  -6, y:  3, color: OUR, label: 'RCM' },
      { x:  50, y:  5, color: OPP, label: 'GK' },
      { x:  24, y: 12, color: OPP, label: 'LB' },
      { x:  40, y: 14, color: OPP, label: 'LCB' },
      { x:  60, y: 14, color: OPP, label: 'RCB' },
      { x:  76, y: 12, color: OPP, label: 'RB' },
      { x:  20, y: 26, color: OPP, label: 'LM' },
      { x:  40, y: 28, color: OPP, label: 'LCM' },
      { x:  60, y: 28, color: OPP, label: 'RCM' },
      { x:  78, y: 26, color: OPP, label: 'RM' },
      { x:  34, y: 44, color: OPP, label: 'LF' },
      { x:  64, y: 44, color: OPP, label: 'RF' },
      { x:   0, y:  1, color: BALL, label: '' }
    ],
    arrows: [
      { x1:  0, y1:  1, x2: 58, y2:  6, color: ARR,  style: 'solid' },
      { x1: 58, y1:  8, x2: 60, y2:  3, color: ARR2, style: 'dash' },
      { x1: 34, y1:  8, x2: 32, y2:  3, color: ARR2, style: 'dash' },
      { x1: 44, y1: 18, x2: 42, y2:  8, color: ARR2, style: 'dash' }
    ]
  }
});
