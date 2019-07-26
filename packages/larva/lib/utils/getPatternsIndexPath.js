const isCoreTheme = require( './isCoreTheme' );

module.exports = function getPatternsIndexPath( config ) {
	// if ( isCoreTheme( config ) ) {
		return config.larvaPatternsDir;
	// } else {
	// 	return config.themePatternsDir;
	// }
}