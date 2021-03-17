const gulp = require( 'gulp' );
const gulpPostCss = require( 'gulp-postcss' );
const gulpRename = require( 'gulp-rename' );
const cssnano = require( 'cssnano' );
const path = require( 'path' );
const postCss = require( 'postcss' );
const sass = require( 'gulp-sass' );

const gulpClean = require( 'gulp-clean' );
const gulpStylelint = require( 'gulp-stylelint' );
const globImporter = require( 'node-sass-glob-importer' );

const stylelintConfig = require( './stylelint.config' );
const { mkdirp } = require('fs-extra');


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

/**
 * PostCSS plugin that does nothing, for conditionally minifying CSS.
 *
 * @param {Object} style  PostCSS Root object for current CSS.
 * @param {Object} result PostCSS Result object containing transformed CSS.
 * @return {Result} PostCSS Result object.
 */
const postCssNoop = ( style, result ) => {
	result.root = postCss.parse( style );
	return result;
};

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
	const root = postCss.parse( style );

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
 * @param {Function} done  Post-build callback.
 * @param {boolean} minify Run post CSS and minify output.
 */
const buildScss = ( done, minify = false ) => {
	const postCssPlugins = [];

	if ( minify ) {
		postCssPlugins.push( cssnano() );
	} else {
		postCssPlugins.push( postCssNoop );
	}

	gulp.src( './entries/*.scss' )
		.pipe( gulpStylelint( stylelintOpts ) )
		.pipe( sass( sassOpts ).on( 'error', sass.logError ) )
		.pipe( gulpPostCss( postCssPlugins ) )
		.pipe( gulp.dest( cssDest ) )
		.pipe( gulpPostCss( [ declareImportanceForAll ] ) )
		.pipe( gulpRename( { suffix: '-important' } ) )
		.pipe( gulp.dest( cssDest ) );

	done();
};

const clean = ( done ) => {
	gulp.src( cssDest , { read: false } )
		.pipe( gulpClean() );

	mkdirp( cssDest );
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
