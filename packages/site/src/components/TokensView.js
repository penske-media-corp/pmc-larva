import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	useRouteMatch,
} from "react-router-dom";

import React, { Fragment, useState } from "react";
import { brands } from "../data";
import { NewToken } from "./NewToken";
import { TokenForm } from "./TokenForm";
import { InitialForm } from "./InitialForm";

export const TokensView = () => {
	let match = useRouteMatch();
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

	return (
		<Switch>
			<Route path={`${match.url}/:action`}>
				<TokenForm
					tokens={tokens}
					brandName={selectedBrand.name}
					action={selectedBrand.action}
				/>
			</Route>
			<Route path={`${match.url}`}>
				<InitialForm
					handleSubmit={handleSubmit}
					handleUpdateBrand={handleUpdateBrand}
					submitted={submitted}
					selectedBrand={selectedBrand}
				/>
			</Route>
		</Switch>
	);
};