const stylelint = require( 'stylelint' );
const path = require( 'path' );

const ruleName = 'plugin/css-algorithms';
const isString = s => typeof s === 'string';
const isObject = o => typeof o === 'object';

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
					possible: [isObject]
				}
			);

			if (! validOptions) {
				console.error( 'Invalid options', validOptions );
			}
			
			Object.keys( options ).map( function( key, index ) {

				var selector = new RegExp( '^.' + key + '.*' );
				var allowedProperties = options[ key ];
				
				cssRoot.walkRules( selector, function( ruleset ) {
	
					ruleset.walkDecls( function( decl ) {
						if ( ! allowedProperties.includes( decl.prop ) ) {
							stylelint.utils.report({
								ruleName,
								result,
								node: decl,
								message: `${messages.rejected( decl.prop, key )} (${ruleName})`
							});
						}
					});
	
				});
			});

		}
	}
};