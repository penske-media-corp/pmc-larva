const gulp = require('gulp')
const theo = require('gulp-theo')
const del = require( 'del' );
const { mkdirpSync } = require( 'fs-extra' );

const { kebabify } = require( './lib/utils' );

const formats = [ 'map.scss', 'custom-properties.css', 'json', 'raw.json' ];

/**
 * Prepare destination directory.
 *
 * @param {Function} done Function called upon completion.
 */
 const clean = ( dest, done ) => {
	del( dest );

	mkdirpSync( dest );
	done();
};

const basicTokenBuild = (
	format,
	done,
	dest = './build'
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

gulp.task('default', ( done ) => {

	clean( './build', () => {
		formats.forEach( format => {
			basicTokenBuild( format, () => {
				console.log( `Built tokens in ${format}`);
			} )
		});
	});

	clean( './style-guides', () => {
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
			.pipe(gulp.dest('./style-guides'));
	});

	done();
});
