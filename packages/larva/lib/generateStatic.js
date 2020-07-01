const path = require( 'path' );
const mkdirp = require( 'mkdirp' );
const fs = require( 'fs' );
const chalk = require( 'chalk' );
const axios = require( 'axios' );

/**
 * Generate Static HTML
 *
 * Given an array of pattern routes from the Larva server and
 * a target build directory, use HTTP requests the get the HTML content
 * of each route, and write the content to directory structure that
 * mirrors the pattern routes.
 *
 * @param {array} routesArr An array of routes in a pattern server, excluding the pattern source (i.e. larva or project). This is the result of getPatternRoutes.
 * @param {string} buildPath A directory where the HTML files should be written.
 * @param {function} done A callback function to run when the site generation completes.
 * @param {urlBase} string The base URL for the pattern library e.g. 'http://localhost:3001/larva'.
 *                         Pattern routes will be appended to this. Should not end in slash.
 *
 * @see {@link getPatternRoutes}.
 */

module.exports = function generateStatic( routesArr, buildPath, done, urlBase = 'http://localhost:3000/larva' ) {
	const errors = [];
	
	try {
		
		const promises = routesArr.map( ( route ) => {

			const dir = path.join( buildPath, route );
			const url = `${urlBase}/${route}`;

			return axios.get( url ).then( ( response ) => {

				if ( 200 === response.status ) {
					mkdirp.sync( dir );
					fs.writeFileSync( `${dir}/index.html`, response.data );
				}

				if ( 500 === response.status ) {
					errors.push( url );
				}

			} ).catch( ( e ) => {

				if ( 'ECONNREFUSED' === e.code ) {
					console.error( chalk.bold.red( 'You must start the Larva server with `npm run larva`.' ) );
					  process.exitCode = 1;
				}

				console.log( e );

				mkdirp.sync( dir );
				fs.writeFileSync( `${dir}/index.html`, e.response.data );
			});

		} );

		axios.all( promises ).then( () => {
			
			if ( errors.length > 0 ) {
				console.log( errors );
			}
			
			done();
		} );

	} catch ( e ) {
		console.error( e );
	}
}
