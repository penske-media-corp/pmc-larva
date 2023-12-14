const clonedeep = require( 'lodash.clonedeep' );

const story = clonedeep( require( '../../modules/story/story.prototype.js' ) );
const c_heading = clonedeep(
	require( '../../components/c-heading/c-heading.prototype' )
);

c_heading.c_heading_text = 'Latest News';
c_heading.c_heading_classes =
	'lrv-u-font-family-secondary lrv-u-font-size-28 lrv-u-font-size-40@tablet lrv-u-font-size-46@desktop-xl lrv-u-padding-r-1';

c_heading.c_heading_outer = true;
c_heading.c_heading_outer_classes = 'a-heading-border';

module.exports = {
	c_heading,
	profile_landing_river_id_attr: '',
	profile_landing_river_classes: ' lrv-u-padding-t-2',
	profile_landing_river_stories: [ story, story, story ],
};
