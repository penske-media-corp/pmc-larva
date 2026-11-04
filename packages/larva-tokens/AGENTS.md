# larva-tokens

Design tokens per brand, transformed by Theo (gulp) into `build/<brand>.{map.scss,custom-properties.css,json,raw.json}` and `style-guides/<brand>.html`. larva-css generates utilities from these maps, and brand themes consume `build/` (`src` is not published).
Consumer usage: `packages/larva-tokens/README.md#using-design-tokens-in-projects`.

## Commands

```bash
npm run build-tokens                        # from the root: tokens + prod:scss + sync build mirrors
npm run build --prefix packages/larva-tokens  # package-only build (gulp)
npm test -- packages/larva-tokens           # from the root (font-data tests); the package test script is a stub
```

`packages/larva-tokens/README.md:27` says to run root `npm run build`. There is no such root script; use `npm run build-tokens`.

## Brand files

- One file per brand: `src/brands/<brand>.json`. Start from `src/brands/_template.txt`. Each file imports `../base/all.json` and overrides `props`.
- Token names are CAPS with a CSS-property prefix (`BACKGROUND_COLOR_…`, `BORDER_COLOR_…`, `COLOR_…`, `FONT_FAMILY_…`), with `type` and `category` set as in neighboring files.
- Token values come from a design style guide. Do not invent or eyeball values. The Design Tokens Form tool (https://confluence.pmcdev.io/x/f4GzB) produces correctly formatted brand JSON.
- Add tokens only in existing categories (there are no font-size tokens, for example). Typography `lrv-a-font` tokens come from `lib/font-data.js`, not brand JSON.
- More caveats: `packages/larva-tokens/README.md#things-to-be-aware-of`.

## Conventions

- Generated: `build/`, `style-guides/`, `src/base/generated/`. Every `gulp` run deletes and rebuilds all three. Never edit them by hand.
- Build from the root with `npm run build-tokens`. It rebuilds tokens, recompiles larva-css (utilities are generated from the token maps) and syncs `build/tokens/` and `packages/larva/build/tokens/`. Commit all regenerated files.
- If Theo emits a stray `build/brand.json`, delete it.
- After changing `lib/font-data.js`, also run `npm test -- packages/larva-css`: it feeds larva-css `src/_generated/_a-font.scss` and the pattern server.
- Renaming or removing a token breaks brand themes that use the generated custom properties or Sass maps. Treat it as a breaking change (`UPGRADING.md`).
- The designer-tools site keeps its own hand-maintained brand list (`packages/site/src/data.js`); it is not generated from `src/brands/`.
- The gulpfile is CommonJS: keep `del` at `^6` (v7+ is ESM-only) unless it migrates to ESM.

Avoid:

- Editing `build/<brand>.custom-properties.css` or `style-guides/<brand>.html` by hand.
- Adding `FONT_SIZE_*` tokens to a brand.
- Defining a new shared color in `src/base/deprecated/aliases.json` (deprecated; define colors in the brand file).

## Adding a brand

1. Copy `src/brands/_template.txt` to `src/brands/<brand>.json` (or use the Design Tokens Form output) and fill values from the style guide.
2. Run `npm run build-tokens` from the repo root.
3. Delete any stray `build/brand.json`, then commit the source plus `packages/larva-tokens/{build,style-guides}`, `build/tokens/` and `packages/larva/build/tokens/`.
4. Add a CHANGELOG line (`* larva-tokens - Add <brand> tokens.`).
