const markup = require( '../fixtures/markup' );

import removeDesktopXlClasses from '../../utils/removeDesktopXlClasses';

function setup() {
	document.querySelector( '.test' ).innerHTML = markup.markupWithXlClasses;
	removeDesktopXlClasses();
}

describe( 'removeDesktopXlClasses', () => {
	setup();

	it( 'rebuilds the class name without @desktop-xl classes', () => {
		const el = document.querySelector( '.module' );

		expect( el.className ).toBe(
			' module // u-margin-t-125 lrv-a-wrapper lrv-a-grid u-grid-gap-0'
		);
	} );

	it( 'removes all @desktop-xl classes', () => {
		const desktopXlEls = [
			...document.querySelectorAll( '[class*="@desktop-xl"]' ),
		];

		expect( desktopXlEls.length ).toBe( 0 );
	} );

	// TODO: add teardown() if more test cases are added
} );
