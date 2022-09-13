export default class ExpandableSearch {
	constructor( el ) {
		this.el = el;
		this.isOpen = false;
		this.trigger = this.el.querySelector( '.js-ExpandableSearch-trigger' );
		this.target = this.el.querySelector( '.js-ExpandableSearch-target' );
		this.targetInput = this.target.querySelector( 'input' );

		this.trigger.addEventListener( 'click', () => {
			this.toggleSearch();
		} );

		// TODO: remove these event listeners when search is closed.

		// Collapse search on ESC.
		document.addEventListener( 'keydown', ( e ) => {
			if ( 27 === e.keyCode ) {
				this.collapseSearch();
			}
		} );

		// Collapse search on body click, outside of search el.
		document.body.addEventListener( 'click', ( e ) => {
			if ( ! this.el.contains( e.target ) ) {
				this.collapseSearch();
			}
		} );

		// Collapse search when focus leaves search el.
		document.addEventListener( 'focusin', () => {
			// eslint-disable-next-line @wordpress/no-global-active-element
			if ( ! this.el.contains( document.activeElement ) && this.isOpen ) {
				this.collapseSearch();
			}
		} );
	}

	updateState() {
		this.isOpen = this.isOpen ? false : true;
	}

	toggleSearch() {
		this.target.toggleAttribute( 'hidden' );
		this.target.classList.toggle( 'js-fade-is-out' );
		this.target.classList.toggle( 'js-fade-is-in' );
		this.trigger.classList.toggle( 'is-ExpandableSearch-open' );

		this.updateState();

		// Switch focus to input if it is opened
		if ( this.isOpen ) {
			this.targetInput.focus();
		}
	}

	// Switch focus back to trigger when search is closed.
	collapseSearch() {
		if ( this.isOpen ) {
			this.toggleSearch();
			this.trigger.focus();
		}
	}
}
