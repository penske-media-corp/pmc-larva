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

### In a brand new project

To install Larva, run the following command from the asset directory of a consuming project:
```
npm install @penskemediacorp/larva
```

Then, create a file, larva.config.js in the assets directory. Add the following:

```
const path = require( 'path' );

module.exports = {
	patterns: {
		larvaPatternsDir: path.resolve( __dirname, 'node_modules/@penskemediacorp/larva-patterns' ),
		projectPatternsDir: path.resolve( __dirname, './src/patterns' ),
		ignoredModules: [
			// Modules to be ignored from write-json
		],
		variants: [
			// And Node prototype variants e.g. article-tags.vip.js
		],
	}
}
```

### Scripts in This Repo

The following scripts should be added to the consuming project assets/package.json:

```language:json
"scripts": {
	"larva": "nodemon -e twig,*.prototype.js,html,scss ./node_modules/@penskemediacorp/larva/lib/server.js",
	"write-json": "larva write-json",
}
```

#### `npm run write-json`

This script will output the Node prototype and variant objects from the pattern Node files to JSON file in `assets/build/json` so that the default objects can be used in the PHP templates.

This command accepts one option parameter to write the JSON from Larva for shared modules: `npm run write-json -- larva`.

#### `npm run larva`

This command will start the pattern server, where you will develop UI. You must be in the same directory as `larva.config.js` to run this command, in other words, working within a "host" project. This will bring up the server for developing patterns at localhost:3000. You must navigate to that URL manually.

The Larva mono-repo is set up to be a "host" project, and the server can be started with `npm run larva` from within the root of this repository in order to working on core Larva patterns. This will likely move to within `packages/larva` to make the managing of assets match that of other "host" projects.