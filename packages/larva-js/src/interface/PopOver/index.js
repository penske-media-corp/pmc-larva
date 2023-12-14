import PopOver from './PopOver.js';

export default function initPopOver() {
	const searches = [ ...document.querySelectorAll( '.js-PopOver' ) ];

	searches.forEach( ( el ) => {
		return new PopOver( el );
	} );
}
