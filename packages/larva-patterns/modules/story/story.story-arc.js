const clonedeep = require( 'lodash.clonedeep' );

const story_prototype = require( './story.prototype' );
const story_story_arc = clonedeep( story_prototype );

module.exports = story_story_arc;
