const build = require( './build' );
const gaze = require('gaze');
const path = require('path');
const srcPath = path.join( __dirname, './src' );

gaze('./**/*.scss', (err, watcher) => {
	const watched = watcher.watched();

	// On file changed
	watcher.on('changed', filepath => {
		console.log(filepath + ' was changed');
		// Regex to get chunk
		// build( chunk );

		build( 'common.inline', srcPath );
		build( 'common.async', srcPath );
	});

	// On file added
	watcher.on('added', filepath => {
		console.log(filepath + ' was added');
		build( 'common.inline', srcPath );
		build( 'common.async', srcPath );
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