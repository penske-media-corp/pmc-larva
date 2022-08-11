module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	"overrides": [{
		"files": [
			"**/*.js"
		],
		"rules": {
			"jsdoc/require-returns-description": "off",
			"jsdoc/check-line-alignment": 1,
			"@wordpress/no-global-event-listener": "off"
		},
	}],
};
