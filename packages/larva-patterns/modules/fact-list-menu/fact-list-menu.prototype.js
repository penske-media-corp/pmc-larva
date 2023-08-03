const clonedeep = require( 'lodash.clonedeep' );

/**
 * Larva includes.
 */
const c_link_prototype = require( '@penskemediacorp/larva-patterns/components/c-link/c-link.prototype.js' );

/**
 * Module includes.
 */
const c_link = clonedeep( c_link_prototype );

/* Generate a list of menu item titles. */
const titles = [ 'Wikipedia', 'IMDB', 'Amazon', 'Google' ];

/* Generate a list of `c_span` links. */
const fact_list_menu_items = Array.from( titles, ( title, index ) => ( {
	...c_link,
	c_link_text: title,
	c_link_classes: 'lrv-u-color-black',
	c_link_url: `#test-link-${ index + 1 }`,
} ) );

module.exports = {
	fact_list_menu_classes: 'lrv-u-margin-t-1',
	fact_list_menu_ul_classes: [
		'lrv-a-unstyle-list',
		'lrv-u-border-b-1',
		'lrv-u-border-t-1',
		'lrv-u-display-inline-flex',
		'lrv-u-flex-wrap-wrap',
		'lrv-u-padding-tb-075',
		'lrv-a-term-content-grid__fact-list-menu',
	].join( ' ' ),
	fact_list_menu_li_classes: [
		'a-font-secondary',
		'lrv-u-text-transform-uppercase',
	].join( ' ' ),
	fact_list_menu_items,
};
