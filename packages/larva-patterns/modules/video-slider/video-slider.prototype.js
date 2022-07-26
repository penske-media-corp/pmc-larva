const clonedeep = require( 'lodash.clonedeep' );

const c_title = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-title/c-title.prototype' ) );
const c_dek = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype' ) );
const o_video_card = clonedeep(
	require('@penskemediacorp/larva-patterns/objects/o-video-card/o-video-card.prototype')
);

c_title.c_title_classes = 'lrv-a-unstyle-inner-links lrv-a-font-primary-xxl';

o_video_card.c_dek = false;

module.exports = {
	video_slider_classes: 'js-Flickity js-Flickity--100p',
	video_slider_slide_inner_classes: 'lrv-a-glue-parent',
	video_slider_slide_secondary_classes: '',
	o_video_card_items: [o_video_card, o_video_card, o_video_card],
	c_title,
	c_dek
};
