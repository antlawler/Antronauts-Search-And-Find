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
    textLight: '#fdf3dc',   // main light text
    textDim: '#c8aa72',   // muted/secondary text
  },


  // ----------------------------------------------------------
  //  SECTION 2 — TEXT LABELS
  //  Change any wording in the UI here.
  // ----------------------------------------------------------

  labels: {
    gameTitle: 'ANTRONAUTS: SEARCH-AND-FIND',
    sidebarTitle: 'CHARACTER KEY',   // coloured letter-by-letter heading
    findLabel: 'Can you find...',  // subtitle under sidebar heading
    progressPrefix: 'PROGRESS:',       // text before "3/12"
    hintButton: 'HINT',            // hint button text
    playAgainButton: 'PLAY AGAIN',
    winTitle: 'You Found Them All!',
    winSubtitle: 'Amazing — every character discovered!',
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
      name: 'Character 1',
      image: '',
      hint: 'Add a description hint here',
      ringColor: '#4caf50',
      numColor: '#2e7d32',
      x: 20,
      y: 30,
      radius: 4.5,
    },

    {
      id: 'character-2',
      name: 'Character 2',
      image: '',
      hint: 'Add a description hint here',
      ringColor: '#f44336',
      numColor: '#c62828',
      x: 50,
      y: 20,
      radius: 4.5,
    },

    {
      id: 'character-3',
      name: 'Character 3',
      image: '',
      hint: 'Add a description hint here',
      ringColor: '#42a5f5',
      numColor: '#1565c0',
      x: 80,
      y: 15,
      radius: 4.5,
    },

    {
      id: 'character-4',
      name: 'Character 4',
      image: '',
      hint: 'Add a description hint here',
      ringColor: '#ff9800',
      numColor: '#e65100',
      x: 15,
      y: 60,
      radius: 4.5,
    },

    {
      id: 'character-5',
      name: 'Character 5',
      image: '',
      hint: 'Add a description hint here',
      ringColor: '#e91e63',
      numColor: '#880e4f',
      x: 45,
      y: 55,
      radius: 4.5,
    },

    {
      id: 'character-6',
      name: 'Character 6',
      image: '',
      hint: 'Add a description hint here',
      ringColor: '#9c27b0',
      numColor: '#4a148c',
      x: 75,
      y: 50,
      radius: 4.5,
    },

  ],

};
// ============================================================
//  END OF CONFIG — do not edit below this line
// ============================================================
