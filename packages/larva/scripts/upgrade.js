/**
 * Lint JavaScript and CSS files in a Larva project.
 *
 * ## OPTIONS
 *
 * [--help]
 * : Display usage and examples for this command.
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
 *
 *     # Help command.
 *     $ npx @penskemediacorp/larva upgrade --help
 */
// Dependencies.
const path = require( 'path' );
const shell = require( 'shelljs' );

// Construct some paths to point our scripts at.
const binPath = path.resolve( __dirname, '../bin/larva.js' ); // For sibling scripts.

// CLI arguments.
const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const cliArgs = getArgsFromCli();

// Handle help command.
if ( cliArgs.includes( '--help' ) ) {
	shell.exec( `npx @penskemediacorp/larva help upgrade` );
	return;
}

// Parse the --version flag. Defaults to 'latest'.
const getVersionArg = () => {
	// Loop through our args, looking for `--version=`.
	const versionFlag = cliArgs.find( ( cliArg ) => {
		if ( ! cliArg.includes( '--version=' ) ) {
			return false;
		}
		return true;
	} );

	// Did not find it.
	if ( ! versionFlag ) {
		return 'latest';
	}

	// Trip the value down to just the version.
	const version = versionFlag.replace( '--version=', '' );
	return version ? version : 'latest';
};

// Update Larva version installed.
console.log( `Installing Larva@${ getVersionArg() }\n\n` );
shell.exec( `npm install @penskemediacorp/larva@${ getVersionArg() }` );

// Build CSS.
if (
	! cliArgs.includes( '--skip-css' ) ||
	cliArgs.includes( '--skip-build' )
) {
	console.log( 'Building CSS assets\n\n' );
	shell.exec( `${ binPath } prod-scss` );
}

// Build JavaScript.
if ( ! cliArgs.includes( '--skip-js' ) || cliArgs.includes( '--skip-build' ) ) {
	console.log( 'Building JavaScript assets\n\n' );
	shell.exec( `${ binPath } prod-js` );
}
