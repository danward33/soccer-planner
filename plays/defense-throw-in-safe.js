plays.push({
  id: 'def-ti-strong',
  situation: 'Throw-in',
  level: 'strong',
  side: 'defense',
  title: 'Defense Throw-in — Compact Zonal Shape',
  goal: 'Stay in your position and hold your zone. Do not chase the ball out of position — stay organized and make them earn every forward pass.',
  steps: [
    { text: 'Hold our defensive shape — no one leaves their position to chase the ball.' },
    { text: 'RB and RM close in near the thrower. Watch for OPP RF making a run down the right line toward our goal — RB must track her.' },
    { text: 'The midfield 4 holds a tight line across the field — block passes through the center and be first to loose balls.' },
    { text: 'When they complete the throw, the nearest player closes right away while everyone else stays in position.' }
  ],
  keys: [
    'Stay in your zone — do not be pulled out by runners',
    'Force them to throw backward or sideways — make them earn every forward pass',
    'Stay compact — keep the team close together',
    'The nearest player closes, everyone else holds their shape'
  ],
  playerData: {
    GK: {
      role: 'Watch the play and be ready for anything into the box.',
      before: 'Position yourself at the top of the penalty area. Watch for any gaps in our shape.',
      during: 'Stay alert. If a ball is played into the box, come out and claim it.',
      tips: ['Watch for gaps in the defensive shape', 'Be ready to sweep if they play over the top', 'Stay focused on the ball']
    },
    LB: {
      role: 'Hold the left side of the defensive block.',
      before: 'Position on the left flank, level with LCB. Stay compact — cover the left zone.',
      during: 'Hold your position. If the ball comes left, step to it. Do not get pulled far to the other side.',
      tips: ['Stay level with LCB', 'Cover the left zone — do not drift right', 'Force any receiver on the left to play backward']
    },
    LCB: {
      role: 'Hold the left-center defensive zone.',
      before: 'Hold your central position. Be ready for a ball played behind toward their forward.',
      during: 'Stay goal-side of any runner in your zone. Win any ball played into your area.',
      tips: ['Stay in your zone', 'Do not follow runners out — hold the line', 'Win headers and clear long']
    },
    RCB: {
      role: 'Hold the right-center defensive zone.',
      before: 'Hold your position. Watch for runners trying to get behind you.',
      during: 'Hold the line with LCB. Clear anything that comes into your zone.',
      tips: ['Hold the line — do not step forward unless you can win the ball', 'Stay level with LCB', 'Be aggressive to any ball in your zone']
    },
    RB: {
      role: 'Close in on the first receiver near the thrower.',
      before: 'Move up close to where the throw will land. Be ready to press.',
      during: 'Close down whoever receives the throw. Force them to play backward.',
      tips: ['Close the first receiver', 'Stay tight — make her first touch difficult', 'Do not overcommit — stay on your feet']
    },
    LM: {
      role: 'Hold the left midfield zone — block the forward pass through the center.',
      before: 'Position center-left. Block the lane from the throw to their midfielders.',
      during: 'Hold your zone. If the ball enters your area, step and win it.',
      tips: ['Block the central passing lane', 'Move as a unit with the rest of midfield', 'Be first to loose balls']
    },
    LCM: {
      role: 'Hold the center-left zone — be ready to cover behind the RB press.',
      before: 'Position centrally. Be ready to cover if RB is beaten.',
      during: 'If RB is beaten, step forward to win it. Hold the central line otherwise.',
      tips: ['Cover behind the press', 'Move with the midfield unit', 'Win second balls']
    },
    RCM: {
      role: 'Cover the central zone near the throw-in side — watch for a quick pass through the middle.',
      before: 'Position center-right. Watch for a quick pass through the center.',
      during: 'Step to any ball played centrally. Close right away — no free touches in the center.',
      tips: ['Watch for a quick pass through the middle', 'Step forward right away', 'Win the ball and play forward']
    },
    RM: {
      role: 'Press near the thrower — close any receiver right away.',
      before: 'Position close to the throw-in zone. Work with RB to press together.',
      during: 'If RB is beaten or the ball goes past her, you press next.',
      tips: ['Work with RB — press together', 'If RB closes, you cover behind her', 'Force them backward — do not let them play forward freely']
    },
    LF: {
      role: 'Hold your position and be ready for the counter-attack.',
      before: 'Stay in midfield. Be visible as an outlet if we win the ball.',
      during: 'If we win the ball, receive it and move forward right away.',
      tips: ['Stay forward — be the counter outlet', 'Move forward the moment we win the ball', 'Sprint onto any clearance']
    },
    RF: {
      role: 'Hold a forward position — be ready for the counter-attack.',
      before: 'Stay forward. Mirror LF on the opposite side.',
      during: 'If we win the ball, be the target for a quick forward pass.',
      tips: ['Stay forward and wide', 'Be a counter-attack target', 'Move forward right away when we win possession']
    }
  },
  elements: {
    players: [
      { x: 50, y: 95, color: OUR, label: 'GK' },
      { x: 14, y: 82, color: OUR, label: 'LB' },
      { x: 36, y: 80, color: OUR, label: 'LCB' },
      { x: 64, y: 80, color: OUR, label: 'RCB' },
      { x: 84, y: 68, color: OUR, label: 'RB' },
      { x: 18, y: 65, color: OUR, label: 'LM' },
      { x: 38, y: 63, color: OUR, label: 'LCM' },
      { x: 62, y: 62, color: OUR, label: 'RCM' },
      { x: 80, y: 65, color: OUR, label: 'RM' },
      { x: 26, y: 50, color: OUR, label: 'LF' },
      { x: 68, y: 48, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 16, y: 30, color: OPP, label: 'LB' },
      { x: 36, y: 38, color: OPP, label: 'LCB' },
      { x: 64, y: 38, color: OPP, label: 'RCB' },
      { x: 84, y: 30, color: OPP, label: 'RB' },
      { x: 20, y: 56, color: OPP, label: 'LM' },
      { x: 42, y: 60, color: OPP, label: 'LCM' },
      { x: 62, y: 58, color: OPP, label: 'RCM' },
      { x: 78, y: 56, color: OPP, label: 'RM' },
      { x: 60, y: 72, color: OPP, label: 'LF' },
      { x: 88, y: 68, color: OPP, label: 'RF' },
      { x: 106, y: 68, color: OPP, label: 'LB' },
      { x: 100, y: 68, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: throw to nearest receiver (OPP RF) on the right line
      { x1: 100, y1: 68, x2: 88, y2: 68, color: OPP,  style: 'solid' },
      // OPP: RF runs down the right line toward our goal
      { x1: 88,  y1: 68, x2: 94, y2: 78, color: OPP,  style: 'dash' },
      // OPP: LF makes a forward run centrally to create a second option
      { x1: 60, y1: 72, x2: 56, y2: 78, color: OPP,  style: 'dash' },
      // OPP: RM pushes forward after the throw
      { x1: 78, y1: 56, x2: 78, y2: 62, color: OPP,  style: 'dash' },
      // OPP: RCM pushes into space in front of our midfield
      { x1: 62, y1: 58, x2: 62, y2: 64, color: OPP,  style: 'dash' },
      // OUR: RB closes first receiver immediately
      { x1: 84, y1: 68, x2: 80, y2: 68, color: ARR,  style: 'solid' },
      // OUR: RM tracks OPP RM — covers behind RB
      { x1: 80, y1: 65, x2: 80, y2: 68, color: ARR2, style: 'dash' },
      // OUR: midfield slides right as a unit toward ball
      { x1: 62, y1: 62, x2: 66, y2: 62, color: ARR2, style: 'dash' },
      { x1: 38, y1: 63, x2: 42, y2: 63, color: ARR2, style: 'dash' },
      // OUR: RCB shifts right to track OPP LF run
      { x1: 64, y1: 80, x2: 68, y2: 80, color: ARR2, style: 'dash' }
    ]
  }
});
