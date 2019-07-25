
module.exports = function isCoreTheme( config ) {
	if ( undefined === config.themeDir ) {
		return true;
	}

	return false;
}