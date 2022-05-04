const cSvgPrototype = require('@penskemediacorp/larva-patterns/components/c-svg/c-svg.prototype');
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

o_text_input_group.o_text_input_group_classes = 'lrv-u-margin-b-2';
o_text_input_item = clonedeep( o_text_input_group.o_text_input_group_items[0] );
o_text_input_item.c_text_input_classes = 'lrv-u-font-size-32 lrv-u-color-white lrv-u-background-color-grey-darkest lrv-u-padding-lr-050 lrv-u-padding-tb-150 lrv-u-width-100 lrv-u-text-align-center';
o_text_input_item.c_text_input_size = 2;
o_text_input_item.c_text_input_maxlength = 4;
o_text_input_item.c_text_input_placeholder = 'DD';

o_text_input_group.o_text_input_group_items = [
	o_text_input_item,
	o_text_input_item,
	o_text_input_item
];

c_button.c_button_classes = ' lrv-u-color-white lrv-u-background-color-brand-primary lrv-u-padding-lr-2 lrv-u-padding-tb-075 lrv-u-margin-b-2 lrv-u-text-align-center lrv-u-text-transform-uppercase lrv-u-font-size-32 lrv-u-font-size-18@mobile-max';

c_dek.c_dek_text = 'Legal text.'

module.exports = {
	age_gate_classes: 'lrv-u-height-100p lrv-u-padding-t-2 lrv-u-background-color-black lrv-u-text-align-center lrv-u-color-white',
	age_gate_inner_classes: 'lrv-u-max-width-1000 lrv-u-margin-lr-auto',
	age_gate_form_classes: '',
	age_gate_error_classes: '',
	form_wrapper_classes: '',
	age_gate_footer_classes: '',
	c_heading,
	c_svg,
	o_text_input_group,
	c_button,
	c_dek
};
