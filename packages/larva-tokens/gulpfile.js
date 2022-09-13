const gulp = require( 'gulp' );
const gulpIf = require( 'gulp-if' );
const sass = require( 'gulp-sass' )( require( 'sass' ) );
const theo = require( 'gulp-theo' );
const del = require( 'del' );

const { kebabify } = require( './lib/utils' );
const { generateFontTokens } = require( './lib/generators' );
const { existsSync, mkdirpSync } = require( 'fs-extra' );
const formats = [ 'map.scss', 'custom-properties.css', 'json', 'raw.json' ];

sass.compiler = require( 'sass' );

/**
 * Prepare destination directory.
 *
 * @param {Function} done Function called upon completion.
 */
const clean = ( done ) => {
	const dirs = [ 'build', 'style-guides', 'src/base/generated' ];

	dirs.forEach( ( dir ) => {
		if ( existsSync( dir ) ) {
			del.sync( [ dir ] );
		}
	} );

	done();
};

const basicTokenBuild = ( format, done, dest = 'build' ) => {
	gulp.src( [ 'src/brands/*.json' ] )
		.pipe(
			theo( {
				transform: { type: 'web' },
				format: {
					type: format,
				},
			} )
		)
		.pipe(
			gulpIf(
				format === 'custom-properties.css',
				sass( { outputStyle: 'compressed' } ).on(
					'error',
					sass.logError
				)
			)
		)
		.pipe( gulp.dest( dest ) );

	done();
};

const generateTypography = ( done ) => {
	mkdirpSync( 'src/base/generated' );

	generateFontTokens();

	done();
};

const build = ( done ) => {
	formats.forEach( ( format ) => {
		basicTokenBuild( format, () => {
			console.log( `Built ${ format } format.` ); // eslint-disable-line no-console
		} );
	} );

	gulp.src( 'src/brands/*.json' )
		.pipe(
			theo( {
				transform: { type: 'web' },
				format: {
					type: 'html',
					options: {
						transformPropName: ( name ) => kebabify( name ),
					},
				},
			} )
		)
		.pipe( gulp.dest( 'style-guides' ) );

	done();
};

exports.default = gulp.series( clean, generateTypography, build );
