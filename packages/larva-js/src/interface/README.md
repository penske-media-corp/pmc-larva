# # larva-js/interface

Each interface module is (well, should be) comprised of:

```
| ModuleName
|–– ModuleName.js
|–– ModuleName.test.js
|–– index.js
```

ModuleName/ModuleName.js should export a class containing all functionality necessary for the module. 

ModuleName/index.js should export a function titled `initModuleName` that queries the DOM for a selector and creates a new instance of the class for each selector. 

## Authoring and Usage Example

Let's walk through authoring a new interface JS module, called `Accordian`. I would first create a class in `src/interface/Accordian/Accordian.js` containing methods and event handling. 

```
// Accordian/Accordian.js
export default class Accordian {

	constructor( el ) {
		this.el = el;

		// Indicate the class has been created by creating this property on the DOM node.
		this.el.pmcAccordian = this;

		// Bind an event listener like so:
		this.onClick = this.onClick.bind( this );
		this.el.addEventListener( 'click', this.onClick );

		// Set up additional UI in a central place vs. in class methods.
		// Note we are using SUITCSS naming with a capitalized module name, and
		// camelCase decendents.
		this.ui = {
			heading: el.querySelectorAll( '.lrv-js-Accordian-heading' ),
			content: el.querySelectorAll( '.lrv-js-Accordian-content' )
		}
		
		// You may also want to create an object, `this.state`, to store any dynamic information.
		this.state = {
			isOpen: false
		};
	}

	onClick( e ) {
		if ( true === this.state.isOpen ) {
			this.close();
		} else {
			this.open();
		}
	}

	close() {
		this.state.isOpen = false;
		this.content.classList.remove( 'is-open' );
	}

	open() {
		this.state.isOpen = true;
		this.content.classList.add( 'is-open' );
	}

}
```

Then, in `src/interface/Accordian/index.js`, we will exports a single function, `initAccordians()`, that gathers an array of DOM nodes and initializes a new Accordian for each.

```
import Accordian from './Accordian';

// Initialize Accordians.
export default function initAccordians() {

	const accordians = [ ... document.querySelectorAll( '.lrv-js-Accordian' ) ];

	accordians.forEach( el => el.pmcAccordian = new Accordian( el ) );
}
```

To use Accordians in a theme, you only need to be concerned with calling this single function at the template level. If there is corresponding CSS and markup in larva-patterns and larva-css, then all of the selectors should be hooked up. If not, refer to the JS source and structure the markup accordingly. 

Let's say our Accordian only appears on the single article template. You would initialize it in a theme's `assets/entries/single.entry.js` like so:

```
import initAccordians from '@larva-js/interface/Accordian';

window.addEventListener( 'DOMContentLoaded', () => {
	initAccordians();
	// Initialize other JS here.
} );
```

Note that the `@larva-js` syntax above is mapped to a webpack alias that points to node_modules/@penskemediacorp/larva-js. This is included by default when using the webpack configuration provided in the core larva package.

The same approach should be followed in themes so that we can easily move theme-level JS into this shared repository.