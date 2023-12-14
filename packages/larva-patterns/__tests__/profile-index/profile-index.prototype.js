const clonedeep = require( 'lodash.clonedeep' );

module.exports = {
	profile_filter: clonedeep(
		require( '../../modules/profile-filter/profile-filter.prototype' )
	),
	profile_card_list: clonedeep(
		require( '../../modules/profile-card-list/profile-card-list.prototype' )
	),
};
