const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-span/c-span.prototype' ) );
const c_title = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-title/c-title.prototype' ) );
const c_dek = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype' ) );
const c_link = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-link/c-link.prototype' ) );
const c_lazy_image = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-lazy-image/c-lazy-image.prototype' ) );

c_span.c_span_classes += ' lrv-u-color-brand-accent a-font-accent-xs lrv-u-text-transform-uppercase';

// TODO: add the larva class at the c-title prototype level
c_title.c_title_classes += ' a-font-primary-s larva';
c_title.c_title_url = false;
c_title.c_title_link_classes += ' lrv-u-color-black lrv-u-color-brand-primary:hover';

c_dek.c_dek_classes += ' a-font-body-s lrv-u-margin-tb-025@desktop';
c_dek.c_dek_markup = 'After she received the Oscar for costume design for “Black Panther,” Ruth E. Carter talked about the significance of her win for other costume designers of color coming behind her.';
c_dek.c_dek_text = false;

// Same class names as modules/button and c-button/c-button.brand-basic
c_link.c_link_classes += ' lrv-u-color-white:hover lrv-u-display-inline-block lrv-u-background-color-brand-primary lrv-u-color-white a-font-accent-regular-xxs lrv-u-text-transform-uppercase lrv-u-border-radius-100 lrv-u-padding-t-075 lrv-u-padding-r-2 lrv-u-padding-b-050 lrv-u-padding-l-2';

c_lazy_image.c_lazy_image_classes += ' lrv-u-height-100p lrv-u-border-radius-50p lrv-u-overflow-hidden';
c_lazy_image.c_lazy_image_crop_class = 'lrv-u-height-100p lrv-a-crop-1x1 a-crop-3x2@desktop-xl';
c_lazy_image.c_lazy_image_placeholder_url = 'https://source.unsplash.com/random/630x420';

module.exports = {
	story_card_classes: '',
	c_span,
	c_title,
	c_dek,
	c_link,
	c_lazy_image,
};