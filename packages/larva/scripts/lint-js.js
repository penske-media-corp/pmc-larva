const getAppConfiguration = require( '../lib/utils/getAppConfiguration' );
const spawnScript = require( '../lib/utils/spawnScript' );

const { configFile } = getAppConfiguration( 'eslint' );

const args = [ '--c', configFile ];

spawnScript( './node_modules/.bin/eslint', args );
