const clonedeep = require( 'lodash.clonedeep' );

const content_showcase = clonedeep( require( './content-showcase.prototype' ) );
const o_card = clonedeep( require( '../../objects/o-card/o-card.prototype' ) );
const c_dek =  clonedeep( require( '../../components/c-dek/c-dek.prototype' ) );

o_card.c_dek = c_dek;
o_card.c_span = false;
o_card.c_timestamp = false;
o_card.c_tagline = false;
o_card.o_author = false;

o_card.o_card_classes = 'lrv-u-display-inline-flex lrv-u-flex-basis-100p@desktop-xl lrv-u-flex-basis-100p@desktop lrv-u-width-210@mobile-max lrv-u-padding-tb-00@mobile-max lrv-u-flex-shrink-0@mobile-max';
o_card.o_card_link_classes = 'lrv-u-flex';
o_card.o_card_link_url = '#';
o_card.o_card_image_wrap_classes = 'lrv-u-flex-basis-40p@desktop lrv-u-flex-basis-40p@desktop-xl lrv-u-flex-basis-25p@mobile-max';
o_card.c_lazy_image.c_lazy_image_classes = 'lrv-u-width-98 lrv-u-width-83@mobile-max';
o_card.o_card_content_classes = 'lrv-u-margin-l-1 lrv-u-color-brand-primary:hover lrv-u-flex-basis-60p@desktop lrv-u-flex-basis-60p@desktop-xl lrv-u-flex-basis-55p@mobile-max lrv-u-color-black';
o_card.c_title.c_title_text = 'Don’t Let This Flop';
o_card.c_title.c_title_classes = 'lrv-u-color-black lrv-u-color-brand-secondary-dark:hover lrv-u-text-transform-uppercase lrv-a-font-basic-s lrv-u-position-relative lrv-u-padding-b-050';
o_card.c_title.c_title_link_classes = 'lrv-u-color-black lrv-u-color-brand-secondary-dark:hover';
o_card.c_dek.c_dek_classes = 'lrv-a-font-body-l lrv-u-text-decoration-underline:hover lrv-u-margin-b-00 lrv-u-margin-t-050 lrv-u-line-height-copy';
o_card.c_dek.c_dek_text = 'Canceling Noodle The Pug';
o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';

content_showcase.content_showcase_classes = 'the-moth lrv-u-border-t-1 lrv-u-font-family-body lrv-a-glue-parent';
content_showcase.content_showcase_items_classes = 'the-moth-items lrv-u-overflow-auto@mobile-max lrv-u-padding-r-2@mobile-max lrv-u-flex-shrink-0@mobile-max lrv-u-border-b-1 lrv-u-border-t-1 lrv-u-flex lrv-u-margin-t-025 lrv-u-padding-lr-125@mobile-max lrv-u-padding-tb-150 lrv-u-width-100p';

content_showcase.content_showcase_items = [ o_card, o_card, o_card, o_card ];

module.exports = content_showcase;
