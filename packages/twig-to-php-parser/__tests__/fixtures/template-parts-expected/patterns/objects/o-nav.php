<?php
/**
 * Generated file.
 *
 * Refer to the relevant Twig file for adjusting this markup.
 */

?>

<nav class="o-nav <?php echo esc_attr( $modifier_class ?? '' ); ?> <?php echo esc_attr( $o_nav_classes ?? '' ); ?>" data-dropdown="<?php echo esc_attr( $o_nav_data_attributes ?? '' ); ?>">

	<?php if ( ! empty( $o_nav_title_text ) ) { ?>
		<h4 class="o-nav__title <?php echo esc_attr( $o_nav_title_classes ?? '' ); ?>" data-dropdown-list-item="<?php echo esc_attr( $o_nav_title_data_attributes ?? '' ); ?>"> <?php echo esc_html( $o_nav_title_text ?? '' ); ?></h4>
	<?php } ?>

	<ul class="o-nav__list <?php echo esc_attr( $o_nav_list_classes ?? '' ); ?>" data-dropdown-list="<?php echo esc_attr( $o_nav_list_data_attributes ?? '' ); ?>">
		<?php foreach ( $o_nav_list_items ?? [] as $item ) { ?>
			<li class="o-nav__list-item <?php echo esc_attr( $o_nav_list_item_classes ?? '' ); ?>" data-dropdown-list-item="<?php echo esc_attr( $o_nav_list_item_data_attributes ?? '' ); ?>">
				<?php \PMC\Larva\Pattern::get_instance()->render_pattern_template( 'components/c-nav-link', $item, true ); ?>
				
				<?php if ( ! empty( $item['newsletter_dropdown'] ) ) { ?>
					<?php \PMC\Larva\Pattern::get_instance()->render_pattern_template( 'modules/newsletter-dropdown', $item['newsletter_dropdown'], true ); ?>
				<?php } ?>
			</li>
		<?php } ?>
	</ul>
</nav>