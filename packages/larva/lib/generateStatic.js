const path = require( 'path' );
const mkdirp = require( 'mkdirp' );
const fs = require( 'fs' );
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

module.exports = function generateStatic( routesArr, buildPath, done, urlBase = 'http://localhost:3001/larva' ) {

	try {

		const promises = routesArr.map( ( route ) => {

			const dir = path.join( buildPath, route );
			const url = `${urlBase}/${route}`;

			return axios.get( url ).then( ( response ) => {
				mkdirp.sync( dir );
				fs.writeFileSync( `${dir}/index.html`, response.data );
			} ).catch( ( e ) => {
				console.error( e );
			});

		} );

		axios.all( promises ).then( () => {
			done();
		} );

	} catch ( e ) {
		console.error( e );
	}
}
