'use strict';

const path = require( 'path' );
const stylelint = require( 'stylelint' );
const rule = require( '../lib/rule.js' );

testRule( rule.rule, {
	ruleName: rule.name,
	skipBasicChecks: true,
	config: {
		'name': 'a-space-children',
		'allowed-properties': [ 'margin-top', 'margin-left', 'display', 'flex-wrap', '--a-space-children-spacer' ]
	},
	accept: [
		{
			code: '.a-space-children { poop: 0; }',
			description: 'passes with an allowed property'
		},
		{
			code: '.a-space-children { flex-wrap: 0; }',
			description: 'passes with an allowed property'
		}
	],
	reject: [
		{
			code: '.a-space-children { background: 0; }',
			message: rule.messages.rejected( 'background', 'a-space-children' ),
			description: 'should flag a property that is not present in allowed properties'
		},
		{
			code: '.a-space-children { color: 0; }',
			message: rule.messages.rejected( 'color', 'a-space-children' )
		}
	]
});
