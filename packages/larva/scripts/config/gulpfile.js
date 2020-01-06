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

// Build async and inline file references for each chunk, then combine.
const inlineChunks = chunks.map( chunk => chunk + '.inline.scss' );
const asyncChunks = chunks.map( chunk => chunk + '.async.scss' );
const allChunks = [ ... inlineChunks, ... asyncChunks ];

// Prepend full file path to each chunk.
const fullChunks = allChunks.map( chunk => './entries/' + chunk );

// Do we need this?
function clean_css() {
	return gulp.src( cssDest, { read: false } ).pipe( clean() );
}

function stylelint( file ) {
	gulp.src( file ).pipe( gulpStylelint( stylelintOpts ) );
}

function buildScss( done ) {
	gulp.src( fullChunks )
		.pipe( gulpStylelint( stylelintOpts ) )
		.pipe( sass( sassOpts ).on( 'error', sass.logError ) )
		.pipe( gulp.dest( cssDest ) );
		done();
}

exports['dev-scss'] = function() {

	// Lint changed file.
	gulp.watch( './src/**/*.scss', buildScss ).on( 'change', function( file ) {
		stylelint( file );
	} );
};

// Combine SVG sprites into one.
exports.sprite = function( done ) {
	gulp.src( './build/**/*.defs.svg' )
		.pipe( concat( 'svg-sprite.svg' ) )
		.pipe( gulp.dest( './build/svg/' ) );
	done();
};

// Quickly build SCSS.
exports['build-scss'] = buildScss;

// Run all commands associated with SCSS.
exports['prod-scss'] = function( done ) {
	stylelint( './src/**/*.scss' );
	buildScss( () => {
		gulp.src( './build/**/*.css' ).pipe( postcss( [cssnano()] ) );
		done();
	});
	
};