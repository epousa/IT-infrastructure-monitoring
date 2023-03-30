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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quickaddnode"],{

/***/ "./src/main/assets/js/apps/onms-central-search/index.js":
/*!**************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-central-search/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _bind = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _slice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"));
var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
__webpack_require__(/*! ../../lib/onms-http */ "./src/main/assets/js/lib/onms-http/index.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle */ "./node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.css */ "./node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.css");
__webpack_require__(/*! ../../../../../../node_modules/angular-ui-router/release/ui-router-angularjs */ "./node_modules/angular-ui-router/release/ui-router-angularjs.js");
var quickSearchTemplate = __webpack_require__(/*! ./quicksearch.html */ "./src/main/assets/js/apps/onms-central-search/quicksearch.html");
var globalErrorHandling = function globalErrorHandling(scope, errorResponse) {
  if (errorResponse.data) {
    scope.error = errorResponse.data;
  } else {
    scope.error = "An unexpected error occurred while handling the request";
  }
};
(function () {
  'use strict';

  var MODULE_NAME = 'onms.central.search';
  angular.module(MODULE_NAME, ['angular-loading-bar', 'ngResource', 'ui.router', 'onms.http']).config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }]).directive('onmsCentralSearch', function () {
    return {
      restrict: 'E',
      transclude: false,
      templateUrl: quickSearchTemplate,
      controller: 'QuickSearchController'
    };
  }).factory('SearchResource', ["$resource", function ($resource) {
    return $resource('api/v2/search', {}, {
      'query': {
        method: 'GET',
        isArray: true,
        cancellable: true
      }
    });
  }]).controller('QuickSearchController', ['$scope', 'SearchResource', '$timeout', '$document', function ($scope, SearchResource, $timeout, $document) {
    var KeyCodes = {
      ENTER: 13,
      SHIFT: 16,
      ESC: 27,
      KEY_LEFT: 37,
      KEY_UP: 38,
      KEY_RIGHT: 39,
      KEY_DOWN: 40
    };
    var Types = {
      Group: 'Group',
      Item: 'Item',
      More: 'More'
    };
    $scope.query = '';
    $scope.results = {};
    $scope.performSearchExecuted = false;
    $scope.showLoadingIndicator = false;
    $scope.showLoadingIndicatorDelay = 250;
    $scope.performSearchDelay = 500; // in ms
    $scope.performSearchPromise = undefined;
    $scope.performSearchHandle = undefined;
    $scope.showLoadingIndicatorPromise = undefined;
    $scope.shiftLastPressed = undefined;
    $scope.selectedIndex = 0;
    (0, _bind.default)($document).call($document, 'mousedown', function (event) {
      var isChild = $('#onms-search-form').has(event.target).length > 0;
      var isSelf = $('#onms-search-form').is(event.target);
      var isInside = isChild || isSelf;
      if (!isInside) {
        $timeout(function () {
          $scope.resetQuery();
          $scope.cancelRequest();
        });
      }
    });
    (0, _bind.default)($document).call($document, 'keyup', function (e) {
      // Search Focus Field
      $timeout(function () {
        if (e.keyCode === KeyCodes.SHIFT && new Date() - $scope.shiftLastPressed <= 350) {
          angular.element('#onms-search-query').focus();
          angular.element('#onms-search-query').select();
          $scope.shiftLastPressed = undefined;
        } else if (e.keyCode === KeyCodes.SHIFT) {
          $scope.shiftLastPressed = new Date();
        }

        // Reset Search
        if (e.keyCode === KeyCodes.ESC) {
          $scope.resetQuery();
          $scope.cancelRequest();
        }
      });
    });
    (0, _bind.default)($document).call($document, 'keydown', function (e) {
      $timeout(function () {
        if ($scope.results.length > 0) {
          var element = document.getElementById('onms-search-result-item-' + $scope.selectedIndex);
          if (e.keyCode === KeyCodes.KEY_UP || e.keyCode === KeyCodes.KEY_DOWN) {
            $scope.navigateSearchResult(e.keyCode);

            // Ideally we would use scrollToView(), but that will also scroll the body, which
            // results in the header scrolling down slightly, which looks weird when using the search
            // So instead scrolling is implemented manually
            var parentComponent = document.getElementById('onms-search-result');
            var parentHeight = parentComponent.clientHeight;
            var resultHeight = element.clientHeight;
            var resultOffset = element.offsetTop;
            var padding = 25;

            // Scroll down
            if (resultOffset + resultHeight + padding >= parentHeight + parentComponent.scrollTop) {
              parentComponent.scrollTop = resultOffset;
            }
            // Scroll up
            if (parentComponent.scrollTop !== 0 && parentComponent.scrollTop > resultOffset - resultHeight) {
              parentComponent.scrollTop = resultOffset - resultHeight;
            }
          }
          if (e.keyCode === KeyCodes.ENTER) {
            if ($scope.results[$scope.selectedIndex].type === Types.More) {
              // Ensure next action is run in angular context
              // Do not use angular.$apply here, as it may fail on angular sites,
              // such as the requisition ui
              $timeout(function () {
                angular.element(element).triggerHandler('click');
              }, 0);
            } else {
              $scope.resetQuery();
              $scope.cancelRequest();
              element.click();
            }
          }
        }
      });
    });
    $scope.navigateSearchResult = function (keyCode) {
      $scope.results[$scope.selectedIndex].selected = false;
      switch (keyCode) {
        case KeyCodes.KEY_UP:
          $scope.selectedIndex--;
          break;
        case KeyCodes.KEY_DOWN:
          $scope.selectedIndex++;
          break;
        default:
          break;
      }
      if ($scope.selectedIndex < 1) {
        $scope.selectedIndex = 1;
      }
      if ($scope.selectedIndex >= $scope.results.length) {
        $scope.selectedIndex = $scope.results.length - 1;
      }
      if ($scope.results[$scope.selectedIndex].type === Types.Group) {
        $scope.navigateSearchResult(keyCode); // Skip group element
      } else {
        $scope.results[$scope.selectedIndex].selected = true;
      }
    };
    $scope.resetQuery = function () {
      $scope.query = '';
      $scope.results = [];
      $scope.performSearchExecuted = false;
      if ($scope.performSearchHandle) {
        $scope.performSearchHandle.$cancelRequest();
      }
    };
    $scope.cancelRequest = function () {
      if ($scope.performSearchHandle) {
        $scope.performSearchHandle.$cancelRequest();
      }
      $scope.showLoadingIndicator = false;
      $timeout.cancel($scope.showLoadingIndicatorPromise);
    };

    // Ensure there is no difference between selected and mouseover
    $scope.select = function (index) {
      var selectIndex = index || 1;
      if ($scope.selectedIndex >= 1) {
        $scope.results[$scope.selectedIndex].selected = false;
      }
      $scope.selectedIndex = selectIndex;
      $scope.results[$scope.selectedIndex].selected = true;
    };
    $scope.onQueryChange = function () {
      if ($scope.query.length == 0) {
        $scope.resetQuery();
        return;
      }
      if ($scope.query.length < 3) {
        return;
      }

      // Stop any previous loading
      $timeout.cancel($scope.performSearchPromise);
      $scope.results = [];
      $scope.performSearchExecuted = false;

      // Start timeout before actually searching, this will allow for not invoking when the user
      // is still typing. Fiddle with $scope.loadingDelay to make it resolve faster
      $scope.performSearchPromise = $timeout(function () {
        // Stop any previously started delay
        $timeout.cancel($scope.showLoadingIndicatorPromise);

        // Kick of loading indicator
        $scope.showLoadingIndicatorPromise = $timeout(function () {
          $scope.showLoadingIndicator = true;
        }, $scope.showLoadingIndicatorDelay);

        // Cancel any previous request
        if ($scope.performSearchHandle) {
          $scope.performSearchHandle.$cancelRequest();
        }

        // Kick of the search
        $scope.error = undefined;
        $scope.performSearchHandle = SearchResource.query({
          '_s': $scope.query
        }, function (data) {
          $scope.cancelRequest();
          $scope.performSearchExecuted = true;
          var results = [];
          (0, _forEach.default)(data).call(data, function (eachResult) {
            var _context;
            // Create the header
            results.push({
              context: eachResult.context.name,
              // Make the label have an s at the end if it has multiple items
              label: eachResult.results.length > 1 ? eachResult.context.name + 's' : eachResult.context.name,
              type: Types.Group,
              count: eachResult.results.length,
              more: eachResult.more
            });
            (0, _forEach.default)(_context = eachResult.results).call(_context, function (item) {
              item.type = Types.Item;
              results.push(item);
            });
            if (eachResult.more === true) {
              var showMoreElement = {
                context: eachResult.context.name,
                count: eachResult.results.length,
                type: Types.More,
                loadMore: function loadMore() {
                  $scope.error = undefined;
                  SearchResource.query({
                    '_s': $scope.query,
                    '_l': this.count + 10,
                    '_c': this.context
                  }, function (response) {
                    var _context2, _context3;
                    var endIndex = (0, _indexOf.default)(_context2 = $scope.results).call(_context2, showMoreElement);

                    // The result is context focused, so there is only one search result anyways
                    var searchResult = response[0];
                    var results = (0, _slice.default)(_context3 = searchResult.results).call(_context3, endIndex - 1); // Remove first elements, as they are already being showed
                    (0, _forEach.default)(results).call(results, function (item, i) {
                      var _context4;
                      // Add item
                      item.type = Types.Item;
                      (0, _splice.default)(_context4 = $scope.results).call(_context4, endIndex + i, 0, item);
                      showMoreElement.count++;
                    });
                    // Toggle Selection
                    showMoreElement.selected = false;
                    $scope.results[$scope.selectedIndex].selected = true;

                    // Hide element
                    if (searchResult.more === false) {
                      var _context5, _context6;
                      (0, _splice.default)(_context5 = $scope.results).call(_context5, (0, _indexOf.default)(_context6 = $scope.results).call(_context6, showMoreElement), 1);
                    }
                  }, function (response) {
                    $scope.performSearchExecuted = true;
                    globalErrorHandling($scope, response);
                  });
                },
                selected: false
              };
              results.push(showMoreElement);
            }
          });
          $scope.results = results;
          if ($scope.results.length != 0) {
            $scope.selectedIndex = 1;
            $scope.results[$scope.selectedIndex].selected = true;
          }
        }, function (response) {
          if (response.status >= 0) {
            $scope.performSearchExecuted = true;
            globalErrorHandling($scope, response);
            $scope.cancelRequest();
          } else {
            // Request cancelled
          }
        });
      }, $scope.performSearchDelay);
    };
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-central-search/quicksearch.html":
/*!**********************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-central-search/quicksearch.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n\n<style type=\"text/css\">\n    .search-result {\n        max-height: 700px;\n        min-width: 280px;\n        max-width: 60%;\n        position: absolute;\n        top: 100%;\n        z-index: 100000;\n        overflow: auto;\n        border: #343a40 solid 1px;\n    }\n\n    .search-result .list-group-item {\n        padding: .25rem 0.75rem;\n        font-size: 90%;\n    }\n\n    .search-result .list-group-item:last-child {\n        border-bottom-right-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n\n    .search-bar .form-control {\n        border: none;\n        outline: none;\n        box-shadow: none;\n        border-radius: 1rem;\n        padding: 0px;\n    }\n\n    .search-bar .input-group-text {\n        border-top-left-radius: 1rem;\n        border-bottom-left-radius: 1rem;\n        background-color: #fff;\n        border-color: #fff;\n    }\n\n    .search-result .list-group-item:hover {\n        background-color: #e9ecef;\n    }\n\n    .selected {\n        background-color: #e9ecef;\n    }\n</style>\n\n<form id=\"onms-search-form\" autocomplete=\"off\" novalidate class=\"form-inline\">\n    <!-- Disable auto complete -->\n    <input autocomplete=\"false\" name=\"hidden\" type=\"text\" style=\"display:none;\">\n\n    <!-- Search Input -->\n    <div class=\"input-group search-bar\">\n        <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\"><i class=\"fa fa-search\"></i></div>\n        </div>\n        <label class=\"form-control\">\n            <input id=\"onms-search-query\" ng-change=\"onQueryChange()\" ng-focus=\"input.focus=true\" ng-blur=\"input.focus=false\" ng-model=\"query\" type=\"text\" class=\"form-control\" placeholder=\"Search...\" aria-label=\"Search\">\n            <small class=\"text-muted mr-4 quick-search-chevron\" ng-show=\"!input.focus\">\n                <span></span>\n                <span></span>\n            </small>\n        </label>\n        <!-- Loading Indicator -->\n        <div ng-if=\"showLoadingIndicator\" class=\"btn btn-secondary rounded-0\">\n            <div class=\"spinner-border spinner-border-sm text-white\" role=\"status\"></div>\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n        <!-- Reset Search -->\n        <div ng-if=\"performSearchExecuted === true && !showLoadingIndicator\" class=\"input-group-append\">\n            <button class=\"btn btn-secondary\" type=\"button\" title=\"Reset Search\" ng-click=\"resetQuery()\"><i class=\"fa fa-times\"></i></button>\n        </div>\n        <!-- Cancel -->\n        <div ng-if=\"showLoadingIndicator\" class=\"input-group-append\">\n            <button class=\"btn btn-secondary\" type=\"button\" title=\"Cancel Request\" ng-click=\"cancelRequest()\"><i class=\"fa fa-times\"></i></button>\n        </div>\n    </div>\n\n    <!-- Results -->\n    <div ng-if=\"performSearchExecuted === true\" class=\"bg-dark search-result rounded-bottom\" id=\"onms-search-result\">\n        <div class=\"list-group\" ng-if=\"results.length > 0\">\n            <div id=\"onms-search-result-item-{{$index}}\" ng-repeat-start=\"item in results track by $index\" ng-if=\"item.type === 'Group'\" class=\"list-group-item bg-dark text-grey border-0 pl-2\">\n                <span ng-if=\"!item.t\">{{item.label}}</span>\n            </div>\n            <a id=\"onms-search-result-item-{{$index}}\" ng-class=\"{'selected': item.selected}\" ng-if=\"item.type === 'More'\" ng-click=\"item.loadMore()\" class=\"list-group-item list-group-item-action\" href ng-mouseover=\"select($index)\">more...</a>\n            <a id=\"onms-search-result-item-{{$index}}\" ng-class=\"{'selected': item.selected}\" ng-repeat-end ng-if=\"item.type === 'Item'\" href=\"{{item.url}}\" class=\"list-group-item list-group-item-action\" ng-mouseover=\"select($index)\" ng-click=\"resetQuery()\">\n                <h6 class=\"mb-0\"><i class=\"{{item.icon}}\" ng-if=\"item.icon\">&nbsp;</i>{{item.label}} <i style=\"-webkit-transform: scaleY(-1);transform: scaleY(-1);\" class=\"fa fa-reply pull-right\" ng-if=\"item.selected\"></i></h6>\n                <small class=\"mr-4\" ng-class=\"{'text-muted': !item.selected}\" ng-repeat=\"match in item.matches\">{{match.label}}: {{match.value}}</small>\n                <br ng-if=\"item.info !== ''\">\n                <small class=\"mr-4\" ng-class=\"{'text-muted': !item.selected}\" ng-if=\"item.info !== ''\">{{item.info}}</small>\n            </a>\n        </div>\n\n        <!-- No Result -->\n        <div ng-if=\"!error && results.length === 0\" class=\"text-grey\">\n            <span>No Results found</span>\n        </div>\n        <div ng-if=\"error\" class=\"alert alert-danger mx-2 my-2\">\n            <span>{{error}}</span>\n        </div>\n    </div>\n</form>\n\n</span>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-central-search/quicksearch.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

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

/***/ "./src/main/assets/js/apps/onms-default-apps/index.js":
/*!************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-default-apps/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var search = __webpack_require__(/*! ../search */ "./src/main/assets/js/apps/search/index.js");
var centralSearch = __webpack_require__(/*! ../onms-central-search */ "./src/main/assets/js/apps/onms-central-search/index.js");
var MODULE_NAME = 'onms.default.apps';
angular.module(MODULE_NAME, ['onms.central.search', 'onms-search']);

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Asset.js":
/*!************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Asset.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name AssetController
  * @module onms-requisitions
  *
  * @requires $scope Angular local scope
  * @requires $uibModalInstance Angular UI modal instance
  * @requires RequisitionsService The Requisitions Servive
  * @requires asset Node asset object
  * @requires assetsBlackList The black list of asset fields
  *
  * @description The controller for manage the modal dialog for add/edit asserts of requisitioned nodes
  */.controller('AssetController', ['$scope', '$uibModalInstance', 'RequisitionsService', 'asset', 'assetsBlackList', function ($scope, $uibModalInstance, RequisitionsService, asset, assetsBlackList) {
    /**
    * @description The asset object
    *
    * @ngdoc property
    * @name AssetController#asset
    * @propertyOf AssetController
    * @returns {object} The asset object
    */
    $scope.asset = asset;

    /**
    * @description The available asset fields
    *
    * @ngdoc property
    * @name AssetController#$scope.assetFields
    * @propertyOf AssetController
    * @returns {array} List of valid asset fields
    */
    $scope.assetFields = [];

    /**
    * @description The black list of asset fields. 
    *
    * @ngdoc property
    * @name AssetController#assetsBlackList
    * @propertyOf AssetController
    * @returns {array} The black list of asset fields.
    */
    $scope.assetsBlackList = assetsBlackList;

    /**
    * @description Saves the current asset
    *
    * @name AssetController:save
    * @ngdoc method
    * @methodOf AssetController
    */
    $scope.save = function () {
      $uibModalInstance.close($scope.asset);
    };

    /**
    * @description Cancels current operation
    *
    * @name AssetController:cancel
    * @ngdoc method
    * @methodOf AssetController
    */
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    /**
    * @description Get the unused available assets
    *
    * @name AssetController:getAvailableAssetFields
    * @ngdoc method
    * @methodOf AssetController
    * @returns {array} the unused available assets
    */
    $scope.getAvailableAssetFields = function () {
      var assets = [];
      (0, _forEach.default)(angular).call(angular, $scope.assetFields, function (asset) {
        var _context;
        if ((0, _indexOf.default)(_context = $scope.assetsBlackList).call(_context, asset) === -1) {
          assets.push(asset);
        }
      });
      return assets;
    };

    // Initialization

    RequisitionsService.getAvailableAssets().then(function (assets) {
      $scope.assetFields = assets;
    });
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/CloneForeignSource.js":
/*!*************************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/CloneForeignSource.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name CloneForeignSourceController
  * @module onms-requisitions
  *
  * @requires $scope Angular local scope
  * @requires $uibModalInstance Angular UI modal instance
  * @requires foreignSource The requisition's name (a.k.a. foreign source)
  * @requires availableForeignSources The availeble requisitions (a.k.a. foreign sources)
  *
  * @description The controller for manage the modal dialog for clone the foreign source definition of a given requisition.
  */.controller('CloneForeignSourceController', ['$scope', '$uibModalInstance', 'foreignSource', 'availableForeignSources', function ($scope, $uibModalInstance, foreignSource, availableForeignSources) {
    /**
    * @description The foreign source (a.k.a the name of the requisition).
    *
    * @ngdoc property
    * @name CloneForeignSourceController#foreignSource
    * @propertyOf CloneForeignSourceController
    * @returns {string} The foreign source
    */
    $scope.foreignSource = foreignSource;

    /**
    * @description The target foreign source (a.k.a the name of the requisition).
    *
    * @ngdoc property
    * @name CloneForeignSourceController#targetForeignSource
    * @propertyOf CloneForeignSourceController
    * @returns {string} The target foreign source
    */
    $scope.targetForeignSource = null;

    /**
    * @description The available foreign sources
    *
    * @ngdoc property
    * @name CloneForeignSourceController#$scope.availableForeignSources
    * @propertyOf CloneForeignSourceController
    * @returns {array} List of available foreign sources
    */
    $scope.availableForeignSources = availableForeignSources;

    /**
    * @description Saves the current asset
    *
    * @name AssetController:save
    * @ngdoc method
    * @methodOf AssetController
    */
    $scope.save = function () {
      $uibModalInstance.close($scope.targetForeignSource);
    };

    /**
    * @description Cancels current operation
    *
    * @name AssetController:cancel
    * @ngdoc method
    * @methodOf AssetController
    */
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Detector.js":
/*!***************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Detector.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name DetectorController
  * @module onms-requisitions
  *
  * @requires $scope Angular local scope
  * @requires $uibModalInstance Angular UI modal instance
  * @requires RequisitionsService The Requisitions Servive
  * @requires detector Requisition detector object
  *
  * @description The controller for manage the modal dialog for add/edit requisition detectors
  */.controller('DetectorController', ['$scope', '$uibModalInstance', 'RequisitionsService', 'detector', function ($scope, $uibModalInstance, RequisitionsService, detector) {
    /**
    * @description The detector object
    *
    * @ngdoc property
    * @name DetectorController#detector
    * @propertyOf DetectorController
    * @returns {object} The detector object
    */
    $scope.detector = detector;

    /**
    * @description The available detectors object
    *
    * @ngdoc property
    * @name DetectorController#availableDetectors
    * @propertyOf DetectorController
    * @returns {array} The detectors list
    */
    $scope.availableDetectors = [];

    /**
    * @description The available parameters/attributes for the selected detector
    *
    * @ngdoc property
    * @name DetectorController#availableParameters
    * @propertyOf DetectorController
    * @returns {array} The parameters list
    */
    $scope.availableParameters = [];

    /**
    * @description Gets the available parameters not being used by the detector
    *
    * @name DetectorController:getAvailableParameters
    * @ngdoc method
    * @methodOf DetectorController
    */
    $scope.getAvailableParameters = function () {
      var params = [];
      (0, _forEach.default)(angular).call(angular, $scope.availableParameters, function (availParam) {
        var found = false;
        (0, _forEach.default)(angular).call(angular, $scope.detector.parameter, function (param) {
          if (param.key === availParam.key) {
            found = true;
          }
        });
        if (!found) {
          params.push(availParam);
        }
      });
      return params;
    };

    /**
    * @description Saves the current detector
    *
    * @name DetectorController:save
    * @ngdoc method
    * @methodOf DetectorController
    */
    $scope.save = function () {
      $uibModalInstance.close($scope.detector);
    };

    /**
    * @description Cancels the current operation
    *
    * @name DetectorController:cancel
    * @ngdoc method
    * @methodOf DetectorController
    */
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    /**
    * @description Adds a new empty parameter to the current detector
    *
    * @name DetectorController:addParameter
    * @ngdoc method
    * @methodOf DetectorController
    */
    $scope.addParameter = function () {
      $scope.detector.parameter.push({
        'key': '',
        'value': ''
      });
    };

    /**
    * @description Removes a parameter from the current detector
    *
    * @name DetectorController:removeParameter
    * @ngdoc method
    * @methodOf DetectorController
    * @param {integer} index The index of the parameter to remove
    */
    $scope.removeParameter = function (index) {
      var _context;
      (0, _splice.default)(_context = $scope.detector.parameter).call(_context, index, 1);
    };

    /**
    * @description Update available detector parameters after changing the detector class.
    *
    * @name DetectorController:updateAvailableParameters
    * @ngdoc method
    * @methodOf DetectorController
    * @param {object} policyConfig the configuration of the selected policy
    */
    $scope.updateAvailableParameters = function (selectedDetector) {
      if (!selectedDetector) {
        return;
      }
      $scope.detector.parameter = [];
      (0, _forEach.default)(angular).call(angular, $scope.availableDetectors, function (detector) {
        if (detector.class === selectedDetector.class) {
          $scope.availableParameters = detector.parameters;
        }
      });
    };

    // Initialization

    RequisitionsService.getAvailableDetectors().then(function (detectors) {
      $scope.availableDetectors = detectors;
      if ($scope.detector.class) {
        (0, _forEach.default)(angular).call(angular, detectors, function (detector) {
          if (detector.class === $scope.detector.class) {
            $scope.availableParameters = detector.parameters;
            var orderedParams = [];
            for (var i = 0; i < detector.parameters.length; i++) {
              var pkey = detector.parameters[i].key;
              for (var j = 0; j < $scope.detector.parameter.length; j++) {
                var p = $scope.detector.parameter[j];
                if (p.key === pkey) {
                  orderedParams.push(p);
                }
              }
            }
            $scope.detector.parameter = orderedParams;
          }
        });
      }
    });
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/ForeignSource.js":
/*!********************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/ForeignSource.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var bootbox = __webpack_require__(/*! ../../../../../../../../../node_modules/bootbox/bootbox */ "./node_modules/bootbox/bootbox.js-exposed");
__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  var policyView = __webpack_require__(/*! ../../views/policy.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/policy.html");
  var moveView = __webpack_require__(/*! ../../views/move.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/move.html");
  var detectorView = __webpack_require__(/*! ../../views/detector.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/detector.html");
  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name ForeignSourceController
  * @module onms-requisitions
  *
  * @requires $scope Angular local scope
  * @requires $routeParams Angular route parameters
  * @requires $window Document window
  * @requires $uibModal Angular UI modal
  * @required filterFilter the Angular filter
  * @required Configuration The configuration object
  * @requires RequisitionsService The requisitions service
  * @requires growl The growl plugin for instant notifications
  *
  * @description The controller for manage foreign source definitions (i.e. policies and detectors)
  */.controller('ForeignSourceController', ['$scope', '$routeParams', '$window', '$uibModal', 'filterFilter', 'Configuration', 'RequisitionsService', 'growl', function ($scope, $routeParams, $window, $uibModal, filterFilter, Configuration, RequisitionsService, growl) {
    /**
    * @description The timing status.
    *
    * @ngdoc property
    * @name ForeignSourceController#timingStatus
    * @propertyOf ForeignSourceController
    * @returns {object} The timing status object
    */
    $scope.timingStatus = RequisitionsService.getTiming();

    /**
    * @description The foreign source (a.k.a the name of the requisition).
    * The default value is obtained from the $routeParams.
    *
    * @ngdoc property
    * @name ForeignSourceController#foreignSource
    * @propertyOf ForeignSourceController
    * @returns {string} The foreign source
    */
    $scope.foreignSource = $routeParams.foreignSource;

    /**
    * @description The foreign source definition object
    *
    * @ngdoc property
    * @name ForeignSourceController#foreignSourceDef
    * @propertyOf ForeignSourceController
    * @returns {object} The foreign source definition
    */
    $scope.foreignSourceDef = {
      detectors: [],
      policies: []
    };

    /**
    * @description The filteres object (used to track the content of the search fields)
    *
    * @ngdoc property
    * @name ForeignSourceController#filters
    * @propertyOf ForeignSourceController
    * @returns {object} The filteres object
    */
    $scope.filters = {
      detector: null,
      policy: null
    };

    /**
    * @description The filtered list of detectors
    *
    * @ngdoc property
    * @name ForeignSourceController#filteredDetectors
    * @propertyOf ForeignSourceController
    * @returns {array} The filtered array
    */
    $scope.filteredDetectors = [];

    /**
    * @description The amount of detectors per page for pagination (defaults to 10)
    *
    * @ngdoc property
    * @name ForeignSourceController#detectorsPageSize
    * @propertyOf ForeignSourceController
    * @returns {integer} The page size
    */
    $scope.detectorsPageSize = 10;

    /**
    * @description The maximum size of detector pages for pagination (defaults to 5)
    *
    * @ngdoc property
    * @name ForeignSourceController#detectorsMaxSize
    * @propertyOf ForeignSourceController
    * @returns {integer} The maximum size
    */
    $scope.detectorsMaxSize = 5;

    /**
    * @description The total amount of detectors for pagination (defaults to 0)
    *
    * @ngdoc property
    * @name ForeignSourceController#detectorsTotalItems
    * @propertyOf ForeignSourceController
    * @returns {integer} The total detectors
    */
    $scope.detectorsTotalItems = 0;

    /**
    * @description The filtered list of policies
    *
    * @ngdoc property
    * @name ForeignSourceController#filteredPolicies
    * @propertyOf ForeignSourceController
    * @returns {array} The filtered array
    */
    $scope.filteredPolicies = [];

    /**
    * @description The amount of policies per page for pagination (defaults to 10)
    *
    * @ngdoc property
    * @name ForeignSourceController#policiesPageSize
    * @propertyOf ForeignSourceController
    * @returns {integer} The page size
    */
    $scope.policiesPageSize = 10;

    /**
    * @description The maximum size of policies pages for pagination (defaults to 5)
    *
    * @ngdoc property
    * @name ForeignSourceController#policiesMaxSize
    * @propertyOf ForeignSourceController
    * @returns {integer} The maximum size
    */
    $scope.policiesMaxSize = 5;

    /**
    * @description The total amount of policies for pagination (defaults to 0)
    *
    * @ngdoc property
    * @name ForeignSourceController#policiesTotalItems
    * @propertyOf ForeignSourceController
    * @returns {integer} The total policies
    */
    $scope.policiesTotalItems = 0;

    /**
    * @description Goes to specific URL warning about changes if exist.
    *
    * @name ForeignSourceController:goTo
    * @ngdoc method
    * @methodOf ForeignSourceController
    * @param {object} handler The goto handler
    */
    $scope.goTo = function (handler) {
      if (this.fsForm.$dirty) {
        bootbox.dialog({
          message: 'There are changes on the current requisition. Are you sure you want to cancel ?',
          title: 'Cancel Changes',
          buttons: {
            success: {
              label: 'Yes',
              className: 'btn-primary',
              callback: handler
            },
            main: {
              label: 'No',
              className: 'btn-secondary'
            }
          }
        });
      } else {
        handler();
      }
    };

    /**
    * @description Goes back to requisitions list (navigation)
    *
    * @name ForeignSourceController:goTop
    * @ngdoc method
    * @methodOf ForeignSourceController
    */
    $scope.goTop = function () {
      var doGoTop = function doGoTop() {
        $window.location.href = Configuration.baseHref + '#/requisitions';
      };
      $scope.goTo(doGoTop);
    };

    /**
    * @description Goes back to requisition editor (navigation)
    *
    * @name ForeignSourceController:goBack
    * @ngdoc method
    * @methodOf ForeignSourceController
    */
    $scope.goBack = function () {
      var doGoBack = function doGoBack() {
        if ($scope.foreignSource === 'default') {
          $window.location.href = Configuration.baseHref + '#/requisitions';
        } else {
          $window.location.href = Configuration.baseHref + '#/requisitions/' + encodeURIComponent($scope.foreignSource);
        }
      };
      $scope.goTo(doGoBack);
    };

    /**
    * @description Shows an error to the user
    *
    * @name ForeignSourceController:errorHandler
    * @ngdoc method
    * @methodOf ForeignSourceController
    * @param {string} message The error message
    */
    $scope.errorHandler = function (message) {
      growl.error(message, {
        ttl: 10000
      });
    };

    /**
    * @description Returns the index of a policy
    *
    * @name ForeignSourceController:indexOfPolicy
    * @ngdoc method
    * @methodOf ForeignSourceController
    * @param {object} policy The policy object
    */
    $scope.indexOfPolicy = function (policy) {
      for (var i = 0; i < $scope.foreignSourceDef.policies.length; i++) {
        if ($scope.foreignSourceDef.policies[i].name === policy.name) {
          return i;
        }
      }
      return -1;
    };

    /**
    * @description Returns the index of a detector
    *
    * @name ForeignSourceController:indexOfDetector
    * @ngdoc method
    * @methodOf ForeignSourceController
    * @param {object} policy The detector object
    */
    $scope.indexOfDetector = function (detector) {
      for (var i = 0; i < $scope.foreignSourceDef.detectors.length; i++) {
        if ($scope.foreignSourceDef.detectors[i].name === detector.name) {
          return i;
        }
      }
      return -1;
    };

    /**
    * @description Opens the modal window to add/edit a policy
    *
    * @name ForeignSourceController:editPolicy
    * @ngdoc method
    * @methodOf ForeignSourceController
    * @param {object} policy The policy object to edit
    * @param {boolean} isNew true, if the policy is new
    */
    $scope.editPolicy = function (_policy, isNew) {
      var form = this.fsForm;
      $uibModal.open({
        backdrop: 'static',
        keyboard: false,
        controller: 'PolicyController',
        templateUrl: policyView,
        resolve: {
          policy: function policy() {
            return angular.copy(_policy);
          }
        }
      }).result.then(function (result) {
        angular.copy(result, _policy);
        form.$dirty = true;
      }, function () {
        if (isNew) {
          $scope.foreignSourceDef.policies.pop();
        }
      });
    };

    /**
    * @description Opens the modal window to move a policy
    *
    * @name ForeignSourceController:moveDetector
    * @ngdoc method
    * @methodOf ForeignSourceController
    * @param {object} policy The policy object to move
    */
    $scope.movePolicy = function (policy) {
      var form = this.fsForm;
      var pos = $scope.indexOfPolicy(policy);
      var max = $scope.foreignSourceDef.policies.length - 1;
      $uibModal.open({
        backdrop: 'static',
        keyboard: false,
        size: 'sm',
        controller: 'MoveController',
        templateUrl: moveView,
        resolve: {
          label: function label() {
            return policy.name;
          },
          position: function position() {
            return pos;
          },
          maximum: function maximum() {
            return max;
          }
        }
      }).result.then(function (dst) {
        var _context, _context2;
        form.$dirty = true;
        (0, _splice.default)(_context = $scope.foreignSourceDef.policies).call(_context, pos, 1);
        (0, _splice.default)(_context2 = $scope.foreignSourceDef.policies).call(_context2, dst, 0, policy);
      });
    };

    /**
    * @description Removes a policy
    *
    * @name ForeignSourceController:removePolicy
    * @ngdoc method
    * @methodOf ForeignSourceController
    * @param {object} policy The policy object to remove
    */
    $scope.removePolicy = function (policy) {
      var index = $scope.indexOfPolicy(policy);
      if (index > -1) {
        var _context3;
        (0, _splice.default)(_context3 = $scope.foreignSourceDef.policies).call(_context3, index, 1);
        this.fsForm.$dirty = true;
      }
    };

    /**
    * @description Adds a new policy
    *
    * @name ForeignSourceController:addPolicy
    * @ngdoc method
    * @methodOf ForeignSourceController
    */
    $scope.addPolicy = function () {
      $scope.foreignSourceDef.policies.push({
        'name': '',
        'class': '',
        'parameter': []
      });
      var index = $scope.foreignSourceDef.policies.length - 1;
      $scope.editPolicy($scope.foreignSourceDef.policies[index], true);
    };

    /**
    * @description Opens the modal window to add/edit a detector
    *
    * @name ForeignSourceController:editDetector
    * @ngdoc method
    * @methodOf ForeignSourceController
    * @param {object} detector The detector object to edit
    * @param {boolean} isNew true, if the detector is new
    */
    $scope.editDetector = function (_detector, isNew) {
      var form = this.fsForm;
      $uibModal.open({
        backdrop: 'static',
        keyboard: false,
        controller: 'DetectorController',
        templateUrl: detectorView,
        resolve: {
          detector: function detector() {
            return angular.copy(_detector);
          }
        }
      }).result.then(function (result) {
        angular.copy(result, _detector);
        form.$dirty = true;
      }, function () {
        if (isNew) {
          $scope.foreignSourceDef.detectors.pop();
        }
      });
    };

    /**
    * @description Opens the modal window to move a detector
    *
    * @name ForeignSourceController:moveDetector
    * @ngdoc method
    * @methodOf ForeignSourceController
    * @param {object} detector The detector object to move
    */
    $scope.moveDetector = function (detector) {
      var form = this.fsForm;
      var pos = $scope.indexOfDetector(detector);
      var max = $scope.foreignSourceDef.detectors.length - 1;
      $uibModal.open({
        backdrop: 'static',
        keyboard: false,
        size: 'sm',
        controller: 'MoveController',
        templateUrl: moveView,
        resolve: {
          label: function label() {
            return detector.name;
          },
          position: function position() {
            return pos;
          },
          maximum: function maximum() {
            return max;
          }
        }
      }).result.then(function (dst) {
        var _context4, _context5;
        form.$dirty = true;
        (0, _splice.default)(_context4 = $scope.foreignSourceDef.detectors).call(_context4, pos, 1);
        (0, _splice.default)(_context5 = $scope.foreignSourceDef.detectors).call(_context5, dst, 0, detector);
      });
    };

    /**
    * @description Removes a detector
    *
    * @name ForeignSourceController:removeDetector
    * @ngdoc method
    * @methodOf ForeignSourceController
    * @param {object} detector The detector object to remove
    */
    $scope.removeDetector = function (detector) {
      var index = $scope.indexOfDetector(detector);
      if (index > -1) {
        var _context6;
        (0, _splice.default)(_context6 = $scope.foreignSourceDef.detectors).call(_context6, index, 1);
        this.fsForm.$dirty = true;
      }
    };

    /**
    * @description Adds a new detector
    *
    * @name ForeignSourceController:addDetector
    * @ngdoc method
    * @methodOf ForeignSourceController
    */
    $scope.addDetector = function () {
      $scope.foreignSourceDef.detectors.push({
        'name': '',
        'class': '',
        'parameter': []
      });
      var index = $scope.foreignSourceDef.detectors.length - 1;
      $scope.editDetector($scope.foreignSourceDef.detectors[index], true);
    };

    /**
    * @description Saves the local foreign source on the server
    *
    * @name ForeignSourceController:save
    * @ngdoc method
    * @methodOf ForeignSourceController
    */
    $scope.save = function () {
      var form = this.fsForm;
      RequisitionsService.startTiming();
      RequisitionsService.saveForeignSourceDefinition($scope.foreignSourceDef).then(function () {
        // success
        growl.success('The definition for the requisition ' + _.escape($scope.foreignSource) + ' has been saved.');
        form.$dirty = false;
      }, $scope.errorHandler);
    };

    /**
    * @description Resets to the default set of detectors and policies
    *
    * @name ForeignSourceController:reset
    * @ngdoc method
    * @methodOf ForeignSourceController
    */
    $scope.reset = function () {
      bootbox.confirm('Are you sure you want to reset the foreign source definition to the default ?', function (ok) {
        if (ok) {
          RequisitionsService.startTiming();
          RequisitionsService.deleteForeignSourceDefinition($scope.foreignSource).then(function () {
            // success
            growl.success('The foreign source definition for ' + _.escape($scope.foreignSource) + 'has been reseted.');
            $scope.initialize();
          }, $scope.errorHandler);
        }
      });
    };

    /**
    * @description Updates the pagination variables for the policies.
    *
    * @name ForeignSourceController:updateFilteredPolicies
    * @ngdoc method
    * @methodOf ForeignSourceController
    */
    $scope.updateFilteredPolicies = function () {
      $scope.policiesCurrentPage = 1;
      $scope.policiesTotalItems = $scope.filteredPolicies.length;
      $scope.policiesNumPages = Math.ceil($scope.policiesTotalItems / $scope.policiesPageSize);
    };

    /**
    * @description Updates the pagination variables for the detectors.
    *
    * @name ForeignSourceController:updateFilteredDetectors
    * @ngdoc method
    * @methodOf ForeignSourceController
    */
    $scope.updateFilteredDetectors = function () {
      $scope.detectorsCurrentPage = 1;
      $scope.detectorsTotalItems = $scope.filteredDetectors.length;
      $scope.detectorsNumPages = Math.ceil($scope.detectorsTotalItems / $scope.detectorsPageSize);
    };

    /**
    * @description Initialized the local foreign source definition from the server
    *
    * @name ForeignSourceController:initialize
    * @ngdoc method
    * @methodOf ForeignSourceController
    */
    $scope.initialize = function () {
      growl.success('Retrieving definition for requisition ' + _.escape($scope.foreignSource) + '...');
      RequisitionsService.getForeignSourceDefinition($scope.foreignSource).then(function (foreignSourceDef) {
        // success
        $scope.foreignSourceDef = foreignSourceDef;
        // Updating pagination variables for detectors.
        $scope.filteredDetectors = $scope.foreignSourceDef.detectors;
        $scope.updateFilteredDetectors();
        // Updating pagination variables for policies.
        $scope.filteredPolicies = $scope.foreignSourceDef.policies;
        $scope.updateFilteredPolicies();
      }, $scope.errorHandler);
    };

    /**
    * @description Watch for filter changes in order to update the detector list and updates the pagination control
    *
    * @name ForeignSourceController:detectorFilter
    * @ngdoc event
    * @methodOf ForeignSourceController
    */
    $scope.$watch('filters.detector', function () {
      $scope.filteredDetectors = filterFilter($scope.foreignSourceDef.detectors, $scope.filters.detector);
      $scope.updateFilteredDetectors();
    });

    /**
    * @description Watch for filter changes in order to update the policy list and updates the pagination control
    *
    * @name ForeignSourceController:policyFilter
    * @ngdoc event
    * @methodOf ForeignSourceController
    */
    $scope.$watch('filters.policy', function () {
      $scope.filteredPolicies = filterFilter($scope.foreignSourceDef.policies, $scope.filters.policy);
      $scope.updateFilteredPolicies();
    });

    // Initialization

    if ($scope.foreignSource) {
      $scope.initialize();
    }
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Interface.js":
/*!****************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Interface.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");
var RequisitionService = __webpack_require__(/*! ../model/RequisitionService */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionService.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name InterfaceController
  * @module onms-requisitions
  *
  * @requires $scope Angular local scope
  * @requires $uibModalInstance Angular UI modal instance
  * @requires RequisitionsService The Requisitions Servive
  * @requires foreignSource The requisition's name (a.k.a. foreign source)
  * @requires foreignId The foreign ID of the container node
  * @requires requisitionInterface The requisition interface object
  * @requires ipBlackList The black list of IP Addresses.
  *
  * @description The controller for manage the modal dialog for add/edit IP interfaces of requisitioned nodes
  */.controller('InterfaceController', ['$scope', '$uibModalInstance', 'RequisitionsService', 'foreignSource', 'foreignId', 'requisitionInterface', 'ipBlackList', 'primaryInterface', function ($scope, $uibModalInstance, RequisitionsService, foreignSource, foreignId, requisitionInterface, ipBlackList, primaryInterface) {
    /**
    * @description The foreign source (a.k.a the name of the requisition).
    *
    * @ngdoc property
    * @name InterfaceController#foreignSource
    * @propertyOf InterfaceController
    * @returns {object} The foreign source
    */
    $scope.foreignSource = foreignSource;

    /**
    * @description The foreign ID of the source container node
    *
    * @ngdoc property
    * @name InterfaceController#foreignId
    * @propertyOf InterfaceController
    * @returns {object} The foreign ID
    */
    $scope.foreignId = foreignId;

    /**
    * @description The interface object
    *
    * @ngdoc property
    * @name InterfaceController#requisitionInterface
    * @propertyOf InterfaceController
    * @returns {object} The interface object
    */
    $scope.requisitionInterface = requisitionInterface;

    /**
    * @description The black list of IP addresses. The IP defined on requisitionInterface should be contained on this black list.
    *
    * @ngdoc property
    * @name InterfaceController#ipBlackList
    * @propertyOf InterfaceController
    * @returns {array} The black list of IP addresses.
    */
    $scope.ipBlackList = ipBlackList;
    $scope.primaryInterface = primaryInterface;

    /**
    * @description An array map with the valid values for snmp-primary
    *
    * @ngdoc property
    * @name InterfaceController#snmpPrimaryFields
    * @propertyOf InterfaceController
    * @returns {object} The snmp primary fields object
    */
    $scope.snmpPrimaryFields = [{
      id: 'P',
      title: 'Primary'
    }, {
      id: 'S',
      title: 'Secondary'
    }, {
      id: 'N',
      title: 'Not Eligible'
    }];

    /**
    * @description The available asset fields
    *
    * @ngdoc property
    * @name InterfaceController#availableServices
    * @propertyOf InterfaceController
    * @returns {array} List of available services
    */
    $scope.availableServices = [];

    /**
    * @description Saves the current interface
    *
    * @name InterfaceController:save
    * @ngdoc method
    * @methodOf InterfaceController
    */
    $scope.save = function () {
      $uibModalInstance.close($scope.requisitionInterface);
    };
    $scope.getSnmpPrimaryValues = function (ipAddress) {
      var isPrimaryExists = $scope.primaryInterface !== null ? true : false;
      if (isPrimaryExists && ipAddress !== $scope.primaryInterface) {
        var _context;
        var snmpPrimary = (0, _filter.default)(_context = $scope.snmpPrimaryFields).call(_context, function (field) {
          return field.id !== 'P';
        });
        return snmpPrimary;
      }
      return $scope.snmpPrimaryFields;
    };

    /**
    * @description Cancels the current operation
    *
    * @name InterfaceController:cancel
    * @ngdoc method
    * @methodOf InterfaceController
    */
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    /**
    * @description Adds a new empty service
    *
    * @name InterfaceController:addService
    * @ngdoc method
    * @methodOf InterfaceController
    */
    $scope.addService = function () {
      $scope.requisitionInterface.services.push(new RequisitionService({
        'service-name': ''
      }));
    };

    /**
    * @description Removes a service
    *
    * @name InterfaceController:removeService
    * @ngdoc method
    * @methodOf InterfaceController
    * @param {integer} index The index of the service to remove
    */
    $scope.removeService = function (index) {
      var _context2;
      (0, _splice.default)(_context2 = $scope.requisitionInterface.services).call(_context2, index, 1);
    };

    /**
    * @description Get the unused available services
    *
    * @name InterfaceController:getAvailableServices
    * @ngdoc method
    * @methodOf InterfaceController
    * @returns {array} the unused available services
    */
    $scope.getAvailableServices = function () {
      var services = [];
      (0, _forEach.default)(angular).call(angular, $scope.availableServices, function (avail) {
        var found = false;
        (0, _forEach.default)(angular).call(angular, $scope.requisitionInterface.services, function (svc) {
          if (svc.name === avail) {
            found = true;
          }
        });
        if (!found) {
          services.push(avail);
        }
      });
      return services;
    };

    // Initialization

    RequisitionsService.getAvailableServices($scope.foreignSource).then(function (services) {
      $scope.availableServices = services;
    });
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/MetaData.js":
/*!***************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/MetaData.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _findIndex = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");
var RequisitionMetaDataEntry = __webpack_require__(/*! ../model/RequisitionMetaDataEntry */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionMetaDataEntry.js");
var MetaDataConstants = __webpack_require__(/*! ../model/MetaDataConstants */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/MetaDataConstants.js");
var Scope = MetaDataConstants.Scope;
var _ = __webpack_require__(/*! ../../../../../../../../../node_modules/lodash/lodash */ "./node_modules/lodash/lodash.js");
(function () {
  'use strict';

  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name MetaDataController
  * @module onms-requisitions
  *
  * @requires $scope Angular local scope
  * @requires $uibModalInstance Angular UI modal instance
  * @requires node related node object
  * @requires entry related meta-data entry object
  *
  * @description The controller for manage the modal dialog for add/edit meta-data entries of requisitioned nodes
  */.controller('MetaDataController', ['$scope', '$uibModalInstance', 'node', 'entry', function ($scope, $uibModalInstance, node, entry) {
    $scope.node = node;
    $scope.entry = entry;

    /**
     * Lookup the scoped entities based on the index of the selected elements.
     *
     * @param entry meta-data entry on which to resolve the scoped references
     */
    $scope.resolveScopeReferences = function (entry) {
      if (entry.scope === Scope.INTERFACE) {
        entry.scoped_interface = $scope.node.interfaces[entry.interface_idx];
      } else if (entry.scope === Scope.SERVICE) {
        entry.scoped_interface = $scope.interfacesWithServices[entry.interface_idx];
        entry.scoped_service = entry.scoped_interface.services[entry.service_idx];
      }
    };
    $scope.save = function () {
      $scope.resolveScopeReferences($scope.entry);
      $uibModalInstance.close($scope.entry);
    };
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    $scope.getValueRowCount = function (entry) {
      var _context;
      // Expand size of value textarea to up to 3 rows if user enters 3+ lines
      if (!entry.value || (0, _indexOf.default)(_context = entry.value).call(_context, '\n') < 0) {
        return 1;
      }
      var lineBreaks = (entry.value.match(/\n/g) || []).length;
      return Math.min(lineBreaks + 1, 3);
    };

    // Initialization
    $scope.interfacesWithServices = [];
    $scope.availableScopes = {};
    $scope.availableScopes[Scope.NODE] = 'Node';
    if ($scope.node.interfaces && $scope.node.interfaces.length > 0) {
      // There are 1+ interfaces available, so we can set interface level meta-data on these
      $scope.availableScopes[Scope.INTERFACE] = 'Interface';

      // Now filter out the interfaces that have services
      (0, _forEach.default)(_).call(_, $scope.node.interfaces, function (iff) {
        if (iff.services && iff.services.length > 0) {
          $scope.interfacesWithServices.push(iff);
        }
      });
      if ($scope.interfacesWithServices.length > 0) {
        // There are 1+ interfaces with services available, so we can set service level meta-data on these
        $scope.availableScopes[Scope.SERVICE] = 'Service';
      }
    }
    $scope.entry.interface_idx = 0;
    $scope.entry.service_idx = 0;
    if ($scope.entry.scope === Scope.INTERFACE && $scope.entry.scoped_interface) {
      // Find the index of the associated interface
      $scope.entry.interface_idx = (0, _findIndex.default)(_).call(_, $scope.node.interfaces, function (intf) {
        return intf.ipAddress === $scope.entry.scoped_interface.ipAddress;
      });
      if ($scope.entry.interface_idx < 0) {
        // The referenced interface no longer exists
        $scope.entry.interface_idx = 0;
      }
    } else if ($scope.entry.scope === Scope.SERVICE && $scope.entry.scoped_service && $scope.interfacesWithServices.length > 0) {
      // Find the index of the associated interface
      $scope.entry.interface_idx = (0, _findIndex.default)(_).call(_, $scope.interfacesWithServices, function (intf) {
        return intf.ipAddress === $scope.entry.scoped_interface.ipAddress;
      });
      if ($scope.entry.interface_idx < 0) {
        // The referenced interface no longer exists
        $scope.entry.interface_idx = 0;
      }
      // Find the index of the associated service
      $scope.entry.service_idx = (0, _findIndex.default)(_).call(_, $scope.interfacesWithServices[$scope.entry.interface_idx].services, function (svc) {
        return svc.name === $scope.entry.scoped_service.name;
      });
      if ($scope.entry.service_idx < 0) {
        // The referenced service no longer exists
        $scope.entry.service_idx = 0;
      }
    }

    // Cast the indices to strings so that the proper option is automatically selected in the select boxes
    $scope.entry.interface_idx = String($scope.entry.interface_idx);
    $scope.entry.service_idx = String($scope.entry.service_idx);

    // Save the original key so that we can perform proper uniqueness validation
    $scope.originalKey = $scope.entry.key;
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Move.js":
/*!***********************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Move.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name MoveController
  * @module onms-requisitions
  *
  * @requires $controller Angular controller
  * @requires $scope Angular local scope
  * @requires $uibModalInstance Angular UI modal instance
  * @requires label The label to show in front of the input field
  * @requires position The current value of the position
  * @requires maximum The maximum value allowed
  *
  * @description The controller for manage the modal dialog for move a table row
  */.controller('MoveController', ['$controller', '$scope', '$uibModalInstance', 'label', 'position', 'maximum', function ($controller, $scope, $uibModalInstance, label, position, maximum) {
    /**
    * @description The label for the input field.
    *
    * @ngdoc property
    * @name MoveController#label
    * @propertyOf MoveController
    * @returns {string} The label
    */
    $scope.label = label;

    /**
    * @description The current position.
    *
    * @ngdoc property
    * @name MoveController#position
    * @propertyOf MoveController
    * @returns {integer} The position value
    */
    $scope.position = position;

    /**
    * @description The maximum value allowed for the position.
    *
    * @ngdoc property
    * @name MoveController#maximum
    * @propertyOf MoveController
    * @returns {integer} The maximum value
    */
    $scope.maximum = maximum;

    /**
    * @description Adds 1 from position
    *
    * @name MoveController:add
    * @ngdoc method
    * @methodOf MoveController
    */
    $scope.add = function () {
      $scope.position++;
    };

    /**
    * @description Substracts 1 from position
    *
    * @name MoveController:substract
    * @ngdoc method
    * @methodOf MoveController
    */
    $scope.substract = function () {
      $scope.position--;
    };

    /**
    * @description Closes the modal operation
    *
    * @name MoveController:move
    * @ngdoc method
    * @methodOf MoveController
    */
    $scope.move = function () {
      $uibModalInstance.close($scope.position);
    };

    /**
    * @description Cancels current modal operation
    *
    * @name MoveController:cancel
    * @ngdoc method
    * @methodOf MoveController
    */
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Node.js":
/*!***********************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Node.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var bootbox = __webpack_require__(/*! ../../../../../../../../../node_modules/bootbox/bootbox */ "./node_modules/bootbox/bootbox.js-exposed");
__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");
var RequisitionNode = __webpack_require__(/*! ../model/RequisitionNode */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionNode.js");
var RequisitionMetaDataEntry = __webpack_require__(/*! ../model/RequisitionMetaDataEntry */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionMetaDataEntry.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  var assetView = __webpack_require__(/*! ../../views/asset.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/asset.html");
  var metaDataView = __webpack_require__(/*! ../../views/metadata.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/metadata.html");
  var interfaceView = __webpack_require__(/*! ../../views/interface.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/interface.html");
  var nodeBasicView = __webpack_require__(/*! ../../views/node-basic.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-basic.html");
  var nodePathoutagesView = __webpack_require__(/*! ../../views/node-pathoutages.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-pathoutages.html");
  var nodeInterfacesView = __webpack_require__(/*! ../../views/node-interfaces.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-interfaces.html");
  var nodeAssetsView = __webpack_require__(/*! ../../views/node-assets.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-assets.html");
  var nodeMetaDataView = __webpack_require__(/*! ../../views/node-metadata.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-metadata.html");
  var nodeCategoriesView = __webpack_require__(/*! ../../views/node-categories.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-categories.html");
  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name NodeController
  * @module onms-requisitions
  *
  * @requires $scope Angular local scope
  * @requires $routeParams Angular route params
  * @requires $cookies Angular cookies
  * @requires $window Document window
  * @requires $uibModal Angular UI modal
  * @required Configuration The configuration object
  * @requires RequisitionsService The requisitions service
  * @requires growl The growl plugin for instant notifications
  *
  * @description The controller for manage requisitioned nodes (add/edit the nodes on a specific requisition)
  */.controller('NodeController', ['$scope', '$routeParams', '$cookies', '$window', '$uibModal', 'Configuration', 'RequisitionsService', 'growl', function ($scope, $routeParams, $cookies, $window, $uibModal, Configuration, RequisitionsService, growl) {
    $scope.nodeBasicView = nodeBasicView;
    $scope.nodePathoutagesView = nodePathoutagesView;
    $scope.nodeInterfacesView = nodeInterfacesView;
    $scope.nodeAssetsView = nodeAssetsView;
    $scope.nodeMetaDataView = nodeMetaDataView;
    $scope.nodeCategoriesView = nodeCategoriesView;

    /**
    * @description The timing status.
    *
    * @ngdoc property
    * @name NodeController#timingStatus
    * @propertyOf NodeController
    * @returns {object} The timing status object
    */
    $scope.timingStatus = RequisitionsService.getTiming();

    /**
    * @description The foreign source (a.k.a the name of the requisition).
    * The default value is obtained from the $routeParams.
    *
    * @ngdoc property
    * @name NodeController#foreignSource
    * @propertyOf NodeController
    * @returns {string} The foreign source
    */
    $scope.foreignSource = $routeParams.foreignSource;

    /**
    * @description The foreign ID
    * The default value is obtained from the $routeParams.
    * For new nodes, the content must be '__new__'.
    *
    * @ngdoc property
    * @name NodeController#foreignId
    * @propertyOf NodeController
    * @returns {string} The foreign ID
    */
    $scope.foreignId = $routeParams.foreignId;

    /**
    * @description The isNew flag
    *
    * @ngdoc property
    * @name NodeController#isNew
    * @propertyOf NodeController
    * @returns {boolean} true, if the foreign ID is equal to '__new__'
    */
    $scope.isNew = $scope.foreignId === '__new__';

    /**
    * @description The node object
    *
    * @ngdoc property
    * @name NodeController#node
    * @propertyOf NodeController
    * @returns {object} The node object
    */
    $scope.node = {};

    /**
    * @description The available configured categories
    *
    * @ngdoc property
    * @name NodeController#availableCategories
    * @propertyOf NodeController
    * @returns {array} The categories
    */
    $scope.availableCategories = [];

    /**
    * @description The available configured locations
    *
    * @ngdoc property
    * @name NodeController#availableLocations
    * @propertyOf NodeController
    * @returns {array} The locations
    */
    $scope.availableLocations = [];

    /**
    * @description The list of black-listed foreign IDs.
    * The foreignId must be unique within the requisition.
    * For an existing node, the foreignId should not be changed.
    * For new nodes, the foreignId must be validated.
    *
    * @ngdoc property
    * @name NodeController#foreignIdBlackList
    * @propertyOf NodeController
    * @returns {array} The list of black-listed foreign IDs.
    */
    $scope.foreignIdBlackList = [];

    /**
    * @description Goes to specific URL warning about changes if exist.
    *
    * @name NodeController:goTo
    * @ngdoc method
    * @methodOf NodeController
    * @param {string} url The URL to go
    */
    $scope.goTo = function (url) {
      var doGoTo = function doGoTo() {
        $window.location.href = url;
      };
      if (this.nodeForm.$dirty) {
        bootbox.dialog({
          message: 'There are changes on the current node. Are you sure you want to cancel ?',
          title: 'Cancel Changes',
          buttons: {
            success: {
              label: 'Yes',
              className: 'btn-primary',
              callback: doGoTo
            },
            main: {
              label: 'No',
              className: 'btn-secondary'
            }
          }
        });
      } else {
        doGoTo();
      }
    };

    /**
    * @description Goes back to requisitions list (navigation)
    *
    * @name NodeController:goTop
    * @ngdoc method
    * @methodOf NodeController
    */
    $scope.goTop = function () {
      $scope.goTo(Configuration.baseHref + '#/requisitions');
    };

    /**
    * @description Goes back to requisition editor (navigation)
    *
    * @name NodeController:goBack
    * @ngdoc method
    * @methodOf NodeController
    */
    $scope.goBack = function () {
      $scope.goTo(Configuration.baseHref + '#/requisitions/' + encodeURIComponent($scope.foreignSource));
    };

    /**
    * @description Goes to the vertical layout page (navigation)
    *
    * @name NodeController:goVerticalLayout
    * @ngdoc method
    * @methodOf NodeController
    */
    $scope.goVerticalLayout = function () {
      $cookies.put('use_requisitions_node_vertical_layout', 'true');
      $scope.goTo(Configuration.baseHref + '#/requisitions/' + encodeURIComponent($scope.foreignSource) + '/nodes/' + encodeURIComponent($scope.foreignId) + '/vertical');
    };

    /**
    * @description Goes to the horizontal layout page (navigation)
    *
    * @name NodeController:goHorizontalLayout
    * @ngdoc method
    * @methodOf NodeController
    */
    $scope.goHorizontalLayout = function () {
      $cookies.put('use_requisitions_node_vertical_layout', 'false');
      $scope.goTo(Configuration.baseHref + '#/requisitions/' + encodeURIComponent($scope.foreignSource) + '/nodes/' + encodeURIComponent($scope.foreignId));
    };

    /**
    * @description Shows an error to the user
    *
    * @name NodeController:errorHandler
    * @ngdoc method
    * @methodOf NodeController
    * @param {string} message The error message
    */
    $scope.errorHandler = function (message) {
      growl.error(message, {
        ttl: 10000
      });
    };

    /**
    * @description Generates a foreign Id
    *
    * @name NodeController:generateForeignId
    * @ngdoc method
    * @methodOf NodeController
    * @param {object} the form object associated with the foreignId
    */
    $scope.generateForeignId = function (formObj) {
      $scope.node.foreignId = String(new Date().getTime());
      formObj.$invalid = false;
    };

    /**
    * @description Shows the dialog for add/edit an asset field
    *
    * @name NodeController:editAsset
    * @ngdoc method
    * @methodOf NodeController
    * @param {integer} index The index of the asset to be edited
    * @param {boolean} isNew true, if the asset is new
    */
    $scope.editAsset = function (index, isNew) {
      var form = this.nodeForm;
      var assetToEdit = $scope.node.assets[index];
      var _assetsBlackList = [];
      (0, _forEach.default)(angular).call(angular, $scope.node.assets, function (asset) {
        _assetsBlackList.push(asset.name);
      });
      var modalInstance = $uibModal.open({
        backdrop: 'static',
        keyboard: false,
        controller: 'AssetController',
        templateUrl: assetView,
        resolve: {
          asset: function asset() {
            return angular.copy(assetToEdit);
          },
          assetsBlackList: function assetsBlackList() {
            return _assetsBlackList;
          }
        }
      });
      modalInstance.result.then(function (result) {
        angular.copy(result, assetToEdit);
        form.$dirty = true;
      }, function () {
        if (isNew) {
          $scope.node.assets.pop();
        }
      });
    };

    /**
    * @description Removes an asset from the local node
    *
    * @name NodeController:removeAsset
    * @ngdoc method
    * @methodOf NodeController
    * @param {integer} index The index of the asset to be removed
    */
    $scope.removeAsset = function (index) {
      var _context;
      (0, _splice.default)(_context = $scope.node.assets).call(_context, index, 1);
      this.nodeForm.$dirty = true;
    };

    /**
    * @description Adds a new asset to the local node
    *
    * @name NodeController:addAsset
    * @ngdoc method
    * @methodOf NodeController
    */
    $scope.addAsset = function () {
      $scope.editAsset($scope.node.addNewAsset(), true);
    };

    /**
     * @description Should be called when the meta-data tab is selected
     *
     * @name NodeController:onMetadataTabSelect
     * @ngdoc method
     * @methodOf NodeController
     */
    $scope.onMetadataTabSelect = function () {
      // Before switching over to the tab, let's delete any entries that reference entities which no longer exist
      // i.e. in the case that meta-data was associated with an interface, and that interface is now deleted
      $scope.node.metaData.removeEntriesForMissingScopedEntities();
    };
    $scope.deleteNode = function (node) {
      bootbox.confirm('Are you sure you want to delete the current node?', function (ok) {
        if (ok) {
          RequisitionsService.startTiming();
          RequisitionsService.deleteNode(node).then(function () {
            $scope.nodeForm.$setPristine(); // Ignore dirty state
            $scope.goBack();
            // If node was just created, it has no label yet
            if (node.nodeLabel) {
              growl.success('The node ' + _.escape(node.nodeLabel) + ' has been deleted.');
            } else {
              growl.success('The node has been deleted.');
            }
          }, $scope.errorHandler);
        }
      });
    };

    /**
     * @description Shows the dialog for add/edit an metaData entry
     *
     * @name NodeController:editMetaData
     * @ngdoc method
     * @methodOf NodeController
     * @param {object} entry The metaData entry to be edited
     * @param {boolean} isNew true, if the metaData entry is new
     */
    $scope.editMetaData = function (_entry, isNew) {
      var form = this.nodeForm;
      var modalInstance = $uibModal.open({
        backdrop: 'static',
        keyboard: false,
        controller: 'MetaDataController',
        templateUrl: metaDataView,
        resolve: {
          node: function node() {
            return angular.copy($scope.node);
          },
          entry: function entry() {
            return angular.copy(_entry);
          }
        }
      });
      modalInstance.result.then(function (result) {
        angular.copy(result, _entry);
        form.$dirty = true;
        if (isNew) {
          $scope.node.metaData.addEntry(_entry);
        }
      });
    };

    /**
     * @description Removes an metaData entry from the local node
     *
     * @name NodeController:removeMetaData
     * @ngdoc method
     * @methodOf NodeController
     * @param {object} entry The index of the metaData entry to be removed
     */
    $scope.removeMetaData = function (entry) {
      $scope.node.metaData.removeEntry(entry);
      this.nodeForm.$dirty = true;
    };

    /**
     * @description Adds a new metaData entry to the local node
     *
     * @name NodeController:addMetaData
     * @ngdoc method
     * @methodOf NodeController
     */
    $scope.addMetaData = function () {
      $scope.editMetaData(new RequisitionMetaDataEntry(), true);
    };

    /**
    * @description Shows a modal dialog for add/edit an interface
    *
    * @name NodeController:editInterface
    * @ngdoc method
    * @methodOf NodeController
    * @param {integer} index The index of the interface to be edited
    * @param {boolean} isNew true, if the interface is new
    */
    $scope.editInterface = function (index, isNew) {
      var form = this.nodeForm;
      var intfToEdit = $scope.node.interfaces[index];
      var _foreignSource = $scope.foreignSource;
      var _foreignId = $scope.foreignId;
      var _ipBlackList = [];
      (0, _forEach.default)(angular).call(angular, $scope.node.interfaces, function (intf) {
        _ipBlackList.push(intf.ipAddress);
      });
      var modalInstance = $uibModal.open({
        backdrop: 'static',
        keyboard: false,
        controller: 'InterfaceController',
        templateUrl: interfaceView,
        resolve: {
          foreignId: function foreignId() {
            return _foreignId;
          },
          foreignSource: function foreignSource() {
            return _foreignSource;
          },
          requisitionInterface: function requisitionInterface() {
            return angular.copy(intfToEdit);
          },
          ipBlackList: function ipBlackList() {
            return _ipBlackList;
          },
          primaryInterface: function primaryInterface() {
            return $scope.getPrimaryAddress();
          }
        }
      });
      modalInstance.result.then(function (result) {
        angular.copy(result, intfToEdit);
        form.$dirty = true;
      }, function () {
        if (isNew) {
          $scope.node.interfaces.pop();
        }
      });
    };

    /**
    * @description Removes an interface from the local node
    *
    * @name NodeController:removeInterface
    * @ngdoc method
    * @methodOf NodeController
    * @param {integer} index The index of the interface to be removed
    */
    $scope.removeInterface = function (index) {
      var _context2;
      (0, _splice.default)(_context2 = $scope.node.interfaces).call(_context2, index, 1);
      this.nodeForm.$dirty = true;
    };

    /**
    * @description Adds a new interface to the local node
    *
    * @name NodeController:addInterface
    * @ngdoc method
    * @methodOf NodeController
    */
    $scope.addInterface = function () {
      $scope.editInterface($scope.node.addNewInterface(), true);
    };

    /**
    * @description Removes a category from the local node
    *
    * @name NodeController:removeCategory
    * @ngdoc method
    * @methodOf NodeController
    * @param {integer} index The index of the category to be removed
    */
    $scope.removeCategory = function (index) {
      var _context3;
      (0, _splice.default)(_context3 = $scope.node.categories).call(_context3, index, 1);
      this.nodeForm.$dirty = true;
    };

    /**
    * @description Adds a new category to the local node
    *
    * @name NodeController:addCategory
    * @ngdoc method
    * @methodOf NodeController
    */
    $scope.addCategory = function () {
      $scope.node.addNewCategory();
      this.nodeForm.$dirty = true;
    };

    /**
    * @description Saves the local node on the server
    *
    * @name NodeController:save
    * @ngdoc method
    * @methodOf NodeController
    */
    $scope.save = function () {
      var form = this.nodeForm;
      RequisitionsService.startTiming();
      RequisitionsService.saveNode($scope.node).then(function () {
        // success
        growl.success('The node ' + _.escape($scope.node.nodeLabel) + ' has been saved.');
        $scope.foreignId = $scope.node.foreignId;
        form.$dirty = false;
      }, $scope.errorHandler);
    };

    /**
    * @description Refresh the local node from the server
    *
    * @name NodeController:refresh
    * @ngdoc method
    * @methodOf NodeController
    */
    $scope.refresh = function () {
      growl.success('Retrieving node ' + _.escape($scope.foreignId) + ' from requisition ' + _.escape($scope.foreignSource) + '...');
      RequisitionsService.getNode($scope.foreignSource, $scope.foreignId).then(function (node) {
        // success
        $scope.node = node;
      }, $scope.errorHandler);
    };

    /**
    * @description Get the unused available categories
    *
    * @name NodeController:getAvailableCategories
    * @ngdoc method
    * @methodOf NodeController
    * @returns {array} the unused available categories
    */
    $scope.getAvailableCategories = function () {
      var categories = [];
      (0, _forEach.default)(angular).call(angular, $scope.availableCategories, function (category) {
        var found = false;
        (0, _forEach.default)(angular).call(angular, $scope.node.categories, function (c) {
          if (c.name === category) {
            found = true;
          }
        });
        if (!found) {
          categories.push(category);
        }
      });
      return categories;
    };

    /**
    * @description Gets the primary IP address
    *
    * @name NodeController:getPrimaryAddress
    * @ngdoc method
    * @methodOf NodeController
    * @returns {string} the primary IP address or 'N/A' if it doesn't exist.
    */
    $scope.getPrimaryAddress = function () {
      var ip = $scope.node.getPrimaryIpAddress();
      return ip ? ip : null;
    };

    // Initialization of the node's page for either adding a new node or editing an existing node

    if ($scope.isNew) {
      $scope.node = new RequisitionNode($scope.foreignSource, {});
    } else {
      $scope.refresh();
    }

    // Initialize categories
    RequisitionsService.getAvailableCategories().then(function (categories) {
      // success
      $scope.availableCategories = categories;
    }, $scope.errorHandler);

    // Initialize locations
    RequisitionsService.getAvailableLocations().then(function (locations) {
      // success
      $scope.availableLocations = locations;
    }, $scope.errorHandler);

    // Initialize foreign-id black list (thanks to the cache, this call is not expensive)
    // TODO: What if the cache is disabled ?
    RequisitionsService.getRequisition($scope.foreignSource).then(function (requisition) {
      (0, _forEach.default)(angular).call(angular, requisition.nodes, function (node) {
        $scope.foreignIdBlackList.push(node.foreignId);
      });
    }, $scope.errorHandler);
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Policy.js":
/*!*************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Policy.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  var policyParamOptionsView = __webpack_require__(/*! ../../views/policy-param.options.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.options.html");
  var policyParamStringView = __webpack_require__(/*! ../../views/policy-param.string.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.string.html");
  var policyParamFixedView = __webpack_require__(/*! ../../views/policy-param.fixed.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.fixed.html");
  var policyParamEditableView = __webpack_require__(/*! ../../views/policy-param.editable.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.editable.html");
  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name PolicyController
  * @module onms-requisitions
  *
  * @requires $scope Angular local scope
  * @requires $uibModalInstance Angular UI modal instance
  * @requires RequisitionsService The Requisitions Servive
  * @requires policy Requisition policy object
  *
  * @description The controller for manage the modal dialog for add/edit requisition policies
  */.controller('PolicyController', ['$scope', '$uibModalInstance', 'RequisitionsService', 'policy', function ($scope, $uibModalInstance, RequisitionsService, policy) {
    /**
    * @description The policy object
    *
    * @ngdoc property
    * @name PolicyController#policy
    * @propertyOf PolicyController
    * @returns {object} The policy object
    */
    $scope.policy = policy;

    /**
    * @description The available policies array
    *
    * @ngdoc property
    * @name PolicyController#availablePolicies
    * @propertyOf PolicyController
    * @returns {array} The policy list
    */
    $scope.availablePolicies = [];

    /**
    * @description The optional parameters array
    *
    * @ngdoc property
    * @name PolicyController#optionalParameters
    * @propertyOf PolicyController
    * @returns {array} The optional parameters list
    */
    $scope.optionalParameters = [];

    /**
    * @description Saves the current policy
    *
    * @name PolicyController:save
    * @ngdoc method
    * @methodOf PolicyController
    */
    $scope.save = function () {
      $uibModalInstance.close($scope.policy);
    };

    /**
    * @description Cancels the current operation
    *
    * @name PolicyController:cancel
    * @ngdoc method
    * @methodOf PolicyController
    */
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    /**
    * @description Adds a new empty parameter to the current policy
    *
    * @name PolicyController:addParameter
    * @ngdoc method
    * @methodOf PolicyController
    */
    $scope.addParameter = function () {
      $scope.policy.parameter.push({
        'key': '',
        'value': ''
      });
    };

    /**
    * @description Removes a parameter from the current policy
    *
    * @name PolicyController:removeParameter
    * @ngdoc method
    * @methodOf PolicyController
    * @param {integer} index The index of the parameter to remove
    */
    $scope.removeParameter = function (index) {
      var _context;
      (0, _splice.default)(_context = $scope.policy.parameter).call(_context, index, 1);
    };

    /**
    * @description Update policy parameters after changing the policy class.
    *
    * @name PolicyController:updatePolicyParameters
    * @ngdoc method
    * @methodOf PolicyController
    * @param {object} policyConfig the configuration of the selected policy
    */
    $scope.updatePolicyParameters = function (policyConfig) {
      if (!policyConfig) {
        return;
      }
      $scope.policy.parameter = [];
      (0, _forEach.default)(angular).call(angular, $scope.availablePolicies, function (policy) {
        if (policy.class === policyConfig.class) {
          (0, _forEach.default)(angular).call(angular, policyConfig.parameters, function (param) {
            if (param.required) {
              $scope.policy.parameter.push({
                'key': param.key,
                'value': null
              });
            }
          });
        }
      });
    };

    /**
    * @description Checks if an object is a non empty array
    *
    * @private
    * @name PolicyController:updatePolicyParameters
    * @ngdoc method
    * @methodOf PolicyController
    * @param {object} myArray the object to check
    * @returns {boolean} true, if the object is a non empty array
    */
    $scope.isNonEmptyArray = function (myArray) {
      var _context2;
      return (0, _indexOf.default)(_context2 = myArray.constructor.toString()).call(_context2, 'Array') > -1 && myArray.length > 0;
    };

    /**
    * @description Analyzes the local scope of the directive to select the proper HTML template and populate the parameter options.
    *
    * This method expects to obtain the class of the parent policy through the parent scope (that's why the directive should be managed by PolicyController)
    * @name PolicyController:getTemplate
    * @ngdoc method
    * @methodOf PolicyController
    * @param {object} scope The directive scope object
    * @returns {string} The HTML template
    */
    $scope.getTemplate = function (parameter) {
      var selectedPolicyClass = $scope.policy.class;
      $scope.optionalParameters = [];
      for (var i = 0; i < $scope.availablePolicies.length; i++) {
        if ($scope.availablePolicies[i].class === selectedPolicyClass) {
          for (var j = 0; j < $scope.availablePolicies[i].parameters.length; j++) {
            var paramCfg = $scope.availablePolicies[i].parameters[j];
            if (paramCfg.key === parameter.key) {
              // Checking current parameter
              if (paramCfg.required) {
                if ($scope.isNonEmptyArray(paramCfg.options)) {
                  return policyParamOptionsView;
                }
                return policyParamStringView;
              }
            }
            if (!paramCfg.required) {
              $scope.optionalParameters.push(paramCfg.key);
            }
          }
        }
      }
      return parameter.key ? policyParamFixedView : policyParamEditableView;
    };

    /**
    * @description Gets the options for a particular parameter
    *
    * @name PolicyController:getParameterOptions
    * @ngdoc method
    * @methodOf PolicyController
    * @param {string} parameterKey The parameter key
    * @returns {array} The parameter options list
    */
    $scope.getParameterOptions = function (parameterKey) {
      for (var i = 0; i < $scope.availablePolicies.length; i++) {
        if ($scope.availablePolicies[i].class === $scope.policy.class) {
          for (var j = 0; j < $scope.availablePolicies[i].parameters.length; j++) {
            var paramCfg = $scope.availablePolicies[i].parameters[j];
            if (paramCfg.key === parameterKey) {
              // Checking current parameter
              return paramCfg.options;
            }
          }
        }
      }
      return [];
    };

    /**
    * @description Gets the optional parameters.
    *
    * @name PolicyController:getOptionalParameters
    * @ngdoc method
    * @methodOf PolicyController
    * @returns {array} The optional parameters list
    */
    $scope.getOptionalParameters = function () {
      var params = [];
      (0, _forEach.default)(angular).call(angular, $scope.optionalParameters, function (availParam) {
        var found = false;
        (0, _forEach.default)(angular).call(angular, $scope.policy.parameter, function (param) {
          if (param.key === availParam) {
            found = true;
          }
        });
        if (!found) {
          params.push(availParam);
        }
      });
      return params;
    };

    // Initialization

    RequisitionsService.getAvailablePolicies().then(function (policies) {
      $scope.availablePolicies = policies;
      (0, _forEach.default)(angular).call(angular, policies, function (policy) {
        if (policy.class === $scope.policy.class) {
          var orderedParams = [];
          for (var i = 0; i < policy.parameters.length; i++) {
            var pkey = policy.parameters[i].key;
            for (var j = 0; j < $scope.policy.parameter.length; j++) {
              var p = $scope.policy.parameter[j];
              if (p.key === pkey) {
                orderedParams.push(p);
              }
            }
          }
          $scope.policy.parameter = orderedParams;
        }
      });
    });
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/QuickAddNode.js":
/*!*******************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/QuickAddNode.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
var _util = _interopRequireDefault(__webpack_require__(/*! ../../../../../../modules/lib/util */ "./src/main/assets/modules/lib/util/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");
var QuickNode = __webpack_require__(/*! ../model/QuickNode */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/QuickNode.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  var quickAddPanelBasicView = __webpack_require__(/*! ../../views/quick-add-panel-basic.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-basic.html");
  var quickAddPanelSnmpView = __webpack_require__(/*! ../../views/quick-add-panel-snmp.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-snmp.html");
  var quickAddPanelCategoriesView = __webpack_require__(/*! ../../views/quick-add-panel-categories.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-categories.html");
  var quickAddPanelCliView = __webpack_require__(/*! ../../views/quick-add-panel-cli.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-cli.html");
  var quickAddPanelHelpView = __webpack_require__(/*! ../../views/quick-add-panel-help.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-help.html");
  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name QuickAddNodeController
  * @module onms-requisitions
  *
  * @requires $scope Angular local scope
  * @requires foreignSources The list of available requisitions (a.k.a. foreign source)
  * @requires RequisitionsService The requisitions service
  * @requires growl The growl plugin for instant notifications
  *
  * @description The controller for manage the modal dialog for quick add a node to an existing requisition.
  */.controller('QuickAddNodeController', ['$scope', 'foreignSources', 'RequisitionsService', 'growl', '$sanitize', function ($scope, foreignSources, RequisitionsService, growl, $sanitize) {
    $scope.quickAddPanelBasicView = quickAddPanelBasicView;
    $scope.quickAddPanelSnmpView = quickAddPanelSnmpView;
    $scope.quickAddPanelCategoriesView = quickAddPanelCategoriesView;
    $scope.quickAddPanelCliView = quickAddPanelCliView;
    $scope.quickAddPanelHelpView = quickAddPanelHelpView;

    /**
    * @description The available foreign sources
    *
    * @ngdoc property
    * @name QuickAddNodeController#foreignSources
    * @propertyOf QuickAddNodeController
    * @returns {array} List of available foreign sources
    */
    $scope.foreignSources = [];

    /**
    * @description The available configured categories
    *
    * @ngdoc property
    * @name QuickAddNodeController#availableCategories
    * @propertyOf QuickAddNodeController
    * @returns {array} The categories
    */
    $scope.availableCategories = [];

    /**
    * @description The available access methods
    *
    * @ngdoc property
    * @name QuickAddNodeController#availableAccessMethods
    * @propertyOf QuickAddNodeController
    * @returns {array} The access methods
    */
    $scope.availableAccessMethods = ['RSH', 'SSH', 'Telnet'];

    /**
    * @description The saving flag (true when the node is being saved)
    *
    * @ngdoc property
    * @name QuickAddNodeController#isSaving
    * @propertyOf QuickAddNodeController
    * @returns {boolean} true when the node is being saved
    */
    $scope.isSaving = false;

    /**
    * @description The source object that contains all the required information for the new node
    *
    * @ngdoc property
    * @name QuickAddNodeController#node
    * @propertyOf QuickAddNodeController
    * @returns {object} The source object
    */
    $scope.node = new QuickNode();

    /**
    * @description Generates a foreign Id
    *
    * @name QuickAddNodeController:generateForeignId
    * @ngdoc method
    * @methodOf QuickAddNodeController
    * @param {object} the form object associated with the foreignId
    */
    $scope.generateForeignId = function (formObj) {
      $scope.node.foreignId = String(new Date().getTime());
      formObj.$invalid = false;
    };

    /**
    * @description Provision the current node
    *
    * @name QuickAddNodeController:provision
    * @ngdoc method
    * @methodOf QuickAddNodeController
    */
    $scope.provision = function () {
      $scope.isSaving = true;
      growl.info('The node ' + _.escape($scope.node.nodeLabel) + ' is being added to requisition ' + _.escape($scope.node.foreignSource) + '. Please wait...');
      var successMessage = 'The node ' + _.escape($scope.node.nodeLabel) + ' has been added to requisition ' + _.escape($scope.node.foreignSource);
      RequisitionsService.quickAddNode($scope.node).then(function () {
        // success
        $scope.reset();
        bootbox.dialog({
          message: successMessage,
          title: 'Success',
          buttons: {
            main: {
              label: 'Ok',
              className: 'btn-secondary'
            }
          }
        });
      }, $scope.errorHandler);
    };

    /**
    * @description Resets the current node
    *
    * @name QuickAddNodeController:reset
    * @ngdoc method
    * @methodOf QuickAddNodeController
    */
    $scope.reset = function () {
      $scope.node = new QuickNode(); // Resetting the object.
      $scope.isSaving = false;
    };

    /**
     * @description Get the unused available categories
     *
     * @name QuickAddNodeController:getAvailableCategories
     * @ngdoc method
     * @methodOf QuickAddNodeController
     * @returns {array} the unused available categories
     */
    $scope.getAvailableCategories = function () {
      var categories = [];
      (0, _forEach.default)(angular).call(angular, $scope.availableCategories, function (category) {
        var found = false;
        (0, _forEach.default)(angular).call(angular, $scope.node.categories, function (c) {
          if (c.name === category) {
            found = true;
          }
        });
        if (!found) {
          categories.push(category);
        }
      });
      return categories;
    };

    /**
    * @description Removes a category from the local node
    *
    * @name QuickAddNodeController:removeCategory
    * @ngdoc method
    * @methodOf QuickAddNodeController
    * @param {integer} index The index of the category to be removed
    */
    $scope.removeCategory = function (index) {
      var _context;
      (0, _splice.default)(_context = $scope.node.categories).call(_context, index, 1);
      this.quickAddNodeForm.$dirty = true;
    };

    /**
    * @description Adds a new category to the local node
    *
    * @name QuickAddNodeController:addCategory
    * @ngdoc method
    * @methodOf QuickAddNodeController
    */
    $scope.addCategory = function () {
      $scope.node.addNewCategory();
      this.quickAddNodeForm.$dirty = true;
    };

    /**
    * @description Checks if the form is valid or not
    *
    * @name QuickAddNodeController:isInvalid
    * @ngdoc method
    * @methodOf QuickAddNodeController
    * @returns {boolean} true if the form is invalid.
    */
    $scope.isInvalid = function () {
      if (!this.quickAddNodeForm || !this.quickAddNodeForm.foreignSource || !this.quickAddNodeForm.ipAddress || !this.quickAddNodeForm.nodeLabel) {
        return true;
      }
      return this.quickAddNodeForm.foreignSource.$invalid || this.quickAddNodeForm.ipAddress.$invalid || this.quickAddNodeForm.nodeLabel.$invalid;
    };

    /**
    * @description Shows an error to the user
    *
    * @name QuickAddNodeController:errorHandler
    * @ngdoc method
    * @methodOf QuickAddNodeController
    * @param {string} message The error message
    */
    $scope.errorHandler = function (message) {
      growl.error(message, {
        ttl: 10000
      });
    };

    /**
    * @description Adds a new requisition
    *
    * @name QuickAddNodeController:addRequisition
    * @ngdoc method
    * @methodOf QuickAddNodeController
    */
    $scope.addRequisition = function () {
      bootbox.prompt('A requisition is required, please enter the name for a new requisition', function (foreignSource) {
        if (foreignSource) {
          RequisitionsService.addRequisition(foreignSource).then(function () {
            // success
            RequisitionsService.synchronizeRequisition(foreignSource, false).then(function () {
              growl.success('The requisition ' + _.escape(foreignSource) + ' has been created and synchronized.');
              $scope.foreignSources.push(foreignSource);
            }, $scope.errorHandler);
          }, $scope.errorHandler);
        } else {
          window.location.href = _util.default.getBaseHref() + 'admin/opennms/index.jsp'; // TODO Is this the best way ?
        }
      });
    };

    // Initialize categories
    RequisitionsService.getAvailableCategories().then(function (categories) {
      // success
      $scope.availableCategories = categories;
    }, $scope.errorHandler);

    // Initialize requisitions
    if (!foreignSources) {
      RequisitionsService.getRequisitionNames().then(function (requisitions) {
        // success
        $scope.foreignSources = requisitions;
        // If there is NO requisitions, the user has to create a new one
        if ($scope.foreignSources.length === 0) {
          $scope.addRequisition();
        }
      }, $scope.errorHandler);
    } else {
      $scope.foreignSources = foreignSources;
    }
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/QuickAddNodeModal.js":
/*!************************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/QuickAddNodeModal.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  var quickAddPanelBasicView = __webpack_require__(/*! ../../views/quick-add-panel-basic.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-basic.html");
  var quickAddPanelSnmpView = __webpack_require__(/*! ../../views/quick-add-panel-snmp.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-snmp.html");
  var quickAddPanelCategoriesView = __webpack_require__(/*! ../../views/quick-add-panel-categories.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-categories.html");
  var quickAddPanelCliView = __webpack_require__(/*! ../../views/quick-add-panel-cli.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-cli.html");
  var quickAddPanelHelpView = __webpack_require__(/*! ../../views/quick-add-panel-help.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-help.html");
  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name QuickAddNodeModalController
  * @module onms-requisitions
  *
  * @requires $controller Angular controller
  * @requires $scope Angular local scope
  * @requires $uibModalInstance Angular UI modal instance
  * @requires foreignSources The list of available requisitions (a.k.a. foreign source)
  * @requires RequisitionsService The requisitions service
  * @requires growl The growl plugin for instant notifications
  *
  * @description The controller for manage the modal dialog for quick add a node to an existing requisition.
  */.controller('QuickAddNodeModalController', ['$controller', '$scope', '$uibModalInstance', 'foreignSources', 'RequisitionsService', 'growl', function ($controller, $scope, $uibModalInstance, foreignSources, RequisitionsService, growl) {
    $scope.quickAddPanelBasicView = quickAddPanelBasicView;
    $scope.quickAddPanelSnmpView = quickAddPanelSnmpView;
    $scope.quickAddPanelCategoriesView = quickAddPanelCategoriesView;
    $scope.quickAddPanelCliView = quickAddPanelCliView;
    $scope.quickAddPanelHelpView = quickAddPanelHelpView;

    /**
    * @description Provision the current node and close the modal operation
    *
    * @name QuickAddNodeModalController:modalProvision
    * @ngdoc method
    * @methodOf QuickAddNodeModalController
    */
    $scope.modalProvision = function () {
      $scope.provision();
      $uibModalInstance.close($scope.node);
    };

    /**
    * @description Cancels current modal operation
    *
    * @name QuickAddNodeModalController:modalCancel
    * @ngdoc method
    * @methodOf QuickAddNodeModalController
    */
    $scope.modalCancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    // Extending QuickAddNodeController
    // eslint-disable-next-line no-invalid-this
    angular.extend(this, $controller('QuickAddNodeController', {
      $scope: $scope,
      foreignSources: foreignSources,
      RequisitionsService: RequisitionsService,
      growl: growl
    }));
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Requisition.js":
/*!******************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Requisition.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var bootbox = __webpack_require__(/*! ../../../../../../../../../node_modules/bootbox/bootbox */ "./node_modules/bootbox/bootbox.js-exposed");
var Requisition = __webpack_require__(/*! ../model/Requisition */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/Requisition.js");
__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");
__webpack_require__(/*! ../services/Synchronize */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Synchronize.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name RequisitionController
  * @module onms-requisitions
  *
  * @description The controller for manage a single requisition (add/edit)
  *
  * @requires $scope Angular local scope
  * @requires $filter Angular filter
  * @requires $cookies Angular cookies
  * @requires $window Document window
  * @requires $routeParams Angular route parameters
  * @required Configuration The configuration object
  * @requires RequisitionsService The requisitions service
  * @requires SynchronizeService The synchronize service
  * @requires growl The growl plugin for instant notifications
  */.controller('RequisitionController', ['$scope', '$filter', '$cookies', '$window', '$routeParams', 'Configuration', 'RequisitionsService', 'SynchronizeService', 'growl', function ($scope, $filter, $cookies, $window, $routeParams, Configuration, RequisitionsService, SynchronizeService, growl) {
    /**
    * @description The timing status.
    *
    * @ngdoc property
    * @name RequisitionController#timingStatus
    * @propertyOf RequisitionController
    * @returns {object} The timing status object
    */
    $scope.timingStatus = RequisitionsService.getTiming();

    /**
    * @description The foreign source (a.k.a the name of the requisition).
    * The default value is obtained from the $routeParams.
    *
    * @ngdoc property
    * @name RequisitionController#foreignSource
    * @propertyOf RequisitionController
    * @returns {string} The foreign source
    */
    $scope.foreignSource = $routeParams.foreignSource;

    /**
    * @description The requisition object
    *
    * @ngdoc property
    * @name RequisitionController#requisition
    * @propertyOf RequisitionController
    * @returns {object} The requisition object
    */
    $scope.requisition = new Requisition({});

    /**
    * @description The filtered list of nodes
    *
    * @ngdoc property
    * @name RequisitionController#filteredNodes
    * @propertyOf RequisitionController
    * @returns {array} The filtered array
    */
    $scope.filteredNodes = [];

    /**
    * @description The amount of items per page for pagination (defaults to 10)
    *
    * @ngdoc property
    * @name RequisitionController#pageSize
    * @propertyOf RequisitionController
    * @returns {integer} The page size
    */
    $scope.pageSize = 10;

    /**
    * @description The maximum size of pages for pagination (defaults to 5)
    *
    * @ngdoc property
    * @name RequisitionController#maxSize
    * @propertyOf RequisitionController
    * @returns {integer} The maximum size
    */
    $scope.maxSize = 5;

    /**
    * @description The total amount of items for pagination (defaults to 0)
    *
    * @ngdoc property
    * @name RequisitionController#totalItems
    * @propertyOf RequisitionController
    * @returns {integer} The total items
    */
    $scope.totalItems = 0;

    /**
    * @description Goes back to requisitions list (navigation)
    *
    * @name RequisitionController:goBack
    * @ngdoc method
    * @methodOf RequisitionController
    */
    // FIXME Should be called getTop to be consistent with the rest of the controllers
    $scope.goBack = function () {
      $window.location.href = Configuration.baseHref + '#/requisitions';
    };

    /**
    * @description Goes to the edition page for the foreign source definition of the requisition (navigation)
    *
    * @name RequisitionController:editForeignSource
    * @ngdoc method
    * @methodOf RequisitionController
    */
    $scope.editForeignSource = function () {
      $window.location.href = Configuration.baseHref + '#/requisitions/' + encodeURIComponent($scope.foreignSource) + '/foreignSource';
    };

    /**
    * @description Shows an error to the user
    *
    * @name RequisitionController:errorHandler
    * @ngdoc method
    * @methodOf RequisitionController
    * @param {string} message The error message
    */
    $scope.errorHandler = function (message) {
      growl.error(message, {
        ttl: 10000
      });
    };

    /**
    * @description Requests the synchronization/import of a requisition on the server
    *
    * A dialog box is displayed to request to the user if the scan phase should be triggered or not.
    *
    * @name RequisitionController:synchronize
    * @ngdoc method
    * @methodOf RequisitionController
    */
    $scope.synchronize = function () {
      SynchronizeService.synchronize($scope.requisition, $scope.errorHandler);
    };

    /**
    * @description Returns the vertical layout suffix for nodes if enabled
    *
    * @name RequisitionController:getVerticalLayout
    * @ngdoc method
    * @methodOf RequisitionController
    * @returns {string} URL suffix for vertical layout if enabled.
    */
    $scope.getVerticalLayout = function () {
      var isVertical = $cookies.get('use_requisitions_node_vertical_layout');
      return isVertical === 'true' ? '/vertical' : '';
    };

    /**
    * @description Goes to the page for adding a new node to the requisition (navigation)
    *
    * @name RequisitionController:addNode
    * @ngdoc method
    * @methodOf RequisitionController
    */
    $scope.addNode = function () {
      $window.location.href = Configuration.baseHref + '#/requisitions/' + encodeURIComponent($scope.foreignSource) + '/nodes/__new__' + $scope.getVerticalLayout();
    };

    /**
    * @description Goes to the page for editing an existing node of the requisition (navigation)
    * @description
    *
    * @name RequisitionController:editNode
    * @ngdoc method
    * @methodOf RequisitionController
    * @param {object} The node's object to edit
    */
    $scope.editNode = function (node) {
      $window.location.href = Configuration.baseHref + '#/requisitions/' + encodeURIComponent($scope.foreignSource) + '/nodes/' + encodeURIComponent(node.foreignId) + $scope.getVerticalLayout();
    };

    /**
    * @description Deletes a node from the requisition on the server and refresh the local nodes list
    *
    * @name RequisitionController:deleteNode
    * @ngdoc method
    * @methodOf RequisitionController
    * @param {object} The node's object to delete
    */
    $scope.deleteNode = function (node) {
      bootbox.confirm('Are you sure you want to remove the node ' + _.escape(node.nodeLabel) + '?', function (ok) {
        if (ok) {
          RequisitionsService.startTiming();
          RequisitionsService.deleteNode(node).then(function () {
            // success
            var index = -1;
            for (var i = 0; i < $scope.filteredNodes.length; i++) {
              if ($scope.filteredNodes[i].foreignId === node.foreignId) {
                index = i;
              }
            }
            if (index > -1) {
              var _context;
              (0, _splice.default)(_context = $scope.filteredNodes).call(_context, index, 1);
            }
            growl.success('The node ' + _.escape(node.nodeLabel) + ' has been deleted.');
          }, $scope.errorHandler);
        }
      });
    };

    /**
     * @description Updates the pagination variables for the nodes.
     *
     * @name RequisitionController:updateFilteredNodes
     * @ngdoc method
     * @methodOf RequisitionController
     */
    $scope.updateFilteredNodes = function () {
      $scope.currentPage = 1;
      $scope.totalItems = $scope.filteredNodes.length;
    };

    /**
    * @description Refreshes the deployed statistics for the requisition from the server
    *
    * @name RequisitionController:refreshDeployedStats
    * @ngdoc method
    * @methodOf RequisitionController
    */
    $scope.refreshDeployedStats = function () {
      RequisitionsService.startTiming();
      RequisitionsService.updateDeployedStatsForRequisition($scope.requisition).then(function () {
        // success
        growl.success('The deployed statistics has been updated.');
      }, $scope.errorHandler);
    };

    /**
    * @description Refreshes the currently loaded requisition from the server
    *
    * @name RequisitionController:refreshRequisition
    * @ngdoc method
    * @methodOf RequisitionController
    */
    $scope.refreshRequisition = function () {
      bootbox.confirm('Are you sure you want to reload the requisition?<br/>All current changes will be lost.', function (ok) {
        if (ok) {
          RequisitionsService.startTiming();
          $scope.requisition = new Requisition({});
          RequisitionsService.removeRequisitionFromCache();
          $scope.initialize(function () {
            $scope.refreshDeployedStats();
          });
        }
      });
    };

    /**
     * @description Saves the page size on a cookie
     *
     * @name RequisitionController:savePageSize
     * @ngdoc method
     * @methodOf RequisitionController
     */
    $scope.savePageSize = function () {
      $cookies.put('requisitions_page_size', $scope.pageSize);
    };

    /**
    * @description Initializes the local requisition from the server
    *
    * @name RequisitionController:initialize
    * @ngdoc method
    * @methodOf RequisitionController
    * @param {function} customHandler An optional method to be called after the initialization is done.
    */
    $scope.initialize = function (customHandler) {
      var value = $cookies.get('requisitions_page_size');
      if (value) {
        $scope.pageSize = value;
      }
      growl.success('Retrieving requisition ' + _.escape($scope.foreignSource) + '...');
      RequisitionsService.getRequisition($scope.foreignSource).then(function (requisition) {
        // success
        $scope.requisition = requisition;
        $scope.filteredNodes = requisition.nodes;
        $scope.updateFilteredNodes();
        if (customHandler) {
          customHandler();
        }
      }, $scope.errorHandler);
    };

    /**
    * @description Watch for filter changes in order to update the nodes list and updates the pagination control
    *
    * @name RequisitionController:reqFilter
    * @ngdoc event
    * @methodOf RequisitionController
    */
    $scope.$watch('reqFilter', function () {
      $scope.filteredNodes = $filter('filter')($scope.requisition.nodes, $scope.reqFilter);
      $scope.updateFilteredNodes();
    });

    // Initialization

    if ($scope.foreignSource) {
      $scope.initialize();
    }
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Requisitions.js":
/*!*******************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Requisitions.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var bootbox = __webpack_require__(/*! ../../../../../../../../../node_modules/bootbox/bootbox */ "./node_modules/bootbox/bootbox.js-exposed");
__webpack_require__(/*! ../services/Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");
__webpack_require__(/*! ../services/Synchronize */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Synchronize.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  var quickAddNodeView = __webpack_require__(/*! ../../views/quick-add-node.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-node.html");
  var cloneForeignsourceView = __webpack_require__(/*! ../../views/clone-foreignsource.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/clone-foreignsource.html");
  angular.module('onms-requisitions').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  /**
  * @ngdoc controller
  * @name RequisitionsController
  * @module onms-requisitions
  *
  * @description The controller for manage all the requisitions (list/add/remove/synchronize)
  *
  * @requires $scope Angular local scope
  * @requires $filter Angular filter
  * @requires $cookies Angular cookies
  * @requires $window Document window
  * @requires $uibModal Angular UI modal
  * @required Configuration The configuration object
  * @requires RequisitionsService The requisitions service
  * @requires SynchronizeService The synchronize service
  * @requires growl The growl plugin for instant notifications
  */.controller('RequisitionsController', ['$scope', '$filter', '$cookies', '$window', '$uibModal', 'Configuration', 'DateFormatterService', 'RequisitionsService', 'SynchronizeService', 'growl', function ($scope, $filter, $cookies, $window, $uibModal, Configuration, DateFormatterService, RequisitionsService, SynchronizeService, growl) {
    /**
    * @description The timing status.
    *
    * @ngdoc property
    * @name RequisitionsController#timingStatus
    * @propertyOf RequisitionsController
    * @returns {object} The timing status object
    */
    $scope.timingStatus = RequisitionsService.getTiming();

    /**
    * @description The load flag.
    *
    * @ngdoc property
    * @name RequisitionsController#loaded
    * @propertyOf RequisitionsController
    * @returns {boolean} True, if the requisitions have been loaded.
    */
    $scope.loaded = false;

    /**
    * @description The requisitions data
    *
    * @ngdoc property
    * @name RequisitionsController#requisitionsData
    * @propertyOf RequisitionsController
    * @returns {object} The requisitions data
    */
    $scope.requisitionsData = {
      requisitions: []
    };

    /**
    * @description The filtered version of the requisitions list
    *
    * @ngdoc property
    * @name RequisitionsController#filteredRequisitions
    * @propertyOf RequisitionsController
    * @returns {array} The filtered array
    */
    $scope.filteredRequisitions = [];

    /**
    * @description The amount of items per page for pagination (defaults to 10)
    *
    * @ngdoc property
    * @name RequisitionsController#pageSize
    * @propertyOf RequisitionsController
    * @returns {integer} The page size
    */
    $scope.pageSize = 10;

    /**
    * @description The maximum size of pages for pagination (defaults to 5)
    *
    * @ngdoc property
    * @name RequisitionControllers#maxSize
    * @propertyOf RequisitionsController
    * @returns {integer} The maximum size
    */
    $scope.maxSize = 5;

    /**
    * @description The total amount of items for pagination (defaults to 0)
    *
    * @ngdoc property
    * @name RequisitionControllers#maxSize
    * @propertyOf RequisitionsController
    * @returns {integer} The total items
    */
    $scope.totalItems = 0;

    /**
    * @description Shows an error to the user
    *
    * @name RequisitionsController:errorHandler
    * @ngdoc method
    * @methodOf RequisitionsController
    * @param {string} message The error message
    */
    $scope.errorHandler = function (message) {
      growl.error(message, {
        ttl: 10000
      });
    };

    /**
    * @description Quick add a new node
    *
    * @name RequisitionsController:quickAddNode
    * @ngdoc method
    * @methodOf RequisitionsController
    */
    $scope.quickAddNode = function () {
      var availableForeignSources = [];
      (0, _forEach.default)(angular).call(angular, $scope.requisitionsData.requisitions, function (r) {
        availableForeignSources.push(r.foreignSource);
      });
      var modalInstance = $uibModal.open({
        backdrop: 'static',
        keyboard: false,
        controller: 'QuickAddNodeModalController',
        templateUrl: quickAddNodeView,
        size: 'lg',
        resolve: {
          foreignSources: function foreignSources() {
            return availableForeignSources;
          }
        }
      });
      modalInstance.result.then(function (node) {
        var r = $scope.requisitionsData.getRequisition(node.foreignSource);
        r.setNode(node);
      });
    };

    /**
    * @description Clones the detectors and policies of a specific requisition
    *
    * @name RequisitionsController:clone
    * @ngdoc method
    * @methodOf RequisitionsController
    * @param {string} foreignSource The name of the requisition
    */
    $scope.clone = function (_foreignSource) {
      var _availableForeignSources = [];
      (0, _forEach.default)(angular).call(angular, $scope.requisitionsData.requisitions, function (r) {
        if (r.foreignSource !== _foreignSource) {
          _availableForeignSources.push(r.foreignSource);
        }
      });
      var modalInstance = $uibModal.open({
        backdrop: 'static',
        keyboard: false,
        controller: 'CloneForeignSourceController',
        templateUrl: cloneForeignsourceView,
        resolve: {
          foreignSource: function foreignSource() {
            return _foreignSource;
          },
          availableForeignSources: function availableForeignSources() {
            return _availableForeignSources;
          }
        }
      });
      modalInstance.result.then(function (targetForeignSource) {
        bootbox.confirm('This action will override the existing foreign source definition for the requisition named ' + _.escape(targetForeignSource) + ', using ' + _.escape(_foreignSource) + ' as a template. Are you sure you want to continue ? This cannot be undone.', function (ok) {
          if (!ok) {
            return;
          }
          RequisitionsService.startTiming();
          RequisitionsService.cloneForeignSourceDefinition(_foreignSource, targetForeignSource).then(function () {
            // success
            growl.success('The foreign source definition for ' + _.escape(_foreignSource) + ' has been cloned to ' + _.escape(targetForeignSource));
          }, $scope.errorHandler);
        });
      });
    };

    /**
    * @description Adds a new requisition on the server.
    *
    * A dialog box will be displayed to request the name of the requisition to the user.
    *
    * @name RequisitionsController:add
    * @ngdoc method
    * @methodOf RequisitionsController
    */
    $scope.add = function () {
      bootbox.prompt('Please enter the name for the new requisition', function (foreignSource) {
        if (foreignSource) {
          // Validate Requisition
          if (foreignSource.match(/[/\\?:&*'"]/)) {
            bootbox.alert('Cannot add the requisition ' + _.escape(foreignSource) + ' because the following characters are invalid:<br/>:, /, \\, ?, &, *, \', "');
            return;
          }
          var r = $scope.requisitionsData.getRequisition(foreignSource);
          if (r) {
            bootbox.alert('Cannot add the requisition ' + _.escape(foreignSource) + ' because there is already a requisition with that name');
            return;
          }
          // Create Requisition
          RequisitionsService.addRequisition(foreignSource).then(function (r) {
            // success
            growl.success('The requisition ' + _.escape(r.foreignSource) + ' has been created.');
          }, $scope.errorHandler);
        }
      });
    };

    /**
    * @description Edits the foreign source definition of an existing requisition
    *
    * @name RequisitionsController:editForeignSource
    * @ngdoc method
    * @methodOf RequisitionsController
    * @param {string} foreignSource The name of the requisition
    */
    $scope.editForeignSource = function (foreignSource) {
      $window.location.href = Configuration.baseHref + '#/requisitions/' + encodeURIComponent(foreignSource) + '/foreignSource';
    };

    /**
    * @description Goes to the edit page of an existing requisition (navigation)
    *
    * @name RequisitionsController:edit
    * @ngdoc method
    * @methodOf RequisitionsController
    * @param {string} foreignSource The name of the requisition
    */
    $scope.edit = function (foreignSource) {
      $window.location.href = Configuration.baseHref + '#/requisitions/' + encodeURIComponent(foreignSource);
    };

    /**
    * @description Requests the synchronization/import of a requisition on the server
    *
    * A dialog box is displayed to request to the user if the scan phase should be triggered or not.
    *
    * @name RequisitionsController:synchronize
    * @ngdoc method
    * @methodOf RequisitionsController
    * @param {object} requisition The requisition object
    */
    $scope.synchronize = function (requisition) {
      RequisitionsService.startTiming();
      SynchronizeService.synchronize(requisition, $scope.errorHandler);
    };

    /**
    * @description Refreshes the deployed statistics of a requisition on the server
    *
    * @name RequisitionsController:refresh
    * @ngdoc method
    * @methodOf RequisitionsController
    * @param {object} requisition The requisition object
    */
    $scope.refresh = function (requisition) {
      RequisitionsService.startTiming();
      RequisitionsService.updateDeployedStatsForRequisition(requisition).then(function () {
        // success
        growl.success('The deployed statistics for ' + _.escape(requisition.foreignSource) + ' has been updated.');
      }, $scope.errorHandler);
    };

    /**
    * @description Removes all the nodes form the requisition on the server
    *
    * @name RequisitionsController:removeAllNodes
    * @ngdoc method
    * @methodOf RequisitionsController
    * @param {string} foreignSource The name of the requisition
    */
    $scope.removeAllNodes = function (foreignSource) {
      bootbox.confirm('Are you sure you want to remove all the nodes from ' + _.escape(foreignSource) + '?', function (ok) {
        if (ok) {
          RequisitionsService.startTiming();
          RequisitionsService.removeAllNodesFromRequisition(foreignSource).then(function () {
            // success
            growl.success('All the nodes from ' + _.escape(foreignSource) + ' have been removed, and the requisition has been synchronized.');
            var req = $scope.requisitionsData.getRequisition(foreignSource);
            req.reset();
          }, $scope.errorHandler);
        }
      });
    };

    /**
    * @description Removes a requisition on the server
    *
    * @name RequisitionsController:delete
    * @ngdoc method
    * @methodOf RequisitionsController
    * @param {string} foreignSource The name of the requisition
    */
    $scope.delete = function (foreignSource) {
      bootbox.confirm('Are you sure you want to remove the requisition ' + _.escape(foreignSource) + '?', function (ok) {
        if (ok) {
          RequisitionsService.startTiming();
          RequisitionsService.deleteRequisition(foreignSource).then(function () {
            // success
            growl.success('The requisition ' + _.escape(foreignSource) + ' has been deleted.');
          }, $scope.errorHandler);
        }
      });
    };

    /**
    * @description Edits the default foreign source definition (navigation)
    *
    * @name RequisitionsController:editDefaultForeignSource
    * @ngdoc method
    * @methodOf RequisitionsController
    */
    $scope.editDefaultForeignSource = function () {
      $window.location.href = Configuration.baseHref + '#/requisitions/default/foreignSource';
    };

    /**
    * @description Resets the default set of detectors and policies
    *
    * @name RequisitionsController:resetDefaultForeignSource
    * @ngdoc method
    * @methodOf RequisitionsController
    */
    $scope.resetDefaultForeignSource = function () {
      bootbox.confirm('Are you sure you want to reset the default foreign source definition ?', function (ok) {
        if (ok) {
          RequisitionsService.startTiming();
          RequisitionsService.deleteForeignSourceDefinition('default').then(function () {
            // success
            growl.success('The default foreign source definition has been reseted.');
            $scope.initialize();
          }, $scope.errorHandler);
        }
      });
    };

    /**
    * @description Refreshes the requisitions from the server
    *
    * There are two main actions:
    * - Retrieve all the requisitions from the server ignoring the current state.
    * - Retrieve only the deployed statistics, and update the current requisitions.
    *
    * @name RequisitionsController:refreshData
    * @ngdoc method
    * @methodOf RequisitionsController
    */
    $scope.refreshData = function () {
      bootbox.dialog({
        message: 'Are you sure you want to refresh the content of the page ?<br/><hr/>' + 'Choose <b>Reload Everything</b> to retrieve all the requisitions from the server (any existing unsaved change will be lost).<br/>' + 'Choose <b>Reload Deployed Data</b> to retrieve the deployed statistics and update the UI.<br/>' + 'Choose <b>Cancel</b> to abort the request.',
        title: 'Refresh',
        buttons: {
          reloadAll: {
            label: 'Reload Everything',
            className: 'btn-primary',
            callback: function callback() {
              $scope.refreshRequisitions();
            }
          },
          reloadDeployed: {
            label: 'Reload Deployed Data',
            className: 'btn-secondary',
            callback: function callback() {
              $scope.refreshDeployedStats();
            }
          },
          main: {
            label: 'Cancel',
            className: 'btn-secondary'
          }
        }
      });
    };

    /**
    * @description Refreshes the deployed statistics for all the requisitions from the server
    *
    * @name RequisitionsController:refreshDeployedStats
    * @ngdoc method
    * @methodOf RequisitionsController
    */
    $scope.refreshDeployedStats = function () {
      RequisitionsService.startTiming();
      growl.success('Refreshing deployed statistics...');
      RequisitionsService.updateDeployedStats($scope.requisitionsData).then(function () {
        // success
        growl.success('The deployed statistics has been updated.');
      }, $scope.errorHandler);
    };

    /**
    * @description Refreshes all the requisitions from the server
    *
    * @name RequisitionsController:refreshRequisitions
    * @ngdoc method
    * @methodOf RequisitionsController
    */
    $scope.refreshRequisitions = function () {
      bootbox.confirm('Are you sure you want to reload all the requisitions?<br/>All current changes will be lost.', function (ok) {
        if (ok) {
          RequisitionsService.startTiming();
          growl.success('Refreshing requisitions...');
          RequisitionsService.clearCache();
          $scope.requisitionsData = {
            requisitions: []
          };
          $scope.initialize();
        }
      });
    };

    /**
     * @description Updates the pagination variables for the requisitions.
     *
     * @name RequisitionsController:updateFilteredNodes
     * @ngdoc method
     * @methodOf RequisitionsController
     */
    $scope.updateFilteredRequisitions = function () {
      $scope.currentPage = 1;
      $scope.totalItems = $scope.filteredRequisitions.length;
    };

    /**
     * @description Saves the page size on a cookie
     *
     * @name RequisitionController:savePageSize
     * @ngdoc method
     * @methodOf RequisitionController
     */
    $scope.savePageSize = function () {
      $cookies.put('requisitions_page_size', $scope.pageSize);
    };

    /**
    * @description Initializes the local requisitions list from the server
    *
    * @name RequisitionsController:initialize
    * @ngdoc method
    * @methodOf RequisitionsController
    */
    $scope.initialize = function () {
      var value = $cookies.get('requisitions_page_size');
      if (value) {
        $scope.pageSize = value;
      }
      $scope.loaded = false;
      DateFormatterService.formatter.finally(function () {
        RequisitionsService.getRequisitions().then(function (data) {
          // success
          $scope.requisitionsData = data;
          $scope.filteredRequisitions = $scope.requisitionsData.requisitions;
          $scope.updateFilteredRequisitions();
          $scope.loaded = true;
          growl.success('Loaded ' + $scope.requisitionsData.requisitions.length + ' requisitions...');
        }, $scope.errorHandler);
      });
    };

    /**
    * @description Watch for filter changes in order to update the requisitions list and updates the pagination control
    *
    * @name RequisitionsController:reqFilter
    * @ngdoc event
    * @methodOf RequisitionsController
    */
    $scope.$watch('reqFilter', function () {
      $scope.filteredRequisitions = $filter('filter')($scope.requisitionsData.requisitions, $scope.reqFilter);
      $scope.updateFilteredRequisitions();
    });

    // Initialization

    if ($scope.filteredRequisitions.length === 0) {
      $scope.initialize();
    }
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/directives/requisitionConstraints.js":
/*!****************************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/directives/requisitionConstraints.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _trim = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _require = __webpack_require__(/*! ../../../../../vendor/ipaddress-js */ "./src/main/assets/js/vendor/ipaddress-js.js"),
  isValidIPAddress = _require.isValidIPAddress;
var _ = __webpack_require__(/*! ../../../../../../../../../node_modules/lodash/lodash */ "./node_modules/lodash/lodash.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  angular.module('onms-requisitions')

  /**
  * @ngdoc directive
  * @name validIpAddress
  * @module onms-requisitions
  *
  * @description A directive to verify IPv4 and IPv6 addresses using a regular expression.
  * Also verifies if the given IP is unique on the node (to avoid duplicates). For this purpose,
  * it requires an array defined on the controller scope called ipBlackList if you want to make
  * the field invalid if the value is listed.
  */.directive('validIpAddress', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function link(scope, element, attrs, ctrl) {
        ctrl.$parsers.unshift(function (ipAddress) {
          var _context;
          var found = scope.ipBlackList && (0, _indexOf.default)(_context = scope.ipBlackList).call(_context, ipAddress) !== -1;
          if (found) {
            // It has to be unique
            ctrl.$setValidity('valid', false);
            return undefined;
          }
          if (isValidIPAddress(ipAddress)) {
            ctrl.$setValidity('valid', true);
            return ipAddress;
          }
          ctrl.$setValidity('valid', false);
          return undefined;
        });
      }
    };
  })

  /**
  * @ngdoc directive
  * @name validService
  * @module onms-requisitions
  *
  * @description A directive to verify if the given service is unique on the IP Interface.
  * This must be used on interface.html in conjunction with InterfaceController
  */.directive('validService', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function link(scope, element, attrs, ctrl) {
        ctrl.$parsers.unshift(function (serviceName) {
          var found = false;
          if (scope.requisitionInterface && scope.requisitionInterface.services) {
            (0, _forEach.default)(angular).call(angular, scope.requisitionInterface.services, function (s) {
              if (s.$$hashKey !== scope.service.$$hashKey && s.name === serviceName) {
                found = true;
              }
            });
          }
          if (found) {
            ctrl.$setValidity('unique', false);
            return undefined;
          }
          ctrl.$setValidity('unique', true);
          return serviceName;
        });
      }
    };
  })

  /**
   * @ngdoc directive
   * @name validForeignId
   * @module onms-requisitions
   *
   * @description A directive to verify if the given foreign ID is unique on the requisition.
   * This must be used on node.html in conjunction with NodeController.
   * It requires an array defined on the controller scope called foreignIdBlackList if you want to make the field invalid if the value is listed.
   */.directive('validForeignId', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function link(scope, element, attrs, ctrl) {
        ctrl.$parsers.unshift(function (foreignId) {
          var _context2;
          var found = scope.foreignIdBlackList && (0, _indexOf.default)(_context2 = scope.foreignIdBlackList).call(_context2, foreignId) !== -1;
          if (found || foreignId.match(/[/\\?:&*'"]/)) {
            ctrl.$setValidity('valid', false);
            return undefined;
          }
          ctrl.$setValidity('valid', true);
          return foreignId;
        });
      }
    };
  })

  /**
  * @ngdoc directive
  * @name validCategory
  * @module onms-requisitions
  *
  * @description A directive to verify if the given category is unique on the node.
  * This must be used on node.html in conjunction with NodeController
  */.directive('validCategory', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      transclude: true,
      scope: {
        'category': '=validCategory'
      },
      link: function link(scope, element, attrs, ctrl) {
        ctrl.$parsers.unshift(function (categoryName) {
          if (!categoryName || (0, _trim.default)(categoryName).call(categoryName) === '') {
            ctrl.$setValidity('unique', false);
            return undefined;
          }
          var found = false;
          (0, _forEach.default)(angular).call(angular, scope.$parent.node.categories, function (c) {
            if (c.$$hashKey !== scope.category.$$hashKey && c.name === categoryName) {
              found = true;
            }
          });
          if (found) {
            ctrl.$setValidity('unique', false);
            return undefined;
          }
          ctrl.$setValidity('unique', true);
          return categoryName;
        });
      }
    };
  })

  /**
   * @ngdoc directive
   * @name validMetaDataKey
   * @module onms-requisitions
   *
   * @description A directive to verify if the meta-data key is unique with
   * a specific scope & context.
   *
   * This directive is intended to be used in the modal dialog used to edit
   * meta-data entries.
   *
   */.directive('validMetaDataKey', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      transclude: true,
      scope: {
        'entry': '=validMetaDataKey'
      },
      link: function link(scope, element, attrs, ctrl) {
        ctrl.$parsers.unshift(function (keyName) {
          var isUnique = true;
          if (keyName !== scope.$parent.originalKey) {
            // The key has changed, we need to validate it's uniqueness
            scope.$parent.resolveScopeReferences(scope.entry);
            var existingKeys = scope.$parent.node.metaData.getKeysInScopeOf(scope.entry);
            isUnique = (0, _indexOf.default)(_).call(_, existingKeys, keyName) < 0;
          }
          if (!isUnique) {
            ctrl.$setValidity('unique', false);
            return undefined;
          }
          ctrl.$setValidity('unique', true);
          return keyName;
        });
      }
    };
  });
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/filters/startFrom.js":
/*!************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/filters/startFrom.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
var _slice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  var _context;
  (0, _filter.default)(_context = angular.module('onms-requisitions')

  /**
  * @ngdoc filter
  * @name startFrom
  * @module onms-requisitions
  *
  * @description A filter for paginated content
  *
  * @param {array} input The source array to filter
  * @param {integer} start The position index to start from
  *
  * @returns {array} the filtered array
  */).call(_context, 'startFrom', function () {
    return function (input, start) {
      var s = Number(start);
      if (input) {
        return input.length < s ? input : (0, _slice.default)(input).call(input, s);
      }
      return [];
    };
  });
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/MetaDataConstants.js":
/*!******************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/MetaDataConstants.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author Jesse White <jesse@opennms.org>
 * @copyright 2019 The OpenNMS Group, Inc.
 */

/**
 * Available scopes for meta-data entries.
 */
var Scope = {
  NODE: 'node',
  INTERFACE: 'interface',
  SERVICE: 'service'
};
var RequisitionContext = 'requisition';
module.exports = {
  Scope: Scope,
  RequisitionContext: RequisitionContext
};

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/QuickNode.js":
/*!**********************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/QuickNode.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _trim = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var RequisitionNode = __webpack_require__(/*! ./RequisitionNode */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionNode.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014 The OpenNMS Group, Inc.
*/

/**
* @ngdoc object
* @name QuickNode
* @module onms-requisitions
* @constructor
*/
var QuickNode = function QuickNode() {
  'use strict';

  var self = this;
  self.foreignSource = null;
  self.foreignId = String(new Date().getTime());
  self.nodeLabel = null;
  self.ipAddress = null;
  self.snmpCommunity = 'public';
  self.snmpVersion = 'v2c';
  self.noSnmp = false;
  self.deviceUsername = null;
  self.devicePassword = null;
  self.enablePassword = null;
  self.accessMethod = null;
  self.autoEnable = false;
  self.categories = [];

  /**
  * @description Creates a new RequisitionNode object based on the current settings.
  *
  * @name QuickNode:createRequisitionedNode
  * @ngdoc method
  * @methodOf QuickNode
  * @returns {object} the new RequisitionNode Object
  */
  self.createRequisitionedNode = function () {
    var _context, _context2, _context3, _context4;
    var reqNode = new RequisitionNode(self.foreignSource, {
      'foreign-id': self.foreignId,
      'node-label': self.nodeLabel,
      'interface': [{
        'ip-addr': self.ipAddress,
        'snmp-primary': self.noSnmp ? 'N' : 'P'
      }],
      'category': self.categories
    }, false);
    if (self.deviceUsername && (0, _trim.default)(_context = self.deviceUsername).call(_context) !== '') {
      reqNode.assets.push({
        'name': 'username',
        'value': self.deviceUsername
      });
    }
    if (self.devicePassword && (0, _trim.default)(_context2 = self.devicePassword).call(_context2) !== '') {
      reqNode.assets.push({
        'name': 'password',
        'value': self.devicePassword
      });
    }
    if (self.enablePassword && (0, _trim.default)(_context3 = self.enablePassword).call(_context3) !== '') {
      reqNode.assets.push({
        'name': 'enable',
        'value': self.enablePassword
      });
    }
    if (self.accessMethod && (0, _trim.default)(_context4 = self.accessMethod).call(_context4) !== '') {
      reqNode.assets.push({
        'name': 'connection',
        'value': self.accessMethod
      });
    }
    if (self.autoEnable) {
      reqNode.assets.push({
        'name': 'autoenable',
        'value': 'A'
      });
    }
    return reqNode;
  };

  /**
  * @description Adds a new category to the node
  *
  * @name QuickNode:addNewCategory
  * @ngdoc method
  * @methodOf QuickNode
  * @returns {object} the new service Object
  */
  self.addNewCategory = function () {
    self.categories.push({
      name: ''
    });
    return self.categories.length - 1;
  };
  self.className = 'QuickNode';
  return self;
};
module.exports = QuickNode;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/Requisition.js":
/*!************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/Requisition.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
var _now = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/date/now */ "./node_modules/@babel/runtime-corejs3/core-js-stable/date/now.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var RequisitionNode = __webpack_require__(/*! ./RequisitionNode */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionNode.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014 The OpenNMS Group, Inc.
*/

/**
* @ngdoc object
* @name Requisition
* @module onms-requisitions
* @param {object} requisition an OpenNMS requisition JSON object
* @param {boolean} isDeployed true if the requisition has been deployed
* @constructor
*/
var Requisition = function Requisition(requisition, isDeployed) {
  'use strict';

  var self = this;

  /**
   * @description The deployed flag
   * @ngdoc property
   * @name Requisition#deployed
   * @propertyOf Requisition
   * @returns {boolean} true, if the requisition has been deployed
   */
  self.deployed = isDeployed;

  /**
   * @description The modified flag
   * @ngdoc property
   * @name Requisition#modified
   * @propertyOf Requisition
   * @returns {boolean} true, if the requisition has been modified
   */
  self.modified = false;

  /**
   * @description The name of the requisition (the foreign source)
   * @ngdoc property
   * @name Requisition#foreignSource
   * @propertyOf Requisition
   * @returns {string} the foreign source
   */
  self.foreignSource = requisition['foreign-source'];

  /**
   * @description The last modication date of the requisition
   * @ngdoc property
   * @name Requisition#dateStamp
   * @propertyOf Requisition
   * @returns {string} the last modification date
   */
  self.dateStamp = requisition['date-stamp'] || (0, _now.default)();

  /**
   * @description The last import date of the requisition
   * @ngdoc property
   * @name Requisition#lastImport
   * @propertyOf Requisition
   * @returns {string} the last import date
   */
  self.lastImport = requisition['last-import'];

  /**
   * @description The configured nodes array
   * @ngdoc property
   * @name Requisition#nodes
   * @propertyOf Requisition
   * @returns {array} The nodes array
   */
  self.nodes = [];
  (0, _forEach.default)(angular).call(angular, requisition.node, function (node) {
    var requisitionNode = new RequisitionNode(self.foreignSource, node, isDeployed);
    self.nodes.push(requisitionNode);
  });

  /**
   * @description The number of nodes stored on the database
   * @ngdoc property
   * @name Requisition#nodesInDatabase
   * @propertyOf Requisition
   * @returns {interger} number of nodes in the database
   */
  self.nodesInDatabase = 0;

  /**
   * @description The number of nodes defined on the requisition
   * @ngdoc property
   * @name Requisition#nodesDefined
   * @propertyOf Requisition
   * @returns {interger} number of nodes defined
   */
  self.nodesDefined = self.nodes.length;

  /**
  * @description Checks if the requisition has been changed
  *
  * @name Requisition:isModified
  * @ngdoc method
  * @methodOf Requisition
  * @returns {boolean} true if the requisition has been changed or modified.
  */
  self.isModified = function () {
    if (self.modified) {
      return true;
    }
    return !self.deployed;
  };

  /**
  * @description Gets the array possition for a particular node
  *
  * @name Requisition:indexOf
  * @ngdoc method
  * @param {string} foreignId The foreign ID of the node
  * @methodOf Requisition
  * @returns {integer} the index (-1 if the foreign ID doesn't exist)
  */
  self.indexOf = function (foreignId) {
    for (var i = 0; i < self.nodes.length; i++) {
      if (self.nodes[i].foreignId === foreignId) {
        return i;
      }
    }
    return -1;
  };

  /**
  * @description Gets a specific node object.
  *
  * @name Requisition:getNode
  * @ngdoc method
  * @param {string} foreignId The foreign ID of the node
  * @methodOf Requisition
  * @returns {object} the node object.
  */
  self.getNode = function (foreignId) {
    var idx = (0, _indexOf.default)(self).call(self, foreignId);
    return idx < 0 ? null : self.nodes[idx];
  };

  /**
  * @description Adds or replaces a node object.
  *
  * @name Requisition:setNode
  * @ngdoc method
  * @param {object} node The RequisitionNode object
  * @methodOf Requisition
  */
  self.setNode = function (node) {
    var idx = (0, _indexOf.default)(self).call(self, node.foreignId);
    if (idx < 0) {
      self.nodes.push(node);
      self.nodesDefined++;
    } else {
      self.nodes[idx] = node;
    }
    self.modified = true;
    self.dateStamp = (0, _now.default)();
  };

  /**
  * @description Marks the requisition as deployed
  *
  * @name Requisition:setDeployed
  * @ngdoc method
  * @param {boolean} deployed true, if the requisition has been deployed
  * @methodOf Requisition
  */
  self.setDeployed = function (deployed) {
    self.deployed = deployed;
    self.modified = false;
    (0, _forEach.default)(angular).call(angular, self.nodes, function (node) {
      node.deployed = deployed;
      node.modified = false;
    });
    self.lastImport = deployed ? (0, _now.default)() : null;
  };

  /**
  * @description Resets the content of the requisition
  *
  * @name Requisition:reset
  * @ngdoc method
  * @methodOf Requisition
  */
  self.reset = function () {
    self.nodes = [];
    self.nodesDefined = 0;
    self.nodesInDatabase = 0;
    self.modified = true;
    self.dateStamp = (0, _now.default)();
  };
  self.className = 'Requisition';
  return self;
};
module.exports = Requisition;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionInterface.js":
/*!*********************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionInterface.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014 The OpenNMS Group, Inc.
*/

var RequisitionService = __webpack_require__(/*! ./RequisitionService */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionService.js");

/**
* @ngdoc object
* @name RequisitionInterface
* @module onms-requisitions
* @param {Object} intf an OpenNMS interface JSON object
* @constructor
*/
var RequisitionInterface = function RequisitionInterface(intf) {
  'use strict';

  var self = this;

  /**
   * @description The IP Address of the interface
   * @ngdoc property
   * @name RequisitionInterface#ipAddress
   * @propertyOf RequisitionInterface
   * @returns {string} The IP Address of the interface
   */
  self.ipAddress = intf['ip-addr'];

  /**
   * @description The description of the interface
   * @ngdoc property
   * @name RequisitionInterface#description
   * @propertyOf RequisitionInterface
   * @returns {string} The description of the interface
   */
  self.description = intf['descr'];

  /**
   * @description The primary flag ('P' for primary, 'S' for secondary or 'N' for None)
   * @ngdoc property
   * @name RequisitionInterface#snmpPrimary
   * @propertyOf RequisitionInterface
   * @returns {string} The primary flag
   */
  self.snmpPrimary = intf['snmp-primary'];

  /**
   * @description The status of the interface (managed or unmanaged)
   * @ngdoc property
   * @name RequisitionInterface#status
   * @propertyOf RequisitionInterface
   * @returns {string} The status
   */
  self.status = 'managed';
  if (intf && intf['status']) {
    self.status = intf['status'] === '1' ? 'managed' : 'unmanaged';
  }

  /**
   * @description The array of services. Each service is an object with a name property, for example: { name: 'ICMP' }
   * @ngdoc property
   * @name RequisitionInterface#services
   * @propertyOf RequisitionInterface
   * @returns {array} The services
   */
  self.services = [];
  (0, _forEach.default)(angular).call(angular, intf['monitored-service'], function (svc) {
    self.services.push(new RequisitionService(svc));
  });
  self.className = 'RequisitionInterface';
  return self;
};
module.exports = RequisitionInterface;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionMetaData.js":
/*!********************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionMetaData.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _find = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js"));
var _map = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
* @author Dustin Frisch <dustin@opennms.org>
* @copyright 2019 The OpenNMS Group, Inc.
*/
var RequisitionMetaDataEntry = __webpack_require__(/*! ./RequisitionMetaDataEntry */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionMetaDataEntry.js");
var RequisitionInterface = __webpack_require__(/*! ./RequisitionInterface */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionInterface.js");
var RequisitionService = __webpack_require__(/*! ./RequisitionService */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionService.js");
var MetaDataConstants = __webpack_require__(/*! ./MetaDataConstants */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/MetaDataConstants.js");
var Scope = MetaDataConstants.Scope;

/**
* Container for all of the meta-data entries related to a specific node.
*
* @ngdoc object
* @name RequisitionMetaData
* @module onms-requisitions
* @param {Object} node an OpenNMS node JSON object
* @param {Object} requisitionNode RequisitionNode object
* @constructor
*/
var RequisitionMetaData = function RequisitionMetaData(node, requisitionNode) {
  'use strict';

  var self = this;

  /**
   * Contains all meta-data entries on the node that have context = 'requisition'
   */
  self.requisition = [];

  /**
   * Contains all meta-data entries on the node that have context != 'requisition'
   */
  self.other = [];
  var toMetaDataEntry = function toMetaDataEntry(entry) {
    var entryObj = new RequisitionMetaDataEntry();
    entryObj.context = entry.context;
    entryObj.key = entry.key;
    entryObj.value = entry.value;
    return entryObj;
  };

  // Flatten all the meta-data entries into a single list while preserving
  // the scope and objects they relate to
  var allEntries = [];
  (0, _forEach.default)(angular).call(angular, node['meta-data'], function (entry) {
    var entryObj = toMetaDataEntry(entry);
    entryObj.scope = Scope.NODE;
    allEntries.push(entryObj);
  });
  (0, _forEach.default)(angular).call(angular, node.interface, function (iff) {
    var ri = new RequisitionInterface(iff);
    // Interface level
    (0, _forEach.default)(angular).call(angular, iff['meta-data'], function (entry) {
      var entryObj = toMetaDataEntry(entry);
      entryObj.scope = Scope.INTERFACE;
      entryObj.scoped_interface = ri;
      allEntries.push(entryObj);
    });
    (0, _forEach.default)(angular).call(angular, iff['monitored-service'], function (svc) {
      // Service level
      (0, _forEach.default)(angular).call(angular, svc['meta-data'], function (entry) {
        var entryObj = toMetaDataEntry(entry);
        entryObj.scope = Scope.SERVICE;
        entryObj.scoped_interface = ri;
        entryObj.scoped_service = new RequisitionService(svc);
        allEntries.push(entryObj);
      });
    });
  });

  /**
   * Remove meta-data entries for any referenced entities
   * that no longer exist.
   */
  self.removeEntriesForMissingScopedEntities = function () {
    _.remove(self.requisition, function (entry) {
      return !self.doesReferencedEntityExist(entry);
    });
    _.remove(self.other, function (entry) {
      return !self.doesReferencedEntityExist(entry);
    });
  };

  /**
   * @param entry meta-data entry to verify
   */
  self.doesReferencedEntityExist = function (entry) {
    if (entry.scope === Scope.INTERFACE || entry.scope === Scope.SERVICE) {
      // Does an interface exist with the given IP address
      var iff = (0, _find.default)(_).call(_, requisitionNode.interfaces, function (iff) {
        return iff.ipAddress === entry.scoped_interface.ipAddress;
      });
      if (iff === undefined) {
        return false;
      }
      if (entry.scope === Scope.SERVICE) {
        // Does a service exist with the given name?
        var svc = (0, _find.default)(_).call(_, iff.services, function (svc) {
          return svc.name === entry.scoped_service.name;
        });
        if (svc === undefined) {
          return false;
        }
      }
    }
    return true;
  };
  self.addEntry = function (entry) {
    if (entry.context === MetaDataConstants.RequisitionContext) {
      self.requisition.push(entry);
    } else {
      self.other.push(entry);
    }
  };
  self.removeEntry = function (entry) {
    _.remove(self.requisition, function (existingEntry) {
      return existingEntry === entry;
    });
    _.remove(self.other, function (existingEntry) {
      return existingEntry === entry;
    });
  };
  (0, _forEach.default)(angular).call(angular, allEntries, function (entry) {
    self.addEntry(entry);
  });
  self.getOnmsMetaData = function (predicate) {
    var metaDataObject = [];
    (0, _forEach.default)(angular).call(angular, self.requisition, function (entry) {
      if (!predicate(entry)) {
        return;
      }
      metaDataObject.push({
        'context': MetaDataConstants.RequisitionContext,
        'key': entry.key,
        'value': entry.value
      });
    });
    (0, _forEach.default)(angular).call(angular, self.other, function (entry) {
      if (!predicate(entry)) {
        return;
      }
      metaDataObject.push({
        'context': entry.context,
        'key': entry.key,
        'value': entry.value
      });
    });
    return metaDataObject;
  };
  self.getOnmsMetaDataForNode = function () {
    return self.getOnmsMetaData(function (entry) {
      return entry.scope === Scope.NODE;
    });
  };
  self.getOnmsMetaDataForInterface = function (intf) {
    return self.getOnmsMetaData(function (entry) {
      return entry.scope === Scope.INTERFACE && entry.scoped_interface.ipAddress === intf.ipAddress;
    });
  };
  self.getOnmsMetaDataForService = function (intf, svc) {
    return self.getOnmsMetaData(function (entry) {
      return entry.scope === Scope.SERVICE && entry.scoped_interface.ipAddress === intf.ipAddress && entry.scoped_service.name === svc.name;
    });
  };

  /**
   * Used by the form validation constraint to return the set of keys
   * that exist in the same scope as the given entry
   *
   * @param lookup
   * @returns {string[]}
   */
  self.getKeysInScopeOf = function (lookup) {
    var metaData = self.getOnmsMetaData(function (entry) {
      // Start by matching both the scope and context
      if (entry.scope !== lookup.scope || entry.context !== lookup.context) {
        return false;
      }
      if (lookup.scope === Scope.INTERFACE || lookup.scope === Scope.SERVICE) {
        // The interfaces must match
        if (entry.scoped_interface.ipAddress !== lookup.scoped_interface.ipAddress) {
          return false;
        }
        if (lookup.scope === Scope.SERVICE) {
          // The services must match
          if (entry.scoped_service.name !== lookup.scoped_service.name) {
            return false;
          }
        }
      }
      return true;
    });
    return (0, _map.default)(_).call(_, metaData, function (entry) {
      return entry.key;
    });
  };
  self.className = 'RequisitionMetaData';
  return self;
};
module.exports = RequisitionMetaData;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionMetaDataEntry.js":
/*!*************************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionMetaDataEntry.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/**
* @author Jesse White <jesse@opennms.org>
* @copyright 2019 The OpenNMS Group, Inc.
*/
var MetaDataConstants = __webpack_require__(/*! ./MetaDataConstants */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/MetaDataConstants.js");
var Scope = MetaDataConstants.Scope;

/**
* @ngdoc object
* @name RequisitionMetaDataEntry
* @module onms-requisitions
* @constructor
*/
var RequisitionMetaDataEntry = function RequisitionMetaDataEntry() {
  'use strict';

  var self = this;

  // Default to the 'node' scope
  self.scope = Scope.NODE;

  // Must be set to the related RequisitionInterface object when the scope is set to 'interface' or 'service'
  self.scoped_interface = null;

  // Must be set to the related RequisitionService object when the scope is set to 'service'
  self.scoped_service = null;

  // Default to using the 'requisition' context
  self.context = MetaDataConstants.RequisitionContext;
  self.key = null;
  self.value = null;
  self.displayScope = function () {
    if (self.scope === Scope.INTERFACE) {
      return 'Interface';
    } else if (self.scope === Scope.SERVICE) {
      return 'Service';
    }
    return 'Node';
  };
  self.displayInterface = function () {
    if (self.scoped_interface !== null) {
      return self.scoped_interface.ipAddress;
    }
    return null;
  };
  self.displayService = function () {
    if (self.scoped_service !== null) {
      return self.scoped_service.name;
    }
    return null;
  };
  self.className = 'RequisitionMetaDataEntry';
  return self;
};
module.exports = RequisitionMetaDataEntry;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionNode.js":
/*!****************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionNode.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _trim = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014 The OpenNMS Group, Inc.
*/

var RequisitionInterface = __webpack_require__(/*! ./RequisitionInterface */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionInterface.js");
var RequisitionMetaData = __webpack_require__(/*! ./RequisitionMetaData */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionMetaData.js");

// Internal function for initialization purposes
var isEmpty = function isEmpty(str) {
  return str === null || str === undefined || str.length === 0;
};

/**
* @ngdoc object
* @name RequisitionNode
* @module onms-requisitions
* @param {string} foreignSource the name of the foreign source (a.k.a. provisioning group)
* @param {Object} node an OpenNMS node JSON object
* @param {boolean} isDeployed true if the node has been deployed
* @constructor
*/
var RequisitionNode = function RequisitionNode(foreignSource, node, isDeployed) {
  'use strict';

  var self = this;

  /**
   * @description the foreign source
   * @ngdoc property
   * @name RequisitionNode#foreignSource
   * @propertyOf RequisitionNode
   * @returns {string} the foreign source
   */
  self.foreignSource = foreignSource;

  /**
   * @description The deployed flag
   * @ngdoc property
   * @name RequisitionNode#deployed
   * @propertyOf RequisitionNode
   * @returns {boolean} true, if the node has been deployed
   */
  self.deployed = isDeployed;

  /**
   * @description The modified flag
   * @ngdoc property
   * @name RequisitionNode#modified
   * @propertyOf RequisitionNode
   * @returns {boolean} true, if the node has been modified
   */
  self.modified = false;

  /**
   * @description The foreign Id
   * @ngdoc property
   * @name RequisitionNode#foreignId
   * @propertyOf RequisitionNode
   * @returns {string} The foreign Id
   */
  self.foreignId = node['foreign-id'];
  if (isEmpty(self.foreignId)) {
    self.foreignId = String(new Date().getTime());
  }

  /**
   * @description The node's label
   * @ngdoc property
   * @name RequisitionNode#nodeLabel
   * @propertyOf RequisitionNode
   * @returns {string} the node's label
   */
  self.nodeLabel = node['node-label'];

  /**
   * @description The location of the node
   * @ngdoc property
   * @name RequisitionNode#location
   * @propertyOf RequisitionNode
   * @returns {string} The location
   */
  self.location = node['location'];

  /**
   * @description The city where the node is located
   * @ngdoc property
   * @name RequisitionNode#city
   * @propertyOf RequisitionNode
   * @returns {string} The city
   */
  self.city = node['city'];

  /**
   * @description The building where the node is located
   * @ngdoc property
   * @name RequisitionNode#building
   * @propertyOf RequisitionNode
   * @returns {string} The building
   */
  self.building = node['building'];

  /**
   * @description The parent foreign source (for path outages), required if the parent node exist on a different requisition.
   * @ngdoc property
   * @name RequisitionNode#parentForeignSource
   * @propertyOf RequisitionNode
   * @returns {string} The parent foreign source
   */
  self.parentForeignSource = node['parent-foreign-source'];

  /**
   * @description The parent foreign ID (for path outages), to uniquely identify the parent node (can not be used if parentNodeLabel is defined)
   * @ngdoc property
   * @name RequisitionNode#parentForeignId
   * @propertyOf RequisitionNode
   * @returns {string} The parent foreign ID
   */
  var _parentForeignId = node['parent-foreign-id'];
  self.parentForeignId = isEmpty(_parentForeignId) ? null : _parentForeignId;

  /**
   * @description The parent node label (for path outages), to uniquely identify the parent node (can not be used if parentForeignId is defined)
   * @ngdoc property
   * @name RequisitionNode#parentNodeLabel
   * @propertyOf RequisitionNode
   * @returns {string} The parent foreign Label
   */
  var _parentNodeLabel = node['parent-node-label'];
  self.parentNodeLabel = isEmpty(_parentNodeLabel) ? null : _parentNodeLabel;

  /**
   * @description The array of interfaces
   * @ngdoc property
   * @name RequisitionNode#interfaces
   * @propertyOf RequisitionNode
   * @returns {array} The interfaces
   */
  self.interfaces = [];

  /**
   * @description The array of categories
   * @ngdoc property
   * @name RequisitionNode#categories
   * @propertyOf RequisitionNode
   * @returns {array} The categories
   */
  self.categories = [];

  /**
   * @description The array of assets
   * @ngdoc property
   * @name RequisitionNode#assets
   * @propertyOf RequisitionNode
   * @returns {array} The assets
   */
  self.assets = [];
  (0, _forEach.default)(angular).call(angular, node['interface'], function (intf) {
    self.interfaces.push(new RequisitionInterface(intf));
  });
  (0, _forEach.default)(angular).call(angular, node['asset'], function (asset) {
    self.assets.push(asset);
  });
  (0, _forEach.default)(angular).call(angular, node['category'], function (category) {
    self.categories.push(category);
  });

  /**
   * Initialize the meta-data *after* the interfaces are set.
   *
   * @description The meta-data entries
   * @ngdoc property
   * @name RequisitionNode#metaData
   * @propertyOf RequisitionNode
   * @returns {object} The meta-data entries
   */
  self.metaData = new RequisitionMetaData(node, this);

  /**
  * @description Check if the node has been changed
  *
  * @name RequisitionNode:isModified
  * @ngdoc method
  * @methodOf RequisitionNode
  * @returns {boolean} true if the node has been changed or modified.
  */
  self.isModified = function () {
    if (self.modified) {
      return true;
    }
    return !self.deployed;
  };

  /**
  * @description Adds a new interface to the node
  *
  * @name RequisitionNode:addNewInterface
  * @ngdoc method
  * @methodOf RequisitionNode
  * @returns {object} the new interface Object
  */
  self.addNewInterface = function () {
    var found = false;
    (0, _forEach.default)(angular).call(angular, self.interfaces, function (intf) {
      if (intf.snmpPrimary === 'P') {
        found = true;
      }
    });
    self.interfaces.push(new RequisitionInterface({
      'snmp-primary': found ? 'N' : 'P'
    }));
    return self.interfaces.length - 1;
  };

  /**
  * @description Adds a new asset to the node
  *
  * @name RequisitionNode:addNewAsset
  * @ngdoc method
  * @methodOf RequisitionNode
  * @returns {object} the new service Object
  */
  self.addNewAsset = function () {
    self.assets.push({
      name: '',
      value: ''
    });
    return self.assets.length - 1;
  };

  /**
  * @description Adds a new category to the node
  *
  * @name RequisitionNode:addNewCategory
  * @ngdoc method
  * @methodOf RequisitionNode
  * @returns {object} the new service Object
  */
  self.addNewCategory = function () {
    self.categories.push({
      name: ''
    });
    return self.categories.length - 1;
  };

  /**
  * @description Gets the primary IP address if exist.
  *
  * @name RequisitionNode:getPrimaryIpAddress
  * @ngdoc method
  * @methodOf RequisitionNode
  * @returns {string} the primary IP address (null if it doesn't exist)
  */
  self.getPrimaryIpAddress = function () {
    var ip = null;
    (0, _forEach.default)(angular).call(angular, self.interfaces, function (intf) {
      if (intf.snmpPrimary === 'P') {
        ip = intf.ipAddress;
      }
    });
    return ip;
  };

  /**
  * @description Checks if the node has parent information (for path outages).
  *
  * @name RequisitionNode:hasParentInformation
  * @ngdoc method
  * @methodOf RequisitionNode
  * @returns {boolean} true, if the node has parent information.
  */
  self.hasParentInformation = function () {
    var _context, _context2, _context3;
    if (self.parentForeignSource && (0, _trim.default)(_context = self.parentForeignSource).call(_context) !== '') {
      return true;
    }
    if (self.parentForeignId && (0, _trim.default)(_context2 = self.parentForeignId).call(_context2) !== '') {
      return true;
    }
    if (self.parentNodeLabel && (0, _trim.default)(_context3 = self.parentNodeLabel).call(_context3) !== '') {
      return true;
    }
    return false;
  };

  /**
  * @description Gets the OpenNMS representation of the requisitioned node
  *
  * @name RequisitionNode:getOnmsRequisitionNode
  * @ngdoc method
  * @methodOf RequisitionNode
  * @returns {object} the requisition Object
  */
  self.getOnmsRequisitionNode = function () {
    var nodeObject = {
      'foreign-id': self.foreignId,
      'node-label': self.nodeLabel,
      'location': self.location,
      'city': self.city,
      'building': self.building,
      'interface': [],
      'parent-foreign-source': self.parentForeignSource,
      'parent-foreign-id': self.parentForeignId,
      'parent-node-label': self.parentNodeLabel,
      'asset': [],
      'meta-data': self.metaData.getOnmsMetaDataForNode(),
      'category': []
    };
    (0, _forEach.default)(angular).call(angular, self.interfaces, function (intf) {
      var interfaceObject = {
        'ip-addr': intf.ipAddress,
        'descr': intf.description,
        'snmp-primary': intf.snmpPrimary,
        'status': intf.status || intf.status === 'managed' ? '1' : '3',
        'meta-data': self.metaData.getOnmsMetaDataForInterface(intf),
        'monitored-service': []
      };
      (0, _forEach.default)(angular).call(angular, intf.services, function (service) {
        var serviceObject = {
          'service-name': service.name,
          'meta-data': self.metaData.getOnmsMetaDataForService(intf, service)
        };
        interfaceObject['monitored-service'].push(serviceObject);
      });
      nodeObject['interface'].push(interfaceObject);
    });
    (0, _forEach.default)(angular).call(angular, self.assets, function (asset) {
      nodeObject['asset'].push(asset);
    });
    (0, _forEach.default)(angular).call(angular, self.categories, function (category) {
      nodeObject['category'].push(category);
    });
    return nodeObject;
  };
  self.className = 'RequisitionNode';
  return self;
};
module.exports = RequisitionNode;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionService.js":
/*!*******************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionService.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014 The OpenNMS Group, Inc.
*/

/**
* @ngdoc object
* @name RequisitionService
* @module onms-requisitions
* @param {Object} svc an OpenNMS service JSON object
* @constructor
*/
var RequisitionService = function RequisitionService(svc) {
  'use strict';

  var self = this;

  /**
   * @description The name of the service
   * @ngdoc property
   * @name RequisitionService#name
   * @propertyOf RequisitionService
   * @returns {string} The name of the service
   */
  self.name = svc['service-name'];
  self.className = 'RequisitionService';
  return self;
};
module.exports = RequisitionService;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionsData.js":
/*!*****************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionsData.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014 The OpenNMS Group, Inc.
*/

/**
* @ngdoc object
* @name RequisitionsData
* @module onms-requisitions
* @constructor
*/
var RequisitionsData = function RequisitionsData() {
  'use strict';

  var self = this;

  /**
   * @description The configured requisitions.
   * @ngdoc property
   * @name RequisitionsData#requisitions
   * @propertyOf RequisitionsData
   * @returns {array} The requisitions array
   */
  self.requisitions = [];

  /**
  * @description Gets the array possition for a particular node
  *
  * @name RequisitionsData:indexOf
  * @ngdoc method
  * @param {string} foreignSource The foreign source (a.k.a requisition name)
  * @methodOf RequisitionsData
  * @returns {integer} the index (-1 if the foreign source doesn't exist)
  */
  self.indexOf = function (foreignSource) {
    for (var i = 0; i < self.requisitions.length; i++) {
      if (self.requisitions[i].foreignSource === foreignSource) {
        return i;
      }
    }
    return -1;
  };

  /**
  * @description Gets the requisition object for a given foreign source.
  *
  * @name RequisitionsData:getRequisition
  * @ngdoc method
  * @param {string} foreignSource The foreign source (a.k.a requisition name)
  * @methodOf RequisitionsData
  * @returns {object} the requisition object.
  */
  self.getRequisition = function (foreignSource) {
    var idx = (0, _indexOf.default)(self).call(self, foreignSource);
    return idx < 0 ? null : self.requisitions[idx];
  };

  /**
  * @description Adds or replaces a requisition object.
  *
  * @name RequisitionsData:setRequisition
  * @ngdoc method
  * @param {object} requisition The Requisition object
  * @methodOf RequisitionsData
  */
  self.setRequisition = function (requisition) {
    var idx = (0, _indexOf.default)(self).call(self, requisition.foreignSource);
    if (idx < 0) {
      self.requisitions.push(requisition);
    } else {
      self.requisitions[idx] = requisition;
    }
  };
  self.className = 'RequisitionsData';
  return self;
};
module.exports = RequisitionsData;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js":
/*!****************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _now = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/date/now */ "./node_modules/@babel/runtime-corejs3/core-js-stable/date/now.js"));
var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
var _map = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"));
var _stringify = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js"));
var _trim = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"));
__webpack_require__(/*! ../../../../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014-2022 The OpenNMS Group, Inc.
*/

var RequisitionsData = __webpack_require__(/*! ../model/RequisitionsData */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionsData.js");
var Requisition = __webpack_require__(/*! ../model/Requisition */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/Requisition.js");
var RequisitionNode = __webpack_require__(/*! ../model/RequisitionNode */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionNode.js");
(function () {
  'use strict';

  angular.module('onms-requisitions')

  /**
  * @ngdoc service
  * @name RequisitionsService
  * @module onms-requisitions
  *
  * @requires $q Angular promise/deferred implementation
  * @requires $cacheFactory Angular cache management
  * @requires $window Document window
  * @requires $http Angular service that facilitates communication with the remote HTTP servers
  * @requires $timeout Angular service that facilitates timeout functions
  * @requires $log Angular log facility
  *
  * @description The RequisitionsService provides all the required methods to access ReST API for the OpenNMS requisitions.
  *
  * It uses Angular's Cache service to store localy all the requisitions after retrieving them from the server the first time.
  * This helps in terms of performance and responsiveness of the UI. Only changes are pushed back to the server.
  *
  * Conflicts may accour if someone else is changing the requisitions at the same time.
  *
  * If the cache is not going to be used, the controllers are responsible for maintaining the state of the data.
  */.factory('RequisitionsService', ['$q', '$cacheFactory', '$window', '$http', '$timeout', '$log', function ($q, $cacheFactory, $window, $http, $timeout, $log) {
    $log.debug('Initializing RequisitionsService');
    var requisitionsService = {};
    requisitionsService.internal = {};

    // Cache Configuration

    requisitionsService.internal.cacheEnabled = true;
    requisitionsService.internal.cache = $cacheFactory('RequisitionsService');

    // URLs

    requisitionsService.internal.requisitionsUrl = 'rest/requisitions';
    requisitionsService.internal.requisitionNamesUrl = 'rest/requisitionNames';
    requisitionsService.internal.foreignSourcesUrl = 'rest/foreignSources';
    requisitionsService.internal.foreignSourcesConfigUrl = 'rest/foreignSourcesConfig';
    requisitionsService.internal.monitoringLocationsUrl = 'rest/monitoringLocations';
    requisitionsService.internal.snmpConfigUrl = 'rest/snmpConfig';
    requisitionsService.internal.errorHelp = ' Check the OpenNMS logs for more details, or try again later.';

    // Timeouts

    requisitionsService.internal.defaultTimeout = 3; // Time to wait in seconds
    requisitionsService.internal.timingStatus = {
      isRunning: false
    };

    /**
    * @description (Internal) Gets the data from the internal cache
    *
    * @private
    * @name RequisitionsService:internal.getCatchedConfigData
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} configName The name of the config object
    * @returns {object} the internal cache content
    */
    requisitionsService.internal.getCatchedConfigData = function (configName) {
      return requisitionsService.internal.cache.get(configName);
    };

    /**
    * @description (Internal) Saves the data into internal cache
    *
    * @private
    * @name RequisitionsService:internal.setCatchedConfigData
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} configName The name of the config object
    * @param {object} configObject The config object
    */
    requisitionsService.internal.setCatchedConfigData = function (configName, configObject) {
      if (requisitionsService.internal.cacheEnabled) {
        requisitionsService.internal.cache.put(configName, configObject);
      }
    };

    /**
    * @description (Internal) Gets the requisitions from the internal cache
    *
    * @private
    * @name RequisitionsService:internal.getCatchedConfigData
    * @ngdoc method
    * @methodOf RequisitionsService
    * @returns {object} the internal cache content
    */
    requisitionsService.internal.getCachedRequisitionsData = function () {
      return requisitionsService.internal.getCatchedConfigData('requisitionsData');
    };

    /**
    * @description (Internal) Saves the requisitions data into internal cache
    *
    * @private
    * @name RequisitionsService:internal.setCachedRequisitionsData
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {object} requisitionsData The requisitions data
    */
    requisitionsService.internal.setCachedRequisitionsData = function (requisitionsData) {
      return requisitionsService.internal.setCatchedConfigData('requisitionsData', requisitionsData);
    };

    /**
    * @description (Internal) Gets a specific requisition object from the cache.
    *
    * @private
    * @name RequisitionsService:internal.getCachedRequisition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @returns {object} the requisition object.
    */
    requisitionsService.internal.getCachedRequisition = function (foreignSource) {
      var requisitionsData = requisitionsService.internal.getCachedRequisitionsData();
      if (!requisitionsData) {
        return null;
      }
      return requisitionsData.getRequisition(foreignSource);
    };

    /**
    * @description (Internal) Gets a specific node object from the cache.
    *
    * @private
    * @name RequisitionsService:internal.getCachedNode
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @param {string} foreignId The foreign Id
    * @returns {object} the node object.
    */
    requisitionsService.internal.getCachedNode = function (foreignSource, foreignId) {
      var requisition = requisitionsService.internal.getCachedRequisition(foreignSource);
      if (!requisition) {
        return null;
      }
      return requisition.getNode(foreignId);
    };

    /**
    * @description (Internal) Quick-Add a new node to an existing requisition
    *
    * @private
    * @name RequisitionsService:addQuickNode
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {object} node the QuickNode object
    */
    requisitionsService.internal.addQuickNode = function (quickNode) {
      var node = quickNode.createRequisitionedNode();
      return requisitionsService.saveNode(node).then(function () {
        // saveNode:success
        $log.debug('addQuickNode: the node ' + node.nodeLabel + ' has been saved.');
        return requisitionsService.synchronizeRequisition(node.foreignSource, 'false').then(function () {
          // synchronizeRequisition:success
          $log.debug('addQuickNode: the requisition ' + node.foreignSource + ' has been synchronized.');
          return node;
        }, function () {
          // synchronizeRequisition:failure
          return $q.reject('Cannot synchronize requisition ' + node.foreignSource);
        });
      }, function () {
        // saveNode:failure
        return $q.reject('Cannot quick-add node to requisition ' + node.foreignSource);
      });
    };

    /**
    * @description (Internal) Updates a Requisition object based on a Deployed Statistics Object.
    *
    * @private
    * @name RequisitionsService:updateRequisition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {object} existingReq the existing requisition object
    * @param {object} deployedReq the deployed statistics object
    */
    requisitionsService.internal.updateRequisition = function (existingReq, deployedReq) {
      $log.debug('updateRequisition: updating deployed statistics for requisition ' + deployedReq.name + '.');
      var foreignIds = deployedReq['foreign-id'];
      existingReq.nodesInDatabase = foreignIds.length;
      existingReq.deployed = foreignIds.length > 0;
      existingReq.lastImport = deployedReq['last-imported'];
      for (var idx = 0; idx < foreignIds.length; idx++) {
        var existingNode = existingReq.getNode(foreignIds[idx]);
        if (existingNode) {
          existingNode.deployed = true;
        }
      }
      return existingReq;
    };

    /**
    * @description Clears all the internal cache.
    *
    * This forces the service to retrieve the data from the server on next request.
    *
    * @name RequisitionsService:internal.clearCache
    * @ngdoc method
    * @methodOf RequisitionsService
    */
    requisitionsService.clearCache = function () {
      $log.debug('clearCache: removing everything from the internal cache');
      requisitionsService.internal.cache.removeAll();
      return true;
    };

    /**
    * @description Removes a specific requisition from the internal cache
    *
    * This forces the service to retrieve the data from the server on next request.
    *
    * @name RequisitionsService:internal.removeRequisitionFromCache
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreignSource)
    */
    requisitionsService.removeRequisitionFromCache = function (foreignSource) {
      var requisitionsData = requisitionsService.internal.getCachedRequisitionsData();
      if (requisitionsData) {
        var reqIdx = (0, _indexOf.default)(requisitionsData).call(requisitionsData, foreignSource);
        if (reqIdx >= 0) {
          var _context;
          $log.debug('clearRequisitionCache: removing requisition ' + foreignSource + ' from the internal cache');
          (0, _splice.default)(_context = requisitionsData.requisitions).call(_context, reqIdx, 1);
          return true;
        }
      }
      return false;
    };

    /**
    * @description Gets the timing status object
    * The reason for using this is because of NMS-7872.
    *
    * @name RequisitionsService:startTiming
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {integer} ts The timeout in seconds (optional)
    * @returns {object} the timing status object
    */
    requisitionsService.startTiming = function (ts) {
      var seconds = ts ? ts : requisitionsService.internal.defaultTimeout;
      $log.debug('startTiming: starting timeout of ' + seconds + ' seconds.');
      requisitionsService.internal.timingStatus.isRunning = true;
      $timeout(function () {
        requisitionsService.internal.timingStatus.isRunning = false;
      }, seconds * 1000);
    };

    /**
    * @description Gets the timing status object
    *
    * @name RequisitionsService:getTiming
    * @ngdoc method
    * @methodOf RequisitionsService
    * @returns {object} the timing status object
    */
    requisitionsService.getTiming = function () {
      return requisitionsService.internal.timingStatus;
    };

    /**
    * @description Requests all the requisitions (pending and deployed) from OpenNMS.
    *
    * If the data exists on the cache, that will be used instead of retrieving the data
    * from the OpenNMS server.
    *
    * After retrieving the requisitions, the deployed statistics will be retrieved, and the
    * statistics of the requisitions will be updated. Then, the data will be saved on the
    * internal cache.
    *
    * @name RequisitionsService:getRequisitions
    * @ngdoc method
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a RequisitionsData object.
    */
    requisitionsService.getRequisitions = function () {
      var rd = requisitionsService.internal.getCachedRequisitionsData();
      if (rd) {
        $log.debug('getRequisitions: returning a cached copy of the requisitions data');
        return $q.when(rd);
      }
      var deferred = $q.defer();
      var url = requisitionsService.internal.requisitionsUrl;
      $log.debug('getRequisitions: retrieving requisitions.');
      $http.get(url).then(function getRequisitionsSuccess(response) {
        var data = response.data;
        var requisitionsData = new RequisitionsData();
        (0, _forEach.default)(angular).call(angular, data['model-import'], function (onmsRequisition) {
          var requisition = new Requisition(onmsRequisition, false);
          $log.debug('getRequisitions: adding requisition ' + requisition.foreignSource + '.');
          requisitionsData.requisitions.push(requisition);
        });
        requisitionsService.updateDeployedStats(requisitionsData).then(function () {
          // success;
          requisitionsService.internal.setCachedRequisitionsData(requisitionsData);
          deferred.resolve(requisitionsData);
        }, function (error) {
          // error
          deferred.reject(error);
        });
      }, function getRequisitionsError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getRequisitions: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve the requisitions.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Gets the requisition names.
    *
    * If the data exists on the cache, that will be used instead of retrieving the data
    * from the OpenNMS server.
    *
    * After retrieving the requisitions, the data will be saved on the internal cache.
    *
    * @name RequisitionsService:getRequisitionNames
    * @ngdoc method
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a list of requisition names.
    */
    requisitionsService.getRequisitionNames = function () {
      var config = requisitionsService.internal.getCatchedConfigData('requisitionNames');
      if (config) {
        $log.debug('getRequisitionNames: returning a cached copy of requisition names');
        return $q.when(config);
      }
      var deferred = $q.defer();
      var url = requisitionsService.internal.requisitionNamesUrl;
      $log.debug('getRequisitionNames: getting requisition names');
      $http.get(url).then(function getRequisitionNamesSuccess(response) {
        var data = response.data;
        $log.debug('getRequisitionNames: got requisition names');
        requisitionsService.internal.setCatchedConfigData('requisitionNames', data['foreign-source']);
        deferred.resolve(data['foreign-source']);
      }, function getRequisitionNamesError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getRequisitionNames: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve requisition names.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Updates the requisitions data object with the deployed statistics.
    *
    * After retrieving the data, the provided object will be updated.
    *
    * @name RequisitionsService:updateDeployedStats
    * @ngdoc method
    * @param {object} requisitionsData The requisitions data object
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides the updated RequisitionsData object.
    */
    requisitionsService.updateDeployedStats = function (requisitionsData) {
      var deferred = $q.defer();
      var url = requisitionsService.internal.requisitionsUrl + '/deployed/stats';
      $log.debug('updateDeployedStats: retrieving deployed statistics.');
      $http.get(url).then(function updateDeployedStatsSuccess(response) {
        var data = response.data;
        (0, _forEach.default)(angular).call(angular, requisitionsData.requisitions, function (existingReq) {
          var deployedReq = null;
          (0, _forEach.default)(angular).call(angular, data['foreign-source'], function (r) {
            if (r.name === existingReq.foreignSource) {
              deployedReq = r;
            }
          });
          if (!deployedReq) {
            existingReq.setDeployed(false);
          } else {
            requisitionsService.internal.updateRequisition(existingReq, deployedReq);
          }
        });
        deferred.resolve(requisitionsData);
      }, function updateDeployedStatsError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('updateDeployedStats: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve the deployed statistics.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Updates the requisition object with the deployed statistics.
    *
    * After retrieving the data successfully, the provided object will be updated.
    * Otherwise, the provided object will be returned unmodified, and this includes HTTP errors.
    *
    * @name RequisitionsService:updateDeployedStatsForRequisition
    * @ngdoc method
    * @param {object} requisition The requisition object
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a Requisition object.
    */
    requisitionsService.updateDeployedStatsForRequisition = function (existingReq) {
      var deferred = $q.defer();
      var url = requisitionsService.internal.requisitionsUrl + '/deployed/stats/' + encodeURIComponent(existingReq.foreignSource);
      $log.debug('updateDeployedStatsForRequisition: retrieving deployed statistics for requisition ' + existingReq.foreignSource);
      $http.get(url).then(function updateDeployedStatsForRequisitionSuccess(response) {
        var deployedReq = response.data;
        requisitionsService.internal.updateRequisition(existingReq, deployedReq);
        deferred.resolve(existingReq);
      }, function updateDeployedStatsForRequisitionError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('updateDeployedStatsForRequisition: GET ' + url + ' failed:', error, status);
        deferred.resolve(existingReq);
      });
      return deferred.promise;
    };

    /**
    * @description Request a sepcific requisition from OpenNMS.
    *
    * If the data exists on the cache, that will be used instead of retrieving the data
    * from the OpenNMS server.
    *
    * After retrieving the requisitions, the data will be saved on the internal cache.
    *
    * @name RequisitionsService:getRequisition
    * @ngdoc method
    * @param {string} foreignSource The requisition's name (a.k.a. foreignSource)
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a Requisition object.
    */
    requisitionsService.getRequisition = function (foreignSource) {
      var requisition = requisitionsService.internal.getCachedRequisition(foreignSource);
      if (requisition) {
        $log.debug('getRequisition: returning a cached copy of ' + foreignSource);
        return $q.when(requisition);
      }
      var deferred = $q.defer();
      var url = requisitionsService.internal.requisitionsUrl + '/' + encodeURIComponent(foreignSource);
      $log.debug('getRequisition: getting requisition ' + foreignSource);
      $http.get(url).then(function getRequisitionSuccess(response) {
        var req = new Requisition(response.data);
        $log.debug('getRequisition: got requisition ' + foreignSource);
        requisitionsService.updateDeployedStatsForRequisition(req).then(function (updatedReq) {
          // success;
          var requisitionsData = requisitionsService.internal.getCachedRequisitionsData();
          if (requisitionsData) {
            $log.debug('getRequisition: updating cache for requisition ' + foreignSource);
            requisitionsData.setRequisition(updatedReq);
          }
          deferred.resolve(updatedReq);
        });
      }, function getRequisitionError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getRequisition: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve the requisition ' + foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Request the synchronization/import of a requisition on the OpenNMS server.
    *
    * If the data exists on the cache, and the provided foreign source doesn't exist, the
    * request will be rejected.
    *
    * After retrieving the requisitions, the data on the internal cache will be updated.
    *
    * @name RequisitionsService:synchronizeRequisition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @param {string} rescanExisting [true, false, dbonly]
    * @returns {object} a promise.
    */
    requisitionsService.synchronizeRequisition = function (foreignSource, rescanExisting) {
      var requisitionsData = requisitionsService.internal.getCachedRequisitionsData();
      if (requisitionsData) {
        var reqIdx = (0, _indexOf.default)(requisitionsData).call(requisitionsData, foreignSource);
        if (reqIdx < 0) {
          return $q.reject('The foreignSource ' + foreignSource + ' does not exist.');
        }
      }
      var deferred = $q.defer();
      var url = requisitionsService.internal.requisitionsUrl + '/' + encodeURIComponent(foreignSource) + '/import';
      $log.debug('synchronizeRequisition: synchronizing requisition ' + foreignSource + ' with rescanExisting=' + rescanExisting);
      $http({
        method: 'PUT',
        url: url,
        params: {
          rescanExisting: rescanExisting
        }
      }).then(function (response) {
        $log.debug('synchronizeRequisition: synchronized requisition ' + foreignSource);
        var r = requisitionsService.internal.getCachedRequisition(foreignSource);
        if (r) {
          $log.debug('synchronizeRequisition: updating deployed status of requisition ' + foreignSource);
          r.setDeployed(true);
        }
        deferred.resolve(response.data);
      }, function (response) {
        var error = response.data;
        var status = response.status;
        $log.error('synchronizeRequisition: PUT ' + url + ' failed:', error, status);
        deferred.reject('Cannot synchronize the requisition ' + foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Request the creation of a new requisition on the OpenNMS server.
    *
    * If the data exists on the cache, and the provided foreign source exist, the
    * request will be rejected, because a foreign source must be unique.
    *
    * After retrieving the requisitions, the data on the internal cache will be updated.
    *
    * @name RequisitionsService:addRequisition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @returns {object} a promise. On success, it provides a Requisition object.
    */
    requisitionsService.addRequisition = function (foreignSource) {
      var req = requisitionsService.internal.getCachedRequisition(foreignSource);
      if (req) {
        return $q.reject('Invalid foreignSource ' + foreignSource + ', it already exist.');
      }
      var deferred = $q.defer();
      var emptyReq = {
        'foreign-source': foreignSource,
        node: []
      };
      var url = requisitionsService.internal.requisitionsUrl;
      $log.debug('addRequisition: adding requisition ' + foreignSource);
      $http.post(url, emptyReq).then(function addRequisitionSuccess() {
        var requisition = new Requisition(emptyReq, false);
        $log.debug('addRequisition: added requisition ' + requisition.foreignSource);
        var data = requisitionsService.internal.getCachedRequisitionsData();
        if (data) {
          $log.debug('addRequisition: pushing requisition ' + foreignSource + ' into the internal cache');
          data.requisitions.push(requisition);
        }
        deferred.resolve(requisition);
      }, function addRequisitionError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('addRequisition: POST ' + url + ' failed:', error, status);
        deferred.reject('Cannot add the requisition ' + foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Request the deletion of a new requisition on the OpenNMS server.
    *
    * If the data exists on the cache, and the provided foreign source doesn't exist, the
    * request will be rejected. Also, if the requisition exist and it contains nodes (i.e.
    * it is not empty), the request will be rejected.
    *
    * After retrieving the requisitions, the data on the internal cache will be updated.
    *
    * @name RequisitionsService:deleteRequisition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @returns {object} a promise.
    */
    requisitionsService.deleteRequisition = function (foreignSource) {
      var requisitionsData = requisitionsService.internal.getCachedRequisitionsData();
      if (requisitionsData) {
        var reqIdx = (0, _indexOf.default)(requisitionsData).call(requisitionsData, foreignSource);
        if (reqIdx < 0) {
          return $q.reject('The foreignSource ' + foreignSource + ' does not exist.');
        }
        var req = requisitionsData.requisitions[reqIdx];
        if (req.nodesInDatabase > 0) {
          return $q.reject('The foreignSource ' + foreignSource + ' contains ' + req.nodesInDatabase + ' nodes on the database, it cannot be deleted.');
        }
      }
      var deferred = $q.defer();
      $log.debug('deleteRequisition: deleting requisition ' + foreignSource);
      var deferredReqPending = $http.delete(requisitionsService.internal.requisitionsUrl + '/' + encodeURIComponent(foreignSource));
      var deferredReqDeployed = $http.delete(requisitionsService.internal.requisitionsUrl + '/deployed/' + encodeURIComponent(foreignSource));
      var deferredFSPending = $http.delete(requisitionsService.internal.foreignSourcesUrl + '/' + encodeURIComponent(foreignSource));
      var deferredFSDeployed = $http.delete(requisitionsService.internal.foreignSourcesUrl + '/deployed/' + encodeURIComponent(foreignSource));
      $q.all([deferredReqPending, deferredReqDeployed, deferredFSPending, deferredFSDeployed]).then(function deleteRequisitionSuccess(response) {
        $log.debug('deleteRequisition: deleted requisition ' + foreignSource);
        requisitionsService.removeRequisitionFromCache(foreignSource);
        deferred.resolve(response.data);
      }, function deleteRequisitionError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('deleteRequisition: DELETE operation failed:', error, status);
        deferred.reject('Cannot delete the requisition ' + foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Request the removal of all from an existing requisition on the OpenNMS server.
    *
    * If the data exists on the cache, and the provided foreign source doesn't exist, the
    * request will be rejected.
    *
    * After retrieving the requisitions, the data on the internal cache will be updated.
    * After updating the requisition, a synchronization with rescanExisting=false will be performed.
    *
    * @name RequisitionsService:removeAllNodesFromRequisition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @returns {object} a promise.
    */
    requisitionsService.removeAllNodesFromRequisition = function (foreignSource) {
      var requisitionsData = requisitionsService.internal.getCachedRequisitionsData();
      if (requisitionsData) {
        if (!requisitionsData.getRequisition(foreignSource)) {
          return $q.reject('The foreignSource ' + foreignSource + ' does not exist.');
        }
      }
      var deferred = $q.defer();
      var requisition = {
        'foreign-source': foreignSource,
        node: []
      };
      $log.debug('removeAllNodesFromRequisition: removing nodes from requisition ' + foreignSource);
      var url = requisitionsService.internal.requisitionsUrl;
      $http.post(url, requisition).then(function removeAllNodesFromRequisitionSuccess(response) {
        var data = response.data;
        $log.debug('removeAllNodesFromRequisition: removed nodes from requisition ' + foreignSource);
        requisitionsService.synchronizeRequisition(foreignSource, 'false').then(function () {
          // synchronizeRequisition:success
          $log.debug('removeAllNodesFromRequisition: rhe requisition ' + foreignSource + ' has been synchronized.');
          var req = requisitionsService.internal.getCachedRequisition(foreignSource);
          if (req) {
            $log.debug('removeAllNodesFromRequisition: updating requisition ' + foreignSource + ' on the internal cache');
            req.reset();
          }
          deferred.resolve(data);
        }, function () {
          // synchronizeRequisition:failure
          deferred.reject('Cannot synchronize requisition ' + foreignSource);
        });
      }, function removeAllNodesFromRequisitionError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('removeAllNodesFromRequisition: POST ' + url + ' failed:', error, status);
        deferred.reject('Cannot remove all nodes from requisition ' + foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Request a sepcific node from a requisition from OpenNMS.
    *
    * If the data exists on the cache, that will be used instead of retrieving the data
    * from the OpenNMS server.
    *
    * After retrieving the node, the data will be saved on the internal cache.
    *
    * @name RequisitionsService:getNode
    * @ngdoc method
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @param {string} foreignId The foreignId of the node
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a RequisitionNode object.
    */
    requisitionsService.getNode = function (foreignSource, foreignId) {
      var node = requisitionsService.internal.getCachedNode(foreignSource, foreignId);
      if (node) {
        $log.debug('getNode: returning a cached copy of ' + foreignId + '@' + foreignSource);
        return $q.when(node);
      }
      var deferred = $q.defer();
      var url = requisitionsService.internal.requisitionsUrl + '/' + encodeURIComponent(foreignSource) + '/nodes/' + encodeURIComponent(foreignId);
      $log.debug('getNode: getting node ' + foreignId + '@' + foreignSource);
      $http.get(url).then(function getNodeSuccess(response) {
        var node = new RequisitionNode(foreignSource, response.data);
        $log.debug('getNode: got node ' + foreignId + '@' + foreignSource);
        var requisition = requisitionsService.internal.getCachedRequisition(foreignSource);
        if (requisition) {
          $log.debug('getNode: updating cache for requisition ' + foreignSource);
          requisition.setNode(node);
        }
        deferred.resolve(node);
      }, function getNodeError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getNode: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve node ' + foreignId + ' from requisition ' + foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Updates a node on an existing requisition on the OpenNMS server.
    *
    * The internal cache will be updated after the request is completed successfully if exist,
    * depending if the save operation is related with the update of an existing node, or if it
    * is related with the creation of a new node.
    *
    * @name RequisitionsService:removeAllNodesFromRequisition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {object} node The RequisitionNode Object
    * @returns {object} a promise. 
    */
    // TODO If the parent properties are updated, verify they are valid through ReST prior, adding the node.
    requisitionsService.saveNode = function (node) {
      var deferred = $q.defer();
      var requisitionNode = node.getOnmsRequisitionNode();
      var url = requisitionsService.internal.requisitionsUrl + '/' + encodeURIComponent(node.foreignSource) + '/nodes';
      $log.debug('saveNode: saving node ' + node.nodeLabel + ' on requisition ' + node.foreignSource);
      $http.post(url, requisitionNode).then(function saveNodeSuccess(response) {
        var data = response.data;
        $log.debug('saveNode: saved node ' + node.nodeLabel + ' on requisition ' + node.foreignSource);
        node.modified = true;
        var requisition = requisitionsService.internal.getCachedRequisition(node.foreignSource);
        if (requisition) {
          requisition.setNode(node);
        }
        // Updating categories cache
        var categories = requisitionsService.internal.getCatchedConfigData('categoriesConfig');
        if (categories) {
          var categoriesChanged = false;
          (0, _forEach.default)(angular).call(angular, node.categories, function (cat) {
            if ((0, _indexOf.default)(categories).call(categories, cat.name) === -1) {
              categoriesChanged = true;
              categories.push(cat.name);
            }
          });
          if (categoriesChanged) {
            requisitionsService.internal.setCatchedConfigData('categoriesConfig', categories);
          }
        }
        // Updating services cache
        var services = requisitionsService.internal.getCatchedConfigData('servicesConfig');
        if (services) {
          var servicesChanged = false;
          (0, _forEach.default)(angular).call(angular, node.interfaces, function (intf) {
            (0, _forEach.default)(angular).call(angular, intf.services, function (svc) {
              if ((0, _indexOf.default)(services).call(services, svc.name) === -1) {
                servicesChanged = true;
                services.push(svc.name);
              }
            });
          });
          if (servicesChanged) {
            requisitionsService.internal.setCatchedConfigData('servicesConfig', services);
          }
        }
        deferred.resolve(data);
      }, function saveNodeError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('saveNode: POST ' + url + ' failed:', error, status);
        deferred.reject('Cannot save node ' + node.foreignId + ' on requisition ' + node.foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Request the removal of a node from an existing requisition on the OpenNMS server.
    *
    * The internal cache will be updated after the request is completed successfully if exist.
    *
    * @name RequisitionsService:deleteNode
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {object} node The RequisitionNode Object
    * @returns {object} a promise.
    */
    requisitionsService.deleteNode = function (node) {
      var deferred = $q.defer();
      var url = requisitionsService.internal.requisitionsUrl + '/' + encodeURIComponent(node.foreignSource) + '/nodes/' + encodeURIComponent(node.foreignId);
      $log.debug('deleteNode: deleting node ' + node.nodeLabel + ' from requisition ' + node.foreignSource);
      $http.delete(url).then(function deleteNodeSuccess(response) {
        var data = response.data;
        $log.debug('deleteNode: deleted node ' + node.nodeLabel + ' on requisition ' + node.foreignSource);
        var r = requisitionsService.internal.getCachedRequisition(node.foreignSource);
        if (r) {
          var idx = (0, _indexOf.default)(r).call(r, node.foreignId);
          if (idx > -1) {
            var _context2;
            $log.debug('deleteNode: removing node ' + node.foreignId + '@' + node.foreignSource + ' from the internal cache');
            (0, _splice.default)(_context2 = r.nodes).call(_context2, idx, 1);
            r.nodesDefined--;
            r.modified = true;
            r.dateStamp = (0, _now.default)();
          }
        }
        deferred.resolve(data);
      }, function deleteNodeError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('deleteNode: DELETE ' + url + ' failed:', error, status);
        deferred.reject('Cannot delete node ' + node.foreignId + ' from requisition ' + node.foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Request a foreign source definition from OpenNMS for a given requisition.
    *
    * The foreign source definition contains the set of policies and detectors, as well as the scan frequency.
    * The information is not stored on cache. Each request will perform a server call.
    *
    * @name RequisitionsService:getForeignSourceDefinition
    * @ngdoc method
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source), use 'default' for the default foreign source.
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a foreign source object.
    */
    requisitionsService.getForeignSourceDefinition = function (foreignSource) {
      var deferred = $q.defer();
      var url = requisitionsService.internal.foreignSourcesUrl + '/' + encodeURIComponent(foreignSource);
      $log.debug('getForeignSourceDefinition: getting definition for requisition ' + foreignSource);
      $http.get(url).then(function getForeignSourceDefinitionSuccess(response) {
        $log.debug('getForeignSourceDefinition: got definition for requisition ' + foreignSource);
        deferred.resolve(response.data);
      }, function getForeignSourceDefinitionError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getForeignSourceDefinition: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve foreign source definition (detectors and policies) for requisition ' + foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Updates the foreign source definition on the OpenNMS server for a given requisition.
    *
    * The foreign source definition contains the set of policies and detectors, as well as the scan frequency.
    *
    * @name RequisitionsService:saveForeignSourceDefinition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {object} foreignSourceDef The requisition foreign source Object
    * @returns {object} a promise.
    */
    requisitionsService.saveForeignSourceDefinition = function (foreignSourceDef) {
      var deferred = $q.defer();
      var foreignSource = foreignSourceDef.name;
      var url = requisitionsService.internal.foreignSourcesUrl;
      $log.debug('saveForeignSourceDefinition: saving definition for requisition ' + foreignSource);
      $http.post(url, foreignSourceDef).then(function saveForeignSourceDefinitionSuccess(response) {
        $log.debug('saveForeignSourceDefinition: saved definition for requisition ' + foreignSource);
        deferred.resolve(response.data);
      }, function saveForeignSourceDefinitionError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('saveForeignSourceDefinition: POST ' + url + ' failed:', error, status);
        deferred.reject('Cannot save foreign source definition (detectors and policies) for requisition ' + foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Clones an existing foreign source definition to another.
    *
    * The foreign source definition contains the set of policies and detectors, as well as the scan frequency.
    * If the source or the target requisition doesn't appear on the existing requisitions reported by the
    * OpenNMS server, the operation will be rejected.
    *
    * @name RequisitionsService:cloneForeignSourceDefinition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} sourceRequisition The name of the source requisition
    * @param {string} targetRequisition The name of the target requisition
    * @returns {object} a promise.
    */
    requisitionsService.cloneForeignSourceDefinition = function (sourceRequisition, targetRequisition) {
      var deferred = $q.defer();
      requisitionsService.getRequisitionNames().then(function (requisitions) {
        // success
        if ((0, _indexOf.default)(requisitions).call(requisitions, sourceRequisition) < 0) {
          deferred.reject('The source requisition ' + sourceRequisition + ' does not exist.');
          return;
        }
        if ((0, _indexOf.default)(requisitions).call(requisitions, targetRequisition) < 0) {
          deferred.reject('The target requisition ' + targetRequisition + ' does not exist.');
          return;
        }
        requisitionsService.getForeignSourceDefinition(sourceRequisition).then(function (fsDef) {
          // success
          fsDef.name = targetRequisition;
          requisitionsService.saveForeignSourceDefinition(fsDef).then(function () {
            // success
            deferred.resolve(fsDef);
          }, function () {
            // error
            deferred.reject('Cannot save foreign source definition for requisition ' + targetRequisition);
          });
        }, function () {
          // error
          deferred.reject('Cannot get foreign source definition for requisition ' + sourceRequisition);
        });
      }, function () {
        // error
        deferred.reject('Cannot validate the existance of the source and target requisitions.');
      });
      return deferred.promise;
    };

    /**
    * @description Request the removal of a foreign source definition on the OpenNMS server.
    *
    * @name RequisitionsService:deleteForeignSourceDefinition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source), use 'default' for the default foreign source.
    * @returns {object} a promise.
    */
    requisitionsService.deleteForeignSourceDefinition = function (foreignSource) {
      var deferred = $q.defer();
      $log.debug('deleteForeignSourceDefinition: deleting foreign source definition ' + foreignSource);
      var deferredFSPending = $http.delete(requisitionsService.internal.foreignSourcesUrl + '/' + encodeURIComponent(foreignSource));
      var deferredFSDeployed = $http.delete(requisitionsService.internal.foreignSourcesUrl + '/deployed/' + encodeURIComponent(foreignSource));
      $q.all([deferredFSPending, deferredFSDeployed]).then(function deleteForeignSourceDefinitionSuccess(response) {
        $log.debug('deleteForeignSourceDefinition: deleted foreign source definition ' + foreignSource);
        deferred.resolve(response.data);
      }, function deleteForeignSourceDefinitionError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('deleteForeignSourceDefinition: DELETE operation failed:', error, status);
        deferred.reject('Cannot delete the foreign source definition ' + foreignSource + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Gets the available detectors.
    *
    * If the data exists on the cache, that will be used instead of retrieving the data
    * from the OpenNMS server.
    *
    * After retrieving the node, the data will be saved on the internal cache.
    *
    * The data return by the promise should be an array of objects.
    * Each object contains the name of the detector and the full class name.
    *
    * @name RequisitionsService:getAvailableDetectors
    * @ngdoc method
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a list of available detector objects.
    */
    requisitionsService.getAvailableDetectors = function () {
      var config = requisitionsService.internal.getCatchedConfigData('detectorsConfig');
      if (config) {
        $log.debug('getAvailableDetectors: returning a cached copy of detectors configuration');
        return $q.when(config);
      }
      var deferred = $q.defer();
      var url = requisitionsService.internal.foreignSourcesConfigUrl + '/detectors';
      $log.debug('getAvailableDetectors: getting available detectors');
      $http.get(url).then(function getAvailableDetectorsSuccess(response) {
        var data = response.data;
        $log.debug('getAvailableDetectors: got available detectors');
        requisitionsService.internal.setCatchedConfigData('detectorsConfig', data.plugins);
        deferred.resolve(data.plugins);
      }, function getAvailableDetectorsError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getAvailableDetectors: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve available detectors.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Gets the available policies.
    *
    * If the data exists on the cache, that will be used instead of retrieving the data
    * from the OpenNMS server.
    *
    * After retrieving the node, the data will be saved on the internal cache.
    *
    * The data return by the promise should be an array of objects.
    * Each object contains the name of the policy and the full class name.
    *
    * @name RequisitionsService:getAvailablePolicies
    * @ngdoc method
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a list of available polict objects.
    */
    requisitionsService.getAvailablePolicies = function () {
      var config = requisitionsService.internal.getCatchedConfigData('policiesConfig');
      if (config) {
        $log.debug('getAvailablePolicies: returning a cached copy of policies configuration');
        return $q.when(config);
      }
      var deferred = $q.defer();
      var url = requisitionsService.internal.foreignSourcesConfigUrl + '/policies';
      $log.debug('getAvailablePolicies: getting available policies');
      $http.get(url).then(function getAvailablePoliciesSuccess(response) {
        var data = response.data;
        $log.debug('getAvailablePolicies: got available policies');
        requisitionsService.internal.setCatchedConfigData('policiesConfig', data.plugins);
        deferred.resolve(data.plugins);
      }, function getAvailablePoliciesError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getAvailablePolicies: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve available policies.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Gets the available services.
    *
    * If the data exists on the cache, that will be used instead of retrieving the data
    * from the OpenNMS server.
    *
    * After retrieving the node, the data will be saved on the internal cache.
    *
    * The data return by the promise should be an array of strings.
    * Each strings contains the name of the service.
    *
    * @example [ 'ICMP', 'SNMP' ]
    *
    * @name RequisitionsService:getAvailableServices
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source), use 'default' for the default foreign source.
    * @returns {object} a promise. On success, it provides a list of available services.
    */
    requisitionsService.getAvailableServices = function (foreignSource) {
      var config = requisitionsService.internal.getCatchedConfigData('servicesConfig');
      if (config) {
        $log.debug('getAvailableServices: returning a cached copy of services configuration');
        return $q.when(config);
      }
      var deferred = $q.defer();
      var url = requisitionsService.internal.foreignSourcesConfigUrl + '/services/' + encodeURIComponent(foreignSource);
      $log.debug('getAvailableServices: getting available services');
      $http.get(url).then(function getAvailableServicesSuccess(response) {
        var data = response.data;
        $log.debug('getAvailableServices: got available services');
        requisitionsService.internal.setCatchedConfigData('servicesConfig', data.element);
        deferred.resolve(data.element);
      }, function getAvailableServicesError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getAvailableServices: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve available services.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Gets the available assets.
    *
    * If the data exists on the cache, that will be used instead of retrieving the data
    * from the OpenNMS server.
    *
    * After retrieving the node, the data will be saved on the internal cache.
    *
    * The data return by the promise should be an array of strings.
    * Each string is a valid asset field.
    *
    * @example [ 'address1, 'city', 'zip' ]
    *
    * @name RequisitionsService:getAvailableAssets
    * @ngdoc method
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a list of available assets.
    */
    requisitionsService.getAvailableAssets = function () {
      var config = requisitionsService.internal.getCatchedConfigData('assetsConfig');
      if (config) {
        $log.debug('getAvailableAssets: returning a cached copy of assets configuration');
        return $q.when(config);
      }
      var deferred = $q.defer();
      var url = requisitionsService.internal.foreignSourcesConfigUrl + '/assets';
      $log.debug('getAvailableAssets: getting available assets');
      $http.get(url).then(function getAvailableAssetsSuccess(response) {
        var data = response.data;
        $log.debug('getAvailableAssets: got available assets');
        requisitionsService.internal.setCatchedConfigData('assetsConfig', data.element);
        deferred.resolve(data.element);
      }, function getAvailableAssetsError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getAvailableAssets: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve available assets.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Gets the available categories.
    *
    * If the data exists on the cache, that will be used instead of retrieving the data
    * from the OpenNMS server.
    *
    * After retrieving the node, the data will be saved on the internal cache.
    *
    * The data return by the promise should be an array of strings.
    * Each string is a valid category name.
    *
    * @example [ 'Production, 'Development', 'Testing' ]
    *
    * @name RequisitionsService:getAvailableCategories
    * @ngdoc method
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a list of available categories.
    */
    requisitionsService.getAvailableCategories = function () {
      var config = requisitionsService.internal.getCatchedConfigData('categoriesConfig');
      if (config) {
        $log.debug('getAvailableCategories: returning a cached copy of categories configuration');
        return $q.when(config);
      }
      var deferred = $q.defer();
      var url = requisitionsService.internal.foreignSourcesConfigUrl + '/categories';
      $log.debug('getAvailableCategories: getting available categories');
      $http.get(url).then(function getAvailableCategoriesSuccess(response) {
        var data = response.data;
        $log.debug('getAvailableCategories: got available categories');
        requisitionsService.internal.setCatchedConfigData('categoriesConfig', data.element);
        deferred.resolve(data.element);
      }, function getAvailableCategoriesError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getAvailableCategories: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve available categories.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Gets the available locations.
    *
    * The 'Default' location is not considered as a valid option.
    * The location field should be either null or a valid location with Minions.
    *
    * @name RequisitionsService:getAvailableLocations
    * @ngdoc method
    * @methodOf RequisitionsService
    * @returns {object} a promise. On success, it provides a list of available locations.
    */
    requisitionsService.getAvailableLocations = function () {
      var deferred = $q.defer();
      var url = requisitionsService.internal.monitoringLocationsUrl;
      $log.debug('getAvailableLocations: getting available locations');
      $http.get(url).then(function getAvailableLocationsSuccess(response) {
        var _context3, _context4;
        var data = response.data;
        $log.debug('getAvailableLocations: got available locations');
        var locations = (0, _filter.default)(_context3 = (0, _map.default)(_context4 = data.location).call(_context4, function (loc) {
          return loc['location-name'];
        })).call(_context3, function (name) {
          return name && name.length > 0 && name !== 'Default';
        });
        $log.debug('Locations =' + (0, _stringify.default)(locations));
        deferred.resolve(locations);
      }, function getAvailableLocationsError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('getAvailableLocations: GET ' + url + ' failed:', error, status);
        deferred.reject('Cannot retrieve available locations.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Checks if a given foreignId exists on a specific requisition
    *
    * @name RequisitionsService:isForeignIdOnRequisition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @param {string} foreignId The foreign Id
    * @returns {object} a promise. On success, return true if the foreignId exists on the requisition.
    */
    requisitionsService.isForeignIdOnRequisition = function (foreignSource, foreignId) {
      var deferred = $q.defer();
      requisitionsService.getRequisition(foreignSource).then(function (req) {
        var found = false;
        (0, _forEach.default)(angular).call(angular, req.nodes, function (n) {
          if (n.foreignId === foreignId) {
            found = true;
          }
        });
        deferred.resolve(found);
      }, function (err) {
        var message = 'cannot verify foreignId ' + foreignId + '@' + foreignSource + '. ';
        $log.error('isForeignIdOnRequisition: ' + message, err);
        deferred.reject(message + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Checks if a given nodeLabel exists on a specific requisition
    *
    * @name RequisitionsService:isForeignIdOnRequisition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @param {string} nodeLabel The node label
    * @returns {object} a promise. On success, return true if the nodeLabel exists on the requisition.
    */
    requisitionsService.isNodeLabelOnRequisition = function (foreignSource, nodeLabel) {
      var deferred = $q.defer();
      requisitionsService.getRequisition(foreignSource).then(function (req) {
        var found = false;
        (0, _forEach.default)(angular).call(angular, req.nodes, function (n) {
          if (n.nodeLabel === nodeLabel) {
            found = true;
          }
        });
        deferred.resolve(found);
      }, function (err) {
        var message = 'cannot verify nodeLabel ' + nodeLabel + '@' + foreignSource + '. ';
        $log.error('isForeignIdOnRequisition: ' + message, err);
        deferred.reject(message + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Checks if a given IP Address exists on a specific node
    *
    * @name RequisitionsService:isIpAddressOnNode
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @param {string} foreignId The foreign Id of the node
    * @param {string} ipAddress The IP address to check
    * @returns {object} a promise. On success, return  true if the IP Address exists on the node.
    */
    requisitionsService.isIpAddressOnNode = function (foreignSource, foreignId, ipAddress) {
      var deferred = $q.defer();
      requisitionsService.getNode(foreignSource, foreignId).then(function (node) {
        var _context5;
        var found = (0, _filter.default)(_context5 = node.interfaces).call(_context5, function (intf) {
          return intf.ipAddress === ipAddress;
        }).length > 0;
        deferred.resolve(found);
      }, function (err) {
        var message = 'cannot verify ipAddress on node ' + foreignId + '@' + foreignSource + '. ';
        $log.error('isIpAddressOnNode: ' + message, err);
        deferred.reject(message + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Checks if a given category exists on a specific node
    *
    * @name RequisitionsService:isCategoryOnNode
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @param {string} foreignId The foreign Id of the node
    * @param {string} category The category to check
    * @returns {object} a promise. On success, return true if the category exists on the node.
    */
    requisitionsService.isCategoryOnNode = function (foreignSource, foreignId, category) {
      var deferred = $q.defer();
      requisitionsService.getNode(foreignSource, foreignId).then(function (node) {
        var _context6;
        var found = (0, _filter.default)(_context6 = node.categories).call(_context6, function (cat) {
          return cat.name === category;
        }).length > 0;
        deferred.resolve(found);
      }, function (err) {
        var message = 'cannot verify category on node ' + foreignId + '@' + foreignSource + '. ';
        $log.error('isCategoryOnNode: ' + message, err);
        deferred.reject(message + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Checks if a given category exists on a specific node
    *
    * @name RequisitionsService:isCategoryOnNode
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} foreignSource The requisition's name (a.k.a. foreign source)
    * @param {string} foreignId The foreign Id of the node
    * @param {string} ipAddress The IP address to check
    * @param {string} service The service to check
    * @returns {object} a promise. On success, return true if the service exists on the Node/IP.
    */
    requisitionsService.isServiceOnNode = function (foreignSource, foreignId, ipAddress, service) {
      var deferred = $q.defer();
      requisitionsService.getNode(foreignSource, foreignId).then(function (node) {
        var _context7;
        var found = (0, _filter.default)(_context7 = node.interfaces).call(_context7, function (intf) {
          var _context8;
          if (intf.ipAddress !== ipAddress) {
            return false;
          }
          return (0, _filter.default)(_context8 = intf.services).call(_context8, function (svc) {
            return svc.name === service;
          }).length > 0;
        }).length > 0;
        deferred.resolve(found);
      }, function (err) {
        var message = 'cannot verify category on node ' + foreignId + '@' + foreignSource + '. ';
        $log.error('isIpAddressOnNode: ' + message, err);
        deferred.reject(message + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Update the SNMP credentials for a given IP Address.
    *
    * @name RequisitionsService:addRequisition
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {string} ipAddress The IP Address
    * @param {string} snmpCommunity The SNMP Community String
    * @param {string} snmpVersion The SNMP Version
    * @returns {object} a promise.
    */
    requisitionsService.updateSnmpCommunity = function (ipAddress, snmpCommunity, snmpVersion) {
      var deferred = $q.defer();
      var url = requisitionsService.internal.snmpConfigUrl + '/' + ipAddress;
      $log.debug('updateSnmpCommunity: updating snmp community for ' + ipAddress);
      $http.put(url, {
        'readCommunity': snmpCommunity,
        'version': snmpVersion
      }).then(function updateSnmpCommunitySuccess() {
        $log.debug('updateSnmpCommunity: updated snmp community for ' + ipAddress);
        deferred.resolve(ipAddress);
      }, function updateSnmpCommunityError(response) {
        var error = response.data;
        var status = response.status;
        $log.error('updateSnmpCommunity: PUT ' + url + ' failed:', error, status);
        deferred.reject('Cannot update snmp community for ' + ipAddress + '.' + requisitionsService.internal.errorHelp);
      });
      return deferred.promise;
    };

    /**
    * @description Quick add a node to a requisition.
    *
    * @name RequisitionsService:quickAddNode
    * @ngdoc method
    * @methodOf RequisitionsService
    * @param {object} quickNode The QuickNode object
    * @returns {object} a promise.
    */
    requisitionsService.quickAddNode = function (quickNode) {
      var _context9;
      if (quickNode.noSnmp === false && quickNode.snmpCommunity && (0, _trim.default)(_context9 = quickNode.snmpCommunity).call(_context9) !== '') {
        var deferred = $q.defer();
        requisitionsService.updateSnmpCommunity(quickNode.ipAddress, quickNode.snmpCommunity, quickNode.snmpVersion).then(function () {
          // updateSnmpCommunity:success
          requisitionsService.internal.addQuickNode(quickNode).then(function (node) {
            // addQuickNode:success
            deferred.resolve(node);
          }, function (msg) {
            // addQuickNode:failure
            deferred.reject(msg);
          });
        }, function () {
          // updateSnmpCommunity:failure
          deferred.reject('Cannot update SNMP credentials for ' + quickNode.ipAddress);
        });
        return deferred.promise;
      }
      return requisitionsService.internal.addQuickNode(quickNode);
    };
    return requisitionsService;
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Synchronize.js":
/*!***************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Synchronize.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bootbox = __webpack_require__(/*! ../../../../../../../../../node_modules/bootbox/bootbox */ "./node_modules/bootbox/bootbox.js-exposed");
__webpack_require__(/*! ./Requisitions */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");

/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2014 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  angular.module('onms-requisitions')

  /**
  * @ngdoc service
  * @name SynchronizeService
  * @module onms-requisitions
  *
  * @requires RequisitionsService The requisitions service
  * @requires growl The growl plugin for instant notifications
  *
  * @description The SynchronizeService provides a way to request a requisition synchronization asking the user how the scan process will be processed.
  */.factory('SynchronizeService', ['RequisitionsService', 'growl', function (RequisitionsService, growl) {
    return {
      /**
      * @description Requests the synchronization/import of a requisition on the server
      *
      * A dialog box is displayed to request to the user if the scan phase should be triggered or not.
      *
      * @name SynchronizeService:synchronize
      * @ngdoc method
      * @methodOf SynchronizeService
      * @param {object} requisition The requisition object
      * @param {function} successHandler The function to call after a successful synchronization
      * @param {function} errorHandler The function to call when something went wrong.
      */
      synchronize: function synchronize(requisition, errorHandler) {
        /**
        * @param {object} requisition The requisition object
        * @param {string} rescanExisting true to perform a full scan, false to only add/remove nodes without scan, dbonly for all DB operations without scan
        */
        var doSynchronize = function doSynchronize(requisition, rescanExisting) {
          RequisitionsService.startTiming();
          RequisitionsService.synchronizeRequisition(requisition.foreignSource, rescanExisting).then(function () {
            // success
            growl.success('The import operation has been started for ' + _.escape(requisition.foreignSource) + ' (rescanExisting? ' + rescanExisting + ')<br/>Use <b>refresh</b> to update the deployed statistics');
            requisition.setDeployed(true);
          }, errorHandler);
        };
        bootbox.prompt({
          title: 'Synchronize Requisition  ' + _.escape(requisition.foreignSource),
          message: '<p><b>Choose a scan option: </b></p>',
          inputType: 'radio',
          inputOptions: [{
            text: 'Scan all nodes',
            value: 'true'
          }, {
            text: 'Scan added nodes only',
            value: 'false'
          }, {
            text: 'No scanning',
            value: 'dbonly'
          }],
          buttons: {
            confirm: {
              label: 'Synchronize'
            },
            cancel: {
              label: 'Cancel'
            }
          },
          swapButtonOrder: 'true',
          callback: function callback(result) {
            if (result !== null) {
              doSynchronize(requisition, result);
            }
          }
        });
      }
    };
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/asset.html":
/*!************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/asset.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n<!-- Alejandro Galue (agalue@opennms.org) -->\n\n<div class=\"modal-header\">\n  <h3 class=\"modal-title\">Asset Field</h3>\n</div>\n\n<div class=\"modal-body\">\n  <form name=\"assetForm\">\n    <div class=\"form-group\">\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"name\">Name</label>\n        <input class=\"form-control\" type=\"text\" id=\"asset-name\" name=\"name\" placeholder=\"Asset Name (choose one from the list)\"\n               ng-model=\"asset.name\" typeahead-min-length=\"0\" uib-typeahead=\"asset for asset in getAvailableAssetFields() | filter:$viewValue\" typeahead-editable=\"false\" required\n               ng-class=\"{ 'is-invalid' : assetForm.name.$invalid }\">\n        <p ng-show=\"assetForm.name.$invalid\" class=\"invalid-feedback\">A valid asset field name is required.</p>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"value\">Value</label>\n        <input class=\"form-control\" type=\"text\" id=\"asset-value\" name=\"value\" placeholder=\"Asset Value\" ng-model=\"asset.value\" required\n               ng-class=\"{ 'is-invalid' : assetForm.value.$invalid }\">\n        <p ng-show=\"assetForm.value.$invalid\" class=\"invalid-feedback\">A non empty value is required.</p>\n      </div>\n    </div>\n  </form>\n</div>\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" id=\"save-asset\" ng-click=\"save()\" ng-disabled=\"assetForm.$invalid\">Save</button>\n  <button type=\"button\" class=\"btn btn-secondary\" id=\"cancel-asset\" ng-click=\"cancel()\" >Cancel</button>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/asset.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/clone-foreignsource.html":
/*!**************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/clone-foreignsource.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n<!-- Alejandro Galue (agalue@opennms.org) -->\n\n<div class=\"modal-header\">\n  <h3 class=\"modal-title\">Clone Foreign Source Definition</h3>\n</div>\n\n<div class=\"modal-body\">\n  <form name=\"cloneForm\">\n    <div class=\"form-group\">\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"sourceFS\">Source Foreign Source</label>\n        <input class=\"form-control\" type=\"text\" name=\"sourceFS\" ng-disabled=\"true\" ng-model=\"foreignSource\">\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"targetFS\">Target Foreign Source</label>\n        <input class=\"form-control\" type=\"text\" name=\"targetFS\" placeholder=\"Target Foreign Source to override (hit space bar to see the options)\" ng-model=\"targetForeignSource\" typeahead-min-length=\"0\" typeahead-editable=\"false\" uib-typeahead=\"fs for fs in availableForeignSources | filter:$viewValue\" required>\n      </div>\n    </div>\n  </form>\n</div>\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"cloneForm.$invalid\">Clone</button>\n  <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"cancel()\" >Cancel</button>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/clone-foreignsource.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/detector.html":
/*!***************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/detector.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"modal-header\">\n  <h3 class=\"modal-title\">Detector</h3>\n</div>\n\n<div class=\"modal-body\">\n  <form name=\"detectorForm\">\n    <div class=\"form-group\">\n      <label class=\"col-form-label\" for=\"name\">Name</label>\n      <input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" placeholder=\"Detector Name\" ng-model=\"detector.name\" required\n             ng-class=\"{ 'is-invalid' : detectorForm.name.$invalid }\">\n      <p ng-show=\"detectorForm.name.$invalid\" class=\"invalid-feedback\">A non empty name is required.</p>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-form-label\" for=\"clazz\">Class</label>\n      <input class=\"form-control\" type=\"text\" id=\"clazz\" name=\"clazz\" placeholder=\"Implementation Class (choose one from the list)\"\n             ng-model=\"detector.class\" typeahead-min-length=\"0\" typeahead-editable=\"false\" typeahead-on-select=\"updateAvailableParameters($item)\"\n             uib-typeahead=\"detector.class as detector.name for detector in availableDetectors | filter:$viewValue\" required\n             ng-class=\"{ 'is-invalid' : detectorForm.clazz.$invalid }\">\n      <p ng-show=\"detectorForm.clazz.$invalid\" class=\"invalid-feedback\">A valid class name is required.</p>\n    </div>\n    <ng-form name=\"paramForm\" ng-repeat=\"parameter in detector.parameter\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"paramName\" ng-if=\"!parameter.key\" placeholder=\"Parameter Name (choose one from the list)\"\n               ng-model=\"parameter.key\" typeahead-min-length=\"0\" typeahead-editable=\"false\"\n               uib-typeahead=\"param.key as param.key for param in getAvailableParameters() | filter:$viewValue\" required\n               ng-class=\"{ 'is-invalid' : paramForm.paramName.$invalid }\">\n        <p ng-show=\"paramForm.paramName.$invalid\" class=\"invalid-feedback\">Parameter name is required.</p>\n      </div>\n      <div class=\"form-group\">\n        <label ng-if=\"parameter.key\" class=\"col-form-label\">{{parameter.key}}</label>\n        <div class=\"input-group\">\n          <input class=\"form-control\" type=\"text\" name=\"paramValue\" placeholder=\"Parameter Value\" ng-model=\"parameter.value\" required\n                 ng-class=\"{ 'is-invalid' : paramForm.paramValue.$invalid }\">\n          <div class=\"input-group-append\">\n            <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"removeParameter($index)\">\n              <span class=\"fa fa-trash\"></span>\n            </button>\n          </div>\n          <p ng-show=\"paramForm.paramValue.$invalid\" class=\"invalid-feedback\">Parameter value is required.</p>\n        </div>\n      </div>\n    </ng-form>\n  </form>\n</div>\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" id=\"add-detector-parameter\" ng-click=\"addParameter()\" ng-disabled=\"detectorForm.clazz.$invalid || getAvailableParameters().length == 0\">Add Parameter</button>\n  <button type=\"button\" class=\"btn btn-primary\" id=\"save-detector\" ng-click=\"save()\" ng-disabled=\"detectorForm.$invalid\">Save</button>\n  <button type=\"button\" class=\"btn btn-secondary\" id=\"cancel-detector\" ng-click=\"cancel()\">Cancel</button>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/detector.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/interface.html":
/*!****************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/interface.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n<!-- Alejandro Galue (agalue@opennms.org) -->\n\n<div class=\"modal-header\">\n  <h3 class=\"modal-title\">Interface</h3>\n</div>\n\n<div class=\"modal-body\">\n  <form name=\"intfForm\">\n    <div class=\"form-group\">\n      <label class=\"col-form-label\" for=\"ipAddress\">IP Address</label>\n      <input class=\"form-control\" type=\"text\" id=\"ipAddress\" name=\"ipAddress\" placeholder=\"A valid IPv4 or IPv6 address\" ng-model=\"requisitionInterface.ipAddress\" required valid-ip-address\n             ng-class=\"{ 'is-invalid' : intfForm.ipAddress.$invalid }\">\n      <p ng-show=\"intfForm.ipAddress.$invalid\" class=\"invalid-feedback\">A valid IPv4 or IPv6 address is required, and must be unique within the node.</p>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-form-label\" for=\"descr\">Description</label>\n      <input class=\"form-control\" type=\"text\" id=\"descr\" name=\"descr\" placeholder=\"Description [optional]\" ng-model=\"requisitionInterface.description\">\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-form-label\" for=\"snmpPrimary\">SNMP Primary</label>\n      <input class=\"form-control\" type=\"text\" id=\"snmpPrimary\" name=\"snmpPrimary\" placeholder=\"SNMP Primary Flag (choose one from the list)\"\n             ng-model=\"requisitionInterface.snmpPrimary\" typeahead-editable=\"false\" typeahead-min-length=\"0\"\n             uib-typeahead=\"a.id as a.title for a in getSnmpPrimaryValues(requisitionInterface.ipAddress) | filter:$viewValue\" required\n             ng-class=\"{ 'is-invalid' : intfForm.snmpPrimary.$invalid }\">\n      <p ng-show=\"intfForm.snmpPrimary.$invalid\" class=\"invalid-feedback\">A valid SNMP Primary Flag is required, only one primary interface is allowed within the node.</p>\n    </div>\n    <label ng-show=\"requisitionInterface.services.length > 0\">Services</label>\n    <ng-form name=\"serviceForm\" ng-repeat=\"service in requisitionInterface.services\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <i class=\"fa fa-pencil\"></i>\n            </div>\n          </div>\n          <input class=\"form-control\" type=\"text\" name=\"serviceName\" placeholder=\"Service Name (choose one from the list or type a custom text for a new one)\"\n                 ng-model=\"service.name\" typeahead-editable=\"true\" typeahead-min-length=\"0\"\n                 uib-typeahead=\"service for service in getAvailableServices() | filter:$viewValue | orderBy:'toString()'\" required valid-service\n                 ng-class=\"{ 'is-invalid' : serviceForm.serviceName.$invalid }\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-secondary\" type=\"button\" ng-click=\"removeService($index)\">\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </span>\n          <p ng-show=\"serviceForm.serviceName.$invalid\" class=\"invalid-feedback\">Service name is required and should be unique on the interface.</p>\n        </div>\n      </div>\n    </ng-form>\n  </form>\n</div>\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" id=\"add-service\" ng-click=\"addService()\" ng-disabled=\"intfForm.$invalid\">Add Service</button>\n  <button type=\"button\" class=\"btn btn-primary\" id=\"save-interface\" ng-click=\"save()\" ng-disabled=\"intfForm.$invalid\">Save</button>\n  <button type=\"button\" class=\"btn btn-secondary\" id=\"cancel-interface\" ng-click=\"cancel()\">Cancel</button>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/interface.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/metadata.html":
/*!***************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/metadata.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"modal-header\">\n  <h3 class=\"modal-title\">Meta-Data Entry</h3>\n</div>\n\n<div class=\"modal-body\">\n  <form name=\"metaDataForm\">\n    <div class=\"form-group\">\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"metadata-context\">Scope</label>\n        <select class=\"form-control\" id=\"metadata-context\" ng-model=\"entry.scope\" required>\n          <option ng-repeat=\"(scope, displayString) in availableScopes\" value=\"{{ scope }}\">{{ displayString }}</option>\n        </select>\n      </div>\n      <div ng-if=\"entry.scope == 'interface'\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"metadata-interface\">Interface</label>\n          <select class=\"form-control\" id=\"metadata-interface\" ng-model=\"entry.interface_idx\" required>\n            <option ng-repeat=\"iff in node.interfaces\" value=\"{{ $index }}\">{{ iff.ipAddress }}</option>\n          </select>\n        </div>\n      </div>\n      <div ng-if=\"entry.scope == 'service'\">\n        <div>\n          <label class=\"control-label\" for=\"metadata-service-interface\">Interface</label>\n          <select class=\"form-control\" id=\"metadata-service-interface\" ng-model=\"entry.interface_idx\" required>\n            <!-- Only show the interfaces with services here -->\n            <option ng-repeat=\"iff in interfacesWithServices\" value=\"{{ $index }}\">{{ iff.ipAddress }}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"metadata-service-service\">Service</label>\n          <select class=\"form-control\" id=\"metadata-service-service\" ng-model=\"entry.service_idx\" required>\n            <option ng-repeat=\"svc in interfacesWithServices[entry.interface_idx].services\" value=\"{{ $index }}\">{{ svc.name }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group\" ng-class=\"{ 'has-error' : metaDataForm.value.$invalid }\">\n        <label class=\"control-label\" for=\"metadata-key\">Key</label>\n        <input class=\"form-control\" type=\"text\" id=\"metadata-key\" name=\"key\" placeholder=\"Key\" ng-model=\"entry.key\" required valid-meta-data-key=\"entry\">\n        <p ng-show=\"metaDataForm.key.$invalid\" class=\"help-block\">A unique key is required.</p>\n      </div>\n      <div class=\"form-group\" ng-class=\"{ 'has-error' : metaDataForm.value.$invalid }\">\n        <label class=\"control-label\" for=\"metadata-value\">Value</label>\n        <textarea class=\"form-control\" cols=\"60\" rows=\"{{ getValueRowCount(entry) }}\" id=\"metadata-value\" name=\"value\" placeholder=\"Value\" ng-model=\"entry.value\">\n        </textarea>\n        <p ng-show=\"metaDataForm.value.$invalid\" class=\"help-block\">A non empty value is required.</p>\n      </div>\n    </div>\n  </form>\n</div>\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" id=\"save-metadata\" ng-click=\"save()\" ng-disabled=\"metaDataForm.$invalid\">Save</button>\n  <button type=\"button\" class=\"btn btn-default\" id=\"cancel-metadata\" ng-click=\"cancel()\" >Cancel</button>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/metadata.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/move.html":
/*!***********************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/move.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n<!-- Alejandro Galue (agalue@opennms.org) -->\n\n<div class=\"modal-header\">\n  <h3 class=\"modal-title\">Move</h3>\n</div>\n\n<div class=\"modal-body\">\n  <form name=\"moveForm\">\n    <label class=\"col-form-label\">{{ label }}</label>\n    <div class=\"input-group\">\n      <span class=\"input-group-prepend\">\n        <button type=\"button\" class=\"btn btn-secondary btn-number\" ng-disabled=\"position == 0 || moveForm.$invalid\" ng-click=\"substract()\">\n          <span class=\"fa fa-minus\"></span>\n        </button>\n      </span>\n      <input type=\"text\" ng-model=\"position\" class=\"form-control input-number\" ng-pattern=\"/\\d+/\" required>\n      <span class=\"input-group-append\">\n        <button type=\"button\" class=\"btn btn-secondary btn-number\" ng-disabled=\"position == maximum || moveForm.$invalid\" ng-click=\"add()\">\n          <span class=\"fa fa-plus\"></span>\n        </button>\n      </span>\n    </div>\n    <p class=\"form-text text-muted\">Choose a index between 0 and {{ maximum }}.</p>\n  </form>\n</div>\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" id=\"save-detector\" ng-click=\"move()\" ng-disabled=\"position > maximum || moveForm.$invalid\">Move</button>\n  <button type=\"button\" class=\"btn btn-secondary\" id=\"cancel-detector\" ng-click=\"cancel()\">Cancel</button>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/move.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-assets.html":
/*!******************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/node-assets.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"mt-4 pull-right\">\n      <button type=\"button\" class=\"btn btn-secondary btn-sm\" id=\"add-asset\" ng-click=\"addAsset()\">\n        <span class=\"fa fa-plus\"></span> Add Asset\n      </button>\n    </div>\n  </div>\n</div>\n<p></p>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped table-sm\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Value</th>\n        <th><span class=\"pull-right\">Actions</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr ng-repeat=\"asset in node.assets\">\n        <td>{{asset.name}}</td>\n        <td>{{asset.value}}</td>\n        <td>\n          <span class=\"pull-right\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" uib-tooltip=\"Edit the asset\" ng-click=\"editAsset($index)\">\n              <span class=\"fa fa-pencil\"></span>\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" uib-tooltip=\"Remove the asset\" ng-click=\"removeAsset($index)\">\n              <span class=\"fa fa-trash\"></span>\n            </button>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/node-assets.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-basic.html":
/*!*****************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/node-basic.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<br>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"foreignId\">Foreign ID</label>\n  <div class=\"input-group\">\n    <input class=\"form-control\" type=\"text\" id=\"foreignId\" name=\"foreignId\"\n           placeholder=\"Foreign ID (must be unique within the requisition)\"\n           ng-model=\"node.foreignId\" ng-disabled=\"!isNew\" required valid-foreign-id\n           ng-class=\"{ 'is-invalid' : nodeForm.foreignId.$invalid }\">\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-secondary\" type=\"button\" ng-click=\"generateForeignId(nodeForm.foreignId)\" ng-disabled=\"!isNew\"><span class=\"fa fa-tag\"></span> Auto-generate</button>\n    </div>\n    <p ng-show=\"nodeForm.foreignId.$invalid\" class=\"invalid-feedback\">Foreign ID is required and must be unique within the requisition, and it cannot contain, :, /, \\, ?, &amp;, *, ', \"</p>\n  </div>\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"nodeLabel\">Node Label</label>\n  <input class=\"form-control\" type=\"text\" id=\"nodeLabel\" name=\"nodeLabel\" placeholder=\"Node Label\" ng-model=\"node.nodeLabel\" required\n         ng-class=\"{ 'is-invalid' : nodeForm.nodeLabel.$invalid }\">\n  <p ng-show=\"nodeForm.nodeLabel.$invalid\" class=\"invalid-feedback\">Node Label is required.</p>\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"nodeLabel\">Minion Location</label>\n  <input class=\"form-control\" type=\"text\" id=\"location\" name=\"location\" placeholder=\"Location [optional]\" ng-model=\"node.location\" ng-disabled=\"availableLocations.length == 0\"\n         typeahead-min-length=\"0\" typeahead-editable=\"false\" uib-typeahead=\"location for location in availableLocations\" typeahead-on-select=\"nodeForm.$setDirty();\">\n  <p ng-show=\"availableLocations.length == 0\" class=\"form-text text-muted\">There are no locations available. (Set to Location \"Default\")</p>\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"building\">Building</label>\n  <input class=\"form-control\" type=\"text\" id=\"building\" name=\"building\" placeholder=\"Building [optional]\" ng-model=\"node.building\">\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"city\">City</label>\n  <input class=\"form-control\" type=\"text\" id=\"city\" name=\"city\" placeholder=\"City [optional]\" ng-model=\"node.city\">\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/node-basic.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-categories.html":
/*!**********************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/node-categories.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"pull-right mt-4\">\n      <button type=\"button\" class=\"btn btn-secondary btn-sm\" id=\"add-category\" ng-click=\"addCategory()\">\n        <span class=\"fa fa-plus\"></span> Add Category\n      </button>\n    </div>\n  </div>\n</div>\n<p></p>\n<ng-form name=\"categoryForm\" ng-repeat=\"category in node.categories\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text\">\n          <i class=\"fa fa-pencil\"></i>\n        </div>\n      </div>\n      <input class=\"form-control\" type=\"text\" name=\"categoryName\"\n             placeholder=\"Category Name (choose one from the list or type a custom text for a new one)\"\n             ng-model=\"category.name\" typeahead-min-length=\"0\" typeahead-editable=\"true\"\n             uib-typeahead=\"category for category in getAvailableCategories() | filter:$viewValue | orderBy:'toString()'\"\n             required valid-category=\"category\"\n             ng-class=\"{ 'is-invalid' : categoryForm.categoryName.$invalid }\">\n      <div class=\"input-group-append\">\n        <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"removeCategory($index)\">\n          <span class=\"fa fa-trash\"></span>\n        </button>\n      </div>\n      <p ng-show=\"categoryForm.categoryName.$invalid\" class=\"invalid-feedback\">Category name is required and should be unique on the node.</p>\n    </div>\n  </div>\n</ng-form>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/node-categories.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-interfaces.html":
/*!**********************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/node-interfaces.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"mt-4 pull-right\">\n      <button type=\"button\" class=\"btn btn-secondary btn-sm\" id=\"add-interface\" ng-click=\"addInterface()\">\n        <span class=\"fa fa-plus\"></span> Add Interface\n      </button>\n    </div>\n  </div>\n</div>\n<p></p>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped table-sm\">\n    <thead>\n      <tr>\n        <th>IP Address</th>\n        <th>Description</th>\n        <th>SNMP Primary</th>\n        <th>Services</th>\n        <th><span class=\"pull-right\">Actions</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr ng-repeat=\"intf in node.interfaces\">\n        <td>{{ intf.ipAddress }}</td>\n        <td>{{ intf.description || 'N/A' }}</td>\n        <td>{{ intf.snmpPrimary }}</td>\n        <td>\n          <div ng-hide=\"intf.services.length > 0\">[No services]</div>\n          <div ng-repeat=\"service in intf.services\">\n            <p>{{ service.name }}</p>\n          </div>\n        </td>\n        <td>\n          <div class=\"pull-right\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" uib-tooltip=\"Edit the interface\" ng-click=\"editInterface($index)\">\n              <span class=\"fa fa-pencil\"></span>\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" uib-tooltip=\"Remove the interface\" ng-click=\"removeInterface($index)\">\n              <span class=\"fa fa-trash\"></span>\n            </button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/node-interfaces.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-metadata.html":
/*!********************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/node-metadata.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"mt-4 pull-right\">\n      <button type=\"button\" class=\"btn btn-secondary btn-sm\" id=\"add-metadata\" ng-click=\"addMetaData()\">\n        <span class=\"fa fa-plus\"></span> Add Meta-Data\n      </button>\n    </div>\n  </div>\n</div>\n<p></p>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-striped table-sm\">\n    <thead>\n      <tr>\n        <th>Scope</th>\n        <th>Interface</th>\n        <th>Service</th>\n        <th>Key</th>\n        <th>Value</th>\n        <th><span class=\"pull-right\">Actions</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr ng-repeat=\"entry in node.metaData.requisition | orderBy:['scope','scoped_interface','scoped_service','key']\">\n        <td>{{ entry.displayScope() }}</td>\n        <td ng-if=\"entry.displayInterface() != null\">{{ entry.displayInterface() }}</td>\n        <td ng-if=\"entry.displayInterface() == null\" class=\"text-muted\">*</td>\n        <td ng-if=\"entry.displayService() != null\">{{ entry.displayService() }}</td>\n        <td ng-if=\"entry.displayService() == null\" class=\"text-muted\">*</td>\n        <td>{{ entry.key }}</td>\n        <td>{{ entry.value }}</td>\n        <td>\n          <span class=\"pull-right\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" uib-tooltip=\"Edit the meta-data entry\" ng-click=\"editMetaData(entry)\">\n              <span class=\"fa fa-pencil\"></span>\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" uib-tooltip=\"Remove the meta-data entry\" ng-click=\"removeMetaData(entry)\">\n              <span class=\"fa fa-trash\"></span>\n            </button>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/node-metadata.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/node-pathoutages.html":
/*!***********************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/node-pathoutages.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<br>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"parentForeignSource\">Parent Foreign Source</label>\n  <input class=\"form-control\" type=\"text\" id=\"parentForeignSource\" name=\"parentForeignSource\" placeholder=\"Parent Foreign Source (leave it blank to use the current requisition)\" ng-model=\"node.parentForeignSource\">\n</div>\n<div class=\"form-group\" ng-show=\"node.parentNodeLabel == null || node.parentNodeLabel == ''\">\n  <label class=\"col-form-label\" for=\"parentForeignId\">Parent Foreign ID</label>\n  <input class=\"form-control\" type=\"text\" id=\"parentForeignId\" name=\"parentForeignId\"\n         placeholder=\"Parent Foreign ID (use either this or Parent Node Label)\" ng-model=\"node.parentForeignId\">\n</div>\n<div class=\"form-group\" ng-show=\"node.parentForeignId == null || node.parentForeignId == ''\">\n  <label class=\"col-form-label\" for=\"parentNodeLabel\">Parent Node Label</label>\n  <input class=\"form-control\" type=\"text\" id=\"parentNodeLabel\" name=\"parentNodeLabel\"\n         placeholder=\"Parent Node Label (use either this or Parent Foreign ID)\" ng-model=\"node.parentNodeLabel\">\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/node-pathoutages.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.editable.html":
/*!****************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.editable.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"form-group\">\n  <input required class=\"form-control\" type=\"text\" name=\"paramName\"\n          placeholder=\"Parameter Name (hit space bar to see the options, and choose one)\"\n          ng-model=\"parameter.key\"\n          typeahead-min-length=\"0\" typeahead-editable=\"false\"\n          uib-typeahead=\"param for param in getOptionalParameters() | filter:$viewValue\"\n         ng-class=\"{ 'is-invalid' : paramForm.paramName.$invalid }\">\n  <p ng-show=\"paramForm.paramName.$invalid\" class=\"invalid-feedback\">Parameter name is required.</p>\n</div>\n<div class=\"form-group\">\n  <div class=\"input-group\">\n    <input class=\"form-control\" type=\"text\" name=\"paramValue\" placeholder=\"Parameter Value\" ng-model=\"parameter.value\" required\n           ng-class=\"{ 'is-invalid' : paramForm.paramValue.$invalid }\">\n    <span class=\"input-group-append\">\n      <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"removeParameter($index)\">\n        <span class=\"fa fa-trash\"></span>\n      </button>\n    </span>\n    <p ng-show=\"paramForm.paramValue.$invalid\" class=\"invalid-feedback\">Parameter value is required.</p>\n  </div>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.editable.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.fixed.html":
/*!*************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.fixed.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"form-group\">\n  <label class=\"col-form-label\">{{ parameter.key }}</label>\n  <div class=\"input-group\">\n    <input class=\"form-control\" type=\"text\" name=\"paramValue\" placeholder=\"Parameter Value\" ng-model=\"parameter.value\" required\n           ng-class=\"{ 'is-invalid' : paramForm.paramValue.$invalid }\">\n    <span class=\"input-group-append\">\n      <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"removeParameter($index)\">\n        <span class=\"fa fa-trash\"></span>\n      </button>\n    </span>\n    <p ng-show=\"paramForm.paramValue.$invalid\" class=\"invalid-feedback\">Parameter value is required.</p>\n  </div>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.fixed.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.options.html":
/*!***************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.options.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"form-group\">\n  <label class=\"col-form-label\">{{ parameter.key }}</label>\n  <input required class=\"form-control\" type=\"text\" name=\"paramValue\"\n          placeholder=\"Select an option for {{ parameter.key }} (hit space bar to see the options and choose one)\"\n          ng-model=\"parameter.value\"\n          typeahead-min-length=\"0\" typeahead-editable=\"false\"\n          uib-typeahead=\"param for param in getParameterOptions(parameter.key) | filter:$viewValue\"\n         ng-class=\"{ 'is-invalid' : paramForm.paramValue.$invalid }\">\n  <p ng-show=\"paramForm.paramValue.$invalid\" class=\"invalid-feedback\">Parameter value is required.</p>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.options.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.string.html":
/*!**************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.string.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"form-group\">\n  <label class=\"col-form-label\">{{ parameter.key }}</label>\n  <input class=\"form-control\" type=\"text\" name=\"paramValue\" placeholder=\"Parameter Value\" ng-model=\"parameter.value\" required\n         ng-class=\"{ 'is-invalid' : paramForm.paramValue.$invalid }\">\n  <p ng-show=\"paramForm.paramValue.$invalid\" class=\"invalid-feedback\">Parameter value is required.</p>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/policy-param.string.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/policy.html":
/*!*************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/policy.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n<!-- Alejandro Galue (agalue@opennms.org) -->\n\n<div class=\"modal-header\">\n  <h3 class=\"modal-title\">Policy</h3>\n</div>\n\n<div class=\"modal-body\">\n  <form name=\"policyForm\">\n    <div class=\"form-group\">\n      <label class=\"col-form-label\" for=\"name\">Name</label>\n      <input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" placeholder=\"Policy Name\" ng-model=\"policy.name\" required\n             ng-class=\"{ 'is-invalid' : policyForm.name.$invalid }\">\n      <p ng-show=\"policyForm.name.$invalid\" class=\"invalid-feedback\">A non empty name is required.</p>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-form-label\" for=\"clazz\">Class</label>\n      <input class=\"form-control\" type=\"text\" id=\"clazz\" name=\"clazz\" placeholder=\"Implementation Class (choose one from the list)\"\n             ng-model=\"policy.class\" typeahead-min-length=\"0\" typeahead-editable=\"false\" typeahead-on-select=\"updatePolicyParameters($item)\"\n             uib-typeahead=\"policy.class as policy.name for policy in availablePolicies | filter:$viewValue\" required\n             ng-class=\"{ 'is-invalid' : policyForm.clazz.$invalid }\">\n      <p ng-show=\"policyForm.clazz.$invalid\" class=\"invalid-feedback\">A valid class name is required.</p>\n    </div>\n    <ng-form name=\"paramForm\" ng-repeat=\"parameter in policy.parameter\" ng-include=\"getTemplate(parameter)\">\n    </ng-form>\n  </form>\n</div>\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" id=\"add-policy-parameter\" ng-click=\"addParameter()\" ng-disabled=\"policyForm.clazz.$invalid\">Add Parameter</button>\n  <button type=\"button\" class=\"btn btn-primary\" id=\"save-policy\" ng-click=\"save()\" ng-disabled=\"policyForm.$invalid\">Save</button>\n  <button type=\"button\" class=\"btn btn-secondary\" id=\"cancel=policy\" ng-click=\"cancel()\">Cancel</button>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/policy.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-node-standalone.html":
/*!********************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-node-standalone.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n<!-- Alejandro Galue (agalue@opennms.org) -->\n\n<ol class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\"><a href=\"/opennms/index.jsp\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a href=\"/opennms/admin/index.jsp\">Admin</a></li>\n  <li class=\"breadcrumb-item\"><a href=\"/opennms/admin/ng-requisitions/index.jsp\">Provisioning Requisitions</a></li>\n  <li class=\"breadcrumb-item active\">Quick-Add Node</li>\n</ol>\n\n<!-- Content -->\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <form name=\"quickAddNodeForm\">\n    <fieldset ng-disabled=\"isSaving\">\n      <div class=\"card\">\n        <div class=\"card-header\"><span>Basic Attributes (required)</span></div>\n        <div class=\"card-body\" ng-include=\"quickAddPanelBasicView\"></div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\"><span>SNMP Parameters (optional)</span></div>\n        <div class=\"card-body\" ng-include=\"quickAddPanelSnmpView\"></div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\"><span>Surveillance Category Memberships (optional)</span></div>\n        <div class=\"card-body\" ng-include=\"quickAddPanelCategoriesView\"></div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\"><span>CLI Authentication Parameters (optional)</span></div>\n        <div class=\"card-body\" ng-include=\"quickAddPanelCliView\"></div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" class=\"btn btn-primary\" id=\"provision\" ng-click=\"provision()\" ng-disabled=\"isInvalid()\">Provision</button>\n        <button type=\"button\" class=\"btn btn-primary\" id=\"reset\" ng-click=\"reset()\">Reset</button>\n      </div>\n    </fieldset>\n    </form>\n\n  </div> <!-- column -->\n\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\"><span>Node Quick-Add Help</span></div>\n      <div class=\"card-body\" ng-include=\"quickAddPanelHelpView\"></div>\n    </div>\n  </div> <!-- column -->\n\n</div> <!-- row -->\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-node-standalone.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-node.html":
/*!*********************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-node.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n<!-- Alejandro Galue (agalue@opennms.org) -->\n\n<div class=\"modal-header\">\n  <h3 class=\"modal-title\">Quick-Add Node</h3>\n</div>\n\n<div class=\"modal-body\">\n  <form name=\"quickAddNodeForm\">\n    <uib-tabset>\n\n      <uib-tab heading=\"Basic Attributes\" id=\"tab-basic-information\">\n        <ng-include src=\"quickAddPanelBasicView\"></ng-include>\n      </uib-tab>\n\n      <uib-tab heading=\"SNMP Parameters\" id=\"tab-snmp-parameters\">\n        <ng-include src=\"quickAddPanelSnmpView\"></ng-include>\n      </uib-tab>\n\n      <uib-tab heading=\"Surveillance Categories\" id=\"tab-categories\">\n        <ng-include src=\"quickAddPanelCategoriesView\"></ng-include>\n      </uib-tab>\n\n      <uib-tab heading=\"CLI Authentication\" id=\"tab-cli-auth-parameters\">\n        <ng-include src=\"quickAddPanelCliView\"></ng-include>\n      </uib-tab>\n\n      <uib-tab heading=\"Help\" id=\"tab-help\">\n        <ng-include src=\"quickAddPanelHelpView\"></ng-include>\n      </uib-tab>\n\n    </uib-tabset>\n  </form>\n</div> <!-- modal-body -->\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" id=\"provision\" ng-click=\"modalProvision()\" ng-disabled=\"isInvalid()\">Provision</button>\n  <button type=\"button\" class=\"btn btn-secondary\" id=\"cancel\" ng-click=\"modalCancel()\">Cancel</button>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-node.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-basic.html":
/*!****************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-basic.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"foreignSource\">Requisition</label>\n  <input class=\"form-control\" type=\"text\" id=\"foreignSource\" name=\"foreignSource\"\n         placeholder=\"Select a Requisition (hit space bar to see the options or start typing the name)\"\n         ng-model=\"node.foreignSource\" typeahead-editable=\"false\" typeahead-min-length=\"0\" uib-typeahead=\"fs for fs in foreignSources | filter:$viewValue\" required\n         ng-class=\"{ 'is-invalid' : quickAddNodeForm.foreignSource.$invalid }\">\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"ipAddress\">IP Address</label>\n  <input class=\"form-control\" type=\"text\" id=\"ipAddress\" name=\"ipAddress\" placeholder=\"A valid IPv4 or IPv6 address\" ng-model=\"node.ipAddress\" required valid-ip-address\n         ng-class=\"{ 'is-invalid' : quickAddNodeForm.ipAddress.$invalid }\">\n  <p ng-show=\"quickAddNodeForm.ipAddress.$invalid\" class=\"invalid-feedback\">A valid IPv4 or IPv6 address is required</p>\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"nodeLabel\">Node Label</label>\n  <input class=\"form-control\" type=\"text\" id=\"nodeLabel\" name=\"nodeLabel\" placeholder=\"The Node Label\" ng-model=\"node.nodeLabel\" required\n         ng-class=\"{ 'is-invalid' : quickAddNodeForm.nodeLabel.$invalid }\">\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-basic.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-categories.html":
/*!*********************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-categories.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<button class=\"btn btn-secondary my-2\" id=\"add-category\" ng-click=\"addCategory()\"><i class=\"fa fa-plus\"></i> Add Category</button>\n<br>\n<ng-form name=\"categoryForm\" ng-repeat=\"category in node.categories\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text\"><i class=\"fa fa-pencil\"></i></div>\n      </div>\n      <input class=\"form-control\" type=\"text\" name=\"categoryName\" placeholder=\"Category Name\" ng-model=\"category.name\"\n             typeahead-min-length=\"0\" typeahead-editable=\"true\" uib-typeahead=\"category for category in getAvailableCategories() | filter:$viewValue\" required\n             ng-class=\"{ 'is-invalid' : categoryForm.categoryName.$invalid }\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-secondary\" type=\"button\" ng-click=\"removeCategory($index)\">\n          <span class=\"fa fa-trash\"></span>\n        </button>\n      </div>\n      <p ng-show=\"categoryForm.categoryName.$invalid\" class=\"invalid-feedback\">Category name is required and should be unique on the node.</p>\n    </div>\n  </div>\n</ng-form>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-categories.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-cli.html":
/*!**************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-cli.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"descr\">Device username</label>\n  <input class=\"form-control\" type=\"text\" id=\"deviceUsername\" name=\"deviceUsername\" placeholder=\"The device username [optional]\" ng-model=\"node.deviceUsername\">\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"descr\">Device password</label>\n  <input class=\"form-control\" type=\"text\" id=\"devicePassword\" name=\"devicePassword\" placeholder=\"The device password [optional]\" ng-model=\"node.devicePassword\">\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"descr\">Enable Password</label>\n  <input class=\"form-control\" type=\"text\" id=\"enablePassword\" name=\"enablePassword\" placeholder=\"The enable password [optional]\" ng-model=\"node.enablePassword\">\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"descr\">Access Method</label>\n  <input class=\"form-control\" type=\"text\" id=\"accessmethod\" name=\"accessMethod\" placeholder=\"Access Method (hit space bar to see the options) [optional]\" ng-model=\"node.accessMethod\" typeahead-editable=\"false\" typeahead-min-length=\"0\" uib-typeahead=\"m for m in availableAccessMethods | filter:$viewValue\" required>\n</div>\n<div class=\"form-group\">\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" id=\"autoEnable\" name=\"autoEnable\" ng-model=\"node.autoEnable\">\n      Auto Enable\n    </label>\n  </div>\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-cli.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-help.html":
/*!***************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-help.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<p>\nThis workflow provides a quick way to add a node to an existing\nprovisioning requisition in this OpenNMS system.\n</p>\n\n<p>\n<strong>Note: This operation <em>will</em> override any un-synchronized\nmodifications made to the selected requisition.</strong>\n</p>\n\n<p>\n<em>Basic Attributes</em> are common to all nodes. Select the requisition\ninto which this node should be added, provide an IP address on which OpenNMS\nwill communicate with the node, and enter a node label. The node label will\nserve as the display name for the node throughout OpenNMS.\n</p>\n\n<p>\n<em>Surveillance Category Memberships</em> are optional and work like tags.\nA node can be a member of any number of surveillance categories, and the\nnames of those categories can be used in a variety of powerful ways throughout\nthe OpenNMS system.\n</p>\n\n<p>\n<em>SNMP Parameters</em> are optional and apply only to the node being\nrequisitioned. If no values are specified here, OpenNMS' system-wide SNMP\nconfiguration will be used to determine the appropriate values for the IP\naddress entered in the <em>Basic Attributes</em> section. If the node does not\nsupport SNMP, the \"No SNMP\" box should be checked. Configuring SNMPv3\nparameters via the web UI is not supported; contact your OpenNMS administrator\nif this node requires SNMPv3 parameters that differ from those in the\nsystem-wide configuration.\n</p>\n\n<p>\n<em>CLI Authentication Parameters</em> are optional and will be used only if one\nor more provisioning adapters are configured to use them. Typically this is the\ncase if OpenNMS is integrated with an external configuration management system.\n</p>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-help.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-snmp.html":
/*!***************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-snmp.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n<div class=\"form-group\">\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" id=\"noSnmp\" name=\"noSnmp\" ng-model=\"node.noSnmp\">\n      No SNMP\n    </label>\n  </div>\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"snmpVersion\">Version</label>\n  <select class=\"form-control custom-select\" id=\"snmpVersion\" name=\"snmpVersion\" ng-model=\"node.snmpVersion\" ng-disabled=\"node.noSnmp\">\n    <option>v1</option>\n    <option selected>v2c</option>\n  </select>\n</div>\n<div class=\"form-group\">\n  <label class=\"col-form-label\" for=\"snmpCommunity\">Community String</label>\n  <input class=\"form-control\" type=\"text\" id=\"snmpCommunity\" name=\"snmpCommunity\" placeholder=\"SNMP Community String\" ng-model=\"node.snmpCommunity\" ng-disabled=\"node.noSnmp\">\n</div>\n\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-panel-snmp.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/quickaddnode/index.js":
/*!*************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/quickaddnode/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(/*! ../../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
__webpack_require__(/*! ./main */ "./src/main/assets/js/apps/onms-requisitions/quickaddnode/main.js");
__webpack_require__(/*! ../requisitions-core/index */ "./src/main/assets/js/apps/onms-requisitions/requisitions-core/index.js");

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/quickaddnode/main.js":
/*!************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/quickaddnode/main.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2016-2022 The OpenNMS Group, Inc.
*/

(function () {
  'use strict';

  var quickAddNodeStandaloneView = __webpack_require__(/*! ../lib/views/quick-add-node-standalone.html */ "./src/main/assets/js/apps/onms-requisitions/lib/views/quick-add-node-standalone.html");
  angular.module('onms-requisitions', ['onms.http', 'onms.default.apps', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'angular-growl', 'angular-loading-bar', 'ngSanitize', 'onmsDateFormatter']).config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: quickAddNodeStandaloneView,
      controller: 'QuickAddNodeController',
      resolve: {
        foreignSources: function foreignSources() {
          return null;
        }
      }
    }).otherwise({
      redirectTo: '/'
    });
  }]).config(['growlProvider', function (growlProvider) {
    growlProvider.globalTimeToLive(3000);
    growlProvider.globalPosition('bottom-center');
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-requisitions/requisitions-core/index.js":
/*!******************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-requisitions/requisitions-core/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../lib/onms-http */ "./src/main/assets/js/lib/onms-http/index.js");
__webpack_require__(/*! ../../onms-date-formatter */ "./src/main/assets/js/apps/onms-date-formatter/index.js");
__webpack_require__(/*! ../../onms-default-apps */ "./src/main/assets/js/apps/onms-default-apps/index.js");
__webpack_require__(/*! ../lib/scripts/controllers/Asset.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Asset.js");
__webpack_require__(/*! ../lib/scripts/controllers/CloneForeignSource.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/CloneForeignSource.js");
__webpack_require__(/*! ../lib/scripts/controllers/Detector.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Detector.js");
__webpack_require__(/*! ../lib/scripts/controllers/ForeignSource.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/ForeignSource.js");
__webpack_require__(/*! ../lib/scripts/controllers/Interface.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Interface.js");
__webpack_require__(/*! ../lib/scripts/controllers/MetaData.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/MetaData.js");
__webpack_require__(/*! ../lib/scripts/controllers/Move.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Move.js");
__webpack_require__(/*! ../lib/scripts/controllers/Node.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Node.js");
__webpack_require__(/*! ../lib/scripts/controllers/Policy.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Policy.js");
__webpack_require__(/*! ../lib/scripts/controllers/QuickAddNode.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/QuickAddNode.js");
__webpack_require__(/*! ../lib/scripts/controllers/QuickAddNodeModal.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/QuickAddNodeModal.js");
__webpack_require__(/*! ../lib/scripts/controllers/Requisition.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Requisition.js");
__webpack_require__(/*! ../lib/scripts/controllers/Requisitions.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/controllers/Requisitions.js");
__webpack_require__(/*! ../lib/scripts/directives/requisitionConstraints.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/directives/requisitionConstraints.js");
__webpack_require__(/*! ../lib/scripts/filters/startFrom.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/filters/startFrom.js");
__webpack_require__(/*! ../lib/scripts/model/QuickNode.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/QuickNode.js");
__webpack_require__(/*! ../lib/scripts/model/Requisition.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/Requisition.js");
__webpack_require__(/*! ../lib/scripts/model/RequisitionInterface.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionInterface.js");
__webpack_require__(/*! ../lib/scripts/model/RequisitionNode.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionNode.js");
__webpack_require__(/*! ../lib/scripts/model/RequisitionService.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionService.js");
__webpack_require__(/*! ../lib/scripts/model/RequisitionsData.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/model/RequisitionsData.js");
__webpack_require__(/*! ../lib/scripts/services/Requisitions.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Requisitions.js");
__webpack_require__(/*! ../lib/scripts/services/Synchronize.js */ "./src/main/assets/js/apps/onms-requisitions/lib/scripts/services/Synchronize.js");

/***/ }),

/***/ "./src/main/assets/js/apps/search/index.js":
/*!*************************************************!*\
  !*** ./src/main/assets/js/apps/search/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2016-2022 The OpenNMS Group, Inc.
*/



var _util = _interopRequireDefault(__webpack_require__(/*! ../../../modules/lib/util */ "./src/main/assets/modules/lib/util/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
__webpack_require__(/*! ../../lib/onms-http */ "./src/main/assets/js/lib/onms-http/index.js");
var kscTemplate = __webpack_require__(/*! ./template.ksc.html */ "./src/main/assets/js/apps/search/template.ksc.html");
var nodesTemplate = __webpack_require__(/*! ./template.nodes.html */ "./src/main/assets/js/apps/search/template.nodes.html");
angular.module('onms-search', ['onms.http', 'ui.bootstrap']).config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('');
}]).directive('onmsSearchNodes', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: nodesTemplate,
    controller: 'NodeSearchCtrl'
  };
}).directive('onmsSearchKsc', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: kscTemplate,
    controller: 'KscSearchCtrl'
  };
}).controller('NodeSearchCtrl', ['$scope', '$window', '$http', function ($scope, $window, $http) {
  $scope.getNodes = function (criteria) {
    return $http({
      url: 'rest/nodes',
      method: 'GET',
      params: {
        label: criteria,
        comparator: 'contains'
      }
    }).then(function (response) {
      return response.data.node;
    });
  };
  $scope.goToChooseResources = function (node) {
    $window.location.href = _util.default.getBaseHref() + 'graph/chooseresource.jsp?node=' + node.id;
  };
}]).controller('KscSearchCtrl', ['$scope', '$window', '$http', '$filter', function ($scope, $window, $http, $filter) {
  $scope.getKscReports = function (criteria) {
    return $http({
      url: 'rest/ksc',
      method: 'GET'
    }).then(function (response) {
      return $filter('filter')(response.data.kscReport, criteria);
    });
  };
  $scope.goToKscReport = function (ksc) {
    $window.location.href = _util.default.getBaseHref() + 'KSC/customView.htm?type=custom&report=' + ksc.id;
  };
}]);

/***/ }),

/***/ "./src/main/assets/js/apps/search/template.ksc.html":
/*!**********************************************************!*\
  !*** ./src/main/assets/js/apps/search/template.ksc.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"form-group\">\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"form-control\" ng-model=\"asyncKsc\" placeholder=\"Type the KSC report name\"\n      uib-typeahead=\"ksc as ksc.label for ksc in getKscReports($viewValue)\"\n      typeahead-editable=\"false\"\n      typeahead-loading=\"kscLoadingNodes\"\n      typeahead-no-results=\"kscNoResults\"\n      typeahead-min-length=\"1\"\n      typeahead-on-select=\"goToKscReport($item)\">\n    <div class=\"input-group-append\">\n      <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n    </div>\n  </div>\n  <i ng-show=\"kscLoadingNodes\" class=\"fa fa-refresh\"></i>\n  <p class=\"form-text text-muted\" ng-show=\"kscNoResults\">\n    <i class=\"fa fa-remove\"></i> No Results Found\n  </p>\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/search/template.ksc.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/search/template.nodes.html":
/*!************************************************************!*\
  !*** ./src/main/assets/js/apps/search/template.nodes.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"form-group\">\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"form-control\" ng-model=\"asyncNode\" placeholder=\"Type the node label\"\n      uib-typeahead=\"node as node.label for node in getNodes($viewValue)\"\n      typeahead-editable=\"false\"\n      typeahead-loading=\"nodeLoadingNodes\"\n      typeahead-no-results=\"nodeNoResults\"\n      typeahead-min-length=\"1\"\n      typeahead-on-select=\"goToChooseResources($item)\">\n    <div class=\"input-group-append\">\n      <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n    </div>\n  </div>\n  <i ng-show=\"nodeLoadingNodes\" class=\"fa fa-refresh\"></i>\n  <p class=\"form-text text-muted\" ng-show=\"nodeNoResults\">\n    <i class=\"fa fa-remove\"></i> No Results Found\n  </p>\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/search/template.nodes.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-http/403-permission-denied.html":
/*!*********************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-http/403-permission-denied.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n<div class=\"modal-header\">\n    <h3><i class=\"fa fa-exclamation-triangle text-warning\"></i> Permission Denied</h3>\n</div>\n<div class=\"modal-body\">\n    <h5>\n        You are not allowed to perform the requested action.\n    </h5>\n    <p class=\"text-muted\">\n        This is not supposed to happen.\n        Please reload the page and contact your administrator if this occurs more often.\n    </p>\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" ng-click=\"reload()\">Reload</button>\n</div>\n</span>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/lib/onms-http/403-permission-denied.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-http/index.js":
/*!***************************************************!*\
  !*** ./src/main/assets/js/lib/onms-http/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _startsWith = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var permissionDeniedTemplate = __webpack_require__(/*! ./403-permission-denied.html */ "./src/main/assets/js/lib/onms-http/403-permission-denied.html");
angular.module('onms.http', ['ui.bootstrap']).factory('InterceptorService', ['$q', '$rootScope', function ($q, $rootScope) {
  return {
    responseError: function responseError(rejection) {
      if (rejection.status === 401) {
        var _context, _context2;
        if (rejection.config && rejection.config.url && ((0, _startsWith.default)(_context = rejection.config.url).call(_context, 'rest/') || (0, _startsWith.default)(_context2 = rejection.config.url).call(_context2, 'api/v2/'))) {
          console.error('Login Required', rejection, rejection.headers); // eslint-disable-line no-console
          $rootScope.$emit('loginRequired');
        }
      }
      if (rejection.status === 403) {
        $rootScope.$emit('permissionDenied');
      }
      return $q.reject(rejection);
    }
  };
}]).config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('');
}]).config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  $httpProvider.interceptors.push('InterceptorService');
}]).run(['$rootScope', '$uibModal', function ($rootScope, $uibModal) {
  $rootScope.$on('loginRequired', function () {
    var baseTags = document.getElementsByTagName('base');
    if (baseTags && baseTags.length > 0 && baseTags[0].href) {
      document.headerLogoutForm.submit();
    } else {
      console.warn('Login is required, but cannot forward to login page due to missing base tag.'); // eslint-disable-line no-console
    }
  });

  $rootScope.$on('permissionDenied', function () {
    $uibModal.open({
      templateUrl: permissionDeniedTemplate,
      controller: ["$scope", "$uibModalInstance", function controller($scope, $uibModalInstance) {
        $scope.reload = function () {
          $uibModalInstance.dismiss();
          window.location.reload();
        };
      }],
      size: '',
      backdrop: 'static',
      keyboard: false
    });
  });
}]);
module.exports = angular;

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

/***/ }),

/***/ "./src/main/assets/modules/lib/util/index.js":
/*!***************************************************!*\
  !*** ./src/main/assets/modules/lib/util/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
var _Symbol = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js");
var _Symbol$iterator = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol/iterator */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/iterator.js");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _toPrimitive2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Util = /*#__PURE__*/function () {
  function Util() {
    _classCallCheck(this, Util);
  }
  _createClass(Util, null, [{
    key: "getBaseHref",
    value: function getBaseHref() {
      var base = document.getElementsByTagName('base')[0];
      if (base) {
        return base.href;
      }
      return '';
    }
  }, {
    key: "setLocation",
    value: function setLocation(url) {
      if (window && window.location) {
        window.location.href = Util.getBaseHref() + url;
      }
    }
  }, {
    key: "toggle",
    value: function toggle(booleanValue, elementName) {
      var checkboxes = document.getElementsByName(elementName);
      for (var index in checkboxes) {
        if (checkboxes.hasOwnProperty(index)) {
          checkboxes[index].checked = booleanValue;
        }
      }
    }
  }]);
  return Util;
}();
exports.default = Util;

/***/ })

},[["./src/main/assets/js/apps/onms-requisitions/quickaddnode/index.js","vendor"]]]);
});
//# sourceMappingURL=quickaddnode.js.map