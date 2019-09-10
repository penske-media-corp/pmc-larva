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

		return null;
	},

	/**
	 * Prepare Test Paths
	 * 
	 * @param array of modules
	 * @param loc project | larva
	 */
	prepareTestPaths: ( array, loc ) => {
		return array.map( a => '/' + loc + '/modules/' + a );
	},
	
	/**
	 * Prepare Module Selectors
	 * 
	 * Make a class selector out of each module from CLI.
	 * 
	 * @param array of modules
	 */
	prepareModuleSelectors: ( array ) => {
		return array.map( a => '.' + a );
	}

};
