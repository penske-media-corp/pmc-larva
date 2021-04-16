const {
	allSelectors,
	allAllowedNames,
	groupedSelectors,
	tokensFileContentsByProperty,
} = require( '../../lib/font-data' );

describe( 'Font Data', () => {
	it( 'should assemble all allowed names for selectors', () => {
		[ 'primary_xl', 'body_m', 'accent_regular_xxs', 'body_m' ].forEach(
			( name ) => {
				expect( allAllowedNames ).toContain( name );
			}
		);
	} );

	it( 'should transform allowed names into selectors', () => {
		[
			'lrv-a-font-primary-xxs',
			'lrv-a-font-secondary-l',
			'lrv-a-font-body-m',
			'lrv-a-font-accent-m',
		].forEach( ( selector ) => {
			expect( allSelectors ).toContain( selector );
		} );

		expect( allSelectors ).not.toContain( undefined );
	} );

	it( 'should group selectors', () => {
		[ 'secondary', 'accent-regular', 'body' ].forEach( ( name ) => {
			expect( groupedSelectors ).toHaveProperty( name );
		} );
	} );

	it( 'should not contain selectors with a weight in the no-weight group', () => {
		expect(
			groupedSelectors.accent.includes( 'lrv-a-font-accent-regular-m' )
		).toBe( false );
		expect(
			groupedSelectors.secondary.includes( 'lrv-a-secondary-regular-m' )
		).toBe( false );
	} );

	it( 'should create an object with tokens file contents', () => {
		expect( tokensFileContentsByProperty.line_height.props ).toHaveProperty(
			'PRIMARY_S_LINE_HEIGHT_DESKTOP'
		);
		expect( tokensFileContentsByProperty.font_size.props ).toHaveProperty(
			'SECONDARY_S_FONT_SIZE_MOBILE'
		);
	} );
} );
