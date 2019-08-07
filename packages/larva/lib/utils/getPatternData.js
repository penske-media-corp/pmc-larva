const getPatternDataPath = require( './getPatternDataPath' );
const chalk = require( 'chalk' );

module.exports = function getPatternData( patternsPath, params ) {
	const path = getPatternDataPath( patternsPath, params.name );

	try {
		let pathData = require( path );

		if ( undefined == typeof pathData ) {
			pathData = new Error( `Encountered an error getting the pattern data.` );
		}
		
		return pathData;
	} catch( error ) {
		console.error( chalk.red.bold( `Encountered an error getting the pattern data.` ) );
		console.error( chalk.red( error ) );
	}

}
