import React, { Fragment, useState } from "react";
import { baseTokens, brandTokens } from "../tokens";
import { NewToken } from "./NewToken";
import { UpdateToken } from "./UpdateToken";

export const InitialForm = () => {
	const [tokenType, setTokenType] = useState();
	const [selectedToken, setSelectedToken] = useState();
	const [newToken, setNewToken] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	if (!submitted && !newToken) {
		return (
			<form onSubmit={handleSubmit}>
				<h3>Would you like to update a brand or base token?</h3>
				<Fragment>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Base"
								checked={tokenType === "Base"}
								onChange={() => setTokenType("Base")}
							/>
							Base
						</label>
					</div>
					<div className="radio">
						<label>
							<input
								type="radio"
								value="Brand"
								checked={tokenType === "Brand"}
								onChange={() => setTokenType("Brand")}
							/>
							Brand
						</label>
					</div>
				</Fragment>

				{tokenType && (
					<Fragment>
						<h3>Select the token you would like to update:</h3>

						<select
							name="select"
							onChange={(e) => {
								setSelectedToken(e.target.value);
							}}
						>
							<option key="default">Select</option>
							{tokenType === "Base"
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

						<p>
							Can't find the token you are looking for? Select
							either 'Base' or 'Brand' above and click 'Create New
							Token' below.
						</p>
					</Fragment>
				)}

				<button
					className="btn"
					onClick={() => setNewToken(true)}
					disabled={!tokenType}
				>
					Create New Token
				</button>
				<button
					className="btn"
					type="submit"
					disabled={!(tokenType && selectedToken)}
				>
					Submit
				</button>
			</form>
		);
	} else if (newToken) {
		return <NewToken tokenType={tokenType} />;
	} else {
		return (
			<UpdateToken tokenType={tokenType} selectedToken={selectedToken} />
		);
	}
};
