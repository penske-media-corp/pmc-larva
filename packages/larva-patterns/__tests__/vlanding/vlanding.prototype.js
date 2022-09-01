const clonedeep = require( 'lodash.clonedeep' );

const header = clonedeep( require( '../../modules/header/header.prototype' ) );
const vlanding_video_showcase = clonedeep(
	require( '../../modules/vlanding-video-showcase/vlanding-video-showcase.prototype' )
);
const vlanding_playlist = clonedeep(
	require( '../../modules/vlanding-playlist/vlanding-playlist.prototype' )
);

module.exports = {
	vlanding_video_showcase,
	vlanding_playlist,
	header,
};
