const clonedeep = require( 'lodash.clonedeep' );

const profile_block_horizontal = clonedeep(
	require( './profile-block.prototype' )
);

profile_block_horizontal.profile_block_classes =
	'lrv-u-flex@tablet lrv-u-align-items-center';
profile_block_horizontal.profile_block_image_classes =
	'lrv-u-margin-a-00@tablet lrv-u-width-25p@tablet';
profile_block_horizontal.profile_block_detail_classes =
	'lrv-u-text-align-center@mobile-max lrv-u-width-75p@tablet lrv-u-margin-l-2@tablet';

module.exports = profile_block_horizontal;
