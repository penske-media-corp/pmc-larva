# IMPORTANT!!!!

Before you continue, add these scripts to package.json and then delete this "important" section from the Readme:

```
"scripts": {
	"larva": "larva server --watch ./src/patterns -e twig,html,js",
    "backstop": "backstop --config=node_modules/@penskemediacorp/backstopjs-config",
    "prod": "larva prod-scss && larva prod-js",
    "prod:scss": "larva prod-scss",
    "prod:js": "larva prod-js",
    "dev": "concurrently \"npm:dev:scss\" \"npm:dev:js\" --raw",
    "dev:scss": "larva dev-scss",
    "dev:js": "larva dev-js",
    "lint": "larva lint-scss & larva lint-js",
    "lint:scss": "larva lint-scss",
    "lint:js": "larva lint-js ./",
    "lint-fix": "larva lint-scss --fix && npm run lint:js --fix",
    "lint-fix:scss": "larva lint-scss --fix",
    "lint-fix:js": "larva lint-js --fix",
    "write-json": "larva write-json",
    "build-icons": "larva build-icons"
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

