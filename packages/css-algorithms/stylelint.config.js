const path = require( 'path' );
const fs = require( 'fs' );

const rules = {
	'extends': '/Users/laraschenck/Sites/pmc/pmc-larva/packages/stylelint-config/index.js',
	'plugins': path.resolve( __dirname, '../stylelint-css-algorithms/index.js' ),
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
			},
			{
				'name': 'a-glue',
				'allowed-properties': [
					'position',
					'top',
					'right',
					'bottom',
					'left',
					'--a-glue-bottom',
					'--a-glue-top',
					'--a-glue-right',
					'--a-glue-left'
				]
			}
		]
	}
};

module.exports = rules;