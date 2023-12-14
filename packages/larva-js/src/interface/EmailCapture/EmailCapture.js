/**
 * EmailCapture
 *
 * This module is intended to work with ExactTarget email newsletter capture fields.
 * Email validation is handled via the native browser and a `require` attribute. This
 * code is for updating the `successPage` hidden input value with the user email that
 * Exacttarget uses to direct users to a success page for a specific brand.
 *
 * This JS pattern requires the following attributes added to HTML:
 * - `.lrv-js-EmailCapture` - added to the containing `form` element to initialize the pattern.
 * - `data-email-capture-success-url` - added to the hidden input with the name `__successPage`
 *   and value attribute set to success page URL.
 *
 *
 * The UI pattern `c-email-field` can be used for the email input portion of this feature.
 *
 * @since 2019-04-15
 */

export default class EmailCapture {
	constructor( el ) {
		this.el = el;

		this.emailInput = this.el.querySelector( 'input[type="email"]' );
		this.successEl = this.el.querySelector(
			'[data-email-capture-success-url]'
		);

		this.updateSuccessUrlInputValue =
			this.updateSuccessUrlInputValue.bind( this );

		this.successUrlBase = this.getSuccessUrlBase();

		this.emailInput.addEventListener(
			'blur',
			this.updateSuccessUrlInputValue
		);
		this.emailInput.addEventListener(
			'keyup',
			this.updateSuccessUrlInputValue
		);
	}

	getSuccessUrlBase() {
		if ( null !== this.successEl ) {
			return this.successEl.dataset.emailCaptureSuccessUrl;
		}
		return undefined;
	}

	updateSuccessUrlInputValue( e ) {
		const email = encodeURIComponent( e.target.value );

		if ( undefined !== this.successUrlBase ) {
			this.successEl.value = `${ this.successUrlBase }&email=${ email }`;
		}
	}
}
