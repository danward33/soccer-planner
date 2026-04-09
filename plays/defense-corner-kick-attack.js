plays.push({
  id: 'def-ck-weaker',
  situation: 'Corner Kick',
  level: 'weaker',
  side: 'defense',
  title: 'Defense Corner Kick — Step Up and Press',
  goal: 'Do not sit back and wait. LCM and RCM press forward to challenge the delivery and win the ball before it reaches their attackers. LCB and RCB step up aggressively to contest headers. LM and RM hold back to cover.',
  steps: [
    { text: 'LCM and RCM press forward well outside the box toward the delivery zone — win the ball before it reaches their runners.' },
    { text: 'LCB and RCB step up to contest headers aggressively — do not wait near the goal line.' },
    { text: 'LM and RM hold back behind the pressers — if LCM or RCM are beaten, they are the cover.' },
    { text: 'LF and RF hold near midfield. When we win the ball, they are already in position to receive and attack.' }
  ],
  keys: [
    'LCM and RCM press forward — be aggressive and go to the ball',
    'LCB and RCB step up to challenge — do not wait for the ball to come to you',
    'LM and RM hold back — they cover the space if the press is beaten',
    'LF and RF near midfield — get the ball quickly and go'
  ],
  playerData: {
    GK: {
      role: 'Be aggressive in the 6-yard box — go for anything you can reach.',
      before: 'Come off your line to the edge of the six-yard box. Be ready to punch or catch early.',
      during: 'Go for any ball in your area — get both hands up high. If you cannot catch it cleanly, punch it out wide.',
      tips: ['Go to the ball — do not wait for it', 'Punch it out wide if you cannot catch cleanly', 'Be ready — stay focused on the ball']
    },
    LB: {
      role: 'Cover the near-post area — step up to challenge if the ball comes your way.',
      before: 'Position between the near post and center. Be ready to move to the ball.',
      during: 'Go to any ball in the near-post area. Head it away with power.',
      tips: ['Go to the ball — do not wait', 'Head it up and away down the line', 'Clear it long out of danger']
    },
    LCB: {
      role: 'Step up aggressively to challenge the header — do not wait near the goal line.',
      before: 'Position a few yards in front of the six-yard box. Be ready to move forward to meet the ball.',
      during: 'Move forward to meet the delivery. Win the header at the highest point and clear with power.',
      tips: ['Step up early — do not wait for the ball to drop', 'Go up to win the header before their attacker', 'Head it away powerfully']
    },
    RCB: {
      role: 'Step up to challenge any ball going to the far-post area — be aggressive.',
      before: 'Position in front of the six-yard box, right side. Be ready to move to meet the ball.',
      during: 'Go to the ball and challenge for the header. Head it clear or catch it if you can.',
      tips: ['Step up — be aggressive going to the ball', 'Win the header before their runner', 'Head it clear — long and wide']
    },
    RB: {
      role: 'Cover the far-post zone and support LCB if needed.',
      before: 'Position covering the far-post area. Be ready to move into the ball if it drops there.',
      during: 'Support LCB. If the ball comes to the far post, go to it and clear it.',
      tips: ['Cover the far-post zone', 'Go to the ball — do not be passive', 'Clear it long out of danger']
    },
    LM: {
      role: 'Hold back to give cover — do not press forward.',
      before: 'Position behind LCM and RCM. Your job is to cover the space if the press is beaten.',
      during: 'If LCM or RCM are beaten and the ball drops in front of you, step in and win it.',
      tips: ['Do not press forward — stay back and cover', 'Win any ball that beats the press', 'Be the bridge between the pressers and the back line']
    },
    LCM: {
      role: 'Press forward to win the ball where it is delivered — be aggressive and go to it.',
      before: 'Position outside the box and step forward as the kick is taken.',
      during: 'Press into the delivery area. Win the first ball or force a bad clearance.',
      tips: ['Go to the ball — do not wait', 'Be aggressive — go early before their attackers', 'If you win it, play forward right away']
    },
    RCM: {
      role: 'Press forward together with LCM — close down the delivery area.',
      before: 'Mirror LCM. Step forward together as the kick is taken.',
      during: 'Press into the delivery area alongside LCM. Two players pressing makes it much harder to receive cleanly.',
      tips: ['Press together with LCM — two players are better than one', 'Go to the ball early', 'Win it and play it forward immediately']
    },
    RM: {
      role: 'Hold back to provide cover — do not press forward.',
      before: 'Position behind the pressers. Cover the space in case the press is beaten.',
      during: 'If RCM is beaten, step in and win the loose ball. Do not let it drop to their player.',
      tips: ['Stay back — you are the cover behind the press', 'Win any ball that beats RCM', 'Hold your position — do not follow RCM forward']
    },
    LF: {
      role: 'Hold near midfield — be ready to receive the quick pass out.',
      before: 'Stay near midfield on the left. Do not come back into the box.',
      during: 'The moment we win the ball, make yourself available. Receive the pass and go forward.',
      tips: ['Stay near midfield — do not come back', 'Be alert for a quick pass out', 'Move forward right away when we win it']
    },
    RF: {
      role: 'Hold near midfield — attack right away when we win the ball.',
      before: 'Stay near midfield on the right. Do not come back into the box.',
      during: 'The moment we win the ball, sprint forward. Be the target for the counter-attack.',
      tips: ['Stay near midfield — do not come back', 'Be the first counter threat', 'Sprint onto any clearance right away']
    }
  },
  elements: {
    players: [
      { x: 50, y: 97, color: OUR, label: 'GK' },
      { x: 22, y: 84, color: OUR, label: 'LB' },
      { x: 40, y: 89, color: OUR, label: 'LCB' },
      { x: 60, y: 89, color: OUR, label: 'RCB' },
      { x: 78, y: 84, color: OUR, label: 'RB' },
      { x: 26, y: 74, color: OUR, label: 'LM' },
      { x: 42, y: 70, color: OUR, label: 'LCM' },
      { x: 60, y: 70, color: OUR, label: 'RCM' },
      { x: 74, y: 74, color: OUR, label: 'RM' },
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
      // OUR: GK steps out aggressively
      { x1: 50,  y1: 97,  x2: 50, y2: 91, color: ARR,  style: 'solid' },
      // OUR: LCB steps forward to challenge header
      { x1: 40,  y1: 89,  x2: 40, y2: 83, color: ARR,  style: 'solid' },
      // OUR: RCB steps forward to challenge header
      { x1: 60,  y1: 89,  x2: 60, y2: 83, color: ARR,  style: 'solid' },
      // OUR: LB covers near-post area
      { x1: 22,  y1: 84,  x2: 28, y2: 89, color: ARR2, style: 'dash' },
      // OUR: RB covers far-post area
      { x1: 78,  y1: 84,  x2: 72, y2: 89, color: ARR2, style: 'dash' },
      // OUR: LCM presses forward to win the delivery
      { x1: 42,  y1: 70,  x2: 44, y2: 80, color: ARR,  style: 'solid' },
      // OUR: RCM presses forward to win the delivery
      { x1: 60,  y1: 70,  x2: 58, y2: 80, color: ARR,  style: 'solid' },
      // OUR: LF/RF hold near midfield ready for counter
      { x1: 16,  y1: 56,  x2: 16, y2: 50, color: ARR2, style: 'dash' },
      { x1: 84,  y1: 56,  x2: 84, y2: 50, color: ARR2, style: 'dash' }
    ]
  }
});
