'use strict';

const chalk = require( 'chalk' );
const fs = require( 'fs' );

function run( extension ) {

	getScssPathsWithExtension( extension )
	.then( resultPaths => concatenateFileData( resultPaths ) )
	.then( resultSass => renderSass( resultSass ) )
	.then( ( resultCss ) => {
		fs.writeFileSync( path.resolve( __dirname, '../dist/pmc-utilities.' + extension + '.css' ), resultCss.css.toString() );
		console.log( chalk.green( 'Compiled ' + extension + ' CSS.' ) );
		
	})
	.catch( err => console.log( err ) );

}

module.exports = {
	run: run
};
