const clonedeep = require( 'lodash.clonedeep' );

const c_heading = clonedeep(
	require( '../../components/c-heading/c-heading.prototype' )
);
const o_figure = clonedeep(
	require( '../../objects/o-figure/o-figure.prototype' )
);

c_heading.c_heading_text = 'Explore Their Gallery';
c_heading.c_heading_classes =
	'lrv-u-font-family-secondary lrv-u-font-size-32 lrv-u-padding-b-1';

o_figure.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-4x3';

o_figure.c_figcaption.c_figcaption_classes =
	'lrv-u-flex lrv-u-flex-direction-column lrv-u-font-size-10 lrv-u-margin-t-050';
o_figure.c_figcaption.c_figcaption_caption_classes = 'lrv-u-margin-b-025';
o_figure.c_figcaption.c_figcaption_credit_classes =
	'lrv-u-text-transform-uppercase lrv-u-color-grey-dark';

module.exports = {
	profile_gallery_classes: 'lrv-u-padding-tb-1',
	c_heading,
	galleries: [
		o_figure,
		o_figure,
		o_figure,
		o_figure,
		o_figure,
		o_figure,
		o_figure,
		o_figure,
	],
};
