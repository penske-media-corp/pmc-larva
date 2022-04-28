/**
 * This script installs the latest version of Larva and runs a full build.
 */

const path = require( 'path' );
const shell = require( 'shelljs' );
const binPath = path.resolve(__dirname, '../bin/larva.js');

console.log( 'Upgrading Larva to the latest stable version' );
shell.exec( 'npm install @penskemediacorp/larva@latest' );

console.log( 'Building CSS assets' );
shell.exec( `${binPath} prod-scss` );

console.log( 'Building JavaScript assets' );
shell.exec( `${binPath} prod-js` );
