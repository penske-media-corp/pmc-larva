import React, { Fragment } from "react";
import { TokensList } from "./TokensList";
import { JsonOutput } from "./JsonOutput";

export const TokenForm = ( { action, tokens, brandName } ) => {

	console.log(tokens);

	return (
		<Fragment>
			<div className="lrv-a-grid lrv-a-cols3">
				<section className="lrv-a-span2">
					<TokensList
						action={action}
						brandName={brandName}
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
	)
};