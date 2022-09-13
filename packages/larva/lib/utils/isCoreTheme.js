module.exports = function isCoreTheme( config ) {
	if ( undefined === config.themePatternsDir ) {
		return true;
	}

	return false;
};
