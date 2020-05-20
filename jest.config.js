module.exports = {
	testEnvironment: 'node',
	testPathIgnorePatterns: [
		'/fixtures/',
		'/packages/larva-patterns/'
	],
	setupFiles: [
		'./jest-setup.js'
	]
};