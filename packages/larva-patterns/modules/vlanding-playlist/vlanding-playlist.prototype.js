const clonedeep = require( 'lodash.clonedeep' );

const o_header = clonedeep(
	require( '../../objects/o-header/o-header.prototype' )
);
const o_card = clonedeep( require( '../../objects/o-card/o-card.prototype' ) );

o_header.o_heading_classes =
	'lrv-u-flex lrv-u-align-items-center lrv-u-border-b-1 lrv-u-border-color-grey-light lrv-u-margin-b-1';
o_header.c_heading.c_heading_text = 'Behind the Lens';
o_header.c_heading.c_heading_classes = 'lrv-u-font-size-32';

o_header.c_button.c_button_classes += ' lrv-u-font-weight-bold';

o_card.c_span = false;
o_card.c_timestamp = false;
o_card.o_card_link_url = '#';
o_card.o_card_link_classes = 'lrv-a-unstyle-link';
o_card.c_lazy_image.c_lazy_image_classes = 'lrv-u-margin-b-050';
o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-4x3';
o_card.c_title.c_title_url = false;

const o_card_large = clonedeep( o_card );

o_card.c_title.c_title_classes = 'lrv-u-font-size-12';
o_card_large.c_title.c_title_classes =
	'lrv-u-font-size-20@desktop lrv-u-font-size-12';

module.exports = {
	o_header,
	vlanding_playlist_large_card: o_card_large,
	vlanding_playlist_small_cards: [ o_card, o_card, o_card, o_card ],
};
