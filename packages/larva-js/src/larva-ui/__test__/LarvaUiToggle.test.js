import LarvaUiToggle from '../LarvaUiToggle';

document.querySelector( '.test' ).innerHTML = `
<button class="js-LarvaUiToggle-button"></button>
<div class="js-LarvaUiToggle-panel"></div>
`;

describe( 'Larva UI Toggle', () => {

	it( 'should show larva ui by default', () => {
		const button = new LarvaUiToggle( document.querySelector( '.js-LarvaUiToggle-button' ) );
		const panel = document.querySelector( '.js-LarvaUiToggle-panel' );

		expect( panel.classList.contains( 'is-ui-hidden' ) ).toBe( false );
		expect( button.state.isVisible ).toBe( true );
	} );

	it( 'should hide larva ui when clicked', () => {
		const button = new LarvaUiToggle( document.querySelector( '.js-LarvaUiToggle-button' ) );
		const panel = document.querySelector( '.js-LarvaUiToggle-panel' );

		button.onClick();

		expect( panel.classList.contains( 'is-ui-hidden' ) ).toBe( true );
	} );

	it( 'should show larva ui when clicked again', () => {
		const button = new LarvaUiToggle( document.querySelector( '.js-LarvaUiToggle-button' ) );
		const panel = document.querySelector( '.js-LarvaUiToggle-panel' );

		button.onClick();
		button.onClick();

		expect( panel.classList.contains( 'is-ui-hidden' ) ).toBe( false );
	} );
});