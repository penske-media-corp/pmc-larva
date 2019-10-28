const { TwingEnvironment, TwingLoaderFilesystem, TwingLoaderArray, TwingLoaderChain, TwingFilter } = require('twing');
const path = require( 'path' );
const express = require('express');
const marked = require( 'marked' );

const app = express();
const port = process.env.NODE_PORT || 3000;

const getAppConfiguration = require( './utils/getAppConfiguration' );
const getPatternPathsToLoad = require( './utils/getPatternPathsToLoad' );
const getPatternData = require( './utils/getPatternData' );
const getSubDirectoryNames = require( './utils/getSubDirectoryNames' );

const appConfiguration = getAppConfiguration( 'patterns' );
const twigPaths = getPatternPathsToLoad( appConfiguration );

let loader = new TwingLoaderFilesystem( twigPaths );

// Add markdown filter
const markdownFilter = new TwingFilter( 'markdown', ( string ) => {
	if ( string ) {
		return marked( string );
	}
});

// TODO: Could be an array/iterator if the namespace can be extracted from the key, the larva.config API could
// change to `patterns: { larva: /larva/path/here/, project: /project/path/here }`
loader.addPath( appConfiguration.larvaPatternsDir, 'larva' );

if( appConfiguration.projectPatternsDir ) {
	loader.addPath( appConfiguration.projectPatternsDir, 'project' );
}

let twing = new TwingEnvironment( loader, { debug: true } );

twing.addFilter( markdownFilter );

let patterns = {
	larva: {},
	project: {}
};

app.use( '/packages/' , express.static( path.join( appConfiguration.larvaPatternsDir, '../' ) ) );
app.use( '/static' , express.static( path.join( appConfiguration.larvaPatternsDir, '../static' ) ) );

if( appConfiguration.larvaPatternsDir ) {
	patterns.larva.modules = getSubDirectoryNames( path.join( appConfiguration.larvaPatternsDir + '/modules' ) );
	patterns.larva.objects = getSubDirectoryNames( path.join( appConfiguration.larvaPatternsDir + '/objects' ) );
	patterns.larva.components = getSubDirectoryNames( path.join( appConfiguration.larvaPatternsDir + '/components' ) );
	patterns.larva.algorithms = getSubDirectoryNames( path.join( appConfiguration.larvaPatternsDir + '/algorithms' ) );
}

if( appConfiguration.projectPatternsDir ) {
	app.use( '/assets' , express.static( path.join( appConfiguration.projectPatternsDir, '../../' ) ) );
	patterns.project.modules = getSubDirectoryNames( path.join( appConfiguration.projectPatternsDir + '/modules' ) );
	patterns.project.objects = getSubDirectoryNames( path.join( appConfiguration.projectPatternsDir + '/objects' ) );
	patterns.project.components = getSubDirectoryNames( path.join( appConfiguration.projectPatternsDir + '/components' ) );
	patterns.larva.algorithms = getSubDirectoryNames( path.join( appConfiguration.larvaPatternsDir + '/algorithms' ) );
}

app.get( '/', function (req, res) {
	req.params[ 'source' ] = 'larva';
	req.params[ 'pattern_nav' ] = patterns;
	req.params[ 'name' ] = 'Welcome';
	res.end( twing.render( 'index.html', req.params ) );
});

app.get( '/:source/:type/:name/:variant?', function (req, res) {
	let patternsPath = 'larva' === req.params.source ? appConfiguration.larvaPatternsDir : appConfiguration.projectPatternsDir;

	req.params[ 'query' ] = req.query;
	req.params[ 'data' ] = getPatternData( patternsPath, req.params );

	if ( 'algorithms' !== req.params.type ) {
		req.params[ 'json_pretty' ] = JSON.stringify( req.params[ 'data' ], null, '\t' );
	}

	req.params[ 'pattern_nav' ] = patterns;
	res.end( twing.render( 'pattern.html', req.params ) );
});

app.listen(port, () => {
	console.log( 'Larva server is listening on port ' + port );
});
