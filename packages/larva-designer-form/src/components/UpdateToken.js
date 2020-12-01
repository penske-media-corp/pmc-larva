import React, { Fragment, useState } from "react";

export const UpdateToken = (props) => {

	console.log( 'updatetokesn rerendering' );

	const [tokens, setTokens] = useState();

	( async () => {
		let url = 'https://gist.githubusercontent.com/laras126/20e75684dcbd65b4dc3fe84403a1243c/raw/a14143306c76c77cbe8771088429283c24a9c1d5/artnews.json';
		let response = await fetch( url );

		setTokens( await response.json() );
	} )();

	const Tokens = () => {
		const tokensArr = [];

		for ( const token in tokens ) {
			let value = tokens[token];

			tokensArr.push(
				<li style={{
					marginBottom: '1rem'
				}} key={token}>{token}: <br/><input
					defaultValue={value}
					onChange={()=>{}}
				/></li>
			);
		}

		return tokensArr;
	}

	return <Fragment>
		<h3>{`Updating ${props.tokenType} Token: ${props.selectedToken}`}</h3>
		<ul style={{
			textAlign: 'left',
			listStyle: 'none'
		}}>
			{ tokens && <Tokens /> }
		</ul>
	</Fragment>;
};
