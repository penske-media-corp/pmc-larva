<?php
/**
 * Generated file.
 *
 * Refer to the relevant Twig file for adjusting this markup.
 */

?>

<p class="c-byline <?php echo esc_attr( $modifier_class ?? '' ); ?> <?php echo esc_attr( $c_byline_classes ?? '' ); ?>">
	<?php echo esc_html( $c_byline_by_text ?? '' ); ?>

	<?php echo wp_kses_post( $c_byline_markup ?? '' ); ?>
</p>
