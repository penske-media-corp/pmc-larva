import ExpandableSearch from './ExpandableSearch.js';

export default function initExpandableSearch() {
	const searches = [ ...document.querySelectorAll( '.js-ExpandableSearch' ) ];

	searches.forEach( ( el ) => {
		return new ExpandableSearch( el );
	} );
}
