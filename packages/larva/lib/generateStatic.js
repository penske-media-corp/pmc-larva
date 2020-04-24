const path = require( 'path' );
const mkdirp = require( 'mkdirp' );
const axios = require( 'axios' );
// const http = require( 'http' );
const fs = require( 'fs' );

function generateStatic( routesArr, buildPath, done, basePath = 'http://localhost:3001/larva' ) {

	// const promises = routesArr.map( ( route ) => {
		const route = routesArr[0];

		const dir = path.join( buildPath, route );

		// TODO: handle async
		const url = `${basePath}/${route}`;

		axios.get( url ).then( ( response ) => {
			mkdirp.sync( dir );
			fs.writeFileSync( `${dir}/index.html`, response.data );
			done();
		} ).catch( ( error ) => {
			return {
				success: false
			};
		});

	// } );

	// return Promise.all( promises ).then( ( values ) => {
	// 	console.log( values );
	// } );

}

module.exports = generateStatic;