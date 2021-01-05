import React, { Fragment, useState } from "react";
import { brands } from "../data";
import { NewToken } from "./NewToken";
import { UpdateToken } from "./UpdateToken";
import { JsonOutput } from "./JsonOutput";

export const InitialForm = () => {
	const [selectedToken, setSelectedToken] = useState({
		action: "update",
		type: "Brand",
		brand: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [tokens, setTokens] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitted(true);

		let url =
			'https://raw.githubusercontent.com/penske-media-corp/pmc-larva/503492cc17e1f4b5362f09ccae28209da9ee415c/packages/larva-tokens/build/' + selectedToken.brand + '.raw.json';
		let response = await fetch(url);
		let json = await response.json();
		let tokens = await json.props;

		setTokens( await tokens );
	};

	if (!submitted) {
		return (
			<form onSubmit={handleSubmit} className="lrv-a-space-children lrv-a-space-children-vertical lrv-a-space-children--1">
				<h3>
					Which brand would you like to update?
				</h3>

				<h3>Select the brand you would like to update:</h3>

				<select
					className="lrv-u-display-block lrv-u-padding-a-050 lrv-u-margin-b-2"
					name="select"
					onChange={(e) => {
						setSelectedToken({
							...selectedToken,
							brand: e.target.value,
						});
					}}
				>
					<option key="select">Select</option>
					{
						selectedToken.type === "Brand"
						&& brands.map((brand) => (
								<option key={brand} value={brand}>
									{brand}
								</option>
						))
					}
				</select>

				<button
					className="ui primary button lrv-u-display-inline-block"
					type="submit"
					disabled={!(selectedToken.type && selectedToken.brand)}
				>
					Submit
				</button>
			</form>
		);
	} else if (selectedToken.action === "create") {
		return <NewToken tokenType={selectedToken.type} />;
	} else {

		return (
			<Fragment>
			<div className="lrv-a-grid lrv-a-cols3">
				<section className="lrv-a-span2">
					<UpdateToken
						tokenType={selectedToken.type}
						selectedToken={selectedToken.brand}
						tokens={tokens}
					/>
				</section>
				<section className="lrv-u-width-100p lrv-u-overflow-auto">
					<JsonOutput
						tokensJson={tokens}
					/>
				</section>
			</div>
			</Fragment>
		);
	}
};
