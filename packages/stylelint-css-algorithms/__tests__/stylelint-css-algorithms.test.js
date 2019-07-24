'use strict';

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
			code: '.a-space-children { margin-top: 0; }',
			description: 'passes with an allowed property'
		}
	],
	reject: [
		{
			code: '.a-space-children { background: 0; }',
			message: rule.messages.rejected( 'background', 'a-space-children' ),
			description: 'disallows a property missing from allowed properties'
		}
	]
});

testRule( rule.rule, {
	ruleName: rule.name,
	skipBasicChecks: true,
	config: {
		'name': 'pmc-a-glue',
		'allowed-properties': [ 'margin-top' ]
	},
	reject: [
		{
			code: '.pmc-a-glue { background: red; }',
			message: rule.messages.rejected( 'background', 'pmc-a-glue' ),
			description: 'checks with a pmc- namespace'
		}
	]
});

testRule( rule.rule, {
	ruleName: rule.name,
	skipBasicChecks: true,
	config: {
		'name': 'card',
		'allowed-properties': [ 'margin-top' ]
	},
	reject: [
		{
			code: '.card { background: red; }',
			message: rule.messages.rejected( 'background', 'card' ),
			description: 'works with a non a-* namespace'
		}
	]
});

testRule( rule.rule, {
	ruleName: rule.name,
	skipBasicChecks: true,
	config: {
		'name': 'a-icon',
		'allowed-properties': [ 'height', 'width' ]
	},
	accept: [
		{
			code: '.a-icon::before { height: 1rem; }',
			message: rule.messages.rejected( 'background', 'card' ),
			description: 'works with a pseudo-element'
		}
	],
	reject: [
		{
			code: '.a-icon::before { font-family: 1rem; }',
			message: rule.messages.rejected( 'font-family', 'a-icon' ),
			description: 'works with a pseudo-element'
		}
	]
});