const sass = require( 'node-sass' );
const path = require( 'path' );

module.exports = function renderSass( sassData ) {
	return new Promise( ( resolve, reject ) => {
		sass.render(
			{
				data: sassData,
				includePaths: [
					path.resolve( process.cwd(), './node_modules' ), // Command should be run from same directory as node_modules
					path.resolve( process.cwd(), './src' ),
				],
			},
			( err, result ) => {
				if ( err ) {
					reject( err );
				}

				resolve( result );
			}
		);
	} );
};
