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
			|- patterns/
				|- 04-components/
				|- 05-objects/
				|- 06-algorithms/
				|- 07-utilities/
				|- 08-modules/
				|- 09-one-offs/
		|- public
			|- {fonts}
		|- package.json
		|- larva.config.js
	|- template-parts/ (only if there are parsed patterns)
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
		projectPatternsDir: path.resolve( __dirname, './src/patterns' )
	}
}
```

Create the following directories in your-theme/assets/src/patterns: 


(yes, there will be a scaffold task, someday)

To start the server, you must be in the same directory as `larva.config.js` or, in other words, working within a "host" project. The Larva mono-repo is set up to be a "host" project, and the server can be started from within the root of the repository with the following command:

```
➜ pmc-larva$ npm run larva
```

This will bring up the server for developing patterns at localhost:3000.