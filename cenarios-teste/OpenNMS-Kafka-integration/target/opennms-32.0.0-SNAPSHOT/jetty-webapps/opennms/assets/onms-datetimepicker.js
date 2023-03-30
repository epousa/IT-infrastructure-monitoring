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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onms-datetimepicker"],{

/***/ "./src/main/assets/js/lib/onms-datetimepicker/index.js":
/*!*************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-datetimepicker/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bind = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var moment = __webpack_require__(/*! ../../vendor/moment-js */ "./src/main/assets/js/vendor/moment-js.js");
__webpack_require__(/*! ../../vendor/bootstrap-js */ "./src/main/assets/js/vendor/bootstrap-js.js");
__webpack_require__(/*! ../../../../../../node_modules/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4 */ "./node_modules/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.js");
__webpack_require__(/*! ../../../../../../node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css */ "./node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css");
var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var template = __webpack_require__(/*! ./template.html */ "./src/main/assets/js/lib/onms-datetimepicker/template.html");
angular.module('onms.datetimepicker', ['ui.bootstrap']).directive('datetimepicker', ["$timeout", function ($timeout) {
  return {
    restrict: 'E',
    templateUrl: template,
    scope: {
      id: '@?id',
      format: '<?format',
      sideBySide: '@?expand',
      inline: '@?inline',
      locale: '<?locale',
      date: '=?ngModel',
      calendarWeeks: '@?calendarWeeks',
      maxDate: '=?maxDate',
      options: '=?options',
      onStateChange: '&?onStateChange'
    },
    link: function link(scope, element, attrs) {
      // Apply if id is provided
      if (scope.id) {
        scope.elementId = scope.id;
      } else {
        // otherwise calculate it
        scope.id = angular.element('[data-toggle="datetimepicker"]').length;
        scope.elementId = 'datetimepicker-' + scope.id;
      }
      scope.onStateChange = scope.onStateChange || function (invalidState) {}; // eslint-disable-line @typescript-eslint/no-empty-function

      // Determine the options
      scope.options = scope.options || {};
      scope.options.sideBySide = scope.sideBySide === "true" || false;
      scope.options.inline = scope.inline === "true" || false;
      scope.options.calendarWeeks = scope.calendarWeeks === "true" || false;
      scope.options.format = scope.options.format || 'YYYY-MM-DD HH:mm';
      if (scope.locale) {
        scope.options.locale = scope.locale;
      }
      if (scope.date) {
        scope.options.defaultDate = scope.date;
      }
      if (scope.maxDate) {
        scope.options.maxDate = scope.maxDate;
      }
      if (scope.format) {
        scope.options.format = scope.format;
      }
      scope.options.buttons = {
        showToday: true,
        showClose: true
      };

      // Override the clear icon as it is using fa-delete by default which is not available
      scope.options.icons = {
        clear: "fa fa-trash",
        close: "fa fa-check"
      };

      // Listen for keydown events to validate the input immediately
      // and not only on lost focus
      (0, _bind.default)(element).call(element, 'keydown', function (event) {
        if (event.target && event.target.value) {
          // Stop previous validation
          if (scope.validationHandle) {
            $timeout.cancel(scope.validationHandle);
          }
          // Trigger validation
          scope.validationHandle = $timeout(function () {
            var parsedDate = moment(event.target.value, scope.options.format);
            if (parsedDate.isValid()) {
              scope.date = parsedDate;
              scope.error = false;
            } else {
              scope.error = true;
            }
            scope.onStateChange({
              invalidState: scope.error
            });
          }, 100);
        }
      });

      // On change of datetimepicker, update the model value
      (0, _bind.default)(element).call(element, 'change.datetimepicker', function (event) {
        scope.$apply(function () {
          if (event.date) {
            scope.date = event.date.format(scope.options.format);
            scope.error = false;
            scope.onStateChange({
              invalidState: scope.error,
              date: scope.date
            });
          }
        });
      });

      // Component is not yet rendered, so invoke it delayed
      $timeout(function () {
        angular.element("#" + scope.elementId).datetimepicker(scope.options);
      }, 0);
    }
  };
}]);
module.exports = angular;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-datetimepicker/template.html":
/*!******************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-datetimepicker/template.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"form-group\">\n    <div class=\"input-group date\" id=\"{{elementId}}\" data-target-input=\"nearest\">\n        <input type=\"text\" ng-class=\"{ 'is-invalid': error }\" class=\"form-control datetimepicker\" data-target=\"#{{elementId}}\">\n        <div class=\"input-group-append\" data-target=\"#{{elementId}}\" data-toggle=\"datetimepicker\">\n            <div class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></div>\n        </div>\n        <div class=\"invalid-feedback\" ng-show=\"error === true\">Please provide a valid date value.</div>\n    </div>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/lib/onms-datetimepicker/template.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/vendor/angular-js.js":
/*!*************************************************!*\
  !*** ./src/main/assets/js/vendor/angular-js.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Load jQuery first, so Angular finds it */
__webpack_require__(/*! ./jquery-js */ "./src/main/assets/js/vendor/jquery-js.js");

/* Angular Core */
var angular = __webpack_require__(/*! ../../../../../node_modules/angular */ "./node_modules/angular/index.js-exposed");
__webpack_require__(/*! ../../../../../node_modules/angular-animate */ "./node_modules/angular-animate/index.js");
__webpack_require__(/*! ../../../../../node_modules/angular-cookies */ "./node_modules/angular-cookies/index.js");
__webpack_require__(/*! ../../../../../node_modules/angular-route */ "./node_modules/angular-route/index.js");
__webpack_require__(/*! ../../../../../node_modules/angular-resource */ "./node_modules/angular-resource/index.js");
__webpack_require__(/*! ../../../../../node_modules/angular-sanitize */ "./node_modules/angular-sanitize/index.js");

/* 3rd-Party Modules */
__webpack_require__(/*! ../../../../../node_modules/angular-growl-v2/build/angular-growl.min */ "./node_modules/angular-growl-v2/build/angular-growl.min.js");
__webpack_require__(/*! ../../../../../node_modules/angular-loading-bar */ "./node_modules/angular-loading-bar/index.js");
__webpack_require__(/*! ../../../../../node_modules/angular-growl-v2/build/angular-growl.css */ "./node_modules/angular-growl-v2/build/angular-growl.css");
__webpack_require__(/*! ../../../../../node_modules/angular-loading-bar/build/loading-bar.css */ "./node_modules/angular-loading-bar/build/loading-bar.css");

/* Bootstrap UI */
__webpack_require__(/*! ./bootstrap-js */ "./src/main/assets/js/vendor/bootstrap-js.js");
__webpack_require__(/*! ../../../../../node_modules/angular-bootstrap-checkbox/angular-bootstrap-checkbox */ "./node_modules/angular-bootstrap-checkbox/angular-bootstrap-checkbox.js");
__webpack_require__(/*! ../../../../../node_modules/ui-bootstrap4 */ "./node_modules/ui-bootstrap4/index.js"); // angular-ui-boostrap for bootstrap 4

console.log('init: angular-js ' + angular.version.full); // eslint-disable-line no-console

module.exports = window['angular'] = angular;

/***/ }),

/***/ "./src/main/assets/js/vendor/bootstrap-js.js":
/*!***************************************************!*\
  !*** ./src/main/assets/js/vendor/bootstrap-js.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('init: bootstrap-js'); // eslint-disable-line no-console

var jQuery = __webpack_require__(/*! ./jquery-js */ "./src/main/assets/js/vendor/jquery-js.js");
__webpack_require__(/*! ./moment-js */ "./src/main/assets/js/vendor/moment-js.js");
__webpack_require__(/*! ../../../../../node_modules/bootstrap/dist/js/bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
module.exports = jQuery;

/***/ }),

/***/ "./src/main/assets/js/vendor/jquery-js.js":
/*!************************************************!*\
  !*** ./src/main/assets/js/vendor/jquery-js.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('init: jquery-js'); // eslint-disable-line no-console

var jQuery = __webpack_require__(/*! ../../../../../node_modules/jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js-exposed");
__webpack_require__(/*! ../../../../../node_modules/jquery-migrate/dist/jquery-migrate */ "./node_modules/jquery-migrate/dist/jquery-migrate.js");
module.exports = jQuery;

/***/ }),

/***/ "./src/main/assets/js/vendor/moment-js.js":
/*!************************************************!*\
  !*** ./src/main/assets/js/vendor/moment-js.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('init: moment-js'); // eslint-disable-line no-console

var moment = __webpack_require__(/*! ../../../../../node_modules/moment/moment */ "./node_modules/moment/moment.js");
__webpack_require__(/*! ../../../../../node_modules/moment-timezone */ "./node_modules/moment-timezone/index.js");
__webpack_require__(/*! ../../../../../node_modules/@rangerrick/moment-javaformat/dist/node.min */ "./node_modules/@rangerrick/moment-javaformat/dist/node.min.js");
module.exports = moment;

/***/ })

},[["./src/main/assets/js/lib/onms-datetimepicker/index.js","vendor"]]]);
});
//# sourceMappingURL=onms-datetimepicker.js.map