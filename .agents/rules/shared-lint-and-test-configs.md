---
description: 'Shared config packages consumed by other PMC repos (eslint-config, stylelint-config, stylelint-css-algorithms, backstopjs-config)'
activation: glob
globs:
  - 'packages/eslint-config/**'
  - 'packages/stylelint-config/**'
  - 'packages/stylelint-css-algorithms/**'
  - 'packages/backstopjs-config/**'
---

# Shared lint and test configs

These packages are installed by other repositories, so a change here can fail lint or visual tests outside pmc-larva.

## Blast radius

- `eslint-config`: used PMC-wide (pmc-plugins, nova, brand themes and Larva itself; `packages/eslint-config/index.js:1`).
- `stylelint-config`: extended by every Larva consumer's build (`packages/larva/scripts/config/stylelint.config.js`) and by larva-css.
- `stylelint-css-algorithms`: the `plugin/css-algorithms` rule, configured per algorithm in `packages/larva-css/stylelint.config.js`.
- `backstopjs-config`: the backstop config every Larva consumer runs (root `backstop` script: `--config=node_modules/@penskemediacorp/backstopjs-config`). It reads the `backstop` key of the consumer's `larva.config.js`.

## Conventions

- Keep changes backward compatible. A new or stricter rule needs the blast radius called out in the PR, a `CHANGELOG.md` line naming the package, and an `UPGRADING.md` note when consumers must act.
- Three layers: `packages/eslint-config` / `packages/stylelint-config` are PMC-wide bases (pmc-plugins, Nova, themes); `packages/larva/scripts/config/.eslintrc.json` and `stylelint.config.js` are the defaults the `larva lint-js` / `lint-scss` commands apply in every consuming theme (stylelint's path is hardcoded in `scripts/lint-scss.js`), so edits there also reach consumers; an ESLint override for this repo alone would need an `eslint.configFile` key in the root `larva.config.js` (none exists today). Stylelint has no repo-only hook.
- The `backstop` keys in `larva.config.js` (`testBaseUrl`, `larvaModules`, `testPaths`, `testScenario`, `backstopConfig`) are a public API. Do not rename keys or change scenario defaults (`delay: 500`, `misMatchThreshold: 0.1` in `packages/backstopjs-config/lib/getScenarios.js`) casually.
- Each package is a small CommonJS module (`index.js`, plus `lib/` where present). `stylelint-css-algorithms` and `backstopjs-config` have tests in `__tests__/` run by root jest (`npm test -- packages/<name>` from the root). `eslint-config` and `stylelint-config` have no dedicated tests, so verify them with root `npm run lint` and the full `npm test`. Every package-level `npm test` is a stub that exits 1.
- `stylelint-css-algorithms` tests depend on the global `testRule` helper in root `jest-setup.js`.
- Never copy the basic-auth example URLs from `packages/backstopjs-config/README.md` or its test fixtures into docs, examples or config.

## Counter-examples

- Adding `camelcase: off` to `packages/eslint-config` to quiet Larva pattern data files (it belongs in the Larva command defaults, `packages/larva/scripts/config/.eslintrc.json`, which already has it, because consumer pattern data needs it too).
- Running package-local `npm test`.

## Workflow

1. Change the shared config, with a test where the package has a harness (`stylelint-css-algorithms`, `backstopjs-config`).
2. Run `npm test` and `npm run lint` from the root, and read the lint output.
3. Add a CHANGELOG line naming the package, and state the downstream impact in the PR.

Package docs: `packages/eslint-config/README.md`, `packages/stylelint-config/README.md`, `packages/stylelint-css-algorithms/README.md`, `packages/backstopjs-config/README.md`.
