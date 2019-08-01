const globby = require( 'globby' );
const fs = require( 'fs' );
const chalk = require( 'chalk' );

module.exports = function getScssPathsWithExtension( extension, srcPath ) {
	
	const filePattern = `*.${extension}.scss`;
	
	return new Promise( function( resolve, reject ) {

		if ( ! fs.existsSync( srcPath ) ) {
			reject( chalk.bold.red( 'The directory ' + srcPath + ' does not exist.' ) );
		}

		const paths = globby.sync( srcPath, {
			expandDirectories: {
				files: [ filePattern ],
			}
		});

		resolve( paths );
	});
};