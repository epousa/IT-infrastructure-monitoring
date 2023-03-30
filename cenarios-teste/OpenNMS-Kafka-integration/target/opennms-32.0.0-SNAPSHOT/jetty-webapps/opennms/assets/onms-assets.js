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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onms-assets"],{

/***/ "./src/main/assets/js/apps/onms-assets/config.json":
/*!*********************************************************!*\
  !*** ./src/main/assets/js/apps/onms-assets/config.json ***!
  \*********************************************************/
/*! exports provided: rows, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"rows\":[{\"columns\":[{\"class\":\"col-md-6\",\"panels\":[{\"title\":\"SNMP Info\",\"fields\":[{\"label\":\"System ID\",\"tooltip\":\"System ID, information from SNMP agent\",\"model\":\"sysObjectId\",\"type\":\"static\"},{\"label\":\"System Name\",\"tooltip\":\"System Name, information from SNMP agent\",\"model\":\"sysName\",\"type\":\"static\"},{\"label\":\"System Location\",\"tooltip\":\"System Location, information from SNMP agent\",\"model\":\"sysLocation\",\"type\":\"static\"},{\"label\":\"System Contact\",\"tooltip\":\"System Contact, information from SNMP agent\",\"model\":\"sysContact\",\"type\":\"static\"},{\"label\":\"System Description\",\"tooltip\":\"System Description, information from SNMP agent\",\"model\":\"sysDescription\",\"type\":\"static\"}]}]}]},{\"columns\":[{\"class\":\"col-md-6\",\"panels\":[{\"title\":\"Identification\",\"fields\":[{\"label\":\"Description\",\"tooltip\":\"Description of the device's purpose (E.G. Core P2P Router, Egress Internet Router, Etc.)\",\"model\":\"description\",\"type\":\"text\"},{\"label\":\"Category\",\"tooltip\":\"This column is to be used to specify what category of Network Element this device would fall into (E.G. WAN Router, Firewall, Etc.). Expected only Alphanumeric, '-' and '_'.\",\"model\":\"category\",\"pattern\":\"^[A-Za-z0-9_-]*$\",\"type\":\"text\"},{\"label\":\"Manufacturer\",\"tooltip\":\"Manufacturer - Self explanatory\",\"model\":\"manufacturer\",\"type\":\"text\"},{\"label\":\"Model Number\",\"tooltip\":\"Model number of the device (E.G. Cisco 3845, Oki B4400, Etc.)\",\"model\":\"modelNumber\",\"type\":\"text\"},{\"label\":\"Serial Number\",\"tooltip\":\"Serial Number\",\"model\":\"serialNumber\",\"type\":\"text\"},{\"label\":\"Asset Number\",\"tooltip\":\"This field should be used if the organization employs asset tags for inventory purposes\",\"model\":\"assetNumber\",\"type\":\"text\"},{\"label\":\"Date Installed\",\"tooltip\":\"A handy dandy place to keep the date this equipment went into service, just in case the bean counters or your boss ask you for any particulars on this device\",\"model\":\"dateInstalled\",\"type\":\"date\"},{\"label\":\"Operating System\",\"tooltip\":\"Operating System\",\"model\":\"operatingSystem\",\"type\":\"text\"}]}]},{\"class\":\"col-md-6\",\"panels\":[{\"title\":\"Configuration Categories\",\"fields\":[{\"label\":\"Display Category\",\"tooltip\":\"This column is to be used to specify what category of Network Element this device would fall into (E.G. WAN Router, Firewall, Etc.). Expected only Alphanumeric, '-' and '_'.\",\"model\":\"displayCategory\",\"pattern\":\"^[A-Za-z0-9_-]*$\",\"type\":\"text\"},{\"label\":\"Notification Category\",\"tooltip\":\"This could be something like 'serverAdmin' or 'networkAdmin' to be used in filter rules for directing notifications. Expected only Alphanumeric, '-' and '_'.\",\"model\":\"notifyCategory\",\"pattern\":\"^[A-Za-z0-9_-]*$\",\"type\":\"text\"},{\"label\":\"Poller Category\",\"tooltip\":\"This is to be used in filter rules to define devices in a particular poller package. Expected only Alphanumeric, '-' and '_'.\",\"model\":\"pollerCategory\",\"pattern\":\"^[A-Za-z0-9_-]*$\",\"type\":\"text\"},{\"label\":\"Threshold Category\",\"tooltip\":\"This is to be used in filter rules to define devices in a particular thresholding package. Expected only Alphanumeric, '-' and '_'.\",\"model\":\"thresholdCategory\",\"pattern\":\"^[A-Za-z0-9_-]*$\",\"type\":\"text\"}]}]}]},{\"columns\":[{\"class\":\"col-md-6\",\"panels\":[{\"title\":\"Location\",\"fields\":[{\"label\":\"State\",\"tooltip\":\"Continuation of address\",\"model\":\"state\",\"type\":\"text\"},{\"label\":\"Region\",\"tooltip\":\"On a geographically or otherwise determined regional basis\",\"model\":\"region\",\"type\":\"text\"},{\"label\":\"Address 1\",\"tooltip\":\"Street address of this device (For technician dispatch)\",\"model\":\"address1\",\"type\":\"text\"},{\"label\":\"Address 2\",\"tooltip\":\"Continuation of address\",\"model\":\"address2\",\"type\":\"text\"},{\"label\":\"City\",\"tooltip\":\"Continuation of address\",\"model\":\"city\",\"type\":\"text\"},{\"label\":\"ZIP\",\"tooltip\":\"Postal code (ZIP code)\",\"model\":\"zip\",\"type\":\"text\"},{\"label\":\"Country\",\"tooltip\":\"Country\",\"model\":\"country\",\"type\":\"text\"},{\"label\":\"Longitude\",\"tooltip\":\"Geo Longitude\",\"model\":\"longitude\",\"pattern\":\"^[0-9.-]*$\",\"type\":\"text\"},{\"label\":\"Latitude\",\"tooltip\":\"Geo Latitude\",\"model\":\"latitude\",\"pattern\":\"^[0-9.-]*$\",\"type\":\"text\"},{\"label\":\"Division\",\"tooltip\":\"Standard corporate mumbo jumbo for the bean counters getting ever more granular on where money gets spent. Populate as you fee fit, or as dictated.\",\"model\":\"division\",\"type\":\"text\"},{\"label\":\"Department\",\"tooltip\":\"More of the above, but more simple (E.G. Accounting, Collections, IT, Etc.)\",\"model\":\"department\",\"type\":\"text\"},{\"label\":\"Building\",\"tooltip\":\"If this address is part of a complex/campus, this field allows additional granularity.\",\"model\":\"building\",\"type\":\"text\"},{\"label\":\"Floor\",\"tooltip\":\"Floor on which this node is located, for technician dispatch.\",\"model\":\"floor\",\"type\":\"text\"},{\"label\":\"Room\",\"tooltip\":\"Room number where this node is located, for technician dispatch\",\"model\":\"room\",\"type\":\"text\"},{\"label\":\"Rack\",\"tooltip\":\"This field should be used to designate the rack in specific that this piece of equipment is located in at a given location (E.G. Server3; Network5; Isle C-Bay5;105.12, Etc.) preferably by using both Bay & Isle coordinates\",\"model\":\"rack\",\"type\":\"text\"},{\"label\":\"Rack unit height\",\"tooltip\":\"Rack unit height of node: 1, 2, 3, ...\",\"model\":\"rackunitheight\",\"pattern\":\"^[0-9]*$\",\"type\":\"text\"},{\"label\":\"Slot\",\"tooltip\":\"This field should be used to designate what slot in a chassis/shelf this node occupies\",\"model\":\"slot\",\"type\":\"text\"},{\"label\":\"Port\",\"tooltip\":\"Port on a given card or device being monitored\",\"model\":\"port\",\"type\":\"text\"},{\"label\":\"Circuit ID\",\"tooltip\":\"This field should contain the Circuit ID of the ISP/Carrier's designation to which this equipment terminates a connection. For DSL a phone number (or whatever identifying charistic of the LEC should be populated here) to this device's Voice or Data egress.\",\"model\":\"circuitId\",\"type\":\"text\"},{\"label\":\"Admin\",\"tooltip\":\"Admin contact at the given location\",\"model\":\"admin\",\"type\":\"text\"}]}]},{\"class\":\"col-md-6\",\"panels\":[{\"title\":\"Hardware\",\"fields\":[{\"label\":\"CPU\",\"tooltip\":\"Type of CPU in this node\",\"model\":\"cpu\",\"type\":\"text\"},{\"label\":\"RAM\",\"tooltip\":\"RAM\",\"model\":\"ram\",\"type\":\"text\"},{\"label\":\"Additional Hardware\",\"tooltip\":\"Additional Hardware\",\"model\":\"additionalhardware\",\"type\":\"text\"},{\"label\":\"Number of Power Supplies\",\"tooltip\":\"Number of power supplies (numeric value expected)\",\"model\":\"numpowersupplies\",\"pattern\":\"^[0-9]*$\",\"type\":\"text\"},{\"label\":\"Input Power\",\"tooltip\":\"Input power 'type' (numeric value expected)\",\"model\":\"inputpower\",\"pattern\":\"^[0-9]*$\",\"type\":\"text\"},{\"label\":\"Storage Controller\",\"tooltip\":\"Storage Controller\",\"model\":\"storagectrl\",\"type\":\"text\"},{\"label\":\"HDD 1\",\"tooltip\":\"Hard disk drive information\",\"model\":\"hdd1\",\"type\":\"text\"},{\"label\":\"HDD 2\",\"tooltip\":\"Hard disk drive information\",\"model\":\"hdd2\",\"type\":\"text\"},{\"label\":\"HDD 3\",\"tooltip\":\"Hard disk drive information\",\"model\":\"hdd3\",\"type\":\"text\"},{\"label\":\"HDD 4\",\"tooltip\":\"Hard disk drive information\",\"model\":\"hdd4\",\"type\":\"text\"},{\"label\":\"HDD 5\",\"tooltip\":\"Hard disk drive information\",\"model\":\"hdd5\",\"type\":\"text\"},{\"label\":\"HDD 6\",\"tooltip\":\"Hard disk drive information\",\"model\":\"hdd6\",\"type\":\"text\"}]},{\"title\":\"Authentication\",\"fields\":[{\"label\":\"Username\",\"tooltip\":\"Username\",\"model\":\"username\",\"type\":\"text\"},{\"label\":\"Password\",\"tooltip\":\"Password\",\"model\":\"password\",\"type\":\"password\"},{\"label\":\"Enable Password\",\"tooltip\":\"Enable Password: used only if AutoEnable is not set to 'A'\",\"model\":\"enable\",\"type\":\"password\"},{\"label\":\"Connection\",\"tooltip\":\"Connection\",\"model\":\"connection\",\"type\":\"select\",\"options\":[\"telnet\",\"ssh\",\"rsh\",\"\"]},{\"label\":\"Auto Enable\",\"tooltip\":\"Whether the provided authentication user goes directly into 'enable' mode on this node upon login.\",\"model\":\"autoenable\",\"type\":\"select\",\"options\":[\"A\",\"\"]},{\"label\":\"SNMP Community\",\"tooltip\":\"SNMP Community String (it is recommended to use snmp-config.xml instead)\",\"model\":\"snmpcommunity\",\"type\":\"text\"}]}]}]},{\"columns\":[{\"class\":\"col-md-6\",\"panels\":[{\"title\":\"Vendor\",\"fields\":[{\"label\":\"Name\",\"tooltip\":\"Vendor who provides service for this device (If applicable, E.G. ISP, Local PBX Maintenance vendor, etc.)\",\"model\":\"vendor\",\"type\":\"text\"},{\"label\":\"Phone\",\"tooltip\":\"Phone number of vendor that services (or provides service to) this equipment (E.G. ISP, PBX Vendor, Phone company, etc.)\",\"model\":\"vendorPhone\",\"type\":\"text\"},{\"label\":\"Fax\",\"tooltip\":\"Fax number of the above vendor\",\"model\":\"vendorFax\",\"type\":\"text\"},{\"label\":\"Lease\",\"tooltip\":\"A nice spot to populate the name of the leasing company or lease ID for this equipment\",\"model\":\"lease\",\"type\":\"text\"},{\"label\":\"Lease Expires\",\"tooltip\":\"If all goes according to plan, this should be a date after you’ve got new equipment commissioned to take over for the service this equipment provides\",\"model\":\"leaseExpires\",\"type\":\"date\"},{\"label\":\"Vendor Asset Number\",\"tooltip\":\"If the vendor that supplies this equipment uses a asset tag of their own, populate that data here\",\"model\":\"vendorAssetNumber\",\"type\":\"text\"},{\"label\":\"Contract Number\",\"tooltip\":\"Number / ID of maintenance contract\",\"model\":\"maintcontract\",\"type\":\"text\"},{\"label\":\"Contract Expires\",\"tooltip\":\"Date when maintenance contract expires\",\"model\":\"maintContractExpiration\",\"type\":\"date\"},{\"label\":\"Maint Phone\",\"tooltip\":\"Phone number for technical operational support for the device in question (Think Helpdesk, Phone Company, ISP NOC, Etc.)\",\"model\":\"supportPhone\",\"type\":\"text\"}]}]}]},{\"columns\":[{\"class\":\"col-md-6\",\"panels\":[{\"title\":\"Comments\",\"fields\":[{\"label\":\"Comment\",\"tooltip\":\"Comments for this asset\",\"model\":\"comment\",\"type\":\"textarea\"}]}]}]}]}");

/***/ }),

/***/ "./src/main/assets/js/apps/onms-assets/index.js":
/*!******************************************************!*\
  !*** ./src/main/assets/js/apps/onms-assets/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* @author Alejandro Galue <agalue@opennms.org>
* @copyright 2016-2022 The OpenNMS Group, Inc.
*/



var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
var _indexOf = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"));
var _filter = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
var bootbox = __webpack_require__(/*! ../../vendor/bootbox-js */ "./src/main/assets/js/vendor/bootbox-js.js");
__webpack_require__(/*! ../../lib/onms-http */ "./src/main/assets/js/lib/onms-http/index.js");
__webpack_require__(/*! ../onms-date-formatter */ "./src/main/assets/js/apps/onms-date-formatter/index.js");
__webpack_require__(/*! ../onms-default-apps */ "./src/main/assets/js/apps/onms-default-apps/index.js");
var defaultConfig = __webpack_require__(/*! ./config.json */ "./src/main/assets/js/apps/onms-assets/config.json");
angular.module('onms-assets', ['onms.http', 'onms.default.apps', 'ui.bootstrap', 'angular-growl', 'onmsDateFormatter']).config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('');
}]).config(['growlProvider', function (growlProvider) {
  growlProvider.globalTimeToLive(3000);
  growlProvider.globalPosition('bottom-center');
}]).config(['$uibTooltipProvider', function ($uibTooltipProvider) {
  $uibTooltipProvider.setTriggers({
    'mouseenter': 'mouseleave'
  });
  $uibTooltipProvider.options({
    'placement': 'right',
    'trigger': 'mouseenter'
  });
}]).controller('NodeAssetsCtrl', ['$scope', '$http', '$q', 'growl', 'uibDateParser', function ($scope, $http, $q, growl, uibDateParser) {
  $scope.blackList = ['id', 'lastModifiedDate', 'lastModifiedBy', 'lastCapsdPoll', 'createTime'];
  $scope.infoKeys = ['sysObjectId', 'sysName', 'sysLocation', 'sysContact', 'sysDescription'];
  $scope.dateKeys = ['dateInstalled', 'leaseExpires', 'maintContractExpiration'];
  $scope.dateFormat = 'yyyy-MM-dd';
  $scope.config = {};
  $scope.master = {};
  $scope.asset = {};
  $scope.suggestions = {};
  /*
  $scope.nodeId;
  $scope.nodeLabel;
  $scope.foreignSource;
  $scope.foreignId;
  */

  $scope.init = function (nodeId) {
    $scope.nodeId = nodeId;
    $scope.config = defaultConfig;
    $http.get('rest/nodes/' + $scope.nodeId).then(function (response) {
      var node = response.data;
      $scope.nodeLabel = node.label;
      $scope.foreignSource = node.foreignSource;
      $scope.foreignId = node.foreignId;
      (0, _forEach.default)(angular).call(angular, $scope.dateKeys, function (key) {
        node.assetRecord[key] = uibDateParser.parse(node.assetRecord[key], $scope.dateFormat);
      });
      $scope.master = angular.copy(node.assetRecord);
      $scope.asset = angular.copy(node.assetRecord);
      (0, _forEach.default)(angular).call(angular, $scope.infoKeys, function (k) {
        $scope.asset[k] = node[k];
      });
    }, function (response) {
      growl.error(response.data);
    });
    $http.get('rest/assets/suggestions').then(function (response) {
      $scope.suggestions = response.data;
    }, function (response) {
      growl.error(response.data);
    });
  };
  $scope.getSuggestions = function (field) {
    if ($scope.suggestions[field]) {
      return $scope.suggestions[field].suggestion;
    }
    return [];
  };
  $scope.reset = function () {
    $scope.asset = angular.copy($scope.master);
    $scope.assetForm.$setPristine();
  };
  $scope.save = function () {
    var target = {};
    for (var k in $scope.asset) {
      var _context, _context2;
      if ((0, _indexOf.default)(_context = $scope.infoKeys).call(_context, k) === -1 && (0, _indexOf.default)(_context2 = $scope.blackList).call(_context2, k) === -1 && $scope.asset[k] !== '' && $scope.asset[k] !== null) {
        var _context3;
        target[k] = (0, _indexOf.default)(_context3 = $scope.dateKeys).call(_context3, k) === -1 ? $scope.asset[k] : (0, _filter.default)(uibDateParser).call(uibDateParser, $scope.asset[k], $scope.dateFormat);
      }
    }
    //console.log('Assets to save: ' + angular.toJson(target));
    $http({
      method: 'PUT',
      url: 'rest/nodes/' + $scope.nodeId + '/assetRecord',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: $.param(target)
    }).then(function () {
      growl.success('The asset record has been successfully updated.');
      $scope.checkRequisition(target);
    }, function (response) {
      growl.error('Cannot update the asset record: ' + response.data);
    });
  };
  $scope.checkRequisition = function (assets) {
    if ($scope.foreignSource && $scope.foreignId) {
      bootbox.confirm('This node belongs to the requisition ' + $scope.foreignSource + '.<br/> It is recommended to update the requisition with your asset fields, but all the existing fields will be overriden.<br/> Do you want to do that ?', function (ok) {
        if (ok) {
          $scope.updateRequisition(assets);
        }
      });
    }
  };
  $scope.updateRequisition = function (assets) {
    var assetFields = [];
    for (var key in assets) {
      if (assets.hasOwnProperty(key)) {
        assetFields.push({
          name: key,
          value: assets[key]
        });
      }
    }
    $http.get('rest/requisitions/' + $scope.foreignSource + '/nodes/' + $scope.foreignId).then(function (response) {
      var node = response.data;
      node.asset = assetFields;
      $http.post('rest/requisitions/' + $scope.foreignSource + '/nodes', node).then(function () {
        growl.success('Requisition ' + $scope.foreignSource + ' has been updated.');
      }, function () {
        growl.error('Cannot update requisition ' + $scope.foreignSource);
      });
    }, function () {
      growl.error('Cannot obtain node data from requisition ' + $scope.foreignSource);
    });
  };
}]);

/***/ }),

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

/***/ "./src/main/assets/js/vendor/bootbox-js.js":
/*!*************************************************!*\
  !*** ./src/main/assets/js/vendor/bootbox-js.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./jquery-ui-js */ "./src/main/assets/js/vendor/jquery-ui-js.js");
var bootbox = __webpack_require__(/*! ../../../../../node_modules/bootbox/bootbox */ "./node_modules/bootbox/bootbox.js-exposed");
console.log('init: bootbox-js'); // eslint-disable-line no-console

module.exports = window['bootbox'] = bootbox;

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

/***/ "./src/main/assets/js/vendor/jquery-ui-js.js":
/*!***************************************************!*\
  !*** ./src/main/assets/js/vendor/jquery-ui-js.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jQuery = __webpack_require__(/*! ./jquery-js */ "./src/main/assets/js/vendor/jquery-js.js");

// jquery-ui base
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/core */ "./node_modules/jquery-ui/ui/core.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widget */ "./node_modules/jquery-ui/ui/widget.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/mouse */ "./node_modules/jquery-ui/ui/widgets/mouse.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/draggable */ "./node_modules/jquery-ui/ui/widgets/draggable.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/droppable */ "./node_modules/jquery-ui/ui/widgets/droppable.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/resizable */ "./node_modules/jquery-ui/ui/widgets/resizable.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/selectable */ "./node_modules/jquery-ui/ui/widgets/selectable.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/sortable */ "./node_modules/jquery-ui/ui/widgets/sortable.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/effect */ "./node_modules/jquery-ui/ui/effect.js");

// additional core plugins
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/data */ "./node_modules/jquery-ui/ui/data.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/disable-selection */ "./node_modules/jquery-ui/ui/disable-selection.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/focusable */ "./node_modules/jquery-ui/ui/focusable.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/form-reset-mixin */ "./node_modules/jquery-ui/ui/form-reset-mixin.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/form */ "./node_modules/jquery-ui/ui/form.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/ie */ "./node_modules/jquery-ui/ui/ie.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/keycode */ "./node_modules/jquery-ui/ui/keycode.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/labels */ "./node_modules/jquery-ui/ui/labels.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/plugin */ "./node_modules/jquery-ui/ui/plugin.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/position */ "./node_modules/jquery-ui/ui/position.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/safe-active-element */ "./node_modules/jquery-ui/ui/safe-active-element.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/safe-blur */ "./node_modules/jquery-ui/ui/safe-blur.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/scroll-parent */ "./node_modules/jquery-ui/ui/scroll-parent.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/tabbable */ "./node_modules/jquery-ui/ui/tabbable.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/unique-id */ "./node_modules/jquery-ui/ui/unique-id.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/version */ "./node_modules/jquery-ui/ui/version.js");

// additional widgets
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/accordion */ "./node_modules/jquery-ui/ui/widgets/accordion.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/autocomplete */ "./node_modules/jquery-ui/ui/widgets/autocomplete.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/button */ "./node_modules/jquery-ui/ui/widgets/button.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/checkboxradio */ "./node_modules/jquery-ui/ui/widgets/checkboxradio.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/controlgroup */ "./node_modules/jquery-ui/ui/widgets/controlgroup.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/datepicker */ "./node_modules/jquery-ui/ui/widgets/datepicker.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/dialog */ "./node_modules/jquery-ui/ui/widgets/dialog.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/menu */ "./node_modules/jquery-ui/ui/widgets/menu.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/progressbar */ "./node_modules/jquery-ui/ui/widgets/progressbar.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/selectmenu */ "./node_modules/jquery-ui/ui/widgets/selectmenu.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/slider */ "./node_modules/jquery-ui/ui/widgets/slider.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/spinner */ "./node_modules/jquery-ui/ui/widgets/spinner.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/tabs */ "./node_modules/jquery-ui/ui/widgets/tabs.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-ui/ui/widgets/tooltip */ "./node_modules/jquery-ui/ui/widgets/tooltip.js");

// 3rd-party jquery-ui plugins
__webpack_require__(/*! ../../../../../node_modules/jquery-ui-treemap/js/jquery.ui.treemap */ "./node_modules/jquery-ui-treemap/js/jquery.ui.treemap.js");
__webpack_require__(/*! ../../../../../node_modules/jquery-sparkline/dist/jquery.sparkline */ "./node_modules/jquery-sparkline/dist/jquery.sparkline.js");
console.log('init: jquery-ui-js'); // eslint-disable-line no-console

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

},[["./src/main/assets/js/apps/onms-assets/index.js","vendor"]]]);
});
//# sourceMappingURL=onms-assets.js.map