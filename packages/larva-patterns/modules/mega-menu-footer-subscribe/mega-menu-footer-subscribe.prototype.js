const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image_prototype = require( '../../components/c-lazy-image/c-lazy-image.prototype.js' );
const c_lazy_image = clonedeep( c_lazy_image_prototype );

const c_icon_prototype = require( '../../components/c-icon/c-icon.prototype.js' );
const c_icon = clonedeep( c_icon_prototype );

c_icon.c_icon_classes =
	'lrv-a-glue lrv-a-glue--l-0 lrv-a-glue--t-50p lrv-u-transform-translateY-n50p lrv-u-width-50';

c_lazy_image.c_lazy_image_src_url =
	'https://cdn.shopify.com/s/files/1/0238/6647/products/2019_37_540x.jpg';
c_lazy_image.c_lazy_image_placeholder_url =
	'https://cdn.shopify.com/s/files/1/0238/6647/products/2019_37_540x.jpg';
c_lazy_image.c_lazy_image_classes = 'lrv-u-padding-l-3';
c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-2x3';

module.exports = {
	footer_subscribe_classes: 'lrv-a-glue-parent lrv-u-width-100p',
	c_lazy_image,
	c_icon,
};
