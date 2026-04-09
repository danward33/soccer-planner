# FSC Set Piece Playbook — Project Overview & Guidelines

## What This Is

A single-file HTML web app (`index.html`) serving as a tactical dead-ball playbook for **Falmouth Soccer Club — 8th Grade Girls**. Designed to be hosted on **GitHub Pages** with a custom domain, shared via link so players, parents, and coaches can view it on any phone, tablet, or computer. Primary target device is **iPad (landscape)**.

---

## Current State of the App

The app is a fully working single HTML file with embedded CSS and JavaScript. It currently contains **15 offense plays** and exports a full **PDF playbook**. Defense plays are planned but not yet built.

### Core Features
- **Offense / Defense toggle** — solid filled button pair in the header nav row; switches the entire app between offensive and defensive play sets
- **Dropdown navigation** — two dropdowns in the header select Situation and Option (A/B/C); no sidebar
- **Collapsible info panel** — slides in from the right when a play is selected; has a "Hide Panel" button to collapse and a maroon pull tab to reopen
- **Field schematic** — vertical (portrait) soccer field drawn on an HTML5 canvas filling the available screen space; player positions, passes, and runs rendered as arrows
- **PDF export** — generates a full booklet via jsPDF with cover page, table of contents, and one page per scenario

### Tech Stack
- Pure HTML / CSS / JavaScript — no frameworks, no build step
- jsPDF loaded from cdnjs CDN for PDF export
- Google Fonts (Bebas Neue, IBM Plex Mono, IBM Plex Sans)
- Deployed as a static file on GitHub Pages
- Custom domain pending (CNAME not yet configured)

---

## Play Structure

5 dead-ball situations × 3 options × 2 sides (offense + defense) = **30 plays total**

| Situation | Offense | Defense |
|---|---|---|
| Goal Kick | 3 ✓ | 3 — not yet built |
| Corner Kick | 3 ✓ | 3 — not yet built |
| Direct Free Kick | 3 ✓ | 3 — not yet built |
| Indirect Free Kick | 3 ✓ | 3 — not yet built |
| Throw-in | 3 ✓ | 3 — not yet built |

### Option Labels (replaces old "vs Strong/Equal/Weaker Team")
- **Option A — Safe** (red dot) — conservative, possession-based, designed for stronger opponents
- **Option B — Balanced** (orange dot) — balanced risk, also designed for stronger opponents
- **Option C — Attack** (green dot) — aggressive and direct, also designed for stronger opponents

All three options are designed to work **against teams stronger than us**. The labels describe tactical risk level, not opponent strength.

---

## Team Profile

- **Club:** Falmouth Soccer Club (FSC)
- **Team:** 8th grade girls recreational / town soccer league
- **Formation:** 4-4-2
- **Biggest strength:** Speed and athleticism
- **Skill level:** Not a strong team overall — tactics must be simple and executable
- **Competition:** Mixed — plays both strong and weak opponents

---

## Tactical Guidelines

These are rules the coach has set. Any new plays or edits must follow them.

### Goal Kicks
1. **Never play the ball directly up the middle**
2. **Never play it 90 degrees square to the outside** (no flat sideways passes)
3. Every first pass must travel on a **diagonal angle**
4. Build through the **wide channels**, not through central areas

### Play Content Rules (All Plays)
- **Steps:** exactly **3 statements**, team-wide (not player-specific), one line each
- **Keys:** exactly **3 reminders**, one line each
- No complex tactical language — this is a rec team
- Keep in mind what each individual player should be doing — this will be added as a separate layer later

### Field Orientation
- **Vertical (portrait)** field layout
- Attack direction is **bottom to top** (our goal at bottom, opponent goal at top)
- ATTACK / DEFEND labels shown as pill badges inside each penalty area

---

## Visual Design

### Color Scheme
- **Background:** near-black `#0d0d0d`
- **Panels:** `#1a1a1a` / `#222222`
- **Accent (maroon):** `#8b2035`
- **Text:** silver `#cccccc`
- **Muted:** grey `#787878`
- **Borders:** `#383838`

### Field Colors
- **Our team** = maroon (`#8b2035`)
- **Opponents** = blue (`#58a6ff`)
- **Ball** = white (`#ffffff`)
- **Primary pass / move arrows** = silver (`#c0c0c0`)
- **Supporting run arrows** = grey (`#787878`)

### Toggle Colors
- **OFFENSE active** = solid maroon `#8b2035`, white text
- **DEFENSE active** = solid steel blue `#1e4d7a`, white text
- **Hide Panel / Pull Tab** = solid maroon `#8b2035`, white text

### Fonts
- **Bebas Neue** — headers, toggle buttons, titles
- **IBM Plex Mono** — labels, tags, nav selects, monospace UI
- **IBM Plex Sans** — body text, steps, key points

### Logo & Favicon
- Logo file: `FSC Logo512x512.png` (512×512 Falmouth SC shield badge)
- Logo displayed in header top-left at 34px height
- Same image used as the browser favicon

---

## Header Layout

Two-row header:

**Row 1 (44px):** FSC logo + "Set Piece Playbook" title + subtitle  
**Row 2 (nav bar):** OFFENSE | DEFENSE toggle — divider — Situation dropdown — Option dropdown — divider — Export PDF button

---

## File Structure

Everything is in a single file:

```
index.html
├── <style>          — all CSS
├── <body>
│   ├── <header>     — two-row header with toggle, dropdowns, export button
│   ├── <div.main>   — canvas area (full remaining space)
│   └── <div.info-panel> — collapsible right panel
└── <script>
    ├── LEVELS{}         — option label/dot definitions (safe/balanced/attack)
    ├── plays[]          — array of all play objects
    ├── drawField()      — renders the vertical soccer field on canvas
    ├── drawArrow()      — renders directional arrows
    ├── drawPlayer()     — renders player dots with labels
    ├── redraw()         — clears and redraws the full canvas
    ├── updatePlay()     — fires when a dropdown changes; finds and loads matching play
    ├── setSide()        — switches between offense and defense
    ├── togglePanel()    — collapses/expands the info panel
    ├── buildInfoPanel() — renders the right-side info panel content
    └── exportPDF()      — generates full PDF via jsPDF
```

### Play Object Structure

```javascript
{
  id: 'gk-strong',
  side: 'offense',               // 'offense' | 'defense' (assigned on load)
  situation: 'Goal Kick',        // one of the 5 situations
  level: 'strong',               // 'strong' | 'equal' | 'weaker'
  title: 'Goal Kick — Safe Recycle',
  goal: 'One sentence objective shown in maroon.',
  steps: [
    { text: 'One team-wide statement.' },  // exactly 3
    { text: 'One team-wide statement.' },
    { text: 'One team-wide statement.' }
  ],
  keys: [
    'One line reminder.',   // exactly 3
    'One line reminder.',
    'One line reminder.'
  ],
  elements: {
    players: [
      { x: 50, y: 92, color: OUR, label: 'GK' },
      // x and y are percentages of field width/height
      // color: OUR | OPP | BALL
    ],
    arrows: [
      { x1: 50, y1: 92, x2: 22, y2: 80, color: ARR, style: 'dash' },
      // style: 'dash' | 'solid'
    ]
  }
}
```

---

## Deployment

- Hosted on **GitHub Pages** from a public repo
- File must be named `index.html` at the repo root
- No build process — push and it works
- URL format: `https://[username].github.io/[repo-name]`
- **Custom domain:** pending — needs CNAME record → `[username].github.io` and CNAME file in repo root

---

## Next Steps

### Immediate
- [ ] Add 15 defense plays (same 5 situations × 3 options, defending each set piece)
- [ ] One big change (TBD — coach has something in mind)
- [ ] Point custom domain at GitHub Pages

### Planned
- [ ] Per-player breakdown for each play (what each position does specifically)
- [ ] Player name labels instead of position labels
- [ ] Coach notes field per play
- [ ] Mobile layout improvements
