const gulp = require( 'gulp' );
const postcss = require( 'gulp-postcss' );
const cssnano = require( 'cssnano' );
const path = require( 'path' );
const sass = require( 'gulp-sass' );
const concat = require( 'gulp-concat' );
const gulpStylelint = require( 'gulp-stylelint' );
const clean = require( 'gulp-clean' );
const globImporter = require( 'node-sass-glob-importer' );

const getConfig = require( '../../').getConfig;
const chunks = getConfig( 'chunks' );
const stylelintConfigPath = path.join( __dirname, './stylelint.config.js' );
console.log( stylelintConfigPath );

const sassOpts = {
	includePaths: [
		path.resolve( './node_modules' ),
		path.resolve( './src/scss' )
	],
	importer: globImporter()
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
	gulp.src( file ).pipe( gulpStylelint( {
		failAfterError: false,
		config: stylelintConfigPath,
		reporters: [
			{
				formatter: 'string',
				console: true
			}]
	} ) );
}

function entries( done ) {
	gulp.src( fullChunks ).
		pipe( gulpStylelint( {
			failAfterError: false,
			config: stylelintConfigPath,
			reporters: [
				{
					formatter: 'string',
					console: true
				}]
		} ) ).
		pipe( sass( sassOpts ).on( 'error', sass.logError ) ).
		pipe( postcss( [cssnano()] ) ).
		pipe( gulp.dest( cssDest ) );
		done();
}

exports['dev-scss'] = function() {

	// Lint changed file.
	gulp.watch( './src/**/*.scss', entries ).on( 'change', function( file ) {
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

exports['prod-scss'] = entries;
