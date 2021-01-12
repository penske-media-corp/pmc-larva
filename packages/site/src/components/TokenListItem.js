import { useState } from "react";

export const TokenListItem = ({ tokenName, tokenData, updateTokenValue }) => {
	const [tokenPreviewValue, setTokenPreviewValue] = useState(tokenData.value);

	return (
		<li className="ui labeled input">
			<span className="ui label">{tokenName}:</span>
			<br />
			<input
				defaultValue={tokenData.value}
				onChange={(e) => {
					setTokenPreviewValue(e.target.value);
					updateTokenValue(tokenName, e.target.value);
				}}
			/>
			{"color" === tokenData.type ? (
				<div
					className="lrv-u-width-30 lrv-u-border-a-1 lrv-u-margin-l-050"
					style={{ backgroundColor: tokenPreviewValue }}
				></div>
			) : (
				""
			)}
		</li>
	);
};
