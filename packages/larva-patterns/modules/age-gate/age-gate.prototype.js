const cSvgPrototype = require('@penskemediacorp/larva-patterns/components/c-svg/c-svg.prototype');
const clonedeep = require('lodash.clonedeep');

const c_svg = clonedeep(require('@penskemediacorp/larva-patterns/components/c-svg/c-svg.prototype'));
const c_heading = clonedeep(require('@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype'));
const o_text_input_group = clonedeep(require('@penskemediacorp/larva-patterns/objects/o-text-input-group/o-text-input-group.prototype'));
const c_button = clonedeep(require('@penskemediacorp/larva-patterns/components/c-button/c-button.prototype'));
const c_tagline = clonedeep(require('@penskemediacorp/larva-patterns/components/c-tagline/c-tagline.prototype'));
const c_dek = clonedeep(require('@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype'));

c_svg.c_svg_name = 'brand-logo-white';
c_svg.c_svg_classes = 'lrv-u-width-150';

module.exports = {
	age_gate_classes: 'lrv-u-height-100p lrv-u-background-color-black lrv-u-text-align-center lrv-u-color-white',
	age_gate_inner_classes: '',
	age_gate_form_classes: '',
	age_gate_error_classes: '',
	form_wrapper_classes: '',
	age_gate_footer_classes: '',
	c_heading,
	c_svg,
	o_text_input_group,
	c_button,
	c_tagline,
	c_dek
};
