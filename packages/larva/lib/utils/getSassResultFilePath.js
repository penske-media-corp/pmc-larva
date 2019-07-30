const path = require( 'path' );

module.exports = function getSassResultFilePath( sassFilePath, extension ) {
	return path.resolve( path.dirname( sassFilePath ), '../build/css/utilities.' + extension + '.css' )
};