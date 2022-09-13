/**
 * Help command for Larva.
 *
 * ## OPTIONS
 *
 * [<command>]
 * : Slug of a command to display the CLI usage information.
 *
 * ## EXAMPLES
 *
 *     # Display a list of available commands.
 *     $ npx @penskemediacorp/larva help
 *
 *     # Display the prod command docblock.
 *     $ npx @penskemediacorp/larva help prod
 */

// Dependencies.
const fs = require( 'fs' );
const path = require( 'path' );
const shell = require( 'shelljs' );

// CLI arguments.
const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const cliArgs = getArgsFromCli();

const allowedCommands = [
	'help',
	'link-all',
	'lint',
	'prod',
	'start',
	'upgrade',
];

// Display a generic help description.
if ( 2 !== cliArgs.length ) {
	console.log( 'Usage: npx @penskemediacorp/larval <command> [--help]\n' );
	console.log(
		`Where <command> is one of ${ allowedCommands.join( ', ' ) }.\n`
	);
	return;
}

// Check for invalid commands.
const command = cliArgs[ 1 ];
if ( ! allowedCommands.includes( command ) ) {
	console.log( `Invalid command '${ command }'.\n` );
	return;
}

// Display the docblock for a given command.
const pathToFile = path.resolve( __dirname, `${ command }.js` );
try {
	if ( fs.existsSync( pathToFile ) ) {
		fs.readFile( pathToFile, 'utf8', ( error, data ) => {
			if ( error ) {
				console.error( error );
				return;
			}
			const fileParts = data.split( '*/', 1 );
			console.log( fileParts[ 0 ] + '*/' );
		} );
	}
} catch ( error ) {
	console.error( error );
}
