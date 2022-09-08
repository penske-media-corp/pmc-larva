module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	parser: '@babel/eslint-parser',
	overrides: [
		{
			files: [ '**/*.js' ],
			rules: {
				'jsdoc/require-returns-description': 'off',
				'jsdoc/check-line-alignment': 1,
				'@wordpress/no-global-event-listener': 'off',
			},
		},
	],
	root: true,
};
