const build = require( './build' );
const gaze = require('gaze');
const path = require('path');

gaze( process.cwd() + '/**/*.scss', (err, watcher) => {
	const watched = watcher.watched();

	watcher.on('changed', filepath => {
		console.log(filepath + ' was changed');

		// TODO: Build should determine the extension with a regex.
		build( 'common.inline', filepath );
		build( 'common.async', filepath );
	});

	// On file added
	watcher.on('added', filepath => {
		console.log(filepath + ' was added');
		// build( 'common.inline', srcPath );
		// build( 'common.async', srcPath );
	});

	// On file deleted
	watcher.on('deleted', filepath => {
		console.log(filepath + ' was deleted');
	});

	// On changed/added/deleted
	watcher.on('all', (event, filepath) => {
		console.log(filepath + ' was ' + event);
	});

	// Get watched files with relative paths
	const files = watcher.relative();
});