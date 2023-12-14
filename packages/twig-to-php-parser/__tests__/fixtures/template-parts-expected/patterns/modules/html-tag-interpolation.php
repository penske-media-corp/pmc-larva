<?php
/**
 * Generated file.
 *
 * Refer to the relevant Twig file for adjusting this markup.
 */

?>

<<?php echo esc_attr( $list_type_name ?? '' ); ?>l class="list larva // <?php echo esc_attr( $list_classes ?? '' ); ?>">
	<?php foreach ( $list_items ?? [] as $item ) { ?>
		<li class="list__item larva // <?php echo esc_attr( $list_item_classes ?? '' ); ?>">
			<?php \PMC\Larva\Pattern::get_instance()->render_pattern_template( 'modules/list', $item, true ); ?>
		</li>
	<?php } ?>
</<?php echo esc_attr( $list_type_name ?? '' ); ?>l>
