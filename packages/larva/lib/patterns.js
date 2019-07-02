const { TwingEnvironment, TwingLoaderFilesystem, TwingLoaderArray, TwingLoaderChain } = require('twing');
const path = require( 'path' );
const fs = require( 'fs' );
const app = require('express')();
const port = process.env.NODE_PORT || 3000;

// Could do something like this to trim down pathing:
// function larva( patternName ) {
// 	let patternDir = 'modules';

// 	if ( 'o-' === patternName.substring( 0, 2 ) ) {
// 		patternDir = 'objects';
// 	}

// 	if ( 'c-' === patternName.substring( 0, 2 ) ) {
// 		patternDir = 'components';
// 	}

// 	return fs.readFileSync( path.resolve( __dirname, '../src/' + patternDir + '/' + patternName + '/' + patternName +'.twig'), 'utf8' );
// }

// let loader1 = new TwingLoaderArray({
// 	'@larva/o-tease-list.twig': larva( 'o-tease-list' ),
// 	'@larva/o-tease.twig': larva( 'o-tease' ),
// 	'@larva/c-title.twig': larva( 'c-title' ),
// 	'@larva/c-figure.twig': larva( 'c-figure' ),
// });

let loader = new TwingLoaderFilesystem( path.resolve( __dirname, '../node_modules/' ) );

loader.addPath( path.resolve( __dirname, '../src/' ), 'larva');

let twing = new TwingEnvironment( loader );

app.get( '/', function (req, res) {
	res.end( twing.render( 'index.twig', { data: data, 'pattern': 'Welcome' } ) );
})

app.get( '/:type/:name', function (req, res) {

	let data = require( '../src/' + req.params.type + '/' + req.params.name +'/' + req.params.name + '-prototype' );
	req.params[ 'data' ] = data;
	res.end( twing.render( 'index.twig', req.params ) );
})

app.listen(port, () => {
	console.log('Node.js Express server listening on port '+port);
});
