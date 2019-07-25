const { TwingEnvironment, TwingLoaderFilesystem, TwingLoaderArray, TwingLoaderChain } = require('twing');
const path = require( 'path' );
const fs = require( 'fs' );
const express = require('express');
const app = express();
const port = process.env.NODE_PORT || 3000;
const { patternPathsToLoad, getPatternsIndexPath, isCoreTheme, getPatternSchema, getPatternType } = require( './utils/pattern-functions' );
const appConfiguration = require( './utils/getAppConfiguration' )( 'patterns' );

const twigPaths = patternPathsToLoad( appConfiguration );

let loader = new TwingLoaderFilesystem( twigPaths );

if ( ! isCoreTheme( appConfiguration) ) {
	loader.addPath( path.resolve( appConfiguration.themeDir, './04-components' ), 'components' );
	loader.addPath( path.resolve( getApp.themeDir, './05-objects' ), 'objects' );
	loader.addPath( path.resolve( appConfiguration.themeDir, './08-modules' ), 'modules' );
}

loader.addPath( appConfiguration.larvaDir, 'larva' );

let twing = new TwingEnvironment( loader, { debug: true } );

app.use( express.static('build' ) );
app.use( '/static' , express.static( '/Users/laraschenck/Sites/pmc/pmc-larva/packages/larva/static' ) );

app.get( '/', function (req, res) {
	res.end( twing.render( 'index.html', { name: 'Welcome' } ) );
});

app.get( '/:type/:name', function (req, res) {
	let patternsPath = getPatternsIndexPath( appConfiguration );
	req.params[ 'data' ] = getPatternSchema( patternsPath, req.params );
	req.params[ 'json_pretty' ] = JSON.stringify( req.params[ 'data' ], null, '\t' );
	res.end( twing.render( 'pattern.html', req.params ) );
})

app.listen(port, () => {
	console.log( 'Node.js Express server listening on port ' + port );
});
