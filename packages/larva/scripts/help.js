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
// eslint-disable-next-line no-unused-vars
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
	process.stdout.write(
		'Usage: npx @penskemediacorp/larval <command> [--help]\n'
	);
	process.stdout.write(
		`Where <command> is one of ${ allowedCommands.join( ', ' ) }.\n`
	);
	process.exit( 0 );
}
// Check for invalid commands.const command = cliArgs[ 1 ];
const command = cliArgs[ 1 ];

if ( ! allowedCommands.includes( command ) ) {
	process.stderr.write( `Invalid command '${ command }'.\n` );
	process.exit( 0 );
}// Display the docblock for a given command.
const pathToFile = path.resolve( __dirname, `${ command }.js` );
try {
	if ( fs.existsSync( pathToFile ) ) {
		fs.readFile( pathToFile, 'utf8', ( error, data ) => {
			if ( error ) {
				process.stderr.write( error );
				return;
			}
			const fileParts = data.split( '*/', 1 );
			process.stdout.write( fileParts[ 0 ] + '*/' );
		} );
	}
} catch ( error ) {
	process.stderr.write( error );
}
