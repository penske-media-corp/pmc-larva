const stylelint = require( 'stylelint' );
const path = require( 'path' );

const RULE_NAME = 'plugin/css-algorithms';

module.exports = {

	messages: stylelint.utils.ruleMessages( RULE_NAME, {
		expected: "Expected ...",
	}),

	name: RULE_NAME,

	rule: function( options ) {
		return function( cssRoot, result ) {

			var validOptions = stylelint.utils.validateOptions( 
				result, 
				RULE_NAME, 
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
	}
};