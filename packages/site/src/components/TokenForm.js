import { Link } from 'react-router-dom';

import React, { Fragment } from 'react';
import { TokenListItem } from './TokenListItem';

export const TokenForm = ( {
	action,
	tokens,
	coreColorTokens,
	brandName,
	updateTokenValue,
	updateTokensWithCoreColors,
	updateCoreColors,
	saveJsonToFile,
	copyText,
	appActions,
} ) => {
	const Tokens = () => {
		const tokenLisItems = [];

		for ( const token in tokens ) {
			tokenLisItems.push(
				<div
					className="lrv-u-display-block lrv-u-margin-b-1"
					key={ token }
				>
					<TokenListItem
						key={ token }
						coreColorTokens={ coreColorTokens }
						tokenName={ token }
						tokenData={ tokens[ token ] }
						updateTokenValue={ updateTokenValue }
						updateCoreColors={ updateCoreColors }
					/>
				</div>
			);
		}

		return (
			<Fragment>
				<h3 className="lrv-u-margin-b-1">All Tokens</h3>
				<p>
					Use this column to make individual token changes. These are
					all design tokens in the theme. Values with{ ' ' }
					<i className="circle icon"></i> use a Core Color. Changing a
					value with <i className="circle icon"></i> in this column
					unlinks all tokens using the same color term from Core
					Colors updates and removes it from the Core Colors column.
				</p>
				<div className="lrv-u-margin-b-1">
					<button
						className="ui button lrv-u-display-inline-block"
						onClick={ updateCoreColors }
					>
						Update Core Colors
					</button>
				</div>
				<ul className="lrv-a-unstyle-list">{ tokenLisItems }</ul>
			</Fragment>
		);
	};

	const CoreColorTokens = () => {
		const colorListItems = [];

		for ( const color in coreColorTokens ) {
			colorListItems.push(
				<TokenListItem
					key={ color }
					tokenName={ color }
					tokenData={ coreColorTokens[ color ] }
					updateTokenValue={ updateTokenValue }
				/>
			);
		}

		return (
			<Fragment>
				<h3 className="lrv-u-margin-b-1">Core Colors</h3>
				<p>
					Use this column to make theme-wide token color changes.
					Changing a Core Color updates all tokens with a name
					containing the matching color term <strong>if</strong> all
					of these tokens use the same value. (Ex. Updating{ ' ' }
					<code>BRAND_ACCENT</code> will change the tokens{ ' ' }
					<code>BACKGROUND_COLOR_BRAND_ACCENT</code>,{ ' ' }
					<code>BORDER_COLOR_BRAND_ACCENT</code>, and{ ' ' }
					<code>COLOR_BRAND_ACCENT</code> <strong>if</strong> all of
					them have the same value).
				</p>
				<div className="lrv-u-margin-b-1">
					<button
						className="ui button lrv-u-display-inline-block"
						onClick={ updateTokensWithCoreColors }
					>
						Update Tokens With Core Colors
					</button>
				</div>
				<ul className="lrv-a-unstyle-list">{ colorListItems }</ul>
			</Fragment>
		);
	};

	const Header = () => {
		const headingText =
			appActions.create === action ? 'Creating New ' : 'Updating ';

		if ( !! brandName ) {
			return (
				<Fragment>
					<h2 className="lrv-u-padding-b-2">
						{ headingText } Tokens for{ ' ' }
						<code className="lrv-u-background-color-grey-dark lrv-u-color-white lrv-u-border-radius-5 lrv-u-padding-tb-025 lrv-u-padding-lr-050">
							{ brandName }
						</code>
					</h2>
				</Fragment>
			);
		}

		return (
			<Fragment>
				<h2 className="lrv-u-padding-b-2">
					Oops! You need to specify a brand and action on the initial
					tokens form.
				</h2>
				<Link
					className="lrv-u-display-inline-block ui button primary"
					to="/tokens"
				>
					Back to Initial Tokens Form
				</Link>
			</Fragment>
		);
	};

	const Instructions = () => {
		return (
			<div className="lrv-a-glue-parent lrv-u-margin-b-2">
				<div className="lrv-u-background-color-grey-lightest lrv-u-border-a-2 lrv-u-border-radius-5 lrv-u-padding-a-1">
					<h3 className="lrv-u-margin-b-1">
						When you are finished...
					</h3>
					<p>
						Press the button below to copy the JSON to your
						clipboard.
					</p>
					<p>
						Next, send this JSON to the engineer or product manager
						who requested it.
					</p>
					<button
						className="ui button primary"
						onClick={ saveJsonToFile }
					>
						{ copyText }
					</button>
				</div>
			</div>
		);
	};

	return (
		<Fragment>
			<Header />
			{ brandName && (
				<Fragment>
					<aside>
						<Instructions />
					</aside>
					<section className="lrv-a-grid lrv-a-cols2@desktop">
						<section>{ tokens && <CoreColorTokens /> }</section>
						<section>{ tokens && <Tokens /> }</section>
					</section>
				</Fragment>
			) }
		</Fragment>
	);
};
