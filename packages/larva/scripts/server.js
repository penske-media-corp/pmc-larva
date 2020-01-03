const spawn = require( 'cross-spawn' );
const path = require( 'path' );

const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );

const cliArgs = getArgsFromCli();

spawn.sync(
		'nodemon', 
		[
			path.join( __dirname, `../lib/server.js` ),
			... cliArgs
		], { stdio: 'inherit' }
	);