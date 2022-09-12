const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image_prototype = require( '../../components/c-lazy-image/c-lazy-image.prototype' );
const c_lazy_image = clonedeep( c_lazy_image_prototype );

const c_tagline_prototype = require( '@penskemediacorp/larva-patterns/components/c-tagline/c-tagline.prototype' );
const c_tagline = clonedeep( c_tagline_prototype );

module.exports = {
	banner_classes: '',
	c_lazy_image,
	c_tagline,
	screen_reader_text: 'Page Banner',
};
