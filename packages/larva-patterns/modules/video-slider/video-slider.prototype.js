const clonedeep = require( 'lodash.clonedeep' );

const c_title = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-title/c-title.prototype' ) );
const c_dek = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype' ) );
const o_video_card = clonedeep(
	require('@penskemediacorp/larva-patterns/objects/o-video-card/o-video-card.prototype')
);

c_title.c_title_classes = 'lrv-a-unstyle-inner-links lrv-a-font-primary-xxl';

o_video_card.o_video_card_link_showcase_trigger_data_attr = 'WhWc3b3KhnY';
o_video_card.o_video_card_link_showcase_type_data_attr = 'youtube';

o_video_card.c_play_icon.c_play_badge_classes = 'lrv-a-glue lrv-a-glue--l-50p lrv-a-glue--t-50p u-transform-translate-a-n50p u-height-60@desktop u-height-80@desktop-xl lrv-u-width-35@mobile-max u-width-60@desktop u-width-auto is-to-be-hidden u-overflow-visible ';
o_video_card.c_dek = false;

module.exports = {
	video_slider_classes: 'js-Flickity js-Flickity--100p',
	video_slider_slide_inner_classes: 'lrv-a-glue-parent',
	video_slider_slide_secondary_classes: '',
	o_video_card_items: [o_video_card, o_video_card, o_video_card],
	c_title,
	c_dek
};
