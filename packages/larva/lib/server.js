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

const getAppConfiguration = require('./utils/getAppConfiguration' );
const getPatternPathsToLoad = require( './utils/getPatternPathsToLoad' );
const getPatternData = require( './utils/getPatternData' );
const getSubDirectoryNames = require( './utils/getSubDirectoryNames' );

const app = express();

const patternConfig = getAppConfiguration( 'patterns', true );
const brandConfig = getAppConfiguration( 'brand' );
const twigPaths = getPatternPathsToLoad( patternConfig );

let loader = new TwingLoaderFilesystem( twigPaths );

// Add markdown filter
const markdownFilter = new TwingFilter( 'markdown', ( string ) => {
	if ( string ) {
		return Promise.resolve( marked( string ) );
	} else {
		const noDocsMessage = '**This needs docs!** <br>Create a README.md in the pattern\'s directory and add details about using this pattern in markdown.';

		return Promise.resolve( marked( noDocsMessage ) );
	}
});

const kebabify = ( name ) => {
	let kebabCase = [];

	// TODO: find a more concise way of turning a string into an iterable
	for (let i = 0; i < name.length; i++) {
		let letter = name[i];
		kebabCase[i] = letter;
	}

	return kebabCase.reduce( ( a, b ) => {
		if ( '_' === b ) {
			return a.toLowerCase() + '-';
		}
		return a.toLowerCase() + b.toLowerCase();
	});
};

// TODO: Could be an array/iterator if the namespace can be extracted from the key, the larva.config API could
// change to `patterns: { larva: /larva/path/here/, project: /project/path/here }`
loader.addPath( patternConfig.larvaPatternsDir, 'larva' );

if( patternConfig.projectPatternsDir ) {
	loader.addPath( patternConfig.projectPatternsDir, 'project' );
}

let twing = new TwingEnvironment( loader, { debug: true } );

twing.addFilter( markdownFilter );

let patterns = {
	larva: {},
	project: {}
};

app.use( '/packages/' , express.static( path.join( patternConfig.larvaPatternsDir, '../' ) ) );

// NOTE: When the static site builder script is merged, this manual pattern
// collection for the nav will come from an object based on the directory structure

if( patternConfig.larvaPatternsDir ) {
	patterns.larva.modules = getSubDirectoryNames( path.join( patternConfig.larvaPatternsDir + '/modules' ) );
	patterns.larva.objects = getSubDirectoryNames( path.join( patternConfig.larvaPatternsDir + '/objects' ) );
	patterns.larva.components = getSubDirectoryNames( path.join( patternConfig.larvaPatternsDir + '/components' ) );
	patterns.larva.tests = getSubDirectoryNames( path.join( patternConfig.larvaPatternsDir + '/__tests__' ) );
}

if( patternConfig.projectPatternsDir ) {
	patterns.project.modules = getSubDirectoryNames( path.join( patternConfig.projectPatternsDir + '/modules' ) );
	patterns.project.objects = getSubDirectoryNames( path.join( patternConfig.projectPatternsDir + '/objects' ) );
	patterns.project.components = getSubDirectoryNames( path.join( patternConfig.projectPatternsDir + '/components' ) );
	patterns.project.oneOffs = getSubDirectoryNames( path.join( patternConfig.projectPatternsDir + '/one-offs' ) );
	patterns.project.tests = getSubDirectoryNames( path.join( patternConfig.projectPatternsDir + '/__tests__' ) );
}

console.log(patternConfig.projectPatternsDir);

app.use( '/assets' , express.static( path.join( patternConfig.projectPatternsDir, '../../' ) ) );

app.get( '/', function (req, res) {
	req.params[ 'source' ] = 'larva';
	req.params[ 'pattern_nav' ] = patterns;
	req.params[ 'name' ] = 'Welcome';
	twing.render( 'index.html', req.params ).then( output => res.end( output ) );
});

app.get( '/:source?/css', function (req, res) {

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
	const cssPath = path.join( process.cwd(), './node_modules/@penskemediacorp/larva-css/build/' );
	const sassPath = path.join( process.cwd(), './node_modules/@penskemediacorp/larva-css/src/' );

	const hasTokens = [
		'u-background-color',
		'u-border-color',
		'u-color',
		'u-font-family',
		'u-letter-spacing',
		'u-margin',
		'u-padding',
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

	const cssFiles = globby.sync( cssPath + '/**/*.css', {
		expandDirectories: true
	});

	const cssString = ( () => {
		let string;

		// Could use a different JS array helper here but idk
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

	req.params[ 'source' ] = 'larva';
	req.params[ 'pattern_nav' ] = patterns;

	twing.render( 'css.html', req.params ).then( output => res.end( output ) );
});

app.get( '/:source/:type/:name/:variant?', function (req, res) {

	let patternsPath;

	if ( 'larva' === req.params.source ) {
		patternsPath = patternConfig.larvaPatternsDir;
	} else if ( 'project' === req.params.source ) {
		patternsPath = patternConfig.projectPatternsDir;
	} else if ( 'assets' === req.params.source ) {
		return res.end();
	}


	// Support query parameters for conditionally loading stylesheets and scripts
	req.params[ 'query' ] = req.query;
	req.params[ 'pattern_nav' ] = patterns;
	req.params[ 'data' ] = undefined !== patternsPath ? getPatternData( patternsPath, req.params ) : null;
	req.params[ 'brand' ] = brandConfig;

	if ( 'algorithms' !== req.params.type ) {
		req.params[ 'json_pretty' ] = JSON.stringify( req.params[ 'data' ], null, '\t' );
	}

	twing.render( 'pattern.html', req.params ).then( ( output ) => {
		res.end( output );
	}).catch( e => {
		const errorMessage = `Cannot render template! \n\n${e}`;

		console.log( e );

		res.end( errorMessage );
	} );
});

app.get( '/style-guide', function (req, res ) {

	const brand = req.query.tokens ? req.query.tokens : brandConfig;

	const fontData = (() => {
		try {
			return require( path.join( __dirname, `../../../build/tokens/${brand}.typography.json` ) );
		} catch (e) {
			return null;
		}
	})();

	const tokensData = require( path.join( __dirname, `../../../build/tokens/${brand}.json` ) );

	const fontStyles = ( () => {
		if( ! fontData ) return;

		return Object.keys( fontData ).map( variant => {
			const key = kebabify( variant );
			return {
				class: `a-font-${key}`,
				sizes: fontData[variant]
			};
		});
	} )();

	const colorTokens = Object.keys( tokensData ).filter( item => item.includes( 'COLOR' ) );
	const colorNames = colorTokens.map( token => kebabify( token ) );

	const colorsByProperty = colorNames.reduce( (acc, curr) => {
		Object.keys( acc ).forEach( key => {
			if ( curr.startsWith( key ) ) {
				acc[key].push( 'lrv-u-' + curr );
			}
		});

		return acc;
	}, {
		color: [],
		'background-color': [],
		'border-color': []
	});

	req.params[ 'name' ] = `${brand} Style Guide`;
	req.params[ 'font_styles' ] = fontStyles;
	req.params[ 'colors' ] = colorsByProperty;
	req.params[ 'brand' ] = brand;
	req.params[ 'pattern_nav' ] = patterns;

	twing.render( 'style-guide/index.html', req.params ).then( output => res.end( output ) ).catch( e => {
		const errorMessage = `Cannot render template! \n\n${e}`;

		console.log( e );

		res.end( errorMessage );
	} );;

});

module.exports = app;