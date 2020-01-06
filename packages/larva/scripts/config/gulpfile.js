const gulp = require( 'gulp' );
const postcss = require( 'gulp-postcss' );
const cssnano = require( 'cssnano' );
const path = require( 'path' );
const sass = require( 'gulp-sass' );
const concat = require( 'gulp-concat' );
const gulpStylelint = require( 'gulp-stylelint' );
const clean = require( 'gulp-clean' );
const globImporter = require( 'node-sass-glob-importer' );

const stylelintConfig = require( './stylelint.config' );
const getConfig = require( '../../').getConfig;

/*
* Config
*/

// Chunks are added in project's larva.config.js
const chunks = getConfig( 'chunks' );

const sassOpts = {
	includePaths: [
		path.resolve( './node_modules' ),
		path.resolve( './src/scss' )
	],
	importer: globImporter()
};

const stylelintOpts = {
	failAfterError: false,
	config: stylelintConfig,
	reporters: [
		{
			formatter: 'string',
			console: true
		}]
};

const cssDest = './build/css/';


/*
* Functions
*/

// Build async and inline file references for each chunk, then combine.
const inlineChunks = chunks.map( chunk => chunk + '.inline.scss' );
const asyncChunks = chunks.map( chunk => chunk + '.async.scss' );
const allChunks = [ ... inlineChunks, ... asyncChunks ];
const fullChunks = allChunks.map( chunk => './entries/' + chunk );

const stylelint = ( file ) => {
	gulp.src( file ).pipe( gulpStylelint( stylelintOpts ) );
}

const buildScss = ( done ) => {
	gulp.src( fullChunks )
		.pipe( gulpStylelint( stylelintOpts ) )
		.pipe( sass( sassOpts ).on( 'error', sass.logError ) )
		.pipe( gulp.dest( cssDest ) );
		done();
}

const processCss = ( done ) => {
	gulp.src( cssDest + '*.css' )
		.pipe( postcss( [ cssnano() ] ) )
		.pipe( gulp.dest( cssDest ) );
	done();
}



/*
* Tasks
*/

// Watch the changed file, compile and lint when changed.
exports['dev-scss'] = () => {
	gulp.watch( './src/**/*.scss', buildScss ).on( 'change', function( file ) {
		stylelint( file );
	} );
};

// Quickly build SCSS.
exports['build-scss'] = buildScss;

// Run PostCSS on CSS.
exports['prod-scss'] = ( done ) => {
	stylelint( './src/**/*.scss' );
	buildScss( () => {
		processCss( done );
	});
};

// Combine SVG sprites into one.
exports.sprite = ( done ) => {
	gulp.src( './build/**/*.defs.svg' )
		.pipe( concat( 'svg-sprite.svg' ) )
		.pipe( gulp.dest( './build/svg/' ) );
	done();
};
