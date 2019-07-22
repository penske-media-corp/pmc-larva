'use strict';

const fs = require( 'fs' );
const stylelint = require( 'stylelint' );
const stylelintCssAlgorithms = require('..');
const rule = require( '../lib/rule.js' );

const equalityCheck = ( processCss, context ) => {
	return processCss.then( ( results ) => {
		results.forEach( result => {
			expect( result.actual ).toBe( result.expected );
		});
	});
};

const testRule = stylelint.createRuleTester( equalityCheck );

describe('@penskemediacorp/stylelint-css-algorithms', () => {
	it( 'does a thing', () => {
		return testRule( rule.rule, {
			ruleName: rule.name,
			config: {
				'name': 'a-space-children',
				'allowed-properties': [ 'margin-top', 'margin-left', 'display', 'flex-wrap', '--a-space-children-spacer' ]
			},
			accept: [
				{
					code: '.a-glue { margin-top: 0; }',
					description: 'has a margin'
				}
			],
			reject: [
				{
					code: '.a-glue { background: 0; }',
					description: 'has an incorrect property'
				},
				{
					code: '.a-glue { color: 0; }',
					description: 'has an incorrect property'
				}
			]
		});
	});

	// it( 'does another thing', () => {
	// 	return testRule( rule.rule, {
	// 		ruleName: rule.name,
	// 		config: 'Throws an error if there additonal properties than those specified',
	// 		code: '.a-glue { background: green; color: red; }'
	// 	} );
	// });
});