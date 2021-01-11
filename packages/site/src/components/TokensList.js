import React, { Fragment } from "react";
import { TokenListItem } from './TokenListItem';

export const TokensList = ({ action, tokens, brandName }) => {
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
	};

	const headingText = 'create' === action ? 'Creating New ' : 'Updating ';

	return <Fragment>
		<h3 className="lrv-u-padding-b-2">{`${headingText} Tokens for `}<code className="lrv-u-background-color-grey-dark lrv-u-color-white lrv-u-border-radius-5 lrv-u-padding-tb-025 lrv-u-padding-lr-050">{brandName}</code></h3>
		<ul className="lrv-a-unstyle-list">
			{ tokens && <Tokens /> }
		</ul>
	</Fragment>;
};
