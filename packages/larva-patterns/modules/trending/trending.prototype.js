const clonedeep = require( 'lodash.clonedeep' );
const { list_item_classes } = require('../list/list.prototype.js');
const list_ordered = clonedeep( require( '../list/list.ordered.js' ) );
const c_heading  = clonedeep( require( '../../components/c-heading/c-heading.prototype.js' ) );
const separator = clonedeep( require( '../separator/separator.prototype' ) );

separator.separator_classes = 'lrv-u-border-b-1 lrv-u-width-40 lrv-u-display-none@mobile-max';

const list_item = {
	list_markup: 'Johnny Depp Receives Medal of Honor From Controversial Serbian President',
	list_url: '#',
}

c_heading.c_heading_classes = 'lrv-u-letter-spacing-015 lrv-u-font-size-20 lrv-u-text-align-center@desktop lrv-u-text-transform-uppercase lrv-u-font-family-primary';

list_ordered.list_items = [ list_item, list_item, list_item, list_item, list_item ];
list_ordered.list_classes = 'lrv-u-margin-b-00';
list_ordered.list_item_classes = 'lrv-a-unstyle-inner-links lrv-u-color-brand-primary:hover lrv-u-padding-tb-075 lrv-u-border-t-1+';
list_ordered.list_url_classes = 'lrv-u-line-height-normal lrv-a-font-secondary-m lrv-u-font-size-18 lrv-u-font-size-16@mobile-max lrv-a-hover-effect-text-decoration--underline';

c_heading.c_heading_text = 'Trending';

module.exports = {
	trending_classes: 'lrv-u-border-a-1 lrv-u-padding-a-025 lrv-a-wrapper-100vw@mobile-max lrv-u-border-l-00@mobile-max lrv-u-border-r-00@mobile-max lrv-u-border-b-00@mobile-max lrv-u-padding-l-00@mobile-max lrv-u-padding-r-00@mobile-max',
	trending_wrapper_classes: 'lrv-u-border-a-5 lrv-u-border-color-brand-primary lrv-u-padding-a-025 lrv-u-border-l-00@mobile-max lrv-u-border-r-00@mobile-max lrv-u-border-b-00@mobile-max lrv-u-padding-l-00@mobile-max lrv-u-padding-r-00@mobile-max',
	trending_container_classes: 'lrv-u-border-a-1 lrv-u-padding-l4 lrv-u-border-l-00@mobile-max lrv-u-border-r-00@mobile-max',
	trending_items_classes: 'lrv-u-padding-lr-2 lrv-u-padding-tb-1',
	list_ordered,
	c_heading,
	separator,
};
