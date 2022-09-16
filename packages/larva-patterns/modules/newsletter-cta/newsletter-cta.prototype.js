const clonedeep = require( 'lodash.clonedeep' );

const c_heading = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype' )
);
const c_tagline = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-tagline/c-tagline.prototype' )
);
const c_button = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-button/c-button.brand-basic' )
);

c_heading.c_heading_text = 'Newsletters';
c_heading.c_heading_classes = 'lrv-u-text-transform-uppercase';
c_tagline.c_tagline_text = 'Sign up for news straight to your inbox every day';
c_tagline.c_tagline_classes = 'lrv-u-margin-a-00 lrv-u-margin-b-150@mobile-max';
c_button.c_button_text = 'Subscribe';
c_button.c_button_url = '#';
c_button.c_button_target_attr = '_blank';
c_button.c_button_classes +=
	' lrv-a-unstyle-link lrv-u-color-white:hover lrv-u-background-color-black:hover lrv-a-hover-effect';

module.exports = {
	newsletter_cta_classes:
		'lrv-u-margin-tb-125 lrv-u-margin-tb-150@desktop-xl lrv-u-padding-tb-2 lrv-u-flex lrv-u-justify-content-space-between lrv-u-border-t-1 lrv-u-border-b-1 lrv-u-align-items-center lrv-u-flex-direction-column@mobile-max lrv-u-padding-a-2@mobile-max',
	newsletter_cta_inner_classes: 'lrv-u-text-align-center@mobile-max',
	c_heading,
	c_tagline,
	c_button,
};
