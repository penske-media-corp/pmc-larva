const gulp = require('gulp')
const theo = require('gulp-theo')
const gulpClean = require( 'gulp-clean' );
const { mkdirpSync } = require( 'fs-extra' );

const { kebabify } = require( './lib/utils' );

const formats = [ 'map.scss', 'custom-properties.css', 'json', 'raw.json' ];

/**
 * Prepare destination directory.
 *
 * @param {Function} done Function called upon completion.
 */
 const clean = ( dest, done ) => {
	gulp.src( dest, { read: false } ).pipe( gulpClean() );

	mkdirpSync( dest );
	done();
};

const basicTokenBuild = ( format, dest = './build' ) => {
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
};

gulp.task('default', ( done ) => {

	clean( './build', () => {
		formats.forEach( format => {
			basicTokenBuild( format )
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
