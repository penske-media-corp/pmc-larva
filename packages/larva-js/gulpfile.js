const path = require('path');
const { task, src, watch, series, dest } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const sassOpts = {
	includePaths: [
		path.join( __dirname, './node_modules' )
	]
};

function styles( done ) {

	src('./src/**/*.scss')
		.pipe(sass( sassOpts ).on('error', sass.logError))
		.pipe(concat('common.inline.css'))
		.pipe(dest('./build/css/'));
	done();
}

exports.default = function() {
	watch( './src/**/*.scss', series( styles ) );
}
