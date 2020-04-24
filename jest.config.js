module.exports = {
	testEnvironment: 'node',
	testPathIgnorePatterns: [
		'/fixtures/',
		'packages/larva-patterns/__tests__/'
	],
	setupFiles: [
		'./jest-setup.js'
	]
};