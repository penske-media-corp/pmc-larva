const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const o_sub_header = __experimentalCloneWithFallback(
	'objects/o-sub-header/o-sub-header.prototype'
);

module.exports = {
	sub_header_classes: '',
	o_sub_header,
};
