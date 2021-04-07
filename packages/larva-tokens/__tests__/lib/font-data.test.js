const { allSelectors, allAllowedNames, allAllowedTokens, groupedSelectors, tokensFileContentsByProperty } = require( '../../lib/font-data' );

describe( 'Font Data', () => {

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

	it( 'should allow tokens for every possible decalration', () => {
		[
			'PRIMARY_REGULAR_S_LETTER_SPACING_DESKTOP',
			'ACCENT_M_FONT_SIZE_DESKTOPXL',
			'SECONDARY_MEDIUM_XS_LETTER_SPACING_DESKTOP',
			'BASIC_REGULAR_XXXL_FONT_SIZE_BASE',
		].forEach( name => {
			expect(allAllowedTokens).toContain( name );
		});
	});

	it( 'should create an object with tokens file contents', () => {
		expect(tokensFileContentsByProperty['line_height'].props ).toHaveProperty( 'PRIMARY_REGULAR_S_LINE_HEIGHT_DESKTOP' );
		expect(tokensFileContentsByProperty['font_size'].props ).toHaveProperty( 'SECONDARY_XXS_FONT_SIZE_BASE' );
	});

});
