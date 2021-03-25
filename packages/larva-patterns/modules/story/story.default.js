const clonedeep = require( 'lodash.clonedeep' );

const story_default = clonedeep( require( './story.prototype' ) );

story_default.story_grid_classes = '';

module.exports = story_default;