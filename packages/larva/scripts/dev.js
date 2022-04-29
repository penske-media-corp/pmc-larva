/**
 * Run dev scripts for CSS and JavaScript.
 *
 * ## EXAMPLES
 *
 *     # Run dev for CSS and JavaScript.
 *     $ npx @penskemediacorp/larva dev
 */

// Dependencies.
const path = require( 'path' );
const shell = require( 'shelljs' );

// Construct some paths to point our scripts at.
const binPath = path.resolve( __dirname, '../bin/larva.js' ); // For sibling scripts.

// @todo Determine why this isn't working.
shell.exec( "npx concurrently \"${binPath} dev-scss\" \"${binPath} dev-js\" --raw" );
