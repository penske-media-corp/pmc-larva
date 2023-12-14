// TODO:
// post launch task from GUT-67 is to pull the
// IW related values into configuration
const webFontConfig = {
	init: function init() {
		const fontCookie = pmc.cookie.get( 'iw_fonts_loaded' );

		if ( 'undefined' !== typeof fontCookie && fontCookie ) {
			this.load( 'directload' );
		} else {
			window.addEventListener( 'load', () => {
				this.load( 'load' );
			} );
		}
	},

	load: function load( type ) {
		const currentThemeUrl = this.getThemeUrl();

		const loadcount = this.loadcount++;

		WebFont.load( {
			google: {
				families: [ 'PT Sans:400,700', 'Teko:300,400' ],
			},
			custom: {
				families: [ 'Argent CF' ],
			},

			active: function webfontsLoaderActive() {
				try {
					if ( 'load' == type ) {
						pmc.cookie.set(
							'iw_fonts_loaded',
							1,
							7 * 24 * 60 * 60
						);
					}
					console.log( 'fonts loaded ' + type );
				} catch ( e ) {}
			},
		} );
	},

	getThemeUrl: function getThemeUrl() {
		if ( 'undefined' === typeof pmc_common_urls ) {
			return '';
		}
		return pmc_common_urls.current_theme_uri;
	},
};

export default webFontConfig;
