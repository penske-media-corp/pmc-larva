const assert = require( 'assert' );
const getPatternsList = require( '../../../lib/utils/getSubDirectoryNames' );
const appConfiguration = require( '../../../lib/utils/getAppConfiguration' )(
	'patterns'
);
const expectedObjectsList = [ 'o-crap', 'o-nav' ];
const expectedComponentsList = [ 'c-nav-link', 'c-tagline' ];

console.log( appConfiguration.projectPatternsDir );

describe( 'getSubDirectoryNames', () => {
	it( 'gets an array of subdir names for objects', () => {
		assert.deepEqual(
			getPatternsList( appConfiguration.projectPatternsDir + '/objects' ),
			expectedObjectsList
		);
	} );

	it( 'gets an array of subdir names for components', () => {
		assert.deepEqual(
			getPatternsList(
				appConfiguration.projectPatternsDir + '/components'
			),
			expectedComponentsList
		);
	} );
} );
