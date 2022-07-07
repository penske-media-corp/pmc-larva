const clonedeep = require( 'lodash.clonedeep' );

const featured_video_prototype = require( './featured-video.prototype' );
const featured_video = clonedeep( featured_video_prototype );

featured_video.featured_video_classes = 'lrv-a-wrapper-100vw@mobile-max';
featured_video.o_video_card.o_video_card_crop_class =
	'lrv-a-crop-3x2 lrv-a-glue-parent c-play-badge-parent';
featured_video.o_video_card.o_video_card_meta_classes = 'lrv-u-display-none';

module.exports = featured_video;
