const { allSelectors, allAllowedNames, allAllowedTokens, groupedSelectors } = require( '../../lib/font-data' );
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
		[
			'lrv-a-font-primary-regular-xxs',
			'lrv-a-font-secondary-l',
			'lrv-a-font-body-regular-xxs',
			'lrv-a-font-basic-s'
		].forEach( selector => {
			expect(allSelectors).toContain( selector );
		});
	});

	it( 'should group selectors', () => {
		[
			'secondary',
			'primary-regular',
			'basic'
		].forEach( name => {
			expect(groupedSelectors).toHaveProperty( name );
		});
	});

	it( 'should not contain selectors with a weight in the no-weight group', () => {
		expect(groupedSelectors['secondary'].includes('lrv-a-font-secondary-bold-m')).toBe(false);
		expect(groupedSelectors['basic'].includes('lrv-a-font-basic-bold-m')).toBe(false);
	});

	it.skip( 'should define tokens JSON for line-height', () => {
		expect(tokensByProperty['line-height'] ).toBeDefined();
	});

});
