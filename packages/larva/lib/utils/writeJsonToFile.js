const fs = require( 'fs' );

module.exports = function writePatternDataToFile( filepath, data ) {
	const json = JSON.stringify( data );
	fs.writeFileSync( filepath, json );
};
