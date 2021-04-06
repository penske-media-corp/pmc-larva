const fontSelectors = require( '../../lib/font-selectors' );

describe( 'Font Possibilities', () => {
	it( 'should include a selector for xxs primary', () => {
		expect(fontSelectors['primary'] ).toContain( 'lrv-a-font-primary-xxs' );
	});
});
