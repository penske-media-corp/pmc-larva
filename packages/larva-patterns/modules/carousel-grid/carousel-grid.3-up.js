const clonedeep = require( 'lodash.clonedeep' );
const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const carousel_grid_3_up = __experimentalCloneWithFallback( 'modules/carousel-grid/carousel-grid.prototype' );

carousel_grid_3_up.carousel_grid_3_up_layout_classes = 'lrv-a-carousel-grid__3_up';
carousel_grid_3_up.carousel_grid_3_up_secondary_classes = 'lrv-a-carousel-grid__3_up--secondary';

module.exports = carousel_grid_3_up;
