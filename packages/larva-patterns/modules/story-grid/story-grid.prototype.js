const clonedeep = require( 'lodash.clonedeep' );

const story_card = clonedeep( require( '../story/story.vertical' ) );

story_card.story_nav_classes = 'lrv-u-font-size-12 lrv-u-font-family-secondary';
story_card.story_grid_secondary_classes = 'lrv-a-span2';
story_card.c_dek.c_dek_classes += ' lrv-u-font-family-body';

module.exports = {
	story_grid_classes: '',
	story_grid_grid_classes: 'lrv-a-grid lrv-a-cols2 lrv-a-cols4@desktop',
	story_grid_story_cards: [
		story_card,
		story_card,
		story_card,
		story_card,
		story_card,
		story_card,
		story_card,
		story_card,
	],
};
