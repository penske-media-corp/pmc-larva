const stylelint = require( 'stylelint' );
const { rule, name, messages } = require( './lib/rule' );

module.exports = stylelint.createPlugin( name, rule );
module.exports.ruleName = name;
module.exports.messages = messages;
