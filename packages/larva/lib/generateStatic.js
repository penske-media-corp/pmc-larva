const path = require( 'path' );
const mkdirp = require( 'mkdirp' );
const fs = require( 'fs-extra' );
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

	// TODO: must update to always read from static larva UI JS
	const assetsDest = path.join( buildPath, './assets' );
	const assetsBuildSrc = path.join( buildPath, '../js' );

	// get subdirectories - i dont even know rifhr noqaS
	// const assetsDest = path.join( buildPath, './assets' );
	// const assetsBuildSrc = path.join( buildPath, '../js' );

	fs.copy(
		assetsBuildSrc,
		assetsDest,
		( e ) => {

			if ( e ) {
				return console.error( e );
			}

			console.log( `Copied assets.` );
		}
	);

	try {
		
		const promises = routesArr.map( ( route ) => {

			const dir = path.join( buildPath, route );
			const url = `${urlBase}/${route}`;

			return axios.get( url ).then( ( response ) => {

				if ( 200 === response.status ) {
					mkdirp.sync( dir );
					fs.writeFileSync( `${dir}/index.html`, response.data );
					console.log( `Built ${route}.` );
				}

				if ( 500 === response.status ) {
					errors.push( url );
				}

			} ).catch( ( e ) => {

				if ( 'ECONNREFUSED' === e.code ) {
					process.exitCode = 1;
				} else {
					mkdirp.sync( dir );
					fs.writeFileSync( `${dir}/index.html`, e.message );
				}

			});

		} );

		axios.all( promises ).then( () => {
			
			if ( errors.length > 0 ) {
				console.log( errors );
			}

			done( chalk.green( `Successfully build static site to ${buildPath}` ) );			

		} ).catch( ( e ) =>  {
			
			done( chalk.bold.red( e ) );
		
		});

	} catch ( e ) {
		console.error( e );
	}
}
