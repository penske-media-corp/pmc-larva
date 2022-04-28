/**
 * This script installs the latest version of Larva
 *
 * @see https://github.com/penske-media-corp/pmc-larva/blob/master/UPGRADING.md#how-to-upgrade-a-larva-project
 */

var shell = require( 'shelljs' );

console.log( 'Upgrading Larva to the latest stable version' );
shell.exec( 'npm install @penskemediacorp/larva@latest', { silent: false } );

console.log( 'Building your project' );
shell.exec( 'npm run prod' );
