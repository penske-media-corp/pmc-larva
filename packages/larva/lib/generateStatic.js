const path = require( 'path' );
const mkdirp = require( 'mkdirp' );
const axios = require( 'axios' );
// const http = require( 'http' );
const fs = require( 'fs' );

module.exports = function generateStatic( routesArr, buildPath, done, basePath = 'http://localhost:3001/larva' ) {

	try {

		const promises = routesArr.map( ( route ) => {

			const dir = path.join( buildPath, route );
			const url = `${basePath}/${route}`;

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
