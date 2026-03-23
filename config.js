// ============================================================
//  ANTRONAUTS: SEARCH-AND-FIND — CONFIGURATION FILE!
//  This is the ONLY file you need to edit to update the game.
// ============================================================
//
//  FILE STRUCTURE REMINDER
//  ├── index.html          ← never needs editing
//  ├── style.css           ← only edit for visual redesigns
//  ├── config.js           ← YOU ARE HERE — edit everything here
//  └── images/
//      ├── scene.jpg       ← your main search scene image
//      ├── char-1.png      ← character portrait images
//      ├── char-2.png
//      └── ...
//
// ============================================================


const CONFIG = {

  // ----------------------------------------------------------
  //  SECTION 1 — THEME
  //  Controls colours across the whole game.
  // ----------------------------------------------------------

  theme: {
    backgroundColor: '#e1b20f',   // main page background
    sidebarColor: '#e1b20f',   // right panel background
    headerColor: '#b9702cff',   // top bar background
    accentColor: '#e1b20f',   // rings, borders, highlights
    accentDark: '#a87e08',   // darker accent (borders)
    accentLight: '#f5d44a',   // lighter accent (hover states)
    textLight: '#e1b20f',   // main light text
    textDim: '#c8aa72',   // muted/secondary text
  },


  // ----------------------------------------------------------
  //  SECTION 2 — TEXT LABELS
  //  Change any wording in the UI here.
  // ----------------------------------------------------------

  labels: {
    gameTitle: 'Search and Find',
    sidebarTitle: 'KEY',   // coloured letter-by-letter heading
    findLabel: 'Can you find...',  // subtitle under sidebar heading
    progressPrefix: 'PROGRESS:',       // text before "3/12"
    hintButton: 'HINT',            // hint button text
    playAgainButton: 'PLAY AGAIN',
    winTitle: 'COMPLETE!',
    winSubtitle: 'You found everyone!',
  },


  // ----------------------------------------------------------
  //  SECTION 3 — SCENE IMAGE
  //  The large background image players search through.
  //
  //  HOW TO UPDATE:
  //  1. Add your new image to the /images/ folder
  //  2. Change the filename below
  //  3. Push to GitHub — done.
  // ----------------------------------------------------------

  sceneImage: 'images/scene.jpg',


  // ----------------------------------------------------------
  //  SECTION 4 — HINTS
  //  How many hints the player gets per game.
  // ----------------------------------------------------------

  hintsAllowed: 3,


  // ----------------------------------------------------------
  //  SECTION 5 — CHARACTERS
  //
  //  Each character needs:
  //    id         — unique short name, no spaces (used internally)
  //    name       — displayed below the circle in the sidebar
  //                 use \n to split onto two lines e.g. 'Captain\nAmerica'
  //    image      — filename inside /images/ folder
  //                 e.g. 'images/char-waldo.png'
  //                 leave as '' for a plain white circle
  //    hint       — shown when player uses a hint
  //    ringColor  — hex colour for the decorative ring around portrait
  //    numColor   — hex colour for the number badge (top-left of circle)
  //    x          — horizontal position in the scene (0 = far left, 100 = far right)
  //    y          — vertical position in the scene  (0 = top, 100 = bottom)
  //    radius     — how big the clickable area is (3 = tight, 6 = generous)
  //
  //  HOW TO FIND x AND y FOR A NEW SCENE:
  //  1. Open index.html in a browser
  //  2. Open DevTools → Console (F12)
  //  3. Click anywhere on the scene — the console prints the exact x/y
  //  4. Paste those numbers below for each character
  //
  //  TO ADD A CHARACTER:   copy any block below, paste at the end, update values
  //  TO REMOVE A CHARACTER: delete its block (including the trailing comma)
  //  TO REORDER:           cut and paste the blocks into the order you want
  // ----------------------------------------------------------

  characters: [

    {
      id: 'character-1',
      name: 'K.y.l.e',
      image: 'images/1.jpg',
      hint: 'Bubble Gum. Yum!',
      ringColor: '#4caf50',
      numColor: '#2e7d32',
      x: 72.16,
      y: 65.13,
      radius: 4.5,
    },

    {
      id: 'character-2',
      name: 'F.i.d.d.l.e',
      image: 'images/2.jpg',
      hint: 'Annoyed at Frank',
      ringColor: '#f44336',
      numColor: '#c62828',
      x: 85.90,
      y: 69.97,
      radius: 4.5,
    },

    {
      id: 'character-3',
      name: 'G.u.r.d.y',
      image: 'images/3.jpg',
      hint: 'Supply pickup!',
      ringColor: '#42a5f5',
      numColor: '#1565c0',
      x: 74.36,
      y: 79.64,
      radius: 4.5,
    },

    {
      id: 'character-4',
      name: 'Zooka',
      image: 'images/4.jpg',
      hint: 'A bad delivery.',
      ringColor: '#ff9800',
      numColor: '#e65100',
      x: 28.46,
      y: 23.73,
      radius: 4.5,
    },

    {
      id: 'character-5',
      name: 'Blaze',
      image: 'images/5.jpg',
      hint: 'His ride is late',
      ringColor: '#e91e63',
      numColor: '#880e4f',
      x: 53.74,
      y: 56.36,
      radius: 4.5,
    },

    {
      id: 'character-6',
      name: 'Snoozer',
      image: 'images/6.jpg',
      hint: 'He missed his ride.',
      ringColor: '#9c27b0',
      numColor: '#4a148c',
      x: 14.45,
      y: 82.34,
      radius: 4.5,
    },

  ],

};
// ============================================================
//  END OF CONFIG — do not edit below this line
// ============================================================
