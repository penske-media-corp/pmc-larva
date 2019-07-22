const stylelint = require( "stylelint" );
const chalk = require( "chalk" );
const path = require( "path" );

const rule = path.resolve( __dirname, 'lib/rule' ).rule;
const ruleName = path.resolve( __dirname, 'lib/rule' ).name;

const messages =  stylelint.utils.ruleMessages(ruleName, {
	expected: "Expected ...",
})

module.exports = stylelint.createPlugin(ruleName, function( options ) {
	return rule;
})

module.exports.ruleName = ruleName
module.exports.messages = messages
