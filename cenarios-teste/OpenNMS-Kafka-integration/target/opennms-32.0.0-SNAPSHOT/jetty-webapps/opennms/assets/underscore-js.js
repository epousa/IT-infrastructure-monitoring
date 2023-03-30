(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["underscore-js"],{

/***/ "./src/main/assets/js/vendor/underscore-js.js":
/*!****************************************************!*\
  !*** ./src/main/assets/js/vendor/underscore-js.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! ../../../../../node_modules/underscore/underscore-umd */ "./node_modules/underscore/underscore-umd.js");
console.log('init: underscore-js'); // eslint-disable-line no-console

module.exports = window['_'] = _;

/***/ })

},[["./src/main/assets/js/vendor/underscore-js.js","vendor"]]]);
});
//# sourceMappingURL=underscore-js.js.map