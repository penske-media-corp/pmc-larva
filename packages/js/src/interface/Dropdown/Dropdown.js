/**
 * Add drop-down functionality for navigation component.
 */
export default class Dropdown {
	constructor( el ) {
		this.el = el;
		this.el.pmcDropdown = this;
		this.toggle = this.toggle.bind( this );
		this.el.addEventListener( 'click', this.toggle );
	}

	destroy() {
		delete this.el.pmcDropdown;
	}

	get activeItem() {
		console.log( this.el );
		
		return this.el.querySelector( '.is-active' );
	}

	// get items() {
	// 	return [ ... this.el.querySelectorAll( '.pmc-js-Dropdown-list-item' ) ];
	// }

	get list() {
		return this.el.querySelector( '.pmc-js-Dropdown-list' );
	}

	toggle( e ) {
		const parent     = this.el;
		
		if ( e.target.classList.contains( 'pmc-js-Dropdown-trigger' ) ) {
			if ( ! parent.classList.contains( 'is-expanded' ) ) {
				e.preventDefault();
				parent.classList.add( 'is-expanded' );
				return;
			} else {
				parent.classList.remove( 'is-expanded' );
			}
		}
		console.log( e.target );
		
			
		// Prevent default if active item was clicked again.
		// if ( this.isActive( parentItem ) ) {
		// 	e.preventDefault();
		// } else {
		// 	this.setActive( parentItem );
		// }

		// if ( this.isHeadingItem( parentItem ) ) {
		// 	parent.dataset.expanded = 'false';
		// }
	}

	isActive( item ) {
		return item.classList.contains( 'is-active' );
	}

	setActive( item ) {
		this.activeItem.classList.remove( 'is-active' );
		item.classList.add( 'is-active' );
	}

	isItem( node ) {
		return node.dataset.dropdownListItem ? true : false;
	}

	isHeadingItem( node ) {
		return node.classList.contains( 'is-heading' );
	}

	findParentItem( child ) {
		let currentNode = child;

		while ( ! this.isItem( currentNode ) ) {
			if ( currentNode === this.el ) {
				return null;
			}

			currentNode = currentNode.parentNode;
		}

		return currentNode;
	}
}
