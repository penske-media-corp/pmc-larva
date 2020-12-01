import React, { Fragment, useState } from "react";
import { baseTokens, brandTokens } from "../tokens";
import { NewToken } from "./NewToken";
import { UpdateToken } from "./UpdateToken";

export const InitialForm = () => {
	const [selectedToken, setSelectedToken] = useState({
		action: "update",
		type: "Brand",
		token: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [tokens, setTokens] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitted(true);

		let url =
			"https://gist.githubusercontent.com/laras126/20e75684dcbd65b4dc3fe84403a1243c/raw/a14143306c76c77cbe8771088429283c24a9c1d5/artnews.json";
		let response = await fetch(url);
		setTokens(await response.json());
	};

	if (!submitted) {
		return (
			<form onSubmit={handleSubmit}>
				<h3>
					Which brand would you like to update? <br />
					Select "Generic" to update the default tokens.
				</h3>
				<Fragment>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Brand"
								checked={selectedToken.type === "Brand"}
								onChange={() =>
									setSelectedToken({
										...selectedToken,
										type: "Brand",
									})
								}
							/>
							Brand
						</label>
					</div>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Default"
								checked={selectedToken.type === "Default"}
								onChange={() =>
									setSelectedToken({
										...selectedToken,
										type: "Default",
									})
								}
							/>
							Generic
						</label>
					</div>
				</Fragment>

				<Fragment>
					<h3>Select the brand you would like to update:</h3>
					<div>
						<select
							name="select"
							onChange={(e) => {
								setSelectedToken({
									...selectedToken,
									token: e.target.value,
								});
							}}
						>
							<option key="select">Select</option>
							{selectedToken.type === "Default"
								? baseTokens.map((token) => (
										<option key={token} value={token}>
											{token}
										</option>
								  ))
								: brandTokens.map((token) => (
										<option key={token} value={token}>
											{token}
										</option>
								  ))}
						</select>
					</div>
				</Fragment>
				{/* <button
					className="btn"
					onClick={() =>
						setSelectedToken({ ...selectedToken, action: "create" })
					}
				>
					Create New Token
				</button> */}

				<button
					className="btn"
					type="submit"
					disabled={!(selectedToken.type && selectedToken.token)}
				>
					Submit
				</button>
			</form>
		);
	} else if (selectedToken.action === "create") {
		return <NewToken tokenType={selectedToken.type} />;
	} else {
		return (
			<UpdateToken
				tokenType={selectedToken.type}
				selectedToken={selectedToken.token}
				tokens={tokens}
			/>
		);
	}
};
