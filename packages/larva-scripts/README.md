# Larva Scripts

Inspired by [@wordpress/scripts](https://github.com/WordPress/gutenberg/tree/master/packages/scripts), this package provides a collection of scripts for PMC development with Larva.

For asset building commands, JS and SCSS can be run at the same time, or separately, in order to minimize the build time for instances where either JS or SCSS, not both, need to be built.

## Overview of Functionality

This package is provides a single executable node file that runs CLI commands from various packages, and provides a default configuration for each. The configurations are stored in separate package so as to be available to other projects that have their own builds steps.

## Usage

To use these scripts, add the following to package.json in a project that uses the [Larva assets directory structure](https://github.com/penske-media-corp/pmc-larva/tree/master/packages/larva#usage):

```
{
	"scripts": {
		"prod": "larva prod",
		"prod:scss": "larva prod:scss",
		"prod:js": "larva prod:js",
		"dev": "larva dev",
		"dev:scss": "larva dev:scss",
		"dev:js": "larva dev:js",
		"larva": "larva serve",
		"parser": "larva parser",
		"write-json": "larva write-json",
		"backstop": "larva backstop",
		"svg-sprite: "larva svg-sprite",
		"lint": "larva lint",
		"lint:scss": "larva lint:scss",
		"lint:js": "larva lint:js",
		"lint-fix": "larva lint-fix",
		"lint-fix:scss": "larva lint-fix:scss",
		"lint-fix:js": "larva lint-fix:js",
	}
}
```

## Available Scripts

## Compiling Assets
* `npm run prod` - compile production JS and CSS.
* `npm run prod:scss` - Compile only CSS.
* `npm run prod:js` - Compile only JS.
* `npm run dev` - start a watcher for JS and for SCSS.
* `npm run dev:scss` - Start the watcher for SCSS.
* `npm run dev:js` - Start the watcher for JS.

## Larva Package Commands
* `npm run larva` - Start the Larva pattern server. Navigate in the browser to http://localhost:3000.
* `npm run parser` - Parse recently changed pattern Twig files to PHP.
* `npm run backstop` - Run BackstopJS visual regression tests.
* `npm run svg-sprite` – Build a sprite from SVGs inside assets/src/svg to assets/build/defs/svg/svg-sprite.defs.svg
* `npm run write-json` - write the all pattern JSONs to assets/build/json to provide defaults to PHP object.

## Linting
* `npm run lint:scss` - Lint SCSS.
* `npm run lint:js` - Lint JS.
* `npm run lint-fix:scss` - Lint and fix auto-fixable errors in SCSS.
* `npm run lint-fix:js` - Lint and fix auto-fixable errors in JS.
