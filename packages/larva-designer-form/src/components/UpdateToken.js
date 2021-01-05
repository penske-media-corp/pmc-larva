import React, { Fragment } from "react";

export const UpdateToken = ({ tokenType, selectedToken, tokens }) => {
	const Tokens = () => {
		const tokensArr = [];

		for ( const token in tokens ) {

			tokensArr.push(
				<div className="lrv-u-display-block lrv-u-margin-b-1"
					key={token}>
					<li className="ui labeled input">
						<span className="ui label">
							{token}:
						</span>
						<br/>
						<input
							defaultValue={tokens[token].value}
							onChange={()=>{}}
						/>
					</li>
				</div>
			);
		}

		return tokensArr;
	}

	return <Fragment>
		<h3 className="lrv-u-padding-b-1">{`Updating ${tokenType} Token: ${selectedToken}`}</h3>
		<ul className="lrv-a-unstyle-list">
			{ tokens && <Tokens /> }
		</ul>
	</Fragment>;
};
