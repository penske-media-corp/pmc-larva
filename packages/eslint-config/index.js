module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	"overrides": [{
		"files": [
			"**/*.js"
		],
		"rules": {
			"jsdoc/require-returns-description": "off",
			"jsdoc/check-line-alignment": "always",
			"@wordpress/no-global-event-listener": "off"
		},
	}],
};
