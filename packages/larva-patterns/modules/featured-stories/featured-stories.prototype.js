const clonedeep = require( 'lodash.clonedeep' );

const story_prototype = require( '@penskemediacorp/larva-patterns/modules/story/story.prototype' );
const article_kicker = require( '@penskemediacorp/larva-patterns/modules/article-kicker/article-kicker.prototype' );

const story = clonedeep( story_prototype );

story.story_grid_classes = '';

story.story_grid_primary_classes = 'lrv-u-margin-r-00';

story.story_grid_secondary_classes +=
	' lrv-u-padding-lr-1 lrv-u-padding-lr-2@desktop-xl lrv-u-padding-tb-075 lrv-u-padding-tb-150@desktop-xl';

const featured_story = clonedeep( story );

story.article_kicker = article_kicker;
story.c_span = false;

/**
 * Budle all objects.
 */
module.exports = {
	featured_stories_classes: '',
	featured_story,
	featured_stories_secondary_classes: 'lrv-a-grid lrv-a-cols3@desktop',
	story_items: [ story, story, story ],
};
