plays.push({
  id: 'def-fk-equal',
  situation: 'Direct Free Kick',
  level: 'equal',
  side: 'defense',
  title: 'Defense Free Kick — Wall + Man Marks',
  goal: 'OPP RCM is taking the kick. Their LF and RF have split out wide on both sides. Three players hold the wall. LB and RB must track the wide threats while LCB and RCM cover central runners.',
  steps: [
    { text: 'GK organizes a 3-player wall. LCM, RCM, and RM stand tight in the wall.' },
    { text: 'OPP LF has split wide left and OPP RF has split wide right — LB tracks LF and RB tracks RF.' },
    { text: 'LCB, LM each find an opponent to cover before the kick. Get goal-side and watch for runners coming in from ahead of the ball.' },
    { text: 'After the kick, everyone steps forward together.' }
  ],
  keys: [
    'Three-player wall blocks the direct shot — hold tight, no gaps',
    'LB tracks OPP LF wide left, RB tracks OPP RF wide right',
    'Watch for runners coming forward from ahead of the ball',
    'Step forward together after the kick'
  ],
  playerData: {
    GK: {
      role: 'Set up the wall and position to cover the far side.',
      before: 'Get LCM, RCM, and RM into the wall. Then move to cover the far post.',
      during: 'Watch for the kick to go around the wall. Come off your line for any chip.',
      tips: ['Cover what the wall does not', 'Stay alert for a quick short free kick']
    },
    LB: {
      role: 'Track OPP LF who has split wide left — she is a danger to receive the ball wide.',
      before: 'Find OPP LF who is out wide left. Get goal-side and be ready to close.',
      during: 'If the ball goes wide to her, close immediately. Do not let her get a cross in.',
      tips: ['Track OPP LF wide — stay close', 'Close quickly if she receives', 'Do not let her cut inside onto her stronger foot']
    },
    LCB: {
      role: 'Cover the central area left of the wall — watch for runners from ahead of the ball.',
      before: 'Find an opponent who has pushed ahead centrally and get goal-side of her.',
      during: 'Follow her run. If she goes to the near post, go with her.',
      tips: ['Stay goal-side', 'Follow her run', 'Close right away if she runs to the near post']
    },
    RCB: {
      role: 'Cover the right side outside the wall — watch for runners going to the far post.',
      before: 'Position right of the wall. Watch for any runner going to the far post area.',
      during: 'Follow any runner on the far post side. Force her wide.',
      tips: ['Cover right of the wall', 'Close if she tries to shoot or cross', 'Step forward after the kick']
    },
    RB: {
      role: 'Track OPP RF who has split wide right — she is a danger to receive the ball wide.',
      before: 'Find OPP RF who is out wide right. Get goal-side of her.',
      during: 'If the ball goes wide to her, close immediately. Force her backward or wide.',
      tips: ['Track OPP RF wide — stay close', 'Close quickly if she receives', 'Do not let her cut inside']
    },
    LM: {
      role: 'Cover the central opponent who has pushed ahead of the ball.',
      before: 'Find the OPP player in the central area ahead of the ball. Get goal-side.',
      during: 'Follow wherever she goes. If she gets behind the wall, stay with her and force her wide.',
      tips: ['Follow her run', 'Stay goal-side', 'Cover with LB so she does not run free']
    },
    LCM: {
      role: 'Stand in the wall — left end.',
      before: 'Take position on the left of the 3-player wall. Stay tight.',
      during: 'Hold until the kick. Then step forward with the team.',
      tips: ['Hold the wall until the kick', 'Step forward right after', 'Cover the near post angle']
    },
    RCM: {
      role: 'Stand in the wall — center.',
      before: 'Stand between LCM and RM. Stay tight — no gaps.',
      during: 'Hold until the kick, then step forward.',
      tips: ['No gaps — stay tight', 'Stand tall', 'Step forward as soon as the kick is taken']
    },
    RM: {
      role: 'Stand in the wall — right end.',
      before: 'Take position on the right end of the wall, tight to RCM.',
      during: 'Hold until the kick. Then step forward.',
      tips: ['Hold firm', 'Do not leave early', 'Step forward after the kick']
    },
    LF: {
      role: 'Hold your position and be ready for the counter-attack.',
      before: 'Stay in midfield. Do not go into the box.',
      during: 'If we clear the ball, take your first touch forward. Connect to RF on the counter.',
      tips: ['Stay in midfield', 'Be ready for the counter', 'Play forward quickly']
    },
    RF: {
      role: 'Stay forward as the main counter-attack target.',
      before: 'Hold your forward position.',
      during: 'The moment we clear the ball, sprint forward.',
      tips: ['Stay forward', 'Be the first counter threat', 'Go at goal if you get the ball in space']
    }
  },
  elements: {
    players: [
      { x: 58, y: 94, color: OUR, label: 'GK' },
      { x: 14, y: 68, color: OUR, label: 'LB' },
      { x: 46, y: 70, color: OUR, label: 'LCB' },
      { x: 78, y: 68, color: OUR, label: 'RCB' },
      { x: 84, y: 68, color: OUR, label: 'RB' },
      { x: 28, y: 66, color: OUR, label: 'LM' },
      { x: 60, y: 62, color: OUR, label: 'LCM' },
      { x: 66, y: 62, color: OUR, label: 'RCM' },
      { x: 72, y: 62, color: OUR, label: 'RM' },
      { x: 32, y: 54, color: OUR, label: 'LF' },
      { x: 66, y: 42, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 14, y: 22, color: OPP, label: 'LB' },
      { x: 36, y: 26, color: OPP, label: 'LCB' },
      { x: 64, y: 26, color: OPP, label: 'RCB' },
      { x: 86, y: 22, color: OPP, label: 'RB' },
      { x: 24, y: 60, color: OPP, label: 'LM' },
      { x: 40, y: 62, color: OPP, label: 'LCM' },
      { x: 64, y: 52, color: OPP, label: 'RCM' },
      { x: 76, y: 58, color: OPP, label: 'RM' },
      { x:  8, y: 62, color: OPP, label: 'LF' },
      { x: 86, y: 60, color: OPP, label: 'RF' },
      { x: 64, y: 52, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: RCM takes the free kick — shot toward goal
      { x1: 64, y1: 52, x2: 58, y2: 64, color: OPP,  style: 'solid' },
      // OPP: LCM pushes into box for rebound
      { x1: 40, y1: 62, x2: 42, y2: 68, color: OPP,  style: 'dash' },
      // OPP: LM crashes from ahead of ball
      { x1: 24, y1: 60, x2: 26, y2: 66, color: OPP,  style: 'dash' },
      // OPP: RM crashes right side
      { x1: 76, y1: 58, x2: 74, y2: 64, color: OPP,  style: 'dash' },
      // OUR: 3-player wall holds — blocks the direct shot
      { x1: 60, y1: 62, x2: 60, y2: 58, color: ARR,  style: 'solid' },
      { x1: 66, y1: 62, x2: 66, y2: 58, color: ARR,  style: 'solid' },
      { x1: 72, y1: 62, x2: 72, y2: 58, color: ARR,  style: 'solid' },
      // OUR: LB tracks OPP LF wide left
      { x1: 14, y1: 68, x2:  9, y2: 62, color: ARR2, style: 'dash' },
      // OUR: RB tracks OPP RF wide right
      { x1: 84, y1: 68, x2: 86, y2: 60, color: ARR2, style: 'dash' },
      // OUR: LCB covers central runner
      { x1: 46, y1: 70, x2: 44, y2: 66, color: ARR2, style: 'dash' },
      // OUR: RF holds forward — counter outlet
      { x1: 66, y1: 42, x2: 66, y2: 32, color: ARR2, style: 'dash' }
    ]
  }
});
