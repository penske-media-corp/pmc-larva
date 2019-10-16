const clonedeep = require( 'lodash.clonedeep' );
const c_lazy_image_prototype = require( '../../components/c-lazy-image/c-lazy-image.prototype' );
const c_lazy_image = clonedeep( c_lazy_image_prototype );

c_lazy_image.c_lazy_image_crop_class += ' lrv-u-max-width-150';

module.exports = {
	o_sponsored_by_classes: 'lrv-u-flex lrv-u-align-items-center',
	o_sponsored_by_title_classes: 'lrv-u-color-grey-medium lrv-u-font-family-georgia lrv-u-font-size-10 lrv-u-margin-r-050',
	o_sponsored_by_text: 'Sponsored by',
	c_lazy_image: c_lazy_image
}
