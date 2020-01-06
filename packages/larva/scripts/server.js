const path = require( 'path' );

const spawnScript = require( '../lib/utils/spawnScript' );

const scriptLocation = path.join( __dirname, '../lib/server.js' );

const args = [
	scriptLocation
];

spawnScript( 'nodemon', args );
