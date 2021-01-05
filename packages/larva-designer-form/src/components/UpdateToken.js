import React, { Fragment } from "react";
import { TokenListItem } from './TokenListItem';

export const UpdateToken = ({ tokenType, selectedToken, tokens }) => {
	const Tokens = () => {
		const tokensArr = [];

		for ( const token in tokens ) {

			tokensArr.push(
				<div className="lrv-u-display-block lrv-u-margin-b-1"
					key={token}>
					<TokenListItem
						tokenName={token}
						tokenData={tokens[token]}
					/>
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
