module.exports = {
	maybeUseCliUrl: ( argv, configUrl ) => {

		if ( argv[4] && argv[4].includes( '--url=' ) ) {
			return argv[4].replace( '--url=', '' );
		}

		return configUrl;

	},

	getCliModuleArgs: ( argv ) => {

		if ( argv[4] && argv[4].includes( '--modules=' ) ) {
			const modulesArg = argv[4].split( '=' );
			return modulesArg[1].split( ',' );
		}

		console.log( chalk.red( 'You must provide an argument in the form of: --modules=footer,header' ) );
	}

};
