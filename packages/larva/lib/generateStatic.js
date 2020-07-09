const path = require( 'path' );
const mkdirp = require( 'mkdirp' );
const fs = require( 'fs-extra' );
const chalk = require( 'chalk' );
const axios = require( 'axios' );

const copySyncHelper = require( './utils/copySyncHelper' );

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

	// Copy assets from assets/build and assets/public
	// to the static site build directory.
	console.log( '\nCopying assets...\n')

	// assets/public dir contains fonts and non-built things.
	const publicAssetsSrc = path.join( buildPath, `../../../public` );
	const publicAssetsDest = path.join( buildPath, '../assets/public' );

	// Could do a globby here, but this won't change much so it might be okay.
	const builtAssets = [
		'js',
		'css',
		'images',
		'svg'
	];

	builtAssets.forEach( item => {
		const src  = path.join( buildPath, `../../${item}` );
		const dest = path.join( buildPath, `../assets/build/${item}` );

		copySyncHelper( src, dest );

	});

	copySyncHelper( publicAssetsSrc, publicAssetsDest );

	// Build the site.
	// Cycle through the list of routes and write the response
	// to files.
	console.log( '\nBuilding site...\n');

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

			} ).catch( ( e ) => {

				if ( 'ECONNREFUSED' === e.code ) {
					process.exitCode = 1;
				} else {
					mkdirp.sync( dir );
					fs.writeFileSync( `${dir}/index.html`, e.message );

					console.log( chalk.yellow( `Error writing ${route}: ${e.message}.` ) );
				}

			});

		} );

		axios.all( promises ).then( () => {

			if ( errors.length > 0 ) {
				console.log( errors );
			}

			done( chalk.green( `\nSite built to build/html/${path.basename( buildPath )}. Check output for issues.\n` ) );

		} ).catch( ( e ) =>  {

			done( chalk.bold.red( e ) );

		});

	} catch ( e ) {
		console.error( e );
	}

}
