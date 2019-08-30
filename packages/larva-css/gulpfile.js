const gulp = require( 'gulp' );
const path = require( 'path' );
const sass = require( 'gulp-sass' );
const concat = require( 'gulp-concat' );
const gulpStylelint = require( 'gulp-stylelint' );
const clean = require( 'gulp-clean' );

const sassOpts = {
	includePaths: [
		path.resolve( './node_modules' ),
		path.resolve( './src' )
	]
};

const css_dest = './build/css/';

const css_files = {
	generic_inline: {
		css: {
			orig: ['./src/**/*.common.inline.scss'],
			lrv_src: lrvCssDir + 'generic.common.inline.css',
			file: 'generic.common.inline.css'
		}
	},
	algorithms_async: {
		css: {
			orig: ['./src/**/a-*.common.async.scss'],
			lrv_src: lrvCssDir + 'algorithms.common.async.css',
			file: 'algorithms.common.async.css'
		}
	},
	algorithms_inline: {
		css: {
			orig: ['./src/**/a-*.common.inline.scss'],
			lrv_src: lrvCssDir + 'algorithms.common.inline.css',
			file: 'algorithms.common.inline.css'
		}
	},
	utilities_async: {
		css: {
			orig: ['./src/**/u-*.common.async.scss'],
			lrv_src: lrvCssDir + 'utilities.common.async.css',
			file: 'utilities.common.async.css'
		}
	},
	utilities_inline: {
		css: {
			orig: ['./src/**/u-*.common.inline.scss'],
			lrv_src: lrvCssDir + 'utilities.common.inline.css',
			file: 'utilities.common.inline.css'
		}
	},
	js_inline: {
		css: {
			orig: ['./src/**/js-*.common.inline.scss'],
			lrv_src: lrvCssDir + 'js.common.inline.css',
			file: 'js.common.inline.css'
		}
	}
};

function clean_css() {
	return gulp.src( css_dest, { read: false } ).pipe( clean() );
}

function styles( done ) {
	clean_css();
	Object.keys( css_files ).forEach( val => {
	
		gulp.src( css_files[val].css.orig ).
				pipe( gulpStylelint( {
					failAfterError: false,
					reporters: [
						{
							formatter: 'string',
							console: true
						}]
				} ) ).
				pipe( sass( sassOpts ).on( 'error', sass.logError ) ).
				pipe( postcss( [cssnano()] ) ).
				pipe( concat( css_files[val].css.file ) ).
				pipe( gap.prependFile( css_files[val].css.lrv_src ) ).
				pipe( postcss( [cssnano()] ) ).
				pipe( gulp.dest( css_dest ) );

	} );
	done();
}

exports.watch = function() {
	gulp.watch( './src/**/*.scss', styles );
};

exports.default = styles;