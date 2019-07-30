const sass = require( 'node-sass' );
const path = require( 'path' );

module.exports = function renderSass( sassData ) {
	return new Promise( ( resolve, reject ) => {
		sass.render( {
			data: sassData,
			includePaths: [
				path.join(__dirname, '../../node_modules') // npm
			]
		}, ( err, result ) => {
			if ( err ) {
				reject( err );
			}

			resolve( result );
		});
	});
}