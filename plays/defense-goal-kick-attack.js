plays.push({
  id: 'def-gk-weaker',
  situation: 'Goal Kick',
  level: 'weaker',
  side: 'defense',
  title: 'Defense Goal Kick — High Press Trap',
  goal: 'Move up toward their players right away. Our forwards press hard to make the kick rushed and force a mistake.',
  steps: [
    { text: 'LF and RF sprint toward their goalkeeper as the ball is placed — cut off all short passes.' },
    { text: 'Our midfielders push up to press their midfielders — no easy passes out of their half.' },
    { text: 'Our back 4 steps up together — shrink the field.' },
    { text: 'If they kick long over the top, our goalkeeper comes out to claim it.' }
  ],
  keys: [
    'Always have someone covering behind the presser — never press alone',
    'The defensive line stays high — step up together',
    'Force them to kick long — a rushed long ball is fine for us',
    'Win the loose ball in midfield after any kick'
  ],
  playerData: {
    GK: {
      role: 'Come off your line and cover behind the high defensive line.',
      before: 'Move toward the edge of the penalty area. Be ready for any ball kicked over the top.',
      during: 'If the ball goes over the top, come and get it before their forward does.',
      tips: ['Come off your line — you are the sweeper', 'Get to any long ball first', 'Guide your defenders']
    },
    LB: {
      role: 'Push up with the defensive line — be part of the high line.',
      before: 'Move up level with the back 4. Be ready to step forward.',
      during: 'Hold the high line. If the ball goes over the top, sprint back.',
      tips: ['Stay level with RCB and LCB', 'Be ready to sprint back if they play over the top', 'Do not let their player receive at your feet']
    },
    LCB: {
      role: 'Hold the high defensive line and win any ball that drops in front of you.',
      before: 'Step up in line with the back 4.',
      during: 'Win any ball in the air or on the ground. Get to it before their player.',
      tips: ['Step up together as a group', 'Win everything in the air', 'Head it far']
    },
    RCB: {
      role: 'Hold the high defensive line and cut off long balls.',
      before: 'Push up level with LCB. The whole back 4 holds this high line together.',
      during: 'Win any ball over the top. If it drops short, get to it before their forward.',
      tips: ['The high line only works if all four hold together', 'Win every aerial challenge', 'No free headers']
    },
    RB: {
      role: 'Push up with the high line and cover behind the press.',
      before: 'Move up level with the back 4.',
      during: 'Hold the high line. If the press is beaten, sprint back.',
      tips: ['Stay level with the other backs', 'Cover behind if a teammate presses forward', 'Sprint back fast if they get through']
    },
    LM: {
      role: 'Press their midfielders — push up and do not let them pass out easily.',
      before: 'Move up and be ready to press as the ball comes out.',
      during: 'Press hard as soon as the ball leaves the goalkeeper. Make them rush.',
      tips: ['Press together with LCM', 'Always have someone covering behind you', 'Be first to any loose ball']
    },
    LCM: {
      role: 'Push up into the press — block passes through the center.',
      before: 'Move up. Close the passing lane from their defenders to their midfielders.',
      during: 'Step to any ball played into the center. Do not let them pass through the middle.',
      tips: ['Block the center', 'Press together with LM', 'Win any loose ball and play forward']
    },
    RCM: {
      role: 'Push up into the press — cut off their central midfielders.',
      before: 'Move up. Mirror LCM on the other side.',
      during: 'Step to any ball played centrally. Force them wide.',
      tips: ['Block the center from the right', 'Press together with RM', 'Do not let them pass through you']
    },
    RM: {
      role: 'Press their midfielders on the right — push up and force them out.',
      before: 'Move up. Press their midfielder as the ball comes out.',
      during: 'Press hard. Force their player to pass backward or lose the ball.',
      tips: ['Press together with RCM', 'Force them backward or wide', 'Get back fast if the press is beaten']
    },
    LF: {
      role: 'Sprint toward their goalkeeper right away — force a rushed kick.',
      before: 'As soon as the ball is placed, sprint right at their goalkeeper.',
      during: 'Get close to their goalkeeper — force her to rush the kick. If she passes short, go to that player.',
      tips: ['Sprint at full pace', 'Cut off her passing angle', 'If she kicks long, go win the loose ball']
    },
    RF: {
      role: 'Block the short pass to their nearest defender.',
      before: 'Position between the goalkeeper and their nearest defender.',
      during: 'As LF sprints at the goalkeeper, you cover their defender. Force the goalkeeper somewhere risky.',
      tips: ['Block the pass to their defender', 'Work with LF', 'If they kick long, get back into your shape']
    }
  },
  elements: {
    players: [
      { x: 50, y: 88, color: OUR, label: 'GK' },
      { x: 18, y: 42, color: OUR, label: 'LB' },
      { x: 40, y: 46, color: OUR, label: 'LCB' },
      { x: 60, y: 46, color: OUR, label: 'RCB' },
      { x: 82, y: 42, color: OUR, label: 'RB' },
      { x: 16, y: 30, color: OUR, label: 'LM' },
      { x: 38, y: 26, color: OUR, label: 'LCM' },
      { x: 62, y: 26, color: OUR, label: 'RCM' },
      { x: 84, y: 30, color: OUR, label: 'RM' },
      { x: 36, y: 18, color: OUR, label: 'LF' },
      { x: 56, y: 22, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 14, y: 22, color: OPP, label: 'LB' },
      { x: 36, y: 20, color: OPP, label: 'LCB' },
      { x: 64, y: 20, color: OPP, label: 'RCB' },
      { x: 86, y: 22, color: OPP, label: 'RB' },
      { x: 18, y: 40, color: OPP, label: 'LM' },
      { x: 40, y: 44, color: OPP, label: 'LCM' },
      { x: 60, y: 44, color: OPP, label: 'RCM' },
      { x: 82, y: 40, color: OPP, label: 'RM' },
      { x: 32, y: 48, color: OPP, label: 'LF' },
      { x: 68, y: 48, color: OPP, label: 'RF' },
      { x: 50, y:  6, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: GK forced to kick long over the press
      { x1: 50, y1:  6, x2: 50, y2: 40, color: OPP,  style: 'solid' },
      // OPP: LF/RF push toward midline
      { x1: 32, y1: 48, x2: 32, y2: 56, color: OPP,  style: 'dash' },
      { x1: 68, y1: 48, x2: 68, y2: 56, color: OPP,  style: 'dash' },
      // OPP: central mids push into our half
      { x1: 40, y1: 44, x2: 40, y2: 52, color: OPP,  style: 'dash' },
      { x1: 60, y1: 44, x2: 60, y2: 52, color: OPP,  style: 'dash' },
      // OUR: LF sprints at GK — forces the long kick
      { x1: 36, y1: 18, x2: 48, y2:  8, color: ARR,  style: 'solid' },
      // OUR: RF blocks the short pass to their LCB
      { x1: 56, y1: 22, x2: 46, y2: 20, color: ARR,  style: 'solid' },
      // OUR: mids push up aggressively into their half
      { x1: 16, y1: 30, x2: 16, y2: 20, color: ARR2, style: 'dash' },
      { x1: 84, y1: 30, x2: 84, y2: 20, color: ARR2, style: 'dash' },
      { x1: 38, y1: 26, x2: 38, y2: 16, color: ARR2, style: 'dash' },
      { x1: 62, y1: 26, x2: 62, y2: 16, color: ARR2, style: 'dash' },
      // OUR: back 4 presses their marks — step up together
      { x1: 18, y1: 42, x2: 18, y2: 36, color: ARR2, style: 'dash' },
      { x1: 40, y1: 46, x2: 40, y2: 40, color: ARR2, style: 'dash' },
      { x1: 60, y1: 46, x2: 60, y2: 40, color: ARR2, style: 'dash' },
      { x1: 82, y1: 42, x2: 82, y2: 36, color: ARR2, style: 'dash' }
    ]
  }
});
