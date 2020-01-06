const spawn = require( 'cross-spawn' );

const getArgsFromCli = require( './getArgsFromCli' );

const argsWithoutLarvaCommand = ( () => {
	let cliArgs = getArgsFromCli();

	if ( cliArgs.length ) {
		cliArgs.shift();
	}

	return cliArgs.length ? cliArgs : [];
} )();

console.log( argsWithoutLarvaCommand );

// TODO: allow local gulpfile override by checking for --cwd and --gulpfile in cliArgs
module.exports = function spawnScript( binary, args ) {

	spawn.sync(
		binary,
		[
			... args,
			... argsWithoutLarvaCommand
		], { stdio: 'inherit' }
	);
};
