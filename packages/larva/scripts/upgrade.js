/**
 * This script installs the latest version of Larva and runs a full build.
 */

// Dependencies.
const path = require( 'path' );
const shell = require( 'shelljs' );


const binPath = path.resolve(__dirname, '../bin/larva.js');

console.log( '\n\nUpgrading Larva to the latest stable version' );
shell.exec( 'npm install @penskemediacorp/larva@latest' );

console.log( '\n\n\nBuilding CSS assets' );
shell.exec( `${binPath} prod-scss` );

console.log( '\n\n\nBuilding JavaScript assets' );
shell.exec( `${binPath} prod-js` );
