const gulp = require( 'gulp' );
const postcss = require( 'gulp-postcss' );
const cssnano = require( 'cssnano' );
const path = require( 'path' );
const sass = require( 'gulp-sass' );
const gulpStylelint = require( 'gulp-stylelint' );
const globImporter = require( 'node-sass-glob-importer' );

const stylelintConfig = require( './stylelint.config' );

/*
* Config
*/

const sassOpts = {
	includePaths: [
		path.resolve( './node_modules' ),
		path.resolve( './src/scss' )
	],
	importer: globImporter()
};

const stylelintOpts = {
	failAfterError: false,
	config: stylelintConfig,
	reporters: [
		{
			formatter: 'string',
			console: true
		} ]
};

const cssDest = './build/css/';


/*
* Functions
*/

const stylelint = ( file ) => {
	gulp.src( file ).pipe( gulpStylelint( stylelintOpts ) );
};

const buildScss = ( done ) => {
	gulp.src( './entries/*.scss' )
		.pipe( gulpStylelint( stylelintOpts ) )
		.pipe( sass( sassOpts ).on( 'error', sass.logError ) )
		.pipe( gulp.dest( cssDest ) );
	done();
};

const processCss = ( done ) => {
	gulp.src( cssDest + '*.css' )
		.pipe( postcss( [ cssnano() ] ) )
		.pipe( gulp.dest( cssDest ) );
	done();
};


/*
* Tasks
*/

// Watch the changed file, compile and lint when changed.
exports['dev-scss'] = () => {
	gulp.watch( './src/**/*.scss', buildScss ).on( 'change', function( file ) {
		stylelint( file );
	} );
};

// Quickly build SCSS.
exports['build-scss'] = buildScss;

// Run PostCSS on CSS.
exports['prod-scss'] = ( done ) => {
	stylelint( './src/**/*.scss' );
	buildScss( () => {
		processCss( done );
	} );
};
