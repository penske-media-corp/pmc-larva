const { kebabify } = require( './utils' );

const { allAllowedNames, familyGroups } = require( './font-data' );
// const PREFIX = 'lrv-a-font';

// const prefixedNames = allAllowedNames.map( name => `${PREFIX}-${kebabify(name)}` );

const groupedNames = allAllowedNames.reduce( ( acc, curr ) => {
	const slug = curr.split('_').pop();
	console.log( slug );

	acc[slug] = [ ...curr];

	return acc;
}, {} );

module.exports = groupedNames;