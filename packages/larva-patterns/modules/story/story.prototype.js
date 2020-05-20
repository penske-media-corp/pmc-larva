const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep( require( '../../components/c-span/c-span.prototype' ) );
const c_title = clonedeep( require( '../../components/c-title/c-title.prototype' ) );
const c_dek = clonedeep( require( '../../components/c-dek/c-dek.prototype' ) );
const c_lazy_image = clonedeep( require( '../../components/c-lazy-image/c-lazy-image.prototype' ) );
const c_tagline = clonedeep( require( '../../components/c-tagline/c-tagline.prototype' ) );
const c_tagline_author = clonedeep( c_tagline );

c_span.c_span_classes += ' lrv-u-color-brand-primary lrv-u-font-size-12 lrv-u-font-size-14@tablet lrv-u-font-weight-bold lrv-u-text-transform-lowercase lrv-u-font-family-primary';
c_span.c_span_link_classes = 'lrv-u-color-brand-primary-dark:hover';
c_span.c_span_text = 'News';
c_span.c_span_url = '#';

c_title.c_title_text = '‘A Momentous Weekend’: LACMA’s High-Stakes Collectors Committee Event Raises $2.4 M.';
c_title.c_title_classes = 'lrv-u-font-size-14 lrv-u-font-size-26@tablet lrv-u-font-size-32@desktop lrv-u-font-family-primary lrv-u-display-block lrv-u-font-weight-normal lrv-u-font-weight-bold@desktop lrv-u-line-height-small lrv-u-margin-b-050';
c_title.c_title_link_classes = 'lrv-a-unstyle-link lrv-u-color-brand-primary:hover';

c_dek.c_dek_text = '';
c_dek.c_dek_markup = 'Lorem ipsum <i>dolor</i> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.';
c_dek.c_dek_classes = 'lrv-u-font-weight-light lrv-u-font-size-16 lrv-u-font-size-18@desktop-xl lrv-a-hidden@mobile-max lrv-u-margin-a-00';

c_tagline.c_tagline_classes = 'lrv-u-margin-l-050';
c_tagline.c_tagline_markup = "<a href='#'>Staff Writter</a>";
c_tagline.c_tagline_text = false;

c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-2x3';

module.exports = {
	story_classes: '',
	story_nav_classes: 'lrv-u-font-size-12 lrv-u-font-family-primary lrv-u-text-transform-uppercase lrv-u-font-weight-bold',
	story_grid_classes: 'lrv-a-grid lrv-a-cols3',
	story_grid_primary_classes: '',
	story_grid_secondary_classes: 'lrv-a-span2',
	c_span: c_span,
	c_link: false,
	c_title: c_title,
	c_dek: c_dek,
	c_lazy_image: c_lazy_image,
	c_tagline_author: c_tagline_author,
	c_timestamp: {
		c_timestamp_text: 'September 3, 2019 7:51pm',
	},
};
