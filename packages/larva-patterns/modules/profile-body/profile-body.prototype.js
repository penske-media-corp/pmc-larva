const clonedeep = require( 'lodash.clonedeep' );

const c_heading = clonedeep( require( '../../components/c-heading/c-heading.prototype' ) );
const c_dek = clonedeep( require( '../../components/c-dek/c-dek.prototype' ) );

c_heading.c_heading_text = 'Overview';
c_heading.c_heading_classes = 'lrv-u-font-family-secondary lrv-u-font-size-40';

c_dek.c_dek_classes = 'lrv-u-font-size-18 lrv-u-margin-tb-050';

module.exports = {
	profile_body_classes: '',
	c_heading: c_heading,
	c_dek: c_dek,
}
