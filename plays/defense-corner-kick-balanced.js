plays.push({
  id: 'def-ck-equal',
  situation: 'Corner Kick',
  level: 'equal',
  side: 'defense',
  title: 'Defense Corner Kick — Man-to-Man Mark',
  goal: 'Every opponent is marked. LCB and RCB stay tight near goal on the most dangerous attackers. LM steps forward to defend the delivery and win the ball early. RCM holds deeper than everyone else to cover if the press is beaten.',
  steps: [
    { text: 'LCB and RCB take up tight man-marking positions close to goal. LB and RB track the runners to the post areas.' },
    { text: 'LCM marks the runner to the penalty spot. LM steps forward toward the delivery to intercept or press the ball early.' },
    { text: 'RCM holds deeper than the rest of the midfielders — she is the safety cover if the press breaks down.' },
    { text: 'LF and RF hold near midfield. When we win the ball, they receive the outlet pass and go forward right away.' }
  ],
  keys: [
    'LCB and RCB tight to goal — mark your attacker and don\'t let her turn',
    'LM steps forward to defend the delivery — win it before it reaches the box',
    'RCM holds back deeper — she covers if LM\'s press is beaten',
    'LF and RF near midfield — ready for the quick pass out'
  ],
  playerData: {
    GK: {
      role: 'Make sure every opponent has a defender on her. Claim anything you can reach.',
      before: 'Check that every opponent in the box is covered. If anyone is free, let a teammate know.',
      during: 'Come off your line for anything you can get to with both hands. If you cannot catch it cleanly, punch it out.',
      tips: ['Check that everyone is covered before the kick', 'Come off your line if you can win the ball', 'Catch it if you can — punch it if you cannot']
    },
    LB: {
      role: 'Mark the opponent running to the near post — stay on her, goal-side.',
      before: 'Find the near-post runner. Get between her and the goal.',
      during: 'Follow wherever she goes. Do not lose contact with her.',
      tips: ['Stay between her and the goal', 'Do not let her get a free run to the near post', 'Use your body to block her path']
    },
    LCB: {
      role: 'Stay tight near goal and man-mark the most dangerous attacker in the box.',
      before: 'Find the main attacker and get tight to her, close to goal. Stay between her and the net.',
      during: 'Go for every header — get your body in front of hers before the ball arrives.',
      tips: ['Stay close to goal — do not step up', 'Do not let her get a free header', 'Head it away — up and out of the box']
    },
    RCB: {
      role: 'Stay tight near goal and mark the second attacker — win every aerial challenge.',
      before: 'Find the second attacker and mark her tightly close to goal. Get goal-side.',
      during: 'Win the header. Head it away with height and power.',
      tips: ['Stay close to goal — your mark is in the box', 'Head it up and away', 'Do not head it back across in front of goal']
    },
    RB: {
      role: 'Mark the far-post runner — do not lose her.',
      before: 'Find the opponent making a run to the far post. Get goal-side before the kick.',
      during: 'Follow her all the way to the far post. Win the header or clear it away.',
      tips: ['Follow her all the way to the far post', 'Do not let her get a free header at the back post', 'Clear it long if you win it']
    },
    LM: {
      role: 'Step forward to defend the delivery — win the ball before it reaches the attackers.',
      before: 'Position near the edge of the box. As the kick is taken, step forward toward the delivery.',
      during: 'Press toward the ball. If you can win it or force an error, do it. Do not dive in recklessly.',
      tips: ['Go to the ball — do not wait for it to pass you', 'Win it or force it away from danger', 'If you miss it, recover quickly back into position']
    },
    LCM: {
      role: 'Mark the opponent dropping to the penalty spot area.',
      before: 'Watch for an opponent who moves to the penalty spot — that is your player. Get goal-side.',
      during: 'Stay close. If a flicked header drops to her, you need to get there first.',
      tips: ['Cover the penalty spot area', 'Watch for a late runner coming from deep', 'Win the ball and clear it long']
    },
    RCM: {
      role: 'Hold deeper than the other midfielders — you are the last cover if the press breaks down.',
      before: 'Position behind the other midfielders, giving yourself space to react to anything that gets through.',
      during: 'If LM\'s press is beaten and the ball drops forward, you are the next line. Win it and clear.',
      tips: ['Stay deeper than everyone else in midfield', 'Do not press forward — your job is cover', 'Win any ball that drops in front of you']
    },
    RM: {
      role: 'Mark the opponent at the far edge of the box.',
      before: 'Find the opponent near the edge of the box on the right. Stay tight.',
      during: 'If the corner is played short or a second ball falls near you, close right away.',
      tips: ['Watch for a short corner', 'Stay tight on your mark', 'Win second balls and play forward']
    },
    LF: {
      role: 'Hold near midfield — be ready for the quick outlet pass.',
      before: 'Stay near midfield on the left. Do not come back into the box.',
      during: 'The moment we win the ball, make yourself available. Receive the pass and go forward.',
      tips: ['Stay near midfield — do not come back', 'Be alert for a quick pass out', 'Move forward right away when we win it']
    },
    RF: {
      role: 'Hold near midfield — attack right away when we win the ball.',
      before: 'Stay near midfield on the right. Do not come back into the box.',
      during: 'The moment we clear, run forward hard. Be the outlet for the counter-attack.',
      tips: ['Stay wide — do not come into the box', 'Be the first counter threat', 'Sprint onto any clearance right away']
    }
  },
  elements: {
    players: [
      { x: 50, y: 97, color: OUR, label: 'GK' },
      { x: 22, y: 87, color: OUR, label: 'LB' },
      { x: 38, y: 92, color: OUR, label: 'LCB' },
      { x: 62, y: 92, color: OUR, label: 'RCB' },
      { x: 78, y: 87, color: OUR, label: 'RB' },
      { x: 26, y: 76, color: OUR, label: 'LM' },
      { x: 44, y: 84, color: OUR, label: 'LCM' },
      { x: 62, y: 72, color: OUR, label: 'RCM' },
      { x: 72, y: 79, color: OUR, label: 'RM' },
      { x: 16, y: 56, color: OUR, label: 'LF' },
      { x: 84, y: 56, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 18, y: 22, color: OPP, label: 'LB' },
      { x: 36, y: 20, color: OPP, label: 'LCB' },
      { x: 64, y: 20, color: OPP, label: 'RCB' },
      { x: 82, y: 22, color: OPP, label: 'RB' },
      { x: 26, y: 82, color: OPP, label: 'LM' },
      { x: 42, y: 88, color: OPP, label: 'LCM' },
      { x: 58, y: 91, color: OPP, label: 'RCM' },
      { x: 72, y: 86, color: OPP, label: 'RM' },
      { x: 40, y: 93, color: OPP, label: 'LF' },
      { x: 62, y: 91, color: OPP, label: 'RF' },
      { x: 100, y: 100, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: corner kick delivery
      { x1: 100, y1: 100, x2: 46, y2: 89, color: OPP,  style: 'solid' },
      // OPP: LF runner attacks near post
      { x1: 40,  y1: 93,  x2: 36, y2: 97, color: OPP,  style: 'dash' },
      // OPP: RF runner attacks far post
      { x1: 62,  y1: 91,  x2: 62, y2: 97, color: OPP,  style: 'dash' },
      // OPP: LCM crashes to penalty spot
      { x1: 42,  y1: 88,  x2: 42, y2: 83, color: OPP,  style: 'dash' },
      // OPP: RCM crashes to back post
      { x1: 58,  y1: 91,  x2: 54, y2: 96, color: OPP,  style: 'dash' },
      // OUR: LB tracks near-post runner
      { x1: 22,  y1: 87,  x2: 30, y2: 92, color: ARR,  style: 'solid' },
      // OUR: RB tracks far-post runner
      { x1: 78,  y1: 87,  x2: 70, y2: 92, color: ARR,  style: 'solid' },
      // OUR: LCB/RCB tight — track their attacker
      { x1: 38,  y1: 92,  x2: 40, y2: 96, color: ARR2, style: 'dash' },
      { x1: 62,  y1: 92,  x2: 62, y2: 96, color: ARR2, style: 'dash' },
      // OUR: LM steps forward to defend/intercept the delivery
      { x1: 26,  y1: 76,  x2: 36, y2: 70, color: ARR,  style: 'solid' },
      // OUR: RCM holds deeper — cover
      { x1: 62,  y1: 72,  x2: 62, y2: 70, color: ARR2, style: 'dash' },
      // OUR: LF/RF hold near midfield ready for counter
      { x1: 16,  y1: 56,  x2: 16, y2: 50, color: ARR2, style: 'dash' },
      { x1: 84,  y1: 56,  x2: 84, y2: 50, color: ARR2, style: 'dash' }
    ]
  }
});
