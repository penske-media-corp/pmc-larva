const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image = clonedeep( require( '../../components/c-lazy-image/c-lazy-image.prototype.js' ) );
const c_span = clonedeep( require( '../../components/c-span/c-span.prototype.js' ) );
const c_tagline = clonedeep( require( '../../components/c-tagline/c-tagline.prototype' ) );
const c_title = clonedeep( require( '../../components/c-title/c-title.prototype.js' ) );
const c_timestamp = clonedeep( require( '../../components/c-timestamp/c-timestamp.prototype.js' ) );
const o_author = clonedeep( require( '../../objects/o-author/o-author.prototype.js' ) );

module.exports = {
	o_card_classes: '',
	o_card_tag_text: '',
	o_card_link_url: '',
	o_card_link_classes: '',
	o_card_image_wrap_classes: '',
	o_card_content_classes: '',
	c_lazy_image: c_lazy_image,
	c_span: c_span,
	c_tagline: c_tagline,
	c_title: c_title,
	c_timestamp: c_timestamp,
	o_author: o_author
};
