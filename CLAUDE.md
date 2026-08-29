<!-- context-gardener pack · reviewed c4cc923 -->

## Non-Inferable Facts

### Escaping & pattern authoring (read `references/pattern-authoring.md` before editing any twig/prototype)
- Escaping is **keyword-driven, not type-driven**, on both the Twing server render and the
  generated PHP. In `packages/twig-to-php-parser/lib/twig-to-php-parser.php:140-176` a `strpos`
  substring match on a mustache var's data-name selects the escaper (`_url`→`esc_url`,
  `_class`/`_name`/`_attr`/`_attributes`→`esc_attr`, `_text`→`esc_html`, `_markup` or
  `|markup`→`wp_kses_post`, `_wp_action`→`do_action`). **A var name matching no keyword emits no
  `<?php echo ?>` wrapper — silent unescaped/broken output, not an error.** Name new output vars
  to hit the intended keyword.
- Adding a new twig function needs THREE coordinated edits or parsing silently breaks: register
  in `packages/larva/lib/server.js` `twing.addFunction`, add a parse fn in
  `packages/twig-to-php-parser/lib/twig-to-php-parser.php`, and wire it into `twig_to_php_parser`.
- The `|markup` filter (`server.js:43`, `is_safe:['html']`) and twig `|raw` are the only
  html-safe server-render output paths; everything else auto-escapes. New raw-HTML-in-a-loop
  must use `|markup`.
- Any new pattern must clone-before-mutate (see Use This Not That); pattern files follow strict
  `<name>.prototype.js` + `<name>.twig`/`.html` naming or the CLI won't discover them.

### larva-js interface modules (read `references/js-hook-contracts.md` before adding/binding behavior)
- Interface-module inits (`querySelectorAll(hook).forEach(new Class(el))`) are **not
  auto-invoked**. Only `packages/larva-js/src/video-showcase.js` (Collapsible, Flickity,
  VideoShowcase) and `packages/larva-js/src/larva-ui/index.js` (LarvaUiToggle, SideSkinAd) are
  wired. Every other module must be manually imported + called in the consuming theme entry, or
  it silently does nothing. A hook class omitted from markup = behavior never binds.
- A behavior class must stamp its instance onto a `pmc<Name>` DOM property for cross-instance
  access + re-init guards. Do-not-copy: `packages/larva-js/src/interface/ProfileFilter/index.js:5`
  stamps `el.ProfileFilter` (no `pmc` prefix) — the test passes only because the constructor also
  stamps `pmcProfileFilter`.
- Silent contract mismatch: `ProfileFilter.js:230-237` toggles the bare class `a-hidden`, but
  larva-css defines only `.lrv-a-hidden` (`packages/larva-css/src/02-algorithms/a-hidden/a-hidden.common.inline.scss`).
  A consumer loading only larva-css sees no hide effect. Bare `a-`/`u-`/`js-` classes are
  project-owned; larva-css output classes carry the `.lrv-` namespace, and larva-js references
  bare hooks for project markup but `lrv-a-`/`lrv-u-` for larva-css-owned classes.
- `packages/larva-js/src/interface/SideSkinAd/index.js` is an inbound postMessage gate: it reflows
  only when `e.data` starts with the literal `pmcadm:dfp:skinad:parameters` AND an atlas skin object
  exists on `window`, then calls `atlasSkinObj.refresh_skin_rails()`. `reflowForSideSkinAd` is
  idempotent via
  `window.pmc_side_skin_classes_removed` and strips every `@desktop-xl` class.
- The `@larva-js/interface/*` module specifier is NOT resolved by this package (webpack aliases
  only `@npm`); the consuming build must provide it.

### Build, config & CLI
- `packages/larva/lib/utils/getAppConfiguration.js` falls back to a per-key `defaultConfig` on a
  missing key or require error, and overrides CWD to `__tests__/fixtures` when `NODE_ENV=test`
  (so project-level tests can't supply their own config). `packages/backstopjs-config/lib/getConfig.js`
  and `packages/twig-to-php-parser/lib/getConfig.js` ship byte-identical copies of each other (both
  catch and return `undefined`, no default fallback); only `getAppConfiguration` has the per-key
  `defaultConfig` fallback — see Use This Not That.
- SCSS build does NOT fail on stylelint errors: `packages/larva/scripts/config/gulpfile.js:35`
  sets `failAfterError:false`. The build also strips the UTF-8 BOM from every compiled CSS file.
- `prod-scss --generate-important-variants` emits a second `-important.css` with `!important` on
  every declaration. `larva prod` with no flag runs the full chain (parse → write-json →
  prod-scss → prod-js → build-icons); each stage is individually skippable via its flag
  (`packages/larva/scripts/prod.js`).
- CI (`.github/workflows/test.yml`) runs Node 18 only and fails on any test/lint error;
  `.github/workflows/regressions.yml` runs backstop on every push (start server, `sleep 5`, test);
  reference-screenshot updates are a separate manual `workflow_dispatch` (`approval.yml`).
- A `pre-push` git hook (`packages/larva/bin/pre-push`, installed via npm postinstall by
  `install-hooks.js`) blocks push when the consuming project's assets/package.json pins an older
  `@penskemediacorp/larva` than npm's latest, unless `--force`/`-f`/`--no-verify`; caches latest
  24h in `os.tmpdir()`.
- Monorepo is lerna **fixed-version** (`lerna.json`, all packages at one version) — releases bump
  every package in lockstep, and `larva` pins siblings at `^`same. Do NOT upgrade `globby` past 11
  unless migrating the whole app to ESM (`package.json` `//` note).
- Undeclared deps that work only by hoist: `mkdirp` (`build-icons.js`, `generateStatic.js`) and
  bare `lodash` (`jest-setup.js:18`; root declares only `lodash.clonedeep`) are in no package.json.
- larva-scss ships Sass source only (no compiled CSS); its generator mixins are **deprecated as of
  8.7.0-alpha** (`packages/larva-scss/README.md`) — the recommended pattern for new utility code is
  to iterate a token map directly, NOT to copy the generators. All public generators take a trailing
  `$NAMESPACE:''` param that must be threaded, and `_a-font.scss` is code-generated from
  larva-tokens (not hand-written).

### External boundaries
- This monorepo consumes many host-supplied identifiers (JS globals, a REST route, WP hooks,
  render-context vars, config keys) that are defined **nowhere in the repo** and fail silently at
  runtime when absent. Full verified catalog: `references/external-boundaries.md`.

## Use This Not That

- **Cloning pattern data:** `require('@penskemediacorp/larva').clone` and its alias
  `__experimentalCloneWithFallback` both point at `packages/larva/lib/utils/clonePatternData.js`
  (project-patterns-dir first, silent fallback to the larva dir; layer-override-aware, takes a
  string path). Use it for cross-pattern includes a downstream layer may override. Use plain
  `lodash.clonedeep(require(relpath))` only for a same-package sibling. Do not object-spread a
  prototype (shallow — mutates the shared singleton).
- **Reading config:** inside the `larva` package use `packages/larva/lib/utils/getAppConfiguration.js`
  — it falls back to per-key `defaultConfig` on a missing key. `packages/backstopjs-config/lib/getConfig.js`
  and `packages/twig-to-php-parser/lib/getConfig.js` ship **byte-identical** copies of each other:
  both `throw` an internal `Error` on a missing key, catch it, `console.error`, and return
  `undefined` — no default fallback. Only `getAppConfiguration` differs. (`packages/backstopjs-config/index.js:45`
  also references an undefined `urlFromCli`; `packages/backstopjs-config/lib/utils.js:29` throws via
  `chalk` it never requires.)
- **Utility SCSS:** iterate a token map directly for new utilities; do not copy the deprecated
  larva-scss generator mixins. Between the two utility styles, `token-utility-generator` emits a
  dual declaration (static value THEN `var(--token,value)`, needing larva-tokens custom properties
  at runtime) while `basic-utility-generator` emits only the static value.
- **MobileHeightToggle prefix:** the trigger/target/root triple must all use the same prefix —
  plain `js-MobileHeightToggle*` OR `lrv-js-MobileHeightToggle*`, never mixed, or the toggle
  no-ops. The init reads only `.lrv-js-MobileHeightToggle`.
- **Includes:** use the `@larva/<type>/<name>/<name>.twig` namespace, not a relative path (won't
  resolve). Exceptions `c-logo`/`c-svg` are deviations, not the pattern.

## References

- `references/pattern-authoring.md` — read before editing any `.twig`/`.prototype.js`: the
  keyword-driven escaping table, file-naming/discovery rules, include + hook conventions, `_data`
  shape rules, and the catalog of in-code pattern bugs not to replicate.
- `references/js-hook-contracts.md` — read before adding or wiring larva-js behavior: per-module
  root/child/state hooks, which inits are auto-wired vs manual, and the `pmc<Name>` stamp rule.
- `references/external-boundaries.md` — read when a runtime value is missing or a global/route/WP
  hook is referenced: the full list of identifiers this repo consumes but never defines.

## Human Notes
