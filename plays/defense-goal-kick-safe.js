plays.push({
  id: 'def-gk-strong',
  situation: 'Goal Kick',
  level: 'strong',
  side: 'defense',
  title: 'Defense Goal Kick — Compact Zonal Block',
  goal: 'Stay in your position and hold your zone. Do not leave gaps in the middle. Cover your area and be ready for the ball.',
  steps: [
    { text: 'Set up in our shape as they place the ball — everyone in position, no gaps.' },
    { text: 'LF and RF press their defenders to cut off the short goal kick option.' },
    { text: 'As the ball moves, the whole team shifts together toward the ball side.' },
    { text: 'If they kick long, defenders win the header. Midfielders go for the loose ball.' }
  ],
  keys: [
    'Stay in your zone — do not chase the ball out of position',
    'Cover the middle — do not let passes through the center',
    'Shift together as a team',
    'Win the loose ball after any long kick'
  ],
  playerData: {
    GK: {
      role: 'Command your penalty area and be ready for anything into the box.',
      before: 'Position at the top of the 6-yard box and watch the kick.',
      during: 'If the ball comes into the box, come and claim it. Be ready for anything over the top.',
      tips: ['Command the 18-yard box', 'Stay focused on the play', 'Be ready for a ball over the top']
    },
    LB: {
      role: 'Hold the left side of our defensive shape.',
      before: 'Position level with LCB. Stay compact — no gap on the left.',
      during: 'Hold your zone. If the ball comes left, step to win it.',
      tips: ['Stay level with LCB', 'Do not let their player run in behind you', 'Only step when you can win the ball']
    },
    LCB: {
      role: 'Cover the left-center zone and win any long ball in your area.',
      before: 'Hold your central position. Watch their forward on the left.',
      during: 'Win any header that comes your way. Head it up and away — not across our own goal.',
      tips: ['Head it away, not across goal', 'Watch for runners going behind you', 'Hold the line with RCB']
    },
    RCB: {
      role: 'Cover the right-center zone and clear everything.',
      before: 'Hold your central position. Watch their forward on the right.',
      during: 'Win any long ball. Clear it far.',
      tips: ['Clear the ball far and high', 'Stay between their forward and goal', 'Hold the line with LCB']
    },
    RB: {
      role: 'Hold the right side of our defensive shape.',
      before: 'Stay level with RCB. No gap on the right.',
      during: 'Hold your zone. If the ball comes right, step and win it.',
      tips: ['Stay level with RCB', 'Do not let their player run in behind', 'Hold the defensive line']
    },
    LM: {
      role: 'Hold the left-center midfield zone and block passes through the middle.',
      before: 'Position central-left. Close the passing lane through the middle.',
      during: 'Move with the team toward the ball. If the ball enters your zone, step and win it.',
      tips: ['Block the center', 'Move together with the midfield group', 'Be first to the loose ball']
    },
    LCM: {
      role: 'Cover the center-left zone and win loose balls in midfield.',
      before: 'Position centrally ahead of LCB.',
      during: 'If you win the ball, play it simple — no risky passes in our own half.',
      tips: ['Stay central', 'Win loose balls aggressively', 'Play it safe if you win it under pressure']
    },
    RCM: {
      role: 'Cover the center-right zone — no gap between you and LCM.',
      before: 'Position central-right, level with LCM.',
      during: 'Move toward the ball side with the team. Step to any ball in your zone.',
      tips: ['No gap between you and LCM', 'Move as a unit', 'Be aggressive to loose balls']
    },
    RM: {
      role: 'Hold the right-center midfield zone.',
      before: 'Stay compact — do not move too wide before needed.',
      during: 'Hold your shape. If the ball comes right, you can step up.',
      tips: ['Hold your shape before pressing', 'Do not chase wide out of position', 'Be ready if the ball switches']
    },
    LF: {
      role: 'Press their defenders and cut off the short goal kick option.',
      before: 'Position toward their left back defender. Be ready to press.',
      during: 'If they try to pass short to a defender, press right away and force them to kick long.',
      tips: ['Press their defender if she receives', 'Cut off the easy short pass', 'Drop back into shape if they kick long']
    },
    RF: {
      role: 'Press their defenders and cut off the short goal kick option.',
      before: 'Position toward their right back defender. Work with LF.',
      during: 'Press their defenders. Force them long. Drop back into your shape if they kick long.',
      tips: ['Press their defender', 'Work with LF to cut off short passes', 'Drop into shape if they kick long']
    }
  },
  elements: {
    players: [
      { x: 50, y: 95, color: OUR, label: 'GK' },
      { x: 18, y: 40, color: OUR, label: 'LB' },
      { x: 32, y: 46, color: OUR, label: 'LCB' },
      { x: 68, y: 46, color: OUR, label: 'RCB' },
      { x: 82, y: 40, color: OUR, label: 'RB' },
      { x: 14, y: 36, color: OUR, label: 'LM' },
      { x: 38, y: 26, color: OUR, label: 'LCM' },
      { x: 62, y: 26, color: OUR, label: 'RCM' },
      { x: 86, y: 36, color: OUR, label: 'RM' },
      { x: 30, y: 26, color: OUR, label: 'LF' },
      { x: 70, y: 26, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 14, y: 22, color: OPP, label: 'LB' },
      { x: 36, y: 20, color: OPP, label: 'LCB' },
      { x: 64, y: 20, color: OPP, label: 'RCB' },
      { x: 86, y: 22, color: OPP, label: 'RB' },
      { x: 18, y: 38, color: OPP, label: 'LM' },
      { x: 40, y: 42, color: OPP, label: 'LCM' },
      { x: 60, y: 42, color: OPP, label: 'RCM' },
      { x: 82, y: 38, color: OPP, label: 'RM' },
      { x: 32, y: 48, color: OPP, label: 'LF' },
      { x: 68, y: 48, color: OPP, label: 'RF' },
      { x: 50, y:  6, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: GK kicks long over our compact block
      { x1: 50, y1:  6, x2: 40, y2: 44, color: OPP,  style: 'solid' },
      // OPP: LF/RF push toward midline to stretch our shape
      { x1: 32, y1: 48, x2: 32, y2: 54, color: OPP,  style: 'dash' },
      { x1: 68, y1: 48, x2: 68, y2: 54, color: OPP,  style: 'dash' },
      // OPP: central mids push forward to support
      { x1: 40, y1: 42, x2: 40, y2: 48, color: OPP,  style: 'dash' },
      { x1: 60, y1: 42, x2: 60, y2: 48, color: OPP,  style: 'dash' },
      // OUR: LF/RF press their CBs — cut off short options
      { x1: 30, y1: 26, x2: 30, y2: 20, color: ARR,  style: 'solid' },
      { x1: 70, y1: 26, x2: 70, y2: 20, color: ARR,  style: 'solid' },
      // OUR: midfield slides compact as a unit toward ball side
      { x1: 14, y1: 36, x2: 22, y2: 36, color: ARR2, style: 'dash' },
      { x1: 86, y1: 36, x2: 78, y2: 36, color: ARR2, style: 'dash' },
      // OUR: back 4 holds tight on their marks — step up to press
      { x1: 18, y1: 40, x2: 18, y2: 34, color: ARR2, style: 'dash' },
      { x1: 32, y1: 46, x2: 32, y2: 40, color: ARR2, style: 'dash' },
      { x1: 68, y1: 46, x2: 68, y2: 40, color: ARR2, style: 'dash' },
      { x1: 82, y1: 40, x2: 82, y2: 34, color: ARR2, style: 'dash' }
    ]
  }
});
