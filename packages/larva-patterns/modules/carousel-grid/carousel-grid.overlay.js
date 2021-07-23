const clonedeep = require( 'lodash.clonedeep' );

const carousel_grid_prototype = require( './carousel-grid.prototype' );

const carousel_grid_overlay = clonedeep( carousel_grid_prototype );

carousel_grid_overlay.o_card_large.o_card_classes = 'lrv-a-carousel-grid__primary--overlay';
carousel_grid_overlay.o_card_large.o_card_content_classes += ' lrv-a-carousel-grid__overlay-content';

carousel_grid_overlay.o_card_large.c_lazy_image.c_lazy_image_classes = 'lrv-a-carousel-grid__overlay-img';
carousel_grid_overlay.o_card_large.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-2x3';

carousel_grid_overlay.carousel_grid_overlay_modifier_class1 = 'lrv-a-carousel-grid__overlay';
carousel_grid_overlay.carousel_grid_overlay_modifier_class2 = 'lrv-a-carousel-grid__secondary--grid';

const o_card_item = clonedeep( carousel_grid_overlay.o_card_items[0] );

carousel_grid_overlay.o_card_items = [o_card_item, o_card_item, o_card_item];

o_card_item.o_card_classes += ' lrv-a-carousel-grid__secondary--item lrv-u-align-items-center';

o_card_item.c_title.c_title_classes = 'lrv-u-font-size-14';

o_card_item.c_lazy_image.c_lazy_image_classes += ' u-box-shadow-dark a-hidden@mobile-max lrv-u-width-100p';
o_card_item.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';

module.exports = carousel_grid_overlay;
