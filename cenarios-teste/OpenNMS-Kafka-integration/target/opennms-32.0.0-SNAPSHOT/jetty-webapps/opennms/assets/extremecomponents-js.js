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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extremecomponents-js"],{

/***/ "./src/main/assets/js/lib/3rdparty/extremecomponents/extremecomponents.js":
/*!********************************************************************************!*\
  !*** ./src/main/assets/js/lib/3rdparty/extremecomponents/extremecomponents.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
function getParameterMap(form) {
  var p = document.forms[form].elements;
  var map = new Object();
  for (var x = 0; x < p.length; x++) {
    var key = p[x].name;
    var val = p[x].value;

    //Check if this field name is unique.
    //If the field name is repeated more than once
    //add it to the current array.
    var curVal = map[key];
    if (curVal) {
      // more than one field so append value to array
      curVal[curVal.length] = val;
    } else {
      // add field and value
      map[key] = [val];
    }
  }
  return map;
}
function setFormAction(form, action, method) {
  if (action) {
    document.forms[form].setAttribute('action', action);
  }
  if (method) {
    document.forms[form].setAttribute('method', method);
  }
  document.forms[form].ec_eti.value = '';
}

/***/ }),

/***/ "./src/main/assets/js/vendor/extremecomponents-js.js":
/*!***********************************************************!*\
  !*** ./src/main/assets/js/vendor/extremecomponents-js.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ex = __webpack_require__(/*! ../lib/3rdparty/extremecomponents/extremecomponents.js */ "./src/main/assets/js/lib/3rdparty/extremecomponents/extremecomponents.js");
window.getParameterMap = ex.getParameterMap;
window.setFormAction = ex.setFormAction;
console.log('init: extremecomponents-js'); // eslint-disable-line no-console

module.exports = ex;

/***/ })

},[["./src/main/assets/js/vendor/extremecomponents-js.js","vendor"]]]);
});
//# sourceMappingURL=extremecomponents-js.js.map