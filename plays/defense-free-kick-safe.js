plays.push({
  id: 'def-fk-strong',
  situation: 'Direct Free Kick',
  level: 'strong',
  side: 'defense',
  title: 'Defense Free Kick — Organized Wall + Zones',
  goal: 'OPP LCM is taking the kick. Their LM and RM have split wide, and their other players have pushed ahead. Three players hold the wall to block the direct shot. Cover the wide threats and clear the ball.',
  steps: [
    { text: 'GK positions to cover the side of the goal the wall does not cover. LM, LCM, and RCM form a tight 3-player wall.' },
    { text: 'Watch the two wide threats — OPP LM is wide left and OPP RM is wide right. LB and RB must track them.' },
    { text: 'LCB and RCB cover central runners — watch for LF and RF crashing the box from ahead of the ball.' },
    { text: 'When the ball is kicked, the wall stays until it passes, then everyone steps forward together.' }
  ],
  keys: [
    'The wall stands tight — no gaps between players',
    'GK covers the far side — she positions opposite the wall',
    'LB and RB track the wide threats — OPP LM and RM are split wide',
    'After the kick, step forward together — do not just stand and watch'
  ],
  playerData: {
    GK: {
      role: 'Position to cover the far side of the goal. The wall covers the near side.',
      before: 'Get the wall in position. Then move to cover the far post side.',
      during: 'Watch for a shot to the far side. If they chip over the wall, come off your line right away.',
      tips: ['Cover what the wall does not', 'Set the wall first, then take your position', 'Come off your line if they chip it']
    },
    LB: {
      role: 'Track their wide left midfielder — she has split wide and is a threat to receive.',
      before: 'Find OPP LM who has split wide left. Stay close and be ready if the ball goes to her.',
      during: 'If the ball goes wide to her, close right away. Do not let her cross or cut inside.',
      tips: ['Track OPP LM who is out wide', 'Close quickly if she receives', 'Do not let her cut inside']
    },
    LCB: {
      role: 'Cover the left side of the box — watch for OPP LF crashing in from ahead of the ball.',
      before: 'Position left of the wall. Watch for OPP LF who has pushed ahead toward the box.',
      during: 'If a runner goes to the near post, close her right away.',
      tips: ['Cover left of the wall', 'Close any runner at the near post', 'Step forward with the back line after the kick']
    },
    RCB: {
      role: 'Cover the right side outside the wall — watch for runners going to the far post.',
      before: 'Position right of the wall. Watch for OPP RF who has pushed ahead toward the far post area.',
      during: 'Follow any runner on the right side. Force her wide.',
      tips: ['Cover right of the wall', 'Be first to any ball on the far side', 'Step forward with the back line after the kick']
    },
    RB: {
      role: 'Track their wide right midfielder — OPP RM has split wide and is a threat to receive.',
      before: 'Find OPP RM who has split wide right. Position goal-side of her.',
      during: 'If the ball goes to her wide, close right away. Do not let her get a cross in.',
      tips: ['Track OPP RM who is out wide right', 'Close quickly if she receives', 'Do not let her cut inside']
    },
    LM: {
      role: 'Stand in the wall — left end, near post side.',
      before: 'Take your position on the left end of the wall. Stand tight with LCM.',
      during: 'Hold the wall until the ball is kicked. Then step forward with the team.',
      tips: ['Stand firm — do not flinch', 'Feet shoulder-width', 'Step forward after the kick']
    },
    LCM: {
      role: 'Stand in the wall — center.',
      before: 'Stand between LM and RCM. Stay tight — no gaps. Do not move until the ball is kicked.',
      during: 'Hold your position until the kick. Then step forward.',
      tips: ['No gaps — stay tight with LM and RCM', 'Stand tall', 'Step forward together after the kick']
    },
    RCM: {
      role: 'Stand in the wall — right end.',
      before: 'Take your position on the right end of the wall. Stay tight with LCM.',
      during: 'Hold until the kick, then step forward. Be ready if the kick goes wide of the wall.',
      tips: ['Hold firm until the kick', 'Do not leave early', 'Step forward after the kick']
    },
    RM: {
      role: 'Cover the central-right zone — watch for runners coming in from ahead of the ball.',
      before: 'Position covering the right side behind the wall. Watch for OPP RCM pushing in centrally.',
      during: 'Follow any runner on the right. Win any ball played to the right.',
      tips: ['Watch for central runners on the right', 'Win second balls', 'Cover behind RB if she steps up']
    },
    LF: {
      role: 'Hold your position for a possible quick counter-attack.',
      before: 'Stay in midfield. Do not go into the box.',
      during: 'If we clear the ball, receive it and carry it forward.',
      tips: ['Stay in midfield', 'Be ready for a quick clearance to you', 'First touch forward']
    },
    RF: {
      role: 'Stay forward as the counter-attack target.',
      before: 'Hold your forward position.',
      during: 'As soon as we clear the ball, make your run forward.',
      tips: ['Stay forward', 'Be the target on the counter', 'Sprint onto any clearance']
    }
  },
  elements: {
    players: [
      { x: 56, y: 94, color: OUR, label: 'GK' },
      { x: 16, y: 82, color: OUR, label: 'LB' },
      { x: 30, y: 84, color: OUR, label: 'LCB' },
      { x: 66, y: 82, color: OUR, label: 'RCB' },
      { x: 82, y: 80, color: OUR, label: 'RB' },
      { x: 42, y: 86, color: OUR, label: 'LM' },
      { x: 48, y: 86, color: OUR, label: 'LCM' },
      { x: 54, y: 86, color: OUR, label: 'RCM' },
      { x: 78, y: 72, color: OUR, label: 'RM' },
      { x: 30, y: 72, color: OUR, label: 'LF' },
      { x: 68, y: 60, color: OUR, label: 'RF' },
      { x: 50, y:  5, color: OPP, label: 'GK' },
      { x: 14, y: 22, color: OPP, label: 'LB' },
      { x: 36, y: 20, color: OPP, label: 'LCB' },
      { x: 64, y: 20, color: OPP, label: 'RCB' },
      { x: 86, y: 22, color: OPP, label: 'RB' },
      { x:  9, y: 80, color: OPP, label: 'LM' },
      { x: 42, y: 76, color: OPP, label: 'LCM' },
      { x: 60, y: 80, color: OPP, label: 'RCM' },
      { x: 85, y: 78, color: OPP, label: 'RM' },
      { x: 34, y: 82, color: OPP, label: 'LF' },
      { x: 64, y: 80, color: OPP, label: 'RF' },
      { x: 42, y: 76, color: BALL, label: '' }
    ],
    arrows: [
      // OPP: LCM takes the free kick — shot toward goal
      { x1: 42, y1: 76, x2: 50, y2: 87, color: OPP,  style: 'solid' },
      // OPP: LF runner crashes near post from ahead of ball
      { x1: 34, y1: 82, x2: 36, y2: 87, color: OPP,  style: 'dash' },
      // OPP: RF runner crashes far post
      { x1: 64, y1: 80, x2: 62, y2: 87, color: OPP,  style: 'dash' },
      // OPP: RCM crashes penalty spot for rebound
      { x1: 60, y1: 80, x2: 54, y2: 86, color: OPP,  style: 'dash' },
      // OUR: 3-player wall holds — blocks the direct shot
      { x1: 42, y1: 86, x2: 42, y2: 82, color: ARR,  style: 'solid' },
      { x1: 48, y1: 86, x2: 48, y2: 82, color: ARR,  style: 'solid' },
      { x1: 54, y1: 86, x2: 54, y2: 82, color: ARR,  style: 'solid' },
      // OUR: LCB tracks OPP LF runner — near post coverage
      { x1: 30, y1: 84, x2: 34, y2: 81, color: ARR2, style: 'dash' },
      // OUR: RCB tracks OPP RF runner — far side coverage
      { x1: 66, y1: 82, x2: 64, y2: 79, color: ARR2, style: 'dash' },
      // OUR: LB tracks OPP LM wide left
      { x1: 16, y1: 82, x2: 11, y2: 80, color: ARR2, style: 'dash' },
      // OUR: RB tracks OPP RM wide right
      { x1: 82, y1: 80, x2: 85, y2: 78, color: ARR2, style: 'dash' },
      // OUR: RF holds forward — counter outlet
      { x1: 68, y1: 60, x2: 68, y2: 50, color: ARR2, style: 'dash' }
    ]
  }
});
