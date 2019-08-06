const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );
const changedFilePath = path.join( fixture, './src/patterns/06-algorithms/a-wrapper/a-wrapper.common.inline.scss' );

const getScssResultCss = require( '../../../lib/utils/getScssResultCss' );

describe( 'getScssResultCss', () => {
	it( 'returns css from multiple scss files', () => {
		
		return getScssResultCss( 'common.inline', changedFilePath ).then( ( result ) => {
			// This string will be overridden if the files are not concatenating properly.
			expect( result ).toEqual( expect.stringContaining( '.pmc-a-icon' ) );
		});
	});
});
