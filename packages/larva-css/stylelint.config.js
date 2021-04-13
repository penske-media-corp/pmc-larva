const path = require( 'path' );

const rules = {
	extends: path.resolve( __dirname, '../stylelint-config/index.js' ),
	plugins: path.resolve( __dirname, '../stylelint-css-algorithms/index.js' ),
	rules: {
		'plugin/css-algorithms': {
			'pmc-a-space-children': [
				'margin-top',
				'margin-left',
				'display',
				'--a-space-children-spacer',
				'flex-wrap',
			],
			'a-glue': [
				'top',
				'right',
				'bottom',
				'left',
				'position',
				'z-index',
				'--a-glue-bottom',
				'--a-glue-top',
				'--a-glue-right',
				'--a-glue-left',
			],
			'pmc-a-hover-dropup': [
				'min-width',
				'position',
				'visibility',
				'opacity',
				'width',
				'left',
				'bottom',
				'overflow-y',
				'cursor',
				'--a-icon-transform',
				'z-index',
				'max-height',
			],
		},
	},
};

module.exports = rules;
