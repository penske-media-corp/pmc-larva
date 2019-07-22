const path = require( 'path' );
const fs = require( 'fs' );

const rules = {
	'extends': '/Users/laraschenck/Sites/pmc/pmc-larva/packages/stylelint-config/index.js',
	'plugins': '../stylelint-css-algorithms/index.js',
	'rules': {
		'plugin/css-algorithms': [
			{
				'name': 'a-space-children',
				'allowed-properties': [
					'margin-top',
					'margin-left',
					'display',
					'--a-space-children-spacer',
					'flex-wrap'
				]
			}
		]
	}
};

module.exports = rules;