module.exports = {
	// env: {
	// 	jest: true
	// },
	// plugins: [
	// 	'jest',
	// ],
	extends: [ 
		'plugin:@wordpress/eslint-plugin/recommended',
		'plugin:@wordpress/eslint-plugin/test-unit',
	 ],
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
