const assert = require( 'assert' );

import MobileHeightToggle from './MobileHeightToggle';
import initMobileHeightToggles from './index';

const TABLET = 768;

describe( 'MobileHeightToggle', () => {
	it( 'starts with an initially closed state', () => {
		const dropdown = new MobileHeightToggle(
			document.querySelector( '.test' )
		);
		assert.equal( dropdown.isExpanded, false );
	} );

	it( 'adds the class is expanded when trigger is clicked', () => {
		document.querySelector( '.test' ).innerHTML = `
			<div class="lrv-js-MobileHeightToggle">
				<div class="lrv-js-MobileHeightToggle-trigger"></div>
				<div class="lrv-js-MobileHeightToggle-target"></div>
			</div>
		`;

		const dropdown = new MobileHeightToggle(
			document.querySelector( '.lrv-js-MobileHeightToggle' )
		);

		dropdown.toggle( {
			preventDefault: () => {},
			target: document.querySelector(
				'.lrv-js-MobileHeightToggle-trigger'
			),
		} );

		assert.equal( dropdown.el.classList.contains( 'is-expanded' ), true );
	} );

	it( 'does not initialize MobileHeightToggles on tablet', () => {
		document.querySelector( '.test' ).innerHTML = `
			<div class="lrv-js-MobileHeightToggle">
				<div class="lrv-js-MobileHeightToggle-trigger"></div>
				<div class="lrv-js-MobileHeightToggle-target"></div>
			</div>
		`;

		initMobileHeightToggles( TABLET + 1 );

		const el = document.querySelector( '.lrv-js-MobileHeightToggle' );

		assert.equal( el.pmcMobileHeightToggle, undefined );
	} );

	it( 'does initialize MobileHeightToggles on below tablet', () => {
		document.querySelector( '.test' ).innerHTML = `
			<div class="lrv-js-MobileHeightToggle">
				<div class="lrv-js-MobileHeightToggle-trigger"></div>
				<div class="lrv-js-MobileHeightToggle-target"></div>
			</div>
		`;

		initMobileHeightToggles( 500 );

		const el = document.querySelector( '.lrv-js-MobileHeightToggle' );

		assert.notEqual( el.pmcMobileHeightToggle, undefined );
	} );
} );
