/**
 * Add drop-down functionality for navigation component.
 */

export default class MobileHeightToggle {
	constructor( el ) {
		this.el = el;
		this.el.pmcMobileHeightToggle = this;
		this.isExpanded = false;

		this.toggle = this.toggle.bind( this );
		this.onClick = this.onClick.bind( this );
		this.onFocus = this.onFocus.bind( this );
		this.onBlur = this.onBlur.bind( this );
		this.keyDown = this.keyDown.bind( this );

		this.el.addEventListener( 'click', this.onClick );
		this.el.addEventListener( 'focus', this.onFocus );
		this.el.addEventListener( 'blur', this.onBlur );
	}

	destroy() {
		this.el.classList.remove( 'is-expanded' );
		this.isExpanded = false;
		delete this.el.pmcMobileHeightToggle;
	}

	onBlur( e ) {
		document.removeEventListener( 'keydown', this.keyDown );
	}

	keyDown( e ) {
		if ( 'Enter' === e.key ) {
			this.toggle( e );
		}
	}

	onFocus( e ) {
		document.addEventListener( 'keydown', this.keyDown );
	}

	onClick( e ) {
		if ( undefined !== this.el.pmcMobileHeightToggle ) {
			// Bubble event
			if (
				e.target.classList.contains(
					'lrv-js-MobileHeightToggle-trigger'
				)
			) {
				this.toggle( e );
			}
		}
	}

	toggle( e ) {
		if ( ! this.isExpanded ) {
			e.preventDefault();
			this.el.classList.add( 'is-expanded' );
			this.isExpanded = true;
		} else {
			this.el.classList.remove( 'is-expanded' );
			this.isExpanded = false;
		}
	}
}
