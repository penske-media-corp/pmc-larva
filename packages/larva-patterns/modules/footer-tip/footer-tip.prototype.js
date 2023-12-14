const clonedeep = require( 'lodash.clonedeep' );

const c_button = clonedeep(
	require( '../../components/c-button/c-button.stripped' )
);
const c_title = clonedeep(
	require( '../../components/c-title/c-title.prototype' )
);
const c_tagline = clonedeep(
	require( '../../components/c-tagline/c-tagline.prototype' )
);

c_button.c_button_classes +=
	'lrv-u-font-size-12 lrv-u-text-transform-uppercase lrv-u-font-weight-bold lrv-u-color-white lrv-u-color-grey-light:hover lrv-u-background-color-black lrv-a-icon-after lrv-a-icon-arrow-right lrv-a-icon-invert';
c_button.c_button_text = 'Send Us a Tip';
c_button.c_button_url = 'https://google.com';
c_button.c_button_inner_classes =
	'lrv-u-color-white lrv-u-color-grey-light:hover';

c_title.c_title_classes = 'lrv-u-margin-b-025 lrv-u-font-family-primary';
c_title.c_title_text = 'Have a Tip?';

c_tagline.c_tagline_classes =
	'lrv-u-font-size-14 lrv-u-font-family-basic u-font-style-italic';
c_tagline.c_tagline_text =
	'We want to hear from you! Send us a tip using our anonymous form.';

module.exports = {
	footer_tip_classes:
		'lrv-u-text-align-center lrv-u-color-white lrv-u-background-color-black',
	c_title,
	c_tagline,
	c_button,
};
