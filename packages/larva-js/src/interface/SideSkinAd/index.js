
import reflowForSideSkinAd from './SideSkinAd';

export default function initSideSkinAd ( e ) {

	const parametersMessagePattern = 'pmcadm:dfp:skinad:parameters';
	let serializedParameters = '';

	if ( undefined !== window.pmc && undefined !== window.pmc.skinAds ) {
		window['pmc_dfp_skin'] = window.pmc.skinAds;
	}

	if ( 'string' === typeof e.data && 'object' === typeof window.pmc_dfp_skin ) { // eslint-disable-line camelcase
		if ( parametersMessagePattern === e.data.substring( 0, parametersMessagePattern.length ) ) {
			serializedParameters = e.data.substring( parametersMessagePattern.length );

			if ( serializedParameters ) {

				reflowForSideSkinAd();

				window.pmc_dfp_skin.refresh_skin_rails(); // eslint-disable-line camelcase
			}

		}
	}
}
