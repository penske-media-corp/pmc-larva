import {
	BrowserRouter as Router,
	Switch,
	Route,
	useRouteMatch,
	Link
  } from "react-router-dom";

import React, { Fragment } from "react";
import { TokensList } from "./TokensList";
import { JsonOutput } from "./JsonOutput";

export const TokenForm = ( { brand, tokens } ) => {
	let match = useRouteMatch();

	return (
		<Fragment>
			<Route path={`${match.path}/:action`}>

				<div className="lrv-a-grid lrv-a-cols3">
					<section className="lrv-a-span2">
						<TokensList
							tokenType="Brand"
							selectedBrand={brand}
							tokens={tokens}
						/>
					</section>
					<section className="lrv-u-width-100p lrv-u-overflow-auto">
						<JsonOutput
							tokensJson={tokens}
						/>
					</section>
				</div>

			</Route>
		</Fragment>
	)
};