const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_magazine_image_prototype = require( '../../components/c-lazy-image/c-lazy-image.prototype' );
const c_lazy_magazine_image = clonedeep( c_lazy_magazine_image_prototype );

c_lazy_magazine_image.c_lazy_image_classes =
	'lrv-u-flex-shrink-0 lrv-u-margin-r-2 lrv-u-width-300 a-hidden@desktop-xl-max';
c_lazy_magazine_image.c_lazy_image_src_url =
	'https://cdn.shopify.com/s/files/1/0238/6647/products/2019_37_540x.jpg';
c_lazy_magazine_image.c_lazy_image_placeholder_url =
	'https://cdn.shopify.com/s/files/1/0238/6647/products/2019_37_540x.jpg';
c_lazy_magazine_image.c_lazy_image_crop_class = '';
c_lazy_magazine_image.c_lazy_image_link_url = '/subscribe-us/';
c_lazy_magazine_image.c_lazy_image_srcset_attr =
	'https://cdn.shopify.com/s/files/1/0238/6647/products/2019_37_540x.jpg 240w,https://cdn.shopify.com/s/files/1/0238/6647/products/2019_37_540x.jpg 320w,https://cdn.shopify.com/s/files/1/0238/6647/products/2019_37_540x.jpg 500w,https://cdn.shopify.com/s/files/1/0238/6647/products/2019_37_540x.jpg 640w,https://cdn.shopify.com/s/files/1/0238/6647/products/2019_37_540x.jpg 1024w';

module.exports = {
	c_lazy_magazine_image,
};
