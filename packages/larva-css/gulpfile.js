const path = require('path');
const { task, src, watch, series, dest } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const gulpStylelint = require('gulp-stylelint');
const rename = require('gulp-rename');

const sassOpts = {
	includePaths: [
		path.join( __dirname, './node_modules' )
	]
};

function styles( done ) {
	// Generic
	src('./src/*generic/*.common.inline.scss')
		.pipe(gulpStylelint({
			failAfterError: false,
			reporters: [{
				formatter: 'string',
				console: true,
			}]
		}))
		.pipe(sass( sassOpts ).on( 'error', sass.logError) )
		.pipe(concat('generic.common.inline.css'))
		.pipe(dest('./build/css/'));

	src('./src/*generic/*.common.async.scss')
		.pipe(sass( sassOpts ).on('error', sass.logError))
		.pipe(concat('generic.common.async.css'))
		.pipe(dest('./build/css/'));

	// Algorithms
	// TODO: make this more DRY
	src('./src/**/a-*.common.inline.scss')
		.pipe(gulpStylelint({
			failAfterError: false,
			reporters: [{
				formatter: 'string',
				console: true,
			}]
		}))
		.pipe(sass( sassOpts ).on('error', sass.logError))
		.pipe(concat('algorithms.common.inline.css'))
		.pipe(dest('./build/css/'));

	src('./src/**/a-*.common.async.scss')
		.pipe(gulpStylelint({
			failAfterError: false,
			reporters: [{
				formatter: 'string',
				console: true,
			}]
		}))
		.pipe(sass( sassOpts ).on('error', sass.logError))
		.pipe(concat('algorithms.common.async.css'))
		.pipe(dest('./build/css/'));

	// Utilities
	src('./src/**/u-*.common.inline.scss')
		.pipe(sass( sassOpts ).on('error', sass.logError))
		.pipe(concat('utilities.common.inline.css'))
		.pipe(dest('./build/css/'));

	src('./src/**/u-*.common.async.scss')
		.pipe(sass( sassOpts ).on('error', sass.logError))
		.pipe(concat('utilities.common.async.css'))
		.pipe(dest('./build/css/'));

	// JS
	src('./src/**/js-*.common.inline.scss')
		.pipe(sass( sassOpts ).on('error', sass.logError))
		.pipe(concat('js.common.inline.css'))
		.pipe(dest('./build/css/'));

	src('./src/**/js-*.common.async.scss')
		.pipe(sass( sassOpts ).on('error', sass.logError))
		.pipe(concat('js.common.async.css'))
		.pipe(dest('./build/css/'));

	
	// If we want to handle JS-related CSS on a module-by-module basis
	// src('./src/**/js-*.scss')
	// 	.pipe(sass( sassOpts ).on('error', sass.logError))
	// 	.pipe(rename({
	// 		dirname: 'js',
	// 	}))
	// 	.pipe(dest('./build/css/'));

	done();
}

exports.default = function() {
	watch( './src/**/*.scss', series( styles ) );
}
