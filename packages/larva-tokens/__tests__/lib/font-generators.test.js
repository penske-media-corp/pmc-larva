const fontSelectors = require( '../../lib/font-selectors' );
const { allAllowedNames, allAllowedTokens } = require( '../../lib/font-data' );
const { tokensByProperty } = require( '../../lib/font-tokens' );

describe( 'Font generators', () => {
	it( 'should assemble all allowed tokens for font styles', () => {
		[
			'primary_regular_xxl_desktop',
			'body_m_mobile',
			'accent_medium_m_desktopxl',
			'basic_m_mobile',
		].forEach( name => {
			expect(allAllowedTokens).toContain( name );
		});
	});

	it( 'should assemble all allowed names for selectors', () => {
		[
			'primary_regular_xxl',
			'body_m',
			'accent_medium_xxs',
			'basic_l',
		].forEach( name => {
			expect(allAllowedNames).toContain( name );
		});
	});

	it( 'should transform allowed names into selectors', () => {
		expect(fontSelectors['primary-regular']).toContain( 'lrv-a-font-primary-regular-xxs' );
		expect(fontSelectors['secondary']).toContain( 'lrv-a-font-secondary-l' );
		expect(fontSelectors['body-regular']).toContain( 'lrv-a-font-body-regular-xxs' );
	});

	it.skip( 'should define tokens JSON for line-height', () => {
		expect(tokensByProperty['line-height'] ).toBeDefined();
	});

});
