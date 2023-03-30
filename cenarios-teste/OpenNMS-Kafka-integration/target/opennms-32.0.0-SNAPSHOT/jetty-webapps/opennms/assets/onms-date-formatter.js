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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onms-date-formatter"],{

/***/ "./src/main/assets/js/apps/onms-date-formatter/index.js":
/*!**************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-date-formatter/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint no-console: 0 */

var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var moment = __webpack_require__(/*! ../../vendor/moment-js */ "./src/main/assets/js/vendor/moment-js.js");

// eslint-disable-next-line @typescript-eslint/no-empty-function
function OnmsDateFormatter() {}
OnmsDateFormatter.prototype.init = function init(readyCallback) {
  var self = this;
  var defaultFormat = "yyyy-MM-dd'T'HH:mm:ssxxx"; // eslint-disable-line quotes
  window._onmsZoneId = undefined;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function readystatechange() {
    try {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var config = JSON.parse(xhr.responseText);
          if (config.datetimeformatConfig && config.datetimeformatConfig.datetimeformat) {
            window._onmsDateTimeFormat = config.datetimeformatConfig.datetimeformat || defaultFormat;
            window._onmsZoneId = config.datetimeformatConfig.zoneId;
          } else {
            console.log('Error: datetimeformatConfig property not found:', config);
            window._onmsDateTimeFormat = defaultFormat;
          }
        } else {
          console.log('Error: failed to request format info: ' + xhr.status + ' ' + xhr.statusText);
          window._onmsDateTimeFormat = defaultFormat;
        }
        readyCallback(self, xhr.status);
      }
    } catch (e) {
      console.log('Error: failed to request format info: ', e);
      window._onmsDateTimeFormat = defaultFormat;
      readyCallback(self, xhr.status);
    }
  };
  xhr.open('GET', 'rest/info');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
};
OnmsDateFormatter.prototype.assertInitialized = function assertInitialized() {
  if (!window._onmsDateTimeFormat) {
    console.log('OnmsDateFormatter.init() must complete before using!');
    throw new Error('OnmsDateFormatter.init() must complete before using!');
  }
};
OnmsDateFormatter.prototype.getZoneId = function getZoneId() {
  this.assertInitialized();
  if (!this._zoneId) {
    if (window._onmsZoneId) {
      this._zoneId = window._onmsZoneId;
    } else {
      console.warn('No zone ID specified from the server; guessing based on browser.');
      this._zoneId = moment.tz.guess();
    }
  }
  return this._zoneId;
};
OnmsDateFormatter.prototype.format = function format(date) {
  this.assertInitialized();
  if (date === undefined || date === null) {
    return date;
  }
  var zoneId = this.getZoneId();
  var momentDate = moment.tz(date, zoneId);
  return momentDate.formatJavaDTF(window._onmsDateTimeFormat);
};
(function () {
  'use strict';

  if (typeof jest === 'undefined') {
    var f = new OnmsDateFormatter();
    f.init(function () {
      window._onmsFormatter = f;
    });
  } else {
    console.log('Running in a test environment. Skipping automatic initialization.');
  }
})();
(function () {
  'use strict';

  if (window.angular) {
    var _context;
    angular.module('onmsDateFormatter', ['ng']).factory('DateFormatterService', ['$interval', '$q', function DateFormatterService($interval, $q) {
      console.log('Initializing DateFormatterService');
      var deferred = $q.defer();
      var count = 0;
      var i = $interval(function () {
        if (window._onmsFormatter) {
          console.log('Global formatter found: ' + window._onmsDateTimeFormat);
          deferred.resolve(window._onmsFormatter);
          $interval.cancel(i);
        }
        if (count++ > 300) {
          console.log('DateFormatterService: giving up waiting for global formatter.');
          $interval.cancel(i);
        }
      }, 100);
      return {
        raw: window._onmsFormatter,
        formatter: deferred.promise,
        format: function format(date) {
          return deferred.promise.then(function (f) {
            return f.format(date);
          });
        }
      };
    }]);
    (0, _filter.default)(_context = angular.module('onmsDateFormatter')).call(_context, 'onmsDate', ['$filter', 'DateFormatterService', function ($filter, DateFormatterService) {
      return function onmsDate(input, ifEmpty) {
        var ret;
        if (window._onmsFormatter) {
          // If the formatter has finished initializing, use it
          ret = window._onmsFormatter.format(input);
          //console.log('onmsDate: formatter returned: ' + ret);
        } else {
          // Otherwise, use ISO format
          ret = $filter('date')(input, 'yyyy-MM-ddTHH:mm:ss.sssZ');
          //console.log('onmsDate: $filter(date) returned: ' + ret);
        }

        if (ret !== undefined && ret !== null) {
          return ret;
        }
        return ifEmpty;
      };
    }]);
    angular.module('onmsDateFormatter').directive('onmsDate', ['DateFormatterService', function (dateFormatterService) {
      return {
        restrict: 'E',
        compile: function compile(element) {
          dateFormatterService.format(element.text()).then(function (formatted) {
            element.replaceWith(formatted);
          }).catch(function (e) {
            console.error('Failed to format ' + element.text(), e);
          });
        }
      };
    }]);
  } else {
    console.log('Angular not found.  Not initializing OnmsDateFormatter Angular components.');
  }
})();
module.exports = OnmsDateFormatter;

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

},[["./src/main/assets/js/apps/onms-date-formatter/index.js","vendor"]]]);
});
//# sourceMappingURL=onms-date-formatter.js.map