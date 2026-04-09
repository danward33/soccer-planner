plays.push({
  id: 'def-gk-equal',
  situation: 'Goal Kick',
  level: 'equal',
  side: 'defense',
  title: 'Defense Goal Kick — Man-to-Man Mark',
  goal: 'Find the opponent nearest to you and stay close to her. Do not let anyone receive the kick without a defender right there.',
  steps: [
    { text: 'Before the kick, each player finds an opponent to cover and moves to the goal side of her.' },
    { text: 'LF presses their goalkeeper. RF gets between the keeper and the nearest defender.' },
    { text: 'When the ball is kicked, every player stays with her opponent — watch your player, not the ball.' },
    { text: 'If your player does not get the ball, stay close and be ready.' }
  ],
  keys: [
    'Find your player before the kick and get goal-side of her',
    'Stay between your player and our goal at all times',
    'Watch your player\'s run, not the ball',
    'Stay close even if your player does not get the ball'
  ],
  playerData: {
    GK: {
      role: 'Make sure every opponent has a teammate covering her. Be ready for anything into the box.',
      before: 'Check that every opponent is covered. Make sure their forwards are being marked.',
      during: 'Stay in position. If the ball comes into the box, come and claim it.',
      tips: ['Check that everyone is covered', 'Stay on your line unless the ball comes to you']
    },
    LB: {
      role: 'Mark their wide midfielder on the right (their RM). Follow wherever she goes.',
      before: 'Find their RM and get between her and our goal.',
      during: 'Follow her wherever she goes. If the ball comes to her, close her down.',
      tips: ['Stay between her and our goal', 'Watch her — not the ball', 'Close down if the ball comes to her']
    },
    LCB: {
      role: 'Mark their right forward (their RF). Stay close and goal-side.',
      before: 'Find their RF and mark her tightly. Stay between her and our goal.',
      during: 'Follow wherever she moves. If she gets the ball, close her down right away.',
      tips: ['Stay close — within arm\'s reach', 'Make her receive with her back to goal', 'Be physical']
    },
    RCB: {
      role: 'Mark their left forward (their LF). This is the tightest mark.',
      before: 'Find their LF before the kick. Get goal-side and physical.',
      during: 'Do not let her receive facing goal. If she turns, do not let her drive forward.',
      tips: ['Stay tight and physical', 'Contest everything', 'Cover with LCB if the forwards switch']
    },
    RB: {
      role: 'Mark their wide midfielder on the left (their LM). Follow wherever she goes.',
      before: 'Find their LM and get goal-side.',
      during: 'Follow wherever she goes. Stay tight.',
      tips: ['Stay goal-side', 'Follow her run — do not watch the ball', 'Be ready to help LCB']
    },
    LM: {
      role: 'Mark their central midfielder on the right (their RCM). Close down when she receives.',
      before: 'Find their RCM and get goal-side.',
      during: 'Mark her tightly. If she moves wide, follow to the edge of your area.',
      tips: ['Mark tight centrally', 'Follow her if she moves wide', 'Step up when the ball comes to her']
    },
    LCM: {
      role: 'Mark their left central midfielder (their LCM). Protect the center.',
      before: 'Find their LCM before the kick. The center is the most important area to protect.',
      during: 'Stay close. Follow her only to midfield — do not go too deep.',
      tips: ['The center is the highest priority', 'Do not follow too deep', 'Win the ball if it comes your way']
    },
    RCM: {
      role: 'Mark their right central midfielder (their RCM). Block the center.',
      before: 'Find their RCM and get goal-side.',
      during: 'Mark tight. Close her down right away when she receives.',
      tips: ['No free turns in the center', 'Close her right away when she gets the ball', 'Force her back']
    },
    RM: {
      role: 'Mark their wide midfielder on the left (their LM). Stay tight.',
      before: 'Find their LM. Stay goal-side and slightly inside.',
      during: 'Follow her wherever she goes. If she receives wide, close her down right away.',
      tips: ['Push her toward the line, not inside', 'Stay goal-side', 'Be ready to help RB']
    },
    LF: {
      role: 'Press their goalkeeper to rush the kick.',
      before: 'Sprint toward their goalkeeper as she places the ball.',
      during: 'Get close to the goalkeeper — make her feel the pressure and rush her kick.',
      tips: ['Sprint at full pace', 'Make her uncomfortable', 'If she passes short, go to that player too']
    },
    RF: {
      role: 'Block the short pass to their nearest defender.',
      before: 'Position between their goalkeeper and their nearest defender.',
      during: 'If their defender receives, close her right away. If the kick goes long, drop back to midfield.',
      tips: ['Cut off the short pass', 'Close right away if their defender receives', 'Drop into your shape if they kick long']
    }
  },
  elements: {
    players: [
      { x: 50, y: 95, color: OUR, label: 'GK' },
      { x: 20, y: 42, color: OUR, label: 'LB' },
      { x: 36, y: 46, color: OUR, label: 'LCB' },
      { x: 64, y: 46, color: OUR, label: 'RCB' },
      { x: 80, y: 42, color: OUR, label: 'RB' },
      { x: 20, y: 36, color: OUR, label: 'LM' },
      { x: 40, y: 26, color: OUR, label: 'LCM' },
      { x: 60, y: 26, color: OUR, label: 'RCM' },
      { x: 80, y: 36, color: OUR, label: 'RM' },
      { x: 40, y: 18, color: OUR, label: 'LF' },
      { x: 60, y: 26, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 14, y: 22, color: OPP, label: 'LB' },
      { x: 36, y: 20, color: OPP, label: 'LCB' },
      { x: 64, y: 20, color: OPP, label: 'RCB' },
      { x: 86, y: 22, color: OPP, label: 'RB' },
      { x: 20, y: 40, color: OPP, label: 'LM' },
      { x: 40, y: 44, color: OPP, label: 'LCM' },
      { x: 60, y: 44, color: OPP, label: 'RCM' },
      { x: 80, y: 40, color: OPP, label: 'RM' },
      { x: 36, y: 48, color: OPP, label: 'LF' },
      { x: 64, y: 48, color: OPP, label: 'RF' },
      { x: 50, y:  6, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: GK passes short to LCB to build out
      { x1: 50, y1:  6, x2: 36, y2: 20, color: OPP,  style: 'solid' },
      // OPP: LF/RF push toward midline
      { x1: 36, y1: 48, x2: 36, y2: 54, color: OPP,  style: 'dash' },
      { x1: 64, y1: 48, x2: 64, y2: 54, color: OPP,  style: 'dash' },
      // OPP: central mids push forward to support
      { x1: 40, y1: 44, x2: 40, y2: 50, color: OPP,  style: 'dash' },
      { x1: 60, y1: 44, x2: 60, y2: 50, color: OPP,  style: 'dash' },
      // OUR: LF sprints to press their GK
      { x1: 40, y1: 18, x2: 50, y2:  8, color: ARR,  style: 'solid' },
      // OUR: RF cuts off short pass to their LCB
      { x1: 60, y1: 26, x2: 50, y2: 20, color: ARR,  style: 'solid' },
      // OUR: backs track their marks — step up tight
      { x1: 20, y1: 42, x2: 20, y2: 36, color: ARR2, style: 'dash' },
      { x1: 80, y1: 42, x2: 80, y2: 36, color: ARR2, style: 'dash' },
      { x1: 36, y1: 46, x2: 36, y2: 40, color: ARR2, style: 'dash' },
      { x1: 64, y1: 46, x2: 64, y2: 40, color: ARR2, style: 'dash' },
      // OUR: mids push up to close onto their marks
      { x1: 40, y1: 26, x2: 40, y2: 20, color: ARR2, style: 'dash' },
      { x1: 60, y1: 26, x2: 60, y2: 20, color: ARR2, style: 'dash' }
    ]
  }
});
