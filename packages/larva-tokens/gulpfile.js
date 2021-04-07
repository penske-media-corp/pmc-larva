// gulpfile.js
const gulp = require('gulp')
const theo = require('gulp-theo')

const { kebabify } = require( './lib/utils' );

const formats = [ 'map.scss', 'custom-properties.css', 'json', 'raw.json' ];

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
	formats.forEach( format => {
		basicTokenBuild( format )
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
		.pipe(gulp.dest('./style-guides'));

	done();
});
