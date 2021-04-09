const gulp = require('gulp');
const theo = require('gulp-theo')
const del = require( 'del' );

const { kebabify } = require( './lib/utils' );
const { generateFontTokens } = require( './lib/generators');
const { existsSync, mkdirpSync } = require('fs-extra');
const formats = [ 'map.scss', 'custom-properties.css', 'json', 'raw.json' ];

/**
 * Prepare destination directory.
 *
 * @param {Function} done Function called upon completion.
 */
 const clean = ( done ) => {

	const dirs = [ 'build', 'style-guides' ];

	dirs.forEach( dir => {
		if ( existsSync( dir ) ) {
			del.sync( [ dir ] );
		}
	});

	done();
};

const basicTokenBuild = (
	format,
	done,
	dest = 'build'
) => {
	gulp.src( [
		'src/brands/*.json',
	] )
		.pipe(theo({
			transform: { type: 'web' },
			format: {
				type: format,
			}
		}))
		.pipe(gulp.dest( dest ));

		done();
};

const generateTypography = ( done ) => {
	generateFontTokens();

	done();
};

const build = ( done ) => {

	formats.forEach( format => {
		basicTokenBuild( format, () => {
			console.log( `Built ${format} format.`);
		} )
	});

	gulp.src('src/brands/*.json')
		.pipe(theo({
			transform: { type: 'web' },
			format: {
				type: 'html',
				options: {
					transformPropName: ( name ) => kebabify( name )
				}
			}
		}))
		.pipe(gulp.dest('style-guides'));

	done();
};

exports.default = gulp.series( clean, generateTypography, build );