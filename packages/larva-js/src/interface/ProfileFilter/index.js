import ProfileFilter from './ProfileFilter';

export default function initProfileFilter() {
	const filters = [ ...document.querySelectorAll( '.js-ProfileFilter' ) ];
	filters.forEach( ( el ) => ( el.ProfileFilter = new ProfileFilter( el ) ) );
}
