import Flickity from '@npm/flickity';

export default function initFlickity() {
	const carousels = [ ...document.querySelectorAll( '.js-Flickity' ) ];

	carousels.forEach( ( el ) => {
		const isContained = el.classList.contains( 'js-Flickity--isContained' );
		const isFreeScroll = el.classList.contains(
			'js-Flickity--isFreeScroll'
		);
		const isWrapAround = el.classList.contains(
			'js-Flickity--isWrapAround'
		);
		const hasPageDots = el.classList.contains( 'js-Flickity--pageDots' );

		const slider = new Flickity( el, {
			cellSelector: '.js-Flickity-cell',
			pageDots: hasPageDots,
			imagesLoaded: true,
			groupCells: true,
			contain: isContained,
			wrapAround: isWrapAround,
			freeScroll: isFreeScroll,
			arrowShape: {
				x0: 10,
				x1: 60,
				y1: 50,
				x2: 65,
				y2: 45,
				x3: 20,
			},
		} );

		return slider;
	} );
}
