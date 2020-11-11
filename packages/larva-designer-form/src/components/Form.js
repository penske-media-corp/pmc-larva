import React, { Fragment, useState } from "react";
import { baseTokens, brandTokens } from "../tokens";

export const Form = () => {
	const [tokenType, setTokenType] = useState();
	const [selectedToken, setSelectedToken] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Update ${tokenType} token: ${selectedToken}`);
	};

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
						Can't find the token you are looking for? Click{" "}
						<a href="#">here</a> to create a new one!
					</p>
				</Fragment>
			)}

			<button
				className="submit"
				type="submit"
				disabled={!(tokenType && selectedToken)}
			>
				Submit
			</button>
		</form>
	);
};
