const clonedeep = require( 'lodash.clonedeep' );

const c_heading = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype' ) );

c_heading.c_heading_text = 'Click here to toggle content';

module.exports = {
	accordion_classes: '',
	accordion_heading_classes: 'lrv-u-font-weight-bold',
	accordion_heading: c_heading,
	accordion_collapsible_data_attr: 'collapsed',
	accordion_collapsible_toggle_data_attr: 'always-show',
	accordion_markup:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
