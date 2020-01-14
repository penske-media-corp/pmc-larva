const path = require( 'path' );
const express = require('express');
const marked = require( 'marked' );
const fs = require( 'fs' );
const globby = require( 'globby' );

const { 
	TwingEnvironment,
	TwingLoaderFilesystem,
	TwingFilter
} = require('twing');

const getAppConfiguration = require( './utils/getAppConfiguration' );
const getPatternPathsToLoad = require( './utils/getPatternPathsToLoad' );
const getPatternData = require( './utils/getPatternData' );
const getSubDirectoryNames = require( './utils/getSubDirectoryNames' );

const app = express();
const port = process.env.NODE_PORT || 3000;

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
app.use( '/static/' , express.static( path.join( __dirname, '../build' ) ) );

if( appConfiguration.larvaPatternsDir ) {
	patterns.larva.modules = getSubDirectoryNames( path.join( appConfiguration.larvaPatternsDir + '/modules' ) );
	patterns.larva.objects = getSubDirectoryNames( path.join( appConfiguration.larvaPatternsDir + '/objects' ) );
	patterns.larva.components = getSubDirectoryNames( path.join( appConfiguration.larvaPatternsDir + '/components' ) );
}

if( appConfiguration.projectPatternsDir ) {
	app.use( '/assets' , express.static( path.join( appConfiguration.projectPatternsDir, '../../' ) ) );
	patterns.project.modules = getSubDirectoryNames( path.join( appConfiguration.projectPatternsDir + '/modules' ) );
	patterns.project.objects = getSubDirectoryNames( path.join( appConfiguration.projectPatternsDir + '/objects' ) );
	patterns.project.components = getSubDirectoryNames( path.join( appConfiguration.projectPatternsDir + '/components' ) );
	patterns.project.oneOffs = getSubDirectoryNames( path.join( appConfiguration.projectPatternsDir + '/one-offs' ) );
}

app.get( '/', function (req, res) {
	req.params[ 'source' ] = 'larva';
	req.params[ 'pattern_nav' ] = patterns;
	req.params[ 'name' ] = 'Welcome';
	res.end( twing.render( 'index.html', req.params ) );
});

app.get( '/css', function (req, res) {
	
	/**
	 * Generate Larva CSS Docs 
	 * 
	 * (Something similar can be done for project CSS unless we eradicate it)
	 * 
	 * 1. Get all CSS from the larva-css npm package. 
	 * 2. Use PostCSS to generate an abstract syntax tree. 
	 * 3. Generate a "spec" for the CSS by getting the base selector names
	 *    from Sass files in larva-scss
	 * 4. Walk the rules in the AST, checking the selectors against keys
	 *    in the spec object, and adding them to an array of
	 *    selectors for each property. Mark if it is in the hasTokens array.
	 * 5. Send that spec object to the template.
	 */

	const postcss = require( 'postcss' );
	const cssPath = path.join( __dirname, '../node_modules/@penskemediacorp/larva-css/build/css/' );
	const sassPath = path.join( __dirname, '../node_modules/@penskemediacorp/larva-css/src/' );

	const hasTokens = [
		'u-font-family',
		'u-color',
		'u-background-color',
		'u-line-height',
		'u-font-weight',
	];

	const baseNames = ( () => {

		let files = globby.sync( sassPath + '/**/*.scss', {
			expandDirectories: true
		} );

		return files.map( ( item ) => {
			let parts = item.split( '/' );
			let baseName = parts[ parts.length - 1 ].split( '.' );
			return baseName[0];
		} );
	} )();

	const cssFiles = globby.sync( cssPath + '*.css', {
		expandDirectories: true
	});

	const cssString = ( () => {
		let string;

		// Could use a fancy JS array function here but I can't remember then rn
		cssFiles.forEach( file => {
			string += fs.readFileSync( file );
		} ); 

		return string;
	 } ) ();

	const cssRoot = postcss.parse( cssString )

	const generatedSpec = ( () => {
		let obj = {};
	
		baseNames.forEach( ( item ) => {
			obj[item] = {
				selectors: [],
				tokens: false
			};
		}) 

		return obj;
	} )();

	cssRoot.walkRules( rule => {

		Object.keys( generatedSpec ).forEach( key => {
			let regex = new RegExp( '.*lrv-' + key + '.*', 'g' );

			if ( -1 !== hasTokens.indexOf( key ) ) {
				generatedSpec[key]['tokens'] = true;
			}

			if ( rule.selector.match( regex ) ) {
				generatedSpec[key]['selectors'].push( rule.selector );
			}

		});
		
	} );

	req.params[ 'name' ] = 'Larva CSS';
	req.params[ 'spec' ] = generatedSpec;
	res.end( twing.render( 'css.html', req.params ) );
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
