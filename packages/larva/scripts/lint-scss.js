const spawn = require( 'cross-spawn' );
const path = require( 'path' );

const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );

const stylelintConfigPath = path.join( __dirname, './config/stylelint.config.js' );
const cliArgs = getArgsFromCli();

// TODO: allow local gulpfile override by checking for --cwd and --gulpfile in cliArgs

spawn.sync(
	'./node_modules/.bin/stylelint',
	[
		'files',
		'./src/scss',
		'--config',
		stylelintConfigPath,
		... cliArgs
	], { stdio: 'inherit' }
);
