const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image_prototype = require( '../../components/c-lazy-image/c-lazy-image.prototype.js' );
const c_span_prototype = require( '../../components/c-span/c-span.prototype.js' );
const c_title_prototype = require( '../../components/c-title/c-title.prototype.js' );
const c_timestamp_prototype = require( '../../components/c-timestamp/c-timestamp.prototype.js' );

const c_lazy_image = clonedeep( c_lazy_image_prototype );
const c_span = clonedeep( c_span_prototype );
const c_title = clonedeep( c_title_prototype );
const c_timestamp = clonedeep( c_timestamp_prototype );

module.exports = {
	o_card_classes: '',
	o_card_link_url: '',
	o_card_link_classes: '',
	o_card_image_wrap_classes: '',
	o_card_content_classes: '',
	c_lazy_image: c_lazy_image,
	c_span: c_span,
	c_title: c_title,
	c_timestamp: c_timestamp,
};
