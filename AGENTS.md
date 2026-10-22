# pmc-larva

PMC's Larva design system monorepo: npm workspaces (`packages/*`) with Lerna 10 fixed versioning (`lerna.json`).
Packages publish as `@penskemediacorp/*`. Brand themes consume them from their `assets/` directory, and get PHP partials through `twig-to-php-parser`.
Node 22 (`.nvmrc`, `engines.node >=22.13.0`). `.npmrc` sets `engine-strict=true`, so installing with the wrong Node fails.

## Non-negotiables

- Do not hand-edit generated output. Regenerate it with `npm run prod` and commit it with the source change (read `.agents/rules/committed-build-output.md`). Generated trees: `build/`, `packages/larva/build/`, `packages/larva/public/`, `packages/larva-css/build/`, `packages/larva-css/src/_generated/`, `packages/larva-js/build/`, `packages/larva-tokens/{build,style-guides,src/base/generated}/`.
- Do not commit locally generated or approved `backstop_data/bitmaps_reference/` files. Local `npm run backstop -- approve` (`README.md:70-73`) is for local inspection only; it predates the CI approval flow. Update committed references through the "Update visual regression tests" workflow (`.github/workflows/approval.yml`), which opens a `<branch>--update-backstop-reference` branch (`README.md:81`).
- Do not bump versions, edit `lerna.json`, or publish. Releases happen in dedicated `Release/x.y.z` PRs.
- Changes under `packages/larva/scripts/`, `packages/larva/lib/`, `packages/eslint-config/`, `packages/stylelint-config/`, `packages/stylelint-css-algorithms/` or `packages/backstopjs-config/` run in consuming repos. Call this out in the PR. Build-script and server changes need a pmc-spark pre-release test (`PULL_REQUEST_TEMPLATE.md`).
- `sh scripts/refresh-dependencies.sh` deletes `node_modules` and `package-lock.json`, reinstalls, and rewrites build output. Ask before running it.
- Never commit secrets, and never copy basic-auth URLs from test fixtures or READMEs.
- Packages are CommonJS: keep `globby` at `^11` and `del` at `^6` unless migrating to ESM (see the `"//"` notes in `package.json` and `packages/larva-css/package.json`).

## Commands

Run from the repo root. Root `package.json` `scripts` is the source of truth.

```bash
nvm use                               # Node 22; .npmrc engine-strict=true
sh scripts/install-dependencies.sh    # npm install after a Node version check (CI: npm ci)
npm test                              # jest, all packages; parser tests need a php CLI
npm test -- packages/larva-css        # scope by path (a jest regex: use packages/larva/ for the larva package alone)
npm run lint                          # lint:js (whole repo) + lint:scss (root src/scss only)
npm run lint-fix:js
npm run lint-fix:scss
npm run larva                         # pattern server on http://localhost:3000 (NODE_PORT=8080 npm run larva)
npm run dev                           # watch SCSS + JS
npm run prod                          # full build: larva-css, larva-js, icons, tokens, sync build mirrors
npm run backstop -- test              # visual regression; needs `npm run larva` running in another shell
npm run build-tokens                  # tokens + prod:scss + sync (scripts/tokens.sh)
```

- Do not use `npm run lint-fix`. It forwards `--fix` to npm instead of eslint, so the JS half fixes nothing. Use `lint-fix:js` and `lint-fix:scss`.
- There is no root `npm run build` (`packages/larva-tokens/README.md:27` is wrong). Root `npm run prod` already builds larva-css (`prod:scss`) and the tokens (`build-tokens`), so the separate package builds in `README.md:85-88` are optional.

## Definition of done

- `npm test` passes and `npm run lint` reports no errors (what `test.yml` runs). Read the lint output: the `larva` wrapper does not pass child exit codes through (`packages/larva/bin/larva.js:20-24`, `packages/larva/lib/utils/spawnScript.js:17-21`), so `npm run lint` and the `prod*`/`dev*` scripts can exit 0 even when eslint, stylelint or the build reported errors.
- If source that feeds a build changed (`packages/larva-css/src`, `packages/larva-js/src`, `packages/larva-tokens/src`, `packages/larva-svg/src/svg`, root `entries/` or `public/`), run `npm run prod` and commit the generated diffs. Reordered partials in the larva-css algorithms output are known noise (LRVA-1885).
- Root `src/svg/*.svg` (standalone logos) is not part of `prod`: run `npm run build-svg`, then `npm run sync-build`, and commit `build/svg/` plus `packages/larva/build/svg/`.
- Add a line under `## Unpublished Changes` in `CHANGELOG.md`, prefixed with the package (`* larva-patterns - …`).
- New pattern: the PR includes a screenshot and the Vercel preview link.
- Visual changes: the "Visual Regression Tests" check passes, or references are updated through `approval.yml`.
- Agent instructions are still true: if this change adds, renames, or removes a command, directory, convention, workflow, version pin, or known footgun, the instruction files covering it are created or updated in the same PR (see "Keeping instructions current").

## Path-scoped rules

Canonical rules live in `.agents/rules/`. Read the rule before editing files that match its globs:

- `packages/larva-patterns/**/*.twig`, `src/patterns/**/*.twig` → read `.agents/rules/larva-twig-templates.md` before editing matching files.
- `packages/larva-patterns/{components,objects,modules,algorithms,__tests__}/**/*.js`, `src/patterns/**/*.js` → read `.agents/rules/larva-pattern-data.md` before editing matching files.
- `build/**`, `packages/larva/{build,public}/**`, `packages/larva-css/{build,src/_generated}/**`, `packages/larva-js/build/**`, `packages/larva-tokens/{build,style-guides,src/base/generated}/**` → read `.agents/rules/committed-build-output.md` before editing matching files.
- `packages/{eslint-config,stylelint-config,stylelint-css-algorithms,backstopjs-config}/**` → read `.agents/rules/shared-lint-and-test-configs.md` before editing matching files.

## Keeping instructions current

Instruction files are part of the code: a change that makes one wrong, or leaves new behavior undocumented, is not done until it's fixed.

- Check what covers the paths you changed: this file, the `AGENTS.md` in each changed directory and its parents, and every `.agents/rules/*.md` whose `globs:` match a changed file.
- Fix or delete any line your change made false (commands, paths, versions, flags, workflow names, owners). Find leftovers of renamed or removed names with `git grep -n -F -e '<old-name>' -- '*AGENTS.md' '.agents/rules/'`.
- Create new instruction files when warranted; you don't need to be asked:
  - a directory with its own commands, runtime, or footguns gets a nested `AGENTS.md`;
  - a convention that spans directories gets a `.agents/rules/<topic>.md` with `globs:`;
  - only repo-wide facts go in this file, kept short.

  List every new file in "Path-scoped rules" (each rule with its glob and "read before editing matching files"; Codex finds rules only through that list and pointers in nested `AGENTS.md` files) or, for a nested `AGENTS.md`, in the "Repo map".
- After creating or changing a rule, run `npx @open-agent-toolkit/cli sync --scope project` and commit the rule, the generated views, `.codex/config.toml` and `.oat/sync/manifest.json` together.
- Record durable facts an agent would otherwise get wrong; leave out task notes and guesses.
- In the PR description, list the instruction files you created or updated, or write "No instruction changes needed".

## Repo map

| Path | What it is | Instructions |
| --- | --- | --- |
| `packages/larva-patterns/` | Twig + JS prototype pattern library | `packages/larva-patterns/AGENTS.md` |
| `packages/larva/` | `larva` CLI, pattern server, consumer build configs | `packages/larva/AGENTS.md` |
| `packages/larva-css/` | larva.css sources (gulp) | `packages/larva-css/AGENTS.md` |
| `packages/larva-tokens/` | Design tokens per brand (Theo) | `packages/larva-tokens/AGENTS.md` |
| `packages/larva-js/` | Front-end behaviors | `packages/larva-js/AGENTS.md` |
| `packages/larva-scss/` | Sass tools and tokens | `packages/larva-scss/AGENTS.md` |
| `packages/twig-to-php-parser/` | Twig → PHP partials for themes | `packages/twig-to-php-parser/AGENTS.md` |
| `packages/site/` | React designer-tools site | `packages/site/AGENTS.md` |
| `packages/larva-svg/` | Sprite icon sources | See below |
| `packages/{eslint-config,stylelint-config,stylelint-css-algorithms,backstopjs-config}/` | Shared configs consumed by other repos | `.agents/rules/shared-lint-and-test-configs.md` |
| `src/`, `entries/`, `public/`, `larva.config.js` | Sandbox that mirrors a consuming theme's `assets/` directory so the `larva` binary runs in this repo | This file |
| `backstop_data/` | Visual regression references (CI-managed) | This file |
| `build/` | Generated, mirrored into `packages/larva/build/` | `.agents/rules/committed-build-output.md` |

SVG: add a sprite icon in `packages/larva-svg/src/svg/` and run `npm run prod` (its `build-icons` step writes `build/svg/defs/`). The file name becomes the icon id. The sprite holds simple icons and logos only; complex art goes inline or as a standalone SVG. Root `src/svg/` holds standalone SVGs, built only by `npm run build-svg` (not part of `prod`), then `npm run sync-build`.

## CI

- `test.yml` (every push): `npm ci`, `npm test`, `npm run lint`.
- `regressions.yml` (every push): starts `npm run larva`, then `npm run backstop -- test`. On failure it comments on the PR and points to `approval.yml`.
- `approval.yml` (manual): regenerates backstop references and commits `backstop_data` to `<branch>--update-backstop-reference`.
- `vercel.yml` (pull requests and pushes to `master`): Vercel deploy through `penske-media-corp/github-workflows-wordpress`.
- `scripts/build-vercel.sh` is the Vercel build (CRA site → `build/html`, then static pattern HTML via a background `packages/larva/lib/start.js` server). Do not run it locally. Editing it or the workflows affects Vercel previews and backstop CI; keep the `<branch>--update-backstop-reference` name in `approval.yml` in sync with `README.md:81` and the `regressions.yml` failure comment that points to `approval.yml`.

## Commits, PRs and releases

- Prefix the subject with the Jira key when there is a ticket (e.g. `PUB-804 …`). GitHub squash merges append `(#PR)`.
- Follow `PULL_REQUEST_TEMPLATE.md`: CHANGELOG entry, `npm run prod` output check, screenshot + Vercel link for new patterns, pmc-spark pre-release test for build-script or server changes.
- Versions change only in `Release/x.y.z` PRs, which bump `lerna.json` and every `packages/*/package.json`.

## References

- `README.md` - setup, linking into a consuming project, pattern server, visual regression tests.
- `UPGRADING.md` - breaking changes for consuming projects; add an entry when a change needs consumer action.
- `CHANGELOG.md` - release notes (`## Unpublished Changes` first).
- `PULL_REQUEST_TEMPLATE.md` - PR checklist.
- Confluence How-To guides for consuming projects: https://confluence.pmcdev.io/x/UBOeAw

## Agent instruction files (OAT sync)

- `AGENTS.md` files (root and per package) are hand-written. Claude Code, Codex and Cursor read them directly.
- Path-scoped rules are written once in `.agents/rules/*.md` (frontmatter: `description`, `activation: glob`, `globs`).
- Sync writes `.claude/rules/` and `.cursor/rules/`, `.codex/config.toml`, and updates `.oat/sync/manifest.json`. Codex gets no generated rule view.
- Never hand-edit generated files under `.claude/rules/` or `.cursor/rules/`. Change the canonical rule and re-sync.
- `npx @open-agent-toolkit/cli sync --scope project --dry-run` shows drift. It should report no changes before you push.
