import React, { Fragment, useState } from "react";

export const UpdateToken = (props) => {

	const [tokens, setTokens] = useState();

	( async () => {
		let url = 'https://gist.githubusercontent.com/laras126/20e75684dcbd65b4dc3fe84403a1243c/raw/a14143306c76c77cbe8771088429283c24a9c1d5/artnews.json';
		let response = await fetch( url );

		setTokens( await response.json() );
	} )();

	const Tokens = () => {
		const tokensArr = [];

		for ( const token in tokens ) {
			tokensArr.push( <li key={token}>{token}: {tokens[token]}</li> );
		}

		return tokensArr;
	}

	return <Fragment>
		{ tokens && <Tokens /> }
		<div>{`Update ${props.tokenType} token: ${props.selectedToken}`}</div>
	</Fragment>;
};
