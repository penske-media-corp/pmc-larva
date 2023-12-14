const clonedeep = require( 'lodash.clonedeep' );

const c_heading_prototype = require( '../../components/c-heading/c-heading.prototype' );
const o_card_prototype = require( '../../objects/o-card/o-card.prototype' );
const c_title_prototype = require( '../../components/c-title/c-title.prototype' );
const c_svg_prototype = require( '../../components/c-svg/c-svg.prototype' );
const c_span_prototype = require( '../../components/c-span/c-span.prototype' );

const c_heading = clonedeep( c_heading_prototype );
const o_card = clonedeep( o_card_prototype );
const c_title = clonedeep( c_title_prototype );
const c_svg = clonedeep( c_svg_prototype );
const c_span = clonedeep( c_span_prototype );

c_heading.c_heading_text = 'Most Popular';

c_svg.c_svg_classes = 'lrv-u-height-16 lrv-u-color-black';
c_svg.c_svg_name = 'brand-logo';

c_title.c_title_text =
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi expedita pariatur.';
c_title.c_title_classes += ' lrv-u-margin-b-075';
c_title.c_title_url = false;

o_card.o_card_classes =
	'lrv-u-flex lrv-u-height-100p lrv-u-color-brand-primary:hover';
o_card.o_card_link_url = '#';
o_card.o_card_link_classes = 'lrv-a-unstyle-link';
o_card.o_card_content_classes = 'lrv-u-flex lrv-u-flex-direction-column';
o_card.o_card_image_wrap_classes = '';
o_card.c_lazy_image = false;
o_card.c_span = false;
o_card.c_svg = c_svg;
o_card.c_title = c_title;
o_card.c_timestamp = false;
o_card.o_card_link_rel_attribute = 'nofollow';

module.exports = {
	brands_most_popular_classes: 'lrv-a-wrapper lrv-u-margin-b-150',
	brands_most_popular_items_wrapper_classes: '',
	c_heading,
	popular_items: [ o_card, o_card, o_card, o_card ],
};
