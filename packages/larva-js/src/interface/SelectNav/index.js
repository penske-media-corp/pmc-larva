import SelectNav from './SelectNav';

// Initialize all SelectNav.
export default function initSelectNav() {
	const SelectNavs = [ ...document.querySelectorAll( '.js-SelectNav' ) ];

	SelectNavs.forEach( ( el ) => new SelectNav( el ) );
}
