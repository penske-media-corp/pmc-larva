'use strict';

const chalk = require( 'chalk' );
const fs = require( 'fs' );
const path = require( 'path' );
const { getScssPathsWithExtension, concatenateFileData, renderSass, getScssResultFilePath } = require( './utils/utils' );

module.exports = function build( extension, changedFilePath ) {

	let resultFile = getScssResultFilePath( changedFilePath, extension );

	getScssPathsWithExtension( extension, path.dirname( changedFilePath ) )
	.then( resultPaths => concatenateFileData( resultPaths ) )
	.then( resultSass => renderSass( resultSass ) )
	.then( ( resultCss ) => {
		fs.writeFileSync( resultFile, resultCss.css.toString() );
		console.log( chalk.green( 'Compiled ' + resultFile + ' CSS.' ) );
	})
	.catch( err => console.error( err ) );

}
