/**
 * This script runs a production build for a Larva project.
 */

// Dependencies.
const path = require( 'path' );
const shell = require( 'shelljs' );

const binPath = path.resolve(__dirname, '../bin/larva.js');

console.log( '\n\nParsing Twig templates' );
shell.exec( `npx @penskemediacorp/twig-to-php-parser` );

console.log( '\n\n\nBuilding JSON assets' );
shell.exec( `${binPath} write-json` );

console.log( '\n\n\nBuilding CSS assets' );
shell.exec( `${binPath} prod-scss` );

console.log( '\n\n\nBuilding JavaScript assets' );
shell.exec( `${binPath} prod-js` );
