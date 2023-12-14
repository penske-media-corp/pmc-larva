const clonedeep = require( 'lodash.clonedeep' );

const o_story_featured = clonedeep(
	require( '@penskemediacorp/larva-patterns/modules/story/story.center-vertical' )
);
const o_story = clonedeep(
	require( '@penskemediacorp/larva-patterns/modules/story/story.vertical' )
);

o_story_featured.c_timestamp = false;
o_story_featured.story_grid_secondary_classes =
	'lrv-u-flex lrv-u-flex-direction-column lrv-u-height-100p lrv-u-justify-content-center@tablet lrv-u-text-align-center@tablet';
o_story_featured.c_title.c_title_classes =
	'lrv-a-font-primary-l c-title lrv-u-display-block lrv-u-margin-b-050';
o_story_featured.c_span.c_span_classes =
	'lrv-u-display-inline-block lrv-u-padding-a-050 lrv-u-background-color-white lrv-u-text-transform-uppercase lrv-a-font-basic-l lrv-u-display-inline-block';
o_story_featured.c_span.c_span_link_classes =
	'lrv-u-color-white lrv-u-background-color-brand-primary lrv-u-line-height-normal lrv-u-padding-a-025 lrv-u-padding-lr-050 lrv-u-display-inline-block';
o_story_featured.c_span.c_span_url = '#';
o_story_featured.c_dek.c_dek_classes =
	'lrv-a-font-secondary-xs lrv-u-margin-tb-050 lrv-u-letter-spacing-0006@tablet lrv-u-width-70p lrv-u-width-100p@mobile-max lrv-u-margin-lr-auto';
o_story_featured.story_nav_classes =
	'lrv-a-font-body-m lrv-u-color-black lrv-u-text-transform-uppercase lrv-u-color-black  lrv-u-justify-content-center@tablet';
o_story_featured.c_tagline_author.c_tagline_classes =
	'lrv-u-color-black lrv-u-margin-l-050';
o_story_featured.story_links_classes =
	'lrv-u-justify-content-center@tablet lrv-u-transform-translateY-n50p u-z-index-middle-bottom lrv-u-position-relative lrv-u-margin-b-00@mobile-max';
o_story_featured.story_nav_layout_classes =
	'lrv-u-flex lrv-u-align-items-center lrv-a-space-children-horizontal lrv-a-space-children--2 lrv-u-margin-t-050';

o_story.story_grid_secondary_classes = '';
o_story.c_timestamp = false;
o_story.c_dek = false;
o_story.story_classes = '';
o_story.c_span.c_span_classes =
	'lrv-a-font-basic-xs lrv-u-border-b-1 lrv-u-text-transform-uppercase lrv-u-padding-b-050';
o_story.c_lazy_image.c_lazy_image_classes = 'lrv-u-margin-b-125';
o_story.c_title.c_title_classes =
	'lrv-a-font-primary-m lrv-u-margin-b-050 lrv-u-font-size-26@mobile-max lrv-u-margin-t-050';
o_story.story_nav_classes =
	'lrv-a-font-body-xxs lrv-u-color-black lrv-u-text-transform-uppercase lrv-u-color-black ';
o_story.c_tagline_author.c_tagline_classes =
	'lrv-a-font-body-xxs lrv-u-color-black lrv-u-margin-l-050 lrv-u-letter-spacing-0106@tablet lrv-u-letter-spacing-0140@mobile-max';
o_story.story_nav_layout_classes =
	'lrv-u-flex lrv-u-align-items-center lrv-a-space-children-horizontal lrv-a-space-children--2 lrv-u-margin-t-050';

const stories = [ o_story, o_story ];

module.exports = {
	o_story_featured,
	top_stories_classes: 'lrv-u-flex lrv-u-flex-wrap-wrap lrv-u-margin-b-075',
	featured_story_classes:
		'lrv-u-width-100p@mobile-max lrv-u-width-70p lrv-u-padding-r-125 lrv-u-padding-r-150@desktop lrv-u-padding-r-00@mobile-max lrv-u-padding-b-2@mobile-max lrv-u-margin-b-2@mobile-max u-border-b-1@mobile-max',
	story_items_classes:
		'lrv-u-width-30p lrv-u-width-100p@mobile-max lrv-a-children-border-vertical lrv-a-space-children lrv-a-space-children--2 lrv-a-space-children-vertical lrv-u-padding-l-125 lrv-u-padding-l-150@desktop lrv-u-padding-l-00@mobile-max',
	story_item_classes: '',
	stories,
};
