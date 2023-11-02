/**
 * Things that are different from AMH:
 * - path resolved to src/ not src/scss
 * - no need to concat
 * - remove lrvCssDir
 *
 * Potential improvement: make the config object dynamic, determine the
 * dest file according to the changed file.
 */

const gulp = require( 'gulp' );
const path = require( 'path' );
const sass = require( 'gulp-sass' )( require( 'sass' ) );
const concat = require( 'gulp-concat' );
const gulpStylelint = require( 'gulp-stylelint' );
const del = require( 'del' );
const { mkdirpSync, existsSync } = require( 'fs-extra' );

const { generateAFontScss } = require( './lib/generators' );

sass.compiler = require( 'sass' );

const sassOpts = {
	includePaths: [ path.resolve( './node_modules' ), path.resolve( './src' ) ],
	outputStyle: 'compressed',
};

const cssDest = './build/css/';
const scssDest = './src/_generated';

const cssFiles = {
	generic_inline: {
		css: {
			orig: [ './src/01-generic/*.common.inline.scss' ],
			file: 'generic.common.inline.css',
		},
	},
	algorithms_async: {
		css: {
			orig: [ './src/**/a-*.common.async.scss' ],
			file: 'algorithms.common.async.css',
		},
	},
	algorithms_inline: {
		css: {
			orig: [ './src/**/a-*.common.inline.scss' ],
			file: 'algorithms.common.inline.css',
		},
	},
	utilities_async: {
		css: {
			orig: [ './src/**/u-*.common.async.scss' ],
			file: 'utilities.common.async.css',
		},
	},
	utilities_inline: {
		css: {
			orig: [ './src/**/u-*.common.inline.scss' ],
			file: 'utilities.common.inline.css',
		},
	},
	js_async: {
		css: {
			orig: [ './src/**/js-*.common.async.scss' ],
			file: 'js.common.async.css',
		},
	},
	js_inline: {
		css: {
			orig: [ './src/**/js-*.common.inline.scss' ],
			file: 'js.common.inline.css',
		},
	},
};

const generateScssFromTokens = ( done ) => {
	mkdirpSync( scssDest );
	generateAFontScss( scssDest );
	done();
};

const clean = ( done ) => {
	const dirs = [ scssDest, cssDest ];

	dirs.forEach( ( dir ) => {
		if ( existsSync( dir ) ) {
			del.sync( [ dir ] );
		}
	} );

	done();
};

const styles = ( done ) => {
	mkdirpSync( cssDest );

	Object.keys( cssFiles ).forEach( ( val ) => {
		gulp.src( cssFiles[ val ].css.orig )
			.pipe(
				gulpStylelint( {
					failAfterError: false,
					reporters: [
						{
							formatter: 'string',
							console: true,
						},
					],
				} )
			)
			.pipe( sass( sassOpts ).on( 'error', sass.logError ) )
			.pipe( concat( cssFiles[ val ].css.file ) )
			.pipe( gulp.dest( cssDest ) );
	} );
	done();
};

exports.watch = function () {
	gulp.watch( './src/**/*.scss', styles );
};

exports.default = gulp.series( clean, generateScssFromTokens, styles );
