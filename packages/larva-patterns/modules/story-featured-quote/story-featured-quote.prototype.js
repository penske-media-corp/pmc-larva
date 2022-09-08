const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );
const clonedeep = require( 'lodash.clonedeep' );

const c_title = __experimentalCloneWithFallback(
	'components/c-title/c-title.prototype'
);
const c_tagline = __experimentalCloneWithFallback(
	'components/c-tagline/c-tagline.prototype'
);
const c_tagline_author = clonedeep( c_tagline );

c_title.c_title_text =
	'‘A Momentous Weekend’: LACMA’s High-Stakes Collectors Committee Event Raises $2.4 M.';
c_title.c_title_classes =
	'lrv-u-font-size-14 lrv-u-font-family-primary lrv-u-display-block lrv-u-font-weight-normal lrv-u-line-height-small';
c_title.c_title_link_classes =
	'lrv-a-unstyle-link lrv-u-color-brand-primary:hover';

c_tagline_author.c_tagline_classes = 'lrv-u-margin-l-050';
c_tagline_author.c_tagline_markup = "<a href='#'>Staff Writer</a>";
c_tagline_author.c_tagline_text = false;

module.exports = {
	story_featured_quote_classes: 'lrv-u-text-align-center',
	story_quote_markup:
		'Lorem ipsum <i>dolor</i> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
	story_quote_markup_classes: 'lrv-a-font-primary-l',
	story_nav_classes:
		'lrv-u-font-size-12 lrv-u-font-family-primary lrv-u-text-transform-uppercase lrv-u-font-weight-bold lrv-u-color-black ',
	story_nav_layout_classes:
		'lrv-u-flex lrv-u-align-items-center lrv-a-space-children-horizontal lrv-a-space-children--2 lrv-a-hidden@mobile-max lrv-u-margin-t-050 lrv-u-justify-content-center',
	c_title,
	c_dek_url: '#',
	c_dek_url_classes: 'lrv-u-color-black lrv-a-unstyle-link',
	c_tagline_author,
};
