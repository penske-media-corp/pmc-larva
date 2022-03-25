const clonedeep = require( 'lodash.clonedeep' );
const { list_item_classes } = require('../list/list.prototype.js');
const list_ordered = clonedeep( require( '../list/list.ordered.js' ) );
const c_heading  = clonedeep( require( '../../components/c-heading/c-heading.prototype.js' ) );

const list_item = {
	list_markup: 'Johnny Depp Receives Medal of Honor From Controversial Serbian President',
	list_url: '#',
	list_url_classes: '',
}

c_heading.c_heading_classes = "lrv-u-font-size-20 lrv-u-text-align-center lrv-u-text-transform-uppercase lrv-u-padding-t-125";

list_ordered.list_items = [ list_item, list_item, list_item, list_item, list_item ];
list_ordered.list_classes = 'lrv-a-unstyle-list lrv-u-padding-l-1 lrv-u-padding-r-1 lrv-u-text-align-center list-style-position-inside'

c_heading.c_heading_text = 'Trending';

module.exports = {
	trending_classes: 'lrv-u-border-a-1 lrv-u-padding-a-025 lrv-u-font-family-primary lrv-a-wrapper-100vw@mobile-max lrv-u-border-l-0@mobile-max lrv-u-border-r-0@mobile-max lrv-u-border-b-0@mobile-max lrv-u-padding-l-00@mobile-max lrv-u-padding-r-00@mobile-max',
	trending_wrapper_classes: 'lrv-u-border-a-15 lrv-u-border-color-brand-primary lrv-u-padding-a-025 lrv-u-border-l-0@mobile-max lrv-u-border-r-0@mobile-max lrv-u-border-b-0@mobile-max lrv-u-padding-l-00@mobile-max lrv-u-padding-r-00@mobile-max',
	trending_list_classes: 'lrv-u-border-a-1 lrv-u-padding-l4 lrv-u-padding-r-1 lrv-u-border-l-0@mobile-max lrv-u-border-r-0@mobile-max',
	list_ordered,
	c_heading,
};
