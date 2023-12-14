const clonedeep = require( 'lodash.clonedeep' );
const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const c_heading_prototype = require( '../../components/c-heading/c-heading.prototype' );
const c_heading = clonedeep( c_heading_prototype );

const c_icon_prototype = require( '../../components/c-icon/c-icon.prototype' );
const c_icon = clonedeep( c_icon_prototype );

const o_card_prototype = require( '../../objects/o-card/o-card.prototype' );
const o_card = clonedeep( o_card_prototype );

const o_indicator_photos = __experimentalCloneWithFallback(
	'objects/o-indicator/o-indicator.photos'
);

o_card.o_indicator = o_indicator_photos;

o_card.o_card_link_url = '#';
o_card.o_card_link_classes = 'lrv-a-unstyle-link lrv-u-display-block';
o_card.c_lazy_image.c_lazy_image_classes =
	'lrv-u-margin-b-050@mobile-max lrv-u-margin-b-1';
o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-16x9';
o_card.c_lazy_image.c_lazy_image_image_classes = 'u-box-shadow-medium';
o_card.c_lazy_image.c_lazy_image_placeholder_url =
	'https://live.staticflickr.com/4685/24635253357_483728d136_c.jpg';
o_card.o_card_image_wrap_classes = 'lrv-a-glue-parent';
o_card.c_lazy_image.c_lazy_image_caption_markup = false;
o_card.c_lazy_image.c_lazy_image_credit_text = false;
o_card.c_span = false;
o_card.c_timestamp = false;
o_card.c_title.c_title_link_classes = 'lrv-a-unstyle-link';
o_card.c_title.c_title_classes =
	'lrv-a-font-primary-xxs lrv-u-text-align-center';
o_card.c_title.c_title_url = false;
o_card.c_title.c_title_id_attr = false;

const titles = [
	'Banksy Painting Sells for Record-Demolishing $12.2 M. at Sotheby’s London',
	'Famed Art Historian Germano Celant to Curate KAWS Exhibition in Qatar',
	'Yayoi Kusama ‘Infinity Room’ Heads to Toledo Museum of Art as Part of ‘Multi-Sensory Experience’ Push',
	'After the Flood: Artists Fill Amsterdam Gallery with Wet Clay, Establish Safety Fund',
	'Frieze London Sales Accumulate, Museum Boards Go Under the Scope, and More—Morning Links from October 3, 2019',
	'KAWS Hit With Criticism in China for Mao-Based Artwork—Artist Responds [Updated]',
	'Deborah Marrow, Game-Changing Getty Foundation Leader, Has Died',
	'As Brexit Looms at Frieze London, $6.5 M. Twombly and $5 M. Guston Sell, While $32 M. Botticelli Awaits Buyer',
	'German Museum to Give Walid Raad Art Prize Despite City Government’s Objection: Report',
	'Pace Gallery Plans Paris Presence',
];

const galleries = [];

for ( let i = 0; i < titles.length; i++ ) {
	const card = clonedeep( o_card );
	card.c_title.c_title_text = titles[ i ];
	galleries.push( card );
}

module.exports = {
	galleries,
};
