const { kebabify } = require( './utils' );

const families = [
	'primary',
	'secondary',
	'accent',
	'body',
	'basic'
];

const weights = [
	'',
	'regular',
	'bold',
	'medium',
];

const sizes = [
	'xxxl',
	'xxl',
	'xl',
	'l',
	'm',
	's',
	'xs',
	'xxs',
	'xxxs'
];

const breakpoints = [
	'base',
	'desktop',
	'desktopxl'
];

const properties = [
	'font_size',
	'line_height',
	'letter_spacing',
	'font_weight'
];

const allAllowedNames = families.map( name => {
	return weights.map( weight => {
		return sizes.map( size => `${name}_${weight ? weight + '_' : ''}${size}` ).flat();
	}).flat();
}).flat();

const PREFIX = 'lrv-a-font';

const allSelectors = allAllowedNames.reduce( ( acc, curr ) => {
	const selector = PREFIX.concat( '-', kebabify(curr) );
	acc.push( selector );

	return acc;
}, [] );

const groupedSelectors = (() => {
	const groups = families.map( name => {
		return weights.map( weight => `${name}${weight ?  '-' + weight : ''}` );
	}).flat();

	return groups.reduce( ( groupsObj, groupName ) => {

		// https://regex101.com/r/MLRVk2/1
		const pattern = new RegExp( `${groupName}-(s|m|l|x)`, 'g' );

		if ( ! groupsObj.hasOwnProperty( groupName ) ) {
			groupsObj[groupName] = [];
		}

		allSelectors.map( selector => {
			if ( selector.match( pattern ) ) {
				groupsObj[groupName].push( selector );
			}
		});

		return groupsObj;
	}, {} );
})();


/**
 * Tokens Data
 */

const allAllowedTokens = allAllowedNames.map( name => {
	return properties.map( property => {
		return breakpoints.map( breakpoint => `${name}_${property}_${breakpoint}`.toUpperCase() ).flat();
	}).flat();
}).flat();

const tokensFileContentsByProperty = properties.reduce( ( propertiesAcc, currProperty ) => {

	const tokenNames = ( () => {
		return allAllowedNames.map( name => {
			return breakpoints.map( breakpoint => `${name}__${currProperty}_${breakpoint}`.toUpperCase() ).flat();
		}).flat();
	})();

	const tokens = tokenNames.reduce( ( tokensAcc, currToken ) => {
		tokensAcc[currToken] = {
			"value": "initial"
		};

		return tokensAcc;
	}, {});

	propertiesAcc[currProperty] = {
		"global": {
			"category": `${kebabify(currProperty)}`,
			"type": "number"
		},
		"props": { ... tokens }
	};

	return propertiesAcc;

}, {});


module.exports = {
	properties,
	groupedSelectors,
	tokensFileContentsByProperty,
	allSelectors,
	allAllowedNames,
	allAllowedTokens,
};