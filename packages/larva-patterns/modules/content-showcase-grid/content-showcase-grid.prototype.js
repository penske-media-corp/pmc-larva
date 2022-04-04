const clonedeep = require( 'lodash.clonedeep' );

const content_showcase = clonedeep( require( '../../modules/content-showcase/content-showcase.prototype' ) );

module.exports = {
    content_showcase_classes: 'lrv-u-border-t-1 lrv-u-padding-t-025 lrv-u-font-family-body lrv-a-wrapper-100vw@mobile-max',
    content_showcase_items_classes: 'content-showcase-items lrv-u-flex lrv-u-flex-direction-column@mobile-max lrv-u-border-t-1 lrv-u-border-b-1 lrv-u-padding-tb-1@desktop lrv-u-width-100p lrv-u-padding-lr-125@mobile-max',  
    content_showcase_items : [ content_showcase, content_showcase, content_showcase ],
}   