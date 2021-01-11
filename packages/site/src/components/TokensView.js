import {
	Route,
	Switch,
	useRouteMatch,
} from "react-router-dom";

import React, { useState, useEffect } from "react";
import { TokenForm } from "./TokenForm";
import { InitialForm } from "./InitialForm";

export const TokensView = () => {

	let match = useRouteMatch();

	const [selectedBrand, setSelectedBrand] = useState({
		action: "",
		brand: "",
	});

	const [tokens, setTokens] = useState();

	const handleUpdateBrand = (brand, action) => {
		setSelectedBrand({
			brand, action
		});
	};

	const updateTokenValue = (tokenKey, newValue) => {

		const newTokens = ((arr) => {
			arr[tokenKey].value = newValue;
			return arr;
		})(tokens);

		setTokens(newTokens);
	};

	const fetchAndSetTokens = async (e) => {

		const brand = 'create' === selectedBrand.action ? 'default' : selectedBrand.brand;

		let url =
			'https://raw.githubusercontent.com/penske-media-corp/pmc-larva/503492cc17e1f4b5362f09ccae28209da9ee415c/packages/larva-tokens/build/' + brand + '.raw.json';
		let response = await fetch(url);
		let json = await response.json();
		let tokens = await json.props;

		setTokens( await tokens );
	};

	const saveJsonToFile = () => {
		alert('wow!');
	};

	return (
		<Switch>
			<Route path={`${match.url}/:action`}>
				<TokenForm
					tokens={tokens}
					updateTokenValue={updateTokenValue}
					brandName={selectedBrand.brand}
					action={selectedBrand.action}
					saveJsonToFile={saveJsonToFile}
				/>
			</Route>
			<Route path={`${match.url}`}>
				<InitialForm
					fetchAndSetTokens={fetchAndSetTokens}
					handleUpdateBrand={handleUpdateBrand}
					selectedBrand={selectedBrand}
				/>
			</Route>
		</Switch>
	);
};