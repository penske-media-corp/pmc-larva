const fontPossibilities = require( '../../lib/font-possibilities' );

describe( 'Font Possibilities', () => {
	it( 'should include a record for xxs primary', () => {
		expect(fontPossibilities['primary'] ).toContain( 'lrv-a-font-primary-xxs' );
	});
});
