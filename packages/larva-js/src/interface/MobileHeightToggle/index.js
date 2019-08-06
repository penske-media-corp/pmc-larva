import MobileHeightToggle from './MobileHeightToggle';

// Initialize all Dropdowns.

export default function( width ) {
	const dropdowns = [ ... document.querySelectorAll( '.pmc-js-MobileHeightToggle' ) ];

	dropdowns.forEach( el => {

		if ( 768 > width && undefined === el.pmcMobileHeightToggle ) {
			new MobileHeightToggle( el );	
		}
		
		if ( 768 <= width && undefined !== el.pmcMobileHeightToggle ) {
			el.pmcMobileHeightToggle.destroy();
		}
	});
};
