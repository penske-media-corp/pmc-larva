'use strict';

const fs = require( 'fs' );
const rule = require( '../lib/rule.js' );

testRule( rule.rule, {
	ruleName: rule.name,
	skipBasicChecks: true,
	config: {
		'a-space-children': [
			'margin-top',
			'margin-left',
			'display',
			'flex-wrap',
			'--a-space-children-spacer',
		],
	},
	accept: [
		{
			code: '.a-space-children { margin-top: 0; }',
			description: 'passes with an allowed property',
		},
	],
	reject: [
		{
			code: '.a-space-children { background: 0; }',
			message: rule.messages.rejected( 'background', 'a-space-children' ),
			description: 'disallows a property missing from allowed properties',
		},
	],
} );

testRule( rule.rule, {
	ruleName: rule.name,
	skipBasicChecks: true,
	config: {
		'pmc-a-glue': [ 'margin-top' ],
	},
	reject: [
		{
			code: '.pmc-a-glue { background: red; }',
			message: rule.messages.rejected( 'background', 'pmc-a-glue' ),
			description: 'checks with a pmc- namespace',
		},
	],
} );

testRule( rule.rule, {
	ruleName: rule.name,
	skipBasicChecks: true,
	config: {
		card: [ 'margin-top' ],
	},
	reject: [
		{
			code: '.card { background: red; }',
			message: rule.messages.rejected( 'background', 'card' ),
			description: 'works with a non a-* namespace',
		},
	],
} );

testRule( rule.rule, {
	ruleName: rule.name,
	skipBasicChecks: true,
	config: {
		'a-icon': [ 'height', 'width' ],
	},
	accept: [
		{
			code: '.a-icon::before { height: 1rem; }',
			message: rule.messages.rejected( 'background', 'card' ),
			description: 'works with a pseudo-element',
		},
	],
	reject: [
		{
			code: '.a-icon::before { font-family: 1rem; }',
			message: rule.messages.rejected( 'font-family', 'a-icon' ),
			description: 'works with a pseudo-element',
		},
	],
} );

testRule( rule.rule, {
	ruleName: rule.name,
	skipBasicChecks: true,
	config: {
		'a-space-children': [ 'margin-left', 'margin-right' ],
		'pmc-a-glue': [ 'position', 'top', 'left' ],
	},
	reject: [
		{
			code: fs
				.readFileSync( __dirname + '/__fixture__/a-space-children.css' )
				.toString(),
			description: 'works with multiple rules',
			message: rule.messages.rejected( 'display', 'a-space-children' ),
		},
		{
			code: fs
				.readFileSync( __dirname + '/__fixture__/a-glue.css' )
				.toString(),
			description: 'works with multiple rules',
			message: rule.messages.rejected( 'z-index', 'pmc-a-glue' ),
		},
	],
} );

// Note: this is for a future iteration when this becomes selector-property-whitelist
// and supports regex in the key.
// testRule( rule.rule, {
// 	ruleName: rule.name,
// 	skipBasicChecks: true,
// 	config: {
// 		'/^.a-space-children.*/': [ 'margin-left', 'margin-right' ]
// 	},
// 	reject: [
// 		{
// 			code: fs.readFileSync( __dirname + '/__fixture__/a-space-children.css' ).toString(),
// 			description: 'works with regex keys',
// 			message: rule.messages.rejected( 'display', 'a-space-children' ),
// 		}
// 	]
// });
