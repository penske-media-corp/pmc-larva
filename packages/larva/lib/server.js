const { TwingEnvironment, TwingLoaderFilesystem, TwingLoaderArray, TwingLoaderChain } = require('twing');
const path = require( 'path' );
const fs = require( 'fs' );
const express = require('express');
const app = express();
const port = process.env.NODE_PORT || 3000;

const getAppConfiguration = require( './utils/getAppConfiguration' );
const getPatternPathsToLoad = require( './utils/getPatternPathsToLoad' );
const getPatternData = require( './utils/getPatternData' );

const appConfiguration = getAppConfiguration( 'patterns' );
const twigPaths = getPatternPathsToLoad( appConfiguration );

let loader = new TwingLoaderFilesystem( twigPaths );

// TODO: Could be an array/iterator if the namespace can be extracted from the key, the larva.config API could
// change to `patterns: { larva: /larva/path/here/, project: /project/path/here }`
loader.addPath( appConfiguration.larvaPatternsDir, 'larva' );

if( appConfiguration.projectPatternsDir ) {
	loader.addPath( appConfiguration.projectPatternsDir, 'project' );
}

let twing = new TwingEnvironment( loader, { debug: true } );

app.use( express.static( 'build' ) );

// TODO: these will be updated to paths that point to a node module for use out of the mono-repo
app.use( '/svgs' , express.static( path.join( appConfiguration.larvaPatternsDir, '../larva-svg/build' ) ) );
app.use( '/js' , express.static( path.join( appConfiguration.larvaPatternsDir, '../larva-js/build' ) ) );
app.use( '/css' , express.static( path.join( appConfiguration.larvaPatternsDir, '../larva-css/build/css' ) ) );
app.use( '/patterns' , express.static( appConfiguration.larvaPatternsDir ) );
app.use( '/static' , express.static( path.join( __dirname, '../static' ) ) );

if( appConfiguration.projectPatternsDir ) {
	app.use( '/project' , express.static( path.join( appConfiguration.projectPatternsDir, '../../build/' ) ) );
}

app.get( '/', function (req, res) {
	res.end( twing.render( 'index.html', { name: 'Welcome' } ) );
});

app.get( '/:source/:type/:name', function (req, res) {
	let patternsPath = 'larva' === req.params.source ? appConfiguration.larvaPatternsDir : appConfiguration.projectPatternsDir;
	req.params[ 'data' ] = getPatternData( patternsPath, req.params );
	req.params[ 'json_pretty' ] = JSON.stringify( req.params[ 'data' ], null, '\t' );
	req.params[ 'sprite_data' ] = fs.readFileSync( path.join( __dirname, '../../larva-svg/build/defs/svg/sprite.defs.svg' ) );
	res.end( twing.render( 'pattern.html', req.params ) );
})

app.listen(port, () => {
	console.log( 'Node.js Express server listening on port ' + port );
});
