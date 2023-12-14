const clonedeep = require( 'lodash.clonedeep' );
const more_stories_button_prototype = require( './more-stories-button.prototype' );

const more_stories_button_profile = clonedeep( more_stories_button_prototype );

more_stories_button_profile.c_button.c_button_classes =
	'js-ProfileFilter-loadMore lrv-a-unstyle-button lrv-u-cursor-pointer lrv-u-padding-tb-050 lrv-u-padding-lr-1 lrv-u-background-color-black lrv-u-color-white lrv-u-color-white:hover lrv-u-text-align-center lrv-u-font-size-28 lrv-u-display-block lrv-u-border-radius-5 lrv-u-width-100p lrv-u-font-family-primary lrv-u-font-weight-bold';
more_stories_button_profile.c_button.c_button_url = false;
more_stories_button_profile.c_button.c_button_text = 'Load More';
more_stories_button_profile.c_button_prev = false;
more_stories_button_profile.c_button_next = false;

module.exports = more_stories_button_profile;
