const stylelint = require( 'stylelint' );
const path = require( 'path' );

const ruleName = 'plugin/css-algorithms';

const isString = s => typeof s === "string";
const isArray = a => typeof a === "array";
const messages = {
	rejected: ( prop, algorithmName ) => `The property '${prop}' is not permitted in the algorithm '${algorithmName}'.`
};

module.exports = {

	name: ruleName,
	
	messages: stylelint.utils.ruleMessages( ruleName, messages ),

	rule: function( options ) {

		return function( cssRoot, result ) {

			var validOptions = stylelint.utils.validateOptions( 
				result, 
				ruleName, 
				{
					actual: options,
					possible: {
						'name': [isString],
						'allowed-properties': [isArray]
					}
				}
			);

			if (! validOptions) {
				console.error( 'Invalid options', validOptions );
			}
			
			// should be /^.a-space-children.*/
			var selector = new RegExp( '^.' + options['name'] + '.*' );

			cssRoot.walkRules( selector, function( ruleset ) {

				ruleset.walkDecls( function( decl ) {
					if ( ! options['allowed-properties'].includes( decl.prop ) ) {
						stylelint.utils.report({
							ruleName,
							result,
							node: decl,
							message: `${messages.rejected( decl.prop, options['name'] )} (${ruleName})`
						});
					}
				});

			});
		}
	}
};