# Larva!

If you want _all of Larva_, this is your repo. This is where you should start for new projects and for refactoring old projects onto the system.

This package is essentially a wrapper that brings all of the other packages together, and provides the tools for using them to develop modules. It contains an Express server and UI for configuring patterns, and _will_ contain scripts to scaffold patterns, test them, and probably do all kinds of other cools stuff. For the time being, it's pretty much just the server and a very basic UI.

## Usage

### Absolutely required directory structure

Any project consuming Larva, must have the following directory structure:

```
|- pmc-consuming-project/
	|- assets/
		|- build/
			|- css/
			|- js/
			|- images/
		|- node_modules/
		|- src/
			|- scss/
				|- (Utility/ITCSS here)
			|- patterns/
				|- components/
				|- objects/
				|- modules/
				|- one-offs/
		|- public/
			|- {fonts}
		|- package.json
		|- larva.config.js
	|- template-parts/
		|- patterns/
```

### Initializing Larva in a brand new project

To install Larva on a brand new project, run the following command from the root of `assets`:

```
# Create an npm package
$ npm init

# Add Larva and scaffold directories
$ npx @penskemediacorp/larva init
```

This will install the Larva packages and create a directory called larva/ inside assets that contains a scaffold of the directory structure. Move the contents of this directory into assets/ so that the directory structure reflects the above structure.

Next, check in root README.md from the scaffol and copy the scripts into package.json as directed.

# Larva Scripts

Inspired by [@wordpress/scripts](https://github.com/WordPress/gutenberg/tree/master/packages/scripts), this package provides a collection of scripts for developing UI on PMC sites with Larva.

For asset building commands, JS and SCSS can be run at the same time, or separately, in order to minimize the build time for cases where either JS or SCSS, not both, need to be built.

## Usage

Assuming Larva is installed, make sure the @penskemediacorp/larva package is at least at version 8.0.0-alpha.

To use the build scripts, add the following to package.json in a project that uses the [Larva assets directory structure](https://github.com/penske-media-corp/pmc-larva/tree/master/packages/larva#usage):

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
		"lint:js": "larva lint-js ./",
		"lint-fix": "larva lint-scss --fix & npm run lint:js --fix",
		"lint-fix:scss": "larva lint-scss --fix",
		"lint-fix:js": "larva lint-js --fix",
		"larva": "larva server",
		"write-json": "larva write-json larva && larva write-json",
		"build-icons": "larva build-icons",
	}
}
```

## Overview of Functionality

This operates by way of a single binary, `larva`, and provides a layer of abstraction around CLI commands from various tools. The `larva` binary will point to a default configuration for each command and run its package's associated binary (e.g. `eslint` or `gulp`). The configurations are stored in separate package so as to be available to projects not using Larva.

For example, when the below scripts are present in a consuming projects package.json, the following would happen for `npm run dev:scss` (with the `scripts` value: `larva dev-scss`) in this package:
1. In `bin/larva.js`, get arguments from CLI, and execute a file with name corresponding to the argument.
2. `dev-scss.js` executes `gulp` CLI with additional arguments defined in the JS file via `spawnScript`, which uses the `cross-spawn` npm package to handle cross-platform inconsistencies.

Similarly, `npm run lint:js` (with the `scripts` value: `larva lint-js`) would do the following:
1. In `bin/larva.js`, get arguments from CLI and execute lint-js.js.
2. `lint-js.js` executes the `eslint` CLI with both CLI arguments and specific arguments defined in the script.
