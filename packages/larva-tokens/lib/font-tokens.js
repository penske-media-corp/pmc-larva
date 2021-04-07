const { allAllowedNames, properties } = require( './font-data' );

export const tokensByProperty = properties.reduce( ( propertiesAcc, currProperty ) => {

	const data = allAllowedNames.reduce( ( namesAcc, currName ) => {
		namesAcc.props[ `${currName}_${currProperty}`.toUpperCase() ] = {
			"value": ""
		};

		return namesAcc;
	}, {
		"global": {
			"category": `"${currProperty}"`,
			"type": "number"
		},
		"props": {}
	}, {});

	propertiesAcc[currProperty] = {...data};

	return propertiesAcc;
}, {});
