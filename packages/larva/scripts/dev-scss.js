const spawn = require( 'cross-spawn' );
const path = require( 'path' );

const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );

const cliArgs = getArgsFromCli();
const gulpfilePath = path.join( __dirname, './config/gulpfile.js' );

// TODO: allow local gulpfile override by checking for --cwd and --gulpfile in cliArgs

spawn.sync(
	'./node_modules/.bin/gulp',
	[ '--gulpfile', gulpfilePath, '--cwd', process.cwd(), ...cliArgs ],
	{ stdio: 'inherit' }
);
