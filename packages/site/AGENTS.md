# site (`designer-tools`)

A private (unpublished) Create React App (React 18, react-router-dom 6, react-scripts 5) deployed at the Vercel root. Today it is a design-tokens tool for designers and product managers. This is a different stack from the rest of the repo.
CRA background: `packages/site/README.md`.

## Commands

```bash
npm start --prefix packages/site      # CRA dev server on :3000, the same port as npm run larva
npm run build --prefix packages/site  # writes packages/site/build/ (gitignored)
npm test -- packages/site             # from the root (root jest, not react-scripts test)
npm run lint                          # from the root; lints this package with the repo ESLint config
```

## Layout

- `src/components/*.js`: function components using JSX in `.js` files, styled with Larva `lrv-` classes.
- `src/utils/`: pure helpers. `src/data.js`: static lists.
- Tests in `src/__test__/` mirror `src/`.

## Conventions

- Root `npm test` runs `src/__test__` tests with only `@babel/preset-env` (no React preset). Keep tests there to plain-JS utilities, or they break the root test run. `react-scripts test` in the package is interactive watch mode.
- Do not run `scripts/build-vercel.sh` locally. It is the Vercel build: it writes `build/html/` (not gitignored) and leaves a background server running. Vercel deploys PR previews and `master` (`.github/workflows/vercel.yml`, redirects in `vercel.json`).
- Token data shown by the tool is fetched from `master`'s committed `packages/larva-tokens/build/` on GitHub, not from the local tree.
- The brand dropdown list in `src/data.js` is maintained by hand; it is not generated from `packages/larva-tokens/src/brands/`.
- Do not run `npm run eject`.

Avoid:

- Adding a JSX component test under `src/__test__/` (fails the root jest run).
- Running `npm start` here while `npm run larva` is running and expecting both on port 3000.
- Committing `packages/site/build/` or `build/html/`.

## Adding a feature

1. Add the component under `src/components/` and any helper under `src/utils/`, with a plain-JS test in `src/__test__/utils/`.
2. Run `npm test -- packages/site` and `npm run lint` from the root.
3. Check the Vercel preview on the PR.
