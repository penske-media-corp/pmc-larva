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

	sizes.map( size => {

		const defaultClamp = ( () => {
			switch (size) {
				case 'S':
					return '0.75rem, 3vw, 1rem';
				case 'M':
					return '1.2rem, 3vw, 1.8rem';
				case 'L':
					return '2rem, 3vw, 3rem';
				default:
					break;
			}
		})();

		acc.props[ `TYPOGRAPHY_${curr}_${size}`] = {
			"value": defaultClamp
		};
	})

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