plays.push({
  id: 'def-ti-weaker',
  situation: 'Throw-in',
  level: 'weaker',
  side: 'defense',
  title: 'Defense Throw-in — Immediate Press',
  goal: 'Close in on whoever receives the throw right away. Do not give her time to turn or play forward — win the ball back right there.',
  steps: [
    { text: 'RM sprints to whoever receives the throw — get there before her second touch.' },
    { text: 'RCM and RB support the press. Watch for OPP RF making a run down the right line toward our goal — RB must not lose her.' },
    { text: 'LM and LCM hold the central line — be ready if the ball gets played out of the press.' },
    { text: 'If we win the ball, play it forward right away. LF and RF are already in position to attack.' }
  ],
  keys: [
    'Press with three players — never one alone, always two pressing and one covering nearby',
    'Force the receiver to play backward — do not let her turn',
    'If she plays backward, press that player too — keep the pressure going',
    'Win the ball, then go forward right away — attack before they can recover'
  ],
  playerData: {
    GK: {
      role: 'Come off your line and cover behind the press.',
      before: 'Move toward the edge of the penalty area. Be ready to sweep any ball played in behind.',
      during: 'Let your teammates know where the danger is. If a ball is played in behind, come out and get it.',
      tips: ['Come off your line — be the sweeper', 'Be ready for a ball played over the press', 'Guide your defenders']
    },
    LB: {
      role: 'Hold the left side — cover behind the press on the far side.',
      before: 'Hold your position on the left. Be the defensive cover if the press is beaten.',
      during: 'Do not join the press — your job is to cover. If the press breaks, you are the last defender.',
      tips: ['Hold your position — do not join the press', 'Be the safety cover', 'Cover behind LCB if she shifts right']
    },
    LCB: {
      role: 'Shift slightly right to cover behind the press.',
      before: 'Move to center-right. Be ready to step to any runner who gets through the press.',
      during: 'Be ready to step to any runner who breaks through. Do not join the press — cover behind it.',
      tips: ['Cover behind the press', 'Do not be drawn forward', 'Win any ball that gets past the first press']
    },
    RCB: {
      role: 'Cover behind RB and RM\'s press.',
      before: 'Position on the right. Be ready to step to any runner who gets past the press.',
      during: 'If the receiver beats the press, step up right away. Win the ball or force her wide.',
      tips: ['Cover the press', 'Step up if the press is beaten', 'Do not go further forward than the press line']
    },
    RB: {
      role: 'Support the press — be the second presser alongside RM.',
      before: 'Move up. As RM presses, you close down the nearest supporting player.',
      during: 'Work with RM as a pressing pair. If RM presses the receiver, you cut off her outlet.',
      tips: ['Work together with RM', 'Cut off the outlet pass', 'Do not both press the same player — split the press']
    },
    LM: {
      role: 'Hold the central line — be ready for any ball played out of the press.',
      before: 'Hold your central position. Be ready if the ball is played through the middle.',
      during: 'If a ball is played through the middle, step to it right away.',
      tips: ['Hold the central line', 'Close any ball played centrally', 'Win it and play forward']
    },
    LCM: {
      role: 'Hold the center-left zone — cover any ball played away from the press.',
      before: 'Position center-left. Be ready to win any ball played away from the press.',
      during: 'If the ball escapes the press, step right away. Win it and play forward.',
      tips: ['Win any ball that escapes the press', 'Play forward right away', 'Be the link from defense to attack']
    },
    RCM: {
      role: 'Third presser — cut off the nearest outlet from the press.',
      before: 'Move up. You are the third person in the press — cover the outlet pass.',
      during: 'As RM and RB press, you cut off the nearby outlet pass. No easy escape from the press.',
      tips: ['You are the third point of the press', 'Cut off the outlet pass', 'If the ball comes to you, play forward right away']
    },
    RM: {
      role: 'First presser — sprint to the receiver the instant the throw is taken.',
      before: 'Position close to where the receiver will be. Be ready to sprint.',
      during: 'Sprint at full speed to whoever receives the throw. Get there before her second touch. Force her backward.',
      tips: ['Sprint at full speed — get there before she settles', 'Force her to face backward', 'Stay on your feet — do not dive in']
    },
    LF: {
      role: 'Hold your position — be ready for the counter-attack if we win the ball.',
      before: 'Stay wide on the left. Be ready to receive a quick pass if we win possession.',
      during: 'The moment we win the ball, be ready for it. Be the counter outlet on the left.',
      tips: ['Stay forward — do not drop back', 'Be alert for a quick pass from the press', 'Move forward right away when we win it']
    },
    RF: {
      role: 'Hold your position — be the forward target if we win the ball.',
      before: 'Stay forward. Be the first target for a quick pass forward.',
      during: 'If we win the ball, run forward into space. Go at goal.',
      tips: ['Stay forward and ready', 'Run forward the moment we win the ball', 'Attack right away — do not wait']
    }
  },
  elements: {
    players: [
      { x: 50, y: 94, color: OUR, label: 'GK' },
      { x: 14, y: 80, color: OUR, label: 'LB' },
      { x: 38, y: 76, color: OUR, label: 'LCB' },
      { x: 64, y: 72, color: OUR, label: 'RCB' },
      { x: 82, y: 64, color: OUR, label: 'RB' },
      { x: 20, y: 62, color: OUR, label: 'LM' },
      { x: 42, y: 60, color: OUR, label: 'LCM' },
      { x: 72, y: 60, color: OUR, label: 'RCM' },
      { x: 82, y: 60, color: OUR, label: 'RM' },
      { x: 26, y: 50, color: OUR, label: 'LF' },
      { x: 68, y: 46, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 16, y: 28, color: OPP, label: 'LB' },
      { x: 36, y: 34, color: OPP, label: 'LCB' },
      { x: 64, y: 34, color: OPP, label: 'RCB' },
      { x: 84, y: 28, color: OPP, label: 'RB' },
      { x: 22, y: 52, color: OPP, label: 'LM' },
      { x: 44, y: 56, color: OPP, label: 'LCM' },
      { x: 66, y: 54, color: OPP, label: 'RCM' },
      { x: 78, y: 52, color: OPP, label: 'RM' },
      { x: 60, y: 66, color: OPP, label: 'LF' },
      { x: 90, y: 62, color: OPP, label: 'RF' },
      { x: 106, y: 60, color: OPP, label: 'LB' },
      { x: 100, y: 60, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: throw to OPP RF on the right line
      { x1: 100, y1: 60, x2: 90, y2: 62, color: OPP,  style: 'solid' },
      // OPP: RF runs down the right line toward our goal
      { x1: 90,  y1: 62, x2: 94, y2: 74, color: OPP,  style: 'dash' },
      // OPP: LF makes a forward run centrally
      { x1: 60, y1: 66, x2: 58, y2: 74, color: OPP,  style: 'dash' },
      // OPP: RM pushes forward to support
      { x1: 78, y1: 52, x2: 78, y2: 58, color: OPP,  style: 'dash' },
      // OPP: RCM drives into space centrally
      { x1: 66, y1: 54, x2: 66, y2: 60, color: OPP,  style: 'dash' },
      // OUR: RM sprints to press the receiver
      { x1: 82, y1: 60, x2: 84, y2: 64, color: ARR,  style: 'solid' },
      // OUR: RB cuts off the outlet — closes the wall
      { x1: 82, y1: 64, x2: 86, y2: 64, color: ARR,  style: 'solid' },
      // OUR: RCM closes as the third point of the press triangle
      { x1: 72, y1: 60, x2: 76, y2: 60, color: ARR,  style: 'solid' },
      // OUR: LCB/RCB cover behind the press — track OPP LF run
      { x1: 64, y1: 72, x2: 66, y2: 67, color: ARR2, style: 'dash' },
      // OUR: LM/LCM hold the central line — cover escape passes
      { x1: 20, y1: 62, x2: 24, y2: 62, color: ARR2, style: 'dash' },
      { x1: 42, y1: 60, x2: 46, y2: 60, color: ARR2, style: 'dash' },
      // OUR: LF/RF hold for counter-attack
      { x1: 26, y1: 50, x2: 24, y2: 40, color: ARR2, style: 'dash' },
      { x1: 68, y1: 46, x2: 68, y2: 36, color: ARR2, style: 'dash' }
    ]
  }
});
