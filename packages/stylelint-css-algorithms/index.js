const stylelint = require( 'stylelint' );
const chalk = require( 'chalk' );
const path = require( 'path' );
const { rule, name, messages } = require( './lib/rule' );

module.exports = stylelint.createPlugin( name, rule );
module.exports.ruleName = name;
module.exports.messages = messages;
