const clonedeep = require( 'lodash.clonedeep' );

const c_link_prototype = require( '../../components/c-link/c-link.prototype' );
const c_tagline_prototype = require( '../../components/c-tagline/c-tagline.prototype' );
const c_timestamp_prototype = require( '../../components/c-timestamp/c-timestamp.prototype' );

const c_timestamp = clonedeep( c_timestamp_prototype );
c_timestamp.c_timestamp_classes = 'lrv-u-margin-l-auto lrv-u-color-black';
c_timestamp.c_timestamp_text = 'September 3, 2019 7:51pm';
c_timestamp.c_timestamp_datetime_attr = '2019-09-03';

const author_details_prototype = require( '../author-details/author-details.prototype' );
const author_details = clonedeep( author_details_prototype );

c_link_author = clonedeep( c_link_prototype );
c_link_author.c_link_text = 'David Robb';
c_link_author.c_link_classes =
	'lrv-u-color-black lrv-u-color-brand-primary:hover lrv-u-text-decoration-underline:hover';
c_link_author.c_link_url = '#';

const c_tagline_multiple_authors = clonedeep( c_tagline_prototype );
c_tagline_multiple_authors.c_tagline_classes =
	'lrv-u-display-inline lrv-u-margin-r-050 lrv-a-children-link-color-black lrv-a-children-link-color-brand-primary:hover lrv-a-children-link-decoration-underline:hover lrv-u-text-transform-uppercase lrv-u-letter-spacing-015 lrv-u-letter-spacing-012@mobile-max';
c_tagline_multiple_authors.c_tagline_markup =
	"<a href='#'>Link 1</a>, <a href='#'>Link 2</a>";
c_tagline_multiple_authors.c_tagline_text = false;

module.exports = {
	author_classes:
		'lrv-u-font-size-16 lrv-u-font-family-body lrv-u-font-size-13@mobile-max',
	author_multiple_inner_classes: 'lrv-u-flex@desktop',
	author_single_inner_classes: ' lrv-u-flex lrv-u-align-items-center',
	author_name_classes:
		'lrv-u-margin-tb-00 lrv-u-text-transform-uppercase lrv-u-letter-spacing-015 lrv-u-letter-spacing-012@mobile-max',
	author_content_classes:
		'lrv-u-flex@tablet lrv-u-width-100p lrv-u-justify-content-space-between',
	author_content_inner_classes:
		'lrv-u-flex lrv-u-align-items-center lrv-a-glue-parent',
	author_timestamp_outer_classes: 'lrv-u-margin-l-1@tablet',
	author_tagline_classes:
		'lrv-u-margin-tb-00 lrv-u-text-transform-uppercase lrv-u-letter-spacing-015 lrv-u-letter-spacing-012@mobile-max',
	author_button_classes:
		'lrv-u-display-contents lrv-u-flex lrv-u-align-items-center lrv-a-unstyle-button js-PopOver',
	author_detail_outer_classes:
		'lrv-a-hidden@desktop-max lrv-a-glue lrv-a-glue--l-0 lrv-a-glue--t-100p js-PopOver-target',
	is_multiple_author: false,
	c_tagline_multiple_authors,
	c_timestamp,
	c_link: c_link_author,
	c_icon: false,
	author_details,
};
