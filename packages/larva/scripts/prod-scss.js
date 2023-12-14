const path = require( 'path' );

const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const spawnScript = require( '../lib/utils/spawnScript' );

const gulpfilePath = path.join( __dirname, './config/gulpfile.js' );

const cliArgs = getArgsFromCli();
const generateImportantVariants =
	'--generate-important-variants' === cliArgs[ 1 ];

// Remove our arg so Gulp doesn't complain about an undefined task.
if ( generateImportantVariants ) {
	process.argv.pop();
}

const args = [
	generateImportantVariants
		? 'prod-scss-with-important-variants'
		: 'prod-scss',
	'--gulpfile',
	gulpfilePath,
	'--cwd',
	process.cwd(),
];

spawnScript( './node_modules/.bin/gulp', args );
