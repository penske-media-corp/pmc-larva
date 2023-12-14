import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { TokensView } from './TokensView';

export const App = () => (
	<Router>
		<div className="lrv-a-space-children-vertical lrv-a-space-children--1">
			<header className="lrv-u-flex lrv-u-align-items-center lrv-u-padding-tb-1 lrv-u-border-b-1">
				<h1 className="lrv-u-margin-r-1">Larva Helpers Site</h1>
				<nav>
					<ul className="lrv-a-unstyle-list lrv-u-flex lrv-a-space-children-horizontal lrv-a-space-children--1">
						<li>
							<Link to="/" className="ui button">
								Home
							</Link>
						</li>
						<li>
							<Link to="/tokens" className="ui button">
								Design Tokens
							</Link>
						</li>
						<li>
							<a href="/patterns" className="ui button">
								Larva Patterns
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<Routes>
				<Route path="/tokens">
					<TokensView />
				</Route>
				<Route path="/">
					<p>Welcome to the Larva helpers site!</p>
					<p>
						So far, this site contains a tool for helping to create
						design tokens, and a static build of Larva Patterns
						component library.
					</p>
				</Route>
			</Routes>
		</div>
	</Router>
);
