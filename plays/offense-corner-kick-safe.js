plays.push({
  id: 'ck-strong',
  situation: 'Corner Kick',
  level: 'strong',
  side: 'offense',
  title: 'Corner Kick — Short Corner',
  goal: 'Do not cross from the corner flag. Pass it short to RM near the byline, then cross from a better angle.',
  steps: [
    { text: 'RCM passes short to RM near the byline — this creates a better crossing angle.' },
    { text: 'RM drives a few steps and crosses low into the 6-yard box.' },
    { text: 'Forwards go to the near and far post. Midfielders attack the penalty spot.' }
  ],
  keys: [
    'Short corner gives a better angle for the cross — use it',
    'The cross goes low into the 6-yard box — not floated',
    'Time your run to arrive with the ball, not before'
  ],
  playerData: {
    GK: {
      role: 'Guard our goal and be ready if the ball is cleared back.',
      before: 'Stay in your goal and watch the whole play.',
      during: 'Do not come out unless a shot is heading at your goal.',
      tips: ['Stay in your goal', 'Do not come off your line', 'Be ready for a cleared ball']
    },
    LB: {
      role: 'Stay at the halfway line to stop a counter attack.',
      before: 'Stay at halfway — do not go into the attacking box.',
      during: 'Hold your position. If they clear the ball long, you are the first defender.',
      tips: ['Stay at halfway', 'Be ready if they clear the ball long', 'Do not let their forwards get behind you']
    },
    LCB: {
      role: 'Stay at the halfway line.',
      before: 'Stay at halfway with the other defenders.',
      during: 'Hold your position.',
      tips: ['Stay at halfway', 'Hold the line', 'Do not go forward']
    },
    RCB: {
      role: 'Stay at the halfway line.',
      before: 'Stay at halfway with LCB.',
      during: 'Hold your position.',
      tips: ['Stay at halfway', 'Hold the line', 'Be ready to defend']
    },
    RB: {
      role: 'Stay at the halfway line.',
      before: 'Stay at halfway with the other defenders.',
      during: 'Hold your position. You are the last line if they counter.',
      tips: ['Stay at halfway', 'Do not go forward', 'Be the last line of defense']
    },
    LM: {
      role: 'Attack the penalty spot for any second ball.',
      before: 'Position just outside the penalty area.',
      during: 'When RM crosses, attack the penalty spot — shoot any clearance right away.',
      tips: ['Attack the penalty spot', 'Shoot first time', 'Arrive as the cross comes in']
    },
    LCM: {
      role: 'Attack inside the box for any rebound.',
      before: 'Position inside the penalty area.',
      during: 'When RM crosses, attack any ball that falls to you — shoot right away.',
      tips: ['Stay inside the box', 'Shoot any ball right away', 'Keep moving forward']
    },
    RCM: {
      role: 'Take the corner kick. Pass it short to RM near the byline.',
      before: 'Get to the corner flag on the right and wait for players to set up in the box.',
      during: 'Pass short to RM — make it crisp so she can cross right away.',
      tips: ['Short and accurate to RM', 'Wait until RM is ready and moving', 'Stay at the corner until the cross is made']
    },
    RM: {
      role: 'Receive the short corner from RCM and cross into the box.',
      before: 'Position near the byline to receive the short pass.',
      during: 'Receive from RCM, drive a few steps to improve your angle, then cross low into the 6-yard box.',
      tips: ['Receive and cross quickly', 'Cross low and hard into the 6-yard box', 'Do not wait too long']
    },
    LF: {
      role: 'Attack the near post. Finish first time.',
      before: 'Position at the near post, just inside the 6-yard box.',
      during: 'When RM crosses, attack the near post and finish right away.',
      tips: ['Attack the near post', 'Arrive as the ball arrives', 'Shoot first time']
    },
    RF: {
      role: 'Attack the far post. Finish anything that goes across.',
      before: 'Position at the far post.',
      during: 'When RM crosses, attack the far post and be ready to finish.',
      tips: ['Attack the far post', 'Keep moving into the box', 'Finish first time']
    }
  },
  elements: {
    players: [
      { x:  50, y: 97, color: OUR, label: 'GK' },
      { x:  14, y: 46, color: OUR, label: 'LB' },
      { x:  34, y: 46, color: OUR, label: 'LCB' },
      { x:  58, y: 46, color: OUR, label: 'RCB' },
      { x:  84, y: 46, color: OUR, label: 'RB' },
      { x:  34, y: 14, color: OUR, label: 'LM' },
      { x:  46, y: 18, color: OUR, label: 'LCM' },
      { x:  80, y: 10, color: OUR, label: 'RM' },
      { x:  38, y:  8, color: OUR, label: 'LF' },
      { x:  52, y: 12, color: OUR, label: 'RF' },
      { x: 106, y:  3, color: OUR, label: 'RCM' },
      { x:  50, y:  5, color: OPP, label: 'GK' },
      { x:  26, y: 12, color: OPP, label: 'LB' },
      { x:  40, y: 14, color: OPP, label: 'LCB' },
      { x:  60, y: 14, color: OPP, label: 'RCB' },
      { x:  76, y: 12, color: OPP, label: 'RB' },
      { x:  22, y: 26, color: OPP, label: 'LM' },
      { x:  42, y: 28, color: OPP, label: 'LCM' },
      { x:  58, y: 28, color: OPP, label: 'RCM' },
      { x:  78, y: 26, color: OPP, label: 'RM' },
      { x:  34, y: 44, color: OPP, label: 'LF' },
      { x:  62, y: 44, color: OPP, label: 'RF' },
      { x: 100, y:  1, color: BALL, label: '' }
    ],
    arrows: [
      { x1: 100, y1:  1, x2:  80, y2: 10, color: ARR,  style: 'dash' },
      { x1:  80, y1: 10, x2:  42, y2:  5, color: ARR,  style: 'solid' },
      { x1:  38, y1:  8, x2:  36, y2:  3, color: ARR2, style: 'dash' },
      { x1:  52, y1: 12, x2:  54, y2:  4, color: ARR2, style: 'dash' },
      { x1:  46, y1: 18, x2:  48, y2:  6, color: ARR2, style: 'dash' }
    ]
  }
});
