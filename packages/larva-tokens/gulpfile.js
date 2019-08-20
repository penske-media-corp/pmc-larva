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
			format: { 
				type: 'html',
				options: {
					transformPropName: ( name ) =>  {
						let kebabCase = [];

						// TODO: find a more concise way of turning a string into an iterable
						for (let i = 0; i < name.length; i++) {
							let letter = name[i];
							kebabCase[i] = letter;
						}

						return kebabCase.reduce( ( a, b ) => {
							if ( '_' === b ) {
								return a.toLowerCase() + '-';
							}
							return a.toLowerCase() + b.toLowerCase();
						});
					}
				} 
			}
		}))
		.pipe(gulp.dest('style-guides'))

	done();
});
