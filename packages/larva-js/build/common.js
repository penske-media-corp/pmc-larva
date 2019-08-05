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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interface_MobileHeightToggle_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface/MobileHeightToggle/index */ \"./src/interface/MobileHeightToggle/index.js\");\n\n\nconst onSafeResize = function() {\n\tObject(_interface_MobileHeightToggle_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( window.innerWidth );\n};\n\nwindow.addEventListener( 'load', () => {\n\tonSafeResize();\n});\n\nwindow.addEventListener( 'resize', () => {\n\tonSafeResize();\n});\n\n//# sourceURL=webpack:///./src/common.js?");

/***/ }),

/***/ "./src/interface/MobileHeightToggle/MobileHeightToggle.js":
/*!****************************************************************!*\
  !*** ./src/interface/MobileHeightToggle/MobileHeightToggle.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MobileHeightToggle; });\n/**\n * Add drop-down functionality for navigation component.\n */\nclass MobileHeightToggle {\n\tconstructor( el ) {\n\t\tthis.el = el;\n\t\tthis.el.pmcMobileHeightToggle = this;\n\t\tthis.isExpanded = false;\n\t\tthis.toggle = this.toggle.bind( this );\n\t\tthis.el.addEventListener( 'click', this.toggle );\n\t}\n\t\n\tdestroy() {\n\t\tthis.el.classList.remove( 'is-expanded' );\n\t\tthis.isExpanded = false;\n\t\tdelete this.el.pmcMobileHeightToggle;\n\t}\n\n\ttoggle( e ) {\n\t\tif ( undefined !== this.el.pmcMobileHeightToggle ) {\n\n\t\t\t// Bubble event\n\t\t\tif ( e.target.classList.contains( 'pmc-js-MobileHeightToggle-trigger' ) ) {\n\t\t\t\tif ( ! this.isExpanded ) {\n\t\t\t\t\te.preventDefault();\n\t\t\t\t\tthis.el.classList.add( 'is-expanded' );\n\t\t\t\t\tthis.isExpanded = true;\n\t\t\t\t} else {\n\t\t\t\t\tthis.el.classList.remove( 'is-expanded' );\n\t\t\t\t\tthis.isExpanded = false;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n}\n\n\n//# sourceURL=webpack:///./src/interface/MobileHeightToggle/MobileHeightToggle.js?");

/***/ }),

/***/ "./src/interface/MobileHeightToggle/index.js":
/*!***************************************************!*\
  !*** ./src/interface/MobileHeightToggle/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MobileHeightToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileHeightToggle */ \"./src/interface/MobileHeightToggle/MobileHeightToggle.js\");\n\n\n// Initialize all Dropdowns.\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function( width ) {\n\tconst dropdowns = [ ... document.querySelectorAll( '.pmc-js-MobileHeightToggle' ) ];\n\n\tdropdowns.forEach( el => {\n\n\t\tif ( 768 > width && undefined === el.pmcMobileHeightToggle ) {\n\t\t\tnew _MobileHeightToggle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( el );\t\n\t\t}\n\t\t\n\t\tif ( 768 <= width && undefined !== el.pmcMobileHeightToggle ) {\n\t\t\tel.pmcMobileHeightToggle.destroy();\n\t\t}\n\t});\n});;\n\n\n//# sourceURL=webpack:///./src/interface/MobileHeightToggle/index.js?");

/***/ })

/******/ });