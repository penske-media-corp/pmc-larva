const clonedeep = require( 'lodash.clonedeep' );

const c_heading = clonedeep(
	require( '../../components/c-heading/c-heading.prototype' )
);

const c_dek_prototype = require( '../../components/c-dek/c-dek.prototype' );
const c_dek = clonedeep( c_dek_prototype );

c_dek.c_dek_markup = '';
c_dek.c_dek_classes =
	'lrv-u-font-size-28 lrv-u-font-weight-light lrv-u-font-family-body lrv-u-margin-tb-1';

c_heading.c_heading_text = 'Overview';
c_heading.c_heading_classes = 'lrv-u-font-family-secondary lrv-u-font-size-40';

module.exports = {
	c_heading,
	c_dek,
	profile_body_classes: '',
	profile_body_content_classes: 'lrv-u-font-size-18 lrv-u-margin-tb-050',
	profile_body_content_markup:
		'<b>Perfection</b> is rarely achieved in movies, but this heaven-sent concert doc hits the sweet spot. Over two days in January 1972, the Queen of Soul, Aretha Franklin — she was 29 at the time — sweeps into the New Temple Missionary Baptist Church in Watts in front of a congregation and testifies to God in song. The blessed thing took nearly half a century to come out because director Sydney Pollack failed to sync the image with the sound. Then digital angels stepped in, and glory, glory, hallelujah!',
};
