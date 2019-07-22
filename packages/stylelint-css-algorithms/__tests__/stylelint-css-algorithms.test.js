'use strict';

const stylelint = require( 'stylelint' );
const stylelintCssAlgorithms = require('..');
var rule = require( "../lib/rule.js" );

const arrayCheck = ( processCss, context ) => {
	console.log( processCss, context );
	
};

const testRule = stylelint.createRuleTester( arrayCheck );

describe('@penskemediacorp/stylelint-css-algorithms', () => {
	it( 'needs tests', () => {
		testRule( rule.rule, 'test please' );
	});
});
