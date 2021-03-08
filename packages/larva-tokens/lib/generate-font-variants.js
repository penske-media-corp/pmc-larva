const fs = require( 'fs-extra' );
const path = require( 'path' );

const families = [
	'PRIMARY',
	'SECONDARY',
	'ACCENT',
	'BODY',
	'BASIC'
];

const sizes = [
	'S',
	'M',
	'L'
];

// const possibleNames = families.map( name => sizes.map( size => `${name}_${size}` ) ).flat();

const data = families.reduce( ( acc, curr ) => {

	acc.props[ `${curr}`] = {
		"value": [ ... sizes ],
		"scale": [ "" ]
	};

	return acc;
}, {
	"global": {
		"category": "a-font-sizes",
		"type": "array",
		"comment": "Typography styles."
	},
	"props": {}
});

fs.writeFileSync( path.join( __dirname, '../src/base/generated/typography.json' ), JSON.stringify( data ) );