const clonedeep = require( 'lodash.clonedeep' );
const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const o_card_prototype = clonedeep(
	require( '../../objects/o-card/o-card.prototype' )
);
const o_author = __experimentalCloneWithFallback(
	'objects/o-author/o-author.prototype'
);
const o_card = clonedeep( o_card_prototype );

o_card.o_card_classes = 'lrv-u-margin-b-1';
o_card.o_card_content_classes = ' lrv-u-margin-t-050';

o_card.c_lazy_image.c_lazy_image_classes += ' ';
o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-3x2';

o_card.c_lazy_image.c_lazy_image_link_url = '#';

o_card.c_span.c_span_url = '#';
o_card.c_span.c_span_text = false;

o_card.c_title.c_title_text =
	'‘Solo: A Star Wars Story’ Is Going to Cannes, So Does That Mean It’s Good?';
o_card.c_title.c_title_classes = 'lrv-a-font-primary-xxxs';
o_card.c_title.c_title_link_classes = 'lrv-a-unstyle-link';

o_card.c_timestamp.c_timestamp_text = false;

const o_card_large = clonedeep( o_card );

o_card_large.c_span.c_span_text = 'Film';

o_card_large.c_title.c_title_text =
	'‘Avengers: Infinity War’ vs. ‘Black Panther’: 10 Factors That Will Determine Which Film Is Box-Office King';

o_card_large.o_author = clonedeep( o_author );
o_card_large.o_author.o_author_text = 'By ';
o_card_large.o_author.c_span.c_span_text = 'Author Name';
o_card_large.o_author.c_timestamp.c_timestamp_text = 'July 7, 2021';
o_card_large.o_author.c_timestamp.c_timestamp_classes =
	'lrv-a-icon-before lrv-a-icon-bullet';

// o_card_large uses o_author components that are not needed/used by o_card.
o_card.o_author = false;

o_card_large.o_card_classes = '';
o_card_large.o_card_content_classes = 'lrv-u-padding-a-1';
o_card_large.c_title.c_title_classes =
	'lrv-a-font-primary-xs lrv-u-margin-tb-050';

module.exports = {
	o_card_large,
	o_card_items: [ o_card, o_card ],
};
