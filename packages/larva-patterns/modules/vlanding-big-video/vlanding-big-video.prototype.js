const clonedeep = require( 'lodash.clonedeep' );

const vlanding_video_card = clonedeep( require( '../../modules/vlanding-video-card/vlanding-video-card.prototype' ) );
const c_title = clonedeep( require( '../../components/c-title/c-title.prototype' ) );
const c_tagline = clonedeep( require( '../../components/c-tagline/c-tagline.prototype' ) );

vlanding_video_card.c_title = false;

c_title.c_title_classes = 'lrv-u-font-size-24 lrv-u-font-size-32@desktop lrv-u-padding-b-1';
c_title.c_title_link_classes = 'lrv-u-color-black';
c_title.c_title_text = 'Bon Iger: Roseanne is Cancelled and I\'m Like Crying so Hard';

c_tagline.c_tagline_classes = 'lrv-u-color-grey-dark lrv-u-margin-t-00';

module.exports = {
	vlanding_video_card: vlanding_video_card,
	c_title: c_title,
	c_tagline: c_tagline,
	social_share: '' // TODO: Need to work on this.
};
