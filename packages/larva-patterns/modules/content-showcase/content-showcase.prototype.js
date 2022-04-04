const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-lazy-image/c-lazy-image.prototype' ) );
const c_title = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-title/c-title.prototype' ) );
const c_dek = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype' ) );
const c_link = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-link/c-link.prototype' ) );

c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';
c_lazy_image.modifier_class = 'u-width-100p lrv-u-margin-l-auto';

c_link.c_link_classes = 'a-font-body-l lrv-a-floated-left lrv-a-hover-effect-text-decoration--underline lrv-u-margin-b-00'

c_title.c_title_url = '';
c_title.c_title_tag_text = 'h1';
c_title.c_title_classes += ' lrv-u-text-transform-uppercase a-font-basic-s';

module.exports = {
    content_showcase_item_classes: 'content-showcase-item lrv-u-display-inline-flex lrv-u-flex-basis-100p@desktop-xl lrv-u-flex-basis-100p@desktop lrv-u-padding-tb-075@mobile-max',  
    c_lazy_image,
    c_link,
    c_title,
    c_dek,
}