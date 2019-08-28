window.addEventListener( 'DOMContentLoaded', function() {

	document.querySelector( '.js-hide-button' ).addEventListener( 'click', function( e ) {
		document.querySelectorAll( '.js-to-hide' ).forEach( ( el ) => {
			el.style.display = 'none';
		})
	});
});
