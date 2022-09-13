module.exports = async (page, scenario, vp) => {
	console.log('SCENARIO > ' + scenario.label);

	await page.evaluate(() => {
		document.querySelectorAll('.js-LarvaUiToggle-panel').forEach( el => {
			el.classList.add( 'lrv-a-hidden' );
		});
	});

	await require('./clickAndHoverHelper')(page, scenario);
};
