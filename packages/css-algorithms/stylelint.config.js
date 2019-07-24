const path = require( 'path' );
const fs = require( 'fs' );

const rules = {
	'extends': '/Users/laraschenck/Sites/pmc/pmc-larva/packages/stylelint-config/index.js',
	'plugins': path.resolve( __dirname, '../stylelint-css-algorithms/index.js' ),
	'rules': {
		'plugin/css-algorithms': {
			'a-space-children': [
				'margin-top',
				'margin-left',
				'display',
				'--a-space-children-spacer',
				'flex-wrap'
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
				'--a-glue-left'
			]
		}
	}
};

module.exports = rules;