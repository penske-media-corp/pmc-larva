# Larva!

If you want _all of Larva_, this is your repo. This is where you should start for new projects and for refactoring old projects onto the system.

This package is essentially a wrapper that brings all of the other packages together, and provides the tools for using them to develop modules. It contains an Express server and UI for configuring patterns, and _will_ contain scripts to scaffold patterns, test them, and probably do all kinds of other cools stuff. For the time being, it's pretty much just the server and a very basic UI.

## Usage

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
		larvaPatternsDir: path.resolve( __dirname, 'node_modules/@penksemediacorp/larva-patterns' ),
		themePatternsDir: path.resolve( __dirname, './src/patterns' )
	}
}
```

Create the following directories in your-theme/assets/src/patterns: 
* `04-components/`
* `05-objects/`
* `06-algorithms/`
* `07-utilities/`
* `08-modules/`
* `09-one-offs/`

(yes, there will be a scaffold task, someday)

The `larva-patterns` node_module and the patterns directory in the child theme assets/ directory act in the same fashion as the parent and child theme relationship in WordPress, where the `larva-patterns` is the parent theme...maybe?

To start the server, you must be in the same directory as `larva.config.js` or, in other words, working within a "host" project. The Larva mono-repo is set up to be a "host" project, and the server can be started from within the root of the repository.

There is no actual command for starting the server, yet. It can be started by executing server.js with nodemon which will restart the server when files are changed. From the root of the larva, run the following command:
```
nodemon -e twig,js,html packages/larva/lib/server.js
```

## Configuration

This command should create a configuration file called `larva.config.js`.