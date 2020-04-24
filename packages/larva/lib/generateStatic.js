const path = require( 'path' );
const mkdirp = require( 'mkdirp' );
const axios = require( 'axios' );
const http = require( 'http' );
const fs = require( 'fs' );

function generateStatic( routesArr, buildPath, basePath = 'http://localhost:3001/larva' ) {

	routesArr.map( ( route ) => {
		const dir = path.join( buildPath, route );

		mkdirp.sync( dir );

		// TODO: handle async
		const url = `${basePath}/${route}`;

		http.get( url, res => {
			let body = '';

			res.setEncoding( 'utf8' );

			res.on( 'data', data => {
				body += data;
			} );

			res.on( 'end', () => {
				fs.writeFileSync( `${dir}/index.html`, body );
			} );
		} );

	} );

}

module.exports = generateStatic;