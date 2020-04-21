
export default class MegaMenu {
	constructor( el ) {
		this.el = el;
		this.inputs = [ ... this.el.querySelectorAll( 'input' ) ];
		this.container = document.documentElement;

		this.inputs.forEach( input => {
			input.addEventListener( 'focus', () => this.handleFocus( input ) );
		} );

	}

	handleFocus( input ) {
		this.el.scrollTo( 0, input.offsetTop );
	}

}
