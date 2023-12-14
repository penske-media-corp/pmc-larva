// Copied from Deadline
export default class Collapsible {
	constructor( el ) {
		this.el = el;
		this.toggleEl = this.el.querySelector( '[data-collapsible-toggle]' );
		this.panels = [
			...this.el.querySelectorAll( '[data-collapsible-panel]' ),
		];
		this.group = this.findGroup();

		this.toggle = this.toggle.bind( this );
		this.onClick = this.onClick.bind( this );

		if ( this.toggleEl ) {
			this.toggleEl.addEventListener( 'click', this.onClick );
		}
	}

	destroy() {
		if ( this.toggleEl ) {
			this.toggleEl.removeEventListener( 'click', this.onClick );
		}

		if ( ! this.isCollapsed ) {
			this.toggle();
		}
	}

	get state() {
		return this.el.dataset.collapsible;
	}

	set state( newState ) {
		this.el.dataset.collapsible = newState;

		if ( this.isCollapsed ) {
			this.el.classList.remove( 'is-expanded' );
		} else {
			this.el.classList.add( 'is-expanded' );
		}
	}

	get isCollapsed() {
		return 'collapsed' === this.state;
	}

	get container() {
		return document.querySelector( this.el.dataset.collapsibleContainer );
	}

	get closeOnClick() {
		return undefined !== this.el.dataset.collapsibleCloseOnClick;
	}

	findGroup() {
		const groups = [
			...document.body.querySelectorAll( '[data-collapsible-group]' ),
		];
		return groups.find( ( g ) => g.contains( this.el ) ) || null;
	}

	onClick( e ) {
		e.preventDefault();
		this.toggle();
	}

	toggle() {
		this.state = this.isCollapsed ? 'expanded' : 'collapsed';
		this.maybeRepositionPanel();
		this.maybeCloseOnClick();

		if ( 'expanded' === this.state ) {
			document
				.querySelector( '[data-collapsible-toggle] + li > a' )
				.focus();

			if ( null !== this.group ) {
				this.closeOthersInGroup();
			}
		}
	}

	collapse() {
		if ( 'expanded' === this.state ) {
			this.toggle();
		}
	}

	closeOthersInGroup() {
		[ ...this.group.querySelectorAll( '[data-collapsible]' ) ].forEach(
			( collapsible ) => {
				if ( collapsible !== this.el ) {
					collapsible.pmcCollapsible.collapse();
				}
			}
		);
	}

	maybeRepositionPanel() {
		if ( ! this.container ) {
			return;
		}

		if ( this.isCollapsed ) {
			this.panels.forEach( ( panel ) => ( panel.style.marginLeft = '' ) );
		} else {
			const containerLeft = this.container.getBoundingClientRect().left;

			this.panels.forEach( ( panel ) => {
				const panelRect = panel.getBoundingClientRect();

				if ( 0 === panelRect.width && 0 === panelRect.height ) {
					return;
				}

				const panelMarginLeft = parseInt(
					window.getComputedStyle( panel ).marginLeft,
					10
				);
				const left = panelRect.left - panelMarginLeft * 2;

				if ( left < containerLeft ) {
					panel.style.marginLeft = `${ containerLeft - left }px`;
				}
			} );
		}
	}

	maybeCloseOnClick() {
		if ( ! this.closeOnClick ) {
			return;
		}

		if ( this.isCollapsed ) {
			document.body.removeEventListener( 'click', this.toggle );
		} else {
			setTimeout(
				() => document.body.addEventListener( 'click', this.toggle ),
				1
			);
		}
	}
}
