const globby = require( 'globby' );
const path = require( 'path' );

module.exports = function getScssPathsWithExtension( extension, srcPath ) {
	
	const filePattern = `*.${extension}.scss`;
	
	return new Promise( function( resolve, reject ) {

		const paths = globby.sync( srcPath, {
			expandDirectories: {
				files: [ filePattern ],
			}
		});

		resolve( paths );
	});
};