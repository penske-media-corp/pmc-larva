const clonedeep = require( 'lodash.clonedeep' );

const c_icon_prototype = require( '../../components/c-icon/c-icon.prototype' );

const social = [ 'instagram', 'pinit', 'twitter', 'facebook', 'youtube' ];
const o_social_list_icons = [];

for ( let i = 0; i < social.length; i++ ) {
	const c_icon = clonedeep( c_icon_prototype );

	c_icon.c_icon_url = '#';
	c_icon.c_icon_name = social[ i ];
	c_icon.c_icon_link_classes +=
		' lrv-u-display-block lrv-u-border-radius-50p lrv-u-color-grey lrv-u-margin-lr-050 lrv-u-padding-a-050 lrv-u-background-color-white lrv-u-color-grey-dark:hover';
	c_icon.c_icon_rel_name = 'noopener noreferrer';

	o_social_list_icons.push( c_icon );
}

module.exports = {
	o_social_list_classes: 'lrv-a-unstyle-list',
	o_social_list_labelledby_attr: '',
	o_social_list_icons,
};
