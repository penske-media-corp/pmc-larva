/**
 * Ajax the SVG sprite and append a DOM hidden element
 * containing the responseText.
 *
 * @param {string} buildPath
 */
export default function( buildPath ) {

	const ajax = new XMLHttpRequest();
	const div = document.createElement( 'div' );
	const path = buildPath + '/images/svg-sprite.svg?v=1';

	ajax.open( 'GET', path, true );
	ajax.send();

	ajax.onload = function() {
		div.id = 'icon-sprite';

		// NOTE: Ignore WPCS WARNING for innerHTML, it's related to svg icon.
		// As this must be handled by innerHTML only.
		div.innerHTML = ajax.responseText; // @codingStandardsIgnoreLine

		document.body.insertBefore( div, document.body.childNodes[0]);
	};
}
