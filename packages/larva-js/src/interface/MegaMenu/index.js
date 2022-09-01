import MegaMenu from './MegaMenu.js';

export default function initMegaMenu() {
	const megaMenus = [ ...document.querySelectorAll( '.js-MegaMenu' ) ];
	const triggers = [ ...document.querySelectorAll( '.js-MegaMenu-Trigger' ) ];

	let lastFocusedElement;

	megaMenus.forEach( ( el ) => ( el.pmcMegaMenu = new MegaMenu( el ) ) );

	triggers.forEach( ( trigger ) => {
		trigger.addEventListener( 'click', openOrCloseMegaMenu );
	} );

	document.addEventListener( 'keydown', ( e ) => {
		if ( 'Escape' === e.key ) {
			document.documentElement.classList.remove( 'is-mega-open' );
		}
	} );

	function openOrCloseMegaMenu() {
		const isMegaOpen =
			document.documentElement.classList.contains( 'is-mega-open' );

		// This is a very brittle focus switching solution.
		// @TODO: Move this into the MegaMenu class.
		const menu = document.querySelector( '.js-MegaMenu' );
		const focusableElementsString = 'input, [tabindex="0"]';
		const focusableElements = [
			...menu.querySelectorAll( focusableElementsString ),
		];

		if ( ! isMegaOpen ) {
			document.documentElement.classList.add( 'is-mega-open' );

			if ( focusableElements[ 0 ] !== document.activeElement ) {
				setTimeout( function () {
					focusableElements[ 0 ].focus();
				}, 100 );
			}

			lastFocusedElement = document.activeElement;
		} else {
			document.documentElement.classList.remove( 'is-mega-open' );
			lastFocusedElement.focus();
		}
	}
}
