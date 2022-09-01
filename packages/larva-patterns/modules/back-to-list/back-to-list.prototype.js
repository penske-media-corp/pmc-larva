const clonedeep = require( 'lodash.clonedeep' );

const c_link = clonedeep(
	require( '../../components/c-link/c-link.prototype' )
);

c_link.c_link_text = 'Back to the full list';
c_link.c_link_classes +=
	' lrv-u-text-transform-uppercase lrv-u-font-family-primary lrv-u-font-size-20 lrv-a-icon-before lrv-a-icon-arrow-left';

module.exports = {
	back_to_list_classes: 'a-hidden@desktop-max',
	c_link,
};
