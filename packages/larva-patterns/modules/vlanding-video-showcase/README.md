This Video Showcase supports YouTube and JWPlayer videos and an option listing of video thumbnails below the large player. Clicking one of the thumbnails will load its video and associated content in the large player.

Options:
- Set social_share to false, to exclude the share bar in the large video
- Set vlanding_video_showcase_video_cards to false to exclude the 'Latest Videos'
- Show a Sponsored badge for the video. Note that this requires a server-side class to hide/show the badge, but retain the DOM markup for future elements. Example logic:
```
// Add a-hidden if not sponsored.
if ( ! \Deadline\Inc\Article::is_sponsored( $vlanding_video_card['post_id'] ) ) {
	$vlanding_video_showcase['c_span']['c_span_classes'] .= ' lrv-a-hidden';
}
```