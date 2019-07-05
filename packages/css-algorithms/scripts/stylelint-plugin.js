var stylelint = require("stylelint")
var algo = require("./css-algorithms")

var ruleName = "plugin/css-algorithms"

var messages =  stylelint.utils.ruleMessages(ruleName, {
	expected: "Expected ...",
})

module.exports = stylelint.createPlugin(ruleName, function( primaryOption ) {
	return function( cssRoot, result ) {

		var validOptions = stylelint.utils.validateOptions( 
			result, 
			ruleName, 
			{
				actual: primaryOption,
				possible: {
					'allowed-properties': [ 'margin-top' ]
				}
			}
		);

		if (!validOptions) { 
			return; 
		}
		
		cssRoot.walkDecls( 'margin-top', function( decl ) {
			if ( 'margin-top' === decl.prop ) {
				stylelint.utils.report({
					ruleName,
					result,
					node: decl,
					message: 'you used a margin-top, good job'
				});
			}
		});

		// stylelint.utils.report({
		// 	ruleName,
		// 	result,
		// 	message: 'bad job'
		// });
	}
})

module.exports.ruleName = ruleName
module.exports.messages = messages


