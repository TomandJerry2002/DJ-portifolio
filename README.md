# Benjamin Solomon — DJ & Beatboxer

Vite + React port of `Benji Beats.dc.html` (latest design).

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

## Files
- `src/App.jsx` — all content (`SITE` at the top) and site logic: intro, scroll choreography, O-portal → eye zoom, DJ stage, wave text, Shorts ring, lightbox, Lil Benji + the hidden *Beat back* game, CRT/WebGL effects.
- `src/View.jsx` — the markup. Every value comes from `renderVals()` in App.jsx.
- `src/globals.css` — colour/type tokens (`--signal` orange, `--teal`) and resets. `src/pseudo.css` — hover/focus states.
- `public/images/` — photos, Lil Benji sprites, `benji-portrait.jpg` (hero portal).

## Edit content
Change text, links, images and settings in `SITE` (App.jsx). Notable settings:
- `hero.portal` — which letter opens, portal photo, eye position and zoom.
- `mascot.game` — Beat back trigger (hold Lil Benji / type "beat") and the four voices.
- `App.defaultProps` — `crtStrength`, `scrollWarp`, `skipIntro`.

## Still placeholder
- Music: `SITE.dj.mix` — autoplay on, volume 0.15, loops the 30s Spotify preview. Swap `preview` for your own MP3 for the full track.
- Real beatbox recordings for the Beat back voices (synth stand-ins now).
- Secret video for the 5-tap easter egg; collaboration photos.
- Your domain in og/meta tags once live.
