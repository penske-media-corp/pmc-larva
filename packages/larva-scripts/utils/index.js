const spawn = require( 'cross-spawn' );

const {
	getArgsFromCli,
	exit
} = require( './process' );

const {
	getArgsFromCli,
	exit
} = require( './process' );

const {
	fromConfigRoot,
	hasProjectFile,
} = require( './file' );

const spawnScript = ( scriptName, args = [] ) => {
	if ( ! scriptName ) {
		// eslint-disable-next-line no-console
		console.log( 'Script name is missing.' );
		exit( 1 );
	}

	if ( ! hasScriptFile( scriptName ) ) {
		// eslint-disable-next-line no-console
		console.log(
			'Unknown script "' + scriptName + '". ' +
			'Perhaps you need to update @wordpress/scripts?'
		);
		exit( 1 );
	}

	const { signal, status } = spawn.sync(
		'node',
		[
			fromScriptsRoot( scriptName ),
			...args,
		],
		{ stdio: 'inherit' },
	);

	if ( signal ) {
		handleSignal( signal );
	}

	exit( status );
};

module.exports = {
	getArgsFromCli,
	spawnScript
}