# Assets

**Empty on purpose.** No logo, photography, illustration, icon files or font binaries were provided, and none
were invented here.

What stands in for them:

- **Logo** — type only. `components/brand/Logo.jsx` renders the wordmark. **Chosen lockup: option C, the
  bracket** (gold rule at the left). There is no `logo.svg` yet — say the word and I'll export static SVG/PNG
  files of the bracket lockup in navy, gold and reversed.
- **Fonts** — Archivo and Libre Baskerville load from Google Fonts in `tokens/fonts.css`. Put binaries in
  `assets/fonts/` and swap the imports for `@font-face` rules if you ever license retail faces.
- **Icons** — Lucide, loaded from CDN. No local sprite or icon font.
- **Photography** — `assets/brian-gaughan.png` is the provider portrait, used on the Providers screen. Every
  other image slot in the UI kit is still a labelled placeholder block.

Send real photography (clinic, portrait of Dr. Gaughan, lifestyle) and it gets wired in.
