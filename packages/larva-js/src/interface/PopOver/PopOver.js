export default class PopOver {
	constructor( el ) {
		this.el = el;
		this.isOpen = false;
		this.target = this.el.querySelector( '.js-PopOver-target' );

		// Close PopOver on ESC.
		document.addEventListener( 'keydown', () => {
			this.closePopOver();
		} );

		// Open PopOver on mouseover.
		this.el.addEventListener( 'mouseover', () => {
			this.openPopOver();
		} );

		// Open PopOver on mouseover.
		this.el.addEventListener( 'mouseout', () => {
			this.closePopOver();
		} );

		// Open PopOver on focus.
		this.el.addEventListener( 'focus', () => {
			this.openPopOver();
		} );

		// Open PopOver on blur.
		this.el.addEventListener( 'blur', () => {
			this.closePopOver();
		} );
	}

	openPopOver() {
		this.isOpen = true;
		this.target.classList.add( 'js-PopOver-is-opened' );
	}

	closePopOver() {
		if ( this.isOpen ) {
			this.target.classList.remove( 'js-PopOver-is-opened' );
		}
	}
}
