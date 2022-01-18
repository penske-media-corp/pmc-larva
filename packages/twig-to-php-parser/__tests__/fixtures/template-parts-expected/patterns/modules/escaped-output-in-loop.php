<?php foreach ( $slides ?? [] as $item ) { ?>
	<div>
		<?php echo wp_kses_post( $item ?? '' ); ?>
	</div>
<?php } ?>
