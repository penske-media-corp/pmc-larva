// Note: this is NOT up to Larva JS standards, here:
// https://github.com/penske-media-corp/pmc-larva/wiki/JS-Authoring-Guidelines

// CSS for this lives in larva-css/larva-ui

export default class LarvaUiToggle {

	constructor( el ) {
		this.el = el;

		// Indicate the class has been created by creating this property on the DOM node.
		this.el.pmcLarvaUiToggle = this;
		this.KEY = 'LarvaUiIsVisible';

		// Bind an event listener like so:
		this.onClick = this.onClick.bind( this );
		this.el.addEventListener( 'click', this.onClick );

		this.ui = {
			button: el.querySelectorAll( '.js-LarvaUiToggle-button' ),
			panels: el.querySelectorAll( '.js-LarvaUiToggle-panel' )
		}

		this.state = {
			isVisible: true
		};
	}

	onClick() {
		if ( true === this.state.isVisible ) {
			this.hide();
		} else {
			this.show();
		}
	}

	hide() {
		this.state.isVisible = false;
		this.ui.panels.forEach( el => {
			el.classList.add( 'is-ui-hidden' );
		});
	}

	show() {
		this.state.isVisible = true;
		this.ui.panels.forEach( el => {
			el.classList.remove( 'is-ui-hidden' );
		});
	}

}
