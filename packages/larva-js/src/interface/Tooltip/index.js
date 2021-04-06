import Tooltip from './Tooltip';

// Initialize Tooltip.
export default function initTooltip() {
	const tooltips = [ ...document.querySelectorAll( '.js-Tooltip-parent' ) ];
	tooltips.forEach( ( el ) => {
		return new Tooltip( el );
	} );
}
