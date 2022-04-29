/**
 * Lint JavaScript and CSS files in a Larva project.
 *
 * ## OPTIONS
 *
 * [--version]
 * : Optional. Version of Larva to install. Defaults to 'latest'.
 *
 * [--skip-css]
 * : Skip building CSS assets.
 *
 * [--skip-js]
 * : Skip building JavaScript assets.
 *
 * [--skip-build]
 * : Skip building any assets.
 *
 * ## EXAMPLES
 *
 *     # Upgrade to latest and kickoff a build.
 *     $ npx @penskemediacorp/larva upgrade
 *
 *     # Skip building CSS assets.
 *     $ npx @penskemediacorp/larva upgrade --skip-css
 *
 *     # Skip both CSS and JavaScript assets.
 *     $ npx @penskemediacorp/larva upgrade --skip-css --skip-js
 *
 *     # Skip the entire build.
 *     $ npx @penskemediacorp/larva upgrade --skip-build
 *
 *     # Upgrade to a specific version
 *     $ npx @penskemediacorp/larva upgrade --version=0.6.0
 */
// Dependencies.
const path = require( 'path' );
const shell = require( 'shelljs' );

// Construct some paths to point our scripts at.
const binPath = path.resolve( __dirname, '../bin/larva.js' ); // For sibling scripts.

// CLI arguments.
const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const cliArgs = getArgsFromCli();

// Larva version to install.
const version = cliArgs.includes( '--version' ) ? cliArgs.includes( '--version' ) : 'latest';

// Update Larva version installed.
console.log( `Installing Larva@${version}\n\n` );
shell.exec( `npm install @penskemediacorp/larva@${version}` );

// Build CSS.
if (
    ! cliArgs.includes( '--skip-css' )
    || cliArgs.includes( '--skip-build' )
) {
    console.log( 'Building CSS assets\n\n' );
    shell.exec( `${binPath} prod-scss` );
}

// Build JavaScript.
if (
    ! cliArgs.includes( '--skip-js' )
    || cliArgs.includes( '--skip-build' )
) {
    console.log( 'Building JavaScript assets\n\n' );
    shell.exec( `${binPath} prod-js` );
}
