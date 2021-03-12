const gulp = require( 'gulp' );
const gulpPostcss = require( 'gulp-postcss' );
const gulpRename = require( 'gulp-rename' );
const through2 = require( 'through2' );
const cssnano = require( 'cssnano' );
const path = require( 'path' );
const postcss = require( 'postcss' );
const sass = require( 'gulp-sass' );

const gulpClean = require( 'gulp-clean' );
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

	process.nextTick( pass.end.bind(pass) );
	return pass;
}

/**
 * Add `!important` declarations to all rules, for use with older themes that
 * have high specificity.
 *
 * Adapted from the `postcss-importantly` npm package, updated to work with
 * latest version of PostCSS.
 *
 * @param {Object} style  PostCSS Root object for current CSS.
 * @param {Object} result PostCSS Result object containing transformed CSS.
 * @return {Result} PostCSS Result object.
 */
const declareImportanceForAll = ( style, result ) => {
	const root = postcss.parse( style );

	root.walkRules( ( rule ) => {
		if ( 'atrule' === rule.parent.type && 'media' !== rule.parent.name ) {
			return;
		}

		return rule.each( ( decl ) => {
			if ( ! decl.value || decl.important ) {
				return;
			}

			decl.value += '!important';

			return decl;
		} );
	} );

	result.root = root;

	return result;
};

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

	// This is redundant, but was having issue with conditionally
	// minifying within the same stream with
	// .pipe( minify ? postcss( [ cssnano() ] ) : emptyStream() )
	// In interest of time, use separate streams for now.

	if ( true === minify ) {
		gulp.src( './entries/*.scss' )
			.pipe( gulpStylelint( stylelintOpts ) )
			.pipe( sass( sassOpts ).on( 'error', sass.logError ) )
			.pipe( gulpPostcss( [ cssnano() ] ) )
			.pipe( gulp.dest( cssDest ) )
			.pipe( gulpPostcss( [ declareImportanceForAll ] ) )
			.pipe( gulpRename( { suffix: '-important' } ) )
			.pipe( gulp.dest( cssDest ) );
	} else {
		gulp.src( './entries/*.scss' )
			.pipe( gulpStylelint( stylelintOpts ) )
			.pipe( sass( sassOpts ).on( 'error', sass.logError ) )
			.pipe( gulp.dest( cssDest ) )
			.pipe( gulpPostcss( [ declareImportanceForAll ] ) )
			.pipe( gulpRename( { suffix: '-important' } ) )
			.pipe( gulp.dest( cssDest ) );
	}

	done();
};

const clean = ( done ) => {
	gulp.src( cssDest , { read: false } )
		.pipe( gulpClean() );
	done();
};

/**************
Tasks
***************/

// Watch the changed file, compile and lint when changed.
exports['dev-scss'] = () => {
	gulp.watch( [ './src/**/*.scss', './entries/*.scss' ], buildScss ).on( 'change', function( file ) {
		stylelint( file );
	} );
};

// Quickly build SCSS.
exports['build-scss'] = ( done ) => {
	buildScss( done );
};

// Run PostCSS on CSS.
exports['prod-scss'] = ( done ) => {
	clean( () => {
		stylelint( './src/**/*.scss' );
		buildScss( done, true );
	});
};
