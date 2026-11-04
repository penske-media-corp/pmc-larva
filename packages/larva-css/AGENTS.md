# larva-css

Sources for larva.css, built with gulp + Sass into `build/css/` chunks. Uses larva-scss tools (`packages/larva-scss/AGENTS.md`) and larva-tokens maps (`packages/larva-tokens/AGENTS.md`) through `src/setup.scss`.
Consumer import options: `packages/larva-css/README.md#using-larva-css-in-projects`.

## Commands

```bash
npm run prod:scss                    # from the root: package build + larva prod-scss + sync-build
npm test -- packages/larva-css       # from the root (a-font generator test)
npm run dev                          # in this package: gulp watch (pair with root npm run dev:scss)
```

## The file name decides the chunk

Standalone chunk entry files must match one of the gulp globs (`gulpfile.js:35-79`), or they are not compiled:

- prefix `a-` (algorithm), `u-` (utility) or `js-` (larva-js component CSS)
- suffix `.common.inline.scss` (critical/inline chunk) or `.common.async.scss` (async chunk)
- `01-generic/*.common.inline.scss` files are unprefixed and inline only

Partials are imported, not built directly, so their names need no prefix or suffix: `04-js/partials/*.scss`, `setup.scss` and `_generated/` are pulled in with `@import`, and `larva-ui/*.scss` is compiled through root `entries/larva-ui.scss`. Do not rename partials to match the chunk globs.

Preferred default for new files: `.common.inline.scss`, unless the rules are below the fold or interaction-only (75 inline vs 15 async files today).

## Layout and conventions

- `src/01-generic/` resets and elements; `src/02-algorithms/a-<name>/` one directory per algorithm (optional `README.md` and `.html` demo); `src/03-utilities/u-<property>.common.*.scss`; `src/04-js/js-<Component>.common.*.scss` (+ `partials/`); `src/larva-ui/` pattern-library UI only.
- Utility and algorithm selectors carry the `lrv-` namespace (`.lrv-u-…`, `.lrv-a-…`). The exceptions are `04-js` hooks (`.js-<Component>`) and `is-*` state classes. Responsive variants use the `\@mobile-max`, `\@tablet`, `\@desktop`, `\@desktop-max`, `\@desktop-xl` and `\@desktop-xl-max` suffixes, all via `pmc-breakpoint()`.
- Add `@import 'setup';` when the file uses tokens, generators or mixins (66 of 90 chunk files do; simple static files such as `a-unstyle-link` skip it).
- Prefer generating utilities from `$TOKENS-MAP`/token maps over hard-coding values. Token values belong in `packages/larva-tokens`.
- Lint rules: `stylelint.config.js` (extends `packages/stylelint-config`, adds the `plugin/css-algorithms` allowlists). Build-time stylelint never fails the build, and root `npm run lint:scss` covers only root `src/scss`, so read the console output of the build.
- `src/_generated/` and `build/css/` are deleted and regenerated on every build. Edit `packages/larva-tokens/lib/font-data.js` or `lib/generators.js` instead of `_a-font.scss`.
- Build from the root with `npm run prod:scss` (or `npm run prod`) so `build/css/larva*.css` and `packages/larva/build/` are refreshed too, then commit the generated diffs. Reordered algorithm partials are known noise (LRVA-1885).
- The package is CommonJS: keep `del` at `^6` (the `"//"` note in `package.json`; v7+ is ESM-only) unless the gulpfile migrates to ESM.

Avoid:

- `src/03-utilities/opacity.scss` or `u-opacity.scss`: no `.common.<chunk>` suffix, so it is never built.
- An algorithm file named `grid.common.inline.scss` without the `a-` prefix: never built.
- `.u-foo` without `lrv-`: collides with project-level utilities (`README.md:196`).
- Hand-editing `build/css/*.css`.

## Adding styles

1. Choose the type and chunk, then name the file `{a,u,js}-<name>.common.{inline,async}.scss` in the matching directory (algorithms get their own `a-<name>/` directory).
2. Add `@import 'setup';` if you need tokens or mixins, and write `lrv-`-namespaced selectors.
3. Run `npm run prod:scss` from the root, check the stylelint output, and commit the source plus the regenerated `packages/larva-css/build/css/*`, `build/css/*` and `packages/larva/build/css/*`.
4. Add a CHANGELOG line (`* larva-css - …`).
