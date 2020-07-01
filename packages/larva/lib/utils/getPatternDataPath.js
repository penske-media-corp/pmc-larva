const fs = require( 'fs' );
const chalk = require( 'chalk' );
const path = require( 'path' );

module.exports = function getPatternDataPath( patternsPath, params ) {
	const protoPath = path.join( patternsPath, params.type, params.name, params.name + '.' + params.variant + '.js' );
	const jsonPath = path.join( patternsPath, params.type, params.name, params.name + '.json' )

	try {
		if ( fs.existsSync( protoPath ) ) {
			return protoPath;
		} 
		
		
	} catch( e ) {

		try {
			if ( fs.existsSync( jsonPath ) ) {
				return jsonPath;
			}
		} catch ) 
		return e;
	}
}