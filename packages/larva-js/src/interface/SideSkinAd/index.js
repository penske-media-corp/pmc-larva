// eslint-disable camelcase
import reflowForSideSkinAd from './SideSkinAd';

export default function initSideSkinAd( e ) {
	const parametersMessagePattern = 'pmcadm:dfp:skinad:parameters';
	let serializedParameters = '';
	let atlasSkinObj = '';

	if ( 'object' === typeof window.pmc_dfp_skin ) {
		atlasSkinObj = window.pmc_dfp_skin;
	} else if ( undefined !== window.pmc && undefined !== window.pmc.skinAds ) {
		atlasSkinObj = window.pmc.skinAds;
	}

	if ( 'string' === typeof e.data && 'object' === typeof atlasSkinObj ) {
		if (
			parametersMessagePattern ===
			e.data.substring( 0, parametersMessagePattern.length )
		) {
			serializedParameters = e.data.substring(
				parametersMessagePattern.length
			);

			if ( serializedParameters ) {
				reflowForSideSkinAd();

				atlasSkinObj.refresh_skin_rails();
			}
		}
	}
}
// eslint-enable camelcase
