const path = require( 'path' );

module.exports = function getScssResultFilePath( sassFilePath, extension ) {
	let buildPath = '';
	let pathArr = path.dirname( sassFilePath ).split( '/' );
	let index = pathArr.indexOf( 'src' );
	let removeSrc = pathArr.slice( 0, index );
	let arrayWithPaths = removeSrc.filter( str => buildPath += (str + '/') );

	return path.resolve( buildPath, './build/css/utilities.' + extension + '.css' )
};