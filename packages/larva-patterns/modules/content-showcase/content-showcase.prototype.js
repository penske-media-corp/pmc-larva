const clonedeep = require( 'lodash.clonedeep' );

const o_card = clonedeep( require( '@penskemediacorp/larva-patterns/objects/o-card/o-card.prototype' ) );
const c_dek =  clonedeep( require( '@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype' ) );

o_card.o_card_classes = 'lrv-u-display-inline-flex lrv-u-flex-basis-100p@desktop-xl lrv-u-flex-basis-100p@desktop lrv-u-padding-tb-075@mobile-max';
o_card.o_card_link_classes = 'lrv-u-flex';
o_card.o_card_link_url = '#';
o_card.o_card_image_wrap_classes = 'lrv-a-flex-basis-40p@desktop lrv-a-flex-basis-40p@desktop-xl lrv-a-flex-basis-25p@mobile-max';
o_card.o_card_content_classes = 'lrv-u-margin-l-1 lrv-u-color-brand-primary:hover lrv-a-flex-basis-60p@desktop lrv-a-flex-basis-60p@desktop-xl lrv-a-flex-basis-55p@mobile-max';

o_card.c_lazy_image.c_lazy_image_link_url = '';
o_card.c_lazy_image.c_lazy_image_classes = 'lrv-u-margin-l-auto';
o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';

o_card.o_span_group = false;
o_card.c_span = false;
o_card.c_title.c_title_url = '';
o_card.c_timestamp = false;
o_card.c_tagline = false;
o_card.o_author = false;

o_card.c_dek = c_dek;
o_card.c_dek.c_dek_text = 'Perfection is rarely achieved in movies, but this heaven-sent concert doc hits the sweet spot.';

module.exports = {
    content_showcase_items_classes: 'lrv-u-flex lrv-u-flex-direction-column@mobile-max lrv-u-padding-tb-1@desktop lrv-u-width-100p lrv-u-padding-lr-125@mobile-max',
    content_showcase_items: [ o_card, o_card, o_card ]
}