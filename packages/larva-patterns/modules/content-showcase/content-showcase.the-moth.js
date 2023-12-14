const clonedeep = require( 'lodash.clonedeep' );

const content_showcase = clonedeep( require( './content-showcase.prototype' ) );
const o_card = clonedeep( require( '../../objects/o-card/o-card.prototype' ) );
const article_kicker = clonedeep(
	require( '../article-kicker/article-kicker.prototype' )
);

o_card.c_dek = false;
o_card.c_span = false;
o_card.c_timestamp = false;
o_card.c_tagline = false;
o_card.o_author = false;

o_card.o_card_classes =
	'lrv-u-display-inline-flex lrv-u-flex-basis-100p@desktop-xl lrv-u-flex-basis-100p@desktop lrv-u-flex-shrink-0@mobile-max lrv-u-padding-tb-00@mobile-max';
o_card.o_card_link_classes = 'lrv-u-flex';
o_card.o_card_link_url = '#';
o_card.o_card_image_wrap_classes =
	'lrv-u-flex-basis-40p@desktop lrv-u-flex-basis-40p@desktop-xl lrv-u-flex-basis-25p@mobile-max';
o_card.c_lazy_image.c_lazy_image_classes = 'lrv-u-width-100';
o_card.o_card_content_classes =
	'lrv-u-flex-basis-60p@desktop lrv-u-flex-basis-60p@desktop-xl lrv-u-flex-basis-55p@mobile-max lrv-u-margin-l-1 lrv-u-color-black lrv-u-color-brand-primary:hover';
o_card.c_title.c_title_text = 'Canceling Noodle The Pug';
o_card.c_title.c_title_classes =
	'lrv-u-margin-t-050 lrv-u-margin-b-00 lrv-a-font-body-l lrv-u-text-decoration-underline:hover lrv-u-line-height-copy';
o_card.c_title.c_title_link_classes =
	'lrv-u-color-black lrv-u-color-brand-secondary-dark:hover';
o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';
o_card.article_kicker = article_kicker;
o_card.article_kicker.article_kicker_classes =
	'lrv-u-position-relative lrv-u-padding-b-050 lrv-u-color-black lrv-u-color-brand-secondary-dark:hover lrv-u-text-transform-uppercase lrv-a-font-basic-s';
o_card.article_kicker.article_kicker_link_classes = 'lrv-u-color-black';

content_showcase.content_showcase_classes =
	'the-moth lrv-u-border-t-1 lrv-u-font-family-body lrv-a-glue-parent';
content_showcase.content_showcase_items_classes =
	'the-moth-items lrv-u-overflow-auto@mobile-max lrv-u-flex-shrink-0@mobile-max lrv-u-flex lrv-u-margin-t-025 lrv-u-border-t-1 lrv-u-border-b-1 lrv-u-padding-tb-150 lrv-u-padding-r-2@mobile-max lrv-u-padding-lr-125@mobile-max lrv-u-width-100p';

content_showcase.content_showcase_items = [ o_card, o_card, o_card, o_card ];

module.exports = content_showcase;
