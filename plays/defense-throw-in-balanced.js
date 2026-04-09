plays.push({
  id: 'def-ti-equal',
  situation: 'Throw-in',
  level: 'equal',
  side: 'defense',
  title: 'Defense Throw-in — Man-to-Man Near the Ball',
  goal: 'Make sure every opponent near the throw has a defender on her. No one receives the ball unopposed — make it hard to throw and win it back.',
  steps: [
    { text: 'RB, RM, and RCM each find an opponent near the throw and get goal-side of her before the ball is thrown.' },
    { text: 'OPP LF has the ball and is running down the left line — LM marks her tightly and tracks her run toward our goal.' },
    { text: 'When the throw is taken, the player nearest the ball closes right away while everyone else stays with their player.' },
    { text: 'Win the ball — if we intercept or the receiver misses her touch, press right away and take possession.' }
  ],
  keys: [
    'Find your player before the throw and get between her and our goal',
    'The whole team shifts toward the ball side together',
    'Stay goal-side of your player — between her and our goal',
    'Win the ball right away if there is a loose touch or bad pass'
  ],
  playerData: {
    GK: {
      role: 'Watch the box and be ready to sweep if they get in behind.',
      before: 'Make sure every opponent near the throw has a defender on her. Let a teammate know if anyone is free.',
      during: 'Stay alert. Come off your line if a ball is played in behind.',
      tips: ['Make sure everyone is covered', 'Move up if they get behind our defense', 'Be the sweeper if they break through']
    },
    LB: {
      role: 'Shift right to cover the center — do not leave the middle open.',
      before: 'Move toward the center as the team shifts right. Cover the gap left by RB and RCB.',
      during: 'Hold the defensive line. If a runner comes through the center, you cover her.',
      tips: ['Shift right with the team', 'Cover the central gap', 'Hold the defensive line']
    },
    LCB: {
      role: 'Shift right and cover any runner coming through the center.',
      before: 'Shift toward the center, covering any run from their forward toward goal.',
      during: 'Follow any runner through the center. Stay goal-side — be the last line of defense.',
      tips: ['Shift right with the defensive line', 'Mark the central runner', 'Hold the line with RCB']
    },
    RCB: {
      role: 'Shift right to cover the right-center zone near the throw.',
      before: 'Move right to cover any runners going in behind on the right side.',
      during: 'Be ready to step to a runner or intercept a ball played behind.',
      tips: ['Shift right — cover the channel', 'Step up if a runner drops in front of you', 'Win anything in your zone']
    },
    RB: {
      role: 'Mark the opponent nearest the thrower — the main target.',
      before: 'Find the nearest opponent to the thrower and get goal-side of her before the throw.',
      during: 'Stay close to her. If she receives, close right away and make her first touch difficult.',
      tips: ['Stay tight — get between her and our goal', 'Make her first touch difficult', 'If she receives, force her backward']
    },
    LM: {
      role: 'Mark OPP LF who is running down the left line — stay on her and do not let her go.',
      before: 'Find OPP LF near the left touchline. Get goal-side of her before she receives the throw.',
      during: 'Track her run down the line. Stay between her and our goal. If she receives, close right away.',
      tips: ['Stay goal-side — between her and our goal', 'Track her run down the line', 'Close immediately if she receives the ball']
    },
    LCM: {
      role: 'Shift right and block passes through the middle.',
      before: 'Shift right toward the throw side. Close the central passing lane.',
      during: 'If a ball is played through the middle, step right away to close it down.',
      tips: ['Shift as a midfield unit', 'Block the central channel', 'Be first to any loose ball centrally']
    },
    RCM: {
      role: 'Mark the second opponent near the throw — stay close, goal-side.',
      before: 'Find the second opponent near the throw. Get goal-side before the ball is thrown.',
      during: 'Stay tight on your player. If the throw goes to her, close right away.',
      tips: ['Stay tight', 'Close right away when she receives', 'Force her to play backward']
    },
    RM: {
      role: 'Mark the third opponent near the throw — block the forward outlet.',
      before: 'Find the opponent who is the forward outlet from the throw. Get goal-side of her.',
      during: 'Follow wherever she moves. Do not let her receive the ball facing forward.',
      tips: ['Follow her run', 'Force her to receive with her back to our goal', 'Close hard if she receives']
    },
    LF: {
      role: 'Hold your position on the far side and be ready for the counter-attack.',
      before: 'Stay wide on the left. Be ready to receive a quick pass if we win the ball.',
      during: 'If we win the ball, be open on the far side for a quick counter.',
      tips: ['Stay wide on the left — be the counter outlet', 'Be ready when we win possession', 'Move forward right away with the ball']
    },
    RF: {
      role: 'Hold your position — be ready for the counter-attack.',
      before: 'Stay forward. Be ready to receive if we win possession near the throw.',
      during: 'If we win the ball, be the first forward run. Go at their back line.',
      tips: ['Stay forward', 'Be the counter-attack target', 'Sprint forward right away when we win the ball']
    }
  },
  elements: {
    players: [
      { x: 50, y: 95, color: OUR, label: 'GK' },
      { x: 26, y: 80, color: OUR, label: 'LB' },
      { x: 46, y: 78, color: OUR, label: 'LCB' },
      { x: 68, y: 74, color: OUR, label: 'RCB' },
      { x: 80, y: 68, color: OUR, label: 'RB' },
      { x: 14, y: 66, color: OUR, label: 'LM' },
      { x: 52, y: 63, color: OUR, label: 'LCM' },
      { x: 68, y: 62, color: OUR, label: 'RCM' },
      { x: 78, y: 60, color: OUR, label: 'RM' },
      { x: 16, y: 52, color: OUR, label: 'LF' },
      { x: 56, y: 48, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 16, y: 30, color: OPP, label: 'LB' },
      { x: 36, y: 36, color: OPP, label: 'LCB' },
      { x: 64, y: 36, color: OPP, label: 'RCB' },
      { x: 84, y: 30, color: OPP, label: 'RB' },
      { x: 22, y: 54, color: OPP, label: 'LM' },
      { x: 44, y: 58, color: OPP, label: 'LCM' },
      { x: 66, y: 58, color: OPP, label: 'RCM' },
      { x: 76, y: 56, color: OPP, label: 'RM' },
      { x: 10, y: 66, color: OPP, label: 'LF' },
      { x: 80, y: 66, color: OPP, label: 'RF' },
      { x: -6, y: 62, color: OPP, label: 'LB' },
      { x:  0, y: 62, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: throw to OPP LF on the left line
      { x1:  0, y1: 62, x2: 10, y2: 66, color: OPP,  style: 'solid' },
      // OPP: LF runs down the left line toward our goal
      { x1: 10, y1: 66, x2:  8, y2: 78, color: OPP,  style: 'dash' },
      // OPP: RF makes a forward run centrally after the throw
      { x1: 80, y1: 66, x2: 80, y2: 74, color: OPP,  style: 'dash' },
      // OPP: LCM pushes into space ahead of our midfield
      { x1: 44, y1: 58, x2: 44, y2: 64, color: OPP,  style: 'dash' },
      // OPP: RCM pushes centrally to support
      { x1: 66, y1: 58, x2: 66, y2: 64, color: OPP,  style: 'dash' },
      // OUR: RB presses nearest receiver (OPP LF)
      { x1: 80, y1: 68, x2: 74, y2: 68, color: ARR,  style: 'solid' },
      // OUR: RM closes the second receiver
      { x1: 78, y1: 60, x2: 78, y2: 56, color: ARR,  style: 'solid' },
      // OUR: RCM tracks OPP RCM push forward
      { x1: 68, y1: 62, x2: 68, y2: 66, color: ARR2, style: 'dash' },
      // OUR: team shifts left toward ball as a unit
      { x1: 26, y1: 80, x2: 22, y2: 80, color: ARR2, style: 'dash' },
      { x1: 46, y1: 78, x2: 42, y2: 78, color: ARR2, style: 'dash' },
      // OUR: LM tracks OPP LF down the left line
      { x1: 14, y1: 66, x2: 10, y2: 78, color: ARR,  style: 'solid' },
      { x1: 52, y1: 63, x2: 48, y2: 63, color: ARR2, style: 'dash' },
      // OUR: LF ready for counter — outlet on far side
      { x1: 16, y1: 52, x2: 14, y2: 42, color: ARR2, style: 'dash' }
    ]
  }
});
