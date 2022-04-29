/**
 * Start the Larva server.
 *
 * ## EXAMPLES
 *
 *     # Start server.
 *     $ npx @penskemediacorp/larva start
 */

// Dependencies.
const path = require( 'path' );
const shell = require( 'shelljs' );

// Construct some paths to point our scripts at.
const binPath = path.resolve( __dirname, '../bin/larva.js' ); // For sibling scripts.
const patternsPath = path.resolve( process.cwd(), './src/patterns' ); // Relative path to the patterns.

shell.exec( `${binPath} server --watch ${patternsPath} -e twig,html,js` );
