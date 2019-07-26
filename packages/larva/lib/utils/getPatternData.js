const getPatternDataPath = require( './getPatternDataPath' );
const chalk = require( 'chalk' );

module.exports = function getPatternData( patternsIndexPath, params ) {
	const path = getPatternDataPath( patternsIndexPath, params.name );

	try {
		let pathData = require( path );

		if ( undefined == typeof pathData ) {
			pathData = new Error( `Encountered an error getting the pattern schema. Did you forget to create a o-pattern.prototype.js or o-pattern.json file?` );
		}
		
		return pathData;
	} catch( error ) {
		console.error( chalk.red.bold( `Encountered an error getting the pattern schema. Did you forget to create a o-pattern.prototype.js or o-pattern.json file?` ) );
		console.error( chalk.red( error ) );
	}

}
