/**
 * This command can be used from within any Larva project to link the Larva
 * packages (from the monorepo) for local development.
 */

var shell = require( 'shelljs' );

shell.exec( 'npm link @penskemediacorp/larva' );
shell.exec( 'npm link @penskemediacorp/larva-patterns' );
shell.exec( 'npm link @penskemediacorp/larva-css' );
shell.exec( 'npm link @penskemediacorp/larva-js' );
