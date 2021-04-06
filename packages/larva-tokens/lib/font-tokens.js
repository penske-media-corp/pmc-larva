const fs = require( 'fs-extra' );
const path = require( 'path' );
const { families, sizes, properties, breakpoints } = require( './font-data.json' );

const data = families.reduce( ( acc, curr ) => {

	sizes.map( size => {

		properties.map( property => {

			breakpoints.map( breakpoint => {

				acc.props[ `${property}_${curr}_${size}_${breakpoint}`.toUpperCase() ] = {
					"value": ""
				};
			});
		});
	})

	return acc;
}, {
	"global": {
		"category": "font-size",
		"type": "array",
		"comment": "Typography styles."
	},
	"props": {}
});

fs.writeFileSync( path.join( __dirname, '../src/base/generated/typography.json' ), JSON.stringify( data ) );