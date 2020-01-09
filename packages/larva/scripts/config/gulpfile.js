const gulp = require( 'gulp' );
const postcss = require( 'gulp-postcss' );
const through2 = require( 'through2' );
const cssnano = require( 'cssnano' );
const path = require( 'path' );
const sass = require( 'gulp-sass' );
const gulpStylelint = require( 'gulp-stylelint' );
const globImporter = require( 'node-sass-glob-importer' );

const stylelintConfig = require( './stylelint.config' );


/**************
Config
**************/

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
		} ]
};

const cssDest = './build/css/';



/**************
Functions
**************/

const stylelint = ( file ) => {
	gulp.src( file ).pipe( gulpStylelint( stylelintOpts ) );
};

// We need an empty stream for the else condition when 
// minifying CSS below. Reference: https://stackoverflow.com/a/30000562
const emptyStream = () => {
	var pass = through2.obj();

	process.nextTick(pass.end.bind(pass));
	return pass;
}

/**
 * Build CSS
 * 
 * Used for both prod and dev commands.
 * 
 * Consider updating the name 'minify' to 'post' if/when
 * more Post CSS functionality is added.
 * 
 * @param {function} done 
 * @param {boolean} minify Run post CSS and minify output.
 */
const buildScss = ( done, minify = false ) => {
	gulp.src( './entries/*.scss' )
		.pipe( gulpStylelint( stylelintOpts ) )
		.pipe( sass( sassOpts ).on( 'error', sass.logError ) )
		.pipe( minify ? postcss( [ cssnano() ] ) : emptyStream() )
		.pipe( gulp.dest( cssDest ) );
	done();
};


/**************
Tasks
***************/

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
	buildScss( done, true );
};
