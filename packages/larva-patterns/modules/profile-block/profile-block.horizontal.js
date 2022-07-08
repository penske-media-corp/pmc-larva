const clonedeep = require( 'lodash.clonedeep' );

const profile_block_horizontal = clonedeep( require( './profile-block.prototype' ) );

profile_block_horizontal.profile_block_classes = 'lrv-u-flex@tablet';

profile_block_horizontal.profile_block_image_classes = 'lrv-u-margin-b-150@mobile-max lrv-u-margin-a-00@tablet lrv-u-width-25p@tablet'


module.exports = profile_block_horizontal;
