<?php
/**
 * Generated file.
 *
 * Refer to the relevant Twig file for adjusting this markup.
 */

?>

<ul class="o-story-list <?php echo esc_attr( $modifier_class ?? '' ); ?> <?php echo esc_attr( $o_story_list_classes ?? '' ); ?>">
	<?php foreach ( $o_story_list_teases ?? [] as $item ) { ?>
		<li class="o-story-list__item <?php echo esc_attr( $o_story_list_item_classes ?? '' ); ?>">
			<?php \PMC\Larva\Pattern::get_instance()->render_pattern_template( 'objects/o-tease', $item, true ); ?>
		</li>
	<?php } ?>
</ul>
