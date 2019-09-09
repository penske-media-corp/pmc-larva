module.exports = {
	visual_regression_testing: {
		pmcMainQaUrl: 'https://pmc:for-the-win@deadline-2019.pmcqa.com',
		pmcTestPaths: [
			'/',
			'/blog/'
		],
		pmcScenario: {
			'delay': 5000,
			'misMatchThreshold': 0.5
		}
	}
};