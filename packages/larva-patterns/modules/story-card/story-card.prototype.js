const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep( require( '../../components/c-span/c-span.prototype' ) );
const c_title = clonedeep( require( '../../components/c-title/c-title.prototype' ) );
const c_dek = clonedeep( require( '../../components/c-dek/c-dek.prototype' ) );
const c_link = clonedeep( require( '../../components/c-link/c-link.prototype' ) );
const c_lazy_image = clonedeep( require( '../../components/c-lazy-image/c-lazy-image.prototype' ) );

c_span.c_span_classes += ' lrv-u-color-brand-accent a-font-accent-xs lrv-u-text-transform-uppercase';

// TODO: add the larva class at the c-title prototype level
c_title.modifier_class = 'lrv-a-font-primary-s';
c_title.c_title_url = false;
c_title.c_title_link_classes += ' lrv-u-color-black lrv-u-color-brand-primary:hover';

c_dek.c_dek_classes += ' lrv-u-margin-tb-025@desktop';
c_dek.c_dek_markup = 'After she received the Oscar for costume design for “Black Panther,” Ruth E. Carter talked about the significance of her win for other costume designers of color coming behind her.';
c_dek.c_dek_text = false;

c_lazy_image.c_lazy_image_classes += ' lrv-u-height-100p lrv-u-overflow-hidden';
c_lazy_image.c_lazy_image_crop_class = 'lrv-u-height-100p lrv-a-crop-1x1';
c_lazy_image.c_lazy_image_placeholder_url = 'https://source.unsplash.com/random/630x420';

module.exports = {
	story_card_classes: '',
	c_span,
	c_title,
	c_dek,
	c_link,
	c_lazy_image,
};