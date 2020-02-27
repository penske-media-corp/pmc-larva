# larva-js/interface

Each interface module is (well, should be) comprised of:

```
| ModuleName
|–– ModuleName.js
|–– ModuleName.test.js
|–– index.js
```

ModuleName/ModuleName.js should export a class containing all functionality necessary for the module.

ModuleName/index.js should export a function titled `initModuleName` that queries the DOM for a selector and creates a new instance of the class for each selector.

See the [JS Authoring Guidelines](https://github.com/penske-media-corp/pmc-larva/wiki/JS-Authoring-Guidelines) for further notes.
