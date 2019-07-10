function describe( testString, tests ) {
	console.group( testString );
	tests();
	console.groupEnd();
}

function it( testString, test ) {
	let testResult = test();
	console.log( testString, testResult );
}

window.addEventListener( 'load', () => {
	
	describe( 'a-space-children-vertical', () => {

		const parents = document.querySelectorAll( '.a-space-children-vertical' );
		
		parents.forEach( parent => {
			const children = parent.querySelectorAll( ':scope > * ');
			const parentBox = parent.getBoundingClientRect();

			it( 'does not apply a space above the first item', () => {
				let kid = children[0];
				return parentBox.top === kid.getBoundingClientRect().top;
			});

			it( 'spaces children', () => {
				let kid1 = children[1].getBoundingClientRect();
				let kid2 = children[2].getBoundingClientRect();
				
				const spaceInPixels = parseInt( window.getComputedStyle( parent ).getPropertyValue( '--a-space-children-spacer' ) ) * 16; 

				return kid1.bottom % ( parseInt(kid2.top) - spaceInPixels ) < 1; // Values are within 1px of each other.
			});
	
			it( 'does not apply a space below the last item', () => {
				let kid = children[ children.length - 1 ];
				return parentBox.bottom === kid.getBoundingClientRect().bottom;
			});
	
		});

	});

	describe( 'a-space-children-horizontal', () => {

		const parents = document.querySelectorAll( '.a-space-children-horizontal' );
		
		parents.forEach( parent => {
			const children = parent.querySelectorAll( ':scope > * ');
			const parentBox = parent.getBoundingClientRect();

			it( 'does not apply a space left of the first item', () => {
				let kid = children[0];
				return parentBox.left === kid.getBoundingClientRect().left;
			});

			it( 'spaces children', () => {
				let kid1 = children[1].getBoundingClientRect();
				let kid2 = children[2].getBoundingClientRect();
				
				const spaceInPixels = parseInt( window.getComputedStyle( parent ).getPropertyValue( '--a-space-children-spacer' ) ) * 16; 

				return kid1.right % ( parseInt(kid2.left) - spaceInPixels ) < 1; // Values are within 1px of each other.
			});
	
			it( 'does not apply a space to the right of the last item', () => {
				let kid = children[ children.length - 1 ];
				return parentBox.right === kid.getBoundingClientRect().right;
			});
	
		});

	});
});