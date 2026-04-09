plays.push({
  id: 'ck-equal',
  situation: 'Corner Kick',
  level: 'equal',
  side: 'offense',
  title: 'Corner Kick — Near Post Flick',
  goal: 'Cross to the near post. LF redirects it across goal toward RF at the far post. Defenders hold at halfway.',
  steps: [
    { text: 'LCM delivers the ball low and fast to the near post for LF.' },
    { text: 'LF redirects the ball across goal toward RF at the far post.' },
    { text: 'Midfielders rush the penalty spot for any second ball.' }
  ],
  keys: [
    'Cross is low and fast to the near post',
    'RF times the run to arrive when the ball is redirected',
    'Defenders stay at halfway — do not come back'
  ],
  playerData: {
    GK: {
      role: 'Guard the goal and be ready for any cleared ball.',
      before: 'Stay in your goal and watch the whole play.',
      during: 'Do not come off your line unless a shot is heading at you.',
      tips: ['Stay in your goal', 'Do not come out early']
    },
    LB: {
      role: 'Stay at the halfway line to stop a counter.',
      before: 'Stay at halfway — do not go forward.',
      during: 'Hold your position. If they clear long, you need to be here.',
      tips: ['Stay at halfway', 'Do not come forward', 'Be ready to stop a long clearance']
    },
    LCB: {
      role: 'Stay at the halfway line.',
      before: 'Stay at halfway with the other defenders.',
      during: 'Hold your line. Do not follow the play forward.',
      tips: ['Stay at halfway', 'Hold the line', 'Do not go forward']
    },
    RCB: {
      role: 'Stay at the halfway line.',
      before: 'Stay at halfway.',
      during: 'Hold your position.',
      tips: ['Stay at halfway', 'Hold the line', 'Be ready to defend']
    },
    RB: {
      role: 'Stay at the halfway line.',
      before: 'Stay at halfway with the other defenders.',
      during: 'Hold your position.',
      tips: ['Stay at halfway', 'Do not go forward', 'Be ready for a counter']
    },
    LM: {
      role: 'Attack inside the box for any second ball.',
      before: 'Get inside the penalty area and be ready to shoot.',
      during: 'When LF redirects at the near post, attack any loose ball inside the box.',
      tips: ['Stay inside the box', 'Shoot any second ball', 'Keep moving']
    },
    LCM: {
      role: 'Take the corner kick. Cross low and fast to the near post for LF.',
      before: 'Get to the corner flag on the left and wait for LF to get to the near post.',
      during: 'Drive a low fast ball to the near post for LF.',
      tips: ['Low and fast to the near post', 'Wait until LF is at the post', 'Stay at the corner until the play develops']
    },
    RCM: {
      role: 'Attack the edge of the box and be ready for any clearance.',
      before: 'Position just outside the penalty area on the right.',
      during: 'Move forward as the corner is taken — be ready to shoot any clearance.',
      tips: ['Get to the edge of the box', 'Shoot any clearance', 'Keep moving forward']
    },
    RM: {
      role: 'Hold just outside the box and be ready for a cleared ball.',
      before: 'Stay outside the penalty area on the right side.',
      during: 'Hold your position. If the ball is cleared, win it.',
      tips: ['Stay just outside the box', 'Be ready for a clearance']
    },
    LF: {
      role: 'Get to the near post and redirect the cross across goal toward RF.',
      before: 'Get to the near post inside the 6-yard box before the corner is taken.',
      during: 'When the corner comes in, meet it at the near post and redirect it across goal toward RF.',
      tips: ['Get to the near post early', 'Redirect it across — do not try to score yourself', 'Quick touch']
    },
    RF: {
      role: 'Attack the far post. Finish the ball redirected by LF.',
      before: 'Position at the far post and time your run — do not go too early.',
      during: 'When LF redirects at the near post, sprint onto the ball at the far post and finish.',
      tips: ['Time your run — do not go too early', 'Attack the far post hard', 'Shoot first time']
    }
  },
  elements: {
    players: [
      { x:  50, y: 97, color: OUR, label: 'GK' },
      { x:  12, y: 46, color: OUR, label: 'LB' },
      { x:  36, y: 46, color: OUR, label: 'LCB' },
      { x:  62, y: 46, color: OUR, label: 'RCB' },
      { x:  86, y: 46, color: OUR, label: 'RB' },
      { x:  34, y: 16, color: OUR, label: 'LM' },
      { x:  56, y: 14, color: OUR, label: 'RCM' },
      { x:  78, y: 10, color: OUR, label: 'RM' },
      { x:  36, y:  8, color: OUR, label: 'LF' },
      { x:  54, y: 10, color: OUR, label: 'RF' },
      { x:  -6, y:  3, color: OUR, label: 'LCM' },
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
      { x1:  0, y1:  1, x2: 36, y2:  8, color: ARR,  style: 'solid' },
      { x1: 36, y1:  8, x2: 54, y2:  7, color: ARR,  style: 'dash' },
      { x1: 54, y1: 10, x2: 56, y2:  4, color: ARR2, style: 'dash' },
      { x1: 56, y1: 14, x2: 52, y2:  6, color: ARR2, style: 'dash' }
    ]
  }
});
