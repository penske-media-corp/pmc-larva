var stylelint = require("stylelint")
var chalk = require( "chalk")

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
		
		// should be /^.a-space-children.*/
		var selector = new RegExp( '^.' + options['name'] + '.*' );
		
		cssRoot.walkRules( selector, function( rule ) {

			rule.walkDecls( function( decl ) {
				if ( ! options['allowed-properties'].includes( decl.prop ) ) {
					stylelint.utils.report({
						ruleName,
						result,
						node: decl,
						message: decl.prop + ' is not allowed in ' + options['name']
					});
				}
			});

		});

	}
})

module.exports.ruleName = ruleName
module.exports.messages = messages


