const fs = require( 'fs' );
const buildPatternFilePath = require( './buildPatternFilePath' );

module.exports = function getPatternDataPath( patternsIndexPath, patternName ) {
	const protoPath = buildPatternFilePath( patternsIndexPath, patternName, '.prototype.js' ).toString();
	const jsonPath = buildPatternFilePath( patternsIndexPath, patternName, '.json' ).toString();
	
	try {
		if ( fs.existsSync( protoPath ) ) {
			return protoPath;
		} else if ( fs.existsSync( jsonPath ) ) {
			return jsonPath;
		}
	} catch ( error ) {
		return error;
	}
	
}