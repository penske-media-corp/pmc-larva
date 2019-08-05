/**
 * Add drop-down functionality for navigation component.
 */
export default class MobileHeightToggle {
	constructor( el ) {
		this.el = el;
		this.el.pmcMobileHeightToggle = this;
		this.isExpanded = false;
		this.toggle = this.toggle.bind( this );
		this.el.addEventListener( 'click', this.toggle );
	}
	
	destroy() {
		this.el.classList.remove( 'is-expanded' );
		this.isExpanded = false;
		delete this.el.pmcMobileHeightToggle;
	}

	toggle( e ) {
		if ( undefined !== this.el.pmcMobileHeightToggle ) {

			// Bubble event
			if ( e.target.classList.contains( 'pmc-js-MobileHeightToggle-trigger' ) ) {
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
	}

}
