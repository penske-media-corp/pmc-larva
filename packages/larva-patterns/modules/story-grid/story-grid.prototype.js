const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const story_card = __experimentalCloneWithFallback( 'objects/o-card/o-card.story-vertical' );

story_card.c_dek.c_dek_classes = 'lrv-a-font-body-s lrv-a-hidden@mobile-max lrv-u-margin-a-00';
story_card.c_title.c_title_classes = 'lrv-a-font-primary-xxs lrv-u-display-block lrv-u-margin-b-050';
story_card.story_grid_secondary_classes = 'lrv-a-span2';
story_card.story_links_classes += ' lrv-u-margin-t-050';
story_card.o_author.o_author_classes = 'lrv-a-font-secondary-m';
story_card.o_author.story_nav_layout_classes = 'lrv-u-flex lrv-u-align-items-center lrv-a-space-children-horizontal lrv-a-space-children--2 lrv-a-hidden@mobile-max lrv-u-margin-t-050';

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
