var stylelint = require("stylelint")
var algo = require("./css-algorithms")

var ruleName = "plugin/css-algorithms"

var messages =  stylelint.utils.ruleMessages(ruleName, {
	expected: "Expected ...",
})

module.exports = stylelint.createPlugin(ruleName, function( options ) {
	return function( cssRoot, result ) {

		var validOptions = stylelint.utils.validateOptions( 
			result, 
			ruleName, 
			{
				actual: options,
				possible: {
					'name': 'a-space-children',
					'allowed-properties': [ 'margin-top', 'margin-left', 'display', 'flex-wrap', '--a-space-children-spacer' ]
				}
			}
		);

		if (!validOptions) { 
			return; 
		}

		cssRoot.walkRules( /^.a-space-children.*/, function( rule ) {

			rule.walkDecls( function( decl ) {
				if ( ! options['allowed-properties'].includes( decl.prop ) ) {
					stylelint.utils.report({
						ruleName,
						result,
						node: decl,
						message: 'bad job, you can\'t use the property ' + decl.prop
					});
				}
			});

		});

	}
})

module.exports.ruleName = ruleName
module.exports.messages = messages


