const clonedeep = require( 'lodash.clonedeep' );
const c_dek = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype' )
);

module.exports = {
	section_heading_class:
		'lrv-u-width-50p@desktop lrv-u-text-align-center lrv-u-margin-lr-auto',
	section_heading_level_text: '2',
	section_heading_classes: '',
	section_heading_color_class: '',
	section_heading_text_align_class: '',
	section_heading_typography_class: 'lrv-a-font-accent-m',
	section_heading_background_color_class: '',
	section_heading_markup: 'Section Heading',
	c_dek,
};
