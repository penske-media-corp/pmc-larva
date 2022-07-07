'use strict';

const path = require( 'path' );
const sassTrue = require( 'sass-true' );
const glob = require( 'glob' );

describe( '@penskemediacorp/larva-scss', () => {
	// Find all of the Sass files that end in `*.test.scss` in any directory in this project.
	const sassTestFiles = glob.sync(
		path.resolve( __dirname, './**/*.test.scss' )
	);

	// Run True on every file found with the describe and it methods provided.
	sassTestFiles.forEach( ( file ) =>
		sassTrue.runSass( { file }, { describe, it } )
	);
} );
