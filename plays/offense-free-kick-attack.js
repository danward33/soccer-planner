plays.push({
  id: 'dfk-weaker',
  situation: 'Direct Free Kick',
  level: 'weaker',
  side: 'offense',
  levelLabel: 'Offensive End',
  title: 'Attacking FK — Power Shot',
  goal: 'We are just outside their box. One player shoots hard. Everyone else rushes in for the rebound.',
  steps: [
    { text: 'RCM takes the kick from slightly right. Shoots low and hard at goal.' },
    { text: 'LM, LCM, and RM rush into the box from the sides as the ball is kicked.' },
    { text: 'Forwards are already in the box — attack any rebound right away.' }
  ],
  keys: [
    'Aim low for the corners — those are hardest to save',
    'All runners move when the ball is kicked',
    'If the wall is not set, take the kick right away'
  ],
  playerData: {
    GK: {
      role: 'Stay in goal and be ready for any cleared ball.',
      before: 'Stay in your goal.',
      during: 'Hold your position. If the shot comes back, pass wide.',
      tips: ['Stay in goal', 'Be ready for a clearance', 'Do not come forward']
    },
    LB: {
      role: 'Hold at midfield on the left. Be ready if the other team counters.',
      before: 'Stay at midfield on the left.',
      during: 'Hold your position. Be ready to defend if they counter.',
      tips: ['Hold at midfield', 'Stay wide left', 'Be ready to defend']
    },
    LCB: {
      role: 'Hold the defensive line at midfield.',
      before: 'Stay at midfield in your central position.',
      during: 'Hold your line. Do not follow the play forward.',
      tips: ['Hold at midfield', 'Hold the line with RCB', 'Be ready for a counter']
    },
    RCB: {
      role: 'Hold the defensive line at midfield.',
      before: 'Stay at midfield in your central spot.',
      during: 'Hold your position.',
      tips: ['Hold at midfield', 'Hold the line with LCB', 'Do not go forward']
    },
    RB: {
      role: 'Hold at midfield on the right. Be ready if the other team counters.',
      before: 'Stay at midfield on the right.',
      during: 'Hold your position. Do not push forward.',
      tips: ['Hold at midfield', 'Stay wide right', 'Be ready to defend']
    },
    LM: {
      role: 'Position ahead of the ball on the left and rush into the box when the ball is kicked.',
      before: 'Get into position on the left side, ahead of where RCM is taking the kick.',
      during: 'When RCM kicks, rush into the box from the left — finish any rebound.',
      tips: ['Go when the ball is kicked', 'Attack the left side of the box', 'Shoot first time']
    },
    LCM: {
      role: 'Position ahead of the ball in the center-left and rush into the box.',
      before: 'Get into position center-left, ahead of where RCM is taking the kick.',
      during: 'When RCM kicks, sprint into the box — finish any rebound.',
      tips: ['Go when the ball is kicked', 'Attack the center area', 'Shoot first time']
    },
    RCM: {
      role: 'Take the free kick from slightly right of center. Shoot low and hard at goal.',
      before: 'Get to the ball. Look for the gap between the wall and the post.',
      during: 'Strike low and hard at the corner. Hit it with pace.',
      tips: ['Aim for the corners', 'Low shots are hardest to save', 'Take it right away if the wall is not set']
    },
    RM: {
      role: 'Position ahead of the ball on the right and rush into the box.',
      before: 'Get into position on the right side.',
      during: 'When RCM kicks, rush into the box from the right — finish any rebound.',
      tips: ['Go when the ball is kicked', 'Attack the right side of the box', 'Shoot first time']
    },
    LF: {
      role: 'Hold inside the box and go for any rebound.',
      before: 'Get inside the box on the left side.',
      during: 'Move when RCM shoots — attack any loose ball.',
      tips: ['Stay inside the box', 'Go when the ball is kicked', 'Shoot first time']
    },
    RF: {
      role: 'Hold inside the box and go for any rebound.',
      before: 'Get inside the box on the right side.',
      during: 'Move when RCM shoots — attack any loose ball.',
      tips: ['Stay inside the box', 'Go when the ball is kicked', 'Shoot first time']
    }
  },
  elements: {
    players: [
      { x: 50, y: 95, color: OUR, label: 'GK' },
      { x: 12, y: 46, color: OUR, label: 'LB' },
      { x: 36, y: 46, color: OUR, label: 'LCB' },
      { x: 62, y: 46, color: OUR, label: 'RCB' },
      { x: 86, y: 46, color: OUR, label: 'RB' },
      { x: 16, y: 20, color: OUR, label: 'LM' },
      { x: 38, y: 26, color: OUR, label: 'LCM' },
      { x: 58, y: 34, color: OUR, label: 'RCM' },
      { x: 80, y: 20, color: OUR, label: 'RM' },
      { x: 36, y: 18, color: OUR, label: 'LF' },
      { x: 60, y: 18, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 26, y: 12, color: OPP, label: 'LB' },
      { x: 40, y: 14, color: OPP, label: 'LCB' },
      { x: 60, y: 14, color: OPP, label: 'RCB' },
      { x: 74, y: 12, color: OPP, label: 'RB' },
      { x: 44, y: 24, color: OPP, label: 'LM' },
      { x: 48, y: 23, color: OPP, label: 'LCM' },
      { x: 54, y: 23, color: OPP, label: 'RCM' },
      { x: 58, y: 24, color: OPP, label: 'RM' },
      { x: 36, y: 44, color: OPP, label: 'LF' },
      { x: 62, y: 44, color: OPP, label: 'RF' },
      { x: 57, y: 33, color: BALL, label: '' }
    ],
    arrows: [
      { x1: 57, y1: 33, x2: 46, y2:  8, color: ARR,  style: 'solid' }, // RCM shoots
      { x1: 16, y1: 20, x2: 16, y2: 14, color: ARR2, style: 'dash' },  // LM crashes
      { x1: 38, y1: 26, x2: 38, y2: 14, color: ARR2, style: 'dash' },  // LCM crashes
      { x1: 80, y1: 20, x2: 80, y2: 14, color: ARR2, style: 'dash' },  // RM crashes
      { x1: 36, y1: 18, x2: 34, y2: 10, color: ARR2, style: 'dash' },  // LF near post
      { x1: 60, y1: 18, x2: 62, y2: 10, color: ARR2, style: 'dash' },  // RF far post
      { x1: 50, y1: 95, x2: 50, y2: 92, color: ARR2, style: 'dash' },  // GK holds
      { x1: 12, y1: 46, x2: 12, y2: 40, color: ARR2, style: 'dash' },  // LB advanced beyond midfield
      { x1: 36, y1: 46, x2: 36, y2: 40, color: ARR2, style: 'dash' },  // LCB advanced beyond midfield
      { x1: 62, y1: 46, x2: 62, y2: 40, color: ARR2, style: 'dash' },  // RCB advanced beyond midfield
      { x1: 86, y1: 46, x2: 86, y2: 40, color: ARR2, style: 'dash' }   // RB advanced beyond midfield
    ]
  }
});
