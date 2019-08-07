const getPatternType = require( './getPatternType' );
const getPatternDigit = require( './getPatternDigit' );

module.exports = function buildPatternFilePath( patternsPath, name, ext ) {
	const patternType = getPatternType( name );
	let patternDigit = getPatternDigit( name );

	// if ( patternsPath.includes( 'larva' ) ) {
		patternDigit = '';
	// }

	return patternsPath + '/' + patternDigit + patternType + '/' + name +'/' + name + ext;
}