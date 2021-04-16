/**
 * Larva UI Toggle
 *
 * A button to hide/show the Larva menus and pattern documentation,
 * and save the preference to localStorage.
 *
 * The selector .js-LarvaUiToggle-panel is added to DOM
 * elements that are should be hidden/shown by the toggle.
 */

export default class LarvaUiToggle {
	constructor( el ) {
		this.el = el;

		// Indicate the class has been created by creating this property on the DOM node.
		this.el.pmcLarvaUiToggle = this;
		this.KEY = 'pmcIsLarvaUiHidden';

		// Bind an event listener like so:
		this.onClick = this.onClick.bind( this );
		this.el.addEventListener( 'click', this.onClick );

		this.ui = {
			button: el,
			panels: document.querySelectorAll( '.js-LarvaUiToggle-panel' ),
		};

		this.init();
	}

	init() {
		const isHidden = window.localStorage.getItem( this.KEY );

		// Default to false,
		// or if true, add the hidden class
		if ( undefined === isHidden ) {
			this.setStore( 'false' );
		} else if ( 'true' === isHidden ) {
			this.togglePanels();
		}
	}

	onClick() {
		const currentValue = window.localStorage.getItem( this.KEY );

		// Firefox only stores strings in localStorage.
		const newValue = 'true' === currentValue ? 'false' : 'true';

		this.setStore( newValue );
	}

	setStore( newValue ) {
		window.localStorage.setItem( this.KEY, newValue );

		this.togglePanels();
	}

	togglePanels() {
		this.ui.panels.forEach( ( el ) => {
			el.classList.toggle( 'lrv-a-hidden' );
		} );
	}
}
