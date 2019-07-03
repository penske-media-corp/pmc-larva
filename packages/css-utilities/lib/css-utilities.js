'use strict';

var sass = require( 'node-sass' );
var path = require( 'path' );
var fs = require( 'fs' );
var globby = require( 'globby' );

const srcPath = path.resolve( __dirname, '../src/' );

let data = fs.readFileSync( path.resolve( __dirname, '../src/pmc-u-background.common.scss' ) );
let commonSass = data.toString();

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


function renderSass( sassData ) {

	sass.render( {
		data: sassData,
		includePaths: [
			path.join(__dirname, '../node_modules') // npm
		]
	}, ( err, result ) => {
		if ( err ) {
			console.error( err );
		}

		return result.css.toString();
	});

}

function writeCsstoFile( css, filePath ) {

}


module.exports = {
	getUtilityPathsWithExtension: getUtilityPathsWithExtension
};
