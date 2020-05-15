const clonedeep = require( 'lodash.clonedeep' );

const story_prototype = require( './story.prototype' );
const story_story_arc = clonedeep( story_prototype );

story_story_arc.story_classes = 'a-story-border-decoration';

module.exports = story_story_arc;
