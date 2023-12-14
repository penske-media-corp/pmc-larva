const path = require( 'path' );

const spawnScript = require( '../lib/utils/spawnScript' );

const gulpfilePath = path.join( __dirname, './config/gulpfile.js' );

const args = [
	'build-scss',
	'--gulpfile',
	gulpfilePath,
	'--cwd',
	process.cwd(),
];

spawnScript( './node_modules/.bin/gulp', args );
