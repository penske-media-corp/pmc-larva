function tests() {
	describe( 'a-space-children-vertical', () => {
		const parents = document.querySelectorAll(
			'.a-space-children-vertical'
		);

		if ( parents.length > 0 ) {
			parents.forEach( ( parent ) => {
				const children = parent.children;
				const parentBox = parent.getBoundingClientRect();

				console.log( 'Node:', parent );

				it( 'does not apply a space above the first item', () => {
					const kid = children[ 0 ];

					return assertEquals(
						parentBox.top,
						kid.getBoundingClientRect().top
					);
				} );

				it( 'spaces children', () => {
					const kid1Box = children[ 0 ].getBoundingClientRect();
					const kid2Box = children[ 1 ].getBoundingClientRect();
					const parentStyles = window.getComputedStyle( parent );
					const spaceInPixels =
						parseInt(
							parentStyles.getPropertyValue(
								'--a-space-children-spacer'
							)
						) * 16;

					return assertEquals(
						kid1Box.bottom,
						kid2Box.top - spaceInPixels
					);
				} );

				it( 'does not apply a space below the last item', () => {
					const kid = children[ children.length - 1 ];

					return assertEquals(
						parentBox.bottom,
						kid.getBoundingClientRect().bottom
					);
				} );
			} );
		}
	} );

	describe( 'a-space-children-horizontal', () => {
		const parents = document.querySelectorAll(
			'.a-space-children-horizontal'
		);

		if ( parents.length > 0 ) {
			parents.forEach( ( parent ) => {
				const children = parent.children;
				const parentBox = parent.getBoundingClientRect();

				console.log( 'Node:', parent );

				it( 'does not apply a space left of the first item', () => {
					const kid = children[ 0 ];

					return assertEquals(
						parentBox.left,
						kid.getBoundingClientRect().left
					);
				} );

				it( 'spaces children', () => {
					const kid1 = children[ 0 ].getBoundingClientRect();
					const kid2 = children[ 1 ].getBoundingClientRect();

					const spaceInPixels =
						parseInt(
							window
								.getComputedStyle( parent )
								.getPropertyValue( '--a-space-children-spacer' )
						) * 16;

					return assertEquals(
						kid1.right,
						parseInt( kid2.left ) - spaceInPixels
					);
				} );
			} );
		}
	} );
}

window.addEventListener( 'load', function () {
	tests();
} );
