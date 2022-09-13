// Note 4/6/20 - This might not be necessary since we can use the directory name.
module.exports = function getPatternType( patternName ) {
	const patternNamespace = patternName.substring( 0, 2 );
	let patternType = 'modules';

	if ( 'o-' === patternNamespace ) {
		patternType = 'objects';
	}

	if ( 'c-' === patternNamespace ) {
		patternType = 'components';
	}

	return patternType;
};
