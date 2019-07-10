const path = require( 'path' );
const fs = require( 'fs' );

const rules = {
	'plugins': './scripts/stylelint-css-algorithms.js',
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