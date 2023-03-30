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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timeline-resize"],{

/***/ "./src/main/assets/js/apps/timeline-resize/index.js":
/*!**********************************************************!*\
  !*** ./src/main/assets/js/apps/timeline-resize/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _find = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2015-2021 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2021 The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is a registered trademark of The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * OpenNMS(R) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with OpenNMS(R).  If not, see:
 *      http://www.gnu.org/licenses/
 *
 * For more information contact:
 *     OpenNMS(R) Licensing <license@opennms.org>
 *     http://www.opennms.org/
 *     http://www.opennms.com/
 *******************************************************************************/

var debounce = __webpack_require__(/*! ../../../../../../node_modules/lodash/lodash */ "./node_modules/lodash/lodash.js").debounce;
var DEBOUNCE_RATE = 200; // ms
var RELATIVE_SIZE = 0.5;
var getSize = function getSize(element) {
  // if we can get the offset width of the actual <td>, use it
  var td = element.closest('td')[0];
  if (td !== undefined) {
    return Math.round(td.offsetWidth);
  }

  // otherwise, fall back to the old way of calculating
  var container = element.closest('div'); // This is the panel, not the cell that contains the IMG
  if (container !== undefined) {
    return Math.round(container.width() * RELATIVE_SIZE);
  }
  return NaN;
};
var recalculateBox = debounce(function () {
  var e = $('#availability-box');
  // Update the timeline headers
  var imgs = (0, _find.default)(e).call(e, 'img');
  for (var i = 0; i < imgs.length; i++) {
    var img = $(imgs[i]);
    var w = getSize(img);
    if (w) {
      var imgsrc = img.data('imgsrc') + w;
      img.attr('src', imgsrc);
    }
  }
  // Update the timeline html/images
  var spans = (0, _find.default)(e).call(e, 'span');
  for (var _i = 0; _i < spans.length; _i++) {
    var span = $(spans[_i]);
    var _w = getSize(span);
    if (_w && span.data('src')) {
      var htmlsrc = span.data('src') + _w;
      span.load(String(htmlsrc));
    }
  }
}, DEBOUNCE_RATE);
$(document).ready(recalculateBox);
window.addEventListener('resize', recalculateBox);

/***/ })

},[["./src/main/assets/js/apps/timeline-resize/index.js","vendor"]]]);
});
//# sourceMappingURL=timeline-resize.js.map