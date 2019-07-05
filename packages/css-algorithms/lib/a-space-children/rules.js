var postcss = require( 'postcss' );
var fs = require( 'fs' );
var path = require( 'path' );
var chalk = require( 'chalk' );
var postscss = require( 'postcss-scss' );

var processor = postcss();

const source = fs.readFileSync( path.join( __dirname, './a-space-children.critical.scss' ) ).toString();
const nodes =  processor.process( source, {
	parser: postscss
} ).root.nodes;

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

nodes.forEach( ( node ) => {
	if ( 'rule' !== node.type ) {
		return;
	}

	if ( -1 === node.selector.indexOf( rules.algorithm ) ) {
		return;
	}

	let ruleNodes = node.nodes;

	ruleNodes.forEach( ( node ) => {
		if ( 'decl' !== node.type ) {
			return;
		}

		if ( ! rules.allowedProperties.includes( node.prop ) ) {
			console.error( chalk.red( 'The use of ' + node.prop + ' is not permitted in the ' + rules.algorithm + ' algorithm.' ) );
		}
	});
});