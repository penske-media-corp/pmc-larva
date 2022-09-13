const path = require( 'path' );

const spawnScript = require( '../lib/utils/spawnScript' );

const scriptLocation = path.join( __dirname, '../lib/start.js' );

const args = [ scriptLocation ];

spawnScript( './node_modules/.bin/nodemon', args );
