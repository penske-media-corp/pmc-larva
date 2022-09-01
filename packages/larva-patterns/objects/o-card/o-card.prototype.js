const clonedeep = require( 'lodash.clonedeep' );
const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const c_span = __experimentalCloneWithFallback(
	'components/c-span/c-span.tag'
);
const c_timestamp = __experimentalCloneWithFallback(
	'components/c-timestamp/c-timestamp.prototype'
);
const c_lazy_image = clonedeep(
	require( '../../components/c-lazy-image/c-lazy-image.prototype.js' )
);
const c_title = clonedeep(
	require( '../../components/c-title/c-title.prototype.js' )
);

module.exports = {
	o_card_classes: '',
	o_card_tag_text: '',
	o_card_link_url: '',
	o_card_link_classes: '',
	o_card_image_wrap_classes: '',
	o_card_content_classes: '',
	c_lazy_image,
	c_svg: false,
	c_span,
	c_tagline: false,
	c_title,
	c_timestamp,
	o_author: false,
	article_kicker: false,
	article_kicker_outer_classes: '',
};
