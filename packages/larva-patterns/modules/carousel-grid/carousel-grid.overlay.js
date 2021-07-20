const clonedeep = require( 'lodash.clonedeep' );

const carousel_grid_prototype = require( './carousel-grid.prototype' );

const carousel_grid_overlay = clonedeep( carousel_grid_prototype );

carousel_grid_overlay.o_card_large.o_card_classes = 'lrv-u-margin-b-2@mobile-max lrv-u-flex';

// carousel_grid_overlay.o_card_large.o_card_classes = 'lrv-u-margin-b-2@mobile-max lrv-u-flex';

carousel_grid_overlay.o_card_large.c_lazy_image.c_lazy_image_classes =+ ' u-box-shadow-dark a-hidden@mobile-max lrv-u-width-75p';

carousel_grid_overlay.o_card_large.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-2x3';

// carousel_grid_overlay.o_card_classes = 'lrv-a-4-up__primary';

// carousel_grid_overlay.c_lazy_image_classes = 'u-box-shadow-dark a-hidden@mobile-max lrv-a-4-up__primary-image';
// carousel_grid_overlay.o_card_content_classes = 'lrv-a-4-up__primary-content lrv-u-padding-a-1 lrv-u-padding-a-2@desktop';
// carousel_grid_overlay.c_title.c_title_classes = 'lrv-u-font-size-28 lrv-u-font-size-22@mobile-max lrv-u-margin-tb-050';

carousel_grid_overlay.primary_classes = '';

carousel_grid_overlay.secondary_classes = '';

const o_card = clonedeep( carousel_grid_overlay.o_card_items[0] );

carousel_grid_overlay.o_card_items = [o_card, o_card, o_card];

module.exports = carousel_grid_overlay;