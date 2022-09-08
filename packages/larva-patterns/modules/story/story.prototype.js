const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );
const clonedeep = require( 'lodash.clonedeep' );

const c_span = __experimentalCloneWithFallback(
	'components/c-span/c-span.tag'
);
const c_title = __experimentalCloneWithFallback(
	'components/c-title/c-title.prototype'
);
const c_dek = __experimentalCloneWithFallback(
	'components/c-dek/c-dek.prototype'
);
const c_tagline = __experimentalCloneWithFallback(
	'components/c-tagline/c-tagline.prototype'
);
const c_timestamp = __experimentalCloneWithFallback(
	'components/c-timestamp/c-timestamp.prototype'
);

const c_tagline_author = clonedeep( c_tagline );
const c_lazy_image = clonedeep(
	require( '../../components/c-lazy-image/c-lazy-image.prototype' )
);

c_title.c_title_text =
	'‘A Momentous Weekend’: LACMA’s High-Stakes Collectors Committee Event Raises $2.4 M.';
c_title.c_title_classes =
	'lrv-u-font-size-14 lrv-u-font-size-26@tablet lrv-u-font-size-32@desktop lrv-u-font-family-primary lrv-u-display-block lrv-u-font-weight-normal lrv-u-font-weight-bold@desktop lrv-u-line-height-small lrv-u-margin-b-050';
c_title.c_title_link_classes =
	'lrv-a-unstyle-link lrv-u-color-brand-primary:hover';

c_dek.c_dek_text = false;
c_dek.c_dek_markup =
	'Lorem ipsum <i>dolor</i> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.';

c_tagline_author.c_tagline_classes = 'lrv-u-margin-l-050';
c_tagline_author.c_tagline_markup = "<a href='#'>Staff Writer</a>";
c_tagline_author.c_tagline_text = false;

c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-3x2';

module.exports = {
	story_classes: '',
	story_nav_classes:
		'lrv-u-font-size-12 lrv-u-font-family-primary lrv-u-text-transform-uppercase lrv-u-font-weight-bold lrv-u-color-black ',
	story_nav_layout_classes:
		'lrv-u-flex lrv-u-align-items-center lrv-a-space-children-horizontal lrv-a-space-children--2 lrv-a-hidden@mobile-max lrv-u-margin-t-050',
	story_grid_classes: 'lrv-a-grid lrv-a-cols3',
	story_grid_primary_classes:
		'lrv-u-margin-r-2@desktop-xl lrv-u-margin-r-00 lrv-u-margin-r-1@desktop',
	story_grid_secondary_classes: 'lrv-a-span2',
	story_links_classes: '',
	c_span,
	c_link: false,
	c_link_bottom: false,
	c_link_bottom_wrapper_classes: '',
	c_title,
	c_dek,
	c_lazy_image,
	c_tagline_author,
	c_timestamp,
};
