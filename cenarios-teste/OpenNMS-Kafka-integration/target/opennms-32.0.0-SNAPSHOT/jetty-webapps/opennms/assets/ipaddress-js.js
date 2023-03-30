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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ipaddress-js"],{

/***/ "./src/main/assets/js/vendor/ipaddress-js.js":
/*!***************************************************!*\
  !*** ./src/main/assets/js/vendor/ipaddress-js.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = _interopRequireDefault(__webpack_require__(/*! ../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _require = __webpack_require__(/*! ../../../../../node_modules/ip-address/dist/cjs/ip-address */ "./node_modules/ip-address/dist/cjs/ip-address.js"),
  Address4 = _require.Address4,
  Address6 = _require.Address6;
var verifyIPv4Address = function verifyIPv4Address(ip) {
  try {
    new Address4(ip);
  } catch (err) {
    return false;
  }
  return true;
};
var verifyIPv6Address = function verifyIPv6Address(ip) {
  try {
    new Address6(ip);
  } catch (err) {
    return false;
  }
  return true;
};
var isValidIPAddress = function isValidIPAddress(ip) {
  return verifyIPv4Address(ip) || verifyIPv6Address(ip);
};
var checkIpRange = function checkIpRange(ip1, ip2) {
  if (verifyIPv4Address(ip1) && verifyIPv4Address(ip2)) {
    var a = new Address4(ip1).bigInteger();
    var b = new Address4(ip2).bigInteger();
    return b >= a;
  }
  if (verifyIPv6Address(ip1) && verifyIPv6Address(ip2)) {
    var _a = new Address6(ip1).bigInteger();
    var _b = new Address6(ip2).bigInteger();
    return _b.compareTo(_a) >= 0;
  }
  return false;
};
console.log('init: ipaddress-js'); // eslint-disable-line no-console

module.exports = {
  Address4: Address4,
  Address6: Address6,
  verifyIPv4Address: verifyIPv4Address,
  verifyIPv6Address: verifyIPv6Address,
  isValidIPAddress: isValidIPAddress,
  checkIpRange: checkIpRange
};
(0, _assign.default)(window, module.exports);

/***/ })

},[["./src/main/assets/js/vendor/ipaddress-js.js","vendor"]]]);
});
//# sourceMappingURL=ipaddress-js.js.map