'use strict';

const chalk = require( 'chalk' );
const fs = require( 'fs' );
const path = require( 'path' );
const { getScssPathsWithExtension, concatenateFileData, renderSass } = require( './utils/utils' );

module.exports = function build( extension, srcPath ) {

	getScssPathsWithExtension( extension, srcPath )
	.then( resultPaths => concatenateFileData( resultPaths ) )
	.then( resultSass => renderSass( resultSass ) )
	.then( ( resultCss ) => {
		fs.writeFileSync( path.resolve( __dirname, '../dist/pmc-utilities.' + extension + '.css' ), resultCss.css.toString() );
		console.log( chalk.green( 'Compiled ' + extension + ' CSS.' ) );
		
	})
	.catch( err => console.log( err ) );

}
