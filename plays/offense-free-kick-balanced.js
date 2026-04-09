plays.push({
  id: 'dfk-equal',
  situation: 'Direct Free Kick',
  level: 'equal',
  side: 'offense',
  levelLabel: 'Midfield',
  title: 'Midfield FK — Wall Curl',
  goal: 'We have a free kick near midfield. Shoot directly at goal — aim to curl the ball around the wall and into the corner.',
  steps: [
    { text: 'LB takes the kick from slightly left — shoots hard and curled at goal.' },
    { text: 'All four midfielders rush into the box the moment the ball is kicked.' },
    { text: 'Forwards are already in the box — attack any rebound.' }
  ],
  keys: [
    'Aim for the gap between the wall and the post',
    'Follow through across your body to create curl',
    'All runners move when the ball is kicked — not after the save'
  ],
  playerData: {
    GK: {
      role: 'Stay in goal and be ready for any save or cleared ball.',
      before: 'Stay in your goal.',
      during: 'Hold your position. If the shot comes back to you, pass wide.',
      tips: ['Stay in goal', 'Be ready for a clearance', 'Do not come off your line']
    },
    LB: {
      role: 'Take the free kick from slightly left. Shoot hard at goal.',
      before: 'Get to the ball. Look for the gap between the wall and the post.',
      during: 'Strike the ball across your body toward the far corner. Hit it with pace.',
      tips: ['Aim for the gap', 'Follow through across your body for curl', 'Hit it hard']
    },
    LCB: {
      role: 'Hold your position and be ready to defend if they counter.',
      before: 'Stay behind midfield.',
      during: 'Hold your position. Be ready to defend.',
      tips: ['Stay back', 'Hold the defensive line', 'Be ready if they counter']
    },
    RCB: {
      role: 'Hold your position and be ready to defend.',
      before: 'Stay behind midfield with LCB.',
      during: 'Hold your position.',
      tips: ['Stay back', 'Hold the line', 'Be ready to defend']
    },
    RB: {
      role: 'Hold your position slightly back.',
      before: 'Stay wide right and slightly back.',
      during: 'Hold your spot.',
      tips: ['Stay slightly back', 'Be a defensive option', 'Hold shape']
    },
    LM: {
      role: 'Rush into the box on the left when the ball is kicked.',
      before: 'Position just outside the box on the left.',
      during: 'Move when LB kicks — sprint to the left post area and finish any rebound.',
      tips: ['Go when the ball is kicked', 'Attack the left post area', 'Shoot first time']
    },
    LCM: {
      role: 'Rush into the center of the box for any rebound.',
      before: 'Position just outside the box in the center.',
      during: 'Move when the ball is kicked — attack the penalty spot.',
      tips: ['Go when the ball is kicked', 'Attack the center of the box', 'Shoot first time']
    },
    RCM: {
      role: 'Rush into the box on the right for any rebound.',
      before: 'Position just outside the box on the right.',
      during: 'Move when the ball is kicked — attack the right post area.',
      tips: ['Go when the ball is kicked', 'Attack the right area', 'Shoot first time']
    },
    RM: {
      role: 'Rush into the box on the right when the ball is kicked.',
      before: 'Position just outside the box on the right.',
      during: 'Move when LB kicks — sprint in and finish any rebound.',
      tips: ['Go when the ball is kicked', 'Attack the right side', 'Shoot first time']
    },
    LF: {
      role: 'Rush the near post when the ball is kicked.',
      before: 'Get inside the box on the left side.',
      during: 'Move when LB shoots — sprint to the near post and finish any loose ball.',
      tips: ['Move when the ball is kicked', 'Attack the near post', 'Shoot first time']
    },
    RF: {
      role: 'Rush the far post when the ball is kicked.',
      before: 'Get inside the box on the right side.',
      during: 'Move when LB shoots — sprint to the far post.',
      tips: ['Move when the ball is kicked', 'Attack the far post', 'Shoot first time']
    }
  },
  elements: {
    players: [
      { x: 50, y: 95, color: OUR, label: 'GK' },
      { x: 36, y: 52, color: OUR, label: 'LB' },
      { x: 40, y: 50, color: OUR, label: 'LCB' },
      { x: 62, y: 50, color: OUR, label: 'RCB' },
      { x: 76, y: 50, color: OUR, label: 'RB' },
      { x: 16, y: 26, color: OUR, label: 'LM' },
      { x: 40, y: 28, color: OUR, label: 'LCM' },
      { x: 58, y: 28, color: OUR, label: 'RCM' },
      { x: 82, y: 26, color: OUR, label: 'RM' },
      { x: 36, y: 20, color: OUR, label: 'LF' },
      { x: 58, y: 20, color: OUR, label: 'RF' },
      { x: 50, y:  8, color: OPP, label: 'GK' },
      { x: 28, y: 14, color: OPP, label: 'LB' },
      { x: 40, y: 16, color: OPP, label: 'LCB' },
      { x: 60, y: 16, color: OPP, label: 'RCB' },
      { x: 72, y: 14, color: OPP, label: 'RB' },
      { x: 44, y: 32, color: OPP, label: 'LM' },
      { x: 48, y: 31, color: OPP, label: 'LCM' },
      { x: 52, y: 31, color: OPP, label: 'RCM' },
      { x: 56, y: 32, color: OPP, label: 'RM' },
      { x: 36, y: 44, color: OPP, label: 'LF' },
      { x: 62, y: 44, color: OPP, label: 'RF' },
      { x: 35, y: 51, color: BALL, label: '' }
    ],
    arrows: [
      { x1: 35, y1: 51, x2: 42, y2: 10, color: ARR,  style: 'solid' }, // LB shot at goal
      { x1: 16, y1: 26, x2: 16, y2: 14, color: ARR2, style: 'dash' },  // LM crashes
      { x1: 40, y1: 28, x2: 40, y2: 14, color: ARR2, style: 'dash' },  // LCM crashes
      { x1: 58, y1: 28, x2: 58, y2: 14, color: ARR2, style: 'dash' },  // RCM crashes
      { x1: 82, y1: 26, x2: 82, y2: 14, color: ARR2, style: 'dash' },  // RM crashes
      { x1: 50, y1: 95, x2: 50, y2: 92, color: ARR2, style: 'dash' },  // GK holds
      { x1: 40, y1: 50, x2: 40, y2: 46, color: ARR2, style: 'dash' },  // LCB at midline
      { x1: 62, y1: 50, x2: 62, y2: 46, color: ARR2, style: 'dash' },  // RCB at midline
      { x1: 76, y1: 50, x2: 76, y2: 46, color: ARR2, style: 'dash' },  // RB at midline
      { x1: 36, y1: 20, x2: 34, y2: 12, color: ARR2, style: 'dash' },  // LF crashes box
      { x1: 58, y1: 20, x2: 60, y2: 12, color: ARR2, style: 'dash' }   // RF crashes box
    ]
  }
});
