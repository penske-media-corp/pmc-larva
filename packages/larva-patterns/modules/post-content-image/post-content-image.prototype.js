const clonedeep = require( 'lodash.clonedeep' );
const o_figure = clonedeep(
	require( '../../objects/o-figure/o-figure.prototype.js' )
);

o_figure.c_lazy_image.c_lazy_image_crop_style_attr = '';
o_figure.c_lazy_image.c_lazy_image_link_url = '';

o_figure.c_figcaption.c_figcaption_classes =
	'lrv-u-font-size-12 lrv-u-flex lrv-u-flex-direction-column lrv-u-padding-tb-025';
o_figure.c_figcaption.c_figcaption_caption_classes =
	'lrv-u-font-size-14@desktop';
o_figure.c_figcaption.c_figcaption_credit_classes =
	'lrv-u-text-transform-uppercase lrv-u-color-grey';

module.exports = {
	post_content_image_classes: '',
	o_figure,
};
