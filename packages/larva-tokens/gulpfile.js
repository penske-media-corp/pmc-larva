const gulp = require('gulp');
const theo = require('gulp-theo')
const del = require( 'del' );

const { kebabify } = require( './lib/utils' );
const { mkdirpSync, existsSync } = require('fs-extra');

const formats = [ 'map.scss', 'custom-properties.css', 'json', 'raw.json' ];

/**
 * Prepare destination directory.
 *
 * @param {Function} done Function called upon completion.
 */
 const clean = ( done ) => {
	del.sync( [ 'build', 'style-guides' ] );
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

exports.default = gulp.series( clean, build );