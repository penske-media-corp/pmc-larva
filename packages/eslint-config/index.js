module.exports = {
	'extends': [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	"overrides": [ {
		"files": [
			"**/*.js"
		],
		"rules": {
			"jsdoc/check-tag-names": "off",
			"jsdoc/require-returns-description": "off"
		}
	} ]
};
