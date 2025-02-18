/**
 * Run a production ready build in a Larva project.
 *
 * ## OPTIONS
 *
 * [--help]
 * : Display usage and examples for this command.
 *
 * [--parse]
 * : Run the Twig-to-PHP parser.
 *
 * [--parser]
 * : Alias for --parse.
 *
 * [--json]
 * : Run the write-json script.
 *
 * [--write-json]
 * : Alias for --json.
 *
 * [--css]
 * : Build CSS assets.
 *
 * [--scss]
 * : Alias for --css.
 *
 * [--js]
 * : Build JavaScript assets.
 *
 * [--svg]
 * : Build SVG assets.
 *
 * ## EXAMPLES
 *
 *     # Run a full build
 *     $ npx @penskemediacorp/larva prod
 *
 *     # Only run the write-json script.
 *     $ npx @penskemediacorp/larva prod --write-json
 *
 *     # Run builds for CSS & JavaScript.
 *     $ npx @penskemediacorp/larva prod --css --js
 *
 *     # Help command.
 *     $ npx @penskemediacorp/larva prod --help
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
	shell.exec( `npx @penskemediacorp/larva help prod` );
	process.exit( 0 );
}

// Run the Twig-to-PHP parser.
if (
	1 === cliArgs.length ||
	cliArgs.includes( '--parser' ) ||
	cliArgs.includes( '--parse' )
) {
	process.stdout.write( 'Parsing Twig templates\n\n' );
	shell.exec( `npx @penskemediacorp/twig-to-php-parser` );
} else {
	process.stdout.write( 'Skipping Twig templates\n' );
}
// Run the write-json script.
if (
	1 === cliArgs.length ||
	cliArgs.includes( '--json' ) ||
	cliArgs.includes( '--write-json' )
) {
	process.stdout.write( 'Building JSON assets\n\n' );
	shell.exec( `${ binPath } write-json` );
} else {
	process.stdout.write( 'Skipping write-json\n' );
}
// Build CSS/SCSS.
if (
	1 === cliArgs.length ||
	cliArgs.includes( '--css' ) ||
	cliArgs.includes( '--scss' )
) {
	process.stdout.write( 'Building CSS assets\n\n' );
	shell.exec( `${ binPath } prod-scss` );
} else {
	process.stdout.write( 'Skipping building CSS\n' );
}

// Build JS.
if ( 1 === cliArgs.length || cliArgs.includes( '--js' ) ) {
	process.stdout.write( 'Building JavaScript assets\n\n' );
	shell.exec( `${ binPath } prod-js` );
} else {
	process.stdout.write( 'Skipping building JavaScript\n' );
}

// Build SVG.
if ( 1 === cliArgs.length || cliArgs.includes( '--svg' ) ) {
	process.stdout.write( 'Building SVG assets\n\n' );
	shell.exec( `${ binPath } build-icons` );
	shell.exec( 'npx svgo -f src/svg -o build/svg' );
} else {
	process.stdout.write( 'Skipping building the SVGs\n' );
}
