var postcss = require( 'postcss' );
var fs = require( 'fs' );
var path = require( 'path' );
var chalk = require( 'chalk' );
var postscss = require( 'postcss-scss' );
var processor = postcss();

const source = fs.readFileSync( path.resolve( __dirname, '../lib/a-space-children/a-space-children.critical.scss' ) ).toString();

const root =  processor.process( source, {
	parser: postscss
} ).root;

const rules = {
	algorithm: 'a-space-children',
	allowedProperties: [
		'margin-left',
		'margin-top',
		'display',
		'flex-wrap',
		'--a-space-children-spacer'
	]
};

const algorithms = [
	{
		name: 'a-space-children',
		allowedProperties: [
			'margin-left',
			'margin-top',
			'display',
			'flex-wrap'
		]
	},
	{
		name: 'a-icon',
		allowedProperties: [
			'margin-left',
			'margin-top',
			'display',
			'flex-wrap'
		]
	}
];

const algorithmNames = algorithms.map( e => e.name );

// console.log( algorithmNames );

module.exports = function( decl, algorithm ) {
	if ( 'rule' === decl.parent.type ) {
		if ( -1 === decl.parent.selector.indexOf( algorithm.name ) ) {
			return;
		}
	}

	if ( ! algorithm.allowedProperties.includes( decl.prop ) ) {
		console.error( chalk.red( 'The use of ' + chalk.bold( decl.prop ) + ' is not permitted in the ' + algorithm.name + ' algorithm.' ) );
	}
};






