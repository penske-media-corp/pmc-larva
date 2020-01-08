const clonedeep = require( 'lodash.clonedeep' );

const vlanding_video_card = clonedeep( require( '../../modules/vlanding-video-card/vlanding-video-card.prototype' ) );
const social_share = clonedeep( require( '../../modules/social-share/social-share.prototype' ) );
const c_title = clonedeep( require( '../../components/c-title/c-title.prototype' ) );
const c_tagline = clonedeep( require( '../../components/c-tagline/c-tagline.prototype' ) );
const c_heading = clonedeep( require( '../../components/c-heading/c-heading.prototype' ) );
const vlanding_video_showcase_card = clonedeep( vlanding_video_card );
vlanding_video_card.c_title = false;
vlanding_video_card.c_span = false;

c_title.c_title_classes = 'lrv-u-font-size-24 lrv-u-font-size-32@desktop lrv-u-padding-b-1';
c_title.c_title_link_classes = 'lrv-a-unstyle-link lrv-u-color-black';
c_title.c_title_text = 'Bon Iger: Roseanne is Cancelled and I\'m Like Crying so Hard';

c_tagline.c_tagline_classes = 'lrv-u-color-grey-dark lrv-u-margin-t-00 lrv-a-hidden@mobile-max';

c_heading.c_heading_text = 'The Latest Videos';
c_heading.c_heading_classes = 'lrv-u-font-size-18 lrv-u-font-size-24@desktop lrv-u-font-size-28@desktop-xl lrv-u-border-b-1 lrv-u-border-color-grey-light lrv-u-padding-b-050 lrv-u-margin-tb-1';

module.exports = {
	vlanding_video_card: vlanding_video_card,
	c_title: c_title,
	c_tagline: c_tagline,
	social_share: social_share,
	c_heading: c_heading,
	vlanding_video_showcase_video_cards_classes: 'js-Flickity js-Flickity--fifths js-Flickity--isContained',
	vlanding_video_showcase_video_cards_item_classes: 'js-Flickity-cell lrv-u-margin-r-1',
	vlanding_video_showcase_video_cards: [
		vlanding_video_showcase_card,
		vlanding_video_showcase_card,
		vlanding_video_showcase_card,
		vlanding_video_showcase_card,
		vlanding_video_showcase_card,
		vlanding_video_showcase_card
	]
};
