// Import utilities.
import '../../utils/third-party/modernizer.custom.js';

// Import components.
import initDropdowns from '../../components/Dropdown/index.js';


/**
 *
 * Load Site JS.
 *
 * This function is invoked on every template. It should initiate any components that
 * are present on every template, as well as any site-wide functionality such as font
 * loading or feature detection (Modernizr).
 *
 */

( function( $ ) {

	/**
	 * Initialize Modules.
	 *
	 * Initialize the Dropdown component.
	 */

	document.addEventListener( 'DOMContentLoaded', () => {
		initDropdowns();
	});

}( jQuery ) );
