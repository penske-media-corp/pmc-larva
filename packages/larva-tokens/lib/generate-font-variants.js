const fs = require( 'fs-extra' );

const families = [
	'PRIMARY',
	'SECONADRY',
	'ACCENT',
	'BODY',
	'BASIC'
];

const sizes = [
	'S',
	'M',
	'L'
];

const possibleNames = families.map( name => `${name}_` )
							  .map( name => sizes.map( size => `${name}-${size}` ) ).flat();


fs.writeFileSync( __dirname,
module.exports = possibleNames;