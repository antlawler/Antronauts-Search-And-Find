# Antronauts: Search-and-Find

A Where's Waldo–style search-and-find game, embeddable on any website via an iFrame.

---

## File Structure

```
Antronauts-Search-And-Find/
├── index.html        ← game shell — never needs editing
├── style.css         ← all visual styles — only edit for redesigns
├── config.js         ← ✅ THE ONLY FILE YOU EVER NEED TO EDIT
└── images/
    ├── scene.jpg     ← your main search scene image
    ├── char-1.png    ← character portrait images (circular crop looks best)
    ├── char-2.png
    └── ...
```

---

## How to Update the Game

Open **`config.js`** — everything is in clearly labelled sections:

| Section | What it controls |
|---|---|
| `theme` | Background colour, sidebar colour, accent colour |
| `labels` | All text — title, button labels, win screen text |
| `sceneImage` | The main search image |
| `hintsAllowed` | How many hints players get |
| `characters` | Each searchable character — name, image, position, ring colour |

### Changing the scene image
1. Add your new image to the `/images/` folder
2. In `config.js`, update `sceneImage: 'images/your-new-scene.jpg'`
3. Recalibrate character `x`/`y` positions (see below)
4. Push to GitHub

### Adding or updating characters
In `config.js`, each character looks like this:
```js
{
  id:        'waldo',              // unique ID, no spaces
  name:      'Waldo',             // shown in the sidebar
  image:     'images/waldo.png',  // portrait image (leave '' for blank circle)
  hint:      'Red & white stripes, glasses',
  ringColor: '#f44336',           // ring colour (any hex code)
  numColor:  '#c62828',           // number badge colour
  x:         48.5,                // horizontal position in scene (0–100)
  y:         61.2,                // vertical position in scene (0–100)
  radius:    4.5,                 // click tolerance (3=tight, 6=generous)
},
```
- **To add** — copy a block, paste it, update the values
- **To remove** — delete the block
- **To rename** — change `name:`

### Calibrating x / y positions
1. Open `index.html` in a browser (or your live GitHub Pages URL)
2. Open DevTools → Console (`F12`)
3. Find the line `// console.log('x:', px.toFixed(1), 'y:', py.toFixed(1));` in `index.html`
4. Remove the `//` to uncomment it, save, refresh
5. Click on each character in the scene — the console prints exact `x` and `y` values
6. Paste those into `config.js`, then re-comment the console line

---

## Embedding on Squarespace

1. In Squarespace, edit a page → Add Block → **Code**
2. Paste this, replacing the URL with your GitHub Pages address:

```html
<iframe
  src="https://YOUR-USERNAME.github.io/Antronauts-Search-And-Find/"
  width="100%"
  height="700px"
  frameborder="0"
  style="border:none; display:block;">
</iframe>
```

3. Save the block — the game appears live on your page

**Your GitHub Pages URL:**
`https://antlawler.github.io/Antronauts-Search-And-Find/`

> To enable GitHub Pages: go to your repository → Settings → Pages → Source: Deploy from branch → Branch: `main` → `/root` → Save

---

## Pushing Updates to GitHub

After editing any file, push the changes:

```bash
git add .
git commit -m "describe what you changed"
git push
```

Changes go live on GitHub Pages within ~60 seconds.
