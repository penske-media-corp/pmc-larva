const clonedeep = require( 'lodash.clonedeep' );

const c_svg_prototype = require( '@penskemediacorp/larva-patterns/components/c-svg/c-svg.prototype' );
const c_heading = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype' )
);
const o_input_group = clonedeep(
	require( '@penskemediacorp/larva-patterns/objects/o-input-group/o-input-group.prototype' )
);
const c_button = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-button/c-button.prototype' )
);
const c_dek = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype' )
);

const c_svg_header = clonedeep( c_svg_prototype );
c_svg_header.c_svg_name = 'brand-logo-white';
c_svg_header.c_svg_classes =
	'lrv-u-width-150 lrv-u-margin-lr-auto lrv-u-margin-b-2';

c_heading.c_heading_classes += ' lrv-a-font-primary-l lrv-u-margin-b-2';
c_heading.c_heading_text = 'You must be 21 to enter.';

o_input_group.o_input_group_class = 'lrv-u-margin-b-2';
o_input_group_item = clonedeep( o_input_group.o_input_group_items[ 0 ] );
o_input_group_item.c_input_class =
	'lrv-a-font-primary-m lrv-u-color-white lrv-u-background-color-grey-darkest lrv-u-padding-lr-050 lrv-u-padding-tb-150 lrv-u-width-100 lrv-u-text-align-center';
o_input_group_item.c_input_size_attr = 2;
o_input_group_item.c_input_maxlength_attr = 4;

o_input_day_item = clonedeep( o_input_group_item );
o_input_month_item = clonedeep( o_input_group_item );
o_input_year_item = clonedeep( o_input_group_item );

o_input_month_item.c_input_placeholder_attr = 'MM';
o_input_month_item.c_input_id_attr = 'pmc-age-gate-month';
o_input_month_item.c_input_error_attr = 'Please enter a valid month';
o_input_month_item.c_input_size_attr = 4;
o_input_month_item.c_input_maxlength_attr = 2;

o_input_day_item.c_input_placeholder_attr = 'DD';
o_input_day_item.c_input_id_attr = 'pmc-age-gate-day';
o_input_day_item.c_input_error_attr = 'Please enter a valid day';
o_input_day_item.c_input_size_attr = 4;
o_input_day_item.c_input_maxlength_attr = 2;

o_input_year_item.c_input_placeholder_attr = 'YYYY';
o_input_year_item.c_input_id_attr = 'pmc-age-gate-year';
o_input_year_item.c_input_error_attr = 'Please enter a valid year';
o_input_year_item.c_input_size_attr = 4;
o_input_year_item.c_input_maxlength_attr = 4;

o_input_group.o_input_group_items = [
	o_input_month_item,
	o_input_day_item,
	o_input_year_item,
];

c_button.c_button_text = 'View';
c_button.c_button_classes =
	' lrv-u-margin-t-2 lrv-u-color-white lrv-u-background-color-brand-primary lrv-u-padding-lr-2 lrv-u-padding-tb-075 lrv-u-margin-b-2 lrv-u-text-align-center lrv-u-text-transform-uppercase lrv-a-font-primary-m';

c_dek.c_dek_classes = 'lrv-a-font-primary-xs';
c_dek.c_dek_text = 'Legal text.';

module.exports = {
	age_gate_class:
		'lrv-u-height-100p lrv-u-padding-t-2 lrv-u-background-color-black lrv-u-text-align-center lrv-u-color-white',
	age_gate_inner_class: 'lrv-u-max-width-1000 lrv-u-margin-lr-auto',
	age_gate_form_class: 'lrv-u-border-b-1',
	age_gate_error_class: 'lrv-a-font-primary-s',
	form_wrapper_class: '',
	age_gate_footer_class: 'lrv-u-border-t-1 lrv-u-margin-t-025',
	c_heading,
	c_svg_header,
	o_input_group,
	c_button,
	c_dek,
};
