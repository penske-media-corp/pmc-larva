module.exports = {
	testEnvironment: 'node',
	testPathIgnorePatterns: [
		'/fixtures/',
		'/larva/src/patterns/',
		'/larva-patterns/',
	],
	setupFiles: [ './jest-setup.js' ],
};
