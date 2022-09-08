const clonedeep = require( 'lodash.clonedeep' );

const o_icon_button_search_prototype = require( '../../objects/o-icon-button/o-icon-button.search' );
const search_form_prototype = require( '../search-form/search-form.prototype' );

const search_form = clonedeep( search_form_prototype );
search_form.search_form_input_placeholder_attr = 'Search...';

const o_icon_button_search = clonedeep( o_icon_button_search_prototype );
o_icon_button_search.o_icon_button_classes += ' js-ExpandableSearch-trigger';
o_icon_button_search.c_icon.c_icon_classes =
	' lrv-u-display-block lrv-u-width-24 lrv-u-height-24 lrv-u-color-brand-primary:hover';

module.exports = {
	expandable_search_outer_classes:
		'js-ExpandableSearch lrv-u-flex lrv-u-margin-l-auto lrv-a-glue-parent',
	expandable_search_classes:
		'js-ExpandableSearch-target lrv-a-unstyle-button lrv-u-color-black js-fade js-fade-is-out',
	expandable_search_inner_classes:
		'lrv-u-height-auto lrv-a-glue lrv-a-glue--l-0 lrv-a-glue--t-50p lrv-u-flex lrv-u-transform-translateY-n50p',
	o_icon_button_search,
	search_form,
};
