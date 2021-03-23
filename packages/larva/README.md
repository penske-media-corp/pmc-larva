# Larva

_Note:_ This package may eventually be split into separate packages.

By nature it is a wrapper package that brings all of the smaller Larva packages together, and provides a sandbox for testing Larva tools. Now, it also contains the `larva` binary build scripts and the Larva UI Express server for patterns development.

* An Express server and UI for building project-level patterns and configuring existing patterns
* Gulp configuration for building SCSS
* A basic webpack configuration for JS
* An init command for scaffolding the Larva directory structure
* The `write-json` script for building the JSON for each pattern
* A `larva` binary that provides access to all of the above

## Usage

### If a brand new project:

In order to avoid conflicting node versions, Larva should be contained to its own directory.

**If you are working in a brand new project**, create a directory called `assets` and follow the below steps from the root of `assets`.

**If you are working in an existing project**, create a directory called `larva` and follow the below steps from its root.

First we will initialize an npm package, install Larva, and run the init command to scaffold our directory structure:

_// TODO: the `npx` workflow needs to be tested once this is released on npm._

```
# Create an npm package
$ npm init

# Add Larva and scaffold directory structure
$ npx @penskemediacorp/larva init
```

This will install the main Larva package and create a directory called larva/ that contains a scaffold of the directory structure. Move the contents of this directory into your current working directory so that the directory structure aligns with the following:

```
|- pmc-consuming-project/
	|- assets/ (or larva if in an older code-base)
		|- build/
		|- node_modules/
		|- src/
		|- entries/
		|- public/
		|- package.json
		|- larva.config.js
		|- .nvmrc
```

Next, check in root README.md from the scaffold and copy the scripts into package.json as directed.

Finally, create a directory `template-parts/patterns` to hold the PHP version of patterns. If working from the CLI, you can copy/paste this bash command:

```
|- pmc-consuming-project/
	|- template-parts/
		|- patterns/
```

## `larva` Binary & Build Scripts

Inspired by [@wordpress/scripts](https://github.com/WordPress/gutenberg/tree/master/packages/scripts), this package provides a bindary and several scripts for performing common tasks when building UI with Larva. This code lives in the `scripts` directory of this package.

For asset building commands, JS and SCSS can be run at the same time, or separately, in order to minimize the build time for cases where either JS or SCSS, not both, need to be built.

### Usage

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
		"build-html": "larva build-html"
	}
}
```

#### Script Usage Notes

**`build-html`**

This is the script for building static HTML files for deployment. It accepts two CLI arguments, the first for build source ('project' or 'larva') and the second as an optional port number. The default is 3000.

Example of building HTML for project Larva patterns:
`npm run build-html -- project`.

Example of building HTML for Larva patterns with a server on port 2003:
`npm run build-html -- larva 2003`.

**`prod:scss`**

This command accepts an optional flag, `--generate-important-variants`, which
produces a second version of each entrypoint. In these variants, every rule
includes the `!important` declaration. These stylesheets are used with themes
that have not fully adopted Larva, allowing Larva to overcome the theme's
styles' specificity.  

### Overview of Functionality

This operates by way of a single binary, `larva`, and provides a layer of abstraction around CLI commands from various tools. The `larva` binary will point to a default configuration for each command and run its package's associated binary (e.g. `eslint` or `gulp`). The configurations are stored in separate package so as to be available to projects not using Larva.

For example, when the below scripts are present in a consuming projects package.json, the following would happen for `npm run dev:scss` (with the `scripts` value: `larva dev-scss`) in this package:
1. In `bin/larva.js`, get arguments from CLI, and execute a file with name corresponding to the argument.
2. `dev-scss.js` executes `gulp` CLI with additional arguments defined in the JS file via `spawnScript`, which uses the `cross-spawn` npm package to handle cross-platform inconsistencies.

Similarly, `npm run lint:js` (with the `scripts` value: `larva lint-js`) would do the following:
1. In `bin/larva.js`, get arguments from CLI and execute lint-js.js.
2. `lint-js.js` executes the `eslint` CLI with both CLI arguments and specific arguments defined in the script.
