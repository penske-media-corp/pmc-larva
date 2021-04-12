// Note: this is NOT up to Larva JS standards, here:
// https://github.com/penske-media-corp/pmc-larva/wiki/JS-Authoring-Guidelines

// CSS for this lives in larva-css/larva-ui

export default class LarvaUiToggle {

	constructor( el ) {
		this.el = el;

		// Indicate the class has been created by creating this property on the DOM node.
		this.el.pmcLarvaUiToggle = this;
		this.KEY = 'LarvaUiIsHidden';

		// Bind an event listener like so:
		this.onClick = this.onClick.bind( this );
		this.el.addEventListener( 'click', this.onClick );

		this.ui = {
			button: el.querySelectorAll( '.js-LarvaUiToggle-button' ),
			panels: el.querySelectorAll( '.js-LarvaUiToggle-panel' )
		}

		this.state = {
			isHidden: false
		};
	}

	onClick() {
		localStorage.setItem( this.KEY, this.state.isHidden );

		if ( true === this.state.isHidden ) {
			this.hide();
		} else {
			this.show();
		}

	}

	hide() {
		this.state.isHidden = false;
		this.ui.panels.forEach( el => {
			el.classList.add( 'is-ui-hidden' );
		});
	}

	show() {
		this.state.isHidden = true;
		this.ui.panels.forEach( el => {
			el.classList.remove( 'is-ui-hidden' );
		});
	}

}
