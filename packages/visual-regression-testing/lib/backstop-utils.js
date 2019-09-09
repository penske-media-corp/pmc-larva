module.exports = {
	maybeUseCliUrl: ( argv, configUrl ) => {

		if ( argv[4] && argv[4].includes( '--url=' ) ) {
			return argv[4].replace( '--url=', '' );
		}

		return configUrl;

	}
};
