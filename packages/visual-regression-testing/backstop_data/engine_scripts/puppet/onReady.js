module.exports = async (page, scenario, vp) => {
	console.log('SCENARIO > ' + scenario.label);
	
	await page.evaluate(() => {
		let ids = [];

		// Leave commented until we are testing production screenshots.
		// if ( typeof googletag !== typeof undefined ) {
		// 	ids.push( ... googletag.pubads().getSlots().map( slot => slot.getSlotElementId() ) );
		// 	ids.push( 'jpsuperheader', 'skin-ad-section' ); // IDs that are not part of googetag array
		// }

		// ids.forEach( id => {
		// 	if ( null !== document.getElementById( id ) ) {
		// 		document.getElementById( id ).style.cssText = 'display: none !important';
		// 	}
		// });
	});
	
	await require('./clickAndHoverHelper')(page, scenario);
};
