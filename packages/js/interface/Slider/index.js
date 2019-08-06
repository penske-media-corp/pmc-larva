/**
 *
 * Slider module from RollingStone.
 *
 * This index.js should import modules and invoke any JS functionality.
 *
*/

import './style.scss';
import Slider from './Slider.js';

// @todo: Use webpack dynamic imports.
import MobileSlider from './MobileSlider.js';

( function( $ ) {

	const sliders = [ ... document.querySelectorAll( '[data-slider]' ) ];

	const onSafeResize = function() {

		const width = window.innerWidth;

		sliders.forEach( el => {
			if ( 768 <= width ) {
				if ( undefined === el.pmcSlider ) {
					el.pmcSlider = new Slider( el );
					el.pmcSlider.init();
				} else {
					el.pmcSlider.setVals();
					el.pmcSlider.move();
				}

				if ( undefined !== el.pmcMobileSlider ) {
					el.pmcMobileSlider.destroy();
				}
			} else if ( 768 > width ) {
				if ( undefined !== el.pmcSlider ) {
					el.pmcSlider.destroy();
				}

				if ( undefined === el.pmcMobileSlider  ) {
					el.pmcMobileSlider = new MobileSlider( el );
					el.pmcMobileSlider.init();
				}
			}
		});
	};

	window.addEventListener( 'resize', () => {
		requestAnimationFrame( onSafeResize );
	});

	document.addEventListener( 'DOMContentLoaded', () => {
		onSafeResize();
	});

}( jQuery ) );
