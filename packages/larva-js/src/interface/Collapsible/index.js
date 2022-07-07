import Collapsible from './Collapsible';

// Initialize all Dropdowns.
export default function initCollapsible() {
	const collapsibles = [
		...document.querySelectorAll( '[data-collapsible]' ),
	];
	collapsibles.forEach(
		( el ) => ( el.pmcCollapsible = new Collapsible( el ) )
	);
}
