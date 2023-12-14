const path = require( 'path' );

const spawnScript = require( '../lib/utils/spawnScript' );

const configPath = path.join( __dirname, './config/webpack.config.js' );

const args = [ `--config=${ configPath }`, '--mode=production' ];

spawnScript( './node_modules/.bin/webpack', args );
