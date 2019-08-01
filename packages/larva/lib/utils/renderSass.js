const sass = require( 'node-sass' );
const path = require( 'path' );

module.exports = function renderSass( sassData ) {
	return new Promise( ( resolve, reject ) => {
		sass.render( {
			data: sassData,
			includePaths: [
				path.resolve( '/Users/laraschenck/Sites/pmc/pmc-larva/packages/css-utilities/node_modules') // command should be run from same directory as node_modules
			]
		}, ( err, result ) => {
			if ( err ) {
				reject( err );
			}

			resolve( result );
		});
	});
}