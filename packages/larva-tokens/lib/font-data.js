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

/**
 * Property and its default value
 */
const tokenDefaults = {
	'font_size': '100%',
	'line_height': 'inherit',
	'letter_spacing': 'normal',
	'font_weight': 'normal'
};

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

const tokenProperties = Object.keys( tokenDefaults );

const tokensFileContentsByProperty = tokenProperties.reduce( ( propertiesAcc, currProperty ) => {

	const tokenNames = ( () => {
		return allAllowedNames.map( name => {
			return breakpoints.map( breakpoint => `${name}__${currProperty}_${breakpoint}`.toUpperCase() ).flat();
		}).flat();
	})();

	const tokens = tokenNames.reduce( ( tokensAcc, currToken ) => {
		tokensAcc[currToken] = {
			"value": tokenDefaults[currProperty]
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
	tokenProperties,
	groupedSelectors,
	tokensFileContentsByProperty,
	allSelectors,
	allAllowedNames,
};