module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: [
		'/fixtures/',
		'/larva/src/patterns/',
		'/larva-patterns/',
	],
	setupFiles: [ './jest-setup.js' ],
};
