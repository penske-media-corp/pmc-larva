import {
	getCoreColorsFromTokens,
	getUpdatedTokensWithCoreColors,
} from "../helpers";

describe("Core Color Tokens", () => {
	const tokens = {
		SPACING_2: {
			category: "spacing",
			type: "unit",
			comment: "Used for margins and padding only.",
			value: "2rem",
			originalValue: "2rem",
			name: "SPACING_2",
		},
		BACKGROUND_COLOR_BRAND_PRIMARY: {
			category: "background-color",
			type: "color",
			value: "rgb(0, 0, 0)",
			comment:
				"The primary brand color. This should be dark in hue, and have sufficient contrast with white text.",
			originalValue: "{!BLACK}",
			name: "BACKGROUND_COLOR_BRAND_PRIMARY",
		},
		BACKGROUND_COLOR_BRAND_SECONDARY: {
			category: "background-color",
			type: "color",
			value: "rgb(236, 28, 36)",
			comment:
				"The secondary brand color. This should be lighter in hue, and sufficient contrast with black text.",
			originalValue: "{!PMC_RED}",
			name: "BACKGROUND_COLOR_BRAND_SECONDARY",
		},
		BORDER_COLOR_BRAND_PRIMARY: {
			category: "hr-color",
			type: "color",
			value: "rgb(236, 28, 36)",
			originalValue: "{!PMC_RED}",
			name: "BORDER_COLOR_BRAND_PRIMARY",
		},
		BORDER_COLOR_BRAND_SECONDARY: {
			category: "hr-color",
			type: "color",
			value: "rgb(0, 0, 0)",
			originalValue: "{!BLACK}",
			name: "BORDER_COLOR_BRAND_SECONDARY",
		},
		COLOR_BRAND_PRIMARY: {
			category: "text-color",
			type: "color",
			value: "rgb(236, 28, 36)",
			originalValue: "{!PMC_RED}",
			name: "COLOR_BRAND_PRIMARY",
		},
		COLOR_BRAND_SECONDARY: {
			category: "text-color",
			type: "color",
			value: "rgb(0, 0, 0)",
			originalValue: "{!BLACK}",
			name: "COLOR_BRAND_SECONDARY",
		},
	};

	it("should reduce tokens object to core color names and values", () => {
		const expected = {
			BRAND_PRIMARY: {
				type: "color",
				value: "rgb(236, 28, 36)",
				name: "BRAND_PRIMARY",
				category: "core-color",
			},
			BRAND_SECONDARY: {
				type: "color",
				value: "rgb(0, 0, 0)",
				name: "BRAND_SECONDARY",
				category: "core-color",
			},
		};

		expect(getCoreColorsFromTokens(tokens)).toStrictEqual(expected);
	});

	it("should not include color as a core color if it does not have consistent values across tokens", () => {
		const tokensWithUnlinkedColors = {
			...tokens,
			COLOR_BRAND_ACCENT: {
				category: "text-color",
				type: "color",
				value: "rgb(12, 0, 0)",
				originalValue: "{!BLACK}",
				name: "COLOR_BRAND_ACCENT",
			},
			BACKGROUND_COLOR_BRAND_ACCENT: {
				category: "background-color",
				type: "color",
				value: "rgb(0, 12, 0)",
				originalValue: "{!BLACK}",
				name: "BACKGROUND_COLOR_BRAND_ACCENT",
			},
		};

		const expected = {
			BRAND_PRIMARY: {
				type: "color",
				value: "rgb(236, 28, 36)",
				name: "BRAND_PRIMARY",
				category: "core-color",
			},
			BRAND_SECONDARY: {
				type: "color",
				value: "rgb(0, 0, 0)",
				name: "BRAND_SECONDARY",
				category: "core-color",
			},
		};

		expect(getCoreColorsFromTokens(tokensWithUnlinkedColors)).toStrictEqual(
			expected
		);
	});

	it("should update tokens that use the core color", () => {
		const tokensToUpdate = {
			SPACING_2: {
				category: "spacing",
				type: "unit",
				comment: "Used for margins and padding only.",
				value: "2rem",
				originalValue: "2rem",
				name: "SPACING_2",
			},
			BACKGROUND_COLOR_BRAND_PRIMARY: {
				category: "background-color",
				type: "color",
				value: "rgb(236, 28, 36)",
				originalValue: "{!PMC_RED}",
				name: "BORDER_COLOR_BRAND_PRIMARY",
			},
			BORDER_COLOR_BRAND_PRIMARY: {
				category: "hr-color",
				type: "color",
				value: "rgb(236, 28, 36)",
				originalValue: "{!PMC_RED}",
				name: "BORDER_COLOR_BRAND_PRIMARY",
			},
			COLOR_BRAND_PRIMARY: {
				category: "text-color",
				type: "color",
				value: "rgb(236, 28, 36)",
				originalValue: "{!PMC_RED}",
				name: "COLOR_BRAND_PRIMARY",
			},
		};

		const coreColorTokens = {
			BRAND_PRIMARY: {
				type: "color",
				value: "rgb(111, 111, 111)",
				name: "BRAND_PRIMARY",
				category: "core-color",
			},
		};

		const expectedResult = {
			SPACING_2: {
				category: "spacing",
				type: "unit",
				comment: "Used for margins and padding only.",
				value: "2rem",
				originalValue: "2rem",
				name: "SPACING_2",
			},
			BACKGROUND_COLOR_BRAND_PRIMARY: {
				category: "background-color",
				type: "color",
				value: "rgb(111, 111, 111)",
				originalValue: "{!PMC_RED}",
				name: "BORDER_COLOR_BRAND_PRIMARY",
			},
			BORDER_COLOR_BRAND_PRIMARY: {
				category: "hr-color",
				type: "color",
				value: "rgb(111, 111, 111)",
				originalValue: "{!PMC_RED}",
				name: "BORDER_COLOR_BRAND_PRIMARY",
			},
			COLOR_BRAND_PRIMARY: {
				category: "text-color",
				type: "color",
				value: "rgb(111, 111, 111)",
				originalValue: "{!PMC_RED}",
				name: "COLOR_BRAND_PRIMARY",
			},
		};

		const result = getUpdatedTokensWithCoreColors(
			tokensToUpdate,
			coreColorTokens
		);

		expect(result).toStrictEqual(expectedResult);
	});
});
