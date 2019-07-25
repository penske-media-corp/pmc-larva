module.exports = function getPatternDigit( patternName ) {
	const patternNamespace = patternName.substring( 0, 2 );

	let patternDigit = '08-'; // Modules
	
	if ( 'o-' ===  patternNamespace ) {
		patternDigit = '05-'; // Objects
	}

	if ( 'c-' === patternNamespace ) {
		patternDigit = '04-'; // Components
	}

	return patternDigit;
}