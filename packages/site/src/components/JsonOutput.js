export const JsonOutput = ( { tokens } ) => {
	return (
		<div className="lrv-a-glue-parent lrv-u-margin-b-2">
			<div className="lrv-u-background-color-grey-lightest lrv-u-border-a-2 lrv-u-border-radius-5 lrv-u-padding-a-1">
				<p>After you have finished updating the tokens, press the button below to copy the JSON to your clipboard.</p>
				<p>Next, send this JSON to the engineer or product manager who requested it.</p>
				<button className="ui button primary">Copy JSON to Clipboard</button>
			</div>
			<pre className="lrv-u-height-300">
				<code>{ JSON.stringify( tokens, null, 2 ) }</code>
			</pre>
		</div>

	);
}