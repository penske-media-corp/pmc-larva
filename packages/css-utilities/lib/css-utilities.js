'use strict';

var sass = require( 'node-sass' );
var path = require( 'path' );
var chalk = require( 'chalk' );
var fs = require( 'fs' );
var globby = require( 'globby' );

const srcPath = path.resolve( __dirname, '../src/' );

function getUtilityPathsWithExtension( extension ) {
	
	return new Promise( function( resolve, reject ) {

		const filePattern = `*.${extension}.scss`;
		const paths = globby.sync( srcPath, {
			expandDirectories: {
				files: [ filePattern ],
			}
		});

		resolve( paths );
	});
};

function concatenateFileData( filePaths ) {

	return new Promise( ( resolve, reject ) => {
		let data = '';
		
		filePaths.forEach( path => {
			data += fs.readFileSync( path ).toString();
		});
		
		if ( data === '' ) {
			reject( 'No Sass.' );
		}

		resolve( data );
	});
}

function renderSass( sassData ) {
	return new Promise( ( resolve, reject ) => {
		sass.render( {
			data: sassData,
			includePaths: [
				path.join(__dirname, '../node_modules') // npm
			]
		}, ( err, result ) => {
			if ( err ) {
				reject( err );
			}

			resolve( result );
		});
	});
}


function run( extension ) {

	getUtilityPathsWithExtension( extension )
	.then( resultPaths => concatenateFileData( resultPaths ) )
	.then( resultSass => renderSass( resultSass ) )
	.then( ( resultCss ) => {
		fs.writeFileSync( path.resolve( __dirname, '../dist/pmc-utilities-' + extension + '.css' ), resultCss.css.toString() );
		console.log( chalk.green( 'Compiled ' + extension + ' CSS.' ) );
		
	})
	.catch( err => console.log( err ) );

}

run( 'critical' );

module.exports = {
	getUtilityPathsWithExtension: getUtilityPathsWithExtension,
	concatenateFileData: concatenateFileData,
	renderSass: renderSass,
	run: run
};
