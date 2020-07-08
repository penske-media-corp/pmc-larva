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

	const siteBuilder = () => {
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
	};

	// Could do a globby here, but this won't change much so it might be okay.
	const buildPathsToCopy = [
		'js',
		'css',
		'images',
		'svg'
	];

	buildPathsToCopy.forEach( item => {
		const dest = path.join( buildPath, `./assets/build/${item}` );
		const src  = path.join( buildPath, `../${item}` );
		
		fs.copy(
			src,
			dest,
			( e ) => {
	
				if ( e ) {
					return console.error( e );
				}
	
				console.log( `Copied assets/build/${item}` );
			}
		);
	});

	fs.copy(
		path.join( buildPath, `../../public` ),
		path.join( buildPath, './assets/public' ),
		( e ) => {

			if ( e ) {
				return console.error( e );
			}

			console.log( `Copied assets/public` );
			siteBuilder();
		}
	);
}
