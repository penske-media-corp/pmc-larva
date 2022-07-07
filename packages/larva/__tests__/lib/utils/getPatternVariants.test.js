const path = require( 'path' );
const getAppConfiguration = require( '../../../lib/utils/getAppConfiguration' );
const getPatternVariants = require( '../../../lib/utils/getPatternVariants' );

const config = getAppConfiguration( 'patterns' );

describe( 'getPatternVariants', () => {
	it( 'returns an array of variants', () => {
		expect(
			getPatternVariants(
				path.join( config.projectPatternsDir, 'components/c-nav-link/' )
			)
		).toEqual( [ 'featured.aia', 'featured', 'prototype' ] );
	} );
} );
