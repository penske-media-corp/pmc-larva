# PMC JavaScript Modules

Please review the PMC JavaScript Coding Standards for information about writing presentational JavaScript.

## Utils

_Utils_ are packages of *functionality* that are not directly associated with a piece of user interface. Utils will be imported by Modules and Components. Any third party scripts should be included in the third-party directory.

**Utils generally should export functions or classes to be invoked in modules.**

## Modules

_Modules_ are fully featured, functional pieces of interface that include both CSS and JS files (and eventually may include PHP templates alongside them). They are included on an as-needed basis directly into template entries, and make use of both Utils and Components.

**Modules' index.js files should contain IIFEs functions that select `data-*` elements and fully initialize the component. Including them in an entry should intialize the module.**