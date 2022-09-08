export default class MegaMenu {
	constructor( el ) {
		this.el = el;
		this.inputs = [ ...this.el.querySelectorAll( 'input' ) ];
		this.container = document.documentElement;

		this.inputs.forEach( ( input ) => {
			input.addEventListener( 'focus', () => this.handleFocus( input ) );
		} );

		this.trapFocus( el );
	}

	handleFocus( input ) {
		this.el.scrollTo( 0, input.offsetTop );
	}

	/**
	 * Focus trap for modal.
	 *
	 * @param {Element} modal Modal container node.
	 *
	 * @return {void}
	 */
	trapFocus( modal ) {
		/**
		 * .js-MegaMenu class has been added twice in the template, we may remove this check after removing
		 * this other class from div.mega-menu__main from all themes.
		 */
		if ( modal.classList.contains( 'mega-menu__main' ) ) {
			return;
		}

		const focusableElements =
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

		const firstFocusableElement =
			modal.querySelectorAll( focusableElements )[ 0 ];
		const focusableContent = modal.querySelectorAll( focusableElements );
		const lastFocusableElement =
			focusableContent[ focusableContent.length - 1 ];

		/**
		 * Handle keydown event.
		 *
		 * @param {Object} event Event object.
		 *
		 * @return {void}
		 */
		const handleKeyDown = ( event ) => {
			const isTabPressed = event.key === 'Tab' || event.keyCode === 9;

			if ( ! isTabPressed ) {
				return;
			}

			if ( event.shiftKey ) {
				// shift + tab combination
				if (
					document.activeElement === firstFocusableElement &&
					lastFocusableElement
				) {
					lastFocusableElement.focus();
					event.preventDefault();
				}
			} else {
				// tab key
				if (
					document.activeElement === lastFocusableElement &&
					firstFocusableElement
				) {
					firstFocusableElement.focus();
					event.preventDefault();
				}
			}
		};

		document.addEventListener( 'keydown', handleKeyDown );
	}
}
