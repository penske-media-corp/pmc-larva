import React, { Fragment, useState } from "react";
import { brands } from "../data";
import { NewToken } from "./NewToken";
import { TokenForm } from "./TokenForm";

export const InitialForm = () => {
	const [selectedBrand, setSelectedBrand] = useState({
		action: "",
		brand: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [tokens, setTokens] = useState();

	const handleUpdateBrand = (brand, action) => {
		setSelectedBrand({
			brand, action
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setSubmitted(true);

		const brand = 'create' === selectedBrand.action ? 'default' : selectedBrand.brand;

		let url =
			'https://raw.githubusercontent.com/penske-media-corp/pmc-larva/503492cc17e1f4b5362f09ccae28209da9ee415c/packages/larva-tokens/build/' + brand + '.raw.json';
		let response = await fetch(url);
		let json = await response.json();
		let tokens = await json.props;

		setTokens( await tokens );
	};

	if (!submitted) {

		return (
			<Fragment>
			<p className="lrv-u-font-size-18">Choose from the following options for working with Design Tokens.</p>

			<form onSubmit={handleSubmit} className="lrv-a-grid lrv-a-cols2">
				<div className="lrv-a-space-children-vertical lrv-a-space-children--1">
					<h2>Update a Brand's Tokens</h2>
					<p className="lrv-u-font-size-18">Select the brand you would like to update:</p>
					<select
						className="lrv-u-display-block lrv-u-padding-a-050 lrv-u-margin-b-2 lrv-u-border-a-1 lrv-u-border-radius-5"
						name="select"
						onChange={(e) => {
							handleUpdateBrand(e.target.value, 'update');
						}}
					>
						<option key="select">Select</option>
						{
							brands.map((brand) => (
									<option key={brand} value={brand}>
										{brand}
									</option>
							))
						}
					</select>

					<button
						className="ui primary button lrv-u-display-inline-block"
						type="submit"
						disabled={!( 'update' === selectedBrand.action )}
					>
						Continue to Update Tokens
					</button>
				</div>
				<div className="lrv-a-space-children-vertical lrv-a-space-children--1">
					<h2>Create Tokens for a New Brand</h2>
					<p className="lrv-u-font-size-18">Enter the name of the brand in all lowercase, one word text:</p>

					<div className="ui input">
						<input
							type="text"
							placeholder="artnews"
							onChange={(e) => {
								handleUpdateBrand(e.target.value, 'create');
							}}
						/>
					</div>
					<p className="lrv-u-color-grey">e.g. billboard, variety, rollingstone, artinamerica, sheknows</p>

					<div className="lrv-u-display-block">
						<button
							className="ui primary button lrv-u-display-inline-block"
							type="submit"
							disabled={! ( 'create' === selectedBrand.action )}
						>
							Continue to Create Tokens
						</button>
					</div>
				</div>
			</form>
			</Fragment>
		);

	} else {

		return (
			<TokenForm
				brand={selectedBrand.brand}
				tokens={tokens}
				action={selectedBrand.action}
			/>
		);
	}
};
