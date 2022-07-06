const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image = clonedeep( require( '../../components/c-lazy-image/c-lazy-image.prototype' ) );
const c_title = clonedeep( require( '../../components/c-title/c-title.prototype' ) );
const c_tagline = clonedeep( require( '../../components/c-tagline/c-tagline.prototype' ) );
const c_dek = clonedeep( require( '../../components/c-dek/c-dek.prototype' ) );
const c_button = clonedeep( require( '../../components/c-button/c-button.prototype' ) );

c_lazy_image.c_lazy_image_classes = 'u-margin-lr-n10@mobile-max';
c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-4x3';

c_title.c_title_text = 'Debra and Leon Black';
c_title.c_title_classes = 'lrv-u-font-family-primary lrv-u-text-transform-uppercase lrv-u-font-size-26@mobile-max lrv-u-font-size-36 lrv-u-color-black';
c_title.c_title_url = false;
c_title.c_title_link_classes = 'lrv-u-color-black';

c_tagline.c_tagline_text = 'Title Here';
c_tagline.c_tagline_classes = 'lrv-u-margin-tb-00 lrv-u-font-family-primary lrv-u-font-size-22@mobile-max lrv-u-font-size-24';

c_dek.c_dek_text = 'Massa tincidunt dui ut ornare lectus sit. Dolor purus non enim praesent elementum facilisis leo. Aliquet eget sit amet tellus cras adipiscing enim eu. ';
c_dek.c_dek_classes = 'lrv-u-font-size-20 lrv-u-font-style-italic';

c_button.c_button_text = 'View Profile';
c_button.c_button_classes += ' lrv-u-display-inline-block lrv-u-margin-t-1 lrv-u-text-transform-uppercase lrv-u-font-size-14 lrv-u-background-color-black lrv-u-padding-lr-2 lrv-u-padding-tb-050 lrv-u-color-white lrv-u-color-grey-light:hover';
c_button.c_button_url = '#';
c_button.c_button_inner_classes = 'lrv-u-padding-lr-1@tablet';

module.exports = {
	profile_block_classes: 'lrv-u-flex lrv-u-flex-direction-column@mobile-max',
	profile_block_image_classes: 'lrv-u-flex-shrink-0 lrv-u-margin-r-1@tablet',
	profile_block_detail_classes: '',
	profile_block_c_button_classes: '',
	c_button,
	c_lazy_image,
	c_title,
	c_tagline,
	c_dek,
}
