const clonedeep = require( 'lodash.clonedeep' );

const profile_blurb_card = clonedeep( require( './profile-blurb.prototype' ) );
const c_button = clonedeep(
	require( '../../components/c-button/c-button.prototype' )
);

profile_blurb_card.profile_blurb_classes = false;
profile_blurb_card.c_lazy_image.c_lazy_image_classes = false;
profile_blurb_card.profile_blurb_image_classes = false;
profile_blurb_card.o_social_list = false;

profile_blurb_card.c_title.c_title_classes =
	'lrv-u-font-family-primary lrv-u-text-transform-uppercase lrv-u-font-size-16 lrv-u-color-black';

profile_blurb_card.c_tagline.c_tagline_classes =
	'lrv-u-margin-tb-00 lrv-u-font-family-primary lrv-u-font-size-14@mobile-max lrv-u-font-size-16 lrv-u-font-size-18@desktop-xl';
profile_blurb_card.c_tagline_second.c_tagline_classes =
	'lrv-u-margin-tb-00 lrv-u-font-size-14@mobile-max lrv-u-font-size-16 lrv-u-font-size-18@desktop-xl lrv-u-font-family-primary lrv-u-display-block';

profile_blurb_card.c_dek.c_dek_classes =
	'lrv-u-margin-tb-050 lrv-u-font-size-16 lrv-u-font-style-italic';

profile_blurb_card.profile_blurb_c_button = 'lrv-u-text-align-center';
profile_blurb_card.profile_blurb_detail_classes = 'lrv-u-margin-t-050';

c_button.c_button_text = 'View Profile';
c_button.c_button_classes +=
	' lrv-u-display-inline-block lrv-u-margin-t-1 lrv-u-text-transform-uppercase lrv-u-font-size-14 lrv-u-background-color-black lrv-u-padding-lr-2 lrv-u-padding-tb-050 lrv-u-color-white lrv-u-color-grey-light:hover';
c_button.c_button_url = '#';
c_button.c_button_inner_classes = 'lrv-u-padding-lr-1@tablet';

profile_blurb_card.c_button = c_button;

module.exports = profile_blurb_card;
