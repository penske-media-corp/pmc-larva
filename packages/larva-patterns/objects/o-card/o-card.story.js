const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const o_card = __experimentalCloneWithFallback( 'objects/o-card/o-card.prototype' );
const c_dek = __experimentalCloneWithFallback( 'components/c-dek/c-dek.prototype' );
const o_author = __experimentalCloneWithFallback( 'objects/o-author/o-author.prototype' );

o_card.c_title.c_title_text = '‘A Momentous Weekend’: LACMA’s High-Stakes Collectors Committee Event Raises $2.4 M.';
o_card.c_title.c_title_classes = 'lrv-u-font-size-14 lrv-u-font-size-26@tablet lrv-u-font-size-32@desktop lrv-u-font-family-primary lrv-u-display-block lrv-u-font-weight-normal lrv-u-font-weight-bold@desktop lrv-u-line-height-small lrv-u-margin-b-050';
o_card.c_title.c_title_link_classes = 'lrv-a-unstyle-link lrv-u-color-brand-primary:hover';

o_card.c_span.c_span_classes = 'lrv-u-margin-b-050 lrv-u-display-inline-block';

o_card.c_dek = c_dek;
o_card.c_timestamp = false;
o_card.c_dek.c_dek_text = false;
o_card.c_dek.c_dek_markup = 'Lorem ipsum <i>dolor</i> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.';

o_card.c_tagline.c_tagline_classes = 'lrv-u-margin-l-050';
o_card.c_tagline.c_tagline_markup = "<a href='#'>Staff Writer</a>";
o_card.c_tagline.c_tagline_text = false;

o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-3x2';

o_card.o_card_classes = 'lrv-u-align-items-center';

o_author.c_span.c_span_url = '#';

module.exports = {
	... o_card,
	o_author
};