# larva-js

Front-end behaviors for Larva patterns. Consumers import the sources from `src/` through the `@larva-js` webpack alias (the package `main`, `index.js`, does not exist). This package's own webpack build has a single entry, `video-showcase` → `build/video-showcase.js`.

## Commands

```bash
npm run prod:js                      # from the root: package build + larva prod-js + sync-build
npm test -- packages/larva-js        # from the root
npm run dev                          # in this package: webpack in watch mode
```

## Interface modules

Each behavior is a pair in `src/interface/<Name>/` (see `src/interface/Collapsible/`):

- `<Name>.js`: `export default class <Name> { constructor( el ) { … } }`
- `index.js`: `import <Name> from './<Name>';` plus `export default function init<Name>() { [ ...document.querySelectorAll( '<hook>' ) ].forEach( ( el ) => … new <Name>( el ) ); }`

Preferred default for new modules: the selector hook `.js-<Name>` (8 of 14 modules; the rest use `.lrv-js-<Name>`, a `data-` attribute or no hook) and a named `init<Name>` default export (13 of 14).

- Shared helpers go in `src/utils/`, pattern-library-only code in `src/larva-ui/`, third-party code in `src/vendor/` (do not edit or lint it).
- Tests sit next to the code in `__test__/` (interface) or under `src/__tests__/` (utils). Both are excluded from lint; JSDOM globals come from root `jest-setup.js`.

## Conventions

- A new interface module does nothing until it is imported and called in root `entries/common.entry.js` (and, for consumers, their own entries). Use `DOMContentLoaded` for above-the-fold behavior and `load` for deferred behavior, as the existing entry does.
- The markup hook (class or data attribute) must exist in the matching `packages/larva-patterns` template. Component CSS goes in `packages/larva-css/src/04-js/js-<Name>.common.*.scss` (`packages/larva-css/AGENTS.md`).
- Build from the root with `npm run prod:js` (or `npm run prod`) and commit `packages/larva-js/build/`, `build/js/` and `packages/larva/build/js/`.

Avoid:

- Adding a module under `src/interface/` without wiring it in `entries/common.entry.js`.
- Querying a selector that no pattern template renders.
- Editing `build/video-showcase.js` or `src/vendor/prism.js`.

## Adding a behavior

1. Create `src/interface/<Name>/<Name>.js` (class) and `index.js` (`init<Name>`).
2. Import and call `init<Name>` in `entries/common.entry.js`.
3. Add the hook to the relevant pattern Twig and the styles to `packages/larva-css/src/04-js/`.
4. Add a `__test__/<Name>.test.js` when behavior is non-trivial. Run `npm test -- packages/larva-js`, then `npm run prod` from the root.
5. Add a CHANGELOG line (`* larva-js - …`).
