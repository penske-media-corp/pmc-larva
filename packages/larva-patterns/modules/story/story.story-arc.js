const clonedeep = require( 'lodash.clonedeep' );

const story_story_arc = clonedeep( require( './story.prototype' ) );

const story_arc_stories = clonedeep(
	require( '../story-arc-stories/story-arc-stories.prototype' )
);

story_story_arc.story_arc_stories = story_arc_stories;

module.exports = story_story_arc;
