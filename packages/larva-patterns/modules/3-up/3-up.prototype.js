const clonedeep = require( 'lodash.clonedeep' );

const o_card_prototype = require( '../../objects/o-card/o-card.prototype' );

const o_card = clonedeep( o_card_prototype );

o_card.o_card_classes = 'lrv-u-margin-b-2';
o_card.o_card_content_classes = 'lrv-u-margin-t-1';

o_card.c_lazy_image.c_lazy_image_src_url = "https://farm5.staticflickr.com/4078/5441060528_31db7838ba_z.jpg";
o_card.c_lazy_image.c_lazy_image_placeholder_url = "https://farm5.staticflickr.com/4078/5441060528_31db7838ba_z.jpg";

o_card.c_lazy_image.c_lazy_image_classes += ' u-box-shadow-dark a-hidden@mobile-max';
o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-2x3';

o_card.c_span.c_span_url = '#';
o_card.c_span.c_span_text = false;
o_card.c_title.c_title_text = '‘Solo: A Star Wars Story’ Is Going to Cannes, So Does That Mean It’s Good?';
o_card.c_title.c_title_classes = 'lrv-u-font-size-18';
o_card.c_title.c_title_link_classes = 'lrv-a-unstyle-link';
o_card.c_timestamp.c_timestamp_text = '';
o_card.c_tagline.c_tagline_text = '';

o_card.o_author.o_author_text = '';
o_card.o_author.c_span.c_span_text = '';
o_card.o_author.c_timestamp.c_timestamp_text = '';

const o_card_large = clonedeep( o_card );

o_card_large.c_span.c_span_text = 'Film';
o_card_large.c_title.c_title_text = '‘Avengers: Infinity War’ vs. ‘Black Panther’: 10 Factors That Will Determine Which Film Is Box-Office King';

o_card_large.o_author.o_author_text = 'By ';
o_card_large.o_author.c_span.c_span_text = 'Author Name';
o_card_large.o_author.c_timestamp.c_timestamp_text = 'July 7, 2021';


o_card_large.o_card_classes = '';
o_card_large.o_card_content_classes = 'lrv-u-padding-a-1 lrv-u-padding-a-2@desktop';
o_card_large.c_title.c_title_classes = 'lrv-u-font-size-28@desktop-xl lrv-u-font-size-26@tablet lrv-u-font-size-22@mobile-max lrv-u-margin-tb-050';

module.exports = {
    // o_card_large: o_card_large,
    o_card_large,
	o_card_items: [
		o_card,
		o_card
	]
};
