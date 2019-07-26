module.exports = function clonePatternData( path ) {
	const patternData = require( path );
	return Object.assign( {}, patternData );
}