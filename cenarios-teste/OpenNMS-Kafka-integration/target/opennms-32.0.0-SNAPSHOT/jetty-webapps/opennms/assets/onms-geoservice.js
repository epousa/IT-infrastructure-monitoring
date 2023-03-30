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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onms-geoservice"],{

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

/***/ "./src/main/assets/js/apps/onms-elementList/lib/elementList.js":
/*!*********************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-elementList/lib/elementList.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
var _concat = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"));
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
var _trim = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"));
var _values = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/values */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js"));
var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
var _sort = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js"));
var _context7, _context8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MODULE_NAME = 'onms.elementList';

/**
 * ISO-8601 date format string.
 */
window.ISO_8601_DATE_FORMAT = 'yyyy-MM-ddTHH:mm:ss.sssZ';
window.ISO_8601_DATE_FORMAT_WITHOUT_MILLIS = 'yyyy-MM-ddTHH:mm:ssZ';
var angular = __webpack_require__(/*! ../../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var jQuery = __webpack_require__(/*! ../../../vendor/jquery-js */ "./src/main/assets/js/vendor/jquery-js.js");
__webpack_require__(/*! ../../../vendor/bootstrap-js */ "./src/main/assets/js/vendor/bootstrap-js.js");
var editInPlaceTemplate = __webpack_require__(/*! ../templates/angular-onms-elementList-editInPlace.html */ "./src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editInPlace.html");
var editListInPlaceTemplate = __webpack_require__(/*! ../templates/angular-onms-elementList-editListInPlace.html */ "./src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editListInPlace.html");
var editMapInPlaceTemplate = __webpack_require__(/*! ../templates/angular-onms-elementList-editMapInPlace.html */ "./src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editMapInPlace.html");

/**
 * Function used to append an extra transformer to the default $http transforms.
 */
var appendTransform = function appendTransform(defaultTransform, transform) {
  var t = angular.isArray(defaultTransform) ? defaultTransform : [defaultTransform];
  return (0, _concat.default)(t).call(t, transform);
};

/**
 * Escape FIQL reserved characters by URL-encoding them. Reserved characters are:
 * <ul>
 * <li>!</li>
 * <li>$</li>
 * <li>'</li>
 * <li>(</li>
 * <li>)</li>
 * <li>*</li>
 * <li>+</li>
 * <li>,</li>
 * <li>;</li>
 * <li>=</li>
 * </ul>
 * @param value
 * @returns String with reserved characters URL-encoded
 */
var escapeSearchValue = function escapeSearchValue(value) {
  if (typeof value === 'string') {
    return value.replace('!', '%21').replace('$', '%24').replace('\'', '%27').replace('(', '%28').replace(')', '%29')
    // People are going to type this in as a wildcard, so I
    // guess they'll have to type in '%2A' if they want to
    // match an asterisk...
    //.replace('*', '%2A')
    .replace('+', '%2B').replace(',', '%2C').replace(';', '%3B').replace('=', '%3D');
  }
  return value;
};

/**
 * Convert from a clause into a FIQL query string.
 */
var toFiql = function toFiql(clauses) {
  var first = true;
  var fiql = '';
  for (var i = 0; i < clauses.length; i++) {
    if (!first) {
      fiql += ';';
    }
    fiql += clauses[i].property;
    switch (clauses[i].operator) {
      case 'EQ':
        fiql += '==';
        break;
      case 'NE':
        fiql += '!=';
        break;
      case 'LT':
        fiql += '=lt=';
        break;
      case 'LE':
        fiql += '=le=';
        break;
      case 'GT':
        fiql += '=gt=';
        break;
      case 'GE':
        fiql += '=ge=';
        break;
      default:
        // otherwise, do nothing
        break;
    }
    fiql += escapeSearchValue(clauses[i].value);
    first = false;
  }
  return fiql;
};

/**
 * Convert from a FIQL query string into separate clause objects.
 * This only works for simple queries composed of multiple AND (';')
 * clauses.
 * 
 * TODO: Expand this to cover more FIQL syntax
 */
var fromFiql = function fromFiql(fiql) {
  var statements = fiql.split(';');
  var segments = [];
  var clauses = [];
  for (var i = 0; i < statements.length; i++) {
    var _context, _context2, _context3, _context4, _context5, _context6;
    if ((0, _indexOf.default)(_context = statements[i]).call(_context, '==') > 0) {
      segments = statements[i].split('==');
      clauses.push({
        property: segments[0],
        operator: 'EQ',
        value: segments[1]
      });
    } else if ((0, _indexOf.default)(_context2 = statements[i]).call(_context2, '!=') > 0) {
      segments = statements[i].split('!=');
      clauses.push({
        property: segments[0],
        operator: 'NE',
        value: segments[1]
      });
    } else if ((0, _indexOf.default)(_context3 = statements[i]).call(_context3, '=lt=') > 0) {
      segments = statements[i].split('=lt=');
      clauses.push({
        property: segments[0],
        operator: 'LT',
        value: segments[1]
      });
    } else if ((0, _indexOf.default)(_context4 = statements[i]).call(_context4, '=le=') > 0) {
      segments = statements[i].split('=le=');
      clauses.push({
        property: segments[0],
        operator: 'LE',
        value: segments[1]
      });
    } else if ((0, _indexOf.default)(_context5 = statements[i]).call(_context5, '=gt=') > 0) {
      segments = statements[i].split('=gt=');
      clauses.push({
        property: segments[0],
        operator: 'GT',
        value: segments[1]
      });
    } else if ((0, _indexOf.default)(_context6 = statements[i]).call(_context6, '=ge=') > 0) {
      segments = statements[i].split('=ge=');
      clauses.push({
        property: segments[0],
        operator: 'GE',
        value: segments[1]
      });
    }
  }
  return clauses;
};

/**
 * Parse an HTTP Content-Range header into the start, end, and total fields.
 * The header should be in a format like: "items 0-14/28".
 * 
 * @param contentRange String from the Content-Range header
 */
var parseContentRange = function parseContentRange(contentRange) {
  if (!contentRange) {
    return {
      start: 0,
      end: 0,
      total: 0
    };
  }
  // Example: items 0-14/28
  var pattern = /items\s+?(\d+)\s*-\s*(\d+)\s*\/\s*(\d+)/;
  return {
    start: Number(contentRange.replace(pattern, '$1')),
    end: Number(contentRange.replace(pattern, '$2')),
    total: Number(contentRange.replace(pattern, '$3'))
  };
};
var normalizeOffset = function normalizeOffset(offset, maxOffset, limit) {
  var newOffset = offset;

  // Offset of the last page
  var lastPageOffset;
  if (maxOffset < 0) {
    newOffset = 0;
    lastPageOffset = 0;
  } else {
    lastPageOffset = Math.floor(maxOffset / limit) * limit;
  }

  // Bounds checking
  newOffset = newOffset < 0 ? 0 : newOffset;
  newOffset = newOffset > lastPageOffset ? lastPageOffset : newOffset;

  // Make sure that offset is a multiple of limit
  newOffset = Math.floor(newOffset / limit) * limit;
  return newOffset;
};

/* // BMR: this doesn't seem to actually be used anywhere
String.prototype.endsWith = function(suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
*/

// $filters that can be used to create human-readable versions of filter values
(0, _filter.default)(_context7 = (0, _filter.default)(_context8 = angular.module('onmsListFilters', [])).call(_context8, 'operator', function () {
  return function (input, value) {
    // See if the string contains a wildcard
    var fuzzy = typeof value === 'string' && (0, _indexOf.default)(value).call(value, '*') > -1;
    switch (input) {
      case 'EQ':
        return fuzzy ? 'is like' : 'equals';
      case 'NE':
        return fuzzy ? 'is not like' : 'does not equal';
      case 'LT':
        return 'is less than';
      case 'LE':
        return 'is less than or equal';
      case 'GT':
        return 'is greater than';
      case 'GE':
        return 'is greater than or equal';
      default:
        // If no match, return the input
        return input;
    }
  };
})).call(_context7, 'isNotEmpty', function () {
  return function (input) {
    return input && (typeof input === 'string' ? (0, _trim.default)(input).call(input) !== '' : true);
  };
});

// List module
angular.module(MODULE_NAME, []).config( /* @ngInject */["$locationProvider", function ($locationProvider) {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    // Use HTML5 
    enabled: true,
    // Don't rewrite all <a> links on the page
    rewriteLinks: false
  });
}]).directive('onmsListEditInPlace', /* @ngInject */function () {
  return {
    controller: ["$scope", function controller($scope) {
      $scope.editing = false;
      $scope.originalValue = angular.copy($scope.value);

      // Start editing the value
      $scope.edit = function () {
        $scope.editing = true;
      };

      // Stop editing the value
      $scope.unedit = function () {
        $scope.editing = false;
      };
      $scope.onKeyup = function ($event) {
        // If the user types ESC, then abort the edit
        if ($event.keyCode === 27) {
          $scope.cancel();
        }
      };
      $scope.submit = function () {
        $scope.onSubmit();
        // TODO: Handle update failures
        // Now that we've save a new value, use it as the original value
        $scope.originalValue = $scope.value;
        // Switch out of edit mode
        $scope.unedit();
      };
      $scope.cancel = function () {
        // Restore the original value
        $scope.value = $scope.originalValue;
        // Switch out of edit mode
        $scope.unedit();
      };
    }],
    // Use an isolated scope
    scope: {
      item: '=',
      value: '=',
      valueType: '=',
      // Optional step attribute for number fields
      step: '=',
      onSubmit: '&onSubmit'
    },
    templateUrl: editInPlaceTemplate,
    transclude: true
  };
}).directive('onmsListEditListInPlace', /* @ngInject */["$window", function ($window) {
  return {
    controller: ["$scope", function controller($scope) {
      $scope.editing = false;

      // Start editing the value
      $scope.edit = function () {
        $scope.editing = true;
      };

      // Stop editing the value
      $scope.unedit = function () {
        // Undo any edits
        $scope.newValue = null;
        $scope.editing = false;
      };
      $scope.onKeyup = function (event) {
        switch (event.keyCode) {
          // If the user types Enter, then submit the edit
          case 13:
            $scope.add((0, _values.default)($scope), $scope.newValue);
            break;
          // If the user types ESC, then abort the edit
          case 27:
            $scope.unedit();
            break;
          // otherwise, do nothing
          default:
            break;
        }
      };
      $scope.confirmAndRemove = function (items, item) {
        // Splice the value out of the array
        if ($window.confirm('Are you sure you want to remove "' + item + '"?')) {
          (0, _splice.default)(items).call(items, (0, _indexOf.default)(items).call(items, item), 1);
          $scope.onEdit();
        }
      };
      $scope.add = function (items, item) {
        items.push(item);
        (0, _sort.default)(items).call(items);
        // TODO: Handle update failures
        $scope.onEdit();
        // Switch out of edit mode
        $scope.unedit();
      };
    }],
    // Use an isolated scope
    scope: {
      values: '=',
      valueType: '=',
      // Optional step attribute for number fields
      step: '=',
      onEdit: '&onEdit'
    },
    templateUrl: editListInPlaceTemplate,
    transclude: true
  };
}]).directive('onmsListEditMapInPlace', /* @ngInject */["$window", function ($window) {
  return {
    controller: ["$scope", function controller($scope) {
      $scope.editing = false;

      // Start editing the value
      $scope.edit = function () {
        $scope.editing = true;
      };

      // Stop editing the value
      $scope.unedit = function () {
        // Undo any edits
        $scope.newKey = null;
        $scope.newValue = null;
        $scope.editing = false;
      };
      $scope.onKeyup = function (event) {
        switch (event.keyCode) {
          // If the user types Enter, then submit the edit
          case 13:
            $scope.add((0, _values.default)($scope), $scope.newKey, $scope.newValue);
            break;
          // If the user types ESC, then abort the edit
          case 27:
            $scope.unedit();
            break;
          // otherwise, do nothing
          default:
            break;
        }
      };
      $scope.confirmAndRemove = function (items, key) {
        // Splice the value out of the array
        if ($window.confirm('Are you sure you want to remove "' + key + '"?')) {
          delete items[key];
          $scope.onEdit();
        }
      };
      $scope.add = function (items, key, value) {
        items[key] = value;
        // TODO: Handle update failures
        $scope.onEdit();
        // Switch out of edit mode
        $scope.unedit();
      };
    }],
    // Use an isolated scope
    scope: {
      values: '=',
      keyType: '=',
      valueType: '=',
      // Optional step attribute for number fields
      step: '=',
      onEdit: '&onEdit'
    },
    templateUrl: editMapInPlaceTemplate,
    transclude: true
  };
}])

/**
 * Generic list controller
 */.controller('ListCtrl', ['$scope', '$location', '$window', '$log', '$filter', function ($scope, $location, $window, $log, $filter) {
  $log.debug('ListCtrl initializing...');
  $scope.defaults = {
    _s: '',
    searchClauses: [],
    limit: 20,
    offset: 0,
    orderBy: '',
    order: 'asc'
  };
  var initialLimit = typeof $location.search().limit === 'undefined' ? $scope.defaults.limit : Number($location.search().limit) > 0 ? Number($location.search().limit) : $scope.defaults.limit;

  // Restore any query parameters that you can from the 
  // query string, blank out the rest
  $scope.query = {
    lastOffset: 0,
    maxOffset: 0,
    searchParam: typeof $location.search()._s === 'undefined' ? $scope.defaults._s : $location.search()._s,
    searchClauses: typeof $location.search()._s === 'undefined' ? $scope.defaults.searchClauses : fromFiql($location.search()._s),
    limit: initialLimit,
    newLimit: initialLimit,
    offset: typeof $location.search().offset === 'undefined' ? $scope.defaults.offset : Number($location.search().offset) > 0 ? normalizeOffset(Number($location.search().offset), Number.MAX_VALUE, initialLimit) : $scope.defaults.offset,
    // TODO: Validate that the orderBy is in a list of supported properties
    orderBy: typeof $location.search().orderBy === 'undefined' ? $scope.defaults.orderBy : $location.search().orderBy,
    order: typeof $location.search().order === 'undefined' ? $scope.defaults.order : $location.search().order === 'asc' ? 'asc' : 'desc'
  };

  // Sync the query hash with the $location query string
  $scope.$watch('query', function () {
    var queryParams = angular.copy($scope.query);

    // Delete derived values that we don't need in the query string
    delete queryParams.searchClauses;
    delete queryParams.newLimit;
    delete queryParams.lastOffset;
    delete queryParams.maxOffset;

    // Rename searchParam to _s
    queryParams._s = queryParams.searchParam === '' ? null : queryParams.searchParam;
    delete queryParams.searchParam;

    // Delete any parameters that have default or blank values
    if (queryParams.limit === $scope.defaults.limit || queryParams.limit === '') {
      delete queryParams.limit;
    }
    if (queryParams.offset === $scope.defaults.offset || queryParams.offset === '') {
      delete queryParams.offset;
    }
    if (queryParams.orderBy === $scope.defaults.orderBy || queryParams.orderBy === '') {
      delete queryParams.orderBy;
    }
    if (queryParams.order === $scope.defaults.order || queryParams.order === '') {
      delete queryParams.order;
    }
    if (queryParams._s === $scope.defaults._s || queryParams._s === '') {
      delete queryParams._s;
    }
    $location.search(queryParams);
  }, true // Use object equality because the reference doesn't change
  );

  // Add the search clause to the list of clauses
  $scope.addSearchClause = function (clause) {
    if (angular.isDate(clause.value)) {
      // Returns a value in yyyy-MM-ddTHH:mm:ss.sssZ format
      // Unfortunately, I don't think CXF will like this because
      // it includes the millisecond portion of the date.
      //clause.value = new Date(clause.value).toISOString();

      clause.value = $filter('date')(new Date(clause.value), ISO_8601_DATE_FORMAT);
    }

    // Make sure the clause isn't already in the list of search clauses
    if ($scope.getSearchClause(clause)) {
      return;
    }

    // TODO: Add validation?
    $scope.query.searchClauses.push(angular.copy(clause));
    $scope.query.searchParam = toFiql($scope.query.searchClauses);
    $scope.refresh();
  };
  $scope.getSearchClause = function (clause) {
    for (var i = 0; i < $scope.query.searchClauses.length; i++) {
      if ($scope.clauseEquals(clause, $scope.query.searchClauses[i])) {
        return $scope.query.searchClauses[i];
      }
    }
    return null;
  };
  $scope.clauseEquals = function (a, b) {
    return a.property === b.property && a.operator === b.operator && a.value === b.value;
  };

  // Convert an epoch timestamp into String format before adding the search clause
  $scope.addEpochTimestampSearchClause = function (clause) {
    clause.value = $filter('date')(clause.value, ISO_8601_DATE_FORMAT);
    $scope.addSearchClause(clause);
  };

  // Remove a search clause from the list of clauses
  $scope.removeSearchClause = function (clause) {
    var _context9, _context10;
    // TODO: Add validation?
    (0, _splice.default)(_context9 = $scope.query.searchClauses).call(_context9, (0, _indexOf.default)(_context10 = $scope.query.searchClauses).call(_context10, clause), 1);
    $scope.query.searchParam = toFiql($scope.query.searchClauses);
    $scope.refresh();
  };
  $scope.removeSearchClauses = function (clauses) {
    for (var i = 0; i < clauses.length; i++) {
      var _context11;
      var index = (0, _indexOf.default)(_context11 = $scope.query.searchClauses).call(_context11, clauses[i]);
      if (index >= 0) {
        var _context12;
        (0, _splice.default)(_context12 = $scope.query.searchClauses).call(_context12, index, 1);
      }
    }
    $scope.query.searchParam = toFiql($scope.query.searchClauses);
    $scope.refresh();
  };

  // Replace a search clause with a new clause
  $scope.replaceSearchClause = function (oldClause, newClause) {
    if (angular.isDate(newClause.value)) {
      // Returns a value in yyyy-MM-ddTHH:mm:ss.sssZ format
      // Unfortunately, I don't think CXF will like this because
      // it includes the millisecond portion of the date.
      //clause.value = new Date(clause.value).toISOString();

      newClause.value = $filter('date')(new Date(newClause.value), ISO_8601_DATE_FORMAT);
    }

    // TODO: Add validation?
    var scopeOldClause = $scope.getSearchClause(oldClause);
    var scopeNewClause = $scope.getSearchClause(newClause);
    if (!scopeOldClause) {
      if (!scopeNewClause) {
        // If the old clause is not present, simply add the new clause
        $scope.addSearchClause(newClause);
      } else {
        // If the old clause is not present and the new clause is already
        // present, then do nothing
      }
    } else {
      if (!scopeNewClause) {
        // If the old clause is present and the new clause is not, replace
        // the values inside the old clause and then refresh
        scopeOldClause.property = newClause.property;
        scopeOldClause.operator = newClause.operator;
        scopeOldClause.value = newClause.value;
        $scope.query.searchParam = toFiql($scope.query.searchClauses);
        $scope.refresh();
      } else {
        // If the old clause is present and the new clause is present,
        // then just remove the old clause (as if it had been replaced by
        // the already-existing new clause)
        $scope.removeSearchClause(oldClause);
      }
    }
  };

  // Clear the current search
  $scope.clearSearch = function () {
    if ($scope.query.searchClauses.length > 0) {
      $scope.query.searchClauses = [];
      $scope.query.searchParam = '';
      $scope.refresh();
    }
  };

  // Change the sorting of the table
  $scope.changeOrderBy = function (property) {
    if ($scope.query.orderBy === property) {
      // TODO: Figure out if we should reset limit/offset here also
      // If the property is already selected then reverse the sorting
      $scope.query.order = $scope.query.order === 'asc' ? 'desc' : 'asc';
    } else {
      // TODO: Figure out if we should reset limit/offset here also
      $scope.query.orderBy = property;
      $scope.query.order = $scope.defaults.order;
    }
    $scope.refresh();
  };
  $scope.setOffset = function (offset) {
    var o = normalizeOffset(offset, $scope.query.maxOffset, $scope.query.limit);
    if ($scope.query.offset !== o) {
      $scope.query.offset = o;
      $scope.refresh();
    }
  };
  $scope.setLimit = function (limit) {
    if (limit < 1) {
      $scope.query.newLimit = $scope.query.limit;
      // TODO: Throw a validation error
      return;
    }
    if ($scope.query.limit !== limit) {
      $scope.query.limit = limit;
      $scope.query.offset = normalizeOffset($scope.query.offset, $scope.query.maxOffset, $scope.query.limit);
      $scope.refresh();
    }
  };

  // Override this to implement updates to an object
  $scope.refresh = function () {
    $log.warn('You need to override $scope.$parent.refresh() in your controller');
  };

  // Override this to implement updates to an object
  $scope.update = function () {
    $log.warn('You need to override $scope.$parent.update() in your controller');
  };

  // Override this to implement deletions
  $scope.deleteItem = function (item) {
    $log.warn('You need to override $scope.$parent.deleteItem() in your controller');
  };
  $log.debug('ListCtrl initialized');
}]).run(['$rootScope', '$log', function ($rootScope, $log) {
  $log.debug('Finished initializing ' + MODULE_NAME);
}]);

/*
angular.element(document).ready(function() {
	console.log('Bootstrapping ' + MODULE_NAME);
	angular.bootstrap(document, [MODULE_NAME]);
});
*/

module.exports = {
  appendTransform: appendTransform,
  toFiql: toFiql,
  fromFiql: fromFiql,
  parseContentRange: parseContentRange,
  escapeSearchValue: escapeSearchValue,
  normalizeOffset: normalizeOffset
};

/***/ }),

/***/ "./src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editInPlace.html":
/*!******************************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editInPlace.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form class=\"form-inline\" ng-submit=\"submit()\" style=\"margin: 0;\">\n\t<!-- Editing input -->\n\t<input ng-show=\"editing\" ng-keyup=\"onKeyup($event)\" type=\"{{valueType}}\" step=\"{{step}}\" ng-model=\"value\">\n\n\t<!-- Text label -->\n\t<span style=\"line-height:24px;\" ng-hide=\"editing\" ng-click=\"edit()\">{{value}}&nbsp;</span>\n\n\t<!-- Edit button -->\n\t<a href style=\"text-decoration: none;\" ng-click=\"edit()\" ng-hide=\"editing\"><i class=\"fa fa-edit fa-lg\"></i></a>\n\t<a href style=\"text-decoration: none;\" ng-click=\"submit()\" ng-show=\"editing\"><i class=\"fa fa-check fa-lg\"></i></a>\n\t<a href style=\"text-decoration: none;\" ng-click=\"cancel()\" ng-show=\"editing\"><i class=\"fa fa-close fa-lg\"></i></a>\n\n\t<!-- Transclude any content inside the tag -->\n\t<span ng-transclude></span>\n</form>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editInPlace.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editListInPlace.html":
/*!**********************************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editListInPlace.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n\t<!-- Show all of the current values -->\n<span ng-repeat=\"value in values\">\n\t<button class=\"btn btn-sm btn-secondary\" ng-click=\"confirmAndRemove(values, value)\" style=\"margin-bottom:3px;margin-right:3px;\">\n\t\t{{value}}&nbsp;<i class=\"fa fa-close\"></i>\n\t</button>\n</span>\n\n<!-- Edit button -->\n<span style=\"line-height:24px;\" ng-hide=\"editing\">\n\t<a href style=\"text-decoration: none;\" ng-click=\"edit()\"><i class=\"fa fa-edit fa-lg\"></i></a>&nbsp;\n</span>\n\n<!-- TODO: Add the ability to support select controls -->\n<!-- Input for new item -->\n<span ng-show=\"editing\" class=\"text-nowrap\">\n\t<input type=\"{{valueType}}\" ng-keyup=\"onKeyup($event)\" ng-model=\"newValue\">\n\t<a href style=\"text-decoration: none;\" ng-click=\"add(values, newValue)\"><i class=\"fa fa-plus fa-lg\"></i></a>\n\t<a href style=\"text-decoration: none;\" ng-click=\"unedit()\"><i class=\"fa fa-close fa-lg\"></i></a>\n</span>\n\n<!-- Transclude any content inside the tag -->\n<span ng-transclude></span>\n</span>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editListInPlace.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editMapInPlace.html":
/*!*********************************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editMapInPlace.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n<!-- Show all of the current values -->\n<span ng-repeat=\"(key,value) in values\">\n\t<button class=\"btn btn-sm btn-secondary\" ng-click=\"confirmAndRemove(values, key)\" style=\"margin-bottom:3px;margin-right:3px;\">\n\t\t<b>{{key}}:</b> {{value}}&nbsp;<i class=\"fa fa-close\"></i>\n\t</button>\n</span>\n\n<!-- Edit button -->\n<span style=\"line-height:24px;\" ng-hide=\"editing\">\n\t<a href style=\"text-decoration: none;\" ng-click=\"edit()\"><i class=\"fa fa-edit fa-lg\"></i></a>&nbsp;\n</span>\n\n<!-- TODO: Add the ability to support select controls -->\n<!-- Input for new item -->\n<span ng-show=\"editing\" class=\"text-nowrap\">\n\t<input type=\"{{keyType}}\" ng-keyup=\"onKeyup($event)\" ng-model=\"newKey\">\n\t<input type=\"{{valueType}}\" ng-keyup=\"onKeyup($event)\" ng-model=\"newValue\">\n\t<a href style=\"text-decoration: none;\" ng-click=\"add(values, newKey, newValue)\"><i class=\"fa fa-plus fa-lg\"></i></a>\n\t<a href style=\"text-decoration: none;\" ng-click=\"unedit()\"><i class=\"fa fa-close fa-lg\"></i></a>\n</span>\n\n<!-- Transclude any content inside the tag -->\n<span ng-transclude></span>\n</span>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-elementList/templates/angular-onms-elementList-editMapInPlace.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-geoservice/index.js":
/*!**********************************************************!*\
  !*** ./src/main/assets/js/apps/onms-geoservice/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
var _stringify = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _sort = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var elementList = __webpack_require__(/*! ../onms-elementList/lib/elementList */ "./src/main/assets/js/apps/onms-elementList/lib/elementList.js");
__webpack_require__(/*! ../../lib/onms-http */ "./src/main/assets/js/lib/onms-http/index.js");
__webpack_require__(/*! ../onms-default-apps */ "./src/main/assets/js/apps/onms-default-apps/index.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle */ "./node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.css */ "./node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.css");
__webpack_require__(/*! ../../../../../../node_modules/angular-ui-router/release/ui-router-angularjs */ "./node_modules/angular-ui-router/release/ui-router-angularjs.js");
var indexTemplate = __webpack_require__(/*! ./views/index.html */ "./src/main/assets/js/apps/onms-geoservice/views/index.html");
var configTemplate = __webpack_require__(/*! ./views/config.html */ "./src/main/assets/js/apps/onms-geoservice/views/config.html");

// Dynamically referenced
var nominatimTemplate = __webpack_require__(/*! ./views/config/nominatim.html */ "./src/main/assets/js/apps/onms-geoservice/views/config/nominatim.html");
var googleTemplate = __webpack_require__(/*! ./views/config/google.html */ "./src/main/assets/js/apps/onms-geoservice/views/config/google.html");
var mapquestTemplate = __webpack_require__(/*! ./views/config/mapquest.html */ "./src/main/assets/js/apps/onms-geoservice/views/config/mapquest.html");
(function () {
  'use strict';

  var _context;
  var MODULE_NAME = 'onms.geoservice';
  (0, _filter.default)(_context = angular.module(MODULE_NAME, ['angular-loading-bar', 'angular-growl', 'ngResource', 'ui.router', 'ui.toggle', 'onms.http', 'onms.default.apps', 'onms.elementList']).config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);
  }]).config(['growlProvider', function (growlProvider) {
    growlProvider.globalTimeToLive({
      success: 2000,
      error: 5000,
      warning: 3000,
      info: 4000
    });
    growlProvider.globalPosition('bottom-center');
  }]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('geocoding', {
      url: '/geocoding',
      controller: 'GeocoderController',
      templateUrl: indexTemplate
    }).state('geocoding.config', {
      templateUrl: configTemplate,
      url: '/config',
      controller: 'GeocoderConfigController'
    }).state('geocoding.details', {
      templateUrl: function templateUrl($stateParams) {
        return __webpack_require__("./src/main/assets/js/apps/onms-geoservice/views/config sync recursive ^\\.\\/.*\\.html$")("./" + $stateParams.id + ".html");
      },
      url: '/:id',
      controller: 'GeocoderDetailsController'
    });
    $urlRouterProvider.otherwise('/geocoding/config');
  }])).call(_context, 'capitalize', function () {
    return function (input) {
      return input ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
  }).factory('GeocodingConfigService', /* @ngInject */["$resource", function ($resource) {
    return $resource('api/v2/geocoding/config', {}, {
      'get': {
        method: 'GET'
      },
      'update': {
        method: 'POST'
      }
    });
  }]).factory('GeocodingGeocoderService', /* @ngInject */["$resource", function ($resource) {
    return $resource('api/v2/geocoding/geocoders/:id', {
      id: '@id'
    }, {
      'list': {
        method: 'GET',
        isArray: true
      },
      'update': {
        method: 'POST'
      }
    });
  }]).controller('GeocoderController', ['$scope', '$http', '$sce', 'GeocodingConfigService', 'GeocodingGeocoderService', function ($scope, $http, $sce, GeocodingConfigService, GeocodingGeocoderService) {
    $scope.handleGlobalError = function (errorResponse) {
      $scope.globalError = 'An unexpected error occurred: ' + errorResponse.statusText;
      $scope.globalErrorDetails = (0, _stringify.default)(errorResponse, null, 2);
    };
    $scope.refreshTabs = function () {
      $scope.config = {
        enabled: false,
        activeGeocoderId: undefined
      };
      $scope.geocoders = [];
      $scope.globalError = undefined;
      return GeocodingConfigService.get(function (configResponse) {
        $scope.config = configResponse;
      }, function (errorResponse) {
        $scope.handleGlobalError(errorResponse);
      }).$promise.then(function () {
        return GeocodingGeocoderService.list(function (response) {
          var _context2, _context3;
          $scope.geocoders = response;
          (0, _forEach.default)(_context2 = $scope.geocoders).call(_context2, function (item) {
            item.name = item.id;
            item.active = $scope.config.activeGeocoderId === item.id;
          });
          (0, _sort.default)(_context3 = $scope.geocoders).call(_context3, function (a, b) {
            return a.name.localeCompare(b.name);
          });
        }, function (errorResponse) {
          $scope.handleGlobalError(errorResponse);
        }).$promise;
      });
    };
  }]).controller('GeocoderConfigController', ['$scope', 'growl', function ($scope, growl) {
    $scope.onGeocoderChange = function (selection) {
      $scope.config.activeGeocoderId = selection.active ? selection.id : undefined;
      $scope.config.$update(function (response) {
        var _context4;
        growl.success('Changes saved successfully');
        (0, _forEach.default)(_context4 = $scope.geocoders).call(_context4, function (item) {
          item.active = $scope.config.activeGeocoderId === item.id;
        });
      }, function (response) {
        $scope.handleGlobalError(response);
      });
    };
    $scope.refreshTabs();
  }]).controller('GeocoderDetailsController', ['$scope', '$stateParams', 'growl', function ($scope, $stateParams, growl) {
    $scope.geocoders = [];
    $scope.geocoder = undefined;
    $scope.configError = {};
    $scope.manualValidation = {
      'mapquest': function mapquest() {
        return true;
      },
      'google': function google() {
        return true;
      },
      'nominatim': function nominatim() {
        // Ensure that either referer or userAgent are defined
        $scope.configError['userAgent'] = undefined;
        $scope.configError['referer'] = undefined;
        if (!$scope.geocoder.config.userAgent && !$scope.geocoder.config.referer) {
          $scope.configError['userAgent'] = 'User Agent or Referer must be set';
          $scope.configError['referer'] = $scope.configError['userAgent'];
          return false;
        }
        return true;
      }
    };
    $scope.handleGeocoderConfigErrors = function (errorObject) {
      if (errorObject.context && errorObject.message) {
        $scope.configError[errorObject.context] = errorObject.message;
      } else if (errorObject.context) {
        $scope.configError[errorObject.context] = 'Invalid value';
      } else {
        growl.error('The configuration is not valid. Details were not provided');
      }
    };
    $scope.save = function () {
      if ($scope.geocoder) {
        if (!$scope.validateFieldsManually()) {
          return;
        }
        // Now update
        $scope.configError = {};
        $scope.geocoder.$update(function () {
          growl.success('Changes saved successfully.');
          $scope.form.$setPristine();

          // The data cannot be reloaded from the backend as the bundles will be refreshed and the
          // ReST service will most like not be available. To avoid 404s, we assume on success everything is fine
          // as otherwise the response would be a 400 with information what exactly is not okay
          $scope.geocoder.error = undefined;
        }, function (response) {
          if (response.status === 400 && response.data) {
            $scope.handleGeocoderConfigErrors(response.data);
          } else {
            $scope.handleGlobalError(response);
          }
        });
      }
    };

    // Some fields need manual validation
    $scope.validateFieldsManually = function () {
      var manualValidation = $scope.manualValidation[$scope.geocoder.id];
      if (manualValidation) {
        return manualValidation();
      }
      return true;
    };

    // Refresh data
    $scope.refreshTabs().then(function (geocoders) {
      var matchingGeocoders = (0, _filter.default)(geocoders).call(geocoders, function (item) {
        return item.id === $stateParams.id;
      });
      if (matchingGeocoders.length > 0) {
        $scope.geocoder = matchingGeocoders[0];
        if ($scope.geocoder.error) {
          $scope.handleGeocoderConfigErrors($scope.geocoder.error);
        }
      }
    });
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-geoservice/views/config sync recursive ^\\.\\/.*\\.html$":
/*!**********************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-geoservice/views/config sync ^\.\/.*\.html$ ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./google.html": "./src/main/assets/js/apps/onms-geoservice/views/config/google.html",
	"./mapquest.html": "./src/main/assets/js/apps/onms-geoservice/views/config/mapquest.html",
	"./nominatim.html": "./src/main/assets/js/apps/onms-geoservice/views/config/nominatim.html"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/main/assets/js/apps/onms-geoservice/views/config sync recursive ^\\.\\/.*\\.html$";

/***/ }),

/***/ "./src/main/assets/js/apps/onms-geoservice/views/config.html":
/*!*******************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-geoservice/views/config.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n    <form class=\"form\" name=\"configForm\">\n        <div ng-repeat=\"geocoder in geocoders\">\n            <div class=\"mt-3 ml-2\">\n                <label style=\"width: 100px\">{{geocoder.id | capitalize}}</label>\n                <toggle id=\"{{geocoder.id}}-toggle\"\n                        class=\"mr-2\"\n                        ng-change=\"onGeocoderChange(geocoder)\"\n                        ng-model=\"geocoder.active\"\n                        size=\"btn-sm\"\n                ></toggle>\n                <span class=\"text-muted\" ng-show=\"geocoder.active && geocoder.error\">\n                    <a ui-sref=\"geocoding.details({'id': geocoder.id})\">Please configure the Geocoder</a>\n                </span>\n            </div>\n        </div>\n    </form>\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-geoservice/views/config.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-geoservice/views/config/google.html":
/*!**************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-geoservice/views/config/google.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n    <form class=\"form\" name=\"form\">\n        <div class=\"jumbotron\">\n            <p>\n                The Google Geocoding API is a service that provides geocoding and reverse geocoding of addresses.\n            </p>\n            <p>\n                For more information refer to the <a href=\"https://developers.google.com/maps/documentation/geocoding/start\" target=\"_blank\">official documentation</a>.\n            </p>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"form-check\">\n                <input\n                        class=\"form-check-input\"\n                        type=\"checkbox\"\n                        id=\"googleClientIdAuthentication\"\n                        name=\"googleClientIdAuthentication\"\n                        ng-model=\"geocoder.config.useEnterpriseCredentials\"\n                >\n                <label class=\"form-check-label\" for=\"googleClientIdAuthentication\">\n                    Use clientId and signature to authenticate\n                </label>\n            </div>\n        </div>\n\n        <div class=\"form-group\" ng-if=\"!geocoder.config.useEnterpriseCredentials\">\n            <label for=\"googleApiKey\">API Key</label>\n            <input id=\"googleApiKey\"\n                   name=\"googleApiKey\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   ng-required=\"true\"\n                   ng-model=\"geocoder.config.apiKey\"\n                   ng-class=\"{ 'is-invalid' : form.googleApiKey.$invalid || configError.apiKey }\"\n            >\n            <p id=\"configError.apiKey\" class=\"invalid-feedback\">{{configError.apiKey || \"Please provide a value\"}}</p>\n        </div>\n        <div class=\"form-group\" ng-if=\"geocoder.config.useEnterpriseCredentials\">\n            <label for=\"googleClientId\">Client ID</label>\n            <input id=\"googleClientId\"\n                   name=\"googleClientId\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   ng-required=\"true\"\n                   ng-model=\"geocoder.config.clientId\"\n                   ng-class=\"{ 'is-invalid' : form.googleClientId.$invalid || configError.clientId }\"\n            >\n            <p id=\"configError.clientId\" class=\"invalid-feedback\">{{configError.clientId || \"Please provide a value\"}}</p>\n        </div>\n        <div class=\"form-group\" ng-if=\"geocoder.config.useEnterpriseCredentials\">\n            <label for=\"googleClientKey\">Signature</label>\n            <input id=\"googleClientKey\"\n                   name=\"googleClientKey\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   ng-required=\"true\"\n                   ng-model=\"geocoder.config.signature\"\n                   ng-class=\"{ 'is-invalid' : form.googleClientKey.$invalid || configError.signature }\"\n            >\n            <p id=\"configError.signature\" class=\"invalid-feedback\">{{configError.signature || \"Please provide a value\"}}</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"googleTimeout\">Timeout (ms)</label>\n            <input id=\"googleTimeout\"\n                   name=\"googleTimeout\"\n                   min=\"0\"\n                   class=\"form-control\"\n                   type=\"number\"\n                   ng-model=\"geocoder.config.timeout\"\n                   ng-class=\"{ 'is-invalid' : form.googleTimeout.$invalid || configError.timeout }\"\n            >\n            <p id=\"configError.timeout\" class=\"invalid-feedback\">{{configError.timeout || \"Timeout must be &gt;= 0\"}}</p>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"mr-2\" for=\"googleSystemProxy\">Use System Proxy</label>\n            <toggle id=\"googleSystemProxy\" \n                    name=\"googleSystemProxy\"\n                    ng-model=\"geocoder.config.useSystemProxy\" \n                    on=\"Yes\" \n                    off=\"No\"\n                    size=\"btn-sm\"\n                    width=\"51px\"\n                    ng-class=\"{ 'is-invalid' : form.googleSystemProxy.$invalid || configError.useSystemProxy }\"\n            ></toggle>\n            <p id=\"configError.useSystemProxy\" class=\"invalid-feedback\">{{configError.useSystemProxy}}</p>\n        </div>\n\n        <p class=\"text-warning\" ng-if=\"form.$dirty\">You have unsaved changes</p>\n        <button id=\"saveButton\" class=\"btn btn-primary\" type=\"button\" ng-click=\"save()\" ng-disabled=\"!form.$dirty || form.$invalid || validateFieldsManually() !== true\"><i class=\"fa fa-save\"></i> Save</button>\n    </form>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-geoservice/views/config/google.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-geoservice/views/config/mapquest.html":
/*!****************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-geoservice/views/config/mapquest.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n    <div class=\"jumbotron\">\n        <p>\n            In order to use Mapquest, you must register and sign up for an API Key.\n        </p>\n        <p>\n            For more information visit the <a href=\"https://developer.mapquest.com/documentation/geocoding-api/\" target=\"_blank\">Mapquest Geocoding API Page</a>.\n        </p>\n    </div>\n\n    <form class=\"form\" name=\"form\">\n        <div class=\"form-group\">\n            <label for=\"mapquestApiKey\">API Key</label>\n            <input id=\"mapquestApiKey\"\n                   name=\"mapquestApiKey\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   ng-required=\"true\"\n                   ng-model=\"geocoder.config.apiKey\"\n                   ng-class=\"{ 'is-invalid' : form.mapquestApiKey.$invalid || configError.apiKey }\"\n            >\n            <p id=\"configError.apiKey\" class=\"invalid-feedback\">{{configError.apiKey || \"Please provide a value\"}}</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"mapquestSystemProxy\" class=\"mr-2\">Use System Proxy</label>\n            <toggle id=\"mapquestSystemProxy\"\n                    name=\"mapquestSystemProxy\"\n                    ng-model=\"geocoder.config.useSystemProxy\"\n                    on=\"Yes\"\n                    off=\"No\"\n                    size=\"btn-sm\"\n                    width=\"51px\"\n                    ng-class=\"{ 'is-invalid' : form.mapquestSystemProxy.$invalid || configError.useSystemProxy }\"\n            ></toggle>\n            <p id=\"configError.useSystemProxy\" class=\"invalid-feedback\">{{configError.useSystemProxy}}</p>\n        </div>\n\n        <p class=\"text-warning\" ng-if=\"form.$dirty\">You have unsaved changes</p>\n        <button id=\"saveButton\" class=\"btn btn-primary\" type=\"button\" ng-click=\"save()\" ng-disabled=\"!form.$dirty || form.$invalid || validateFieldsManually() !== true\"><i class=\"fa fa-save\"></i> Save</button>\n    </form>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-geoservice/views/config/mapquest.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-geoservice/views/config/nominatim.html":
/*!*****************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-geoservice/views/config/nominatim.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n\n    <div class=\"jumbotron\">\n        <p>\n            Nominatim is a search engine for OpenStreetMap data.\n            It allows to look up the coordinates for a given address (forward search).\n        </p>\n        <p>\n            For more information visit the <a href=\"https://wiki.openstreetmap.org/wiki/Nominatim\" target=\"_blank\">Nominatim Wiki Page</a>.\n        </p>\n        <p>\n            Please note, that all usage of the Nominatim Service must follow the <a href=\"https://operations.osmfoundation.org/policies/nominatim/\" target=\"_blank\">Nominatim Usage Policy</a>.\n        </p>\n    </div>\n\n    <form class=\"form\" name=\"form\">\n        <div class=\"form-group\">\n            <label for=\"nominatimEmail\">Email</label>\n            <input id=\"nominatimEmail\"\n                   name=\"nominatimEmail\"\n                   class=\"form-control\"\n                   type=\"email\"\n                   ng-required=\"true\"\n                   ng-model=\"geocoder.config.email\"\n                   ng-class=\"{ 'is-invalid' : form.nominatimEmail.$invalid || configError.email }\"\n            >\n            <p id=\"configError.email\" class=\"invalid-feedback\">{{configError.email || \"Please provide a valid email address\"}}</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"nominatimUserAgent\">User Agent</label>\n            <input id=\"nominatimUserAgent\"\n                   name=\"nominatimUserAgent\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   ng-model=\"geocoder.config.userAgent\"\n                   ng-change=\"validateFieldsManually()\"\n                   ng-class=\"{ 'is-invalid' : form.nominatimUserAgent.$invalid || configError.userAgent }\"\n            >\n            <p id=\"configError.userAgent\" class=\"invalid-feedback\">{{configError.userAgent || \"User Agent or Referer must be set\"}}</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"nominatimReferer\">Referer</label>\n            <input id=\"nominatimReferer\"\n                   name=\"nominatimReferer\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   ng-model=\"geocoder.config.referer\"\n                   ng-change=\"validateFieldsManually()\"\n                   ng-class=\"{ 'is-invalid' : form.nominatimReferer.$invalid || configError.referer }\"\n            >\n            <p id=\"configError.referer\" class=\"invalid-feedback\">{{configError.referer || \"User Agent or Referer must be set\"}}</p>\n        </div>\n        <div class=\"form-group\">\n            <label style=\"width: 180px\" for=\"nominatimAcceptUsageTerms\">Accept <a href=\"https://operations.osmfoundation.org/policies/nominatim/\" target=\"_blank\">Usage Terms <i class=\"fa fa-share-square-o\"></i></a></label>\n            <toggle id=\"nominatimAcceptUsageTerms\"\n                    name=\"nominatimAcceptUsageTerms\"\n                    on=\"Yes\"\n                    off=\"No\"\n                    size=\"btn-sm\"\n                    width=\"51px\"\n                    ng-model=\"geocoder.config.acceptUsageTerms\"\n                    ng-class=\"{ 'is-invalid' : form.nominatimAcceptUsageTerms.$invalid || geocoder.config.acceptUsageTerms === false || configError.acceptUsageTerms }\"\n            ></toggle>\n            <p id=\"configError.acceptUsageTerms\" class=\"invalid-feedback\">{{configError.acceptUsageTerms || \"Please accept the usage terms\"}}</p>\n        </div>\n        <div class=\"form-group\">\n            <label style=\"width: 180px\" for=\"nominatimSystemProxy\">Use System Proxy</label>\n            <toggle id=\"nominatimSystemProxy\"\n                    name=\"nominatimSystemProxy\"\n                    on=\"Yes\"\n                    off=\"No\"\n                    size=\"btn-sm\"\n                    width=\"51px\"\n                    ng-model=\"geocoder.config.useSystemProxy\"\n                    ng-class=\"{ 'is-invalid' : form.nominatimSystemProxy.$invalid || configError.useSystemProxy }\"\n            ></toggle>\n            <p id=\"configError.useSystemProxy\" class=\"invalid-feedback\">{{configError.useSystemProxy}}</p>\n        </div>\n\n        <p class=\"text-warning\" ng-if=\"form.$dirty\">You have unsaved changes</p>\n        <button id=\"saveButton\" class=\"btn btn-primary\" type=\"button\" ng-click=\"save()\" ng-disabled=\"!form.$dirty || form.$invalid || validateFieldsManually() !== true\"><i class=\"fa fa-save\"></i> Save</button>\n    </form>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-geoservice/views/config/nominatim.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-geoservice/views/index.html":
/*!******************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-geoservice/views/index.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span><style type=\"text/css\">\n    toggle.is-invalid ~ .invalid-feedback {\n        display: block;\n    }\n</style>\n\n<div class=\"alert alert-danger\" ng-if=\"globalError\">\n    <span>{{globalError}}</span>\n    <pre ng-show=\"globalErrorDetails\">{{globalErrorDetails}}</pre>\n</div>\n\n<div class=\"w-100\" ng-if=\"!globalError\">\n    <ul id=\"tabs\" class=\"nav nav-tabs\">\n        <li role=\"presentation\" class=\"nav-item\">\n            <a ui-sref-active=\"active\" ui-sref=\"geocoding.config\" data-name=\"settings\" class=\"nav-link\">Settings</a>\n        </li>\n\n        <li role=\"presentation\" ng-repeat=\"geocoder in geocoders\" class=\"nav-item\">\n            <a ui-sref-active=\"active\" ui-sref=\"geocoding.details({'id': geocoder.id})\" title=\"{{geocoder.name | capitalize}}\" data-name=\"{{geocoder.id}}\" class=\"nav-link\">\n                {{geocoder.name | capitalize}}\n                <span ng-if=\"geocoder.id === config.activeGeocoderId && !geocoder.error\" class=\"text-success\" title=\"Geocoder is enabled\"><i class=\"fa fa-circle\"></i></span>\n                <span ng-if=\"geocoder.id === config.activeGeocoderId && geocoder.error\" class=\"text-danger\" title=\"Geocoder is enabled but not configured properly\"><i class=\"fa fa-exclamation-triangle\"></i></span>\n            </a>\n        </li>\n    </ul>\n    <div growl></div>\n    <div class=\"card border-top-0\">\n        <div class=\"card-body\" ui-view>\n        </div>\n    </div>\n</div>\n</span>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-geoservice/views/index.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

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

},[["./src/main/assets/js/apps/onms-geoservice/index.js","vendor"]]]);
});
//# sourceMappingURL=onms-geoservice.js.map