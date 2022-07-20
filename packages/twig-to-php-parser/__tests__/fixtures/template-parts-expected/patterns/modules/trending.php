<?php
/**
 * Generated file.
 *
 * Refer to the relevant Twig file for adjusting this markup.
 */

?>

<section class="u-max-width-300">
	<header>
		<?php \PMC\Larva\Pattern::get_instance()->render_pattern_template( 'components/c-heading', $c_heading, true ); ?>
	</header>
	<div class="pmc-u-margin-b-0 u-border-bottom-2">
		<?php \PMC\Larva\Pattern::get_instance()->render_pattern_template( 'objects/o-story-list', $o_story_list, true ); ?>
	</div>
	<?php do_action( 'trending_ads_wp_action' ); ?>
</section>
