const build = require( './build' );
const gaze = require( 'gaze' );

gaze( process.cwd() + '/**/*.scss', (err, watcher) => {
	const watched = watcher.watched();

	watcher.on('changed', filepath => {
		console.log(filepath + ' was changed');

		// TODO: Build should determine the extension with a regex.
		build( 'common.inline', filepath );
		build( 'common.async', filepath );
	});

	// TODO: need to configure these...
	// On file added
	watcher.on('added', filepath => {
		console.log(filepath + ' was added');
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