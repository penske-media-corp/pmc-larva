const clonedeep = require( 'lodash.clonedeep' );

const c_title = clonedeep( require( '../../components/c-title/c-title.prototype' ) );
const c_tagline = clonedeep( require( '../../components/c-tagline/c-tagline.prototype' ) );

c_title.c_title_classes = 'lrv-u-font-size-24 lrv-u-font-size-32@desktop lrv-u-padding-b-1';
c_title.c_title_link_classes = 'lrv-u-color-black';
c_title.c_title_text = 'Bon Iger: Roseanne is Cancelled and I\'m Like Crying so Hard';

c_tagline.c_tagline_classes = 'lrv-u-color-grey-dark lrv-u-margin-t-00';

// TODO: Add social share module and o_video_card.
module.exports = {
	c_title: c_title,
	c_tagline: c_tagline,
	"o_video_card": {
		"o_video_card_is_player": true,
		"o_video_card_link_data_attr": "data-video-showcase-trigger='rs2RlZQVXBU'",
		"o_video_card_classes": "a-glue-parent c-play-badge-parent",
		"o_video_card_permalink_url": "#",
		"o_video_card_alt_attr": "Thumbnail image",
		"o_video_card_image_url": "https://picsum.photos/300/300",
		"o_video_card_image_classes": "is-to-be-hidden",
		"o_video_card_crop_class": "pmc-u-crop-9x16",
		"c_play_badge": {
			"modifier_class": "",
			"c_play_badge_classes": "a-glue a-glue--bl-0 pmc-u-margin-l-1 pmc-u-margin-l-1 pmc-u-margin-b-1 is-to-be-hidden"
		},
		"c_title": ""
	},
};
