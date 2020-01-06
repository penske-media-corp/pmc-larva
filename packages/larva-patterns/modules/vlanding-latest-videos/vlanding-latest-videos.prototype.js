const clonedeep = require( 'lodash.clonedeep' );

const c_heading = clonedeep( require( '../../components/c-heading/c-heading.prototype' ) );
const vlanding_video_card = clonedeep( require( '../../modules/vlanding-video-card/vlanding-video-card.prototype' ) );

c_heading.c_heading_text = 'The Latest Videos';

c_heading.c_heading_classes = 'lrv-u-font-size-18 lrv-u-font-size-24@desktop lrv-u-font-size-28@desktop-xl lrv-u-border-b-1 lrv-u-border-color-grey-light lrv-u-padding-b-050 lrv-u-margin-tb-1';

module.exports = {
	c_heading: c_heading,
	latest_videos: [
		vlanding_video_card,
		vlanding_video_card,
		vlanding_video_card,
		vlanding_video_card,
		vlanding_video_card,
		vlanding_video_card
	]
};
