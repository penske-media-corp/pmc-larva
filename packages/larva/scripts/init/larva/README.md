# IMPORTANT!!!!

Before you continue, add these scripts to package.json and then delete this "important" section from the Readme:

```
"scripts": {
	"larva": "larva server --watch ./src/patterns -e twig,html,js",
    "backstop": "backstop --config=node_modules/@penskemediacorp/backstopjs-config",
    "prod": "bin/larva.js prod-scss && bin/larva.js prod-js",
    "prod:scss": "bin/larva.js prod-scss",
    "prod:js": "bin/larva.js prod-js",
    "dev": "concurrently \"npm:dev:scss\" \"npm:dev:js\" --raw",
    "dev:scss": "bin/larva.js dev-scss",
    "dev:js": "bin/larva.js dev-js",
    "lint": "bin/larva.js lint-scss & larva lint-js",
    "lint:scss": "bin/larva.js lint-scss",
    "lint:js": "bin/larva.js lint-js ./",
    "lint-fix": "bin/larva.js lint-scss --fix && npm run lint:js --fix",
    "lint-fix:scss": "bin/larva.js lint-scss --fix",
    "lint-fix:js": "bin/larva.js lint-js --fix",
    "write-json": "bin/larva.js write-json larva && bin/larva.js write-json",
    "build-icons": "bin/larva.js build-icons"
}
```

# {Project} Larva

To start developing:

1. Run `npm install` from assets.
2. Run `npm run larva` to open the Larva server.
3. In a new command window, run `npm run dev` to start the watch task for JS and SCSS compilation.

## Asset Building

* `npm run prod` – Build minified CSS and JS for production.
* `npm run prod:scss` - Compile only CSS.
* `npm run prod:js` - Compile only JS.
* `npm run dev` - start a watcher for JS and one for SCSS files.
* `npm run dev:scss` - Start the watcher for SCSS.
* `npm run dev:js` - Start the watcher for JS.
* `npm run build-icons` – Build an icon sprite from SVGs inside assets/src/svg/icons to assets/build/defs/svg/svg-sprite.defs.svg

## Larva Commands

* `npm run larva` - Start the Larva pattern server. Navigate in the browser to http://localhost:3000.
* `npm run parser` - Parse recently changed pattern Twig files to PHP.
* `npm run write-json` - write pattern objects to JSON files.

## Linting

* `npm run lint` - Lint SCSS and JS in src/
* `npm run lint:scss` - Lint SCSS.
* `npm run lint:js` - Lint JS in src/.
* `npm run lint-fix:scss` - Lint and fix auto-fixable errors in SCSS.
* `npm run lint-fix:js` - Lint and fix auto-fixable errors in JS.

## Read the docs

Read about developing UI [on the Larva Wiki](https://github.com/penske-media-corp/pmc-larva/wiki). 

