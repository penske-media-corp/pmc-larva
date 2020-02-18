const gulp = require( 'gulp' );
const concat = require( 'gulp-concat' );

exports.sprite = function( done ) {
	gulp.src( './build/**/*.defs.svg' )
	.pipe( concat( 'svg-sprite.svg' ) )
	.pipe( gulp.dest( './build/svg/' ) );
	done();
};
