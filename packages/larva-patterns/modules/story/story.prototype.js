const clonedeep = require( 'lodash.clonedeep' );

const c_span_prototype = require( '@penskemediacorp/larva-patterns/components/c-span/c-span.prototype' );
const c_title_prototype = require( '@penskemediacorp/larva-patterns/components/c-title/c-title.prototype' );
const c_dek_prototype = require( '@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype' );
const c_tagline_prototype = require( '@penskemediacorp/larva-patterns/components/c-tagline/c-tagline.prototype' );
const c_lazy_image_prototype = require( '@penskemediacorp/larva-patterns/components/c-lazy-image/c-lazy-image.prototype' );

const c_span = clonedeep( c_span_prototype );
const c_title = clonedeep( c_title_prototype );
const c_dek = clonedeep( c_dek_prototype );
const c_tagline_author = clonedeep( c_tagline_prototype );
const c_lazy_image = clonedeep( c_lazy_image_prototype );

c_span.c_span_classes += ' lrv-u-color-brand-primary lrv-u-font-size-12 lrv-u-font-size-14@tablet lrv-u-font-weight-bold u-text-transform-lowercase lrv-u-font-family-primary';
c_span.c_span_link_classes = 'u-color-brand-primary-dark:hover';
c_span.c_span_text = 'News';
c_span.c_span_url = '#';

c_title.c_title_text = '‘A Momentous Weekend’: LACMA’s High-Stakes Collectors Committee Event Raises $2.4 M.';
c_title.c_title_classes = "lrv-u-font-size-14 lrv-u-font-size-26@tablet lrv-u-font-size-32@desktop lrv-u-font-family-primary lrv-u-display-block u-font-weight-normal@mobile-max lrv-u-line-height-small lrv-u-margin-b-050";
c_title.c_title_link_classes = 'lrv-a-unstyle-link u-color-brand-primary:hover';

c_dek.c_dek_text = '';
c_dek.c_dek_markup = "Lorem ipsum <i>dolor</i> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
c_dek.c_dek_classes = 'lrv-u-font-weight-light lrv-u-font-size-16 lrv-u-font-size-18@desktop-xl a-hidden@mobile-max lrv-u-margin-a-00';

c_tagline_author.c_tagline_classes = 'lrv-u-margin-l-050';
c_tagline_author.c_tagline_markup = "<a href='#'>Staff Writter</a>";
c_tagline_author.c_tagline_text = false;

c_lazy_image.c_lazy_image_classes += ' u-box-shadow-dark';
c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-2x3';

module.exports = {
	story_classes: '',
	story_nav_classes: 'lrv-u-font-size-12 lrv-u-font-family-primary lrv-u-text-transform-uppercase lrv-u-font-weight-bold',
	story_grid_classes: 'lrv-a-grid lrv-a-cols3',
	story_grid_primary_classes: '',
	story_grid_secondary_classes: 'a-span2',
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
