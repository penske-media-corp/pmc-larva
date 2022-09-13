const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image = clonedeep(
	require( '../../components/c-lazy-image/c-lazy-image.prototype' )
);
const c_title = clonedeep(
	require( '../../components/c-title/c-title.prototype' )
);
const c_tagline = clonedeep(
	require( '../../components/c-tagline/c-tagline.prototype' )
);
const c_heading = clonedeep(
	require( '../../components/c-heading/c-heading.prototype' )
);

c_title.c_title_url = false;

c_heading.c_heading_url = false;

c_lazy_image.c_lazy_image_link_url = false;
c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-3x2';
c_lazy_image.c_lazy_image_alt_attr = 'Post tease thumbnail image';

module.exports = {
	o_tease_url: '#',
	o_tease_classes: 'lrv-u-flex lrv-u-align-items-center',
	o_tease_link_classes: 'lrv-u-display-contents',
	o_tease_primary_classes: 'lrv-u-flex-grow-1',
	o_tease_secondary_classes: 'lrv-u-flex-shrink-0 lrv-u-width-30p',
	c_heading,
	c_title,
	c_tagline,
	c_lazy_image,
};
