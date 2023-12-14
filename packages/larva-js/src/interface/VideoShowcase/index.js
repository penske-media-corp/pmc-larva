import VideoShowcase from './VideoShowcase';

export default function initVideoShowcase() {
	const videoShowcases = [
		...document.querySelectorAll( '[data-video-showcase]' ),
	];

	if ( videoShowcases.length ) {
		videoShowcases.forEach(
			( el ) => ( el.pmcVideoShowcase = new VideoShowcase( el ) )
		);
	}
}
