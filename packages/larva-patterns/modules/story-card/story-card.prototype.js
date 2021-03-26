const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep( require( '../../components/c-span/c-span.prototype' ) );
const c_title = clonedeep( require( '../../components/c-title/c-title.prototype' ) );
const c_link = clonedeep( require( '../../components/c-link/c-link.prototype' ) );
const c_dek = clonedeep( require( '../../components/c-dek/c-dek.prototype' ) );
const c_lazy_image = clonedeep( require( '../../components/c-lazy-image/c-lazy-image.prototype' ) );
const c_tagline = clonedeep( require( '../../components/c-tagline/c-tagline.prototype' ) );
const c_timestamp = clonedeep( require( '../../components/c-timestamp/c-timestamp.prototype' ) );
const c_tagline_author = clonedeep( c_tagline );

c_span.modifier_class = 'lrv-a-font-basic-s';
c_span.c_span_classes = 'lrv-u-color-brand-primary';
c_span.c_span_link_classes = 'lrv-u-color-brand-primary-dark:hover';
c_span.c_span_text = 'News';
c_span.c_span_url = '#';

c_title.modifier_class = 'lrv-a-font-primary-m';
c_title.c_title_text = '‘A Momentous Weekend’: LACMA’s High-Stakes Collectors Committee Event Raises $2.4 M.';
c_title.c_title_classes = 'lrv-u-margin-b-050';
c_title.c_title_link_classes = 'lrv-a-unstyle-link lrv-u-color-brand-primary:hover';

c_dek.modifier_class = 'lrv-a-font-body-m';
c_dek.c_dek_text = '';
c_dek.c_dek_markup = 'Lorem ipsum <i>dolor</i> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.';
c_dek.c_dek_classes = 'lrv-a-hidden@desktop-max lrv-u-margin-a-00';

c_tagline_author.modifier_class = 'lrv-a-font-basic-s';
c_tagline_author.c_tagline_markup = "By <a href='#'>Staff Writter</a>";
c_tagline_author.c_tagline_text = false;

c_link.modifier_class = 'lrv-a-font-accent-s';
c_link.c_link_classes = 'lrv-u-color-brand-primary lrv-u-border-color-brand-secondary lrv-u-border-b-1';
c_link.c_link_text = 'Read More';

c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-2x3';

c_timestamp.modifier_class = 'lrv-a-font-basic-s';

module.exports = {
	story_card_classes: '',
	story_card_nav_classes: 'lrv-u-font-size-12 lrv-u-font-family-primary lrv-u-text-transform-uppercase',
	story_card_grid_classes: 'lrv-a-grid lrv-a-cols3 lrv-a-cols4@desktop',
	story_card_grid_primary_classes: 'lrv-a-span2@desktop',
	story_card_grid_secondary_classes: 'lrv-a-span2',
	c_span: c_span,
	c_link: false,
	c_title: c_title,
	c_link,
	c_dek: c_dek,
	c_lazy_image: c_lazy_image,
	c_tagline_author: c_tagline_author,
	c_timestamp: c_timestamp
};
