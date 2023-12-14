<?php
/**
 * Generated file.
 *
 * Refer to the relevant Twig file for adjusting this markup.
 */

?>

<?php foreach ( $list_items ?? [] as $item ) { ?>
	<li class="list__item larva // <?php echo esc_attr( $list_item_classes ?? '' ); ?>">
		<?php if ( ! empty( $item['list_items'] ) ) { ?>
			<?php \PMC\Larva\Pattern::get_instance()->render_pattern_template( 'modules/list', $item, true ); ?>
		<?php } else { ?>
			<div class="<?php echo esc_attr( $item['list_item_classes'] ?? '' ); ?>">
				<?php echo wp_kses_post( $item['list_item_markup'] ?? '' ); ?>
			</div>
		<?php } ?>
	</li>
<?php } ?>
