const path = require( 'path' );

const spawnScript = require( '../lib/utils/spawnScript' );

const configPath = path.join( __dirname, './config/webpack.config.js' );

const args = [
	`--config=${ configPath }`,
	'--mode=development',
	'--watch=true',
];

spawnScript( './node_modules/.bin/webpack', args );
