import Dropdown from './Dropdown.js';

// Initialize all Dropdowns.

export default function() {
	const dropdowns = [ ... document.querySelectorAll( '.js-Dropdown' ) ];
	const width     = window.innerWidth;

	dropdowns.forEach( el => {
		if ( 768 > width && undefined === el.pmcDropdown ) {
			new Dropdown( el );
		} else if ( 768 <= width && undefined !== el.pmcDropdown ) {
			el.pmcDropdown.destroy();
		}
	});
};
