/**
 * SelectNav
 *
 * Initially copied from Deadline, this JS module redirects the window to the URL stored in a
 * data attribute of an `option` element.
 * The HTML attributes required for this pattern are:
 * - class js-SelectNav to initiate the module, on a `nav` element
 * - a select element with class js-SelectNav-select
 * - data-select-url on the option
 * It is build to work with the patterns `o-select-nav` and `c-select-option`
 *
 * @since 11-22-2019
 */

export default class SelectNav {
	constructor( el ) {
		this.el = el;

		this.selectEl = el.querySelector( '.js-SelectNav-select' );

		// If there is a class js-SelectNav-redirect, then only redirect.
		if ( el.classList.contains( 'js-SelectNav-redirect' ) ) {
			this.selectEl.addEventListener(
				'change',
				this.onChange.bind( this )
			);
		}
	}

	onChange() {
		const redirectTo =
			this.selectEl.options[ this.selectEl.selectedIndex ].dataset
				.selectUrl;
		if ( redirectTo ) {
			window.location.href = redirectTo;
		}
	}
}
