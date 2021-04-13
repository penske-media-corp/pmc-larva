import LarvaUiToggle from '../LarvaUiToggle';

describe( 'Larva UI Toggle', () => {
	let button, panel;

	beforeEach(() => {
		document.querySelector( '.test' ).innerHTML = `
		<button class="js-LarvaUiToggle-button"></button>
		<div class="js-LarvaUiToggle-panel"></div>
		`;

		button = new LarvaUiToggle( document.querySelector( '.js-LarvaUiToggle-button' ) );
		panel = document.querySelector( '.js-LarvaUiToggle-panel' );
	});

	it( 'should show larva ui by default', () => {
		expect( panel.classList.contains( 'is-ui-hidden' ) ).toBe( false );
	} );

	it( 'should hide larva ui when clicked', () => {
		button.onClick(); // Should hide

		expect( panel.classList.contains( 'is-ui-hidden' ) ).toBe( true );
	} );

});