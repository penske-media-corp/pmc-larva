const path = require( 'path' );

module.exports = function getSassResultFilePath( sassFilePath, extension ) {
	// TODO: need to split the path at src in case the sass file is nested, which it probably will be
	return path.resolve( path.dirname( sassFilePath ), '../build/css/utilities.' + extension + '.css' )
};