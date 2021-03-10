import { Route, Switch, useRouteMatch } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { TokenForm } from "./TokenForm";
import { InitialForm } from "./InitialForm";
import {
	getCoreColorsFromTokens,
	getUpdatedTokensWithCoreColors,
} from "../utils/coreColorTokens";

export const TokensView = () => {
	let match = useRouteMatch();

	const TOKENS_FETCH_URL = "https://raw.githubusercontent.com/penske-media-corp/pmc-larva/master/packages/larva-tokens/build/";

	const appActions = {
		create: "create",
		update: "update",
	};

	const [selectedBrand, setSelectedBrand] = useState({
		action: "",
		brand: "",
	});

	const supportsshowSaveFilePicker = () =>
		undefined !== window.showSaveFilePicker;

	const [tokens, setTokens] = useState({});
	const [defaultTokens, setDefaultTokens] = useState({});
	const [copied, setCopied] = useState(false);
	const [copyText, setCopyText] = useState("");
	const [canSaveFile] = useState(supportsshowSaveFilePicker);
	const [coreColorTokens, setCoreColorTokens] = useState({});

	// Handle the updates that are side effects of the
	// check for browser support
	useEffect(() => {
		const beforeText = canSaveFile
			? "Save JSON to File"
			: "Copy JSON to Clipboard";
		const afterText = canSaveFile ? "Saved!" : "Copied!";

		if (copied) {
			setCopyText(afterText);
		} else {
			setCopyText(beforeText);
		}
	}, [copied, copyText, canSaveFile]);

	const handleUpdateBrand = (brand, action) => {
		setSelectedBrand({
			brand,
			action,
		});
	};

	const updateTokenValue = (tokenData, newValue) => {
		const updateValueHelper = (tokensObj, updateStateFn) => {
			tokensObj[tokenData.name].value = newValue;

			updateStateFn(tokensObj);
		};

		if (tokenData.category !== "core-color") {
			updateValueHelper(tokens, setTokens);
		} else {
			updateValueHelper(coreColorTokens, setCoreColorTokens);
		}
	};

	const updateTokensWithCoreColors = () => {
		const newTokens = getUpdatedTokensWithCoreColors(
			tokens,
			coreColorTokens
		);
		setTokens(newTokens);
	};

	const updateCoreColors = () => {
		const newCoreColors = getCoreColorsFromTokens(tokens);

		setCoreColorTokens(newCoreColors);
	};

	const fetchAndSetTokens = async (e) => {
		const brand =
			appActions.create === selectedBrand.action
				? "default"
				: selectedBrand.brand;

		let url =
			TOKENS_FETCH_URL +
			brand +
			".raw.json";
		let response = await fetch(url);
		let json = await response.json();
		let tokens = await json.props;
		let sortedKeys = await Object.keys(tokens).sort();
		let sortedTokens = sortedKeys.reduce((tokensObj, key) => {
			tokensObj[key] = tokens[key];
			return tokensObj;
		}, {});

		let reducedColorTokens = await getCoreColorsFromTokens(tokens);
		let sortedColorKeys = Object.keys(reducedColorTokens).sort();
		let sortedColorTokens = sortedColorKeys.reduce((sortedColors, key) => {
			sortedColors[key] = reducedColorTokens[key];
			return sortedColors;
		}, {});

		setCoreColorTokens(sortedColorTokens);
		setTokens(sortedTokens);

		const fetchedDefaultTokens = ( async (e) => {
			if ( 'default' === brand ) {
				return sortedTokens;
			} else {
				let url = TOKENS_FETCH_URL + "/default.raw.json";
				let response = await fetch(url);
				let json = await response.json();
				let tokens = await json.props;

				return tokens;
			}
		})();

		// Save unchanged tokens so we can tell what is
		// different from the original
		setDefaultTokens( await fetchedDefaultTokens);
	};


	/**
	 * Save JSON to file for browsers that support it, and fallback to
	 * copy to clipboard for browsers that don't.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/showSaveFilePicker
	 */
	const saveJsonToFile = async () => {

		const diffedTokens =( ( changed, reference ) => {
			const updatedTokenKeys = Object.keys( changed ).filter( key => {
				return changed[key].value !== reference[key].value;
			});

			return updatedTokenKeys.reduce( ( acc, curr ) => {
				acc[curr] = { ...changed[curr] };
				return acc;
			}, {} );

		})( tokens, defaultTokens );

		const tokensOutput = {
			imports: [
				"../base/all.json"
			],
			props: diffedTokens,
		};

		if (canSaveFile) {
			const tokensBlob = new Blob(
				[JSON.stringify(tokensOutput, null, 2)],
				{
					type: "application/json",
				}
			);

			// create a new handle
			const newHandle = await window.showSaveFilePicker({
				types: [
					{
						name: selectedBrand.brand,
						accept: { "text/json": [".json"] },
					},
				],
			});

			// create a FileSystemWritableFileStream to write to
			const writableStream = await newHandle.createWritable();

			// write our file
			await writableStream.write(tokensBlob);

			// close the file and write the contents to disk.
			await writableStream.close();
		} else {
			await navigator.clipboard.writeText(
				JSON.stringify(tokensOutput, null, 2)
			);
		}

		setCopied(true);
	};

	return (
		<Switch>
			<Route path={`${match.url}/:action`}>
				<TokenForm
					tokens={tokens}
					updateTokenValue={updateTokenValue}
					updateTokensWithCoreColors={updateTokensWithCoreColors}
					updateCoreColors={updateCoreColors}
					brandName={selectedBrand.brand}
					action={selectedBrand.action}
					saveJsonToFile={saveJsonToFile}
					copyText={copyText}
					coreColorTokens={coreColorTokens}
					copied={copied}
					appActions={appActions}
				/>
			</Route>
			<Route path={`${match.url}`}>
				<InitialForm
					fetchAndSetTokens={fetchAndSetTokens}
					handleUpdateBrand={handleUpdateBrand}
					selectedBrand={selectedBrand}
					appActions={appActions}
				/>
			</Route>
		</Switch>
	);
};
