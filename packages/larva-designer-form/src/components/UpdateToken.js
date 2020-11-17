import React, { Fragment } from "react";

export const UpdateToken = ({ tokenType, selectedToken, tokens }) => {
	const Tokens = () => {
		const tokensArr = [];

		for (const token in tokens) {
			let value = tokens[token];
			tokensArr.push(
				<li
					style={{
						marginBottom: "1rem",
					}}
					key={token}
				>
					{token}: <br />
					<input defaultValue={value} onChange={() => {}} />
				</li>
			);
		}

		return tokensArr;
	};

	return (
		<Fragment>
			<h3>{`Update ${tokenType} token: ${selectedToken}`}</h3>
			<ul
				style={{
					textAlign: "left",
					listStyle: "none",
				}}
			>
				{tokens && <Tokens />}
			</ul>
		</Fragment>
	);
};
