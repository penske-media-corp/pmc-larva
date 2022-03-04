const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-lazy-image/c-lazy-image.prototype' ) );
const separator = clonedeep( require( '@penskemediacorp/larva-patterns/modules/separator/separator.prototype' ) );
const c_title = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-title/c-title.prototype' ) );
const c_link = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-link/c-link.prototype' ) );

c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';
c_lazy_image.modifier_class = 'lrv-u-width-100@desktop-xl lrv-u-width-150@desktop lrv-u-width-100@mobile-max lrv-u-margin-l-auto';

c_link.c_link_classes = 'a-font-body-l lrv-a-floated-left lrv-a-hover-effect-text-decoration--underline'

c_title.c_title_url = '';
c_title.c_title_tag_text = 'h1';
c_title.c_title_classes += ' lrv-u-text-transform-uppercase a-font-basic-s';

separator.separator_classes = 'lrv-u-border-b-1 lrv-u-width-30 lrv-a-floated-left lrv-u-margin-b-00';

module.exports = {
    content_showcase_item_classes: 'content-showcase-item lrv-u-display-inline-flex lrv-u-flex-basis-100pc@desktop-xl lrv-u-flex-basis-100pc@desktop lrv-u-padding-tb-075@mobile-max',  
    c_lazy_image,
    c_link,
    c_title,
    separator,
}