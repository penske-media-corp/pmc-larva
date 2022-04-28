/**
 * This command can be used from within any Larva project to link the Larva
 * packages (from the monorepo) for local development.
 *
 * @see https://github.com/penske-media-corp/pmc-larva/blob/master/README.md#linking-larva-for-local-development
 */

const shell = require( 'shelljs' );

shell.exec( 'npm link @penskemediacorp/larva' );
shell.exec( 'npm link @penskemediacorp/larva-patterns' );
shell.exec( 'npm link @penskemediacorp/larva-css' );
shell.exec( 'npm link @penskemediacorp/larva-js' );
