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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ionicons-css"],{

/***/ "./src/main/assets/js/vendor/ionicons-css.js":
/*!***************************************************!*\
  !*** ./src/main/assets/js/vendor/ionicons-css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var css = __webpack_require__(/*! ../../../../../node_modules/ionicons/css/ionicons.css */ "./node_modules/ionicons/css/ionicons.css");
console.log('init: ionicons-css'); // eslint-disable-line no-console

module.exports = css;

/***/ })

},[["./src/main/assets/js/vendor/ionicons-css.js","vendor"]]]);
});
//# sourceMappingURL=ionicons-css.js.map