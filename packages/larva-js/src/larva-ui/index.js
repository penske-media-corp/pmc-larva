import reflowForSideSkinAd from '../interface/SideSkinAd/SideSkinAd';
import initLarvaUiButton from './LarvaUiButton';

import '../vendor/prism';

export default function initLarvaUi() {

	document.addEventListener( 'DOMContentLoaded', () => {
		initLarvaUiButton();

		/**
		 * Side Skins
		 *
		 * Simulate by stubbing the value for window.pmc_dfp_skin,
		 * and using the query string ?has_side_skins=true
		 */

		// This value is assigned in base.html
		if ( 'object' === typeof window.pmc_dfp_skin ) {
			reflowForSideSkinAd();

			// Indicate the border of the skins
			document.querySelector( 'html' ).style.border = '2px solid red';
		}

	} );
}
