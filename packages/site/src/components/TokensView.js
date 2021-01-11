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

	return (
		<Switch>
			<Route path={`${match.url}/:action`}>
				hey
			</Route>
			<Route path={`${match.url}`}>
				<InitialForm />
			</Route>
		</Switch>
	);
};