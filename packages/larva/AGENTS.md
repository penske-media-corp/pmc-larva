# larva (`@penskemediacorp/larva`)

The `larva` binary, the pattern server and the default build/lint configs. Every brand theme installs this package and runs it from its `assets/` directory, so everything in `bin/`, `lib/` and `scripts/` runs inside consuming repos.
Consumer usage and setup: `packages/larva/README.md` and the pre-release guide https://confluence.pmcdev.io/x/XhOeAw.

## Commands

```bash
npm test -- packages/larva/          # from the root; trailing slash keeps larva-css/larva-js tests out
packages/larva/bin/larva.js <command>  # exercise a CLI command from the root
npm run larva                        # pattern server
npm run prod && npm run lint         # after build-script or server changes
```

## How it works

- `bin/larva.js <cmd>` runs `scripts/<cmd>.js`. A new CLI command is a new `scripts/<command>.js`; the binary discovers it by file name. An unknown command only prints an error.
- Wrapped tools (gulp, webpack, eslint, stylelint, nodemon, svg-sprite) run through `spawnScript( './node_modules/.bin/<tool>', args )`. Paths resolve from the consuming project's cwd.
- Exit codes are discarded (`bin/larva.js:20-24`, `lib/utils/spawnScript.js:17-21`), so wrapped tools never fail the npm script. When changing a script, check its output, not just the exit code.
- Default consumer configs live in `scripts/config/` (`gulpfile.js`, `webpack.config.js`, `.eslintrc.json`, `stylelint.config.js`, `svgo-config.json`). `scripts/config/.eslintrc.json` and `stylelint.config.js` are the lint defaults for every theme that runs `larva lint-*`, so changes there reach consumers. Overrides that apply only to Larva commands go here, not in the PMC-wide `packages/eslint-config`. Build-time stylelint uses `failAfterError: false`.
- Configuration is read through `getAppConfiguration( key )` (`lib/utils/getAppConfiguration.js`), which loads `larva.config.js` from `process.cwd()` with per-key defaults. Add new keys to `defaultConfig` instead of reading `larva.config.js` directly.
- Under `NODE_ENV=test` (jest), config comes from `__tests__/fixtures/larva.config.js`, not the root `larva.config.js`.
- `lib/server.js` is the Express + Twing pattern server (`@larva`/`@project` namespaces, `markdown` and `markup` filters, `wp_action` stub).
- Public JS API (`index.js`): `clone`, `getConfig`, `__experimentalCloneWithFallback`.
- Unit tests live in `__tests__/lib/` and mirror `lib/`.

## Conventions

- Keep CLI flags and `larva.config.js` keys backward compatible, or document the break in `UPGRADING.md`.
- `postinstall` runs `bin/install-hooks.js`, which copies `bin/pre-push` into the installing project's `.git/hooks/pre-push`. The hook compares the theme's Larva version with `npm view @penskemediacorp/larva version` and blocks outdated pushes. Treat changes to either file as consumer-facing and release-note them (as `CHANGELOG.md` 1.77.1 did).
- `scripts/larva/` is the scaffold that `larva init` copies into a consuming project (`scripts/init.js:5-8`). It is not documentation for this repo, and its `{Project}` placeholders are intentional; do not "fix" them.
- Never run `larva init` inside this repo: it copies `scripts/larva/` into the current directory. Test it in a disposable directory.
- Do not add `AGENTS.md` or other repo-only files under `scripts/larva/`, because `init` ships that tree to consumers.
- `scripts/larva/.nvmrc` pins Node 14 while this repo uses 22. Flag it in the PR or to a maintainer; do not silently change it.
- The package is CommonJS: keep `globby` at `^11` (the `"//"` note in `package.json`; v12+ is ESM-only) unless the package migrates to ESM.
- `build/` and `public/` here are generated copies of the root `build/` and `public/` (root `npm run sync-build` / `sync-public`). Never edit them directly.
- Build-script and server changes need the pmc-spark pre-release test from `PULL_REQUEST_TEMPLATE.md`: `prod`, `lint` and `dev` must still work, and the static site must still generate.

Avoid:

- Hard-coding repo-relative paths (e.g. `packages/larva-patterns`) in `scripts/`: consumers run from their `assets/` directory, where only `node_modules/@penskemediacorp/*` exists. The server's relative `require( '../../larva-tokens/lib/font-data' )` is an inherited exception, not a pattern to copy.
- Adding Larva-command lint rules to the PMC-wide `packages/eslint-config`.
- Assuming tests read the root `larva.config.js`.

## Adding a command

1. Add `scripts/<command>.js`, with logic in `lib/` or `lib/utils/` and a test in `__tests__/lib/`.
2. If it needs config, add a default key in `lib/utils/getAppConfiguration.js` and, if relevant, document it in `packages/larva/README.md`.
3. Run `npm test -- packages/larva/` and exercise the command from the root (`packages/larva/bin/larva.js <command>`).
4. Add a CHANGELOG line (`* larva - …`) and note the pre-release test in the PR.
