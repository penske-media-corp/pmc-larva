export const TokenListItem = ({ tokenName, tokenData }) => {
	return (
		<li className="ui labeled input">
			<span className="ui label">
				{tokenName}:
			</span>
			<br/>
			<input
				defaultValue={tokenData.value}
				onChange={()=>{}}
			/>
			{ 'color' === tokenData.type ?
				<div
					className="lrv-u-width-30 lrv-u-border-a-1 lrv-u-margin-l-050"
					style={{ backgroundColor: tokenData.value }}
				></div> :
				''
			}
		</li>
	);
};