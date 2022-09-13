/**
 * Navigable
 *
 * Allows o-nav object to be accessible/navigable by keyboard tab.
 *
 * The HTML attributes required for the navigation to work:
 * - class lrv-js-Navigable to initiate the module, on a `nav` element
 */

export default class Navigable {
	constructor( el ) {
		this.el = el;
		this.oNavList = el.querySelector( '.o-nav__list' );
		this.oNavListItems = [
			...el.querySelectorAll( '.o-nav__list-item a' ),
		];

		this.el.addEventListener( 'focus', this.onFocus.bind( this ) );
		this.el.addEventListener( 'focusout', this.onFocusOut.bind( this ) );
		this.el.addEventListener( 'keyup', this.onKeyup.bind( this ) );

		if ( this.oNavListItems.length ) {
			this.oNavListItems.forEach( ( oNavListItem ) => {
				oNavListItem.addEventListener(
					'focus',
					this.onFocusListItem.bind( this )
				);
				oNavListItem.addEventListener(
					'focusout',
					this.onFocusOutListItem.bind( this )
				);
			} );
		}
	}

	onFocus() {
		this.oNavList.style.visibility = 'visible';
		this.oNavList.style.opacity = '1';
	}

	onFocusOut( event ) {
		if ( this.el.contains( event.relatedTarget ) ) {
			return;
		}
		this.oNavList.style.visibility = 'hidden';
		this.oNavList.style.opacity = '0';
	}

	onFocusListItem( event ) {
		event.currentTarget.classList.add(
			'lrv-u-background-color-brand-primary'
		);
	}

	onFocusOutListItem( event ) {
		event.currentTarget.classList.remove(
			'lrv-u-background-color-brand-primary'
		);
	}

	onKeyup( event ) {
		// Hide nav if Escape key is pressed.
		if ( 'Escape' === event.key ) {
			this.oNavList.style.visibility = 'hidden';
			this.oNavList.style.opacity = '0';
		}
	}
}
