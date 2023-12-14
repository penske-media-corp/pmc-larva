const path = require( 'path' );

const stylelintConfigPath = path.join(
	__dirname,
	'./config/stylelint.config.js'
);
const spawnScript = require( '../lib/utils/spawnScript' );

const args = [ 'files', './src/scss', '--config', stylelintConfigPath ];

spawnScript( './node_modules/.bin/stylelint', args );
