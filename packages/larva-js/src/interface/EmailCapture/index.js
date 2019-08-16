import EmailCapture from './EmailCapture';

// Initialize EmailCapture.
export default function initEmailCaptures() {

	const emailCaptures = [ ... document.querySelectorAll( '.pmc-js-EmailCapture' ) ];

	emailCaptures.forEach( el => el.pmcEmailCapture = new EmailCapture( el ) );
}
