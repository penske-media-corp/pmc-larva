export default class MobileSlider {
	constructor( el ) {
		this.el = el;
		this.track = el.querySelector( '[data-slider-track]' );
		this.items = [ ...el.querySelectorAll( '[data-slider-item]' ) ];
		this.isCentered = el.hasAttribute( 'data-slider--centered' );
	}

	init() {
		if ( this.isCentered ) {
			if ( ! this.el.querySelector( '.is-centered' ) && ! this.el.querySelector( '.is-active' ) ) {
				this.centerHead();
			}
			this.moveToCenter();
		}
	}

	centerHead() {
		const [ head, ...tail ] = this.items;
		const index = Math.floor( tail.length / 2 ) + 1;
		head.classList.add( 'is-centered' );
		this.track.insertBefore( head, this.items[ index ]);
	}

	moveToCenter() {
		const el = this.el.querySelector( '.is-centered' ) || this.el.querySelector( '.is-active' );
		const elWidth = el.getBoundingClientRect().width;
		const targetOffset =  el.offsetLeft - ( this.track.getBoundingClientRect().width - elWidth ) / 2;
		this.el.scrollLeft = targetOffset;
	}

	destroy() {
		this.el.scrollLeft = 0;
		delete this.el.pmcMobileSlider;
	}
}
