const clonedeep = require( 'lodash.clonedeep' );

const story_card = clonedeep( require( '../story/story.vertical' ) );
const story_grid_story_cards = new Array( 8 ).fill( story_card );

module.exports = {
	story_grid_classes: '',
	story_grid_grid_classes: 'lrv-a-grid lrv-a-cols2 lrv-a-cols4@desktop',
	story_grid_story_cards,
};
