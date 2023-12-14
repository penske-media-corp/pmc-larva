const clonedeep = require( 'lodash.clonedeep' );

const c_heading = clonedeep(
	require( '../../components/c-heading/c-heading.prototype' )
);
const o_checkbox_input_list = clonedeep(
	require( '../../objects/o-checkbox-input-list/o-checkbox-input-list.prototype' )
);
const c_button = clonedeep(
	require( '../../components/c-button/c-button.prototype' )
);

c_heading.c_heading_text = 'Filter:';
c_heading.c_heading_classes =
	'lrv-u-font-size-20 lrv-u-text-transform-uppercase lrv-u-border-b-1 lrv-u-margin-b-1 lrv-u-padding-b-025';

o_checkbox_input_list.c_title.c_title_text = 'Location';
o_checkbox_input_list.c_title.c_title_classes =
	'lrv-u-font-family-primary lrv-u-font-size-14 lrv-u-margin-b-025 lrv-u-text-transform-uppercase lrv-u-font-weight-bold';
o_checkbox_input_list.o_checkbox_input_list_items_classes +=
	' lrv-u-font-family-primary lrv-u-font-size-12 lrv-u-line-height-large';

c_button.c_button_text = 'Filter';
c_button.c_button_classes +=
	' lrv-u-text-transform-uppercase lrv-u-background-color-black lrv-u-color-white lrv-u-font-size-12 lrv-u-font-family-primary lrv-u-margin-t-1 lrv-u-color-grey-light:hover lrv-u-padding-lr-2 lrv-u-padding-tb-050';

module.exports = {
	profile_filter_classes: 'lrv-u-padding-a-1',
	c_heading,
	o_checkbox_input_list: [
		o_checkbox_input_list,
		o_checkbox_input_list,
		o_checkbox_input_list,
	],
	c_button,
};
