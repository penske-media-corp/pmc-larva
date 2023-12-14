/**
 * Start the Larva server.
 *
 * ## OPTIONS
 *
 * [--help]
 * : Display usage and examples for this command.
 *
 * ## EXAMPLES
 *
 *     # Start server.
 *     $ npx @penskemediacorp/larva start
 *
 *     # Help command.
 *     $ npx @penskemediacorp/larva start --help
 */

// Dependencies.
const path = require( 'path' );
const shell = require( 'shelljs' );

// CLI arguments.
const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const cliArgs = getArgsFromCli();

// Handle help command.
if ( cliArgs.includes( '--help' ) ) {
	shell.exec( `npx @penskemediacorp/larva help start` );
	return;
}

// Construct some paths to point our scripts at.
const binPath = path.resolve( __dirname, '../bin/larva.js' ); // For sibling scripts.
const patternsPath = path.resolve( process.cwd(), './src/patterns' ); // Relative path to the patterns.

shell.exec( `${ binPath } server --watch ${ patternsPath } -e twig,html,js` );
