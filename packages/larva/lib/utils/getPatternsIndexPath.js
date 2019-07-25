const isCoreTheme = require( './isCoreTheme' );

module.exports = function getPatternsIndexPath( config ) {
	if ( isCoreTheme( config ) ) {
		return config.larvaDir;
	} else {
		return config.themeDir;
	}
}