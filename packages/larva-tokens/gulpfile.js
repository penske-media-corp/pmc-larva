// gulpfile.js
const gulp = require('gulp')
const theo = require('gulp-theo')

gulp.task('default', ( done ) => {
	gulp.src('src/brands/*.json')
		.pipe(theo({
			transform: { type: 'web' },
			format: { type: 'map.scss' }
		}))
		.pipe(gulp.dest('build'))
	
	gulp.src('src/brands/*.json')
		.pipe(theo({
			transform: { type: 'web' },
			format: { type: 'custom-properties.css' }
		}))
		.pipe(gulp.dest('build'));

	gulp.src('src/brands/*.json')
		.pipe(theo({
			transform: { type: 'web' },
			format: { type: 'html' }
		}))
		.pipe(gulp.dest('style-guides'))

	done();
});
