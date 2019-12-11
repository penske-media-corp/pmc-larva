const clonedeep = require( 'lodash.clonedeep' );

const profile_blurb_card = clonedeep( require( '../profile-blurb/profile-blurb.card' ) );

module.exports = {
	profile_card_list_classes: 'lrv-a-unstyle-list',
	profile_card_list: [
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card,
		profile_blurb_card
	]
}
