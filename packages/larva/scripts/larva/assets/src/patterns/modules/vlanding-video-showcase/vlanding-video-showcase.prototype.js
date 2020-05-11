const clonedeep = require( 'lodash.clonedeep' );
const vlanding_video_showcase = clonedeep( require( '@penskemediacorp/larva-patterns/modules/vlanding-video-showcase/vlanding-video-showcase.prototype' ) );

// Add some different styling
vlanding_video_showcase.vlanding_video_showcase_classes += ' lrv-u-background-color-black lrv-u-color-white lrv-u-padding-a-1';

// Iterate over the cards and make modifications to each
vlanding_video_showcase.vlanding_video_showcase_video_cards.map( ( card ) => { 
	card.vlanding_video_card_classes += ' lrv-u-border-a-1 lrv-u-border-color-white';

	// Note that you will need to mimic this structure in PHP to properly translate this text
	card.vlanding_video_card_active_txt_attr = 'Current'; 
});

module.exports = vlanding_video_showcase;