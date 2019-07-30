const { TwingEnvironment, TwingLoaderFilesystem, TwingLoaderArray, TwingLoaderChain } = require('twing');
const path = require( 'path' );
const fs = require( 'fs' );
const express = require('express');
const app = express();
const port = process.env.NODE_PORT || 3000;
const { getAppConfiguration, patternPathsToLoad, getPatternsIndexPath, isCoreTheme, getPatternData, getPatternType } = require( './utils/utils' );

const appConfiguration = getAppConfiguration( 'patterns' );
const twigPaths = patternPathsToLoad( appConfiguration );

let loader = new TwingLoaderFilesystem( twigPaths );

if ( ! isCoreTheme( appConfiguration) ) {
	loader.addPath( path.resolve( appConfiguration.themePatternsDir, './04-components' ), 'components' );
	loader.addPath( path.resolve( appConfiguration.themePatternsDir, './05-objects' ), 'objects' );
	loader.addPath( path.resolve( appConfiguration.themePatternsDir, './08-modules' ), 'modules' );
}

loader.addPath( appConfiguration.larvaPatternsDir, 'larva' );

let twing = new TwingEnvironment( loader, { debug: true } );

app.use( express.static('build' ) );
app.use( '/static' , express.static( path.join( __dirname, '../static' ) ) );

app.get( '/', function (req, res) {
	res.end( twing.render( 'index.html', { name: 'Welcome' } ) );
});

app.get( '/:type/:name', function (req, res) {
	let patternsPath = getPatternsIndexPath( appConfiguration );
	req.params[ 'data' ] = getPatternData( patternsPath, req.params );
	req.params[ 'json_pretty' ] = JSON.stringify( req.params[ 'data' ], null, '\t' );
	res.end( twing.render( 'pattern.html', req.params ) );
})

app.listen(port, () => {
	console.log( 'Node.js Express server listening on port ' + port );
});
