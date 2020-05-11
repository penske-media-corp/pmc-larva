const clonedeep = require( 'lodash.clonedeep' );

// Clone the project version of video showcase, and work from that
const vlanding_video_showcase_variant = clonedeep( require( './vlanding-video-showcase.prototype' ) );

// Hide the social share and videos thumbnails / cards for this version.
vlanding_video_showcase_variant.social_share = false;
vlanding_video_showcase_variant.vlanding_video_showcase_video_cards = false;

module.exports = vlanding_video_showcase_variant;