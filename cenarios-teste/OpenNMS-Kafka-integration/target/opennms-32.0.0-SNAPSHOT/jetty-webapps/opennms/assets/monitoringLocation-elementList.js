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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["monitoringLocation-elementList"],{

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

/***/ "./src/main/assets/js/apps/onms-elementList/lib/restResources.js":
/*!***********************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-elementList/lib/restResources.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Base URL of the REST service
var _concat = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var BASE_REST_URL = 'api/v2';

// Module name
var MODULE_NAME = 'onms.restResources';
var angular = __webpack_require__(/*! ../../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
__webpack_require__(/*! ../../../lib/onms-http */ "./src/main/assets/js/lib/onms-http/index.js");

/**
 * Function used to append an extra transformer to the default $http transforms.
 * 
 * @param defaultTransform Existing response transformer(s)
 * @param transform New transformer to append to the end of the list
 */
var appendTransform = function appendTransform(defaultTransform, transform) {
  var t = angular.isArray(defaultTransform) ? defaultTransform : [defaultTransform];
  return (0, _concat.default)(t).call(t, transform);
};

/**
 * Ensure that the REST responses are always returned as arrays
 * 
 * @param data HTTP response
 * @param headers HTTP response headers
 * @param status HTTP response status code
 * @param key Name of the key where values are stored in {@code data}
 */
var arrayify = function arrayify(data, headers, status, key) {
  // TODO: Figure out how to handle session timeouts that redirect to 
  // the login screen
  /*
  if (status === 302) {
  	$window.location.href = $location.absUrl();
  	return [];
  }
  */
  if (status === 204) {
    // No content
    return [];
  }
  // Always return the data as an array
  return angular.isArray(data[key]) ? data[key] : [data[key]];
};

// REST $resource module
angular.module(MODULE_NAME, ['onms.http', 'ngResource'])

// OnmsAlarm REST $resource
.factory('alarmFactory', /* @ngInject */["$resource", "$log", "$http", "$location", function ($resource, $log, $http, $location) {
  return $resource(BASE_REST_URL + '/alarms/:id', {
    id: '@id'
  }, {
    'query': {
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'alarm');
      })
    },
    'update': {
      method: 'PUT'
    },
    'queryProperties': {
      url: BASE_REST_URL + '/alarms/properties',
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'searchProperty');
      })
    },
    'queryPropertyValues': {
      url: BASE_REST_URL + '/alarms/properties/:id',
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'value');
      })
    }
  });
}])

// OnmsEvent REST $resource
.factory('eventFactory', /* @ngInject */["$resource", "$log", "$http", "$location", function ($resource, $log, $http, $location) {
  return $resource(BASE_REST_URL + '/events/:id', {
    id: '@id'
  }, {
    'query': {
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'event');
      })
    },
    'update': {
      method: 'PUT'
    },
    'queryProperties': {
      url: BASE_REST_URL + '/events/properties',
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'searchProperty');
      })
    },
    'queryPropertyValues': {
      url: BASE_REST_URL + '/events/properties/:id',
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'value');
      })
    }
  });
}])

// OnmsMinion REST $resource
.factory('minionFactory', /* @ngInject */["$resource", "$log", "$http", "$location", function ($resource, $log, $http, $location) {
  return $resource(BASE_REST_URL + '/minions/:id', {
    id: '@id'
  }, {
    'query': {
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'minion');
      })
    },
    'update': {
      method: 'PUT'
    }
  });
}])

// OnmsMonitoringLocation REST $resource
.factory('monitoringLocationFactory', /* @ngInject */["$resource", "$log", "$http", "$location", function ($resource, $log, $http, $location) {
  return $resource(BASE_REST_URL + '/monitoringLocations/:id', {}, {
    'query': {
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'location');
      })
    },
    'update': {
      method: 'PUT'
    }
  });
}])

// OnmsNode REST $resource
.factory('nodeFactory', /* @ngInject */["$resource", "$log", "$http", "$location", function ($resource, $log, $http, $location) {
  return $resource(BASE_REST_URL + '/nodes/:id', {
    id: '@id'
  }, {
    'query': {
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'node');
      })
    },
    'update': {
      method: 'PUT'
    },
    'queryProperties': {
      url: BASE_REST_URL + '/nodes/properties',
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'searchProperty');
      })
    },
    'queryPropertyValues': {
      url: BASE_REST_URL + '/nodes/properties/:id',
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'value');
      })
    }
  });
}])

// OnmsNotification REST $resource
.factory('notificationFactory', /* @ngInject */["$resource", "$log", "$http", "$location", function ($resource, $log, $http, $location) {
  return $resource(BASE_REST_URL + '/notifications/:id', {
    id: '@id'
  }, {
    'query': {
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'notification');
      })
    },
    'update': {
      method: 'PUT'
    },
    'queryProperties': {
      url: BASE_REST_URL + '/notifications/properties',
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'searchProperty');
      })
    },
    'queryPropertyValues': {
      url: BASE_REST_URL + '/notifications/properties/:id',
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'value');
      })
    }
  });
}])

// OnmsOutage REST $resource
.factory('outageFactory', /* @ngInject */["$resource", "$log", "$http", "$location", function ($resource, $log, $http, $location) {
  return $resource(BASE_REST_URL + '/outages/:id', {
    id: '@id'
  }, {
    'query': {
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'outage');
      })
    },
    'update': {
      method: 'PUT'
    },
    'queryProperties': {
      url: BASE_REST_URL + '/outages/properties',
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'searchProperty');
      })
    },
    'queryPropertyValues': {
      url: BASE_REST_URL + '/outages/properties/:id',
      method: 'GET',
      isArray: true,
      // Append a transformation that will unwrap the item array
      transformResponse: appendTransform($http.defaults.transformResponse, function (data, headers, status) {
        return arrayify(data, headers, status, 'value');
      })
    }
  });
}]);

/***/ }),

/***/ "./src/main/assets/js/apps/onms-elementList/monitoringLocation-elementList/index.js":
/*!******************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-elementList/monitoringLocation-elementList/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
var _context, _context2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MODULE_NAME = 'onms.elementList.monitoringLocation';
var angular = __webpack_require__(/*! ../../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var elementList = __webpack_require__(/*! ../lib/elementList */ "./src/main/assets/js/apps/onms-elementList/lib/elementList.js");
__webpack_require__(/*! ../lib/restResources */ "./src/main/assets/js/apps/onms-elementList/lib/restResources.js");
var mainTemplate = __webpack_require__(/*! ./main.html */ "./src/main/assets/js/apps/onms-elementList/monitoringLocation-elementList/main.html");

// $filters that can be used to create human-readable versions of filter values
(0, _filter.default)(_context = (0, _filter.default)(_context2 = angular.module('monitoringLocationsListFilters', ['onmsListFilters']).directive('onmsMonitoringLocationList', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: mainTemplate
  };
})).call(_context2, 'property', function () {
  return function (input) {
    switch (input) {
      case 'locationName':
        return 'Location name';
      case 'monitoringArea':
        return 'Monitoring area';
      case 'geolocation':
        return 'Geolocation';
      case 'latitude':
        return 'Latitude';
      case 'longitude':
        return 'Longitude';
      case 'priority':
        return 'Priority';
      default:
        // If no match, return the input
        return input;
    }
  };
})).call(_context, 'value', function ($filter) {
  return function (input, property) {
    /*
    switch (property) {
    	// There is no special formatting
    }
    */
    return input;
  };
});

// Minion module
angular.module(MODULE_NAME, ['onms.restResources', 'onms.elementList', 'monitoringLocationsListFilters']).config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('');
}])

/**
 * MonitoringLocations list controller
 */.controller('MonitoringLocationsListCtrl', ['$scope', '$location', '$window', '$log', '$filter', 'monitoringLocationFactory', function ($scope, $location, $window, $log, $filter, monitoringLocationFactory) {
  $log.debug('MonitoringLocationsListCtrl initializing...');

  // Set the default sort and set it on $scope.$parent.query
  $scope.$parent.defaults.orderBy = 'locationName';
  $scope.$parent.query.orderBy = 'locationName';
  $scope.newItem = {};

  // Reload all resources via REST
  $scope.$parent.refresh = function () {
    var queryArgs = {
      limit: $scope.$parent.query.limit,
      offset: $scope.$parent.query.offset,
      orderBy: $scope.$parent.query.orderBy,
      order: $scope.$parent.query.order
    };
    // FIQL search
    if ($scope.$parent.query.searchParam) {
      queryArgs['_s'] = $scope.$parent.query.searchParam;
    }
    // Fetch all of the items
    monitoringLocationFactory.query(queryArgs, function (value, headers) {
      $scope.$parent.items = value;
      var contentRange = elementList.parseContentRange(headers('Content-Range'));
      $scope.$parent.query.lastOffset = contentRange.end;
      // Subtract 1 from the value since offsets are zero-based
      $scope.$parent.query.maxOffset = contentRange.total - 1;
      $scope.$parent.query.offset = elementList.normalizeOffset(contentRange.start, $scope.$parent.query.maxOffset, $scope.$parent.query.limit);
    }, function (response) {
      switch (response.status) {
        case 404:
          // If we didn't find any elements, then clear the list
          $scope.$parent.items = [];
          $scope.$parent.query.lastOffset = 0;
          $scope.$parent.query.maxOffset = -1;
          $scope.$parent.setOffset(0);
          break;
        case 401:
        case 403:
          // Handle session timeout by reloading page completely
          $window.location.href = $location.absUrl();
          break;
        default:
          // TODO: Handle 500 Server Error by executing an undo callback?
          break;
      }
      return undefined;
    });
  };

  // Save an item by using $resource.$update
  $scope.$parent.update = function (item) {
    // Check to make sure that the item has an ID
    if (item['location-name'] === null || item['location-name'] === '') {
      // TODO: Throw a validation error
      return;
    }

    // We have to provide the locationName here because it has a dash in its
    // name and we can't use dot notation to refer to it as a default param
    var saveMe = monitoringLocationFactory.get({
      id: item['location-name']
    }, function () {
      // Update fields
      saveMe['monitoring-area'] = item['monitoring-area'];
      saveMe.geolocation = item.geolocation;
      saveMe.latitude = item.latitude;
      saveMe.longitude = item.longitude;
      saveMe.priority = item.priority;

      // We have to provide the locationName here because it has a dash in its
      // name and we can't use dot notation to refer to it as a default param
      saveMe.$update({
        id: item['location-name']
      }, function () {
        // If there's a search in effect, refresh the view
        if ($scope.query.searchParam !== '') {
          $scope.refresh();
        }
      });
    }, function (response) {
      if (response.status === 404) {
        // Create a new $resource and assign properties on it
        var saveMe = new monitoringLocationFactory({});
        saveMe['location-name'] = item['location-name'];
        saveMe['monitoring-area'] = item['monitoring-area'];
        saveMe.geolocation = item.geolocation;
        saveMe.latitude = item.latitude;
        saveMe.longitude = item.longitude;
        saveMe.priority = item.priority;

        // Insert the object instead of updating it
        saveMe.$save({}, function () {
          $scope.refresh();
          $scope.newItem = {};
          // Return true to indicate successful submission
          return true;
        });
      }
    });
  };
  $scope.$parent.deleteItem = function (item) {
    // We have to provide the locationName here because it has a dash in its
    // name and we can't use dot notation to refer to it as a default param
    var saveMe = monitoringLocationFactory.get({
      id: item['location-name']
    }, function () {
      if ($window.confirm('Are you sure you want to remove location "' + item['location-name'] + '"?')) {
        // We have to provide the locationName here because it has a dash in its
        // name and we can't use dot notation to refer to it as a default param
        saveMe.$delete({
          id: item['location-name']
        }, function () {
          // Watch the item list
          var cancelWatch = $scope.$watch('items', function () {
            for (var i = 0; i < $scope.items.length; i++) {
              // If it still contains the deleted item, then call refresh()
              if ($scope.items[i]['location-name'] === item['location-name']) {
                $scope.refresh();
                return;
              }
            }
            // If the deleted item is not in the item list, then cancel the $watch
            cancelWatch();
          });
        }, function (response) {
          $window.alert('Deletion of location "' + item['location-name'] + '" failed. Please make sure that no nodes are associated with the given location.');
        });
      }
    }, function (response) {
      if (response.status === 404) {
        // We didn't find the item so it can't be deleted
        // Might as well call refresh()
        $scope.refresh();
      }
    });
  };

  // Refresh the item list;
  $scope.$parent.refresh();
  $log.debug('MonitoringLocationsListCtrl initialized');
}]).run(['$rootScope', '$log', function ($rootScope, $log) {
  $log.debug('Finished initializing ' + MODULE_NAME);
}]);
angular.element(document).ready(function () {
  // eslint-disable-next-line no-console
  console.log('Bootstrapping ' + MODULE_NAME);
  angular.bootstrap(document, [MODULE_NAME]);
});

/***/ }),

/***/ "./src/main/assets/js/apps/onms-elementList/monitoringLocation-elementList/main.html":
/*!*******************************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-elementList/monitoringLocation-elementList/main.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div ng-controller=\"ListCtrl\">\n<div ng-controller=\"MonitoringLocationsListCtrl\">\n\t<!-- Modal form for adding filters -->\n\t<div id=\"filterModal\" class=\"modal fade\" tabindex=\"-1\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<!-- Filter form -->\n\t\t\t\t\t<label>Add Filter:</label>\n\t\t\t\t\t<form class=\"form-inline\" onsubmit=\"$('#filterModal').modal('hide')\" ng-submit=\"addSearchClause(clause)\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select class=\"form-control custom-select\" ng-model=\"clause.property\" ng-init=\"clause.property = 'locationName'\">\n\t\t\t\t\t\t\t<option value=\"locationName\">Location Name</option>\n\t\t\t\t\t\t\t<option value=\"monitoringArea\">Monitoring Area</option>\n\t\t\t\t\t\t\t<option value=\"geolocation\">Geolocation</option>\n\t\t\t\t\t\t\t<option value=\"latitude\">Latitude</option>\n\t\t\t\t\t\t\t<option value=\"longitude\">Longitude</option>\n\t\t\t\t\t\t\t<option value=\"priority\">Priority</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<select class=\"form-control custom-select\" ng-model=\"clause.operator\" ng-init=\"clause.operator = 'EQ'\">\n\t\t\t\t\t\t\t<option value=\"EQ\">=</option>\n\t\t\t\t\t\t\t<option value=\"NE\">!=</option>\n\t\t\t\t\t\t\t<option value=\"LT\">&lt;</option>\n\t\t\t\t\t\t\t<option value=\"LE\">&lt;=</option>\n\t\t\t\t\t\t\t<option value=\"GT\">&gt;</option>\n\t\t\t\t\t\t\t<option value=\"GE\">&gt;=</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<input name=\"clause-value-text\"      class=\"form-control\" type=\"text\"   ng-model=\"clause.value\" ng-if=\"clause.property !== 'latitude' &amp;&amp; clause.property !== 'longitude' &amp;&amp; clause.property !== 'priority'\">\n\t\t\t\t\t\t<input name=\"clause-value-number\"    class=\"form-control\" type=\"number\" ng-model=\"clause.value\" min=\"{{clause.property === 'priority' ? '0' : ''}}\" ng-if=\"clause.property === 'priority'\">\n\t\t\t\t\t\t<input name=\"clause-value-latitude\"  class=\"form-control\" type=\"number\" step=\"any\" ng-model=\"clause.value\" min=\"{{clause.property === 'latitude' ? '-90.0' : ''}}\" max=\"{{clause.property === 'latitude' ? '90.0' : ''}}\" ng-if=\"clause.property === 'latitude'\">\n\t\t\t\t\t\t<input name=\"clause-value-longitude\" class=\"form-control\" type=\"number\" step=\"any\" ng-model=\"clause.value\" min=\"-180.0\" max=\"180.0\" ng-if=\"clause.property === 'longitude'\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"submit\">Submit</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Modal form for adding a new location -->\n\t<div id=\"addLocationModal\" class=\"modal fade\" tabindex=\"-1\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<!-- Filter form -->\n\t\t\t\t\t<!-- TODO: Add client-side validation -->\n\t\t\t\t\t<h3>Add a new Monitoring Location</h3>\n\t\t\t\t\t<form onsubmit=\"$('#addLocationModal').modal('hide')\" ng-submit=\"update(newItem)\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"locationName\">Location Name</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" ng-model=\"newItem['location-name']\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"monitoringArea\">Monitoring Area</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" ng-model=\"newItem['monitoring-area']\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"geolocation\">Geolocation</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" ng-model=\"newItem.geolocation\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"latitude\">Latitude</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" step=\"any\" ng-model=\"newItem.latitude\" min=\"-90.0\" max=\"90.0\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"longitude\">Longitude</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" step=\"any\" ng-model=\"newItem.longitude\" min=\"-180.0\" max=\"180.0\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"priority\">Priority</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" ng-model=\"newItem.priority\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"submit\">Submit</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Modal help window -->\n\t<div id=\"helpModal\" class=\"modal fade\" tabindex=\"-1\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<!-- Filter form -->\n\t\t\t\t\t<h3>Help</h3>\n\n\t\t\t\t\t<h4>Filtering</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tClick on the <i class=\"fa fa-search-plus\"></i> icon to filter the list. You can match a portion of a value by using\n\t\t\t\t\t\tthe * character as a wildcard value. Click on the <i class=\"fa fa-ban\"> icon to clear all filters.</i>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<h4>Filter by Example</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tYou can click on the <i class=\"fa fa-plus-square-o\"></i> icon next to a value to only show rows that contain that value. \n\t\t\t\t\t\tIf you click on the <i class=\"fa fa-minus-square-o\"></i> icon, it will remove rows with that value from the results.\n\t\t\t\t\t\tFor timestamp values, clicking on the <i class=\"fa fa-toggle-left\"></i> icon will show timestamps newer than the specified\n\t\t\t\t\t\tvalue and clicking on the <i class=\"fa fa-toggle-right\"></i> icon will show timestamps older than the value.\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<h4>Sorting</h4>\n\t\t\t\t\t<p>Click on a column header to sort by that column. Click the same column again to reverse the sort order.</p>\n\n\t\t\t\t\t<h4>Items per Page</h4>\n\t\t\t\t\t<p>You can change the number of items per page by entering a numeric value in the <i class=\"fa fa-th-list\"></i> box.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<!-- Filter list -->\n\t<div class=\"well well-sm\">\n\t\t<span class=\"h5\" style=\"line-height:2.8;\">\n\t\t\tFilters&nbsp;&nbsp;\n\t\t\t<a href onClick=\"$('#filterModal').modal()\"><i class=\"fa fa-search-plus fa-lg\"></i></a>\n\t\t\t&nbsp;\n\t\t\t<a href onClick=\"$('#helpModal').modal()\"><i class=\"fa fa-question-circle fa-lg\"></i></a>\n\t\t\t&nbsp;\n\t\t\t<a href ng-click=\"clearSearch()\"><i class=\"fa fa-ban fa-lg\"></i></a>\n\t\t\t&nbsp;\n\t\t</span>\n\t\t<span ng-hide=\"query.searchClauses.length == 0\">\n\t\t\t<span ng-repeat=\"clause in query.searchClauses\">\n\t\t\t\t<div class=\"btn-group\" style=\"margin:3px;\">\n\t\t\t\t\t<button class=\"btn btn-primary\" ng-click=\"removeSearchClause(clause)\">\n\t\t\t\t\t\t{{clause.property | property}}\n\t\t\t\t\t\t{{clause.operator | operator : clause.value}}\n\t\t\t\t\t\t{{clause.value | value : clause.property}}\n\t\t\t\t\t\t&nbsp;\n\t\t\t\t\t\t<i class=\"fa fa-close\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</span>\n\t\t</span>\n\t</div>\n\n\t<!-- Paging controls -->\n\t<div>\n\t\t<div class=\"\">\n\t\t\t<button type=\"button\" role=\"button\" class=\"btn btn-secondary {{(query.offset-query.limit) &lt; 0 ? 'disabled' : ''}}\" ng-click=\"setOffset(0)\">\n\t\t\t\t<i class=\"fa fa-backward\"></i>&nbsp;&nbsp;First\n\t\t\t</button>\n\t\t\t<button type=\"button\" role=\"button\" class=\"btn btn-secondary ml-2 {{(query.offset-query.limit) &lt; 0 ? 'disabled' : ''}}\" ng-click=\"setOffset(query.offset-query.limit)\">\n\t\t\t\t<i class=\"fa fa-play fa-flip-horizontal\"></i>&nbsp;&nbsp;Previous\n\t\t\t</button>\n\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<a class=\"btn btn-secondary\" ng-click=\"setOffset(query.offset-(3*query.limit))\" ng-hide=\"(query.offset-(3*query.limit)) &lt; 0\" style=\"width:5em;\">\n\t\t\t\t\t{{(query.offset/query.limit) - 2}}\n\t\t\t\t</a>\n\t\t\t\t<a class=\"btn btn-secondary\" ng-click=\"setOffset(query.offset-(2*query.limit))\" ng-hide=\"(query.offset-(2*query.limit)) &lt; 0\" style=\"width:5em;\">\n\t\t\t\t\t{{(query.offset/query.limit) - 1}}\n\t\t\t\t</a>\n\t\t\t\t<a class=\"btn btn-secondary\" ng-click=\"setOffset(query.offset-query.limit)\" ng-hide=\"(query.offset-query.limit) &lt; 0\" style=\"width:5em;\">\n\t\t\t\t\t{{query.offset/query.limit}}\n\t\t\t\t</a>\n\t\t\t\t<a class=\"btn btn-secondary active\" ng-show=\"query.maxOffset &gt; 0\" style=\"width:5em;\">\n\t\t\t\t\t{{(query.offset/query.limit) + 1}}\n\t\t\t\t</a>\n\t\t\t\t<a class=\"btn btn-secondary\" ng-click=\"setOffset(query.offset+query.limit)\" ng-hide=\"(query.offset+query.limit) &gt; query.maxOffset\" style=\"width:5em;\">\n\t\t\t\t\t{{(query.offset/query.limit) + 2}}\n\t\t\t\t</a>\n\t\t\t\t<a class=\"btn btn-secondary\" ng-click=\"setOffset(query.offset+(2*query.limit))\" ng-hide=\"query.offset+(2*query.limit) &gt; query.maxOffset\" style=\"width:5em;\">\n\t\t\t\t\t{{(query.offset/query.limit) + 3}}\n\t\t\t\t</a>\n\t\t\t\t<a class=\"btn btn-secondary\" ng-click=\"setOffset(query.offset+(3*query.limit))\" ng-hide=\"query.offset+(3*query.limit) &gt; query.maxOffset\" style=\"width:5em;\">\n\t\t\t\t\t{{(query.offset/query.limit) + 4}}\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"pull-right\">\n\t\t\t\t<!-- Add 1 to each offset since they are zero-based -->\n\t\t\t\t<form class=\"form-inline\" ng-submit=\"setLimit(query.newLimit)\">\n\t\t\t\t\t<div class=\"input-group\" style=\"margin-left:10px;\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fa fa-th-list\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" ng-model=\"query.newLimit\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button type=\"button\" role=\"button\" class=\"btn btn-secondary mx-2 {{(query.offset+query.limit) &gt; query.maxOffset ? 'disabled' : ''}}\" ng-click=\"setOffset(query.offset + query.limit)\">\n\t\t\t\t\t\tNext&nbsp;&nbsp;<i class=\"fa fa-play\"></i>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button type=\"button\" role=\"button\" class=\"btn btn-secondary {{(query.offset+query.limit) &gt; query.maxOffset ? 'disabled' : ''}}\" ng-click=\"setOffset(1000000000)\">\n\t\t\t\t\t\tLast&nbsp;&nbsp;<i class=\"fa fa-forward\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t\t<h5 class=\"pull-right col-form-label\" ng-show=\"query.maxOffset &lt; 0\">No items found.</h5>\n\t\t\t<h5 class=\"pull-right col-form-label\" ng-show=\"query.maxOffset &gt;= 0\">{{query.offset === query.lastOffset ? \"Item \" + (query.offset + 1) : \"Items \" + (query.offset + 1) + \" - \" + (query.lastOffset + 1)}} ({{query.maxOffset + 1}} total)</h5>\n\t\t</div>\n\t</div>\n\n\t<br>\n\n\t<div class=\"card\">\n\t\t<!-- The style is here to override a weird Chrome user agent stylesheet issue -->\n\t\t<table class=\"table table-bordered table-striped\" style=\"font-size:100%\">\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t<a href ng-click=\"changeOrderBy('locationName')\">Location Name</a>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'locationName' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'locationName' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t<a href ng-click=\"changeOrderBy('monitoringArea')\">Monitoring Area</a>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'monitoringArea' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'monitoringArea' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t<a href ng-click=\"changeOrderBy('geolocation')\">Geolocation</a>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'geolocation' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'geolocation' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t<a href ng-click=\"changeOrderBy('latitude')\">Latitude</a>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'latitude' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'latitude' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t<a href ng-click=\"changeOrderBy('longitude')\">Longitude</a>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'longitude' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'longitude' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t<a href ng-click=\"changeOrderBy('priority')\">Priority</a>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'priority' &amp;&amp; query.order === 'asc'\" class=\"fa fa-sort-asc\"></i>\n\t\t\t\t\t\t<i ng-show=\"query.orderBy === 'priority' &amp;&amp; query.order === 'desc'\" class=\"fa fa-sort-desc\"></i>\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr ng-repeat=\"item in items\">\n\t\t\t\t\t<td class=\"text-nowrap\" style=\"line-height:24px;\">\n\t\t\t\t\t\t{{item['location-name']}}\n\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"deleteItem(item)\"><i class=\"fa fa-trash-o fa-lg\"></i></a>\n\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'locationName',operator:'EQ',value:item['location-name']})\"><i class=\"fa fa-plus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'locationName',operator:'NE',value:item['location-name']})\"><i class=\"fa fa-minus-square-o fa-lg\"></i></a>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-nowrap\">\n\t\t\t\t\t\t<onms-list-edit-in-place item=\"item\" value=\"item['monitoring-area']\" value-type=\"'text'\" on-submit=\"update(item)\">\n\t\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'monitoringArea',operator:'EQ',value:item['monitoring-area']})\"><i class=\"fa fa-plus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'monitoringArea',operator:'NE',value:item['monitoring-area']})\"><i class=\"fa fa-minus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t</onms-list-edit-in-place>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-nowrap\">\n\t\t\t\t\t\t<onms-list-edit-in-place item=\"item\" value=\"item['geolocation']\" value-type=\"'text'\" on-submit=\"update(item)\">\n\t\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'geolocation',operator:'EQ',value:item['geolocation']})\"><i class=\"fa fa-plus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'geolocation',operator:'NE',value:item['geolocation']})\"><i class=\"fa fa-minus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t</onms-list-edit-in-place>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-nowrap\">\n\t\t\t\t\t\t<onms-list-edit-in-place item=\"item\" value=\"item['latitude']\" value-type=\"'number'\" step=\"'any'\" on-submit=\"update(item)\">\n\t\t\t\t\t\t\t<span ng-show=\"item['latitude'] !== null\">\n\t\t\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'latitude',operator:'EQ',value:item['latitude']})\"><i class=\"fa fa-plus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'latitude',operator:'NE',value:item['latitude']})\"><i class=\"fa fa-minus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</onms-list-edit-in-place>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-nowrap\">\n\t\t\t\t\t\t<onms-list-edit-in-place item=\"item\" value=\"item['longitude']\" value-type=\"'number'\" step=\"'any'\" on-submit=\"update(item)\">\n\t\t\t\t\t\t\t<span ng-show=\"item['longitude'] !== null\">\n\t\t\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'longitude',operator:'EQ',value:item['longitude']})\"><i class=\"fa fa-plus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'longitude',operator:'NE',value:item['longitude']})\"><i class=\"fa fa-minus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</onms-list-edit-in-place>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-nowrap\">\n\t\t\t\t\t\t<onms-list-edit-in-place item=\"item\" value=\"item['priority']\" value-type=\"'number'\" on-submit=\"update(item)\">\n\t\t\t\t\t\t\t<span ng-show=\"item['priority'] !== null\">\n\t\t\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'priority',operator:'EQ',value:item['priority']})\"><i class=\"fa fa-plus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t\t\t<a href style=\"text-decoration: none;\" ng-click=\"addSearchClause({property:'priority',operator:'NE',value:item['priority']})\"><i class=\"fa fa-minus-square-o fa-lg\"></i></a>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</onms-list-edit-in-place>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<button type=\"button\" role=\"button\" class=\"btn btn-secondary mb-2\" onClick=\"$('#addLocationModal').modal()\">Add a new location</button>\n</div>\n</div>\n";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-elementList/monitoringLocation-elementList/main.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

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

/***/ })

},[["./src/main/assets/js/apps/onms-elementList/monitoringLocation-elementList/index.js","vendor"]]]);
});
//# sourceMappingURL=monitoringLocation-elementList.js.map