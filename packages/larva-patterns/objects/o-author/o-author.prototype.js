const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const c_span = __experimentalCloneWithFallback(
	'components/c-span/c-span.prototype'
);
const c_timestamp = __experimentalCloneWithFallback(
	'components/c-timestamp/c-timestamp.prototype'
);

c_span.c_span_text = 'Author Name';

module.exports = {
	o_author_classes: 'lrv-a-font-secondary-regular-m',
	o_author_text: 'By ',
	c_span,
	c_timestamp,
	c_tagline_author: false,
};
