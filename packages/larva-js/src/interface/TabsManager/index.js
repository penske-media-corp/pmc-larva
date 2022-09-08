import TabsManager from './TabsManager';

export default function initTabsManager() {
	const tabs = [ ...document.querySelectorAll( '.js-Tabs' ) ];

	if ( tabs.length ) {
		tabs.forEach( ( el ) => ( el.pmcTabsManager = new TabsManager( el ) ) );
	}
}
