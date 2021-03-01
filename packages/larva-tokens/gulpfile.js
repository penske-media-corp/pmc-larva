// gulpfile.js
const gulp = require('gulp')
const theo = require('gulp-theo')

const kebabify = ( name ) => {
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
};

const formats = [ 'map.scss', 'custom-properties.css', 'json', 'raw.json' ];

const basicTokenBuild = ( format, dest = './build' ) => {
	gulp.src( [
		'src/brands/*.json',
		'!src/brands/*.typography.json'
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

	gulp.src([
		'src/brands/*.json',
		'!src/brands/*.typography.json'
	])
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

	gulp.src('src/brands/*.typography.json')
		.pipe(theo({
			transform: { type: 'web' },
			format: {
				type: 'json'
			}
		}))
		.pipe(gulp.dest( './build' ));

	done();
});
