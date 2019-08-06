export default class Slider {
	constructor( el ) {
		this.el = el;
		this.navNext = el.querySelector( '[data-slider-nav="next"]' );
		this.navPrev = el.querySelector( '[data-slider-nav="prev"]' );
		this.track = el.querySelector( '[data-slider-track]' );
		this.items = [ ...el.querySelectorAll( '[data-slider-item]' ) ];
		this.isCentered = el.hasAttribute( 'data-slider--centered' );
	}

	init() {
		this.navNext.addEventListener( 'click', e => this.moveNext( e ) );
		this.navPrev.addEventListener( 'click', e => this.movePrev( e ) );
		this.currentId = 0;
		this.el.scrollLeft = 0;
		this.setVals();
		this.updateNav();

		if ( this.isCentered ) {
			if ( ! this.el.querySelector( '.is-centered' ) && ! this.el.querySelector( '.is-active' ) ) {
				this.centerHead();
			}
			this.moveToCenter();
		}
	}

	moveNext( e ) {
		e.preventDefault();
		this.updateCurrentId( Math.floor( ++this.currentId ) );
		this.setVals();
		this.move();
	}

	movePrev( e ) {
		e.preventDefault();
		this.updateCurrentId( Math.ceil( --this.currentId ) );
		this.setVals();
		this.move();
	}

	move() {
		this.track.style.transform = `translateX( -${ this.getOffset() }px )`;
		this.updateNav();
	}

	getOffset() {

		// Note: Grid column gap is not accounted for in the item width. In a future update to this Slider,
		// the gap should be calculated and added to the itemWidth so that we can take use Grid instead of
		// relying on padding for the gutters as is the current practice.
		// In that case, the following formulat would be more like:
		// return Math.min( this.itemWidth * this.currentId, ( this.sliderWidth + gutterSize*totalItems ) - this.trackWidth );

		return Math.min( this.itemWidth * this.currentId, this.sliderWidth - this.trackWidth );
	}

	updateCurrentId( currentId ) {
		this.currentId = Math.max( currentId, 0 );
		this.currentId = Math.min( currentId, this.maxId );
	}

	get maxId() {
		return this.items.length - this.visibleItemsCount();
	}

	visibleItemsCount() {
		return Math.floor( this.trackWidth / this.itemWidth );
	}

	setVals() {
		if ( ! this.items.length ) {

			// set default all to 1 to avoid division by zero error
			this.itemWidth = 1;
			this.sliderWidth = 1;
			this.trackWidth = 1;

			return;
		}
		this.currentItem = this.items[ Math.floor( this.currentId ) ];

		// current item might be out bound
		if ( 'undefined' === typeof this.currentItem ) {
			return;
		}

		this.itemWidth = this.currentItem.getBoundingClientRect().width;
		this.sliderWidth = this.items.reduce( ( acc, el ) => acc + el.getBoundingClientRect().width, 0 );
		this.trackWidth = this.track.getBoundingClientRect().width;
	}

	updateNav() {
		if ( this.maxId === this.currentId ) {
			this.navNext.classList.add( 'is-hidden' );
		} else {
			this.navNext.classList.remove( 'is-hidden' );
		}

		if ( 0 === this.currentId ) {
			this.navPrev.classList.add( 'is-hidden' );
		} else {
			this.navPrev.classList.remove( 'is-hidden' );
		}
	}

	centerHead() {
		const [ head, ...tail ] = this.items;
		const index = Math.floor( tail.length / 2 ) + 1;
		head.classList.add( 'is-centered' );
		this.track.insertBefore( head, this.items[index]);
	}

	moveToCenter() {
		const el = this.el.querySelector( '.is-centered' ) || this.el.querySelector( '.is-active' );
		const elWidth = el.getBoundingClientRect().width;
		const targetOffset =  el.offsetLeft - ( this.track.getBoundingClientRect().width - elWidth ) / 2;
		this.currentId = targetOffset / elWidth;
		this.move();
	}

	destroy() {
		this.el.scrollLeft = 0;
		this.navNext.removeEventListener( 'click', e => this.moveNext() );
		this.navPrev.removeEventListener( 'click', e => this.movePrev() );
		this.navNext.classList.remove( 'is-hidden' );
		this.navPrev.classList.remove( 'is-hidden' );
		this.track.style.transform = 'translateX( 0px )';
		delete this.el.pmcSlider;
	}
}
