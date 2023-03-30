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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onms-classifications"],{

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

/***/ "./src/main/assets/js/apps/onms-classifications/index.js":
/*!***************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-classifications/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
var _sort = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js"));
var _reverse = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/reverse */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reverse.js"));
var _replaceAll = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js/instance/replace-all */ "./node_modules/@babel/runtime-corejs3/core-js/instance/replace-all.js"));
var _setTimeout2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js"));
var _slice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"));
var _getOwnPropertyNames = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-names */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-names.js"));
var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"));
var _trim = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"));
var _map = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"));
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _splice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var elementList = __webpack_require__(/*! ../onms-elementList/lib/elementList */ "./src/main/assets/js/apps/onms-elementList/lib/elementList.js");
__webpack_require__(/*! ../../lib/onms-pagination */ "./src/main/assets/js/lib/onms-pagination/index.js");
__webpack_require__(/*! ../../lib/onms-http */ "./src/main/assets/js/lib/onms-http/index.js");
__webpack_require__(/*! ../onms-default-apps */ "./src/main/assets/js/apps/onms-default-apps/index.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-bootstrap-confirm/dist/angular-bootstrap-confirm */ "./node_modules/angular-bootstrap-confirm/dist/angular-bootstrap-confirm.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle */ "./node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.css */ "./node_modules/angular-bootstrap-toggle/dist/angular-bootstrap-toggle.css");
__webpack_require__(/*! ../../../../../../node_modules/angular-ui-router/release/ui-router-angularjs */ "./node_modules/angular-ui-router/release/ui-router-angularjs.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-ui-sortable/src/sortable */ "./node_modules/angular-ui-sortable/src/sortable.js");
var indexTemplate = __webpack_require__(/*! ./views/index.html */ "./src/main/assets/js/apps/onms-classifications/views/index.html");
var configTemplate = __webpack_require__(/*! ./views/config.html */ "./src/main/assets/js/apps/onms-classifications/views/config.html");
var groupTemplate = __webpack_require__(/*! ./views/group.html */ "./src/main/assets/js/apps/onms-classifications/views/group.html");
var newRuleModalTemplate = __webpack_require__(/*! ./views/modals/new-rule-modal.html */ "./src/main/assets/js/apps/onms-classifications/views/modals/new-rule-modal.html");
var newGroupModalTemplate = __webpack_require__(/*! ./views/modals/new-group-modal.html */ "./src/main/assets/js/apps/onms-classifications/views/modals/new-group-modal.html");
var importModalTemplate = __webpack_require__(/*! ./views/modals/import-modal.html */ "./src/main/assets/js/apps/onms-classifications/views/modals/import-modal.html");
var exportModalTemplate = __webpack_require__(/*! ./views/modals/export-modal.html */ "./src/main/assets/js/apps/onms-classifications/views/modals/export-modal.html");
var confirmTopoverTemplate = __webpack_require__(/*! ./views/modals/popover.html */ "./src/main/assets/js/apps/onms-classifications/views/modals/popover.html");
var handleErrorResponse = function handleErrorResponse(response, $scope) {
  if (response && response.data) {
    var error = response.data;
    $scope.error = {};
    $scope.error[error.context] = error.message;
  }
};
(function () {
  'use strict';

  var _context;
  var MODULE_NAME = 'onms.classifications';
  (0, _filter.default)(_context = angular.module(MODULE_NAME, ['angular-loading-bar', 'ngResource', 'ui.router', 'ui.bootstrap', 'ui.checkbox', 'ui.toggle', 'ui.sortable', 'onms.http', 'onms.elementList', 'mwl.confirm', 'onms.pagination', 'onms.default.apps']).run(["confirmationPopoverDefaults", function (confirmationPopoverDefaults) {
    confirmationPopoverDefaults.templateUrl = confirmTopoverTemplate;
  }]).config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);
  }]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('classifications', {
      url: '/classifications',
      controller: 'ClassificationController',
      templateUrl: indexTemplate
    }).state('classifications.config', {
      templateUrl: configTemplate,
      url: '/config',
      controller: 'ClassificationConfigController'
    }).state('classifications.group', {
      templateUrl: groupTemplate,
      url: '/:id',
      controller: 'ClassificationGroupController'
    });
    $urlRouterProvider.otherwise('classifications/config');
  }])).call(_context, 'capitalize', function () {
    return function (input) {
      return input ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
  }).factory('ClassificationService', /* @ngInject */["$resource", function ($resource) {
    return $resource('rest/classifications/', {}, {
      'classify': {
        method: 'POST',
        url: 'rest/classifications/classify'
      }
    });
  }]).factory('ClassificationGroupService', /* @ngInject */["$resource", function ($resource) {
    return $resource('rest/classifications/groups/:id', {
      id: '@id'
    }, {
      'get': {
        method: 'GET'
      },
      'update': {
        method: 'PUT'
      },
      'query': {
        method: 'GET',
        isArray: true
      },
      'delete': {
        method: 'DELETE'
      }
    });
  }]).factory('ClassificationRuleService', /* @ngInject */["$resource", function ($resource) {
    return $resource('rest/classifications/:id', {
      id: '@id'
    }, {
      'get': {
        method: 'GET'
      },
      'save': {
        method: 'POST'
      },
      'update': {
        method: 'PUT'
      },
      'query': {
        method: 'GET',
        isArray: true
      },
      'delete': {
        method: 'DELETE'
      }
    });
  }]).factory('ProtocolService', /* @ngInject */["$resource", function ($resource) {
    return $resource('rest/classifications/protocols');
  }]).controller('ClassificationController', ['$scope', '$state', 'ClassificationService', 'ClassificationGroupService', 'ProtocolService', function ($scope, $state, ClassificationService, ClassificationGroupService, ProtocolService) {
    $scope.groups = [];
    $scope.classificationRequest = {};
    $scope.classificationResponse = undefined;
    $scope.isClassificationCollapsed = true;
    $scope.error = undefined;
    $scope.classify = function (classificationRequest) {
      ClassificationService.classify(classificationRequest, function (result) {
        $scope.classifyError = undefined;
        $scope.classificationResponse = result.classification === undefined ? 'No mapping found' : result.classification;
      }, function (response) {
        $scope.classificationResponse = undefined;
        if (response.status === 400 && response.data && response.data.context && response.data.message) {
          $scope.classifyError = {};
          $scope.classifyError[response.data.context] = response.data.message;
        } else {
          $scope.classifyError['entity'] = 'Cannot perform the request.';
        }
      });
    };
    $scope.refreshTabs = function (navigateToFirstGroup) {
      return ClassificationGroupService.query({
        limit: 1000,
        // override default limit (we want to show as many groups as possible)
        orderBy: 'position'
      }, function (response) {
        var _context2, _context3;
        // Remove disabled groups
        $scope.groups = (0, _filter.default)(response).call(response, function (group) {
          return group.enabled === true;
        });
        // Sort by position (lowest first)
        $scope.groups = (0, _sort.default)(_context2 = $scope.groups).call(_context2, function (l, r) {
          return r.position - l.position;
        });
        $scope.groups = (0, _reverse.default)(_context3 = $scope.groups).call(_context3);

        // Select first group if available
        if (navigateToFirstGroup && $scope.groups.length !== 0) {
          $state.go('classifications.group', {
            id: $scope.groups[0].id
          });
        }
      });
    };
    $scope.loadProtocols = function () {
      ProtocolService.query(function (response, headers) {
        $scope.protocols = response;
      });
    };
    $scope.fullyDefined = function () {
      var fullyDefined = $scope.classificationRequest && $scope.classificationRequest.protocol && $scope.classificationRequest.dstPort && $scope.classificationRequest.dstAddress && $scope.classificationRequest.srcPort && $scope.classificationRequest.srcAddress && $scope.classificationRequest.exporterAddress;
      return fullyDefined;
    };
    $scope.toggleClassificationMode = function () {
      $scope.classificationMode = $scope.classificationMode === 'simple' ? 'complex' : 'simple';
    };
    $scope.loadProtocols();
    $scope.refreshTabs(true);
  }]).controller('ClassificationConfigController', ['$scope', '$rootScope', '$uibModal', '$location', '$log', 'ClassificationGroupService', function ($scope, $rootScope, $uibModal, $location, $log, ClassificationGroupService) {
    $scope.groups = [];
    $scope.query = {
      page: 1,
      limit: 20,
      totalItems: 0
    };
    $scope.updateGroup = function (group) {
      group.$update({}, function () {
        $scope.refreshTabs();
        $scope.refresh();
      });
    };
    $scope.deleteGroup = function (group) {
      group.$delete().then(function () {
        $scope.refreshTabs();
        $scope.refresh();
      });
    };
    var openModal = function openModal(_group) {
      return $uibModal.open({
        backdrop: false,
        controller: 'GroupModalController',
        templateUrl: newGroupModalTemplate,
        size: 'lg',
        resolve: {
          group: function group() {
            return _group;
          },
          groups: function groups() {
            return $scope.groups;
          },
          groupsTotalAmount: function groupsTotalAmount() {
            return $scope.query.totalItems;
          }
        }
      });
    };
    $scope.editGroup = function (group) {
      var modalInstance = openModal(group);
      modalInstance.closed.then(function () {
        $scope.refreshTabs();
        $scope.refresh();
      }, function () {
        // modal was dismissed
        $scope.refresh();
      });
    };
    $scope.addGroup = function (group) {
      var modalInstance = openModal(group);
      modalInstance.closed.then(function () {
        $scope.refreshTabs();
        $scope.refresh();
      });
    };
    $scope.refresh = function () {
      var parameters = $scope.query || {};
      ClassificationGroupService.query({
        limit: 20,
        offset: (parameters.page - 1) * parameters.limit || 0,
        orderBy: 'position',
        order: 'asc'
      }, function (result, headers) {
        $scope.groups = result;
        var contentRange = elementList.parseContentRange(headers('Content-Range'));
        $scope.query.totalItems = contentRange.total;
      });
    };
    // for drag and drop of groups (redefining position)
    $scope.sortableGroups = {
      start: function start(e, ui) {
        // remember old index before moving
        angular.element(ui.item).data('oldIndex', ui.item.index());
      },
      stop: function stop(e, ui) {
        // Check Precondition:  item was actually moved
        var oldIndex = angular.element(ui.item).data().oldIndex;
        var newIndex = ui.item.index();
        if (oldIndex !== newIndex) {
          // Calculate and set new position (index + offset)
          var parameters = $scope.query || {};
          var offset = (parameters.page - 1) * parameters.limit || 0;
          var group = $scope.groups[newIndex];
          var position;
          if (newIndex - 1 < 0) {
            // we are already at the beginning of the visible paged list
            position = offset;
          } else {
            var previousGroup = $scope.groups[newIndex - 1];
            position = newIndex > oldIndex ? previousGroup.position : previousGroup.position + 1;
          }
          group.position = position;

          // Update backend
          var refreshCallback = function refreshCallback() {
            $scope.refreshTabs();
            $scope.refresh();
          };
          var errorCallback = function errorCallback(response) {
            handleErrorResponse(response, $scope);
          };
          ClassificationGroupService.update(group, refreshCallback, errorCallback);
        }
      },
      items: "tr:not(.unsortable)"
    };
    $scope.refresh();
  }]).controller('ClassificationGroupController', ['$scope', '$stateParams', '$uibModal', '$log', '$http', '$window', 'ClassificationRuleService', 'ClassificationGroupService', function ($scope, $stateParams, $uibModal, $log, $http, $window, ClassificationRuleService, ClassificationGroupService) {
    // Defaults
    $scope.rules = [];
    $scope.query = {
      page: 1,
      limit: 20,
      totalItems: 0,
      orderBy: 'position',
      order: 'asc',
      groups: [$stateParams.id],
      search: undefined
    };
    $scope.splitRule = function (entry) {
      return entry ? (0, _replaceAll.default)(entry).call(entry, ',', '\n') : entry;
    };
    $scope.findGroup = function (groupId) {
      return ClassificationGroupService.get({
        id: groupId
      }, function (response) {
        $scope.group = response;
        $scope.refresh();
      });
    };
    $scope.showExportRulesDialog = function () {
      var modalInstance = $uibModal.open({
        backdrop: false,
        controller: 'ClassificationExportController',
        templateUrl: exportModalTemplate,
        resolve: {
          group: function group() {
            return $scope.group;
          }
        }
      });
      modalInstance.result.then(function () {
        $scope.refreshTabs();
        $scope.refresh();
      });
    };
    $scope.refresh = function () {
      var parameters = $scope.query || {};
      var editPositionOfRuleEnabled = !$scope.group.readOnly && $scope.query.orderBy === 'position' && $scope.query.order === 'asc';
      var sortable = angular.element('.ui-sortable');
      if (editPositionOfRuleEnabled === true) {
        sortable.sortable('enable');
      } else {
        sortable.sortable('disable');
      }
      return ClassificationRuleService.query({
        limit: parameters.limit || 20,
        offset: (parameters.page - 1) * parameters.limit || 0,
        orderBy: parameters.orderBy,
        order: parameters.order,
        groupFilter: parameters.groups || [],
        query: parameters.search
      }, function (result, headers) {
        $scope.rules = result;
        var contentRange = elementList.parseContentRange(headers('Content-Range'));
        $scope.query.totalItems = contentRange.total;
      });
    };

    // In some cases the currently selected group needs to be refreshed, this method finds the group from
    // $scope.groups and updates $scope.group accordingly, in order to reflect updates in $scope.groups
    $scope.refreshGroup = function () {
      for (var i = 0; i < $scope.groups.length; i++) {
        var group = $scope.groups[i];
        if (group.id === $scope.group.id) {
          $scope.group = group;
          return;
        }
      }
    };
    $scope.refreshAll = function () {
      var result = $scope.refreshTabs();
      result.$promise.then(function () {
        $scope.refreshGroup();
        $scope.refresh();
      });
    };
    $scope.changeOrderBy = function (column) {
      if ($scope.query.orderBy === column) {
        $scope.query.order = $scope.query.order === 'asc' ? 'desc' : 'asc';
      } else {
        $scope.query.orderBy = column;
        $scope.query.order = 'asc';
      }
      $scope.refresh();
    };
    $scope.deleteRule = function (rule) {
      rule.$delete().then(function () {
        $scope.refreshAll();
      });
    };
    $scope.deleteAllRules = function () {
      ClassificationRuleService.delete({
        groupId: $scope.group.id
      }, function () {
        $scope.refreshAll();
      });
    };
    var openModal = function openModal(_classification, _group2) {
      return $uibModal.open({
        backdrop: false,
        controller: 'ClassificationModalController',
        templateUrl: newRuleModalTemplate,
        size: 'lg',
        resolve: {
          classification: function classification() {
            return _classification;
          },
          group: function group() {
            return _group2;
          },
          groups: function groups() {
            return $scope.groups;
          }
        }
      });
    };
    $scope.editRule = function (rule) {
      var modalInstance = openModal(rule, rule.group);
      modalInstance.closed.then(function () {
        $scope.refreshAll();
      }, function () {
        // modal was dismissed
        $scope.refresh();
      });
    };
    $scope.addRule = function (group) {
      var modalInstance = openModal(null, group);
      modalInstance.closed.then(function () {
        $scope.refreshAll();
      });
    };

    // for drag and drop of rules (redefining position)
    $scope.sortableRules = {
      start: function start(e, ui) {
        // remember old index before moving
        angular.element(ui.item).data('oldIndex', ui.item.index());
      },
      stop: function stop(e, ui) {
        // Check Precondition: item was actually moved
        var oldIndex = angular.element(ui.item).data().oldIndex;
        var newIndex = ui.item.index();
        if (oldIndex !== newIndex) {
          // Calculate and set new position (index + offset)
          var parameters = $scope.query || {};
          var offset = (parameters.page - 1) * parameters.limit || 0;
          var rule = $scope.rules[newIndex];
          var position;
          if (newIndex - 1 < 0) {
            // we are already at the beginning of the visible paged list
            position = offset;
          } else {
            var previousRule = $scope.rules[newIndex - 1];
            position = newIndex > oldIndex ? previousRule.position : previousRule.position + 1;
          }
          rule.position = position;

          // Update backend
          var refreshCallback = function refreshCallback() {
            $scope.refreshAll();
          };
          var errorCallback = function errorCallback(response) {
            handleErrorResponse(response, $scope);
          };
          ClassificationRuleService.update(rule, refreshCallback, errorCallback);
        }
      }
    };
    $scope.importRules = function () {
      var modalInstance = $uibModal.open({
        size: 'lg',
        backdrop: false,
        controller: 'ClassificationImportController',
        templateUrl: importModalTemplate,
        resolve: {
          group: function group() {
            return $scope.group;
          }
        }
      });
      modalInstance.closed.then(function () {
        $scope.refreshAll();
      });
    };
    $scope.clearSearch = function () {
      $scope.query.search = undefined;
      $scope.refresh();
    };
    $scope.findGroup($stateParams.id);
  }]).controller('ClassificationImportController', ['$scope', '$http', '$uibModalInstance', 'group', function ($scope, $http, $uibModalInstance, group) {
    $scope.group = group;
    $scope.setFile = function (element) {
      $scope.$apply(function (scope) {
        scope.fileToUpload = element.files[0];
      });
    };
    $scope.openFileDialogue = function () {
      (0, _setTimeout2.default)(function () {
        document.getElementById('fileToImport').click();
      }, 0);
    };
    $scope.resetInput = function () {
      $scope.fileToUpload = undefined;
      $scope.error = undefined;
      $scope.failedRows = [];
      $scope.containsHeader = true;
      $scope.deleteExistingRules = false;
      $scope.pagination = {
        page: 1,
        totalItems: 0,
        limit: 5
      };
    };
    $scope.navigateWithinErrors = function () {
      var _context4;
      var limit = $scope.pagination.limit;
      var offset = ($scope.pagination.page - 1) * limit;
      var endIndex = Math.min(offset + limit, $scope.errors.length);
      $scope.failedRows = (0, _slice.default)(_context4 = $scope.errors).call(_context4, offset, endIndex);
    };
    $scope.uploadFile = function () {
      var reader = new FileReader();
      reader.onload = function (e) {
        $scope.error = undefined;
        $scope.errors = [];
        $scope.failedRows = [];
        $http({
          url: 'rest/classifications/groups/' + group.id,
          method: 'POST',
          data: reader.result,
          params: {
            'hasHeader': $scope.containsHeader,
            'deleteExistingRules': $scope.deleteExistingRules
          },
          headers: {
            'Content-Type': 'text/comma-separated-values'
          }
        }).then(function () {
          $uibModalInstance.close();
        }, function (r) {
          var response = r.data;
          var status = r.status;
          if (status === 500) {
            $scope.error = 'An unexpected error occurred.';
          }
          if (status === 400) {
            // General error
            if (response.error) {
              $scope.error = response.error.message;
              return;
            }
            // Report failed rows
            if (response.errors) {
              $scope.error = 'The rules could not be imported. Please fix the errors shown below and retry.';
              // Persist locally
              var errorKeys = (0, _getOwnPropertyNames.default)(response.errors);
              for (var i = 0; i < errorKeys.length; i++) {
                var index = errorKeys[i];
                var rowIndex = $scope.containsHeader ? (0, _parseInt2.default)(index, 10) + 1 : index; // increase row index if csv contains header
                $scope.errors.push({
                  index: rowIndex,
                  message: response.errors[index].message
                });
              }
              // Update pagination settings
              $scope.pagination.totalItems = $scope.errors.length;
              $scope.navigateWithinErrors();
            }
          }
        });
      };
      reader.readAsText($scope.fileToUpload);
    };
    $scope.resetInput();
  }]).controller('ClassificationExportController', ['$scope', '$http', '$uibModalInstance', 'group', '$window', function ($scope, $http, $uibModalInstance, group, $window) {
    $scope.group = group;
    $scope.export = {};
    $scope.export.requestedFileName = group.name + '_rules.csv';
    $scope.exportGroup = function () {
      var _context5;
      var requestedFileName = (0, _trim.default)(_context5 = $scope.export.requestedFileName).call(_context5);
      $window.location = 'rest/classifications/groups/' + $scope.group.id + '?filename=' + requestedFileName + '&format=csv';
      $uibModalInstance.close();
    };
  }]).controller('ClassificationModalController', ['$scope', '$uibModalInstance', 'ProtocolService', 'ClassificationRuleService', 'classification', 'group', 'groups', function ($scope, $uibModalInstance, ProtocolService, ClassificationRuleService, classification, group, groups) {
    $scope.classification = classification || {
      group: group
    };
    $scope.protocols = [];
    $scope.currentSelection = undefined;
    $scope.selectedProtocols = [];
    $scope.buttonName = $scope.classification.id ? 'Update' : 'Create';
    $scope.group = group;
    $scope.maxPosition = classification === null ? group.ruleCount : group.ruleCount - 1;
    $scope.selectableGroups = (0, _filter.default)(groups).call(groups, function (group) {
      return group.readOnly === false;
    });
    var convertStringArrayToProtocolsArray = function convertStringArrayToProtocolsArray(string) {
      return (0, _map.default)(string).call(string, function (protocol) {
        return {
          keyword: protocol
        };
      });
    };
    var convertProtocolsArrayToStringArray = function convertProtocolsArrayToStringArray(protocols) {
      return (0, _map.default)(protocols).call(protocols, function (protocol) {
        return protocol.keyword;
      });
    };
    $scope.save = function () {
      // Close modal afterwards
      var closeCallback = function closeCallback() {
        $uibModalInstance.close();
      };
      var errorCallback = function errorCallback(response) {
        handleErrorResponse(response, $scope);
      };
      $scope.classification.protocols = convertProtocolsArrayToStringArray($scope.selectedProtocols);
      if ($scope.classification.id) {
        ClassificationRuleService.update($scope.classification, closeCallback, errorCallback);
      } else {
        ClassificationRuleService.save($scope.classification, closeCallback, errorCallback);
      }
    };
    $scope.cancel = function () {
      $uibModalInstance.dismiss('Cancelled by User');
    };
    $scope.insertProtocol = function (item) {
      var _context6;
      if (item && (0, _indexOf.default)(_context6 = $scope.selectedProtocols).call(_context6, item) === -1) {
        $scope.currentSelection = '';
        $scope.selectedProtocols.push(item);
      }
    };
    $scope.removeProtocol = function (protocol) {
      var _context7;
      var index = (0, _indexOf.default)(_context7 = $scope.selectedProtocols).call(_context7, protocol);
      if (index !== -1) {
        var _context8;
        (0, _splice.default)(_context8 = $scope.selectedProtocols).call(_context8, index, 1);
      }
    };
    $scope.loadProtocols = function () {
      ProtocolService.query(function (response, headers) {
        $scope.protocols = response;
      });
    };
    if ($scope.classification.id) {
      $scope.selectedProtocols = convertStringArrayToProtocolsArray($scope.classification.protocols);
    }
    $scope.loadProtocols();
  }]).controller('GroupModalController', ['$scope', '$uibModalInstance', 'ClassificationGroupService', 'group', 'groups', 'groupsTotalAmount', function ($scope, $uibModalInstance, ClassificationGroupService, group, groups, groupsTotalAmount) {
    $scope.group = group || {
      enabled: true
    };
    $scope.currentSelection = undefined;
    $scope.buttonName = $scope.group.id ? 'Update' : 'Create';
    $scope.groups = groups;
    $scope.groupsTotalAmount = groupsTotalAmount;
    $scope.maxPosition = group === undefined ? groupsTotalAmount - 1 : groupsTotalAmount - 2; // pre-defined group has always the last position

    $scope.save = function () {
      // Close modal afterwards
      var closeCallback = function closeCallback() {
        $uibModalInstance.close();
      };
      var errorCallback = function errorCallback(response) {
        handleErrorResponse(response, $scope);
      };
      if ($scope.group.id) {
        ClassificationGroupService.update($scope.group, closeCallback, errorCallback);
      } else {
        ClassificationGroupService.save($scope.group, closeCallback, errorCallback);
      }
    };
    $scope.cancel = function () {
      $uibModalInstance.dismiss('Cancelled by User');
    };
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-classifications/views/config.html":
/*!************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-classifications/views/config.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"card-body\">\n    <div class=\"btn-toolbar pull-right mb-2\">\n        <div class=\"btn-group ml-2\" role=\"group\">\n            <button id=\"action.refresh\" class=\"btn btn-secondary\" ng-click=\"refresh()\" title=\"Refresh list\"><i class=\"fa fa-refresh\"></i></button>\n        </div>\n        <div class=\"btn-group ml-2\" role=\"group\">\n            <button id=\"action.addGroup\" class=\"btn btn-secondary\" ng-click=\"addGroup()\" title=\"Add new classification group\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    </div>\n    <div ng-show=\"groups.length == 0\">No groups defined.</div>\n    <pagination model=\"query\" ng-show=\"groups.length > 0\" position=\"bottom\" on-change=\"refresh\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr class=\"d-flex\">\n                <th class=\"col-md-1 text-nowrap\">Position</th>\n                <th class=\"col-md-3 text-nowrap\">Name</th>\n                <th class=\"col-md-5 text-nowrap\">Description</th>\n                <th class=\"col-md-1 text-nowrap\">Editable</th>\n                <th class=\"col-md-1 text-nowrap\">Enabled</th>\n                <th class=\"col-md-1 text-nowrap\">Actions</th>\n            </tr>\n            </thead>\n            <tbody ng-model=\"groups\" ui-sortable=\"sortableGroups\">\n            <tr class=\"d-flex\" ng-repeat=\"group in groups\" data-row=\"{{group.name}}\" ng-class=\"{'unsortable': group['readOnly']}\">\n                <td class=\"col-md-1 text-nowrap\">\n                    <i class=\"fa fa-bars text-muted\" style=\"padding-right:1em\"\n                        ng-style=\"{'visibility': !group['readOnly'] ? 'visible' : 'hidden'}\"></i>\n                    {{group['position']}}</td>\n                <td class=\"col-md-3 text-nowrap\">{{group['name']}}</td>\n                <td class=\"col-md-5 text-nowrap\">{{group['description']}}</td>\n                <td class=\"col-md-1 text-nowrap\">{{!group['readOnly']}}</td>\n                <td class=\"col-md-1 text-nowrap\">\n                    <toggle id=\"action.{{group.name}}.toggle\" size=\"btn-sm\" ng-model=\"group['enabled']\" ng-change=\"updateGroup(group)\"></toggle>\n                </td>\n                <td class=\"col-md-1 text-nowrap\">\n                    <div class=\"pull-right\">\n                        <button id=\"action.{{group.position}}.edit\" class=\"btn btn-sm btn-secondary\" ng-click=\"editGroup(group)\" title=\"edit group\" ng-show=\"!group.readOnly\"><i class=\"fa fa-edit\"></i></button>\n\n                        <button\n                                id=\"action.{{group.position}}.delete\"\n                                class=\"btn btn-sm btn-secondary\"\n                                mwl-confirm\n                                title=\"delete group\"\n                                message=\"Do you want to delete group '{{group.name}}' with {{group.ruleCount}} rule(s)?\"\n                                on-confirm=\"deleteGroup(group)\"\n                                placement=\"left\"\n                                confirm-button-type=\"danger\"\n                                cancel-button-type=\"secondary\"\n                                confirm-text=\"Yes\"\n                                cancel-text=\"No\"\n                                ng-show=\"!group.readOnly\"><i class=\"fa fa-trash-o\"></i></button>\n                    </div>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </pagination>\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-classifications/views/config.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-classifications/views/group.html":
/*!***********************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-classifications/views/group.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n<style type=\"text/css\">\n    .wrapped {\n        white-space: pre;\n    }\n    .text-ellipsis {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap !important;\n    }\n</style>\n<div class=\"card-body\">\n    <div class=\"btn-toolbar pull-right mb-2\" role=\"toolbar\">\n        <div class=\"input-group\" role=\"group\" ng-show=\"group.ruleCount > 0\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n            </div>\n            <input type=\"text\"\n                   id=\"action.search\"\n                   ng-model=\"query.search\"\n                   ng-change=\"refresh()\"\n                   placeholder=\"search...\"\n                   class=\"form-control\">\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-secondary\" title=\"Clear search\" ng-click=\"clearSearch()\" ng-show=\"query.search\"><i class=\"fa fa-close\"></i></button>\n            </div>\n        </div>\n\n        <div class=\"btn-group ml-4\" role=\"group\">\n            <button id=\"action.refresh\" class=\"btn btn-secondary\" ng-click=\"refreshAll()\" title=\"Refresh list\"><i class=\"fa fa-refresh\"></i></button>\n        </div>\n        <div class=\"btn-group ml-2\" role=\"group\" ng-show=\"!group.readOnly\">\n            <button id=\"action.addRule\" class=\"btn btn-secondary\" ng-click=\"addRule(group)\" title=\"Add new classification rule\"><i class=\"fa fa-plus\"></i></button>\n            <button ng-if=\"rules.length > 0\"\n                    id=\"action.deleteAll\"\n                    class=\"btn btn-secondary\"\n                    mwl-confirm\n                    title=\"Delete rules\"\n                    message=\"Do you want to delete all {{group.name}} rules?\"\n                    on-confirm=\"deleteAllRules()\"\n                    placement=\"left\"\n                    confirm-button-type=\"danger\"\n                    cancel-button-type=\"secondary\"\n                    confirm-text=\"Yes\"\n                    cancel-text=\"No\"><i class=\"fa fa-trash-o\"></i></button>\n        </div>\n        <div class=\"btn-group ml-2\" role=\"group\" ng-show=\"!group.readOnly\">\n            <button id=\"action.importCSV\" class=\"btn btn-secondary\" ng-click=\"importRules()\" title=\"Import classification rules from CSV\"><i class=\"fa fa-upload\"></i></button>\n            <button id=\"action.exportCSV\" class=\"btn btn-secondary\" ng-click=\"showExportRulesDialog()\" title=\"Export classification rules as CSV\" >\n                <i class=\"fa fa-download\"></i>\n            </button>\n        </div>\n    </div>\n    <h5 class=\"pt-2\">{{group.description}} <span class=\"badge badge-secondary\" ng-if=\"group.readOnly\">read-only</span></h5>\n    <div class=\"text-center mt-4\" ng-show=\"rules.length == 0\"><pre>No rules defined.</pre></div>\n    <pagination model=\"query\" ng-show=\"rules.length > 0\" position=\"bottom\" on-change=\"refresh\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr class=\"d-flex\">\n                <th class=\"col-md-1 text-nowrap\">\n                    <a ng-click=\"changeOrderBy('position')\">Position</a>\n                    <i ng-show=\"query.orderBy === 'position' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n                    <i ng-show=\"query.orderBy === 'position' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n                </th>\n                <th class=\"col-md-1 text-nowrap\">\n                    <a ng-click=\"changeOrderBy('name')\">Application</a>\n                    <i ng-show=\"query.orderBy === 'name' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n                    <i ng-show=\"query.orderBy === 'name' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n                </th>\n                <th class=\"col-md-1 text-nowrap\">\n                    <a ng-click=\"changeOrderBy('protocol')\">Protocol</a>\n                    <i ng-show=\"query.orderBy === 'protocol' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n                    <i ng-show=\"query.orderBy === 'protocol' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n                </th>\n                <th class=\"col-md-2 text-nowrap\">\n                    <a ng-click=\"changeOrderBy('srcAddress')\">Src. Address</a>\n                    <i ng-show=\"query.orderBy === 'srcAddress' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n                    <i ng-show=\"query.orderBy === 'srcAddress' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n                </th>\n                <th class=\"col-md-1 text-nowrap\">\n                    <a ng-click=\"changeOrderBy('srcPort')\">Src. Port</a>\n                    <i ng-show=\"query.orderBy === 'srcPort' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n                    <i ng-show=\"query.orderBy === 'srcPort' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n                </th>\n                <th class=\"col-md-2 text-nowrap\">\n                    <a ng-click=\"changeOrderBy('dstAddress')\">Dst. Address</a>\n                    <i ng-show=\"query.orderBy === 'dstAddress' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n                    <i ng-show=\"query.orderBy === 'dstAddress' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n                </th>\n                <th class=\"col-md-1 text-nowrap\">\n                    <a ng-click=\"changeOrderBy('dstPort')\">Dst. Port</a>\n                    <i ng-show=\"query.orderBy === 'dstPort' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n                    <i ng-show=\"query.orderBy === 'dstPort' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n                </th>\n                <th ng-class=\"{'col-md-1': group.readOnly === false, 'col-md-2': group.readOnly === true}\" class=\"text-nowrap\">\n                    <a ng-click=\"changeOrderBy('exporterFilter')\">Exporter Filter</a>\n                    <i ng-show=\"query.orderBy === 'exporterFilter' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n                    <i ng-show=\"query.orderBy === 'exporterFilter' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n                </th>\n                <th class=\"col-md-1 text-nowrap\">\n                    <a ng-click=\"changeOrderBy('omnidirectional')\">Omnidirectional</a>\n                    <i ng-show=\"query.orderBy === 'omnidirectional' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n                    <i ng-show=\"query.orderBy === 'omnidirectional' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n                </th>\n                <th class=\"col-md-1\" ng-if=\"group.readOnly === false\">\n                    Actions\n                </th>\n            </tr>\n            </thead>\n\n            <tbody ng-model=\"rules\" ui-sortable=\"sortableRules\">\n            <tr ng-repeat=\"rule in rules\" class=\"d-flex\">\n                <td class=\"col-md-1 text-nowrap\">\n                    <i class=\"fa fa-bars text-muted\"\n                       ng-show=\"!group.readOnly && query.orderBy === 'position' && query.order === 'asc'\"\n                       style=\"padding-right:1em\"></i>{{rule['position']}}\n                </td>\n                <td class=\"col-md-1 text-nowrap\">{{rule['name']}}</td>\n                <td class=\"col-md-1 text-nowrap\">\n                    <span ng-repeat=\"protocol in rule.protocols\" class=\"badge badge-secondary mr-2\">{{protocol}}</span>\n                </td>\n                <td class=\"col-md-2 wrapped\">{{splitRule(rule['srcAddress'])}}</td>\n                <td class=\"col-md-1 wrapped\">{{splitRule(rule['srcPort'])}}</td>\n                <td class=\"col-md-2 wrapped\">{{splitRule(rule['dstAddress'])}}</td>\n                <td class=\"col-md-1 wrapped\">{{splitRule(rule['dstPort'])}}</td>\n                <td ng-class=\"{'col-md-1': group.readOnly === false, 'col-md-2': group.readOnly === true}\" class=\"text-ellipsis\">\n                    <span title=\"{{rule['exporterFilter']}}\">{{rule['exporterFilter']}}</span>\n                </td>\n                <td class=\"col-md-1 text-nowrap\"><span class=\"fa fa-exchange\" ng-if=\"rule['omnidirectional'] === true\" aria-hidden=\"true\"></span></td>\n                <td class=\"col-md-1\" ng-if=\"group.readOnly === false\">\n                    <div class=\"pull-right\">\n                        <button id=\"action.{{rule.position}}.edit\" class=\"btn btn-sm btn-secondary\" ng-click=\"editRule(rule, group)\" title=\"edit rule\"><i class=\"fa fa-edit\"></i></button>\n                        <button id=\"action.{{rule.position}}.delete\" class=\"btn btn-sm btn-secondary\" ng-click=\"deleteRule(rule)\" title=\"delete rule\"><i class=\"fa fa-trash-o\"></i></button>\n                    </div>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </pagination>\n</div>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-classifications/views/group.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-classifications/views/index.html":
/*!***********************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-classifications/views/index.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"row\">\n    <div class=\"\" ng-class=\"{'col-md-12': isClassificationCollapsed, 'col-md-9': !isClassificationCollapsed}\">\n        <ul id=\"tabs\" class=\"nav nav-tabs\">\n            <li role=\"presentation\" class=\"nav-item\">\n                <a ui-sref-active=\"active\" ui-sref=\"classifications.config\" data-name=\"settings\" class=\"nav-link\">Settings</a>\n            </li>\n\n            <li role=\"presentation\" ng-repeat=\"group in groups\" class=\"nav-item\">\n                <a ui-sref-active=\"active\" ui-sref=\"classifications.group({'id': group.id, 'group': group})\" title=\"{{group.description}}\" data-name=\"{{group.name}}\" class=\"nav-link\">\n                    {{group.name | capitalize}} Rules <span class=\"badge badge-primary\" title=\"{{group.ruleCount}} defined rules\">{{group.ruleCount}}</span>\n                </a>\n            </li>\n            <button id=\"action.classification.toggle\" class=\"btn btn-secondary mr-3\"\n                    style=\"position: absolute; right: 0px; z-index: 900\"\n                    ng-click=\"isClassificationCollapsed = !isClassificationCollapsed\"\n                    title=\"{{isClassificationCollapsed ? 'Test classification' : 'Collapse classification panel'}}\">\n                <i class=\"fa\" ng-class=\"{'fa-magic': isClassificationCollapsed, 'fa-caret-right': !isClassificationCollapsed}\"></i>\n            </button>\n        </ul>\n        <div class=\"card border-top-0\" ui-view>\n        </div>\n    </div>\n\n    <div id=\"classification-tab\" class=\"col-md-3 collapse\" uib-collapse=\"isClassificationCollapsed\">\n        <div>\n            <ul class=\"nav nav-tabs\">\n                <li role=\"presentation\" class=\"nav-item\">\n                    <a class=\"nav-link active\">Test Classification</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"card border-top-0\">\n            <div class=\"card-default card-body\">\n                    <form name=\"classifyForm\">\n                        <div class=\"form-group\">\n                            <label class=\"col-form-label\" for=\"classify-protocol\">Protocol</label>\n                            <input class=\"form-control\"\n                                   type=\"text\"\n                                   autocomplete=\"off\"\n                                   id=\"classify-protocol\"\n                                   name=\"classify-protocol\"\n                                   ng-model=\"classificationRequest.protocol\"\n                                   placeholder=\"A valid RFC specified IP protocol, e.g. TCP, UDP\"\n                                   typeahead-min-length=\"0\"\n                                   uib-typeahead=\"protocol.keyword for protocol in protocols | filter:$viewValue\"\n                                   typeahead-editable=\"false\"\n                                   ng-class=\"{ 'is-invalid' : ruleForm['classify-protocol'].$invalid || classifyError.protocol }\">\n                            <p id=\"classifyError.protocol\" ng-show=\"classifyError.protocol\" class=\"form-text text-muted\">{{classifyError.protocol}}</p>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-form-label\" for=\"classify-exporterAddress\">Exporter Address</label>\n                            <input class=\"form-control\" type=\"text\" id=\"classify-exporterAddress\" name=\"classify-exporterAddress\" placeholder=\"e.g. 10.0.0.1\"\n                                   ng-model=\"classificationRequest.exporterAddress\"\n                                   ng-class=\"{ 'is-invalid' : ruleForm['classify-exporterAddress'].$invalid || classifyError.exporterAddress }\">\n                            <p id=\"classifyError.exporterAddress\" ng-show=\"classifyError.exporterAddress\" class=\"invalid-feedback\">{{classifyError.exporterAddress}}</p>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-8 col-sm-8 col-xs-8\">\n                                <label class=\"col-form-label\" for=\"classify-srcAddress\" >Source Address</label>\n                                <input class=\"form-control\" type=\"text\" id=\"classify-srcAddress\" name=\"classify-srcAddress\" placeholder=\"e.g. 127.0.0.1\"\n                                       ng-model=\"classificationRequest.srcAddress\"\n                                       ng-class=\"{ 'is-invalid' : ruleForm['classify-srcAddress'].$invalid || classifyError.srcAddress }\">\n                                <p id=\"classifyError.srcAddress\" ng-show=\"classifyError.srcAddress\" class=\"invalid-feedback\">{{classifyError.srcAddress}}</p>\n                            </div>\n                            <div class=\"form-group col-md-4 col-sm-4 col-xs-4\">\n                                <label class=\"col-form-label\" for=\"classify-srcPort\" >Port</label>\n                                <input class=\"form-control\" type=\"text\" id=\"classify-srcPort\" name=\"classify-srcPort\" placeholder=\"e.g. 55252\"\n                                       ng-model=\"classificationRequest.srcPort\"\n                                       ng-class=\"{ 'is-invalid' : ruleForm['classify-srcPort'].$invalid || classifyError.srcPort }\">\n                                <p id=\"classifyError.srcPort\" ng-show=\"classifyError.srcPort\" class=\"invalid-feedback\">{{classifyError.srcPort}}</p>\n                            </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-8 col-sm-8 col-xs-8\">\n                                <label class=\"col-form-label\" for=\"classify-dstAddress\">Destination Address</label>\n                                <input class=\"form-control\" type=\"text\" id=\"classify-dstAddress\" name=\"classify-dstAddress\" placeholder=\"e.g. 127.0.0.1\"\n                                       ng-model=\"classificationRequest.dstAddress\"\n                                       ng-class=\"{ 'is-invalid' : ruleForm['classify-dstAddress'].$invalid || classifyError.dstAddress }\">\n                                <p id=\"classifyError.dstAddress\" ng-show=\"classifyError.dstAddress\" class=\"invalid-feedback\">{{classifyError.dstAddress}}</p>\n                            </div>\n                            <div class=\"form-group col-md-4 col-sm-4 col-xs-4\">\n                                <label class=\"col-form-label\" for=\"classify-dstPort\">Port</label>\n                                <input class=\"form-control\" type=\"text\" id=\"classify-dstPort\" name=\"classify-dstPort\" placeholder=\"e.g. 80\"\n                                       ng-model=\"classificationRequest.dstPort\"\n                                       ng-class=\"{ 'is-invalid' : ruleForm['classify-dstPort'].$invalid || classifyError.dstPort }\">\n                                <p id=\"classifyError.dstPort\" ng-show=\"classifyError.dstPort\" class=\"invalid-feedback\">{{classifyError.dstPort}}</p>\n                            </div>\n                        </div>\n                        <div class=\"badge badge-secondary\" ng-show=\"classificationResponse\">\n                            <span id=\"classification-response\" title=\"Based on the current set of rules, the given flow would be mapped to\">{{classificationResponse}}</span>\n                        </div>\n                        <div class=\"alert alert-danger\" ng-show=\"classifyError.entity\">\n                            <span id=\"classification-error\">{{classifyError.entity}}</span>\n                        </div>\n                        <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-primary pull-right\" id=\"classification-submit\" ng-click=\"classify(classificationRequest)\" ng-disabled=\"classifyForm.$invalid || !fullyDefined()\">Classify</button>\n                        </div>\n                    </form>\n            </div>\n        </div>\n    </div>\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-classifications/views/index.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-classifications/views/modals/export-modal.html":
/*!*************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-classifications/views/modals/export-modal.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"exportModal\">\n<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Export Classification Rules for Group: {{group.name}}</h5>\n</div>\n\n<div class=\"modal-body\">\n    <form name=\"exportGroupForm\">\n        <div class=\"form-group\">\n            <div class=\"form-group\">\n                <label class=\"col-form-label\" for=\"export.requestedFileName\">File Name</label>\n                <input class=\"form-control\" type=\"text\" id=\"export.requestedFileName\" name=\"requestedFileName\"\n                       value=\"{{group.id}}_rules.csv\" ng-model=\"export.requestedFileName\"\n                       ng-pattern=\"/^[a-zA-Z1-9_ .-]{1,}$/\"\n                       required\n                       ng-class=\"{ 'is-invalid' : exportGroupForm.requestedFileName.$invalid }\">\n                <p ng-show=\"exportGroupForm.requestedFileName.$invalid\" class=\"invalid-feedback\">\n                    A valid file name is required, allowed characters: [a-zA-Z1-9_ .-]</p>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"exportGroup()\" ng-disabled=\"exportGroupForm.$invalid\">Export</button>\n    <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"$dismiss('cancelled by user')\">Cancel</button>\n</div>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-classifications/views/modals/export-modal.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-classifications/views/modals/import-modal.html":
/*!*************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-classifications/views/modals/import-modal.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Import Classification Rules</h5>\n</div>\n<div class=\"modal-body\">\n  <form class=\"form\">\n    <div class=\"form-group form-row\">\n      <label class=\"col-sm-3 col-form-label\">Group</label>\n      <div class=\"col-sm-9\">\n        <p class=\"form-control-plaintext\">{{group.name}}</p>\n      </div>\n    </div>\n    <div class=\"form-group form-row\">\n      <label class=\"col-sm-3 col-form-label\" for=\"importFile\">Select file to import</label>\n      <div class=\"col-sm-9\">\n        <div class=\"input-group\">\n          <span class=\"input-group-prepend\">\n              <button ng-click=\"openFileDialogue()\" class=\"btn btn-secondary\" type=\"button\">Choose</button>\n          </span>\n          <input ng-click=\"openFileDialogue()\" type=\"text\" id=\"importFile\" class=\"form-control\" placeholder=\"Choose a file...\" ng-model=\"fileToUpload.name\">\n          <span class=\"input-group-append\">\n             <button class=\"btn btn-secondary\" type=\"button\" ng-click=\"resetInput()\">Reset</button>\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group form-row\">\n      <div class=\"col-sm-offset-3 col-sm-9\">\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" ng-model=\"containsHeader\"> Contains header\n          </label>\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" ng-model=\"deleteExistingRules\"> Delete existing rules\n          </label>\n        </div>\n      </div>\n    </div>\n    <input id=\"fileToImport\" type=\"file\" style=\"visibility:hidden; display:none\" onchange=\"angular.element(this).scope().setFile(this)\">\n  </form>\n  <div class=\"alert alert-danger\" ng-show=\"error\">\n    {{error}}\n  </div>\n  <div ng-show=\"failedRows.length > 0\">\n    <pagination model=\"pagination\" position=\"bottom\" on-change=\"navigateWithinErrors\">\n      <table class=\"table table-bordered table-striped\">\n        <tbody>\n        <tr class=\"d-flex\">\n          <th class=\"col-md-1\">Row Index</th>\n          <th class=\"col-md-11\">Error Message</th>\n        </tr>\n\n        <tr class=\"d-flex\" ng-repeat=\"failedRow in failedRows\">\n          <td class=\"col-md-1\">{{failedRow['index']}}</td>\n          <td class=\"col-md-11\">{{failedRow['message']}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </pagination>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <div style=\"display: inline\" title=\"Please confirm deletion\">\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"uploadFile()\" ng-show=\"fileToUpload\" title=\"Upload Rule\">Upload</button>\n  </div>\n  <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"$dismiss('cancelled by user')\" >Cancel</button>\n</div>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-classifications/views/modals/import-modal.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-classifications/views/modals/new-group-modal.html":
/*!****************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-classifications/views/modals/new-group-modal.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"groupModal\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\" ng-show=\"group.id === undefined\">Create Classification Group</h5>\n    <h5 class=\"modal-title\" ng-show=\"group.id !== undefined\">Edit Classification Group</h5>\n  </div>\n  <div class=\"modal-body\">\n    <form name=\"groupForm\" novalidate>\n      <div class=\"form-group\">\n        <div ng-show=\"error.entity\" class=\"form-text text-danger\">{{error.entity}}</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"group.position\">Position</label>\n        <button class=\"btn btn-link\"\n                uib-popover-html=\"'<div>Groups on low positions will be evaluated first:<br>position 0 -&gt; position 1 -&gt; position 2 -&gt; ...</div>'\"\n                popover-trigger=\"'outsideClick'\"><i class=\"fa fa-question-circle\"></i></button>\n        <input class=\"form-control\" id=\"group.position\" name=\"position\" placeholder=\"{{maxPosition}}\" type=\"number\" min=\"0\" max=\"{{maxPosition}}\" step=\"1\" pattern=\"[0-9]*\" ng-model=\"group.position\"\n               ng-class=\"{ 'is-invalid' : groupForm.position.$invalid || error.position }\">\n        <div ng-show=\"groupForm.position.$invalid\" class=\"invalid-feedback\">Position must be between 0 and {{maxPosition}}.</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"group.name\">Group Name</label>\n        <input class=\"form-control\" type=\"text\" id=\"group.name\" name=\"name\" placeholder=\"my classification group\" ng-model=\"group.name\"\n               ng-class=\"{ 'is-invalid' : groupForm.name.$invalid || error.name }\" required>\n        <div ng-show=\"groupForm.name.$invalid\" class=\"invalid-feedback\">The name is required.</div>\n        <div ng-show=\"error.name\" class=\"invalid-feedback\">{{error.name}}</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"group.description\">Group Description</label>\n        <input class=\"form-control\" type=\"text\" id=\"group.description\" name=\"description\" placeholder=\"my description\" ng-model=\"group.description\"\n               ng-class=\"{ 'is-invalid' : groupForm.description.$invalid || error.description }\" required>\n        <div ng-show=\"error.description\" class=\"invalid-feedback\">{{error.description}}</div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" id=\"save-group\" ng-click=\"save()\" ng-disabled=\"groupForm.$invalid\">{{buttonName}}</button>\n    <button type=\"button\" class=\"btn btn-secondary\" id=\"cancel-group\" ng-click=\"cancel()\" >Cancel</button>\n  </div>\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-classifications/views/modals/new-group-modal.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-classifications/views/modals/new-rule-modal.html":
/*!***************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-classifications/views/modals/new-rule-modal.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"ruleModal\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\" ng-show=\"classification.id === undefined\">Create Classification Rule</h5>\n    <h5 class=\"modal-title\" ng-show=\"classification.id !== undefined\">Edit Classification Rule</h5>\n  </div>\n  <div class=\"modal-body\">\n    <form name=\"ruleForm\" novalidate>\n      <div class=\"form-group\">\n        <div ng-show=\"error.entity\" class=\"form-text text-danger\">{{error.entity}}</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"rule.group\">Group</label>\n        <select class=\"form-control custom-select\"\n                ng-options=\"group as group.name for group in selectableGroups track by group.id\"\n                ng-model=\"classification.group\"\n                ng-disabled=\"classification.id === undefined\"\n                id=\"rule.group\" ></select>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"rule.position\">Position</label>\n        <button class=\"btn btn-link\"\n                uib-popover-html=\"'<div>Rules on low positions will be evaluated first:<br>position 0 -&gt; position 1 -&gt; position 2 -&gt; ...</div>'\"\n                popover-trigger=\"'outsideClick'\"><i class=\"fa fa-question-circle\"></i></button>\n        <input class=\"form-control\" id=\"rule.position\" name=\"position\" placeholder=\"{{maxPosition}}\" type=\"number\" min=\"0\" max=\"{{maxPosition}}\" step=\"1\" pattern=\"[0-9]*\" ng-model=\"classification.position\"\n               ng-class=\"{ 'is-invalid' : ruleForm.position.$invalid || error.position }\">\n        <div ng-show=\"ruleForm.position.$invalid\" class=\"invalid-feedback\">Position must be between 0 and {{maxPosition}}.</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"rule.name\">Application Name</label>\n        <input class=\"form-control\" type=\"text\" id=\"rule.name\" name=\"name\" placeholder=\"HTTP\" ng-model=\"classification.name\"\n               ng-class=\"{ 'is-invalid' : ruleForm.name.$invalid || error.name }\" required>\n        <div ng-show=\"ruleForm.name.$invalid\" class=\"invalid-feedback\">The name is required.</div>\n        <div ng-show=\"error.name\" class=\"invalid-feedback\">{{error.name}}</div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-8\">\n          <label class=\"col-form-label\" for=\"rule.srcAddress\">Source IP Address</label>\n          <input class=\"form-control\" type=\"text\" id=\"rule.srcAddress\" name=\"srcAddress\" placeholder=\"127.0.0.1,10.0.0.0/24,10.0.0.0-10.255.255.255\" ng-model=\"classification.srcAddress\"\n                 ng-class=\"{ 'is-invalid' : ruleForm.srcAddress.$invalid || error.srcAddress}\">\n          <div ng-show=\"error.srcAddress\" class=\"invalid-feedback\">{{error.srcAddress}}</div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label class=\"col-form-label\" for=\"rule.srcPort\">Source Port</label>\n          <input class=\"form-control\" type=\"text\" id=\"rule.srcPort\" name=\"srcPort\" placeholder=\"80,8080\" ng-model=\"classification.srcPort\"\n                 ng-class=\"{ 'is-invalid' : ruleForm.srcPort.$invalid || error.srcPort }\">\n          <div ng-show=\"error.srcPort\" class=\"invalid-feedback\">{{error.srcPort}}</div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-8\">\n          <label class=\"col-form-label\" for=\"rule.dstAddress\">Destination IP Address</label>\n          <input class=\"form-control\" type=\"text\" id=\"rule.dstAddress\" name=\"dstAddress\" placeholder=\"127.0.0.1,10.0.0.0/24,10.0.0.0-10.255.255.255\" ng-model=\"classification.dstAddress\"\n                 ng-class=\"{ 'is-invalid' : ruleForm.dstAddress.$invalid || error.dstAddress}\">\n          <div ng-show=\"error.dstAddress\" class=\"invalid-feedback\">{{error.dstAddress}}</div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label class=\"col-form-label\" for=\"rule.dstPort\">Destination Port</label>\n          <input class=\"form-control\" type=\"text\" id=\"rule.dstPort\" name=\"dstPort\" placeholder=\"80,8080\" ng-model=\"classification.dstPort\"\n                 ng-class=\"{ 'is-invalid' : ruleForm.dstPort.$invalid || error.dstPort }\">\n          <div ng-show=\"error.dstPort\" class=\"invalid-feedback\">{{error.dstPort}}</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"rule.omnidirectional\">Omnidirectional</label>\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"rule.omnidirectional\" name=\"omnidirectional\" ng-model=\"classification.omnidirectional\"\n                 ng-class=\"{ 'is-invalid' : ruleForm.omnidirectional.$invalid || error.omnidirectional }\">\n          <label class=\"form-check-label\" for=\"rule.omnidirectional\">Enable matching independent of the flow direction</label>\n          <div ng-show=\"error.omnidirectional\" class=\"invalid-feedback\">{{error.omnidirectional}}</div>\n        </div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"rule.exporterFilter\">Exporter Filter</label>\n        <button class=\"btn btn-link\"\n                uib-popover-html=\"'<div>The rule is only applied if the exporter of the flow matches the defined <a href=https://docs.opennms.com/horizon/latest/reference/configuration/filters/filters.html target=_blank>filter</a>.</div>'\"\n                popover-trigger=\"'outsideClick'\"><i class=\"fa fa-question-circle\"></i></button>\n        <input class=\"form-control\" type=\"text\" id=\"rule.exporterFilter\" name=\"exporterFilter\" placeholder=\"categoryName == 'Exporters' | ipAddr == '10.0.0.1'\" ng-model=\"classification.exporterFilter\"\n               ng-class=\"{ 'is-invalid' : ruleForm.exporterFilter.$invalid || error.exporterFilter }\">\n        <div ng-show=\"error.exporterFilter\" class=\"invalid-feedback\">{{error.exporterFilter}}</div>\n      </div>\n      <div class=\"form-group form-row\" >\n        <label class=\"col-form-label\" for=\"rule.protocol\">IP Protocol</label>\n        <input class=\"form-control\" type=\"text\"\n               id=\"rule.protocol\"\n               name=\"protocol\"\n               ng-model=\"currentSelection\"\n               placeholder=\"tcp\"\n               typeahead-on-select=\"insertProtocol($item)\"\n               typeahead-min-length=\"0\"\n               uib-typeahead=\"protocol.keyword for protocol in protocols | filter:$viewValue\"\n               typeahead-editable=\"false\"\n               ng-class=\"{ 'is-invalid' : ruleForm.protocol.$invalid || error.protocol }\">\n        <span ng-repeat=\"protocol in selectedProtocols\" class=\"badge badge-secondary mt-2 mr-2\">\n          {{protocol.keyword | uppercase}} <a href class=\"text-danger\" name=\"remove-protocol\" ng-click=\"removeProtocol(protocol)\"><i class=\"fa fa-remove\" title=\"remove protocol\"></i></a>\n        </span>\n        <div ng-show=\"error.protocol\" class=\"invalid-feedback\">{{error.protocol}}</div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" id=\"save-rule\" ng-click=\"save()\" ng-disabled=\"ruleForm.$invalid\">{{buttonName}}</button>\n    <button type=\"button\" class=\"btn btn-secondary\" id=\"cancel-rule\" ng-click=\"cancel()\" >Cancel</button>\n  </div>\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-classifications/views/modals/new-rule-modal.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-classifications/views/modals/popover.html":
/*!********************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-classifications/views/modals/popover.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div\n        class=\"popover px-2 py-2\"\n        ng-class=\"[vm.$attrs.placement || vm.defaults.placement, 'bs-popover-' + (vm.$attrs.placement || vm.defaults.placement), vm.$attrs.popoverClass || vm.defaults.popoverClass, {fade: vm.animation}]\">\n    <div class=\"popover-arrow arrow\" style=\"top: 50px\"></div>\n    <h3 class=\"popover-title\" ng-bind-html=\"vm.$attrs.title\"></h3>\n    <div class=\"popover-content\">\n        <p ng-bind-html=\"vm.$attrs.message\"></p>\n        <div class=\"row\">\n            <div\n                    class=\"col-sm-6\"\n                    ng-if=\"!vm.$attrs.hideConfirmButton && !vm.defaults.hideConfirmButton\"\n                    ng-class=\"{'col-sm-offset-3': vm.$attrs.hideCancelButton || vm.defaults.hideCancelButton}\">\n                <button\n                        class=\"btn btn-block confirm-button\"\n                        ng-class=\"'btn-' + (vm.$attrs.confirmButtonType || vm.defaults.confirmButtonType)\"\n                        ng-click=\"vm.onConfirm(); vm.hidePopover()\"\n                        ng-bind-html=\"vm.$attrs.confirmText || vm.defaults.confirmText\">\n                </button>\n            </div>\n            <div\n                    class=\"col-sm-6\"\n                    ng-if=\"!vm.$attrs.hideCancelButton && !vm.defaults.hideCancelButton\"\n                    ng-class=\"{'col-sm-offset-3': vm.$attrs.hideConfirmButton || vm.defaults.hideConfirmButton}\">\n                <button\n                        class=\"btn btn-block cancel-button\"\n                        ng-class=\"'btn-' + (vm.$attrs.cancelButtonType || vm.defaults.cancelButtonType)\"\n                        ng-click=\"vm.onCancel(); vm.hidePopover()\"\n                        ng-bind-html=\"vm.$attrs.cancelText || vm.defaults.cancelText\">\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-classifications/views/modals/popover.html';
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

/***/ "./src/main/assets/js/lib/onms-pagination/index.js":
/*!*********************************************************!*\
  !*** ./src/main/assets/js/lib/onms-pagination/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var paginationTemplate = __webpack_require__(/*! ./pagination-toolbar.html */ "./src/main/assets/js/lib/onms-pagination/pagination-toolbar.html");
var MODULE_NAME = 'onms.pagination';
angular.module(MODULE_NAME, ['ui.bootstrap']).directive('pagination', function () {
  return {
    restrict: 'E',
    scope: {
      model: '=model',
      position: '@position',
      onChangeCallback: '=onChange'
    },
    link: function link(scope, element, attrs) {
      if (scope.model === undefined) {
        throw new Error('No model defined.');
      }
      if (scope.model.page === undefined) {
        throw new Error('No attribute model.page defined');
      }
      if (scope.model.totalItems === undefined) {
        throw new Error('No attribute model.totalItems defined');
      }
      if (scope.model.limit === undefined) {
        throw new Error('No attribute model.limit defined');
      }
      var currentPage = scope.model.page;
      scope.onChange = function () {
        if (currentPage !== scope.model.page) {
          currentPage = scope.model.page;
          if (scope.onChangeCallback) {
            scope.onChangeCallback();
          }
        }
      };
    },
    transclude: true,
    templateUrl: paginationTemplate
  };
});

/***/ }),

/***/ "./src/main/assets/js/lib/onms-pagination/pagination-toolbar.html":
/*!************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-pagination/pagination-toolbar.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div>\n    <!-- Content for pagination -->\n    <div ng-transclude ng-if=\"position === 'bottom'\"></div>\n\n    <!-- Paging controls -->\n    <div class=\"row\">\n        <div class=\"col-md-4 col-lg-6 col-sm-12\" ng-show=\"(model.totalItems / model.limit) > 1\">\n            <div style=\"margin: 0px;\"\n                 uib-pagination\n                 ng-model=\"model.page\"\n                 total-items=\"model.totalItems\"\n                 items-per-page=\"model.limit\"\n                 rotate=\"true\"\n                 boundary-links=\"true\"\n                 max-size=\"5\"\n                 boundary-link-numbers=\"true\"\n                 ng-change=\"onChange()\">\n            </div>\n        </div>\n        <div class=\"col-md-8 col-lg-6 col-sm-12 mt-4\">\n            <pre class=\"pull-right\" ng-show=\"model.totalItems == 0\">No items found.</pre>\n            <pre class=\"pull-right\" ng-show=\"model.totalItems > 0\">{{model.totalItems / model.page === 1\n            ? \"Item \" + (model.offset + 1)\n            : \"Items \" + ((model.page - 1) * model.limit + 1) + \" - \" + (model.page * model.limit &gt; model.totalItems ? model.totalItems : model.page * model.limit)}} ({{model.totalItems}} total)</pre>\n        </div>\n    </div>\n\n    <!-- Content for pagination -->\n    <div ng-transclude ng-if=\"position === 'top' || position === undefined\"></div>\n\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/lib/onms-pagination/pagination-toolbar.html';
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

},[["./src/main/assets/js/apps/onms-classifications/index.js","vendor"]]]);
});
//# sourceMappingURL=onms-classifications.js.map