/**
 * This command can be used from within any Larva project to link the Larva
 * packages (from the monorepo) for local development.
 *
 * @see https://github.com/penske-media-corp/pmc-larva/blob/master/README.md#linking-larva-for-local-development
 *
 * ## OPTIONS
 *
 * [--help]
 * : Display usage and examples for this command.
 *
 * ## EXAMPLES
 *
 *     # NPM link local packages to Larva monorepo.
 *     $ npx @penskemediacorp/larva link-all
 *
 *     # Help command.
 *     $ npx @penskemediacorp/larva link-all help
 */

const shell = require( 'shelljs' );

// CLI arguments.
const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const cliArgs = getArgsFromCli();

// Handle help command.
if ( cliArgs.includes( '--help' ) ) {
	shell.exec( `npx @penskemediacorp/larva help link-all` );
	return;
}

shell.exec( 'npm link @penskemediacorp/larva' );
shell.exec( 'npm link @penskemediacorp/larva-css' );
shell.exec( 'npm link @penskemediacorp/larva-js' );
shell.exec( 'npm link @penskemediacorp/larva-patterns' );
shell.exec( 'npm link @penskemediacorp/larva-scss' );
shell.exec( 'npm link @penskemediacorp/larva-svg' );
shell.exec( 'npm link @penskemediacorp/larva-tokens' );
shell.exec( 'npm link @penskemediacorp/twig-to-php-parser' );
