const clonedeep = require( 'lodash.clonedeep' );

const c_heading_prototype = require( '../../components/c-heading/c-heading.prototype' );
const c_heading = clonedeep( c_heading_prototype );

const c_icon_prototype = require( '../../components/c-icon/c-icon.prototype' );
const c_icon = clonedeep( c_icon_prototype );

const o_card_prototype = require( '../../objects/o-card/o-card.prototype' );
const o_card = clonedeep( o_card_prototype );

const o_indicator_prototype = require( '../../objects/o-indicator/o-indicator.prototype' );
const o_indicator = clonedeep( o_indicator_prototype );

c_heading.c_heading_text = 'Gallery Heading';
c_heading.c_heading_classes =
	'lrv-a-font-primary-m lrv-u-text-transform-uppercase lrv-u-margin-b-125';

o_indicator.c_icon = clonedeep( c_icon );
o_indicator.c_icon.c_icon_name = 'gallery';
o_indicator.c_span.c_span_text = 'Photos';
o_indicator.c_span.c_span_classes += ' lrv-u-margin-l-050 lrv-u-text-transform-uppercase lrv-a-font-secondary-s';
o_indicator.o_indicator_classes += ' lrv-u-flex lrv-u-background-color-black lrv-u-color-white lrv-u-padding-a-050 lrv-u-border-radius-5 lrv-u-margin-a-050';

o_card.o_indicator = o_indicator;

o_card.o_card_link_url = '#';
o_card.o_card_link_classes = 'lrv-a-unstyle-link lrv-u-display-block';
o_card.c_lazy_image.c_lazy_image_classes = 'lrv-u-margin-b-050@mobile-max lrv-u-margin-b-1';
o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-16x9';
o_card.c_lazy_image.c_lazy_image_image_classes = 'u-box-shadow-medium';
o_card.c_lazy_image.c_lazy_image_placeholder_url = 'https://live.staticflickr.com/4685/24635253357_483728d136_c.jpg';
o_card.o_card_image_wrap_classes = 'lrv-a-glue-parent';
o_card.c_lazy_image.c_lazy_image_caption_markup = false;
o_card.c_lazy_image.c_lazy_image_credit_text = false;
o_card.c_span = false;
o_card.c_timestamp = false;
o_card.c_title.c_title_link_classes = 'lrv-a-unstyle-link';
o_card.c_title.c_title_classes = 'lrv-a-font-primary-xxs lrv-u-text-align-center';
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
	'Pace Gallery Plans Paris Presence'
];

let galleries = [];

for (let i = 0; i < titles.length; i++) {
	let card = clonedeep( o_card );
	card.c_title.c_title_text = titles[i];
	galleries.push( card );
}

module.exports = {
	c_heading,
	galleries: galleries
};
