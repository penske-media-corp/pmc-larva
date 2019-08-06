/**
 * Add drop-down functionality for navigation component.
 */
export default class Dropdown {
	constructor( el ) {
		this.el = el;
		this.el.pmcDropdown = this;
		this.classBase = this.el.classList.item( 0 );
		this.toggle = this.toggle.bind( this );
		this.el.addEventListener( 'click', this.toggle );
	}

	destroy() {
		delete this.el.pmcDropdown;
	}

	get activeItem() {
		return this.el.querySelector( '.is-active' );
	}

	get items() {
		return [ ... this.el.querySelectorAll( '.js-Dropdown-list-item' ) ];
	}

	get list() {
		return this.el.querySelector( '.js-Dropdown-list' );
	}

	/**
	 * Toggle drop-down if target is header item.
	 * Set drop-down active item on click.
	 *
	 * @param e
	 */
	toggle( e ) {
		const parent      = this.el;
		const parentItem = this.findParentItem( e.target );

		if ( 'true' !== parent.dataset.expanded ) {
			e.preventDefault();
			parent.dataset.expanded = 'true';
			return;
		} else {
			parent.dataset.expanded = '';
		}

		// Prevent default if active item was clicked again.
		if ( this.isActive( parentItem ) ) {
			e.preventDefault();
		} else {
			this.setActive( parentItem );
		}

		if ( this.isHeadingItem( parentItem ) ) {
			parent.dataset.expanded = 'false';
		}
	}

	/**
	 * Return true if given item is currently active.
	 *
	 * @param item
	 * @return {boolean}
	 */
	isActive( item ) {
		return item.classList.contains( 'is-active' );
	}

	/**
	 * Set `is-active` class to given item.
	 *
	 * @param item
	 */
	setActive( item ) {
		this.activeItem.classList.remove( 'is-active' );
		item.classList.add( 'is-active' );
	}

	/**
	 * Check whether given node is navigation item or not?
	 *
	 * @param node
	 * @return {boolean}
	 */
	isItem( node ) {
		return node.dataset.dropdownListItem ? true : false;
	}

	/**
	 * Check whether given node is navigation heading item or not?
	 *
	 * @param node
	 * @return {boolean}
	 */
	isHeadingItem( node ) {
		return node.classList.contains( 'is-heading' );
	}

	/**
	 * Find parent item of given node.
	 *
	 * @param child
	 * @return {*}
	 */
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
