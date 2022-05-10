const clonedeep = require('lodash.clonedeep');

const c_svg = clonedeep(require('@penskemediacorp/larva-patterns/components/c-svg/c-svg.prototype'));
const c_heading = clonedeep(require('@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype'));
const o_text_input_group = clonedeep(require('@penskemediacorp/larva-patterns/objects/o-text-input-group/o-text-input-group.prototype'));
const c_button = clonedeep(require('@penskemediacorp/larva-patterns/components/c-button/c-button.prototype'));
const c_dek = clonedeep(require('@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype'));

c_svg.c_svg_name = 'brand-logo-white';
c_svg.c_svg_classes = 'lrv-u-width-150 lrv-u-margin-lr-auto lrv-u-margin-b-2';

c_heading.c_heading_classes += ' lrv-u-margin-b-2';
c_heading.c_heading_text = 'You must be 21 to enter.';

o_text_input_group.input_group_class = 'lrv-u-margin-b-2';
o_text_input_item = clonedeep( o_text_input_group.o_text_input_group_items[0] );
o_text_input_item.input_class = 'lrv-u-font-size-32 lrv-u-color-white lrv-u-background-color-grey-darkest lrv-u-padding-lr-050 lrv-u-padding-tb-150 lrv-u-width-100 lrv-u-text-align-center';
o_text_input_item.input_size_attr = 2;
o_text_input_item.input_maxlength_attr = 4;

o_text_input_day = clonedeep( o_text_input_item );
o_text_input_month = clonedeep( o_text_input_item );
o_text_input_year = clonedeep( o_text_input_item );

o_text_input_day.placeholder_attr = 'DD';
o_text_input_month.placeholder_attr = 'MM';
o_text_input_year.placeholder_attr = 'YYYY';

o_text_input_group.o_text_input_group_items = [
	o_text_input_day,
	o_text_input_month,
	o_text_input_year
];

c_button.c_button_classes = ' lrv-u-color-white lrv-u-background-color-brand-primary lrv-u-padding-lr-2 lrv-u-padding-tb-075 lrv-u-margin-b-2 lrv-u-text-align-center lrv-u-text-transform-uppercase lrv-u-font-size-32 lrv-u-font-size-18@mobile-max';

c_dek.c_dek_text = 'Legal text.'

module.exports = {
	age_gate_class: 'lrv-u-height-100p lrv-u-padding-t-2 lrv-u-background-color-black lrv-u-text-align-center lrv-u-color-white',
	age_gate_inner_class: 'lrv-u-max-width-1000 lrv-u-margin-lr-auto',
	age_gate_form_class: 'lrv-u-border-b-1',
	age_gate_error_class: '',
	form_wrapper_class: '',
	age_gate_footer_class: 'lrv-u-border-t-1 lrv-u-margin-t-025',
	c_heading,
	c_svg,
	o_text_input_group,
	c_button,
	c_dek
};
