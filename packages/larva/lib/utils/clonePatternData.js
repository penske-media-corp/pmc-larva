const path = require( 'path' );
const clonedeep = require( 'lodash.clonedeep' );
const getConfig = require( './getAppConfiguration' );

const { larvaPatternsDir, projectPatternsDir } = getConfig( 'patterns' );

module.exports = function clonePatternData( slug ) {
	try {
		return clonedeep( require( path.join( projectPatternsDir, slug ) ) );
	} catch {
		return clonedeep( require( path.join( larvaPatternsDir, slug ) ) );
	}
};
