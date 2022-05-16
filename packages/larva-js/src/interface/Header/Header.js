// Copied from Vibe
export default class Header {
	constructor(el) {
		this.el = el;
		this.el.pmcHeader = this;
		this.container = document.documentElement;

		this.initSticky();

		// Uncomment when ready to work on search.
		this.initSearch();
	}

	destroy() {
		this.destroySticky();

		this.destroySearch();
		delete this.el.pmcHeader;
	}

	get stickyClass() {
		return this.el.dataset.headerStickyClass || 'is-sticky';
	}

	get readyClass() {
		return this.el.dataset.headerReadyClass || 'is-header-ready';
	}

	get searchClass() {
		return this.el.dataset.headerSearchClass || 'is-search-expanded';
	}

	initSticky() {
		if (window.IntersectionObserver) {
			this.observerOptions = {
				root: null,
				rootMargin: '350px',
				threshold: [1.0],
			};

			this.toggleSticky = this.toggleSticky.bind(this);

			// eslint-disable-next-line no-undef
			this.observer = new IntersectionObserver(
				this.toggleSticky,
				this.observerOptions
			);
			this.observer.observe(this.el);

			// Delay the initialization of the transition effects on the header.
			this.container.classList.add(this.readyClass);
		}
	}

	destroySticky() {
		if (window.IntersectionObserver) {
			this.observer.disconnect();
			this.container.classList.remove(this.stickyClass, this.readyClass);
		}
	}

	toggleSticky(entries) {
		if (window.IntersectionObserver) {
			entries.forEach((entry) => {
				const ratio = entry.intersectionRatio;

				if (1 === ratio) {
					this.container.classList.remove(this.stickyClass);
				} else if (1 > ratio) {
					this.container.classList.add(this.stickyClass);
				}
			});
		}
	}

	initSearch() {
		// TODO: Note to @Lara Schenck that this should be updated to be a class, probably
		this.searchTrigger = this.el.querySelector(
			'[data-header-search-trigger]'
		);

		if (null === this.searchTrigger) {
			return;
		}

		this.expandSearch = this.expandSearch.bind(this);
		this.collapseSearch = this.collapseSearch.bind(this);
		this.searchTrigger.addEventListener('click', this.expandSearch);
	}

	destroySearch() {
		document.body.removeEventListener('click', this.collapseSearch);
		this.searchTrigger.removeEventListener('click', this.expandSearch);
		this.container.classList.remove(this.searchClass);
	}

	expandSearch(e) {
		e.preventDefault();
		e.stopPropagation();
		this.container.classList.add(this.searchClass);

		this.searchTrigger.removeEventListener('click', this.expandSearch);

		// Delay new event listener set up to prevent immediate search form collapsing.
		setTimeout(
			() => document.body.addEventListener('click', this.collapseSearch),
			1
		);
	}

	collapseSearch(e) {
		// Do not collapse if the search form element was clicked.
		if (
			e.target === this.searchTrigger ||
			this.searchTrigger.contains(e.target)
		) {
			return;
		}

		this.container.classList.remove(this.searchClass);
		this.searchTrigger.addEventListener('click', this.expandSearch);
		document.body.removeEventListener('click', this.collapseSearch);
	}
}
