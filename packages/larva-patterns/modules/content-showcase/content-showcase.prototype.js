const clonedeep = require( 'lodash.clonedeep' );

const o_card = clonedeep(
	require( '@penskemediacorp/larva-patterns/objects/o-card/o-card.prototype' )
);
const article_kicker = clonedeep(
	require( '../article-kicker/article-kicker.prototype' )
);

o_card.o_card_classes =
	'lrv-u-display-inline-flex lrv-u-flex-basis-100p@desktop-xl lrv-u-flex-basis-100p@desktop lrv-u-padding-tb-075@mobile-max';
o_card.o_card_link_classes = 'lrv-u-flex';
o_card.o_card_link_url = '#';
o_card.o_card_image_wrap_classes =
	'lrv-u-flex-basis-40p@desktop lrv-u-flex-basis-40p@desktop-xl lrv-u-flex-basis-25p@mobile-max';
o_card.o_card_content_classes =
	'lrv-u-margin-l-1 lrv-u-flex-basis-60p@desktop lrv-u-flex-basis-60p@desktop-xl lrv-u-flex-basis-55p@mobile-max lrv-u-color-brand-primary:hover';

o_card.c_lazy_image.c_lazy_image_link_url = '';
o_card.c_lazy_image.c_lazy_image_classes =
	'lrv-u-margin-l-auto lrv-u-width-100';
o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';
o_card.article_kicker = article_kicker;
o_card.article_kicker.article_kicker_text = 'Article Kicker';

o_card.o_span_group = false;
o_card.c_span = false;
o_card.c_title.c_title_url = '';
o_card.c_title.c_title_text =
	'Perfection is rarely achieved in movies, but this heaven-sent concert doc hits the sweet spot.';
o_card.c_title.c_title_classes = 'lrv-u-margin-tb-1 lrv-u-font-weight-normal';
o_card.c_timestamp = false;
o_card.c_tagline = false;
o_card.o_author = false;

module.exports = {
	content_showcase_items_classes:
		'lrv-u-flex lrv-u-flex-direction-column@mobile-max lrv-u-padding-tb-1@desktop lrv-u-padding-lr-125@mobile-max lrv-u-width-100p',
	content_showcase_items: [ o_card, o_card, o_card ],
};
