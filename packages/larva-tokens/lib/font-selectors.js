const { families, sizes } = require( './font-data.json' );
const PREFIX = 'lrv-a-font';

const possibleNames = families.map( name => `${PREFIX}-${name}` )
							  .map( name => sizes.map( size => `${name}-${size}` ) );

const groupedNames = possibleNames.reduce( ( acc, curr ) => {
	const slug = curr[0].split('-')[3];

	acc[slug] = [ ...curr];

	return acc;
}, {} );

module.exports = groupedNames;