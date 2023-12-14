const clonedeep = require( 'lodash.clonedeep' );

const o_figure = clonedeep(
	require( '../../objects/o-figure/o-figure.prototype.js' )
);
const story = clonedeep( require( '../story/story.center-vertical' ) );
const article_kicker_prototype = clonedeep(
	require( '../article-kicker/article-kicker.prototype' )
);

o_figure.c_figcaption.c_figcaption_caption_markup = 'test';
o_figure.c_lazy_image.c_lazy_image_placeholder_url =
	'https://picsum.photos/1000/1000';
o_figure.c_lazy_image.c_lazy_image_classes = 'lrv-a-wrapper-100vw@mobile-max';
o_figure.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-3x2';
o_figure.o_figure_classes = 'lrv-a-glue-parent@tablet';
o_figure.c_figcaption.c_figcaption_classes =
	'lrv-u-color-white lrv-a-glue@tablet lrv-a-glue-parent@mobile-max lrv-u-flex lrv-u-flex-direction-column lrv-a-glue--b-0 lrv-a-glue--l-0 lrv-u-width-20p lrv-u-width-100p@mobile-max lrv-u-align-items-center';
o_figure.c_figcaption.c_figcaption_credit_classes =
	'lrv-a-font-primary-xl lrv-u-padding-tb-125@mobile-max lrv-u-border-b-1@mobile-max lrv-u-text-align-center@tablet lrv-u-text-transform-uppercase lrv-u-font-family-secondary';
o_figure.c_figcaption.c_figcaption_credit_text = 'Prince Dead At 57';
o_figure.c_figcaption.c_figcaption_caption_classes =
	'u-background-white@mobile-max lrv-a-glue@mobile-max lrv-a-glue--b-unset@mobile-max lrv-a-glue--t-0 lrv-a-glue--l-0 lrv-u-transform-translateY-n50p lrv-u-font-family-secondary lrv-u-font-size-20 u-line-height-18 u-letter-spacing-012 lrv-u-border-t-5 lrv-u-border-b-1 lrv-u-padding-tb-050 lrv-u-padding-lr-125';
o_figure.c_figcaption.c_figcaption_caption_markup = '1958 – 2021';

//story.c_lazy_image = false;
story.c_dek = false;
story.c_timestamp = false;
story.c_link_bottom = false;
story.c_span = false;
story.article_kicker = clonedeep( article_kicker_prototype );
story.story_grid_primary_classes =
	'lrv-a-hidden@tablet lrv-u-margin-b-150@mobile-max';
story.story_classes =
	'lrv-a-grid-item lrv-u-padding-t-125@mobile-max lrv-u-border-l-00@mobile-max';
story.c_title.c_title_classes = 'lrv-a-font-primary-xs';
story.story_links_classes =
	'lrv-u-justify-content-center@tablet lrv-u-margin-b-00';
story.story_grid_secondary_classes =
	'lrv-a-span2 lrv-u-color-brand-primary:hover lrv-u-padding-lr-1 lrv-u-padding-lr-2@desktop-xl lrv-u-text-align-center@tablet';
story.c_tagline_author_wrapper_classes =
	'lrv-u-text-transform-uppercase lrv-u-font-size-12 lrv-u-line-height-copy u-letter-spacing-011';
story.story_nav_layout_classes =
	'lrv-u-flex lrv-u-align-items-center lrv-a-space-children-horizontal lrv-a-space-children--2 lrv-u-margin-t-075';
story.story_nav_classes =
	'lrv-u-font-size-12 lrv-u-font-family-body lrv-u-justify-content-center@tablet';
module.exports = {
	wrapper_classes: 'lrv-u-padding-lr-150@mobile-max',
	stories_outer_classes:
		'lrv-a-grid lrv-a-cols3@tablet lrv-a-children-border-horizontal lrv-a-children-border-vertical@mobile-max lrv-u-padding-tb-150 lrv-u-padding-tb-00@mobile-max',
	o_figure,
	stories: [ story, story, story ],
};
