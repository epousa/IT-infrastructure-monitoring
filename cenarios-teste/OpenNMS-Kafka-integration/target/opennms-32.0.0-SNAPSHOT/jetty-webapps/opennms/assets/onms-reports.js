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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onms-reports"],{

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

/***/ "./src/main/assets/js/apps/onms-reports/ReportDetails.js":
/*!***************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-reports/ReportDetails.js ***!
  \***************************************************************/
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
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _isArray = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array */ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js"));
var _map = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"));
var _sort = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js"));
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
var _keys = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"));
var _trim = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"));
var _toPrimitive2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js"));
var _Types = _interopRequireDefault(__webpack_require__(/*! ../../lib/onms-schedule-editor/scripts/Types */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Types.js"));
var _ScheduleOptions = _interopRequireDefault(__webpack_require__(/*! ../../lib/onms-schedule-editor/scripts/ScheduleOptions */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ScheduleOptions.js"));
var _ContextError = _interopRequireDefault(__webpack_require__(/*! ../../lib/onms-http/ContextError */ "./src/main/assets/js/lib/onms-http/ContextError.js"));
var _util = _interopRequireDefault(__webpack_require__(/*! ../../../modules/lib/util */ "./src/main/assets/modules/lib/util/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var moment = __webpack_require__(/*! ../../vendor/moment-js */ "./src/main/assets/js/vendor/moment-js.js");
var ReportDetails = /*#__PURE__*/function () {
  function ReportDetails() {
    var _context2,
      _context3,
      _context4,
      _context5,
      _context6,
      _context7,
      _this = this;
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ReportDetails);
    this.supportedSurveillanceCategories = input.surveillanceCategories;
    this.supportedCategories = input.categories;
    this.supportedFormats = [];
    if ((0, _isArray.default)(input.formats)) {
      var _context;
      this.supportedFormats = (0, _map.default)(_context = input.formats).call(_context, function (item) {
        return item.name;
      });
    }
    this.supportedTimezones = input.timezones || ['US/Eastern'];
    this.parameters = input.parameters || [];
    this.parametersByName = {};
    this.deliveryOptions = input.deliveryOptions || {};
    this.scheduleOptions = typeof input.cronExpression === 'string' ? _ScheduleOptions.default.createFrom(input.cronExpression) : new _ScheduleOptions.default();
    this.format = input.deliveryOptions && input.deliveryOptions.format || 'PDF';
    this.id = input.id;
    this.errors = input.errors || {};
    this.timezoneEditable = true;

    // In order to have the ui look the same as before, just order the parameters
    var order = ['string', 'integer', 'float', 'double', 'timezone', 'date'];
    (0, _sort.default)(_context2 = this.parameters).call(_context2, function (left, right) {
      return (0, _indexOf.default)(order).call(order, left.type) - (0, _indexOf.default)(order).call(order, right.type);
    });

    // Pre processing of parameters
    (0, _forEach.default)(_context3 = this.parameters).call(_context3, function (parameter) {
      // Apply default values for categories
      if (parameter.inputType === 'reportCategorySelector') {
        parameter.value = this.supportedSurveillanceCategories[0];
      }
      if (parameter.inputType === 'onmsCategorySelector') {
        parameter.value = this.supportedCategories[0];
      }

      // Hide certain items
      parameter.hidden = parameter.name === 'GRAFANA_ENDPOINT_UID' || parameter.name === 'GRAFANA_DASHBOARD_UID' || parameter.name === 'dateFormat';

      // index parameters
      this.parametersByName[parameter.name] = parameter;
    }, this);
    (0, _forEach.default)(_context4 = (0, _filter.default)(_context5 = this.parameters).call(_context5, function (parameter) {
      return parameter.type === 'date';
    })).call(_context4, function (parameter) {
      // Originally the idea was to format the date using the user locale setting
      // However this format is ISO conform, so we always use it instead
      parameter.internalFormat = 'YYYY-MM-DD HH:mm';
      parameter.internalLocale = 'en'; // Always assume en as locale
      parameter.internalValue = moment(parameter.date, parameter.internalFormat).hours(parameter.hours).minutes(parameter.minutes).format(parameter.internalFormat);
    });
    this.updateTimezoneEditable();
    this.validateTimezone();

    // Adjust format
    if ((0, _indexOf.default)(_context6 = this.supportedFormats).call(_context6, this.format) === -1) {
      this.format = this.supportedFormats[0];
    }
    if ((0, _indexOf.default)(_context7 = this.supportedFormats).call(_context7, this.deliveryOptions.format) === -1) {
      this.deliveryOptions.format = this.format;
    }
    if (window._onmsZoneId) {
      this.scheduleOptions.serverZone = window._onmsZoneId;
    } else {
      var xhr = new XMLHttpRequest();
      var checkResponseText = function checkResponseText() {
        try {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              var config = JSON.parse(xhr.responseText);
              if (config.datetimeformatConfig && config.datetimeformatConfig.zoneId) {
                window._onmsZoneId = config.datetimeformatConfig.zoneId;
                _this.scheduleOptions.serverZone = config.datetimeformatConfig.zoneId;
                return;
              }
            }
            // eslint-disable-next-line no-console
            console.error('Failed to request server time zone: ' + xhr.status + ' ' + xhr.statusText);
            _this.scheduleOptions.serverZone = null;
          }
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('An error occurred getting the server time zone:', e);
          _this.scheduleOptions.serverZone = null;
        }
      };
      xhr.onreadystatechange = function () {
        if (input && input.scope) {
          input.scope.$evalAsync(checkResponseText);
        } else {
          checkResponseText();
        }
      };
      xhr.open('GET', _util.default.getBaseHref() + 'rest/info');
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();
    }
  }
  _createClass(ReportDetails, [{
    key: "hasErrors",
    value: function hasErrors() {
      var hasErrors = (0, _keys.default)(this.errors).length > 0 || this.isGrafanaReport() && !this.isGrafanaEndpointSelected() || !this.scheduleOptions.isValid();
      return hasErrors;
    }
  }, {
    key: "resetErrors",
    value: function resetErrors() {
      this.errors = {};
    }
  }, {
    key: "setErrors",
    value: function setErrors(contextError) {
      if (contextError && contextError.context && contextError.message || contextError instanceof _ContextError.default) {
        if (contextError.context !== 'cronExpression' || contextError.context === 'cronExpression' && this.scheduleOptions.type === _Types.default.CUSTOM) {
          this.errors[contextError.context] = contextError.message;
          return;
        } else if (contextError.context === 'cronExpression' && this.scheduleOptions.type !== _Types.default.CUSTOM) {
          throw new Error("Generated cronExpression was not parsable by backend. If this happens contact OpenNMS support");
        }
      }
      throw new Error("Provided contextError must be of type ContextError");
    }
  }, {
    key: "isGrafanaEndpointSelected",
    value: function isGrafanaEndpointSelected() {
      if (!this.isGrafanaReport()) {
        throw new Error("Report is not a Grafana Report");
      }
      var endpointUid = this.parametersByName['GRAFANA_ENDPOINT_UID'];
      var dashboardUid = this.parametersByName['GRAFANA_DASHBOARD_UID'];
      var endpointSelected = endpointUid.value && typeof endpointUid.value === 'string' && endpointUid.value.length > 0 && dashboardUid.value && _typeof(dashboardUid.value) && dashboardUid.value.length > 0;
      return endpointSelected;
    }
  }, {
    key: "isGrafanaReport",
    value: function isGrafanaReport() {
      return typeof this.parametersByName['GRAFANA_ENDPOINT_UID'] !== 'undefined' && typeof this.parametersByName['GRAFANA_DASHBOARD_UID'] !== 'undefined';
    }
  }, {
    key: "updateTimezoneEditable",
    value: function updateTimezoneEditable() {
      var dashboardZone = this.dashboard && this.dashboard.timezone !== undefined ? this.dashboard.timezone : undefined;
      if (dashboardZone !== undefined) {
        var _context8;
        if (dashboardZone === 'browser' || (0, _trim.default)(dashboardZone).call(dashboardZone) === '') {
          // timezone in grafana dashboard is set to default/browser,
          // which for our purposes should behave the same
          this.timezoneEditable = true;
        } else if ((0, _indexOf.default)(_context8 = this.supportedTimezones).call(_context8, this.parametersByName['timezone'].value) >= 0) {
          // timezone in grafana dashboard matches an available timezone,
          // use it (always)
          this.timezoneEditable = false;
        } else {
          // timezone in grafana dashboard isn't default/browser, but
          // we don't have a matching supported timezone; the timezone
          // on the other end is one supposedly supported by Jasper
          // so I guess I'll just add it to the list ¯\_(ツ)_/¯
          this.supportedTimezones.push(dashboardZone);
          this.timezoneEditable = false;
        }
      } else {
        // either this isn't a grafana report, or we haven't gotten the dashboard timezone (yet)
      }
    }
  }, {
    key: "validateTimezone",
    value: function validateTimezone() {
      var _context9,
        _context10,
        _this2 = this;
      this.updateTimezoneEditable();

      // Ensure timezone has a valid value
      (0, _forEach.default)(_context9 = (0, _filter.default)(_context10 = this.parameters).call(_context10, function (parameter) {
        return parameter.type === 'timezone';
      })).call(_context9, function (parameter) {
        if (_this2.timezoneEditable) {
          var _context11, _context12;
          if (parameter.value && (0, _trim.default)(_context11 = parameter.value).call(_context11).length > 0 && (0, _indexOf.default)(_context12 = _this2.supportedTimezones).call(_context12, parameter.value) >= 0) {
            // we have already selected a valid timezone, carry on
          } else {
            var _context13;
            // otherwise, guess the timezone; If it actually exists, it is used;
            // if it doesn't exist, the first from the list is selected
            var guessedTimezone = moment.tz.guess(true);
            if ((0, _indexOf.default)(_context13 = _this2.supportedTimezones).call(_context13, guessedTimezone) >= 0) {
              parameter.value = guessedTimezone;
            } else {
              parameter.value = _this2.supportedTimezones[0];
            }
          }
          _this2.parametersByName['timezone'] = parameter;
        } else {
          // if the timezone is not editable, it should already be
          // set to something in the supported list, so it's safe
          // to just not do anything
        }
      });
      if (this.parametersByName['timezone']) {
        this.scheduleOptions.timezone = this.parametersByName['timezone'].value;
      }
    }
  }, {
    key: "updateTimezoneParameter",
    value: function updateTimezoneParameter(selected) {
      this.dashboard = selected.dashboard;
      var timezone = selected.dashboard ? selected.dashboard.timezone : undefined;
      if (timezone === 'utc') {
        // special case: Grafana passes UTC as `utc` (sigh)
        timezone = 'UTC';
      }
      if (timezone) {
        this.parametersByName['timezone'].value = timezone;
        this.scheduleOptions.timezone = timezone;
      }
      this.validateTimezone();
    }

    // Before sending the report we must replace the values for the Endpoint UID and Dashboard UID
  }, {
    key: "updateGrafanaParameters",
    value: function updateGrafanaParameters(selected) {
      if (this.isGrafanaReport()) {
        this.parametersByName['GRAFANA_ENDPOINT_UID'].value = selected.endpoint ? selected.endpoint.uid : this.parametersByName['GRAFANA_ENDPOINT_UID'].value;
        this.parametersByName['GRAFANA_DASHBOARD_UID'].value = selected.dashboard ? selected.dashboard.uid : this.parametersByName['GRAFANA_DASHBOARD_UID'].value;
        this.updateTimezoneParameter(selected);
      }
    }

    // Before sending the report, the date values must be updated accordingly
  }, {
    key: "updateDateParameters",
    value: function updateDateParameters() {
      var _context14, _context15;
      // Set the date value
      (0, _forEach.default)(_context14 = (0, _filter.default)(_context15 = this.parameters).call(_context15, function (parameter) {
        return parameter.type === 'date';
      })).call(_context14, function (p) {
        var date = moment(p.internalValue, p.internalFormat);
        p.date = date.format('YYYY-MM-DD');
        p.hours = date.hours();
        p.minutes = date.minutes();
        p.internalValue = date.format(p.internalFormat);
      });
    }
  }]);
  return ReportDetails;
}();
exports.default = ReportDetails;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-reports/details.html":
/*!***********************************************************!*\
  !*** ./src/main/assets/js/apps/onms-reports/details.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n<div class=\"alert alert-danger mx-2 my-2\" ng-if=\"errorMessage\">\n    <span>{{errorMessage}}</span>\n</div>\n\n<div class=\"alert alert-warning mx-2 my-2\" ng-if=\"!meta.online && !(userInfo.isAdmin() || userInfo.isReportDesigner())\">\n    <span>This report cannot be executed adhoc and you do not have permissions to deliver/schedule this report.</span>\n</div>\n\n<div ng-if=\"meta.online || userInfo.isAdmin() || userInfo.isReportDesigner()\">\n    <onms-report-details ng-model=\"report\" options=\"options\" on-invalid-change=\"onReportFormInvalidStateChange(invalidState)\" on-global-error=\"setGlobalError(response)\"></onms-report-details>\n\n    <div class=\"alert alert-success mx-4\" ng-if=\"scheduleSuccess\">\n        The report was scheduled. <br>\n        <a ui-sref-active=\"active\" ui-sref=\"report.schedules\">Show Schedules</a>\n    </div>\n    <div class=\"alert alert-success mx-4\" ng-if=\"deliverySuccess\">\n        The report was scheduled for delivery.\n        It may take some time until it is delivered. <br>\n        <a ui-sref-active=\"active\" ui-sref=\"report.schedules\">Show scheduled Reports</a> <br>\n        <a ui-sref-active=\"active\" ui-sref=\"report.persisted\">Show persisted Reports</a>\n    </div>\n    <div class=\"form-group mx-4\">\n        <button class=\"btn btn-danger\" name=\"cancel\" id=\"cancel\" ui-sref=\"report.templates\">\n            <i class=\"fa fa-times\"></i> Cancel\n        </button>\n\n        <button class=\"btn btn-primary\" name=\"run\" id=\"execute\" ng-click=\"execute()\" ng-disabled=\"reportForm.$invalid || !report.scheduleOptions.isValid() || (report.isGrafanaReport() && !report.isGrafanaEndpointSelected())\">\n            <span ng-if=\"meta.online && !options.deliverReport && !options.scheduleReport\"><i class=\"fa fa-play\"></i> Create</span>\n            <span ng-if=\"options.deliverReport && !options.scheduleReport\"><i class=\"fa fa-share\"></i> Deliver</span>\n            <span ng-if=\"options.deliverReport && options.scheduleReport\"><i class=\"fa fa-clock-o\"></i> Schedule</span>\n\n            Report\n        </button>\n    </div>\n</div>\n</span>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-reports/details.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-reports/index.html":
/*!*********************************************************!*\
  !*** ./src/main/assets/js/apps/onms-reports/index.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n<div class=\"alert alert-danger\" ng-if=\"globalError\">\n    <span>{{globalError}}</span>\n    <pre ng-show=\"globalErrorDetails\">{{globalErrorDetails}}</pre>\n</div>\n\n<div class=\"w-100\" ng-if=\"!globalError\">\n    <ul id=\"tabs\" class=\"nav nav-tabs\">\n        <li role=\"presentation\" class=\"nav-item\">\n            <a ui-sref-active=\"active\" ui-sref=\"report.templates\" data-name=\"report-templates\" class=\"nav-link\">Report Templates</a>\n        </li>\n\n        <li role=\"presentation\" class=\"nav-item\">\n            <a ui-sref-active=\"active\" ui-sref=\"report.schedules\" data-name=\"report-schedules\" class=\"nav-link\">Report Schedules</a>\n        </li>\n\n        <li role=\"presentation\" class=\"nav-item\">\n            <a ui-sref-active=\"active\" ui-sref=\"report.persisted\" data-name=\"report-persisted\" class=\"nav-link\">Persisted Reports</a>\n        </li>\n    </ul>\n    <div class=\"card border-top-0\" ui-view>\n\n    </div>\n</div>\n</span>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-reports/index.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-reports/index.js":
/*!*******************************************************!*\
  !*** ./src/main/assets/js/apps/onms-reports/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _assign = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js"));
var _every = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/every */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/every.js"));
var _trim = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"));
var _stringify = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js"));
var _isArray = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array */ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js"));
var _url = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/url */ "./node_modules/@babel/runtime-corejs3/core-js-stable/url.js"));
var _ReportDetails = _interopRequireDefault(__webpack_require__(/*! ./ReportDetails */ "./src/main/assets/js/apps/onms-reports/ReportDetails.js"));
var _ErrorResponse = _interopRequireDefault(__webpack_require__(/*! ../../lib/onms-http/ErrorResponse */ "./src/main/assets/js/lib/onms-http/ErrorResponse.js"));
var _Types = _interopRequireDefault(__webpack_require__(/*! ../../lib/onms-schedule-editor/scripts/Types */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Types.js"));
var _uiRouterAngularjs = __webpack_require__(/*! ../../../../../../node_modules/angular-ui-router/release/ui-router-angularjs */ "./node_modules/angular-ui-router/release/ui-router-angularjs.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var hash = __webpack_require__(/*! ../../../../../../node_modules/hash.js/lib/hash.js */ "./node_modules/hash.js/lib/hash.js");
var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var moment = __webpack_require__(/*! ../../vendor/moment-js */ "./src/main/assets/js/vendor/moment-js.js");
__webpack_require__(/*! ../../lib/onms-http */ "./src/main/assets/js/lib/onms-http/index.js");
__webpack_require__(/*! ../../lib/onms-pagination */ "./src/main/assets/js/lib/onms-pagination/index.js");
__webpack_require__(/*! ../../lib/onms-datetimepicker */ "./src/main/assets/js/lib/onms-datetimepicker/index.js");
__webpack_require__(/*! ../../lib/onms-schedule-editor */ "./src/main/assets/js/lib/onms-schedule-editor/index.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-ui-router/release/ui-router-angularjs */ "./node_modules/angular-ui-router/release/ui-router-angularjs.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-bootstrap-confirm/dist/angular-bootstrap-confirm */ "./node_modules/angular-bootstrap-confirm/dist/angular-bootstrap-confirm.js");
__webpack_require__(/*! ../../../../../../node_modules/ui-select-bs4 */ "./node_modules/ui-select-bs4/index.js");
__webpack_require__(/*! ../../../../../../node_modules/ui-select-bs4/dist/select.css */ "./node_modules/ui-select-bs4/dist/select.css");
var elementList = __webpack_require__(/*! ../onms-elementList/lib/elementList */ "./src/main/assets/js/apps/onms-elementList/lib/elementList.js");
var indexTemplate = __webpack_require__(/*! ./index.html */ "./src/main/assets/js/apps/onms-reports/index.html");
var templatesTemplate = __webpack_require__(/*! ./templates.html */ "./src/main/assets/js/apps/onms-reports/templates.html");
var persistedtTemplate = __webpack_require__(/*! ./persisted.html */ "./src/main/assets/js/apps/onms-reports/persisted.html");
var schedulesTemplate = __webpack_require__(/*! ./schedules.html */ "./src/main/assets/js/apps/onms-reports/schedules.html");
var detailsTemplate = __webpack_require__(/*! ./details.html */ "./src/main/assets/js/apps/onms-reports/details.html");
var editScheduleModalTemplate = __webpack_require__(/*! ./modals/schedule-edit-modal.html */ "./src/main/assets/js/apps/onms-reports/modals/schedule-edit-modal.html");
var reportDetailsTemplate = __webpack_require__(/*! ./report-details.html */ "./src/main/assets/js/apps/onms-reports/report-details.html");
var confirmTopoverTemplate = __webpack_require__(/*! ../onms-classifications/views/modals/popover.html */ "./src/main/assets/js/apps/onms-classifications/views/modals/popover.html");
var handleReportError = function handleReportError(response, report, optionalCallbackIfNoContextError) {
  if (report && response) {
    var errorResponse = new _ErrorResponse.default(response);
    if (errorResponse.isBadRequest()) {
      var contextError = errorResponse.asContextError();
      report.setErrors(contextError);
    } else if (optionalCallbackIfNoContextError) {
      optionalCallbackIfNoContextError(response);
    }
  }
};
var handleGrafanaError = function handleGrafanaError(response, report, optionalCallbackIfNoContextError) {
  // In case the dashboards could not be loaded, it may be due to
  // an issue with talking to Grafana itself.
  var errorResponse = new _ErrorResponse.default(response);
  if (errorResponse.isContextError()) {
    var contextError = errorResponse.asContextError();
    if (contextError.context === 'entity') {
      contextError.context = 'GRAFANA_ENDPOINT_UID';
    }
    report.setErrors(contextError);
  } else {
    handleReportError(response, report, optionalCallbackIfNoContextError);
  }
};
(function () {
  'use strict';

  var MODULE_NAME = 'onms.reports';
  angular.module(MODULE_NAME, ['angular-loading-bar', 'ngResource', 'ngSanitize', 'ui.router', 'ui.select', 'mwl.confirm', 'onms.http', 'onms.default.apps', 'onms.datetimepicker', 'onms.schedule.editor', 'onms.pagination']).config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);
  }]).run(['confirmationPopoverDefaults', function (confirmationPopoverDefaults) {
    confirmationPopoverDefaults.templateUrl = confirmTopoverTemplate;
  }]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('report', {
      url: '/report',
      controller: 'ReportsController',
      templateUrl: indexTemplate
    }).state('report.templates', {
      url: '/templates',
      controller: 'ReportTemplatesController',
      templateUrl: templatesTemplate
    }).state('report.templates.details', {
      url: '/:id?online',
      controller: 'ReportDetailController',
      templateUrl: detailsTemplate,
      resolve: {}
    }).state('report.schedules', {
      url: '/schedules',
      controller: 'ReportSchedulesController',
      templateUrl: schedulesTemplate
    }).state('report.persisted', {
      url: '/persisted',
      controller: 'ReportStorageController',
      templateUrl: persistedtTemplate
    });
    $urlRouterProvider.otherwise('/report/templates');
  }]).factory('ReportTemplateResource', ['$resource', function ($resource) {
    return $resource('rest/reports/:id', {
      id: '@id'
    }, {
      'list': {
        method: 'GET',
        isArray: true
      },
      'get': {
        method: 'GET'
      },
      'listScheduled': {
        method: 'GET',
        isArray: true,
        url: 'rest/reports/scheduled'
      }
    });
  }]).factory('ReportScheduleResource', ['$resource', function ($resource) {
    return $resource('rest/reports/scheduled/:id', {
      id: '@triggerName'
    }, {
      'list': {
        method: 'GET',
        isArray: true
      },
      'get': {
        method: 'GET',
        isArray: false
      },
      'delete': {
        method: 'DELETE',
        params: {
          triggerName: -1
        } /* to prevent accidentally deleting all */
      },
      'deleteAll': {
        method: 'DELETE'
      },
      'update': {
        method: 'PUT'
      }
    });
  }]).factory('ReportStorageResource', ['$resource', function ($resource) {
    return $resource('rest/reports/persisted/:id', {
      id: '@id'
    }, {
      'list': {
        method: 'GET',
        isArray: true
      },
      'get': {
        method: 'GET'
      },
      'delete': {
        method: 'DELETE',
        params: {
          id: -1
        } /* to prevent accidentally deleting all */
      },
      'deleteAll': {
        method: 'DELETE'
      }
    });
  }]).factory('WhoamiResource', ['$resource', function ($resource) {
    return $resource('rest/whoami', {}, {
      'whoami': {
        method: 'GET'
      }
    });
  }]).factory('GrafanaResource', ['$resource', function ($resource) {
    return $resource('rest/endpoints/grafana/:id', {
      id: '@id'
    }, {
      'get': {
        method: 'GET'
      },
      'list': {
        method: 'GET',
        isArray: true
      },
      'dashboards': {
        method: 'GET',
        isArray: true,
        url: 'rest/endpoints/grafana/:uid/dashboards',
        params: {
          uid: '@uid'
        }
      }
    });
  }]).factory('UserService', ['WhoamiResource', '$q', function (WhoamiResource, $q) {
    return {
      whoami: function whoami() {
        var deferred = $q.defer();
        WhoamiResource.whoami(function (data) {
          var user = {
            id: data['id'],
            name: data['fullName'],
            email: data['email'],
            roles: data['roles'],
            isAdmin: function isAdmin() {
              var _context;
              return (0, _indexOf.default)(_context = this.roles).call(_context, "ROLE_ADMIN") >= 0;
            },
            isReportDesigner: function isReportDesigner() {
              var _context2;
              return (0, _indexOf.default)(_context2 = this.roles).call(_context2, "ROLE_REPORT_DESIGNER") >= 0;
            }
          };
          deferred.resolve(user);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  }]).directive('onmsReportDetails', ['GrafanaResource', '$q', '$http', function (GrafanaResource, $q, $http) {
    var getDashboardDetails = function getDashboardDetails(uid, dashboardId) {
      return $http.get('rest/endpoints/grafana/' + uid + '/dashboards/' + dashboardId).then(function (res) {
        return res.data;
      });
    };
    return {
      restrict: 'E',
      templateUrl: reportDetailsTemplate,
      scope: {
        report: '=?ngModel',
        options: '=?options',
        onInvalidChange: '&?onInvalidChange',
        onGlobalError: '&onGlobalError'
      },
      link: function link(scope) {
        scope.oldTimeZone = undefined;
        scope.endpoints = [];
        scope.dashboards = [];
        scope.selected = {
          endpoint: undefined,
          dashboard: undefined
        };
        scope.onInvalidChange = scope.onInvalidChange || function () {}; // eslint-disable-line @typescript-eslint/no-empty-function
        scope.onDateParamStateChange = function (state, date, parameter) {
          scope.$evalAsync(function () {
            if (date && parameter) {
              parameter.internalValue = date;
            }
            scope.onInvalidChange({
              invalidState: state
            });
          });
        };
        scope.paramHash = function (parameter) {
          var ret = hash.sha256();
          if (parameter) {
            ret.update(parameter.type);
            ret.update(parameter.name);
            ret.update(parameter.value);
            ret.update(parameter.internalValue);
            ret.update(parameter.internalFormat);
          }
          return ret.digest('hex');
        };
        scope.timezoneChanged = function () {
          var before = scope.oldTimeZone;
          var after = scope.report && scope.report.parametersByName['timezone'] ? scope.report.parametersByName['timezone'].value : undefined;
          if (before && after && before !== after) {
            var _context3;
            // timezone has changed, adjust existing date/time values to match

            (0, _forEach.default)(_context3 = scope.report.parameters).call(_context3, function (parameter, index) {
              if (parameter.type === 'date') {
                var oldDate = moment.tz(parameter.internalValue, before);
                var newDate = oldDate.clone().tz(after);
                if (newDate.isValid()) {
                  parameter.internalValue = newDate.format(parameter.internalFormat);
                  parameter.date = newDate.format('YYYY-MM-DD');
                  parameter.hours = newDate.hours();
                  parameter.minutes = newDate.minutes();
                } else {
                  // eslint-disable-next-line no-console
                  console.error('timezoneChanged(): new date is invalid?!');
                }

                // re-hydrate this parameter because the datetime picker isn't refreshing itself properly
                scope.report.parameters[index] = scope.report.parametersByName[parameter.name] = (0, _assign.default)({}, parameter);
              }
            });
          }

          // done processing, update state for next time
          if (scope.report && scope.report.parametersByName['timezone']) {
            scope.report.parametersByName['timezone'].value = after;
          }
          scope.oldTimeZone = after;
          scope.report.validateTimezone();
        };
        scope.endpointChanged = function () {
          scope.dashboards = [];
          scope.selected.dashboard = undefined;
          scope.report.resetErrors();
          if (scope.report.parametersByName['timezone']) {
            scope.report.parametersByName['timezone'].value = undefined;
            scope.timezoneChanged();
          }
          GrafanaResource.dashboards({
            uid: scope.selected.endpoint.uid
          }, function (dashboards) {
            scope.dashboards = dashboards;
            if (scope.dashboards.length > 0) {
              scope.selected.dashboard = scope.dashboards[0];
            }
          }, function (response) {
            handleGrafanaError(response, scope.report, function () {
              return scope.onGlobalError({
                response: response
              });
            });
          });
        };
        scope.loadEndpoints = function () {
          scope.report.resetErrors();
          GrafanaResource.list(function (endpoints) {
            var _context4;
            scope.endpoints = endpoints;
            (0, _forEach.default)(_context4 = scope.endpoints).call(_context4, function (item) {
              item.label = item.uid;
              if (item.description) {
                item.label += " - " + item.description;
              }
            });
            if (scope.endpoints.length > 0) {
              scope.selected.endpoint = scope.endpoints[0];
              scope.endpointChanged();
            }
          }, function (errorResponse) {
            handleGrafanaError(errorResponse, scope.report, function () {
              return scope.onGlobalError({
                response: errorResponse
              });
            });
          });
        };

        // Ensure the format matches
        scope.$watch('report.format', function (newVal) {
          if (scope.report.deliveryOptions) {
            scope.report.deliveryOptions.format = newVal;
          }
        });
        scope.$watch('report.scheduleOptions.type', function () {
          // Reset cronExpression issue, if we changed the type as the message may be outdated
          if (scope.report.scheduleOptions.type !== _Types.default.CUSTOM && scope.report.errors.cronExpression) {
            scope.report.errors.cronExpression = undefined;
          }
        });
        scope.$watchCollection('report.parameters', function (newVal, oldVal) {
          if (oldVal.length === 0 && newVal.length !== 0) {
            if (scope.report.isGrafanaReport()) {
              scope.loadEndpoints();
            }
          }
        });
        scope.$watchCollection('selected', function (newSelected) {
          var deferred = $q.defer();
          if (newSelected && newSelected.endpoint && newSelected.endpoint.uid && newSelected.dashboard && newSelected.dashboard.uid) {
            var selectedDashboard = newSelected.dashboard;
            // the dashboard object you get from search doesn't include the full
            // dashboard data; query the dashboard and grab the timezone from it
            getDashboardDetails(newSelected.endpoint.uid, selectedDashboard.uid).then(function (newDashboard) {
              if (newDashboard && newDashboard.timezone !== undefined && selectedDashboard.timezone !== newDashboard.timezone) {
                selectedDashboard.timezone = newDashboard.timezone;
                scope.timezoneChanged();
              }
            }).finally(function () {
              deferred.resolve(selectedDashboard);
            });
          } else {
            // endpoint and/or dashboard are missing UIDs?  assume we can't do anything yet
            deferred.resolve(newSelected && newSelected.dashboard ? newSelected.dashboard : undefined);
          }
          deferred.promise.finally(function () {
            scope.report.updateGrafanaParameters(newSelected);
          });
        });
        scope.$watch('reportForm.$invalid', function (newVal, oldVal) {
          if (scope.onInvalidChange) {
            scope.onInvalidChange({
              invalidState: newVal
            });
          }
        });
      }
    };
  }]).directive('multiEmails', function () {
    var EMAIL_REGEXP = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/;
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function link(scope, element, attrs, ctrl) {
        if (ctrl && ctrl.$validators.email) {
          ctrl.$validators.email = function (modelValue) {
            if (angular.isDefined(modelValue)) {
              var _context5;
              var isValidEmails = ctrl.$isEmpty(modelValue) || (0, _every.default)(_context5 = modelValue.split(',')).call(_context5, function (email) {
                return EMAIL_REGEXP.test((0, _trim.default)(email).call(email));
              });
              return isValidEmails;
            }
            return false;
          };
        }
      }
    };
  }).controller('ReportsController', ['$scope', 'UserService', function ($scope, UserService) {
    $scope.globalError = undefined;
    $scope.globalErrorDetails = undefined;
    $scope.setGlobalError = function (errorResponse) {
      $scope.globalError = 'An unexpected error occurred: ' + errorResponse.status + ' ' + errorResponse.statusText;
      $scope.globalErrorDetails = (0, _stringify.default)(errorResponse, null, 2);
      return $scope.globalError;
    };
    $scope.fetchUserInfo = function () {
      return UserService.whoami().then(function (user) {
        $scope.userInfo = user;
        return user;
      }, function (errorResponse) {
        $scope.setGlobalError(errorResponse);
        return _uiRouterAngularjs.$q.reject(errorResponse);
      });
    };
    $scope.fetchUserInfo();
  }]).controller('ReportTemplatesController', ['$scope', 'ReportTemplateResource', function ($scope, ReportTemplateResource) {
    $scope.refresh = function () {
      $scope.reports = [];
      ReportTemplateResource.list(function (response) {
        if (response && (0, _isArray.default)(response)) {
          $scope.reports = response;
        }
      }, function (errorResponse) {
        $scope.setGlobalError(errorResponse);
      });
    };
    $scope.refresh();
  }]).controller('ReportDetailController', ['$scope', '$http', '$stateParams', 'ReportTemplateResource', function ($scope, $http, $stateParams, ReportTemplateResource) {
    $scope.meta = {
      reportId: $stateParams.id,
      online: $stateParams.online === 'true'
    };
    $scope.report = new _ReportDetails.default({
      id: $scope.meta.reportId,
      scope: $scope
    });
    $scope.options = {};
    $scope.loading = false;
    $scope.reportForm = {
      $invalid: false
    };
    $scope.onReportFormInvalidStateChange = function (invalidState) {
      $scope.reportForm.$invalid = invalidState;
    };
    $scope.loadDetails = function () {
      $scope.loading = true;
      $scope.selected = {
        endpoint: undefined,
        dashboard: undefined
      };
      $scope.options = {
        showReportFormatOptions: $scope.meta.online,
        showDeliveryOptions: $scope.userInfo.isReportDesigner() || $scope.userInfo.isAdmin(),
        showDeliveryOptionsToggle:  true && $scope.meta.online,
        showScheduleOptions: $scope.userInfo.isReportDesigner() || $scope.userInfo.isAdmin(),
        showScheduleOptionsToggle: true,
        deliverReport: !$scope.meta.online,
        scheduleReport: false,
        canEditTriggerName: true
      };
      var requestParameters = {
        id: $scope.report.id,
        userId: $scope.userInfo.id
      };
      ReportTemplateResource.get(requestParameters, function (response) {
        $scope.loading = false;
        $scope.report = new _ReportDetails.default((0, _assign.default)(response, {
          scope: $scope
        }));
      }, function (response) {
        $scope.loading = false;
        $scope.setGlobalError(response);
      });
    };
    $scope.runReport = function () {
      $scope.report.resetErrors();
      // eslint-disable-next-line no-console
      console.debug('running report:', $scope.report);
      $http({
        method: 'POST',
        url: 'rest/reports/' + $stateParams.id,
        data: {
          id: $scope.report.id,
          parameters: $scope.report.parameters,
          format: $scope.report.format
        },
        responseType: 'arraybuffer'
      }).then(function (response) {
        var data = response.data;
        var fileBlob = new Blob([data], {
          type: $scope.report.format === 'PDF' ? 'application/pdf' : 'text/csv'
        });
        var fileURL = _url.default.createObjectURL(fileBlob);
        var contentDisposition = response.headers("Content-Disposition");
        // var filename = (contentDisposition.split(';')[1].trim().split('=')[1]).replace(/"/g, '');
        var filename = $stateParams.id + '.' + $scope.report.format.toLowerCase();
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';
        a.href = fileURL;
        a.download = filename;
        a.click();
        _url.default.revokeObjectURL(fileURL);
        document.body.removeChild(a);
      }, function (response) {
        if (response.status === 400) {
          // content Type is 'arraybuffer', so first convert to json
          var bodyAsString = String.fromCharCode.apply(null, new Uint8Array(response.data));
          var bodyAsJson = JSON.parse(bodyAsString);
          response.data = bodyAsJson;
          handleReportError(response, $scope.report, function (response) {
            return $scope.setGlobalError(response);
          });
        } else {
          $scope.setGlobalError(response);
        }
      });
    };
    $scope.deliverReport = function () {
      $scope.report.resetErrors();
      $http({
        method: 'POST',
        url: 'rest/reports/persisted',
        data: {
          id: $scope.report.id,
          parameters: $scope.report.parameters,
          format: $scope.report.format,
          deliveryOptions: $scope.report.deliveryOptions
        }
      }).then(function () {
        $scope.deliverySuccess = true;
      }, function (response) {
        handleReportError(response, $scope.report, function (response) {
          return $scope.setGlobalError(response);
        });
      });
    };
    $scope.scheduleReport = function () {
      $scope.report.resetErrors();
      $http({
        method: 'POST',
        url: 'rest/reports/scheduled',
        data: {
          id: $scope.report.id,
          parameters: $scope.report.parameters,
          format: $scope.report.format,
          deliveryOptions: $scope.report.deliveryOptions,
          cronExpression: $scope.report.scheduleOptions.getCronExpression()
        }
      }).then(function (response) {
        $scope.scheduleSuccess = true;
      }, function (response) {
        handleReportError(response, $scope.report, function (response) {
          return $scope.setGlobalError(response);
        });
      });
    };
    $scope.execute = function () {
      $scope.deliverySuccess = false;
      $scope.scheduleSuccess = false;
      $scope.$evalAsync(function () {
        $scope.report.updateDateParameters();
      });
      $scope.$evalAsync(function () {
        if ($scope.meta.online && !$scope.options.deliverReport && !$scope.options.scheduleReport) {
          $scope.runReport();
        }
        if ($scope.options.deliverReport && !$scope.options.scheduleReport) {
          $scope.deliverReport();
        }
        if ($scope.options.deliverReport && $scope.options.scheduleReport) {
          $scope.scheduleReport();
        }
      });
    };

    // We wait for the userInfo to be set, otherwise loading
    // cannot be performed as we don't have a user id
    $scope.$watch("userInfo", function (newVal, oldVal) {
      if (newVal) {
        $scope.loadDetails();
      }
    });
  }]).controller('ReportSchedulesController', ['$scope', '$uibModal', 'ReportScheduleResource', function ($scope, $uibModal, ReportScheduleResource) {
    $scope.scheduledReports = [];
    $scope.pagination = {
      page: 1,
      limit: 20,
      totalItems: 0,
      offset: 0
    };
    $scope.refresh = function () {
      var parameters = $scope.pagination || {};
      ReportScheduleResource.list({
        limit: parameters.limit || 20,
        offset: (parameters.page - 1) * parameters.limit || 0
      }, function (data, headers) {
        $scope.scheduledReports = data;
        var contentRange = elementList.parseContentRange(headers('Content-Range'));
        $scope.pagination.totalItems = contentRange.total;
      }, function (response) {
        $scope.setGlobalError(response);
      });
    };
    $scope.deleteAll = function () {
      ReportScheduleResource.deleteAll({}, function (response) {
        $scope.pagination.page = 1; // go back to page 1
        $scope.refresh();
      }, function (response) {
        $scope.setGlobalError(response);
      });
    };
    $scope.delete = function (schedule) {
      ReportScheduleResource.delete({
        id: schedule.triggerName || -1
      }, function (response) {
        // If we deleted the last report on this page
        if ($scope.scheduledReports.length === 1 && $scope.pagination.page > 1) {
          $scope.pagination.page--; // go a page back
        }

        $scope.refresh();
      }, function (response) {
        $scope.setGlobalError(response);
      });
    };
    $scope.edit = function (triggerName, reportId) {
      var modalInstance = $uibModal.open({
        templateUrl: editScheduleModalTemplate,
        backdrop: 'static',
        keyboard: false,
        size: 'lg',
        controller: 'ScheduleEditController',
        resolve: {
          userInfo: function userInfo() {
            return $scope.userInfo;
          },
          meta: function meta() {
            return {
              reportId: reportId,
              online: false,
              triggerName: triggerName
            };
          },
          setGlobalError: function setGlobalError() {
            return $scope.setGlobalError;
          }
        }
      });
      modalInstance.result.then(function () {
        $scope.refresh();
      });
    };
    $scope.refresh();
  }]).controller('ScheduleEditController', ['$http', '$q', '$scope', 'userInfo', 'meta', 'setGlobalError', 'ReportScheduleResource', function ($http, $q, $scope, userInfo, meta, setGlobalError, ReportScheduleResource) {
    $scope.meta = meta;
    $scope.userInfo = userInfo;
    $scope.report = null;
    $scope.options = {};
    $scope.loading = false;
    $scope.reportForm = {
      $invalid: false
    };
    var getReportDetails = function getReportDetails(reportId) {
      return $http.get('rest/reports/scheduled/' + reportId).then(function (res) {
        return res.data;
      });
    };
    $scope.onReportFormInvalidStateChange = function (invalidState) {
      $scope.reportForm.$invalid = invalidState;
    };
    $scope.setGlobalError = function (response) {
      setGlobalError(response);
    };
    $scope.loadDetails = function () {
      if ($scope.loading) {
        return;
      }
      $scope.loading = true;
      $scope.$evalAsync(function () {
        $scope.selected = {
          endpoint: undefined,
          dashboard: undefined
        };
        $scope.options = {
          hideEndpointsChooser: true,
          // endpoint should not be changed when editing
          showReportFormatOptions: false,
          // Options are not shown, as we are editing a schedule
          showDeliveryOptions: true,
          // always show when editing
          showDeliveryOptionsToggle: false,
          // Toggling is disabled
          showScheduleOptions: true,
          // always show when editing
          showScheduleOptionsToggle: false,
          // Toggling is disabled
          deliverReport: true,
          // when editing schedule and delivery is enabled
          scheduleReport: true,
          // when editing schedule and delivery is enabled
          canEditTriggerName: false // When in edit mode, the trigger name should be unique
        };

        getReportDetails($scope.meta.triggerName).then(function (reportData) {
          $scope.report = new _ReportDetails.default((0, _assign.default)(reportData, {
            scope: $scope
          }));
        }).catch(function (err) {
          $scope.setGlobalError(err);
          $scope.$close();
        }).finally(function () {
          $scope.loading = false;
        });
      });
    };
    $scope.update = function () {
      if (!$scope.report) {
        return $q.reject('report not initialized');
      }
      $scope.report.resetErrors();
      var data = {
        id: $scope.report.id,
        triggerName: $scope.meta.triggerName,
        parameters: $scope.report.parameters,
        format: $scope.report.format,
        deliveryOptions: $scope.report.deliveryOptions,
        cronExpression: $scope.report.scheduleOptions.getCronExpression()
      };
      return ReportScheduleResource.update(data).$promise.catch(function (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        handleReportError(err, $scope.report, function () {
          $scope.setGlobalError(err);
        });
      }).finally(function () {
        $scope.$close();
      });
    };
    $scope.loadDetails();
  }]).controller('ReportStorageController', ['$scope', 'ReportStorageResource', function ($scope, ReportStorageResource) {
    $scope.persistedReports = [];
    $scope.pagination = {
      page: 1,
      limit: 20,
      totalItems: 0,
      offset: 0
    };
    $scope.refresh = function () {
      var parameters = $scope.pagination || {};
      ReportStorageResource.list({
        limit: parameters.limit || 20,
        offset: (parameters.page - 1) * parameters.limit || 0
      }, function (data, headers) {
        $scope.persistedReports = data;
        var contentRange = elementList.parseContentRange(headers('Content-Range'));
        $scope.pagination.totalItems = contentRange.total;
      }, function (response) {
        $scope.setGlobalError(response);
      });
    };
    $scope.deleteAll = function () {
      ReportStorageResource.deleteAll({}, function (response) {
        $scope.pagination.page = 1; // go back to page 1
        $scope.refresh();
      }, function (response) {
        $scope.setGlobalError(response);
      });
    };
    $scope.delete = function (report) {
      ReportStorageResource.delete({
        id: report.id || -1
      }, function (response) {
        // If we deleted the last report on this page
        if ($scope.persistedReports.length === 1 && $scope.pagination.page > 1) {
          $scope.pagination.page--; // go back a page
        }

        $scope.refresh();
      }, function (response) {
        $scope.setGlobalError(response);
      });
    };
    $scope.refresh();
  }]);
})();

/***/ }),

/***/ "./src/main/assets/js/apps/onms-reports/modals/schedule-edit-modal.html":
/*!******************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-reports/modals/schedule-edit-modal.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n<div class=\"modal-header\">\n    <h3>Edit Schedule</h3>\n</div>\n<div class=\"modal-body\">\n    <onms-report-details ng-if=\"report\" ng-model=\"report\" options=\"options\" on-invalid-change=\"onReportFormInvalidStateChange(invalidState)\" on-global-error=\"setGlobalError(response)\"></onms-report-details>\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-danger\" id=\"action.cancel.{{meta.triggerName}}\" ng-click=\"$close()\"><i class=\"fa fa-times\"></i> Cancel</button>\n    <button class=\"btn btn-primary\" id=\"action.update.{{meta.triggerName}}\" ng-click=\"update()\" ng-disabled=\"reportForm.$invalid || !report.scheduleOptions.isValid() || (report.isGrafanaReport() && !report.isGrafanaEndpointSelected())\"><i class=\"fa fa-save\"></i> Update</button>\n</div>\n</span>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-reports/modals/schedule-edit-modal.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-reports/persisted.html":
/*!*************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-reports/persisted.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"mx-2 my-2\">\n    <div class=\"mb-4\">\n        <button class=\"btn btn-secondary\" id=\"action.refresh\" ng-click=\"refresh()\"><i class=\"fa fa-refresh\"></i></button>\n        <button class=\"btn btn-secondary\"\n                ng-if=\"userInfo.isReportDesigner() || userInfo.isAdmin() && persistedReports.length > 0\"\n                id=\"action.deleteAll\"\n                mwl-confirm\n                message=\"Do you really want to delete all persisted reports?\"\n                on-confirm=\"deleteAll()\"\n                placement=\"right\"\n                confirm-button-type=\"danger\"\n                cancel-button-type=\"secondary\"\n                confirm-text=\"Yes\"\n                cancel-text=\"No\"\n                title=\"Delete All\">\n            <i class=\"fa fa-trash\"></i>\n        </button>\n    </div>\n    <div ng-if=\"persistedReports.length == 0\">\n        <span>No Data available</span>\n    </div>\n    <pagination model=\"pagination\" ng-if=\"persistedReports.length > 0\" position=\"bottom\" on-change=\"refresh\">\n        <table class=\"table table-sm table-striped mb-2\">\n            <thead>\n            <tr>\n                <th ng-if=\"userInfo.isReportDesigner() || userInfo.isAdmin()\">Action</th>\n                <th>View Report</th>\n                <th>Title</th>\n                <th>Report ID</th>\n                <th>Run Date</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"report in persistedReports\">\n                <td ng-if=\"userInfo.isReportDesigner() || userInfo.isAdmin()\">\n                    <button class=\"btn btn-sm btn-danger\" ng-click=\"delete(report)\"><i class=\"fa fa-trash\"></i></button>\n                </td>\n                <td>\n                    <a ng-repeat=\"format in report.formats\" href=\"rest/reports/download?locatorId={{report.id}}&amp;format={{format}}\" class=\"mr-4\"><i ng-class=\"{'fa-file-pdf-o': format === 'PDF', 'fa-file-text-o': format === 'CSV'}\" class=\"fa\"></i> {{format}}</a>\n                </td>\n                <td>{{report.title}}</td>\n                <td>{{report.reportId}}</td>\n                <td>{{report.date}}</td>\n                <td>\n\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </pagination>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-reports/persisted.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-reports/report-details.html":
/*!******************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-reports/report-details.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n<style type=\"text/css\">\n    .ui-select-bootstrap.is-invalid > .ui-select-match > .btn {\n        border-color: #dc3545;\n        background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\");\n        background-repeat: no-repeat;\n        background-position: 100% calc(.375em + .1875rem);\n        background-size: calc(.75em + .375rem) calc(.75em + .375rem);\n    }\n\n    .ui-select-bootstrap > .ui-select-match > .btn {\n        border-color: #ced4da;\n        background-color: #fff;\n        background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px;\n    }\n\n    .ui-select-match[disabled] {\n        background-color: #eee;\n    }\n</style>\n\n<form name=\"reportForm\" class=\"form mx-4 mt-2\" role=\"form\" novalidate>\n    <div class=\"\" ng-if=\"report.parameters && report.parameters.length > 0\">\n        <h3 class=\"\">Report Parameters</h3>\n\n        <!-- Grafana Parameters -->\n        <div ng-show=\"report.isGrafanaReport() && !options.hideEndpointsChooser\" class=\"form-group\">\n            <label>Grafana Endpoint</label>\n            <a href=\"/opennms/admin/endpoint/index.jsp\" title=\"Configure Grafana Endpoints\"> <i class=\"fa fa-plug\"></i></a>\n            <a href title=\"Reload Grafana Endpoints\" ng-click=\"loadEndpoints()\"> <i class=\"fa fa-refresh\"></i></a>\n            <ui-select\n                    ng-model=\"selected.endpoint\"\n                    ng-show=\"endpoints.length > 0\"\n                    ng-class=\"{ 'is-invalid': report.errors.GRAFANA_ENDPOINT_UID || report.errors.GRAFANA_DASHBOARD_UID }\"\n                    ng-change=\"endpointChanged()\"\n                    theme=\"bootstrap\" >\n                <ui-select-match placeholder=\"Select Grafana Endpoint\">\n                    <span>{{$select.selected.label}}</span>\n                </ui-select-match>\n                <ui-select-choices repeat=\"endpoint in (endpoints | filter: $select.search)\">\n                    {{endpoint.label}}\n                </ui-select-choices>\n            </ui-select>\n            <p class=\"alert alert-warning\" ng-if=\"endpoints.length == 0\">\n                There is no Grafana Endpoint defined.\n                Please <a href=\"/opennms/admin/endpoint/index.jsp\">add a Grafana Endpoint</a>.\n            </p>\n            <div class=\"text-danger mt-1\" style=\"font-size: 80%\" ng-if=\"report.errors.GRAFANA_ENDPOINT_UID\">\n                {{report.errors.GRAFANA_ENDPOINT_UID}}: <a href=\"/opennms/admin/endpoint/index.jsp#!/endpoints/grafana\">Configure Grafana Endpoints</a>\n            </div>\n            <div class=\"text-danger mt-1\" style=\"font-size: 80%\" ng-if=\"report.errors.GRAFANA_DASHBOARD_UID\">\n                {{report.errors.GRAFANA_DASHBOARD_UID}}\n            </div>\n        </div>\n        <div ng-show=\"report.isGrafanaReport() && selected.endpoint\" class=\"form-group\">\n            <label>Grafana Dashboard</label>\n            <a ng-if=\"dashboards.length > 0\" href=\"{{selected.endpoint.url}}/{{selected.dashboard.url}}\" title=\"Show Dashboard\" target=\"_blank\"> <i class=\"fa fa-dashboard\"></i></a>\n            <a href title=\"Refresh Dashboards\" ng-click=\"endpointChanged()\"><i class=\"fa fa-refresh\"></i></a>\n            <ui-select\n                    ng-model=\"selected.dashboard\"\n                    ng-show=\"dashboards.length > 0\"\n                    theme=\"bootstrap\" >\n                <ui-select-match placeholder=\"Select Grafana Dashboard\">\n                    <span>{{$select.selected.title}}</span>\n                </ui-select-match>\n                <ui-select-choices repeat=\"dashboard in (dashboards | filter: $select.search)\">\n                    {{dashboard.title}}\n                </ui-select-choices>\n            </ui-select>\n            <p class=\"alert alert-warning\" ng-if=\"dashboards.length == 0\">\n                There is no Grafana Dashboard defined.\n                Please <a href=\"{{selected.endpoint.url}}/dashboards\" target=\"_blank\">add a Dashboard</a>.\n            </p>\n        </div>\n\n        <!-- Other Parameters -->\n        <div ng-if=\"parameter.type === 'string' && parameter.hidden === false\" class=\"form-group\" ng-repeat-start=\"parameter in report.parameters track by paramHash(parameter)\">\n            <label for=\"{{parameter.name}}\" class=\"\">{{parameter.displayName}}</label>\n\n            <!--String -->\n            <select id=\"{{parameter.name}}\"\n                    name=\"p{{parameter.name}}\"\n                    ng-if=\"parameter.inputType === 'reportCategorySelector'\"\n                    class=\"form-control custom-select\"\n                    ng-class=\"{ 'is-invalid' : reportForm[parameter.name].$invalid || report.errors[parameter.name] || error[parameter.name]}\"\n                    ng-model=\"parameter.value\"\n                    ng-options=\"option for option in report.supportedSurveillanceCategories\">\n            </select>\n\n            <select id=\"{{parameter.name}}\" ng-if=\"parameter.inputType === 'onmsCategorySelector'\" class=\"form-control custom-select\" ng-model=\"parameter.value\">\n                <option ng-repeat=\"option in report.supportedCategories\">{{option}}</option>\n            </select>\n            <input id=\"{{parameter.name}}\"\n                   name=\"{{parameter.name}}\"\n                   ng-if=\"parameter.inputType !== 'reportCategorySelector' && parameter.inputType !== 'onmsCategorySelector'\"\n                   ng-class=\"{ 'is-invalid' : reportForm[parameter.name].$invalid || report.errors[parameter.name]}\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   ng-model=\"parameter.value\"\n                   required>\n            <div ng-show=\"reportForm[parameter.name].$invalid\" class=\"invalid-feedback\">Please provide a value.</div>\n            <div ng-show=\"report.errors[parameter.name]\" class=\"invalid-feedback\">{{report.errors[parameter.name]}}</div>\n        </div>\n        <!-- INT -->\n        <div ng-if=\"parameter.type === 'integer'\" class=\"form-group\">\n            <label for=\"{{parameter.name}}\" class=\"\">{{parameter.displayName}}</label>\n            <input id=\"{{parameter.name}}\"\n                   name=\"{{parameter.name}}\"\n                   ng-class=\"{ 'is-invalid' : reportForm[parameter.name].$invalid || report.errors[parameter.name] || report.errors[parameter.name]}\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   ng-pattern=\"/^-?[0-9]*$/\"\n                   ng-model=\"parameter.value\"\n                   required>\n            <div ng-show=\"reportForm[parameter.name].$invalid\" class=\"invalid-feedback\">Please provide an integer value.</div>\n            <div ng-show=\"report.errors[parameter.name]\" class=\"invalid-feedback\">{{report.errors[parameter.name]}}</div>\n        </div>\n        <!-- FLOAT -->\n        <div ng-if=\"parameter.type === 'float'\" class=\"form-group\">\n            <label for=\"{{parameter.name}}\" class=\"\">{{parameter.displayName}}</label>\n            <input id=\"{{parameter.name}}\"\n                   name=\"{{parameter.name}}\"\n                   ng-class=\"{ 'is-invalid' : reportForm[parameter.name].$invalid || report.errors[parameter.name] || report.errors[parameter.name]}\"\n                   class=\"form-control\"\n                   type=\"number\"\n                   ng-model=\"parameter.value\"\n                   required>\n            <div ng-show=\"reportForm[parameter.name].$invalid\" class=\"invalid-feedback\">Please provide a decimal number.</div>\n            <div ng-show=\"report.errors[parameter.name]\" class=\"invalid-feedback\">{{report.errors[parameter.name]}}</div>\n        </div>\n        <!-- DOUBLE -->\n        <div ng-if=\"parameter.type === 'double'\" class=\"form-group\">\n            <label for=\"{{parameter.name}}\" class=\"\">{{parameter.displayName}}</label>\n            <input id=\"{{parameter.name}}\"\n                   name=\"{{parameter.name}}\"\n                   ng-class=\"{ 'is-invalid' : reportForm[parameter.name].$invalid || report.errors[parameter.name] || report.errors[parameter.name]}\"\n                   class=\"form-control\"\n                   type=\"number\"\n                   ng-model=\"parameter.value\"\n                   required>\n            <div ng-show=\"reportForm[parameter.name].$invalid\" class=\"invalid-feedback\">Please provide a decimal number.</div>\n            <div ng-show=\"report.errors[parameter.name]\" class=\"invalid-feedback\">{{report.errors[parameter.name]}}</div>\n        </div>\n        <!-- DATE -->\n        <div ng-if=\"parameter.type === 'date'\" class=\"form-group\">\n            <label for=\"{{parameter.name}}\" class=\"\">{{parameter.displayName}}</label>\n            <div class=\"input-group\" ng-if=\"options.scheduleReport && parameter.useAbsoluteDate === false\">\n                <input type=\"number\"\n                       name=\"{{parameter.name}}Count\"\n                       ng-class=\"{ 'is-invalid' : reportForm[parameter.name + 'Count'].$invalid || report.errors[parameter.name + 'Count'] }\"\n                       class=\"form-control\"\n                       min=\"0\" max=\"31\" step=\"1\"\n                       ng-pattern=\"/^[0-9]*$/\"\n                       ng-model=\"parameter.count\"\n                       placeholder=\"count\"\n                       required>\n                <select class=\"form-control custom-select\" ng-model=\"parameter.interval\">\n                    <option value=\"day\">day</option>\n                    <option value=\"month\">month</option>\n                    <option value=\"year\">year</option>\n                </select>\n                <label class=\"my-auto mx-2\"> ago, at </label>\n                <input type=\"number\"\n                       name=\"{{parameter.name}}Hours\"\n                       ng-class=\"{ 'is-invalid' : reportForm[parameter.name + 'Hours'].$invalid || report.errors[parameter.name + 'Hours'] }\"\n                       class=\"form-control\"\n                       min=\"0\" max=\"23\" step=\"1\"\n                       ng-pattern=\"/^[0-9]*$/\"\n                       ng-model=\"parameter.hours\"\n                       placeholder=\"hours\"\n                       required>\n                <input type=\"number\"\n                       name=\"{{parameter.name}}Minutes\"\n                       ng-class=\"{ 'is-invalid' : reportForm[parameter.name + 'Minutes'].$invalid || report.errors[parameter.name + 'Minutes'] }\"\n                       class=\"form-control\"\n                       min=\"0\" max=\"59\" step=\"1\"\n                       ng-pattern=\"/^[0-9]*$/\"\n                       ng-model=\"parameter.minutes\"\n                       placeholder=\"minutes\"\n                       required>\n                <div ng-show=\"reportForm[parameter.name + 'Count'].$invalid || report.errors[parameter.name + 'Count']\" class=\"invalid-feedback\">{{report.errors[parameter.name + 'Count'] || 'Please provide a count value between 0 and 31.'}}</div>\n                <div ng-show=\"reportForm[parameter.name + 'Hours'].$invalid || report.errors[parameter.name + 'Hours']\" class=\"invalid-feedback\">{{report.errors[parameter.name + 'Hours'] || 'Please provide an hours value between 0 and 23.'}}</div>\n                <div ng-show=\"reportForm[parameter.name + 'Minutes'].$invalid || report.errors[parameter.name + 'Minutes']\" class=\"invalid-feedback\">{{report.errors[parameter.name + 'Minutes'] || 'Please provide a minutes value between 0 and 59.'}}</div>\n            </div>\n            <datetimepicker ng-if=\"!options.scheduleReport || parameter.useAbsoluteDate === true\"\n                            locale=\"parameter.internalLocale\"\n                            format=\"parameter.internalFormat\"\n                            ng-model=\"parameter.internalValue\"\n                            expand=\"true\"\n                            on-state-change=\"onDateParamStateChange(invalidState, date, parameter)\"\n            ></datetimepicker>\n        </div>\n        <!-- TimeZone -->\n        <div ng-if=\"parameter.type === 'timezone'\" class=\"form-group\" ng-repeat-end>\n            <label for=\"{{parameter.name}}\" class=\"\">{{parameter.displayName}}</label>\n            <ui-select\n                    id=\"{{parameter.name}}\"\n                    name=\"{{parameter.name}}\"\n                    ng-model=\"parameter.value\"\n                    ng-change=\"timezoneChanged()\"\n                    ng-disabled=\"!report.timezoneEditable\"\n                    ng-class=\"{ 'is-invalid' : reportForm[parameter.name].$invalid || report.errors[parameter.name] || report.errors[parameter.name]}\"\n                    theme=\"bootstrap\" >\n                <ui-select-match placeholder=\"Select Timezone\">\n                    <span>{{$select.selected}}</span>\n                </ui-select-match>\n                <ui-select-choices repeat=\"timezone in (report.supportedTimezones | filter: $select.search)\">\n                    {{timezone}}\n                </ui-select-choices>\n            </ui-select>\n            <div ng-show=\"!report.timezoneEditable\" class=\"text-horizon mt-1\" style=\"font-size: 80%\">\n                Time Zone has been explicitly configured in the Grafana Dashboard.\n                This can be modified by changing <i>Timezone</i> in <a href=\"{{selected.endpoint.url}}/{{selected.dashboard.url}}?editview=settings\" target=\"_blank\">Time Options <i class=\"fa fa-external-link\"></i></a>.\n            </div>\n            <div ng-show=\"report.errors[parameter.name]\" class=\"text-danger mt-1\" style=\"font-size: 80%\">{{report.errors[parameter.name]}}</div>\n        </div>\n        <hr class=\"mb-4\">\n    </div>\n\n    <!-- FORMAT -->\n    <div class=\"form-group\" ng-if=\"options.showReportFormatOptions && !options.deliverReport\">\n        <label for=\"reportFormat\" class=\"\">Report Format</label>\n        <select id=\"reportFormat\"\n                name=\"reportFormat\"\n                ng-class=\"{ 'is-invalid' : reportForm.reportFormat.$invalid || report.errors.format }\"\n                class=\"form-control custom-select\"\n                ng-model=\"report.format\"\n                ng-options=\"format as format for format in report.supportedFormats\">\n        </select>\n        <div ng-show=\"report.errors.format\" class=\"invalid-feedback\">{{report.errors.format}}</div>\n        <hr class=\"mb-4\">\n    </div>\n\n    <div class=\"form-group ml-4\" ng-if=\"options.showDeliveryOptions && options.showDeliveryOptionsToggle\">\n        <input type=\"checkbox\" id=\"deliverReport\" ng-model=\"options.deliverReport\" class=\"form-check-input\" ng-change=\"options.scheduleReport = options.deliverReport && options.scheduleReport\">\n        <label class=\"form-check-label\"\n               data-toggle=\"tooltip\"\n               data-placement=\"right\"\n               title=\"Deliver report to file system or via e-mail\"\n               for=\"deliverReport\" >\n            <i class=\"fa fa-share\"></i> Deliver this report\n        </label>\n    </div>\n    <div class=\"\" ng-if=\"options.showDeliveryOptions && options.deliverReport\">\n        <h3>Report Delivery Options</h3>\n        <div class=\"\">\n            <div class=\"form-group\">\n                <label for=\"instanceId\">Unique name</label>\n                <button class=\"btn btn-link text-secondary px-0\"\n                        popover-trigger=\"'mouseenter'\"\n                        uib-popover=\"A name to identify this report. Must be unique overall schedules/deliveries.\"><i class=\"fa fa-info-circle\"></i>\n                </button>\n                <input ng-disabled=\"!options.canEditTriggerName\"\n                       id=\"instanceId\"\n                       name=\"instanceId\"\n                       ng-model=\"report.deliveryOptions.instanceId\"\n                       ng-class=\"{ 'is-invalid' : reportForm.instanceId.$invalid || report.errors.instanceId }\"\n                       class=\"form-control\"\n                       data-toggle=\"tooltip\"\n                       data-placement=\"right\"\n                       title=\"A name to identify this report. Must be unique overall reports.\"\n                       required\n                >\n                <div ng-show=\"reportForm.instanceId.$invalid\" class=\"invalid-feedback\">Please provide a value.</div>\n                <div ng-show=\"report.errors.instanceId\" class=\"invalid-feedback\">{{report.errors.instanceId}}</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"format\" class=\"\">Format</label>\n                <select id=\"format\"\n                        name=\"format\"\n                        ng-class=\"{ 'is-invalid' : reportForm.format.$invalid || report.errors.format }\"\n                        class=\"form-control custom-select\"\n                        ng-model=\"report.format\"\n                        data-toggle=\"tooltip\"\n                        data-placement=\"right\"\n                        title=\"The output format of the generated report.\"\n                        ng-options=\"format as format for format in report.supportedFormats\">\n                </select>\n                <div ng-show=\"report.errors.format\" class=\"invalid-feedback\">{{report.errors.format}}</div>\n            </div>\n            <div class=\"form-group ml-4\">\n                <input type=\"checkbox\" id=\"persistToggle\" ng-model=\"report.deliveryOptions.persist\" class=\"form-check-input\" ng-class=\"{ 'is-invalid' : report.errors.sendMail_persist_webhook }\">\n                <label class=\"form-check-label\"\n                       data-toggle=\"tooltip\"\n                       data-placement=\"right\"\n                       title=\"Indicates whether a copy of the generated report is stored on disk.\"\n                       for=\"persistToggle\" >\n                    Save a copy of this report\n                </label>\n            </div>\n            <div class=\"form-group ml-4\">\n                <input type=\"checkbox\" id=\"sendMailToggle\" ng-model=\"report.deliveryOptions.sendMail\" class=\"form-check-input\" ng-class=\"{ 'is-invalid' : report.errors.sendMail_persist_webhook }\">\n                <label class=\"form-check-label\" for=\"sendMailToggle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Indicates whether the generated report is send via email to the defined recipient.\">\n                    Email report\n                </label>\n            </div>\n            <div class=\"form-group ml-4\">\n                <input type=\"checkbox\" id=\"webhookToggle\" ng-model=\"report.deliveryOptions.webhook\" class=\"form-check-input\" ng-class=\"{ 'is-invalid' : report.errors.sendMail_persist_webhook }\">\n                <label class=\"form-check-label\" for=\"webhookToggle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Indicates wheter the generated report is pushed to an URL\">\n                    Webhook\n                </label>\n                <div ng-show=\"report.errors.sendMail_persist_webhook\" class=\"invalid-feedback\">Please select at least one delivery method</div>\n            </div>\n            <div class=\"form-group\" ng-if=\"report.deliveryOptions.sendMail\">\n                <label for=\"mailRecipient\">Recipient</label>\n                <button class=\"btn btn-link text-secondary px-0\"\n                        popover-trigger=\"'mouseenter'\"\n                        uib-popover=\"Allows multiple recipients by separating them via comma: test@opennms.org,ulf@opennms.org\"><i class=\"fa fa-info-circle\"></i>\n                </button>\n                <input id=\"mailRecipient\"\n                       name=\"mailRecipient\"\n                       ng-model=\"report.deliveryOptions.mailTo\"\n                       placeholder=\"some@email.org\"\n                       type=\"email\"\n                       class=\"form-control\"\n                       ng-class=\"{ 'is-invalid' : reportForm.mailRecipient.$invalid || report.errors.mailTo }\"\n                       data-toggle=\"tooltip\"\n                       data-placement=\"right\"\n                       title=\"The recipient of the generated report if 'Email report' is enabled.\"\n                       multi-emails\n                       required\n                >\n                <div ng-show=\"reportForm.mailRecipient.$invalid\" class=\"invalid-feedback\">Please provide a valid email.</div>\n                <div ng-show=\"report.errors.mailTo\" class=\"invalid-feedback\">{{report.errors.mailTo}}</div>\n            </div>\n            <div class=\"form-group\" ng-if=\"report.deliveryOptions.webhook\">\n                <label for=\"mailRecipient\">Webhook URL</label>\n                <button class=\"btn btn-link text-secondary px-0\"\n                        popover-trigger=\"'outsideClick'\"\n                        uib-popover-html=\"'\n                        <div>\n                            Posts the generated report to this http endpoint.\n                            If url parameters are required, substitution of the URL supports the following parameters: <br><br>\n                            - <strong>format</strong> Format of the report <br>\n                            - <strong>instanceId</strong> Unique name of the report <br>\n                            - <strong>parameter_&lt;parameterName&gt;</strong> Any report parameter <br><br>\n\n                            <strong>Example</strong> <br>\n                            <span>http://localhost:8080/files?instanceId=:instanceId&format=:format&option=:parameter_option</pre>\n                        </div>'\">\n                    <i class=\"fa fa-info-circle\"></i>\n                </button>\n                <input id=\"webhookUrl\"\n                       name=\"webhookUrl\"\n                       ng-model=\"report.deliveryOptions.webhookUrl\"\n                       placeholder=\"https://example.org/:reportId/?:instanceId\"\n                       type=\"text\"\n                       class=\"form-control\"\n                       ng-class=\"{ 'is-invalid' : reportForm.webhookUrl.$invalid || report.errors.webhookUrl }\"\n                       data-toggle=\"tooltip\"\n                       data-placement=\"right\"\n                       title=\"The report is sent to this URL with an http post request after generated\"\n                       required\n                >\n                <div ng-show=\"reportForm.webhookUrl.$invalid\" class=\"invalid-feedback\">Please provide a valid webhook url.</div>\n                <div ng-show=\"report.errors.webhookUrl\" class=\"invalid-feedback\">{{report.errors.webhookUrl}}</div>\n            </div>\n        </div>\n        <hr class=\"mb-4\">\n    </div>\n\n    <div class=\"form-group ml-4\" ng-if=\"options.showScheduleOptions && options.showScheduleOptionsToggle\">\n        <input type=\"checkbox\" id=\"createSchedule\" ng-model=\"options.scheduleReport\" class=\"form-check-input\" ng-change=\"options.deliverReport = options.deliverReport || options.scheduleReport\">\n        <label class=\"form-check-label\"\n               data-toggle=\"tooltip\"\n               data-placement=\"right\"\n               title=\"Schedule this report\"\n               for=\"createSchedule\" >\n            <i class=\"fa fa-clock-o\"></i> Schedule this report\n        </label>\n    </div>\n    <div class=\"\" ng-if=\"options.showScheduleOptions && options.scheduleReport\">\n        <h3>Schedule Editor</h3>\n        <div class=\"\">\n            <onms-schedule-editor ng-model=\"report.scheduleOptions\"></onms-schedule-editor>\n            <div class=\"text-danger\" style=\"font-size: 80%; max-width: 300px\" ng-if=\"report.errors.cronExpression\">{{report.errors.cronExpression}}</div>\n        </div>\n        <hr>\n    </div>\n    <p class=\"text-danger\" style=\"font-size: 80%\" ng-if=\"report.errors.entity\">\n        {{report.errors.entity}}\n    </p>\n</form>\n</span>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-reports/report-details.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-reports/schedules.html":
/*!*************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-reports/schedules.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"mx-2 my-2\">\n    <div class=\"mb-4\">\n        <button class=\"btn btn-secondary\" id=\"action.refresh\" ng-click=\"refresh()\" title=\"Refresh\"><i class=\"fa fa-refresh\"></i></button>\n        <button class=\"btn btn-secondary\"\n                ng-if=\"userInfo.isReportDesigner() || userInfo.isAdmin() && scheduledReports.length > 0\"\n                id=\"action.deleteAll\"\n                mwl-confirm\n                message=\"Do you really want to delete all persisted reports?\"\n                on-confirm=\"deleteAll()\"\n                placement=\"right\"\n                confirm-button-type=\"danger\"\n                cancel-button-type=\"secondary\"\n                confirm-text=\"Yes\"\n                cancel-text=\"No\"\n                title=\"Delete All\">\n            <i class=\"fa fa-trash\"></i>\n        </button>\n    </div>\n    <div ng-if=\"scheduledReports.length == 0\">\n        <span>No Data available</span>\n    </div>\n    <pagination model=\"pagination\" ng-if=\"scheduledReports.length > 0\" position=\"bottom\" on-change=\"refresh\">\n        <table class=\"table table-sm table-striped mb-2\">\n            <thead>\n            <tr>\n                <th ng-if=\"userInfo.isReportDesigner() || userInfo.isAdmin()\">Action(s)</th>\n                <th>Template</th>\n                <th>Format</th>\n                <th colspan=\"3\">Delivery Options</th>\n                <th>Cron Expression</th>\n                <th>Trigger Name</th>\n                <th>Next fire time</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"schedule in scheduledReports\">\n                <td>\n                    <button class=\"btn btn-sm btn-danger\" title=\"Delete Schedule\" ng-if=\"userInfo.isReportDesigner() || userInfo.isAdmin()\" ng-click=\"delete(schedule)\"><i class=\"fa fa-trash\"></i></button>\n                    <button class=\"btn btn-sm btn-primary\" id=\"action.edit.{{schedule.triggerName}}\" ng-click=\"edit(schedule.triggerName, schedule.reportId)\" title=\"Show Report Parameters\"><i class=\"fa fa-cogs\"></i></button>\n                </td>\n                <td>{{schedule.reportId}}</td>\n                <td>\n                    <i class=\"fa\" ng-class=\"{'fa-file-pdf-o':schedule.deliveryOptions.format === 'PDF', 'fa-file-text-o': schedule.deliveryOptions.format === 'CSV'}\"></i>\n                    {{schedule.deliveryOptions.format}}\n                </td>\n                <td>\n                    <span ng-if=\"schedule.deliveryOptions.persist || false\" title=\"Persist to Disk\">\n                        <i class=\"fa fa-save\"></i>\n                    </span>\n                </td>\n                <td>\n                    <span ng-if=\"schedule.deliveryOptions.sendMail || false\" title=\"Mail to {{schedule.deliveryOptions.mailTo}}\">\n                        <i class=\"fa fa-envelope-o\"></i>\n                    </span>\n                </td>\n                <td>\n                    <span ng-if=\"schedule.deliveryOptions.webhook || false\" title=\"POST to {{schedule.deliveryOptions.webhookUrl}}\">\n                        <i class=\"fa fa-paper-plane-o\"></i>\n                    </span>\n                </td>\n                <td>\n                    <span title=\"Cron Expression\">\n                        <i class=\"fa fa-clock-o\"></i> <small>{{schedule.cronExpression}}</small>\n                    </span>\n                </td>\n                <td>{{schedule.triggerName}}</td>\n                <td>{{schedule.nextFireTime}}</td>\n                <td>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </pagination>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-reports/schedules.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-reports/templates.html":
/*!*************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-reports/templates.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n\n<span ng-if=\"reports.length == 0\">No Data available</span>\n\n<div class=\"row\">\n    <div class=\"col-5\">\n        <div class=\"mx-2 my-2\" style=\"height: calc(100vh - 109px); overflow: scroll\">\n            <div class=\"list-group list-group-flush\" ng-if=\"reports.length > 0\">\n                <a ng-repeat=\"report in reports\"\n                   ui-sref-active=\"active\"\n                   ui-sref=\"report.templates.details({'id': report.id, 'online': report.online})\"\n                   class=\"list-group-item list-group-item-action\">\n                    <h5 class=\"\">{{report.name}}</h5>\n                    <div class=\"text-muted\">\n                        {{report.description}}\n                        <span class=\"badge badge-secondary pull-right\" ng-if=\"!report.online\" title=\"Can only deliver or schedule Report\">\n                            no adhoc\n                        </span>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-7\" ui-view>\n    </div>\n</div>\n\n</span>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-reports/templates.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

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

/***/ "./src/main/assets/js/lib/onms-http/ContextError.js":
/*!**********************************************************!*\
  !*** ./src/main/assets/js/lib/onms-http/ContextError.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _Object$setPrototypeOf2 = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/set-prototype-of.js");
var _bindInstanceProperty2 = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js");
var _indexOfInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
var _Reflect$construct = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");
var _Map = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/map.js");
var _Object$create = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/create */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/create.js");
var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
var _Symbol$toPrimitive = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js");
var _Symbol = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js");
var _Symbol$iterator = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol/iterator */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/iterator.js");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _concat = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"));
var _setPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/set-prototype-of.js"));
var _bind = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-prototype-of.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_Symbol$toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = _Object$create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); _Object$defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof _Map === "function" ? new _Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = _Object$create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { var _context5; _construct = _bindInstanceProperty2(_context5 = _Reflect$construct).call(_context5); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = _bindInstanceProperty2(Function).apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { var _context4; return _indexOfInstanceProperty(_context4 = Function.toString.call(fn)).call(_context4, "[native code]") !== -1; }
function _setPrototypeOf(o, p) { var _context3; _setPrototypeOf = _Object$setPrototypeOf2 ? _bindInstanceProperty2(_context3 = _Object$setPrototypeOf2).call(_context3) : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { var _context2; _getPrototypeOf = _setPrototypeOf2.default ? (0, _bind.default)(_context2 = _getPrototypeOf2.default).call(_context2) : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }
var ContextError = /*#__PURE__*/function (_Error) {
  _inherits(ContextError, _Error);
  var _super = _createSuper(ContextError);
  function ContextError() {
    var _context;
    var _this;
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'entity';
    _classCallCheck(this, ContextError);
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    _this = _super.call.apply(_super, (0, _concat.default)(_context = [this]).call(_context, params));
    _this.context = context;
    return _this;
  }
  return _createClass(ContextError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.default = ContextError;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-http/ErrorResponse.js":
/*!***********************************************************!*\
  !*** ./src/main/assets/js/lib/onms-http/ErrorResponse.js ***!
  \***********************************************************/
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
var _ContextError = _interopRequireDefault(__webpack_require__(/*! ./ContextError */ "./src/main/assets/js/lib/onms-http/ContextError.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ErrorResponse = /*#__PURE__*/function () {
  function ErrorResponse(response) {
    _classCallCheck(this, ErrorResponse);
    this.response = response;
  }
  _createClass(ErrorResponse, [{
    key: "status",
    get: function get() {
      return this.response.status;
    }
  }, {
    key: "isContextError",
    value: function isContextError() {
      return this.response.data && this.response.data.context && this.response.data.message;
    }
  }, {
    key: "asContextError",
    value: function asContextError() {
      if (this.isContextError()) {
        return new _ContextError.default(this.response.data.context, this.response.data.message);
      }
      if (this.response.data && this.response.data.message) {
        return new _ContextError.default('entity', this.response.data.message);
      }
      return new _ContextError.default('entity', 'Unexpected error occurred. No details about the nature of the error were provided');
    }
  }, {
    key: "isBadRequest",
    value: function isBadRequest() {
      return this.status === 400;
    }
  }]);
  return ErrorResponse;
}();
exports.default = ErrorResponse;

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

/***/ "./src/main/assets/js/lib/onms-schedule-editor/index.js":
/*!**************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _sort = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js"));
var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"));
var _ClockMode = _interopRequireDefault(__webpack_require__(/*! ./scripts/ClockMode */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ClockMode.js"));
var _Time = _interopRequireDefault(__webpack_require__(/*! ./scripts/Time */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Time.js"));
var _ScheduleOptions = _interopRequireDefault(__webpack_require__(/*! ./scripts/ScheduleOptions */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ScheduleOptions.js"));
var _Types = _interopRequireDefault(__webpack_require__(/*! ./scripts/Types */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Types.js"));
var _Weekdays = _interopRequireDefault(__webpack_require__(/*! ./scripts/Weekdays.js */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Weekdays.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var scheduleEditorTemplate = __webpack_require__(/*! ./templates/schedule-editor.tpl.html */ "./src/main/assets/js/lib/onms-schedule-editor/templates/schedule-editor.tpl.html");
var intervalInputTemplate = __webpack_require__(/*! ./templates/interval-input.tpl.html */ "./src/main/assets/js/lib/onms-schedule-editor/templates/interval-input.tpl.html");
var timeInputTemplate = __webpack_require__(/*! ./templates/time-input.tpl.html */ "./src/main/assets/js/lib/onms-schedule-editor/templates/time-input.tpl.html");
var MODULE_NAME = 'onms.schedule.editor';
angular.module(MODULE_NAME, []).directive('onmsScheduleEditor', function () {
  return {
    restrict: 'E',
    templateUrl: scheduleEditorTemplate,
    scope: {
      id: '=?id',
      options: '=ngModel'
    },
    link: function link(scope, element, attrs) {
      scope.id = scope.id || 'schedule';
      scope.options.type = scope.options.type || _Types.default.DAILY;
      scope.options = new _ScheduleOptions.default(scope.options);
      scope.weekdays = _Weekdays.default.all;

      // Updates the cron expression on each option change
      scope.verifyInput = function () {
        try {
          scope.errors = undefined;
          scope.options.errors = scope.errors;
          scope.options.to.error = undefined;
          scope.options.getCronExpression();
        } catch (e) {
          if (e.context === 'to') {
            scope.options.to.error = e.message;
            scope.errors = {
              to: e.message
            };
          } else if (e.context) {
            scope.errors = {};
            scope.errors[e.context] = e.message;
          } else {
            console.log('Unexpected error occurred', e);
          }
          scope.options.errors = scope.errors;
        }
      };

      // Ensure we validate and calculate the cron expression after any change
      scope.$watchGroup(['options.type', 'options.interval', 'options.dayOfMonth', 'options.dayOfWeek', 'options.weekOfMonth', 'options.dayOfMonthToggle', 'options.cronExpression'], scope.verifyInput);
      scope.$watchCollection('options.at', scope.verifyInput);
      scope.$watchCollection('options.from', scope.verifyInput);
      scope.$watchCollection('options.to', scope.verifyInput);
      scope.$watchCollection('options.daysOfWeek', scope.verifyInput);

      // Change the dayOfMonthToggle if any value was changed from the other "group"
      scope.$watch('options.dayOfMonth', function (newValue, oldValue) {
        if (newValue !== oldValue && scope.options.dayOfMonthToggle !== 'dayOfMonth') {
          scope.options.dayOfMonthToggle = 'dayOfMonth';
        }
      });
      scope.$watchGroup(['options.dayOfWeek', 'options.weekOfMonth'], function (newValue, oldValue) {
        if ((newValue[0] !== oldValue[0] || newValue[1] !== oldValue[1]) && scope.options.dayOfMonthToggle !== 'dayOfWeek') {
          scope.options.dayOfMonthToggle = 'dayOfWeek';
        }
      });
    }
  };
}).directive('onmsScheduleInterval', function () {
  return {
    restrict: 'E',
    templateUrl: intervalInputTemplate,
    scope: {
      value: '=ngModel'
    }
  };
}).directive('onmsTimeInput', [function () {
  return {
    restrict: 'E',
    templateUrl: timeInputTemplate,
    scope: {
      // The model which is used for rendering.
      // Must have hours, minutes and suffix property.
      // If suffix is not set, 24 hours format is assumed
      model: '=ngModel',
      // Defines if the time uses 24 hours format, or am/pm
      mode: '=?mode',
      // in case you don't want to show all minutes,
      // you can define the step size e.g. 5
      // to only show 0, 5, 10, etc.
      // Default is 5
      minutesStep: '=?minutesStep',
      // If you want to disable minute input
      disableMinutes: '=?disableMinutes'
    },
    link: function link(scope, element, attrs) {
      // Set default options, if not defined
      if (scope.model.options === undefined) {
        scope.options = {
          mode: _ClockMode.default.HALF_CLOCK_SYSTEM,
          disableMinutes: false,
          minutesStep: 5
        };
      } else {
        scope.options = scope.model.options;
      }
      if (typeof scope.disableMinutes === 'boolean') {
        scope.options.disableMinutes = scope.disableMinutes;
      }
      if (scope.mode === _ClockMode.default.FULL_CLOCK_SYSTEM || scope.mode === _ClockMode.default.HALF_CLOCK_SYSTEM) {
        scope.options.mode = scope.mode;
      }
      if (typeof scope.minutesStep === 'number') {
        scope.options.minutesStep = scope.minutesStep;
      }

      // Enforce either the defined rendered mode, or if not provided the mode of the model
      scope.options.mode = scope.options.mode || scope.model.mode;
      if (scope.options.mode !== _ClockMode.default.FULL_CLOCK_SYSTEM && scope.options.mode !== _ClockMode.default.HALF_CLOCK_SYSTEM) {
        scope.options.mode = _ClockMode.default.FULL_CLOCK_SYSTEM;
      }
      if (typeof scope.options.disableMinutes !== 'boolean') {
        scope.options.disableMinutes = false;
      }
      if (typeof scope.options.minutesStep !== 'number') {
        scope.options.minutesStep = 5;
      }

      // Verify model
      if (!(scope.model instanceof _Time.default)) {
        scope.model = new _Time.default(scope.model);
      }

      // Enforce correct time visualization
      scope.model.convert(scope.options.mode);
      var initMinutes = function initMinutes() {
        var _context, _context2;
        scope.minutes = [];
        for (var i = 0; i < 60; i += scope.options.minutesStep) {
          scope.minutes.push(i);
        }
        // Ensure the defined minutes are available
        if ((0, _indexOf.default)(_context = scope.minutes).call(_context, scope.model.minutes) === -1) {
          scope.minutes.push(scope.model.minutes);
        }
        (0, _sort.default)(_context2 = scope.minutes).call(_context2, function (left, right) {
          return (0, _parseInt2.default)(left, 10) - (0, _parseInt2.default)(right, 10);
        });
      };
      var initHours = function initHours() {
        scope.hours = [];
        var start = scope.model.mode === _ClockMode.default.HALF_CLOCK_SYSTEM ? 1 : 0;
        var end = scope.model.mode === _ClockMode.default.HALF_CLOCK_SYSTEM ? 12 : 23;
        for (var i = start; i <= end; i++) {
          scope.hours.push(i);
        }
      };

      // Input variables
      initMinutes();
      initHours();

      // When minutesStep changed, update minutes values
      scope.$watch('options.minutesStep', function (newValue) {
        initMinutes();
      });
      // When the mode changed, convert
      scope.$watch('options.mode', function (newValue, oldValue) {
        if (newValue !== oldValue) {
          // convert time
          scope.model.convert(scope.options.mode);

          // Reset hours as they are different for each mode
          initHours();
        }
      });
    }
  };
}]);

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ClockMode.js":
/*!**************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/ClockMode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var ClockMode = {
  HALF_CLOCK_SYSTEM: 'AM_PM',
  FULL_CLOCK_SYSTEM: '24_HOURS'
};
var _default = ClockMode;
exports.default = _default;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ContextError.js":
/*!*****************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/ContextError.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _Object$setPrototypeOf2 = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/set-prototype-of.js");
var _bindInstanceProperty2 = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js");
var _indexOfInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
var _Reflect$construct = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");
var _Map = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/map.js");
var _Object$create = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/create */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/create.js");
var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
var _Symbol$toPrimitive = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js");
var _Symbol = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js");
var _Symbol$iterator = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol/iterator */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/iterator.js");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _concat = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"));
var _setPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/set-prototype-of.js"));
var _bind = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-prototype-of.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_Symbol$toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = _Object$create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); _Object$defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof _Map === "function" ? new _Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = _Object$create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { var _context5; _construct = _bindInstanceProperty2(_context5 = _Reflect$construct).call(_context5); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = _bindInstanceProperty2(Function).apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { var _context4; return _indexOfInstanceProperty(_context4 = Function.toString.call(fn)).call(_context4, "[native code]") !== -1; }
function _setPrototypeOf(o, p) { var _context3; _setPrototypeOf = _Object$setPrototypeOf2 ? _bindInstanceProperty2(_context3 = _Object$setPrototypeOf2).call(_context3) : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { var _context2; _getPrototypeOf = _setPrototypeOf2.default ? (0, _bind.default)(_context2 = _getPrototypeOf2.default).call(_context2) : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }
var ContextError = /*#__PURE__*/function (_Error) {
  _inherits(ContextError, _Error);
  var _super = _createSuper(ContextError);
  function ContextError() {
    var _context;
    var _this;
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'entity';
    _classCallCheck(this, ContextError);
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    _this = _super.call.apply(_super, (0, _concat.default)(_context = [this]).call(_context, params));
    _this.context = context;
    return _this;
  }
  return _createClass(ContextError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.default = ContextError;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/CronDefintion.js":
/*!******************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/CronDefintion.js ***!
  \******************************************************************************/
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
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"));
var _trim = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"));
var _toPrimitive2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js"));
__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CronDefinition = /*#__PURE__*/function () {
  function CronDefinition(input) {
    _classCallCheck(this, CronDefinition);
    var options = typeof input !== 'undefined' ? input : {};
    this.seconds = typeof options.seconds !== 'undefined' ? options.seconds : {};
    this.minutes = typeof options.minutes !== 'undefined' ? options.minutes : {};
    this.hours = typeof options.hours !== 'undefined' ? options.hours : {};
    this.dayOfMonth = typeof options.dayOfMonth !== 'undefined' ? options.dayOfMonth : {};
    this.month = typeof options.month !== 'undefined' ? options.month : {};
    this.dayOfWeek = typeof options.dayOfWeek !== 'undefined' ? options.dayOfWeek : {};
  }
  _createClass(CronDefinition, [{
    key: "asCronExpression",
    value: function asCronExpression() {
      var array = [this.seconds, this.minutes, this.hours, this.dayOfMonth, this.month, this.dayOfWeek];
      return array.join(' ');
    }
  }, {
    key: "interval",
    get: function get() {
      if (this.isMinutesInterval()) {
        var _context;
        return this.minutes.substr((0, _indexOf.default)(_context = this.minutes).call(_context, '/') + 1);
      }
      if (this.isHoursInterval()) {
        var _context2;
        var hoursInterval = this.hours.substr((0, _indexOf.default)(_context2 = this.hours).call(_context2, '/') + 1);
        return String((0, _parseInt2.default)(hoursInterval, 10) * 60);
      }

      // If there is no range, it is not possible to determine
      // anymore if the user originally selected every hour, every 30, 15, 10 or 5 minutes
      // However if the hours are a range, we must set the interval to anything != 0
      if (this.isHoursRange() >= 1) {
        return '60'; // fallback to every hour
      }

      return '0';
    }
  }, {
    key: "isConcreteMinutes",
    value: function isConcreteMinutes() {
      return !this.isMinutesInterval() && !this.isMinutesRange() && !this.__contains(this.minutes, ',') && (0, _parseInt2.default)(this.minutes, 10) >= 0;
    }
  }, {
    key: "isMinutesInterval",
    value: function isMinutesInterval() {
      return this.__contains(this.minutes, '/');
    }
  }, {
    key: "isMinutesRange",
    value: function isMinutesRange() {
      return this.__contains(this.minutes, '-');
    }
  }, {
    key: "isConcreteHours",
    value: function isConcreteHours() {
      return !this.isHoursInterval() && !this.isHoursRange() && !this.__contains(this.hours, ',') && (0, _parseInt2.default)(this.hours, 10) >= 0;
    }
  }, {
    key: "isHoursRange",
    value: function isHoursRange() {
      return this.__contains(this.hours, '-');
    }
  }, {
    key: "isHoursInterval",
    value: function isHoursInterval() {
      return this.__contains(this.hours, '/');
    }
  }, {
    key: "__contains",
    value: function __contains(input, findMe) {
      if (typeof input === 'string') {
        return (0, _indexOf.default)(input).call(input, findMe) >= 1;
      }
      return false;
    }
  }], [{
    key: "createFrom",
    value: function createFrom(input) {
      if (typeof input !== 'string' || input === '' || (0, _trim.default)(input).call(input) === '') {
        throw new Error('Cannot parse provided expression. Please make sure it is a valid cron expression');
      }
      var cronExpression = (0, _trim.default)(input).call(input);
      var fields = cronExpression.split(' ');
      if (fields.length < 6 || fields.length > 7) {
        throw new Error('Invalid Cron Expression. Expected field count is 6 or 7, but got ' + fields.length);
      }
      // Parse it
      var cron = new CronDefinition({
        seconds: fields[0],
        minutes: fields[1],
        hours: fields[2],
        dayOfMonth: fields[3],
        month: fields[4],
        dayOfWeek: fields[5]
      });
      if (fields.length === 7) {
        cron.year = fields[6];
      }
      return cron;
    }
  }]);
  return CronDefinition;
}();
exports.default = CronDefinition;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Intervals.js":
/*!**************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/Intervals.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var EVERY_3_HOURS = '180';
var EVERY_2_HOURS = '120';
var EVERY_HOUR = '60';
var EVERY_30_MINUTES = '30';
var EVERY_15_MINUTES = '15';
var EVERY_10_MINUTES = '10';
var EVERY_5_MINUTES = '5';
var Minutes = [EVERY_30_MINUTES, EVERY_15_MINUTES, EVERY_10_MINUTES, EVERY_5_MINUTES];
var Hours = [EVERY_3_HOURS, EVERY_2_HOURS, EVERY_HOUR];
var all = [EVERY_3_HOURS, EVERY_2_HOURS, EVERY_HOUR, EVERY_30_MINUTES, EVERY_15_MINUTES, EVERY_10_MINUTES, EVERY_5_MINUTES];
var _default = {
  all: all,
  EVERY_3_HOURS: EVERY_3_HOURS,
  EVERY_2_HOURS: EVERY_2_HOURS,
  EVERY_HOUR: EVERY_HOUR,
  EVERY_30_MINUTES: EVERY_30_MINUTES,
  EVERY_15_MINUTES: EVERY_15_MINUTES,
  EVERY_10_MINUTES: EVERY_10_MINUTES,
  EVERY_5_MINUTES: EVERY_5_MINUTES,
  Hours: Hours,
  Minutes: Minutes
};
exports.default = _default;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Range.js":
/*!**********************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/Range.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _Symbol$toPrimitive = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js");
var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
var _Symbol = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js");
var _Symbol$iterator = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol/iterator */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/iterator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_Symbol$toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Range = /*#__PURE__*/_createClass(function Range(cronHours) {
  _classCallCheck(this, Range);
  var intervalIndex = (0, _indexOf.default)(cronHours).call(cronHours, '/');
  var rangeIndex = (0, _indexOf.default)(cronHours).call(cronHours, '-');
  var range = cronHours.substr(0, intervalIndex === -1 ? cronHours.length : intervalIndex); // remove interval
  this.start = range.substr(0, rangeIndex === -1 ? range.length : rangeIndex);
  this.end = rangeIndex === -1 ? this.start : range.substr(rangeIndex + 1);
});
exports.default = Range;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ScheduleOptions.js":
/*!********************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/ScheduleOptions.js ***!
  \********************************************************************************/
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
__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _map = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"));
var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
var _keys = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"));
var _trim = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js"));
var _toPrimitive2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js"));
var _ClockMode = _interopRequireDefault(__webpack_require__(/*! ./ClockMode */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ClockMode.js"));
var _Weekdays = _interopRequireDefault(__webpack_require__(/*! ./Weekdays */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Weekdays.js"));
var _Types = _interopRequireDefault(__webpack_require__(/*! ./Types */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Types.js"));
var _Time = _interopRequireDefault(__webpack_require__(/*! ./Time */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Time.js"));
var _CronDefintion = _interopRequireDefault(__webpack_require__(/*! ./CronDefintion */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/CronDefintion.js"));
var _WeekdayOptions = _interopRequireDefault(__webpack_require__(/*! ./WeekdayOptions */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/WeekdayOptions.js"));
var _CustomParser = _interopRequireDefault(__webpack_require__(/*! ./parsers/CustomParser */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/parsers/CustomParser.js"));
var _DailyParser = _interopRequireDefault(__webpack_require__(/*! ./parsers/DailyParser */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/parsers/DailyParser.js"));
var _DayOfMonthParser = _interopRequireDefault(__webpack_require__(/*! ./parsers/DayOfMonthParser */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/parsers/DayOfMonthParser.js"));
var _ContextError = _interopRequireDefault(__webpack_require__(/*! ./ContextError */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ContextError.js"));
var _Intervals = _interopRequireDefault(__webpack_require__(/*! ./Intervals */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Intervals.js"));
var _parser = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/cron-parser/lib/parser */ "./node_modules/cron-parser/lib/parser.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var moment = __webpack_require__(/*! ../../../vendor/moment-js */ "./src/main/assets/js/vendor/moment-js.js");
var ScheduleOptions = /*#__PURE__*/function () {
  /* eslint-disable complexity */
  function ScheduleOptions(input) {
    _classCallCheck(this, ScheduleOptions);
    var options = typeof input === 'undefined' ? {} : input;

    // Pre populate Values
    this.clockMode = options.clockMode || _ClockMode.default.FULL_CLOCK_SYSTEM;
    if (this.clockMode !== _ClockMode.default.HALF_CLOCK_SYSTEM && this.clockMode !== _ClockMode.default.FULL_CLOCK_SYSTEM) {
      throw new Error('Provided clock mode not supported');
    }

    // Daily
    this.type = options.type || _Types.default.DAILY;
    this.interval = typeof options.interval !== 'undefined' ? options.interval : 0;
    this.at = options.at || new _Time.default({
      hours: 0,
      minutes: 0
    });
    this.from = options.from || new _Time.default({
      hours: 0,
      minutes: 0
    });
    this.to = options.to || new _Time.default({
      hours: 23,
      minutes: 0
    });

    // Days per Week
    this.daysOfWeek = options.daysOfWeek || {};

    // Days per Month
    this.dayOfMonth = options.dayOfMonth || '1'; // 1st day
    this.weekOfMonth = options.dayOfMonth || '1';
    this.dayOfWeek = options.dayOfWeek || String(_Weekdays.default.Sunday.id);
    this.dayOfMonthToggle = options.dayOfMonthToggle || 'dayOfMonth';

    // Custom
    this.cronExpression = options.cronExpression || '0 0/5 * * * ?';

    // Report Time Zone to use (if any)
    this.timezone = options.timezone || undefined;

    // Enable debugging?
    this.showDebugOptions = options.showDebugOptions || false;

    // Ensure each time is actually a Time object
    if (!(this.at instanceof _Time.default)) {
      this.at = new _Time.default(this.at);
    }
    if (!(this.from instanceof _Time.default)) {
      this.from = new _Time.default(this.from);
    }
    if (!(this.to instanceof _Time.default)) {
      this.to = new _Time.default(this.to);
    }

    // Enforce the right clock mode
    this.at.convert(this.clockMode);
    this.from.convert(this.clockMode);
    this.to.convert(this.clockMode);

    // Enforce disabling Minutes
    this.from.options.disableMinutes = true;
    this.to.options.disableMinutes = true;

    // Enforce correct type
    if (!(this.daysOfWeek instanceof _WeekdayOptions.default)) {
      this.daysOfWeek = new _WeekdayOptions.default(this.daysOfWeek);
    }
    this.interval = String(this.interval);
  }
  _createClass(ScheduleOptions, [{
    key: "getSelectedWeekdays",
    value: function getSelectedWeekdays() {
      var _context, _context2;
      var selectedWeekdays = (0, _map.default)(_context = (0, _filter.default)(_context2 = (0, _keys.default)(this.daysOfWeek)).call(_context2, function (key) {
        return this.daysOfWeek[key] === true;
      }, this)).call(_context, function (key) {
        return key.substr(0, 3).toUpperCase();
      });
      return selectedWeekdays;
    }
  }, {
    key: "getCronExpression",
    value: function getCronExpression() {
      // Validate before actually returning the expression
      this.validate();

      // In case of a custom expression, just use it directly
      if (this.type === _Types.default.CUSTOM) {
        return this.cronExpression;
      }

      // Otherwise, re Populate a cron definition
      var cron = new _CronDefintion.default({
        seconds: 0,
        minutes: 0,
        hours: 0,
        dayOfMonth: '*',
        month: '*',
        dayOfWeek: '?'
      });

      // Daily Calculation
      if (this.type === _Types.default.DAILY || this.type === _Types.default.DAYS_PER_WEEK) {
        var interval = this.interval;
        var at = new _Time.default(this.at, _ClockMode.default.FULL_CLOCK_SYSTEM);
        var from = new _Time.default(this.from, _ClockMode.default.FULL_CLOCK_SYSTEM);
        var to = new _Time.default(this.to, _ClockMode.default.FULL_CLOCK_SYSTEM);
        if (interval === '0') {
          // Only once per day
          cron.hours = at.hours;
          cron.minutes = at.minutes;
        } else if (interval === _Intervals.default.EVERY_HOUR) {
          // Every hours
          var hours = from.hours === to.hours ? from.hours : from.hours + '-' + to.hours;
          cron.hours = hours;
          cron.minutes = 0;
        } else if (interval % 60 === 0) {
          // every 2 or 3 hours
          var _hours = from.hours + '-' + to.hours;
          cron.hours = _hours + '/' + interval / 60;
          cron.minutes = 0;
        } else {
          // every n minutes
          if (from.hours === to.hours) {
            cron.hours = from.hours;
            cron.minutes = 0;
          } else {
            // In case we defined an hours range, we decrease the end range by 1
            // This is necessary, because the cron expression "0 0/30 1-2 * * ?"
            // would fire at 1:00, 1:30, 2:00 and 2:30 every day.
            // By decreasing the hour by 1, it will fire at 1:00 and 1:30 instead.
            cron.hours = from.hours + '-' + (to.hours - 1);
            cron.minutes = '0/' + interval;
          }
        }
      }

      // Update dayOfWeek if we are in day of week mode
      if (this.type === _Types.default.DAYS_PER_WEEK) {
        cron.dayOfWeek = this.getSelectedWeekdays().join(',');
      }
      if (this.type === _Types.default.DAYS_PER_MONTH) {
        var _at = new _Time.default(this.at, _ClockMode.default.FULL_CLOCK_SYSTEM);
        cron.minutes = _at.minutes;
        cron.hours = _at.hours;
        if (this.dayOfMonthToggle === 'dayOfMonth') {
          cron.dayOfMonth = this.dayOfMonth;
        } else {
          cron.dayOfWeek = this.dayOfWeek + (this.weekOfMonth !== 'L' ? '#' : '') + this.weekOfMonth;
        }
      }

      // Due to a quartz limitation either cron.dayOfMonth or cron.dayOfWeek must be '?'
      // Source: http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html (Bottom of the page)
      //
      // As dayOfWeek is '?' by default if not defined, we set dayOfMonth to ? if dayOfWeek is set
      if (this.type === _Types.default.DAYS_PER_WEEK || this.type === _Types.default.DAYS_PER_MONTH && cron.dayOfWeek !== '?') {
        cron.dayOfMonth = '?';
      }
      return cron.asCronExpression();
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.type === _Types.default.CUSTOM) {
        var _context3;
        var items = (0, _trim.default)(_context3 = this.cronExpression).call(_context3).split(' ');
        if (items.length < 6 || items.length > 7) {
          throw new _ContextError.default('cronExpression', 'Invalid cron expression');
        }
      }

      // Ensure that we actually have set a day
      if (this.type === _Types.default.DAYS_PER_WEEK) {
        if (this.type === _Types.default.DAYS_PER_WEEK && this.getSelectedWeekdays().length === 0) {
          throw new _ContextError.default('dayOfWeek', 'Please select at least one day');
        }
      }

      // If there is an interval, ensure from is before to, otherwise bail
      if ((this.type === _Types.default.DAILY || this.type === _Types.default.DAYS_PER_WEEK) && this.interval !== '0') {
        if (this.to.isBefore(this.from)) {
          throw new _ContextError.default('to', 'To time must be equal or after from time');
        }
      }
    }
  }, {
    key: "getServerZone",
    value: function getServerZone() {
      return this.serverZone || window._onmsZoneId;
    }
  }, {
    key: "getBrowserZone",
    value: function getBrowserZone() {
      return moment.tz.guess();
    }
  }, {
    key: "getNextExecution",
    value: function getNextExecution(displayZone) {
      var interval = _parser.default.parseExpression(this.getCronExpression(), {
        tz: this.timezone
      });
      var d = interval.next().toDate();
      return moment.tz(d, displayZone || this.timezone || moment.tz.guess());
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return typeof this.errors === 'undefined' || (0, _keys.default)(this.errors).length === 0;
    }
  }], [{
    key: "createFrom",
    value: function createFrom(input) {
      var parsers = [new _DailyParser.default(), new _DayOfMonthParser.default(), new _CustomParser.default() // If nothing else was able to parse it, we make it a custom expression
      ];

      for (var i = 0; i < parsers.length; i++) {
        if (parsers[i].canParse(input) === true) {
          var options = parsers[i].parse(input);
          return options;
        }
      }
      // This is technically unreachable code
      // but to make eslint happy, we have to put this in
      return new _CustomParser.default().parse(input);
    }
  }]);
  return ScheduleOptions;
}();
exports.default = ScheduleOptions;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Time.js":
/*!*********************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/Time.js ***!
  \*********************************************************************/
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
__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"));
var _slice = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"));
var _toPrimitive2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js"));
var _ClockMode = _interopRequireDefault(__webpack_require__(/*! ./ClockMode */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ClockMode.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Time = /*#__PURE__*/function () {
  function Time(input, clockMode) {
    _classCallCheck(this, Time);
    var newInput = input || {};
    this.hours = typeof newInput.hours === 'undefined' ? 12 : (0, _parseInt2.default)(newInput.hours, 10);
    this.minutes = typeof newInput.minutes === 'undefined' ? 0 : (0, _parseInt2.default)(newInput.minutes, 10);
    this.suffix = newInput.suffix || null;
    this.mode = this.suffix === null ? _ClockMode.default.FULL_CLOCK_SYSTEM : _ClockMode.default.HALF_CLOCK_SYSTEM;

    // Reset suffix if 24 clock mode
    if (this.mode === _ClockMode.default.FULL_CLOCK_SYSTEM) {
      this.suffix = null;
    }

    // Additional options for rendering
    this.options = newInput.options || {};
    this.verify();

    // If a clockMode is defined, automatically convert it
    if (clockMode === _ClockMode.default.FULL_CLOCK_SYSTEM || clockMode === _ClockMode.default.HALF_CLOCK_SYSTEM) {
      this.convert(clockMode);
    }
  }
  _createClass(Time, [{
    key: "verify",
    value: function verify() {
      if (this.mode === _ClockMode.default.HALF_CLOCK_SYSTEM) {
        if (this.suffix !== 'am' && this.suffix !== 'pm') {
          throw new Error('Clock suffix, must be either \'am\' or \'pm\', but was \'' + this.suffix + '\'');
        }
        if (this.hours <= 0 || this.hours > 12) {
          throw new Error('Hours must be between [1-12] but was ' + this.hours);
        }
      }
      if (this.mode === _ClockMode.default.FULL_CLOCK_SYSTEM) {
        if (this.hours < 0 || this.hours > 23) {
          throw new Error('Hours must be between [0-23] but was ' + this.hours);
        }
      }
      if (this.minutes < 0 || this.minutes > 59) {
        throw new Error('Minutes must be between [0-59] but was ' + this.minutes);
      }
    }
  }, {
    key: "getMinutesOfDay",
    value: function getMinutesOfDay() {
      var thisTime = new Time(this, _ClockMode.default.FULL_CLOCK_SYSTEM);
      return thisTime.hours * 60 + thisTime.minutes;
    }
  }, {
    key: "isBefore",
    value: function isBefore(other) {
      if (!(other instanceof Time)) {
        throw new Error('Other object must be of type Time, but was of type ' + _typeof(other));
      }
      var minutesOfDay = this.getMinutesOfDay();
      var otherMinutesOfDay = other.getMinutesOfDay();
      var before = minutesOfDay - otherMinutesOfDay < 0;
      return before;
    }
  }, {
    key: "convert",
    value: function convert(newMode) {
      if (newMode !== _ClockMode.default.FULL_CLOCK_SYSTEM && newMode !== _ClockMode.default.HALF_CLOCK_SYSTEM) {
        throw new Error('Unknown Clock Mode \'' + newMode + '\'');
      }

      // If conversion is required
      if (this.mode !== newMode) {
        // AM/PM Clock -> 24 Hours Clock
        if (newMode === _ClockMode.default.FULL_CLOCK_SYSTEM) {
          // 12:00 am is 00:00
          if (this.hours === 12 && this.suffix === 'am') {
            this.hours = 0;
          }
          // anything pm requires a 12 hours offset
          if (this.suffix === 'pm' && this.hours >= 1 && this.hours < 12) {
            this.hours += 12;
          }
          this.suffix = null;
        }

        // 24 Hours Clock -> AM/PM Clock
        if (newMode === _ClockMode.default.HALF_CLOCK_SYSTEM) {
          // 00:00 is 12:00 am
          if (this.hours === 0) {
            this.hours = 12;
            this.suffix = 'am';
          }
          // anything between 1:00 and 11:00 am (we consider hours only here) are 'am'
          else if (this.hours >= 1 && this.hours <= 11) {
            this.suffix = 'am';
          }
          // 12:00 is 12:00 pm
          else if (this.hours === 12) {
            this.suffix = 'pm';
          }
          // anything > 12, requires a -12 and is pm
          else if (this.hours > 12) {
            this.hours -= 12;
            this.suffix = 'pm';
          }
        }
        this.mode = newMode;
      }
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      var _context, _context2;
      return (0, _slice.default)(_context = '00' + this.hours).call(_context, -2) + ':' + (0, _slice.default)(_context2 = '00' + this.minutes).call(_context2, -2) + (this.mode === _ClockMode.default.HALF_CLOCK_SYSTEM ? ' ' + this.suffix : '');
    }
  }]);
  return Time;
}();
exports.default = Time;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Types.js":
/*!**********************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/Types.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Types = {
  DAILY: 'daily',
  DAYS_PER_WEEK: 'daysPerWeek',
  DAYS_PER_MONTH: 'daysPerMonth',
  CUSTOM: 'custom'
};
var _default = Types;
exports.default = _default;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/WeekdayOptions.js":
/*!*******************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/WeekdayOptions.js ***!
  \*******************************************************************************/
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
__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _isArray = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array */ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _values = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/object/values */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/values.js"));
var _toPrimitive2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js"));
var _Weekdays = _interopRequireDefault(__webpack_require__(/*! ./Weekdays */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Weekdays.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var WeekdayOptions = /*#__PURE__*/function () {
  function WeekdayOptions(input) {
    var _context,
      _this = this;
    _classCallCheck(this, WeekdayOptions);
    var options = {};

    // in case of an array, convert it to an object
    if ((0, _isArray.default)(input)) {
      var newOptions = {};
      (0, _forEach.default)(input).call(input, function (item) {
        if (item instanceof _Weekdays.default.Weekdays) {
          newOptions[item.label] = true;
        } else {
          newOptions[item] = true;
        }
      });
      options = newOptions;
    } else if (typeof input !== 'undefined') {
      options = input;
    }

    // Initialize
    (0, _forEach.default)(_context = (0, _values.default)(_Weekdays.default.all)).call(_context, function (weekday) {
      if (options.hasOwnProperty(weekday.label) === false) {
        _this[weekday.label] = false;
      } else {
        _this[weekday.label] = options[weekday.label] && true; // enforce boolean
      }
    }, this);
  }
  _createClass(WeekdayOptions, [{
    key: "getSelectedWeekdays",
    value: function getSelectedWeekdays() {
      var _context2,
        _this2 = this;
      var selectedWeekdays = [];
      (0, _forEach.default)(_context2 = (0, _values.default)(_Weekdays.default.all)).call(_context2, function (weekday) {
        if (_this2[weekday.label] === true) {
          selectedWeekdays.push(weekday);
        }
      });
      return selectedWeekdays;
    }
  }], [{
    key: "createFrom",
    value: function createFrom(daysOfWeekExpression) {
      var days = daysOfWeekExpression.split(',');
      var weekdays = (0, _values.default)(_Weekdays.default.all);
      var selectedWeekdays = [];
      (0, _forEach.default)(days).call(days, function (eachDay) {
        for (var i = 0; i < weekdays.length; i++) {
          if (eachDay === weekdays[i].shortcut) {
            selectedWeekdays.push(weekdays[i]);
          }
        }
      });
      var options = new WeekdayOptions(selectedWeekdays);
      return options;
    }
  }]);
  return WeekdayOptions;
}();
exports.default = WeekdayOptions;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Weekdays.js":
/*!*************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/Weekdays.js ***!
  \*************************************************************************/
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
__webpack_require__(/*! ../../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _toPrimitive2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Weekdays = /*#__PURE__*/function () {
  function Weekdays(id, label) {
    _classCallCheck(this, Weekdays);
    this.id = id;
    this.label = label;
  }
  _createClass(Weekdays, [{
    key: "shortcut",
    get: function get() {
      return this.label.substr(0, 3).toUpperCase();
    }
  }]);
  return Weekdays;
}();
var Sunday = new Weekdays(1, 'Sunday');
var Monday = new Weekdays(2, 'Monday');
var Tuesday = new Weekdays(3, 'Tuesday');
var Wednesday = new Weekdays(4, 'Wednesday');
var Thursday = new Weekdays(5, 'Thursday');
var Friday = new Weekdays(6, 'Friday');
var Saturday = new Weekdays(7, 'Saturday');
var all = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];
var _default = {
  all: all,
  Weekdays: Weekdays,
  Sunday: Sunday,
  Monday: Monday,
  Tuesday: Tuesday,
  Wednesday: Wednesday,
  Thursday: Thursday,
  Friday: Friday,
  Saturday: Saturday
};
exports.default = _default;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/parsers/CustomParser.js":
/*!*************************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/parsers/CustomParser.js ***!
  \*************************************************************************************/
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
__webpack_require__(/*! ../../../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _toPrimitive2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js"));
var _Types = _interopRequireDefault(__webpack_require__(/*! ../Types */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Types.js"));
var _ScheduleOptions = _interopRequireDefault(__webpack_require__(/*! ../ScheduleOptions */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ScheduleOptions.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * If all fails, the custom parser will handle any cron expression as a Custom ScheduleOptions.
 */
var CustomParser = /*#__PURE__*/function () {
  function CustomParser() {
    _classCallCheck(this, CustomParser);
  }
  _createClass(CustomParser, [{
    key: "canParse",
    value: function canParse(input) {
      return true;
    }
  }, {
    key: "parse",
    value: function parse(input) {
      return new _ScheduleOptions.default({
        type: _Types.default.CUSTOM,
        cronExpression: input
      });
    }
  }]);
  return CustomParser;
}();
exports.default = CustomParser;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/parsers/DailyParser.js":
/*!************************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/parsers/DailyParser.js ***!
  \************************************************************************************/
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
__webpack_require__(/*! ../../../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"));
var _toPrimitive2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js"));
var _Types = _interopRequireDefault(__webpack_require__(/*! ../Types */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Types.js"));
var _Time = _interopRequireDefault(__webpack_require__(/*! ../Time */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Time.js"));
var _Range = _interopRequireDefault(__webpack_require__(/*! ../Range */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Range.js"));
var _CronDefintion = _interopRequireDefault(__webpack_require__(/*! ../CronDefintion */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/CronDefintion.js"));
var _WeekdayOptions = _interopRequireDefault(__webpack_require__(/*! ../WeekdayOptions */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/WeekdayOptions.js"));
var _ScheduleOptions = _interopRequireDefault(__webpack_require__(/*! ../ScheduleOptions */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ScheduleOptions.js"));
var _Intervals = _interopRequireDefault(__webpack_require__(/*! ../Intervals */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Intervals.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The daily parser will parse any cron expression,
 * which was generated by the Schedule Editor in "Daily" or "Days per Week" Mode.
 */
var DailyParser = /*#__PURE__*/function () {
  function DailyParser() {
    _classCallCheck(this, DailyParser);
  }
  _createClass(DailyParser, [{
    key: "canParse",
    value: function canParse(input) {
      var _context;
      var cron = _CronDefintion.default.createFrom(input);
      var weekdayOptions = _WeekdayOptions.default.createFrom(cron.dayOfWeek);
      var canParse = cron.year === undefined && cron.seconds === '0' && (cron.isConcreteMinutes() || cron.isMinutesInterval() && (0, _indexOf.default)(_context = cron.minutes).call(_context, '0') === 0) && (cron.isConcreteHours() || cron.isHoursInterval() || cron.isHoursRange()) && cron.month === '*' && (cron.dayOfMonth === '*' && cron.dayOfWeek === '?' || cron.dayOfMonth === '?' && weekdayOptions.getSelectedWeekdays().length > 0);
      if (canParse) {
        if (cron.isMinutesInterval()) {
          var minuteIntervals = _Intervals.default.Minutes;
          return (0, _indexOf.default)(minuteIntervals).call(minuteIntervals, cron.interval) >= 0;
        }
        if (cron.isHoursInterval()) {
          var hourIntervals = _Intervals.default.Hours;
          return (0, _indexOf.default)(hourIntervals).call(hourIntervals, cron.interval) >= 0;
        }
        return true;
      }
      return false;
    }
  }, {
    key: "parse",
    value: function parse(input) {
      var cron = _CronDefintion.default.createFrom(input);
      var options = new _ScheduleOptions.default({
        type: _Types.default.DAILY
      });
      options.interval = cron.interval;

      // Parse at, from and to
      if (options.interval === '0') {
        options.at = new _Time.default({
          hours: cron.hours,
          minutes: cron.minutes
        });
      } else {
        var range = new _Range.default(cron.hours);

        // add one hour offset in case of minutes interval and hours are range
        if (options.interval % 60 !== 0 && cron.isHoursRange()) {
          // When generating the cron, the to hour was decreased by one,
          // we now revert it by increasing it by 1
          range.end = (0, _parseInt2.default)(range.end, 10) + 1;
        }
        options.from = new _Time.default({
          hours: range.start,
          minutes: 0
        });
        options.to = new _Time.default({
          hours: range.end,
          minutes: 0
        });
      }

      // If days of week are set, switch type and apply daysOfWeek accordingly
      var weekdayOptions = _WeekdayOptions.default.createFrom(cron.dayOfWeek);
      if (weekdayOptions.getSelectedWeekdays().length > 0) {
        options.type = _Types.default.DAYS_PER_WEEK;
        options.daysOfWeek = weekdayOptions;
      }
      return options;
    }
  }]);
  return DailyParser;
}();
exports.default = DailyParser;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/scripts/parsers/DayOfMonthParser.js":
/*!*****************************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/scripts/parsers/DayOfMonthParser.js ***!
  \*****************************************************************************************/
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
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"));
var _toPrimitive2 = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol/to-primitive.js"));
__webpack_require__(/*! ../../../../../../../../node_modules/core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! ../../../../../../../../node_modules/core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! ../../../../../../../../node_modules/core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! ../../../../../../../../node_modules/core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _Types = _interopRequireDefault(__webpack_require__(/*! ../Types */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Types.js"));
var _Time = _interopRequireDefault(__webpack_require__(/*! ../Time */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/Time.js"));
var _CronDefintion = _interopRequireDefault(__webpack_require__(/*! ../CronDefintion */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/CronDefintion.js"));
var _ScheduleOptions = _interopRequireDefault(__webpack_require__(/*! ../ScheduleOptions */ "./src/main/assets/js/lib/onms-schedule-editor/scripts/ScheduleOptions.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); _Object$defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[_toPrimitive2.default]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DayOfMonthParser will parse any cron expression,
 * which was generated by the Schedule Editor in "Days of Month" mode.
 */
var DayOfMonthParser = /*#__PURE__*/function () {
  function DayOfMonthParser() {
    _classCallCheck(this, DayOfMonthParser);
    this.regExp = new RegExp('[1-7]#[1,2,3]|L');
  }
  _createClass(DayOfMonthParser, [{
    key: "canParse",
    value: function canParse(input) {
      var _context, _context2, _context3;
      var cron = _CronDefintion.default.createFrom(input);
      var canParse = cron.year === undefined && cron.seconds === '0' && cron.isConcreteMinutes() && cron.isConcreteHours() && cron.month === '*' && (0, _indexOf.default)(_context = cron.dayOfMonth).call(_context, ',') === -1 && (0, _indexOf.default)(_context2 = cron.dayOfMonth).call(_context2, '-') === -1 && (0, _indexOf.default)(_context3 = cron.dayOfMonth).call(_context3, '/') === -1
      // If dayOfMonth is set, dayOfWeek must be ?
      // Or dayOfMonth is ?, then dayOfWeek must be set, only then it is parsable
      && ((0, _parseInt2.default)(cron.dayOfMonth, 10) >= 1 && (0, _parseInt2.default)(cron.dayOfMonth, 10) <= 31 || cron.dayOfMonth === 'L' && cron.dayOfWeek === '?' || cron.dayOfMonth === '?' && this.regExp.test(cron.dayOfWeek));
      return canParse;
    }
  }, {
    key: "parse",
    value: function parse(input) {
      var cron = _CronDefintion.default.createFrom(input);
      var options = new _ScheduleOptions.default({
        type: _Types.default.DAYS_PER_MONTH,
        at: new _Time.default({
          hours: cron.hours,
          minutes: cron.minutes
        })
      });

      // Determine the toggle
      if (cron.dayOfMonth === '?') {
        options.dayOfMonthToggle = 'dayOfWeek';
      } else {
        options.dayOfMonthToggle = 'dayOfMonth';
      }

      // Set the values according of the toggle
      if (options.dayOfMonthToggle === 'dayOfMonth') {
        options.dayOfMonth = cron.dayOfMonth;
      } else {
        options.weekOfMonth = cron.dayOfWeek.substr(-1);
        options.dayOfWeek = cron.dayOfWeek.substr(0, 1);
      }
      return options;
    }
  }]);
  return DayOfMonthParser;
}();
exports.default = DayOfMonthParser;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/templates/interval-input.tpl.html":
/*!***************************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/templates/interval-input.tpl.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<select class=\"form-control custom-select\" ng-model=\"value\">\n    <option value=\"0\" selected=\"selected\">once per day</option>\n    <option value=\"180\">every 3 hours</option>\n    <option value=\"120\">every 2 hours</option>\n    <option value=\"60\">every hour</option>\n    <option value=\"30\">every 30 minutes</option>\n    <option value=\"15\">every 15 minutes</option>\n    <option value=\"10\">every 10 minutes</option>\n    <option value=\"5\">every 5 minutes</option>\n</select>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/lib/onms-schedule-editor/templates/interval-input.tpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/templates/schedule-editor.tpl.html":
/*!****************************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/templates/schedule-editor.tpl.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n<style type=\"text/css\">\n    onms-time-input {\n        display: inline-block;\n    }\n    .iso-datetime {\n        font-family: monospace;\n    }\n    .zone {\n        display: inline;\n        margin: unset;\n        padding: 0.5rem;\n        vertical-align: middle;\n    }\n    .next-scheduled-time {\n        padding-top: 1rem;\n        padding-bottom: 1rem;\n    }\n    td {\n        padding-right: 0.4rem;\n    }\n</style>\n<form class=\"form\" novalidate>\n    <div class=\"\">\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"{{id}}TypeSelect\" id=\"{{id}}TypeDaily\" ng-model=\"options.type\" value=\"daily\">\n            <label class=\"form-check-label\" for=\"{{id}}TypeDaily\">\n                Daily\n            </label>\n        </div>\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"{{id}}TypeSelect\" id=\"{{id}}TypeDaysPerWeek\" ng-model=\"options.type\" value=\"daysPerWeek\">\n            <label class=\"form-check-label\" for=\"{{id}}TypeDaysPerWeek\">\n                Days per week\n            </label>\n        </div>\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"{{id}}TypeSelect\" id=\"{{id}}TypeDaysPerMonth\" ng-model=\"options.type\" value=\"daysPerMonth\">\n            <label class=\"form-check-label\" for=\"{{id}}TypeDaysPerMonth\">\n                Days per month\n            </label>\n        </div>\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"{{id}}TypeSelect\" id=\"{{id}}TypeCustom\" ng-model=\"options.type\" value=\"custom\">\n            <label class=\"form-check-label\" for=\"{{id}}TypeCustom\">\n                Cron Expression\n            </label>\n        </div>\n    </div>\n\n    <hr>\n\n    <!-- Days per Week -->\n    <div class=\"\" ng-if=\"options.type === 'daysPerWeek'\">\n        <label>Weekdays</label>\n        <div class=\"form-check ml-1\" ng-repeat=\"weekday in weekdays\">\n            <input class=\"form-check-input\" ng-class=\"{'is-invalid': errors.dayOfWeek}\" type=\"checkbox\" name=\"{{id}}{{weekday.id}}\" id=\"{{id}}{{weekday.id}}\" ng-model=\"options.daysOfWeek[weekday.label]\" value=\"custom\">\n            <label class=\"form-check-label\" for=\"{{id}}{{weekday.id}}\">\n                {{weekday.label}}\n            </label>\n        </div>\n        <p class=\"text-danger small mb-0\" ng-if=\"errors.dayOfWeek\">{{errors.dayOfWeek}}</p>\n    </div>\n\n    <!-- Daily Options -->\n    <div class=\"mt-2\" ng-if=\"options.type === 'daily' || options.type === 'daysPerWeek'\">\n        <div class=\"form-group\">\n            <label>Interval</label>\n            <onms-schedule-interval ng-model=\"options.interval\"></onms-schedule-interval>\n        </div>\n        <!-- Once per Day -->\n        <div class=\"form-group\" ng-if=\"options.interval === '0'\">\n            <label>At</label>\n            <onms-time-input\n                    ng-model=\"options.at\"\n                    options=\"options.at\"\n            ></onms-time-input>\n            <span class=\"zone\">{{options.timezone}}</span>\n        </div>\n\n        <!-- Other options -->\n        <div class=\"form-group\" ng-if=\"options.interval !== '0'\">\n            <label>From</label>\n            <onms-time-input\n                    ng-model=\"options.from\"\n                    options=\"options.from\"\n            ></onms-time-input>\n        </div>\n        <div class=\"form-group\" ng-if=\"options.interval !== '0'\">\n            <label>To</label>\n            <onms-time-input\n                    ng-model=\"options.to\"\n                    options=\"options.to\"\n            ></onms-time-input>\n        </div>\n    </div>\n\n    <!-- Days per Month -->\n    <div class=\"\" ng-if=\"options.type === 'daysPerMonth'\">\n        <!-- Other options -->\n        <div class=\"form-group\">\n            <label>At</label>\n            <onms-time-input\n                    ng-model=\"options.at\"\n                    options=\"options.at\"\n            ></onms-time-input>\n            <span class=\"zone\">{{options.timezone}}</span>\n        </div>\n\n        <div class=\"\">\n            <label>On</label>\n\n            <div class=\"form-inline my-1 ml-1\">\n                <input class=\"\" type=\"radio\" ng-model=\"options.dayOfMonthToggle\" value=\"dayOfMonth\">\n                <span class=\"mx-1\">the</span>\n                <select class=\"form-control custom-select\" ng-model=\"options.dayOfMonth\">\n                    <option value=\"1\">1st</option>\n                    <option value=\"2\">2nd</option>\n                    <option value=\"3\">3rd</option>\n                    <option value=\"4\">4th</option>\n                    <option value=\"5\">5th</option>\n                    <option value=\"6\">6th</option>\n                    <option value=\"7\">7th</option>\n                    <option value=\"8\">8th</option>\n                    <option value=\"9\">9th</option>\n                    <option value=\"10\">10th</option>\n                    <option value=\"11\">11th</option>\n                    <option value=\"12\">12th</option>\n                    <option value=\"13\">13th</option>\n                    <option value=\"14\">14th</option>\n                    <option value=\"15\">15th</option>\n                    <option value=\"16\">16th</option>\n                    <option value=\"17\">17th</option>\n                    <option value=\"18\">18th</option>\n                    <option value=\"19\">19th</option>\n                    <option value=\"20\">20th</option>\n                    <option value=\"21\">21st</option>\n                    <option value=\"22\">22nd</option>\n                    <option value=\"23\">23rd</option>\n                    <option value=\"24\">24th</option>\n                    <option value=\"25\">25th</option>\n                    <option value=\"26\">26th</option>\n                    <option value=\"27\">27th</option>\n                    <option value=\"28\">28th</option>\n                    <option value=\"29\">29th</option>\n                    <option value=\"30\">30th</option>\n                    <option value=\"31\">31st</option>\n                    <option value=\"L\">Last</option>\n                </select>\n\n                <span class=\"ml-1\">day of every month</span>\n            </div>\n\n            <!-- Short selection -->\n            <div class=\"form-inline my-1 ml-1\">\n                <input class=\"\" type=\"radio\" ng-model=\"options.dayOfMonthToggle\" value=\"dayOfWeek\">\n                <span class=\"mx-1\">the</span>\n                <select class=\"form-control custom-select\" ng-model=\"options.weekOfMonth\">\n                    <option value=\"1\">first</option>\n                    <option value=\"2\">second</option>\n                    <option value=\"3\">third</option>\n                    <option value=\"4\">fourth</option>\n                    <option value=\"L\">last</option>\n                </select>\n\n                <select class=\"form-control custom-select mx-1\" ng-model=\"options.dayOfWeek\">\n                    <option ng-repeat=\"weekday in weekdays track by weekday.id\" value=\"{{weekday.id}}\">{{weekday.label}}</option>\n                </select>\n\n                <span>of every month</span>\n            </div>\n\n        </div>\n    </div>\n\n    <!-- Custom Cron Expression -->\n    <div class=\"\" ng-if=\"options.type === 'custom'\">\n        <div class=\"form-inline\">\n            <input id=\"customCronExpressionInput\" type=\"text\" class=\"form-control\" ng-class=\"{'is-invalid': errors.cronExpression}\" ng-model=\"options.cronExpression \">\n            <span class=\"zone\">{{options.timezone}}</span>\n            <a href=\"http://www.quartz-scheduler.org/documentation/quartz-2.2.2/tutorials/crontrigger.html\" class=\"ml-2\" target=\"_blank\" title=\"Help me\">\n                <i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\n            </a>\n            <p class=\"invalid-feedback\" ng-if=\"errors.cronExpression\">{{errors.cronExpression}}</p>\n        </div>\n    </div>\n\n    <div class=\"next-scheduled-time\">\n        <label>\n            Next scheduled time:\n        </label>\n        <table>\n            <tr>\n                <td>\n                    Report:\n                </td>\n                <td>\n                    <span class=\"iso-datetime\">{{options.getNextExecution(options.timezone).format(\"llll\")}}</span>\n                </td>\n                <td>\n                    ({{options.timezone}})\n                </td>\n            </tr>\n            <tr ng-if=\"options.getServerZone()\">\n                <td>\n                    Server:\n                </td>\n                <td>\n                    <span class=\"iso-datetime\">{{options.getNextExecution(options.getServerZone()).format(\"llll\")}}</span>\n                </td>\n                <td>\n                    ({{options.getServerZone()}})\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Browser:\n                </td>\n                <td>\n                    <span class=\"iso-datetime\">{{options.getNextExecution(options.getBrowserZone()).format(\"llll\")}}</span>\n                </td>\n                <td>\n                    ({{options.getBrowserZone()}})\n                </td>\n            </tr>\n        </table>\n    </div>\n\n    <div class=\"text-muted mt-2\" ng-if=\"options.showDebugOptions\">\n        <hr>\n        <label>Generated Cron Expression</label>\n        <pre class=\"bg-light px-2 py-2 text-muted\">{{options.getCronExpression()}}</pre>\n        <label>Schedule Options</label>\n        <pre class=\"bg-light px-2 py-2 text-muted\">{{options | json}}</pre>\n    </div>\n</form>\n</span>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/lib/onms-schedule-editor/templates/schedule-editor.tpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/lib/onms-schedule-editor/templates/time-input.tpl.html":
/*!***********************************************************************************!*\
  !*** ./src/main/assets/js/lib/onms-schedule-editor/templates/time-input.tpl.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"form-inline\">\n    <select class=\"form-control custom-select mx-1\"\n            ng-class=\"{'is-invalid': model.error}\"\n            ng-options=\"i for i in hours\"\n            ng-model=\"model.hours\">\n    </select>\n    <span>:</span>\n    <select class=\"form-control custom-select mx-1\"\n            ng-class=\"{'is-invalid': model.error && !options.disableMinutes}\"\n            ng-model=\"model.minutes\"\n            ng-options=\"('00' + i).slice(-2) for i in minutes\"\n            ng-disabled=\"options.disableMinutes\">\n    </select>\n    <select class=\"form-control custom-select\" ng-if=\"model.mode === 'AM_PM'\" ng-model=\"model.suffix\">\n        <option value=\"am\">am</option>\n        <option value=\"pm\">pm</option>\n    </select>\n    <p class=\"invalid-feedback ml-1\" ng-if=\"model.error\">{{model.error}}</p>\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/lib/onms-schedule-editor/templates/time-input.tpl.html';
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

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./src/main/assets/js/apps/onms-reports/index.js","vendor"]]]);
});
//# sourceMappingURL=onms-reports.js.map