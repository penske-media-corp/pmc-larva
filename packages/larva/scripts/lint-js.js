const path = require( 'path' );

const eslintConfigPath = path.join( __dirname, './config/.eslintrc.json' );
const spawnScript = require( '../lib/utils/spawnScript' );

const args = [
	'--c',
	eslintConfigPath
];

spawnScript( './node_modules/.bin/eslint', args );
