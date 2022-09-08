/**
 * Lint JavaScript and CSS files in a Larva project.
 *
 * ## OPTIONS
 *
 * [--help]
 * : Display usage and examples for this command.
 *
 * [--css]
 * : Lint CSS assets.
 *
 * [--js]
 * : Lint JavaScript assets.
 *
 * [--fix]
 * : Try to automatically fix any issues that arise while linting.
 *
 * ## EXAMPLES
 *
 *     # Lint CSS and JavaScript assets.
 *     $ npx @penskemediacorp/larva lint
 *
 *     # Only lint CSS assets.
 *     $ npx @penskemediacorp/larva lint --css
 *
 *     # Only lint JavaScripot assets.
 *     $ npx @penskemediacorp/larva lint --js
 *
 *     # Fix CSS and JavaScript assets.
 *     $ npx @penskemediacorp/larva lint --fix
 *
 *     # Mix and match, fix JavaScript assets.
 *     $ npx @penskemediacorp/larva lint --js --fix
 *
 *     # Help command.
 *     $ npx @penskemediacorp/larva lint --help
 */

// Dependencies.
const path = require( 'path' );
const shell = require( 'shelljs' );

// Construct some paths to point our scripts at.
const binPath = path.resolve( __dirname, '../bin/larva.js' ); // For sibling scripts.
const workingDirectory = process.cwd(); // For paths relative to the directory this script was called from.

// CLI arguments.
const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const cliArgs = getArgsFromCli();

// Handle help command.
if ( cliArgs.includes( '--help' ) ) {
	shell.exec( `npx @penskemediacorp/larva help lint` );
	return;
}

// Trigger linting when a specific flag is present, or when neither flag is
// present.
const lintCSS = cliArgs.includes( '--css' ) || ! cliArgs.includes( '--js' );
const lintJS = cliArgs.includes( '--js' ) || ! cliArgs.includes( '--css' );

// Appends ` fix` to our linting scripts if the flag is present.
const fix = cliArgs.includes( '--fix' ) ? ' fix' : '';

if ( lintCSS ) {
	console.log( 'Linting CSS assets\n\n\n' );
	shell.exec( `${ binPath } lint-scss${ fix }` );
}

if ( lintJS ) {
	console.log( 'Linting JavaScript assets\n\n\n' );
	shell.exec( `${ binPath } lint-js ${ workingDirectory }${ fix }` );
}
