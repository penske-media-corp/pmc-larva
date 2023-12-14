const clonedeep = require( 'lodash.clonedeep' );

const profile_blurb = clonedeep(
	require( '../profile-blurb/profile-blurb.prototype' )
);
const c_heading = clonedeep(
	require( '../../components/c-heading/c-heading.prototype' )
);

c_heading.c_heading_classes =
	'lrv-u-text-align-center lrv-u-font-size-36 lrv-u-font-size-46@desktop-xl lrv-u-font-family-secondary lrv-u-padding-b-2';
c_heading.c_heading_text = 'Replace This Text';

module.exports = {
	profile_highlights_id_attr: 'profile-highlights',
	profile_highlights_classes: '',
	profile_highlights_slider_outer_classes: '',
	profile_highlights_slider_classes: 'lrv-u-padding-a-1',
	c_heading,
	slider_items: [
		profile_blurb,
		profile_blurb,
		profile_blurb,
		profile_blurb,
		profile_blurb,
	],
};
