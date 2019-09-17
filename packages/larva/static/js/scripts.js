window.addEventListener( 'DOMContentLoaded', function() {

	document.querySelector( '.js-hide-button' ).addEventListener( 'click', function( e ) {
		// Hide UI
		if ( ! this.classList.contains( 'is-ui-hidden' ) ) {
			document.querySelectorAll( '.js-to-hide' ).forEach( ( el ) => {
				el.classList.remove( 'js-to-hide' );
				el.classList.add( 'js-to-show' );
			});
	
			this.innerHTML = 'Hide Larva UI';
			this.classList.add( 'is-ui-hidden' );
		
		// Show UI
		} else {
			document.querySelectorAll( '.js-to-show' ).forEach( ( el ) => {
				el.classList.add( 'js-to-hide' );
				el.classList.remove( 'js-to-show' );
			});
	
			this.innerHTML = 'Show Larva UI';
			this.classList.remove( 'is-ui-hidden' );
		}
	});
});
