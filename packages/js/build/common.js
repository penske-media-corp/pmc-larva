/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interface_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface/Dropdown/index */ \"./src/interface/Dropdown/index.js\");\n\n\nconst onSafeResize = function() {\n\tconst width = window.innerWidth;\n\n\tObject(_interface_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( width );\n};\n\nwindow.addEventListener( 'load', () => {\n\tonSafeResize();\n});\n\n//# sourceURL=webpack:///./src/common.js?");

/***/ }),

/***/ "./src/interface/Dropdown/Dropdown.js":
/*!********************************************!*\
  !*** ./src/interface/Dropdown/Dropdown.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dropdown; });\n/**\n * Add drop-down functionality for navigation component.\n */\nclass Dropdown {\n\tconstructor( el ) {\n\t\tthis.el = el;\n\t\tthis.el.pmcDropdown = this;\n\t\tthis.toggle = this.toggle.bind( this );\n\t\tthis.el.addEventListener( 'click', this.toggle );\n\t}\n\n\tdestroy() {\n\t\tdelete this.el.pmcDropdown;\n\t}\n\n\tget activeItem() {\n\t\tconsole.log( this.el );\n\t\t\n\t\treturn this.el.querySelector( '.is-active' );\n\t}\n\n\t// get items() {\n\t// \treturn [ ... this.el.querySelectorAll( '.pmc-js-Dropdown-list-item' ) ];\n\t// }\n\n\tget list() {\n\t\treturn this.el.querySelector( '.pmc-js-Dropdown-list' );\n\t}\n\n\ttoggle( e ) {\n\t\tconst parent     = this.el;\n\t\t\n\t\tif ( e.target.classList.contains( 'pmc-js-Dropdown-trigger' ) ) {\n\t\t\tif ( ! parent.classList.contains( 'is-expanded' ) ) {\n\t\t\t\te.preventDefault();\n\t\t\t\tparent.classList.add( 'is-expanded' );\n\t\t\t\treturn;\n\t\t\t} else {\n\t\t\t\tparent.classList.remove( 'is-expanded' );\n\t\t\t}\n\t\t}\n\t\tconsole.log( e.target );\n\t\t\n\t\t\t\n\t\t// Prevent default if active item was clicked again.\n\t\t// if ( this.isActive( parentItem ) ) {\n\t\t// \te.preventDefault();\n\t\t// } else {\n\t\t// \tthis.setActive( parentItem );\n\t\t// }\n\n\t\t// if ( this.isHeadingItem( parentItem ) ) {\n\t\t// \tparent.dataset.expanded = 'false';\n\t\t// }\n\t}\n\n\tisActive( item ) {\n\t\treturn item.classList.contains( 'is-active' );\n\t}\n\n\tsetActive( item ) {\n\t\tthis.activeItem.classList.remove( 'is-active' );\n\t\titem.classList.add( 'is-active' );\n\t}\n\n\tisItem( node ) {\n\t\treturn node.dataset.dropdownListItem ? true : false;\n\t}\n\n\tisHeadingItem( node ) {\n\t\treturn node.classList.contains( 'is-heading' );\n\t}\n\n\tfindParentItem( child ) {\n\t\tlet currentNode = child;\n\n\t\twhile ( ! this.isItem( currentNode ) ) {\n\t\t\tif ( currentNode === this.el ) {\n\t\t\t\treturn null;\n\t\t\t}\n\n\t\t\tcurrentNode = currentNode.parentNode;\n\t\t}\n\n\t\treturn currentNode;\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/interface/Dropdown/Dropdown.js?");

/***/ }),

/***/ "./src/interface/Dropdown/index.js":
/*!*****************************************!*\
  !*** ./src/interface/Dropdown/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.js */ \"./src/interface/Dropdown/Dropdown.js\");\n\n\n// Initialize all Dropdowns.\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n\tconst dropdowns = [ ... document.querySelectorAll( '.pmc-js-Dropdown' ) ];\n\tconst width     = window.innerWidth;\n\t\n\tdropdowns.forEach( el => {\n\t\tif ( 768 > width && undefined === el.pmcDropdown ) {\n\t\t\tnew _Dropdown_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( el );\n\t\t\tconsole.log( el );\n\t\t\t\n\t\t} else if ( 768 <= width && undefined !== el.pmcDropdown ) {\n\t\t\tel.pmcDropdown.destroy();\n\t\t}\n\t});\n});;\n\n\n//# sourceURL=webpack:///./src/interface/Dropdown/index.js?");

/***/ })

/******/ });