const clonedeep = require( 'lodash.clonedeep' );

const profile_header = clonedeep(
	require( '../../modules/profile-header/profile-header.prototype' )
);
const back_to_list = clonedeep(
	require( '../../modules/back-to-list/back-to-list.prototype' )
);
const profile_blurb = clonedeep(
	require( '../../modules/profile-blurb/profile-blurb.prototype' )
);
const profile_body = clonedeep(
	require( '../../modules/profile-body/profile-body.prototype' )
);
const profile_gallery = clonedeep(
	require( '../../modules/profile-gallery/profile-gallery.prototype' )
);
const profile_related_stories = clonedeep(
	require( '../../modules/profile-related-stories/profile-related-stories.prototype' )
);

module.exports = {
	profile_header,
	back_to_list,
	profile_blurb,
	profile_body,
	profile_gallery,
	profile_related_stories,
};
