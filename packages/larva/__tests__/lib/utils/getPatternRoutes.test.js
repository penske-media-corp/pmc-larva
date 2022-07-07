const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );

const getAllPatternsObj = require( '../../../lib/utils/getAllPatternsObj' );
const getPatternRoutes = require( '../../../lib/utils/getPatternRoutes' );

describe( 'getPatternRoutes', () => {
	it( 'outputs an array of routes from a pattern object', () => {
		const patterns = getAllPatternsObj(
			path.join( fixture, 'src/patterns' )
		);

		const expected = [
			'components/c-nav-link/featured.aia',
			'components/c-nav-link/featured',
			'components/c-nav-link',
			'components/c-tagline',
			'modules/test-module/featured',
			'modules/test-module',
			'objects/o-crap',
			'objects/o-nav',
			'one-offs/newswire',
		];

		expect( getPatternRoutes( patterns ) ).toStrictEqual( expected );
	} );
} );
