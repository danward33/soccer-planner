plays.push({
  id: 'dfk-strong',
  situation: 'Direct Free Kick',
  level: 'strong',
  side: 'offense',
  levelLabel: 'Defensive End',
  title: 'Defensive FK — Play Wide',
  goal: 'We have a free kick deep in our own half. Pass wide to LM on the outside — do not pass across in front of our own goal.',
  steps: [
    { text: 'LB takes the kick from the left. Pass forward up the line to LM.' },
    { text: 'LM receives and drives forward — stay wide, do not cut inside.' },
    { text: 'Midfielders hold at midfield. Forwards stay high near the other team.' }
  ],
  keys: [
    'Always go to the outside — never pass across in front of our own goal',
    'If LM is covered, pass back to GK',
    'Once we are forward, use our speed'
  ],
  playerData: {
    GK: {
      role: 'Be a backup option in case no one is free on the outside.',
      before: 'Stay behind LB so she can pass back to you if needed.',
      during: 'If LM is covered, LB can pass back to you. Pass wide right away.',
      tips: ['Be a backup option', 'If you get it, pass wide right away']
    },
    LB: {
      role: 'Take the free kick from the left. Pass forward to LM up the line.',
      before: 'Get to the ball on the left and wait for LM to get into position.',
      during: 'Pass the ball forward to LM up the left line. Never pass through the middle. GK is your backup if LM is covered.',
      tips: ['Pass wide to LM — never inside', 'Wait until LM is ready', 'If LM is covered, pass back to GK']
    },
    LCB: {
      role: 'Move slightly forward and hold your position.',
      before: 'Position just ahead of LB\'s kick spot.',
      during: 'Hold your position. If we lose the ball, get back into the defensive line right away.',
      tips: ['Stay just ahead of the ball', 'Do not go too far forward', 'Get back quickly if we lose the ball']
    },
    RCB: {
      role: 'Move slightly forward and hold your position.',
      before: 'Position ahead of the ball on the right center.',
      during: 'Hold your position. Be ready to drop back and defend.',
      tips: ['Stay just ahead of the ball', 'Hold the line with LCB', 'Drop back quickly if needed']
    },
    RB: {
      role: 'Move slightly ahead on the right flank. Be ready if the ball switches.',
      before: 'Position wide right, slightly ahead.',
      during: 'Hold your spot. If the ball switches to your side, be ready to drive forward.',
      tips: ['Stay ahead of the ball on the right', 'Do not drop back', 'Be ready if the play comes right']
    },
    LM: {
      role: 'You are the main target — receive from LB and drive forward.',
      before: 'Get into open space ahead of LB up the left flank — be her clear target.',
      during: 'Receive from LB and drive forward along the left line. Stay wide.',
      tips: ['Stay wide on the left', 'First touch forward', 'Do not cut inside']
    },
    LCM: {
      role: 'Hold at midfield and be ready if LM needs to pass inside.',
      before: 'Stay at midfield.',
      during: 'Hold your midfield position.',
      tips: ['Hold at midfield', 'Do not crowd the left flank', 'Be ready if the ball comes inside']
    },
    RCM: {
      role: 'Hold at midfield and stay in your spot.',
      before: 'Stay at midfield on the right.',
      during: 'Hold your position.',
      tips: ['Hold at midfield', 'Do not chase wide', 'Be ready if we lose the ball']
    },
    RM: {
      role: 'Hold wide right at midfield. Be ready if the ball switches.',
      before: 'Stay wide right.',
      during: 'Hold your position. If the ball comes your way, receive and drive forward.',
      tips: ['Hold wide at midfield', 'Be ready if the ball switches', 'Drive forward if you receive it']
    },
    LF: {
      role: 'Stay high near the other team\'s defense.',
      before: 'Hold your forward position. Do not drop into midfield.',
      during: 'Stay up front. When LM drives forward, be ready to receive a pass.',
      tips: ['Stay high', 'Do not drop back', 'Be a forward target when we push forward']
    },
    RF: {
      role: 'Stay high near the other team\'s defense on the right.',
      before: 'Hold your forward position on the right.',
      during: 'Stay up front. Be ready to receive if the ball reaches the attacking area.',
      tips: ['Stay high', 'Hold your position', 'Be a target when we push forward']
    }
  },
  elements: {
    players: [
      { x: 50, y: 97, color: OUR, label: 'GK' },
      { x:  8, y: 80, color: OUR, label: 'LB' },
      { x: 36, y: 72, color: OUR, label: 'LCB' },
      { x: 62, y: 72, color: OUR, label: 'RCB' },
      { x: 88, y: 74, color: OUR, label: 'RB' },
      { x: 12, y: 48, color: OUR, label: 'LM' },
      { x: 36, y: 50, color: OUR, label: 'LCM' },
      { x: 62, y: 50, color: OUR, label: 'RCM' },
      { x: 88, y: 46, color: OUR, label: 'RM' },
      { x: 28, y: 22, color: OUR, label: 'LF' },
      { x: 62, y: 22, color: OUR, label: 'RF' },
      { x: 50, y:  4, color: OPP, label: 'GK' },
      { x: 22, y: 18, color: OPP, label: 'LB' },
      { x: 38, y: 20, color: OPP, label: 'LCB' },
      { x: 60, y: 20, color: OPP, label: 'RCB' },
      { x: 78, y: 18, color: OPP, label: 'RB' },
      { x: 18, y: 42, color: OPP, label: 'LM' },
      { x: 38, y: 46, color: OPP, label: 'LCM' },
      { x: 58, y: 46, color: OPP, label: 'RCM' },
      { x: 76, y: 42, color: OPP, label: 'RM' },
      { x: 30, y: 62, color: OPP, label: 'LF' },
      { x: 64, y: 62, color: OPP, label: 'RF' },
      { x:  7, y: 79, color: BALL, label: '' }
    ],
    arrows: [
      { x1:  7, y1: 79, x2: 12, y2: 48, color: ARR,  style: 'solid' }, // LB → LM (main pass)
      { x1: 12, y1: 48, x2: 10, y2: 32, color: ARR,  style: 'solid' }, // LM drives forward
      { x1: 36, y1: 72, x2: 36, y2: 64, color: ARR2, style: 'dash' },  // LCB slight forward
      { x1: 62, y1: 72, x2: 62, y2: 64, color: ARR2, style: 'dash' },  // RCB slight forward
      { x1: 88, y1: 74, x2: 88, y2: 64, color: ARR2, style: 'dash' },  // RB slight forward
      { x1: 50, y1: 97, x2: 50, y2: 94, color: ARR2, style: 'dash' },  // GK holds
      { x1: 36, y1: 50, x2: 36, y2: 44, color: ARR2, style: 'dash' },  // LCM slight forward
      { x1: 62, y1: 50, x2: 62, y2: 44, color: ARR2, style: 'dash' },  // RCM slight forward
      { x1: 88, y1: 46, x2: 88, y2: 40, color: ARR2, style: 'dash' },  // RM slight forward
      { x1: 28, y1: 22, x2: 26, y2: 16, color: ARR2, style: 'dash' },  // LF holds high
      { x1: 62, y1: 22, x2: 64, y2: 16, color: ARR2, style: 'dash' }   // RF holds high
    ]
  }
});
