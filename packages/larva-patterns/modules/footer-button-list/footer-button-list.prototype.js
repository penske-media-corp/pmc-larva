const clonedeep = require( 'lodash.clonedeep' );

const c_button_prototype = require( '../../components/c-button/c-button.prototype.js' );
const get_digital_access = clonedeep( c_button_prototype );
const get_magazine = clonedeep( c_button_prototype );
const get_gift = clonedeep( c_button_prototype );
const customer_service = clonedeep( c_button_prototype );

get_digital_access.c_button_type_attr = 'button';
get_digital_access.c_button_inner_classes =
	'lrv-u-display-inline-block lrv-u-border-color-grey lrv-u-border-color-white:hover lrv-u-padding-tb-050 lrv-u-padding-lr-025 lrv-u-width-100p lrv-u-border-a-1';
get_digital_access.c_button_classes =
	'lrv-u-text-align-center lrv-u-margin-b-1 lrv-u-padding-a-025 lrv-u-background-color-brand-primary:hover lrv-u-color-white:hover lrv-u-font-weight-bold lrv-a-font-body-xxs lrv-u-background-color-white lrv-u-color-black cx-dynamic-link';
get_digital_access.c_button_screen_reader_text = 'Get Digital Access';
get_digital_access.c_button_text = 'Get Digital Access';
get_digital_access.c_button_url = '#get-digital-access';

get_magazine.c_button_type_attr = 'button';
get_magazine.c_button_inner_classes =
	'lrv-u-display-inline-block lrv-u-border-color-grey lrv-u-border-color-white:hover lrv-u-padding-tb-050 lrv-u-padding-lr-025 lrv-u-width-100p lrv-u-border-a-1';
get_magazine.c_button_classes =
	'lrv-u-text-align-center lrv-u-margin-b-1 lrv-u-padding-a-025 lrv-u-background-color-brand-primary:hover lrv-u-color-white:hover lrv-u-font-weight-bold lrv-a-font-body-xxs lrv-u-background-color-white lrv-u-color-black';
get_magazine.c_button_screen_reader_text = 'Get The Magazine';
get_magazine.c_button_text = 'Get The Magazine';
get_magazine.c_button_url = '#get-the-magazine';

get_gift.c_button_type_attr = 'button';
get_gift.c_button_inner_classes =
	'lrv-u-display-inline-block lrv-u-border-color-grey lrv-u-border-color-white:hover lrv-u-padding-tb-050 lrv-u-padding-lr-025 lrv-u-width-100p lrv-u-border-a-1';
get_gift.c_button_classes =
	'lrv-u-text-align-center lrv-u-margin-b-1 lrv-u-padding-a-025 lrv-u-background-color-brand-primary:hover lrv-u-color-white:hover lrv-u-font-weight-bold lrv-a-font-body-xxs lrv-u-color-white lrv-u-border-a-1 lrv-u-border-color-grey lrv-u-border-color-brand-primary-dark:hover';
get_gift.c_button_screen_reader_text = 'Get a Gift';
get_gift.c_button_text = 'Get a Gift';
get_gift.c_button_url = '#get-a-gift';

customer_service.c_button_type_attr = 'button';
customer_service.c_button_inner_classes =
	'lrv-u-display-inline-block lrv-u-border-color-grey lrv-u-border-color-white:hover lrv-u-padding-tb-050 lrv-u-padding-lr-025 lrv-u-width-100p lrv-u-border-a-1';
customer_service.c_button_classes =
	'lrv-u-text-align-center lrv-u-margin-b-1 lrv-u-padding-a-025 lrv-u-background-color-brand-primary:hover lrv-u-color-white:hover lrv-u-font-weight-bold lrv-a-font-body-xxs lrv-u-color-white lrv-u-border-a-1 lrv-u-border-color-grey lrv-u-border-color-brand-primary-dark:hover';
customer_service.c_button_screen_reader_text = 'Customer Service';
customer_service.c_button_text = 'Customer Service';
customer_service.c_button_url = '#customer-service';

module.exports = {
	footer_button_list_content_classes:
		'o-footer-button-list__content a-font-body-s lrv-u-flex lrv-u-flex-direction-column a-double-underline a-double-underline-color-grey a-double-underline-bottom@mobile-max lrv-u-padding-b-2@mobile-max',
	footer_button_list_title_classes:
		'lrv-a-font-accent-medium-l lrv-u-font-weight-bold lrv-u-display-none@mobile-max lrv-u-padding-b-050',
	footer_button_list_classes:
		'lrv-u-text-transform-uppercase u-letter-spacing-0063',
	footer_button_list_title_text: '',
	footer_button_list_buttons: [
		get_digital_access,
		get_magazine,
		get_gift,
		customer_service,
	],
};
