const getPatternType = require( './getPatternType' );
const getPatternDigit = require( './getPatternDigit' );
const getAppConfiguration = require( './getAppConfiguration' )( 'patterns' );

module.exports = function buildPatternFilePath( patternsIndexPath, name, ext ) {
	const patternType = getPatternType( name );
	let patternDigit = getPatternDigit( name );

	if ( patternsIndexPath.includes( 'larva' ) ) {
		patternDigit = '';
	}

	return patternsIndexPath + '/' + patternDigit + patternType + '/' + name +'/' + name + ext;
}