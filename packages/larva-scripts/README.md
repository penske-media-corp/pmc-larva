# Larva Scripts

Inspired by [@wordpress/scripts](https://github.com/WordPress/gutenberg/tree/master/packages/scripts), this package provides a collection of scripts for developing UI on PMC sites with Larva.

For asset building commands, JS and SCSS can be run at the same time, or separately, in order to minimize the build time for instances where either JS or SCSS, not both, need to be built.

## Usage

First, install the npm package:

```
$ npm install @penskemediacorp/larva-scripts
```

To use these scripts, add the following to package.json in a project that uses the [Larva assets directory structure](https://github.com/penske-media-corp/pmc-larva/tree/master/packages/larva#usage):

```
{
	"scripts": {
		"prod": "larva prod-scss & larva prod-js",
		"prod:scss": "larva prod-scss",
		"prod:js": "larva prod-js",
		"dev": "larva dev-js & larva dev-scss",
		"dev:scss": "larva dev-scss",
		"dev:js": "larva dev-js",
		"lint": "larva lint-scss & larva lint-js",
		"lint:scss": "larva lint-scss",
		"lint:js": "larva lint-js",
		"lint-fix": "larva lint-scss --fix & larva lint-js --fix",
		"lint-fix:scss": "larva lint-scss --fix",
		"lint-fix:js": "larva lint-js --fix"
	}
}
```

Additional scripts, coming soon:
```
{
	"scripts": {
 		"larva": "larva serve",
		"parser": "larva parser",
		"write-json": "larva write-json",
		"backstop": "larva backstop",
		"svg-sprite: "larva svg-sprite"
	}
}
```

## Overview of Functionality

This operates by way of a single binary, `larva`, and provides a layer of abstraction around CLI commands from various tools. The `larva` binary will point to a default configuration for each command and run its package's associated binary (e.g. `eslint` or `gulp`). The configurations are stored in separate package so as to be available to projects not using Larva.

For example, when the below scripts are present in a consuming projects package.json, the following would happen for `npm run dev:scss` (with the `scripts` value: `larva dev-scss` )in this package:
1. In `bin/larva.js`, get arguments from CLI and pass to `spawnScript`
2. `spawnScript` executes the script with same name as the argument `scripts/dev-scss.js`
3. `dev-scss.js` executes `gulp watch` CLI via the `cross-spawn` npm package to handle cross-platform inconsistencies

Similarly, `npm run lint-js` would do the following:
1. In `bin/larva.js`, get arguments from CLI and pass to `spawnScript`
2. `spawnScript` executes `scripts/lint-js.js`
3. `lint-js.js` executes the CLI for the linter, `eslint --config=/path/to/.eslintrc`

