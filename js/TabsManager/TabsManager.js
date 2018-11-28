/**
 *
 * TabsManager from Variety.
 *
 * @note: This is not following the standard module pattern.
 * Refer to the Slider module for stylistic guidelines.
 *
*/

export default class TabsManager {

	/**
	 * Initialize.
	 *
	 * @returns {void}
	 */
	init() {

		jQuery( '[data-tabs]' ).each( ( index, el ) => {
			const $el = jQuery( el );
			const customInteraction = jQuery( el ).data( 'tabs' );
			this.addEventHandlers( $el, customInteraction );
		});
	}

	/**
	 * Add event handlers.
	 *
	 * @param {jQuery} $el Tabs container
	 */
	addEventHandlers( $el, customInteract ) {
		let customInteraction = customInteract;
		const $targets = jQuery( '[data-tabs-toggle]', $el );

		// Handle taps on hover elements as clicks through the panels on the phones.
		if ( 'mouseenter' === customInteraction ) {
			$targets.on( 'click', ( e ) => {
				e.preventDefault();
				const $toggle = jQuery( e.currentTarget );

				if ( $toggle.hasClass( 'is-active' ) || 768 >= jQuery( window ).width() ) {
					const panelId = $toggle.attr( 'href' );
					const $panel = $el.find( panelId );
					const panelUrl = $panel.find( 'a' ).attr( 'href' );

					if ( panelUrl ) {
						window.location.href = panelUrl;
					}
				}
			});
		}

		// Always rely on tapping on mobile devices, since hover is not available.
		if ( ! customInteraction || 1024 >= ( $( window ).width() ) ) {
			customInteraction = 'click';
		}

		$targets.on( customInteraction, ( e ) => {
			const $toggle = jQuery( e.currentTarget );
			if ( $toggle.hasClass( 'is-active' ) ) {
				e.preventDefault();
				return;
			}

			const panelId = $toggle.attr( 'href' );
			const $panel = $el.find( panelId );
			if ( 0 !== $panel.length ) {

				const $panelsWrapper = $el.closest( '[data-tabs]' );

				e.preventDefault();

				$panelsWrapper
					.addClass( 'is-changing' )
					.find( '[data-tabs-link]' )
					.attr( 'href', $panel.data( 'tabsHref' ) );

				$el
					.find( '[data-tabs-toggle].is-active, [data-tabs-panel].is-active' )
					.removeClass( 'is-active' );

				$toggle.addClass( 'is-active' );
				$panel.addClass( 'is-active' );

				setTimeout( () => {
					$panelsWrapper.removeClass( 'is-changing' );
				}, 50 );
			}
		});
	}
};
