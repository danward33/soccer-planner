plays.push({
  id: 'def-fk-weaker',
  situation: 'Direct Free Kick',
  level: 'weaker',
  side: 'defense',
  title: 'Defense Free Kick — Step Up + Press',
  goal: 'OPP LCM is taking the kick. Their LF has split wide left and their RCM has split wide right. Step forward as a team and press the ball. Close all the space — do not sit back and wait.',
  steps: [
    { text: 'LF sprints toward the ball the moment it is placed — make the kicker feel rushed.' },
    { text: 'The back 4 drops back together toward our goal at the kick — hold a compact defensive line and watch for OPP LF wide left and OPP RCM wide right.' },
    { text: 'Midfielders push up too — close the space between us and their players who have moved ahead of the ball.' },
    { text: 'If they kick over the top, our goalkeeper comes out to claim the ball.' }
  ],
  keys: [
    'All four defenders drop back together at the kick — hold a compact line, do not step forward',
    'LB watches OPP LF wide left, RB watches OPP RCM wide right',
    'LF runs at the kicker to force a rushed kick',
    'If the ball goes over the top, the goalkeeper comes out to get it'
  ],
  playerData: {
    GK: {
      role: 'Come off your line and be ready to sweep any ball played over the top.',
      before: 'Move toward the edge of the penalty area. Be ready for a ball kicked over our line.',
      during: 'If they play over the top, sprint out and get to the ball first.',
      tips: ['Come off your line — you are the last line of defense', 'Get to any long ball before their player', 'Guide your defenders']
    },
    LB: {
      role: 'Drop back with the defensive line at the kick — watch for OPP LF who has split wide left.',
      before: 'Stay level with the rest of the back 4. Keep an eye on OPP LF out wide.',
      during: 'Drop back together with your teammates at the kick. If the ball goes wide left to OPP LF, track her and close.',
      tips: ['Stay level with the other defenders', 'Watch OPP LF out wide', 'Close quickly if the ball goes wide to her']
    },
    LCB: {
      role: 'Drop back with the defensive line at the kick — stay compact and do not step forward.',
      before: 'Stay level with the back 4. Be ready to drop back together.',
      during: 'Move back with your teammates. Hold the defensive line and win any ball that comes your way.',
      tips: ['Drop back as a group — do not step forward', 'Stay level with your teammates', 'Win any ball in front of you']
    },
    RCB: {
      role: 'Drop back with the defensive line — stay level and do not break forward.',
      before: 'Stay level with LCB. Watch for a runner coming from the right.',
      during: 'Drop back with your teammates. Stay disciplined — do not go forward while others drop.',
      tips: ['Do not step forward — drop back with the line', 'Stay level and move together', 'Win any ball that drops in your area']
    },
    RB: {
      role: 'Drop back with the defensive line — watch for OPP RCM who has split wide right.',
      before: 'Stay level with the back 4. Keep an eye on OPP RCM who is out wide right.',
      during: 'Drop back together with the team at the kick. If the ball goes wide right to OPP RCM, track and close.',
      tips: ['Drop back together — do not step forward', 'Watch OPP RCM wide right', 'Close quickly if the ball goes wide to her']
    },
    LM: {
      role: 'Push up to close the space between you and their midfielders.',
      before: 'Move up and be ready to press as soon as the ball is kicked.',
      during: 'Step to any ball played into the middle. Close right away.',
      tips: ['Push up — close the gap', 'Be first to any ball played into midfield', 'Do not give them time on the ball']
    },
    LCM: {
      role: 'Push up and block passes through the center.',
      before: 'Move up. Be ready to press any ball played through the middle.',
      during: 'Step to any ball in the center. Force them to go backward.',
      tips: ['Block the center', 'Step to the ball right away', 'Win loose balls and play forward']
    },
    RCM: {
      role: 'Push up and press the right side of midfield.',
      before: 'Move up. Block the passing lane on the right side.',
      during: 'Press any ball played to the right. Force them backward.',
      tips: ['Push up with the rest of midfield', 'Press together', 'Win the ball and play forward']
    },
    RM: {
      role: 'Push up and cover behind the press on the right side.',
      before: 'Move up. Be ready to press any ball played wide right.',
      during: 'Cover behind the press. Do not let them slip the ball into the right side.',
      tips: ['Cover behind the press', 'Be ready if they go wide', 'Stay compact with the rest of midfield']
    },
    LF: {
      role: 'Sprint at the ball the moment it is placed — make the kicker feel rushed.',
      before: 'As soon as the ball is placed, sprint toward the kicker.',
      during: 'Close in fast — even if you do not get there, it makes her rush the kick.',
      tips: ['Sprint at full speed', 'Force a rushed kick', 'If she passes to a teammate, close that player next']
    },
    RF: {
      role: 'Hold your position for the counter-attack — be ready if we win the ball.',
      before: 'Stay in the midfield area. Be ready to receive a clearance or ball played forward.',
      during: 'If we win the ball, go right away. Be the first forward run.',
      tips: ['Stay in midfield — be the counter outlet', 'Do not come back into our half', 'Move forward the moment we win the ball']
    }
  },
  elements: {
    players: [
      { x: 50, y: 88, color: OUR, label: 'GK' },
      { x: 12, y: 52, color: OUR, label: 'LB' },
      { x: 35, y: 50, color: OUR, label: 'LCB' },
      { x: 65, y: 50, color: OUR, label: 'RCB' },
      { x: 88, y: 52, color: OUR, label: 'RB' },
      { x: 16, y: 38, color: OUR, label: 'LM' },
      { x: 38, y: 34, color: OUR, label: 'LCM' },
      { x: 62, y: 34, color: OUR, label: 'RCM' },
      { x: 84, y: 38, color: OUR, label: 'RM' },
      { x: 36, y: 26, color: OUR, label: 'LF' },
      { x: 68, y: 28, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 14, y: 14, color: OPP, label: 'LB' },
      { x: 36, y: 18, color: OPP, label: 'LCB' },
      { x: 64, y: 18, color: OPP, label: 'RCB' },
      { x: 86, y: 14, color: OPP, label: 'RB' },
      { x: 22, y: 40, color: OPP, label: 'LM' },
      { x: 42, y: 30, color: OPP, label: 'LCM' },
      { x: 80, y: 40, color: OPP, label: 'RCM' },
      { x: 68, y: 36, color: OPP, label: 'RM' },
      { x:  8, y: 44, color: OPP, label: 'LF' },
      { x: 56, y: 42, color: OPP, label: 'RF' },
      { x: 42, y: 30, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: LCM takes the free kick — played forward into our half
      { x1: 42, y1: 30, x2: 40, y2: 46, color: OPP,  style: 'solid' },
      // OPP: LM pushes ahead to receive
      { x1: 22, y1: 40, x2: 22, y2: 48, color: OPP,  style: 'dash' },
      // OPP: RF pushes forward centrally
      { x1: 56, y1: 42, x2: 56, y2: 50, color: OPP,  style: 'dash' },
      // OPP: RM pushes ahead right
      { x1: 68, y1: 36, x2: 68, y2: 44, color: OPP,  style: 'dash' },
      // OUR: LF presses the ball immediately
      { x1: 36, y1: 26, x2: 42, y2: 30, color: ARR,  style: 'solid' },
      // OUR: LCB/RCB drop back toward our goal
      { x1: 35, y1: 50, x2: 35, y2: 58, color: ARR,  style: 'solid' },
      { x1: 65, y1: 50, x2: 65, y2: 58, color: ARR,  style: 'solid' },
      // OUR: LB/RB drop back with the line
      { x1: 12, y1: 52, x2: 12, y2: 60, color: ARR2, style: 'dash' },
      { x1: 88, y1: 52, x2: 88, y2: 60, color: ARR2, style: 'dash' },
      // OUR: mids push up to close central space
      { x1: 38, y1: 34, x2: 38, y2: 28, color: ARR2, style: 'dash' },
      { x1: 62, y1: 34, x2: 62, y2: 28, color: ARR2, style: 'dash' },
      // OUR: RF holds — counter outlet if we win the ball
      { x1: 68, y1: 28, x2: 68, y2: 18, color: ARR2, style: 'dash' }
    ]
  }
});
