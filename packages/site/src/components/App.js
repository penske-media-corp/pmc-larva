import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import { InitialForm } from "./InitialForm";

export const App = () => (
	<Router>
		<div className="App lrv-a-space-children-vertical lrv-a-space-children--1">
			<header className="lrv-u-flex lrv-u-align-items-center lrv-u-padding-tb-1 lrv-u-border-b-1">
				<h1 className="lrv-u-margin-r-1">Larva Helpers Site</h1>
				<ul className="ui basic buttons lrv-a-unstyle-list lrv-u-flex lrv-a-space-children-horizontal lrv-a-space-children--1">
					<li className="ui button">
						<Link to="/">Home</Link>
					</li>
					<li className="ui button">
						<Link to="/tokens">Design Tokens</Link>
					</li>
				</ul>
			</header>
			<Switch>
				<Route path="/tokens">
					<InitialForm />
				</Route>
				<Route path="/">
					<p>Welcome to the Larva helpers site! So far, this site contains a tool for helping to create design tokens.</p>
				</Route>
			</Switch>
		</div>
	</Router>
);
