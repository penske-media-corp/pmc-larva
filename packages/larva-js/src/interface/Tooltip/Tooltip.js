/**
 * JS class to create/handle tooltips
 *
 * * The required selectors for this script are:
 * - .js-Tooltip-parent - Added to the parent of tooltip which opens the tooltip on hover/focus
 * - .js-Tooltip - Added to the container of the actual tooltip which is displayed on parents hover/focus.
 *
 * Example:
 * <button class="js-Tooltip-parent">
 * Tooltip trigger
 * <div class="js-Tooltip">Tooltip content</div>
 * </button>
 *
 * The script adds `is-Tooltip-open` class to the tooltip parent container the relevant CSS needs
 * to be added in theme to show hide the tooltip based on this class.
 * Use case scenario for this script is the author details module on the single post which should stay open on
 * hover/focus due to accesibility requirements.
 */

export default class Tooltip {
	/**
	 * Class constructor
	 *
	 * @param {Object} el Tooltip selector
	 */
	constructor( el ) {
		this.el = el;
		this.setupHooks();
	}

	/**
	 * Method to set up event listeners
	 *
	 * @return {void}
	 */
	setupHooks() {
		document.addEventListener( 'click', ( e ) => {
			this.hideAll( e );
		} ); // hide all tooltips when clicked anywhere on the page

		document.addEventListener( 'keydown', ( e ) => {
			if ( 'undefined' === typeof e || 'undefined' === e.key ) {
				return;
			}

			if ( 'escape' === e.key.toLowerCase() ) {
				this.hideAll();
			}
		} ); // hide all tooltips when escape key is pressed

		this.el.addEventListener( 'mouseover', ( e ) => {
			this.show( e );
		} ); // show tooltip on hover

		this.el.addEventListener(
			'focus',
			( e ) => {
				this.show( e );
			},
			true
		); // show tooltip when triggered is focused on by keyboard

		this.el.addEventListener( 'click', ( e ) => {
			this.show( e );
		} ); // show tooltip when trigger is clicked

		const tooltip = [ ...document.querySelectorAll( '.js-Tooltip' ) ];

		tooltip.forEach( ( el ) => {
			el.addEventListener( 'click', ( e ) => {
				this.stopPropagation( e );
			} );
		} );
	}

	/**
	 * Method to stop propagation for event passed to it
	 *
	 * @param {Object} e
	 *
	 * @return {void}
	 */
	stopPropagation( e ) {
		if ( 'undefined' === typeof e ) {
			return;
		}

		e.stopPropagation();
	}

	/**
	 * Method to show the current tooltip bubble
	 *
	 * @param {Object} e
	 *
	 * @return {void}
	 */
	show( e ) {
		if ( 'undefined' === typeof e || 'undefined' === e.target ) {
			return;
		}

		this.el.classList.add( 'is-Tooltip-open' );

		this.stopPropagation( e ); // we don't want this event handled further by anything else
	}

	/**
	 * Method to hide all tooltip bubble elements
	 *
	 * @return {void}
	 */
	hideAll() {
		this.el.classList.remove( 'is-Tooltip-open' );
	}
}

//EOF
