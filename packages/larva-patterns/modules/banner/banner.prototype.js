const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image_prototype = require( '../../components/c-lazy-image/c-lazy-image.prototype' );
const c_lazy_image = clonedeep( c_lazy_image_prototype );

module.exports = {
	banner_classes: '',
	c_lazy_image,
	screen_reader_text: 'Page Banner',
};
