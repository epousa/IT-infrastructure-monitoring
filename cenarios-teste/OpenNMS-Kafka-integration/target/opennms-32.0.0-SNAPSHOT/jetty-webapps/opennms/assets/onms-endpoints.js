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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onms-endpoints"],{

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

/***/ "./src/main/assets/js/apps/onms-endpoints/grafana/grafana-modal.html":
/*!***************************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-endpoints/grafana/grafana-modal.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"endpointModal\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{endpoint.id === undefined ? \"Add\" : \"Edit\"}} Grafana Endpoint</h5>\n  </div>\n  <div class=\"modal-body\">\n    <form name=\"endpointForm\" novalidate>\n      <div class=\"form-group\">\n        <div ng-show=\"error.entity\" class=\"form-text text-danger\">{{error.entity}}</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"endpoint.uid\">Grafana ID</label>\n        <button class=\"btn btn-link text-secondary px-0\"\n                popover-trigger=\"'mouseenter'\"\n                uib-popover=\"A unique identifier of this endpoint. The identifier can only contain alpha numeric values as well as  - and _ but may not start with those. The full regular expression to match is: {{uidRegex}}\"><i class=\"fa fa-info-circle\"></i>\n        </button>\n        <input class=\"form-control\" type=\"text\" id=\"endpoint.uid\" name=\"uid\" placeholder=\"Unique Grafana ID\" ng-model=\"endpoint.uid\"\n               ng-class=\"{ 'is-invalid' : endpointForm.uid.$invalid || error.uid }\"\n               ng-pattern=\"uidRegex\"\n               required>\n        <div ng-show=\"endpointForm.uid.$invalid\" class=\"invalid-feedback\">Please provide a valid Grafana ID.</div>\n        <div ng-show=\"error.uid\" class=\"invalid-feedback\">{{error.uid}}</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"endpoint.description\">Endpoint Description</label>\n        <input class=\"form-control\" type=\"text\" id=\"endpoint.description\" name=\"description\" placeholder=\"Optional Label\" ng-model=\"endpoint.description\"\n               ng-class=\"{ 'is-invalid' : endpointForm.description.$invalid || error.description}\">\n        <div ng-show=\"error.description\" class=\"invalid-feedback\">{{error.description}}</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"endpoint.apiKey\">Grafana API Key</label>\n        <input class=\"form-control\" type=\"text\" id=\"endpoint.apiKey\" name=\"apiKey\" placeholder=\"API-KEY\" ng-model=\"endpoint.apiKey\"\n               ng-class=\"{ 'is-invalid' : endpointForm.apiKey.$invalid || error.apiKey}\" required>\n        <div ng-show=\"endpointForm.apiKey.$invalid\" class=\"invalid-feedback\">The API Key is required.</div>\n        <div ng-show=\"error.apiKey\" class=\"invalid-feedback\">{{error.apiKey}}</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"endpoint.url\">Grafana URL</label>\n        <input class=\"form-control\" type=\"text\" id=\"endpoint.url\" name=\"url\" placeholder=\"http://grafana:3000\" ng-model=\"endpoint.url\"\n               ng-class=\"{ 'is-invalid' : endpointForm.url.$invalid || error.url}\" required>\n        <div ng-show=\"endpointForm.url.$invalid\" class=\"invalid-feedback\">The url is required.</div>\n        <div ng-show=\"error.url\" class=\"invalid-feedback\">{{error.url}}</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"endpoint.connectTimeout\">Grafana Connect Timeout</label>\n        <button class=\"btn btn-link text-secondary px-0\"\n                popover-trigger=\"'mouseenter'\"\n                uib-popover=\"The connect timeout in seconds for this endpoint. If omitted a default timeout of {{defaultConnectTimeout}} seconds is applied.\"><i class=\"fa fa-info-circle\"></i>\n        </button>\n        <input class=\"form-control\" type=\"number\" id=\"endpoint.connectTimeout\" name=\"connectTimeout\" min=\"0\" max=\"9999\" ng-model=\"endpoint.connectTimeout\"\n               ng-class=\"{ 'is-invalid' : endpointForm.connectTimeout.$invalid || error.connectTimeout}\">\n        <div ng-show=\"endpointForm.connectTimeout.$invalid\" class=\"invalid-feedback\">Please provide a valid number &gt; 0.</div>\n        <div ng-show=\"error.connectTimeout\" class=\"invalid-feedback\">{{error.connectTimeout}}</div>\n      </div>\n      <div class=\"form-group form-row\">\n        <label class=\"col-form-label\" for=\"endpoint.readTimeout\">Grafana Read Timeout</label>\n        <button class=\"btn btn-link text-secondary px-0\"\n                popover-trigger=\"'mouseenter'\"\n                uib-popover=\"The read timeout in seconds for this endpoint. If omitted a default timeout of {{defaultReadTimeout}} seconds is applied.\"><i class=\"fa fa-info-circle\"></i>\n        </button>\n\n        <input class=\"form-control\" type=\"number\" id=\"endpoint.readTimeout\" name=\"readTimeout\" min=\"0\" max=\"9999\" ng-model=\"endpoint.readTimeout\"\n               ng-class=\"{ 'is-invalid' : endpointForm.readTimeout.$invalid || error.readTimeout}\">\n        <div ng-show=\"endpointForm.readTimeout.$invalid\" class=\"invalid-feedback\">Please provide a valid number &gt; 0.</div>\n        <div ng-show=\"error.readTimeout\" class=\"invalid-feedback\">{{error.readTimeout}}</div>\n      </div>\n    </form>\n\n    <button type=\"button\" class=\"btn btn-warning btn-sm\" id=\"verify-endpoint\" ng-click=\"verify()\" ng-disabled=\"endpointForm.$invalid\" title=\"Verify Connectivity\"><i class=\"fa fa-plug\"></i> Test Connection</button>\n    <span class=\"\" ng-if=\"verification.state === 'running'\"><i class=\"spinner-border spinner-border-sm\"></i> Connecting ...</span>\n    <span class=\"text-success\" ng-if=\"verification.state ==='success'\"><i class=\"fa fa-check\"></i> Connected</span>\n    <span class=\"text-danger\" ng-if=\"verification.state === 'failure'\"><i class=\"fa fa-exclamation-triangle\"></i> Could not connect</span>\n    <div ng-if=\"verification.result && verification.state === 'failure'\" class=\"alert mt-2\" ng-class=\"{'alert-danger': verification.state === 'failure'}\">\n      {{verification.result}}\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div>\n      <button type=\"button\" class=\"btn btn-primary\" id=\"save-endpoint\" ng-click=\"save()\" ng-disabled=\"endpointForm.$invalid\">{{buttonName}}</button>\n      <button type=\"button\" class=\"btn btn-secondary\" id=\"cancel-endpoint\" ng-click=\"cancel()\">Cancel</button>\n    </div>\n  </div>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-endpoints/grafana/grafana-modal.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-endpoints/grafana/grafana.html":
/*!*********************************************************************!*\
  !*** ./src/main/assets/js/apps/onms-endpoints/grafana/grafana.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"card-body\">\n    <div class=\"pull-right mb-2\">\n        <button id=\"action.addGrafanaEndpoint\" class=\"btn btn-sm btn-primary\" title=\"Add new endpoint\" ng-click=\"addNewEndpoint()\"><i class=\"fa fa-plus\"></i></button>\n        <button id=\"action.refreshGrafanaEndpoints\" class=\"btn btn-sm btn-primary\" title=\"Reload Page\" ng-click=\"refresh()\"><i class=\"fa fa-refresh\"></i></button>\n    </div>\n    <div>\n        <span ng-if=\"endpoints.length == 0\" class=\"ml-2 text-muted\">No data available</span>\n        <table ng-if=\"endpoints.length > 0\" class=\"table table-sm table-striped\">\n            <thead>\n            <tr>\n                <th>Grafana ID</th>\n                <th>URL</th>\n                <th>API Key</th>\n                <th>Description</th>\n                <th>Connect Timeout</th>\n                <th>Read Timeout</th>\n                <th>Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"endpoint in endpoints\" data-id=\"{{endpoint.id}}\">\n                <td>{{endpoint.uid}}</td>\n                <td>{{endpoint.url}}</td>\n                <td>\n                    <span ng-show=\"endpoint.revealApiKey === true\">{{endpoint.apiKey}}</span>\n                    <span ng-show=\"endpoint.revealApiKey === false\">**********</span>\n                    <button id=\"action.revealApiKey.{{endpoint.id}}\" class=\"btn btn-link\" ng-click=\"endpoint.revealApiKey = !endpoint.revealApiKey\">\n                        <i ng-class=\"{'fa-eye': endpoint.revealApiKey === false, 'fa-eye-slash': endpoint.revealApiKey === true}\" class=\"fa\"></i>\n                    </button>\n                </td>\n                <td>{{endpoint.description}}</td>\n                <td>{{endpoint.connectTimeout}}</td>\n                <td>{{endpoint.readTimeout}}</td>\n                <td>\n                    <button id=\"action.delete.{{endpoint.id}}\"\n                            class=\"btn btn-danger btn-sm\"\n                            mwl-confirm\n                            title=\"Delete Endpoint\"\n                            message=\"Do you want to delete the Grafana Endpoint with url '{{endpoint.url}}' and UID '{{endpoint.uid}}'?\"\n                            on-confirm=\"deleteEndpoint(endpoint)\"\n                            placement=\"left\"\n                            confirm-button-type=\"danger\"\n                            cancel-button-type=\"secondary\"\n                            confirm-text=\"Yes\"\n                            cancel-text=\"No\"><i class=\"fa fa-trash-o\"></i></button>\n                    <button id=\"action.edit.{{endpoint.id}}\"   class=\"btn btn-secondary btn-sm\" ng-click=\"editEndpoint(endpoint)\"   title=\"Edit Endpoint\"   ><i class=\"fa fa-pencil\"></i></button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n        <div class=\"mt-2\">\n            <span ng-if=\"endpoints.length > 0\" class=\"text-muted\">{{endpoints.length}} Grafana Endpoint(s)</span>\n        </div>\n    </div>\n</div>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-endpoints/grafana/grafana.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-endpoints/index.html":
/*!***********************************************************!*\
  !*** ./src/main/assets/js/apps/onms-endpoints/index.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>\n<div class=\"alert alert-danger\" ng-if=\"globalError\">\n    <span>{{globalError}}</span>\n    <pre ng-show=\"globalErrorDetails\">{{globalErrorDetails}}</pre>\n</div>\n\n<div class=\"w-100\" ng-if=\"!globalError\">\n    <ul id=\"tabs\" class=\"nav nav-tabs\">\n        <li role=\"presentation\" ng-repeat=\"endpointType in types\" class=\"nav-item\">\n            <a ui-sref-active=\"active\" ui-sref=\"endpoints.{{endpointType.id}}\" title=\"{{endpointType.label}}\" data-name=\"{{endpointType.label}}\" class=\"nav-link\">\n                {{endpointType.label}} Endpoints\n            </a>\n        </li>\n    </ul>\n    <div class=\"card border-top-0\" ui-view>\n\n    </div>\n</div>\n</span>";
// Exports
var _module_exports = code;;
var path = '/home/epousa/dev/opennms/core/web-assets/src/main/assets/js/apps/onms-endpoints/index.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "./src/main/assets/js/apps/onms-endpoints/index.js":
/*!*********************************************************!*\
  !*** ./src/main/assets/js/apps/onms-endpoints/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! ../../../../../../node_modules/core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
var _stringify = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js"));
var _isArray = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array */ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js"));
var _forEach = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var angular = __webpack_require__(/*! ../../vendor/angular-js */ "./src/main/assets/js/vendor/angular-js.js");
__webpack_require__(/*! ../../lib/onms-http */ "./src/main/assets/js/lib/onms-http/index.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-ui-router/release/ui-router-angularjs */ "./node_modules/angular-ui-router/release/ui-router-angularjs.js");
__webpack_require__(/*! ../../../../../../node_modules/angular-bootstrap-confirm/dist/angular-bootstrap-confirm */ "./node_modules/angular-bootstrap-confirm/dist/angular-bootstrap-confirm.js");
var confirmPopoverTemplate = __webpack_require__(/*! ../onms-classifications//views/modals/popover.html */ "./src/main/assets/js/apps/onms-classifications/views/modals/popover.html");
var indexTemplate = __webpack_require__(/*! ./index.html */ "./src/main/assets/js/apps/onms-endpoints/index.html");
var grafanaTemplate = __webpack_require__(/*! ./grafana/grafana.html */ "./src/main/assets/js/apps/onms-endpoints/grafana/grafana.html");
var grafanaModalTemplate = __webpack_require__(/*! ./grafana/grafana-modal.html */ "./src/main/assets/js/apps/onms-endpoints/grafana/grafana-modal.html");
(function () {
  'use strict';

  var MODULE_NAME = 'onms.endpoints';
  angular.module(MODULE_NAME, ['angular-loading-bar', 'ngResource', 'ui.bootstrap', 'ui.router', 'onms.http', 'onms.default.apps', 'mwl.confirm']).run(["confirmationPopoverDefaults", function (confirmationPopoverDefaults) {
    confirmationPopoverDefaults.templateUrl = confirmPopoverTemplate;
  }]).config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);
  }]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('endpoints', {
      url: '/endpoints',
      controller: 'EndpointsController',
      templateUrl: indexTemplate
    }).state('endpoints.grafana', {
      url: '/grafana',
      controller: 'GrafanaEndpointsController',
      templateUrl: grafanaTemplate
    });
    $urlRouterProvider.otherwise('endpoints/grafana');
  }]).factory('GrafanaEndpointsService', ["$resource", function ($resource) {
    return $resource('rest/endpoints/grafana/:id', {
      id: '@id'
    }, {
      'get': {
        method: 'GET'
      },
      'create': {
        method: 'POST'
      },
      'update': {
        method: 'PUT'
      },
      'list': {
        method: 'GET',
        isArray: true
      },
      'delete': {
        method: 'DELETE',
        params: {
          id: -1 /* force to -1 to prevent accidentally deleting all endpoints */
        }
      },
      'verify': {
        method: 'POST',
        params: {} /* resets id */,
        url: 'rest/endpoints/grafana/verify'
      }
    });
  }]).controller('EndpointsController', ['$scope', function ($scope) {
    $scope.globalError = undefined;
    $scope.types = [{
      id: 'grafana',
      label: 'Grafana'
    }];
    $scope.handleGlobalError = function (errorResponse) {
      console.log("An unexpected error occurred", errorResponse);
      $scope.globalError = "An unexpected error occurred: " + errorResponse.statusText + "(" + errorResponse.status + ")";
      $scope.globalErrorDetails = (0, _stringify.default)(errorResponse, null, 2);
    };
  }]).controller('GrafanaEndpointsController', ['$scope', '$http', '$uibModal', 'GrafanaEndpointsService', function ($scope, $http, $uibModal, GrafanaEndpointsService) {
    $scope.refresh = function () {
      $scope.endpoints = [];
      GrafanaEndpointsService.list(function (response) {
        if (response && (0, _isArray.default)(response)) {
          var _context;
          $scope.endpoints = response;
          (0, _forEach.default)(_context = $scope.endpoints).call(_context, function (item) {
            item.revealApiKey = false;
          });
        }
      }, function (response) {
        $scope.handleGlobalError(response);
      });
    };
    $scope.openModal = function (_endpoint) {
      return $uibModal.open({
        backdrop: false,
        controller: 'GrafanaEndpointModalController',
        templateUrl: grafanaModalTemplate,
        size: 'lg',
        resolve: {
          endpoint: function endpoint() {
            return _endpoint;
          }
        }
      });
    };
    $scope.deleteEndpoint = function (deleteMe) {
      GrafanaEndpointsService.delete({
        id: deleteMe.id
      } /* we only need the id */, function (response) {
        $scope.refresh();
      }, function (response) {
        $scope.handleGlobalError(response);
      });
    };
    $scope.editEndpoint = function (endpoint) {
      var clone = angular.copy(endpoint);
      var modalInstance = $scope.openModal(clone);
      modalInstance.result.then(function () {
        $scope.refresh();
      }, function () {
        $scope.refresh();
      });
    };
    $scope.addNewEndpoint = function () {
      var modalInstance = $scope.openModal();
      modalInstance.closed.then(function () {
        $scope.refresh(); // Success
      }, function () {
        $scope.refresh(); // Failure
      });
    };

    $scope.refresh();
  }]).controller('GrafanaEndpointModalController', ['$scope', '$uibModalInstance', '$sce', 'GrafanaEndpointsService', 'endpoint', function ($scope, $uibModalInstance, $sce, GrafanaEndpointsService, endpoint) {
    $scope.uidRegex = '[a-zA-Z0-9]+[a-zA-Z0-9_-]*';
    $scope.endpoint = endpoint || {
      revealApiKey: false
    };
    $scope.buttonName = $scope.endpoint.id ? 'Update' : 'Create';
    $scope.verification = {
      state: undefined,
      result: undefined
    };
    $scope.error = {};
    $scope.defaultReadTimeout = 30;
    $scope.defaultConnectTimeout = 30;
    var handleErrorResponse = function handleErrorResponse(response) {
      if (response.status === 400 && response.data) {
        var errorObject = response.data;
        if (errorObject.context && errorObject.message) {
          $scope.error[errorObject.context] = errorObject.message;
        } else if (errorObject.context) {
          $scope.error[errorObject.context] = 'Invalid value';
        } else {
          $scope.error['entity'] = 'The endpoint is not valid. Details were not provided';
        }
      } else {
        $scope.handleGlobalError(response);
      }
    };
    $scope.verify = function () {
      $scope.verification = {
        state: 'running',
        result: undefined
      };
      var endpoint = {
        apiKey: $scope.endpoint.apiKey,
        url: $scope.endpoint.url,
        readTimeout: $scope.endpoint.readTimeout,
        connectTimeout: $scope.endpoint.connectTimeout
      };
      GrafanaEndpointsService.verify(endpoint, function (response) {
        $scope.verification.state = 'success';
      }, function (response) {
        $scope.verification.state = 'failure';
        if (response.status === 400 && response.data && response.data.message) {
          $scope.verification.result = $sce.trustAsHtml(response.data.message);
        } else {
          $scope.verification.result = 'Something went wrong';
        }
      });
    };
    $scope.save = function () {
      $scope.error = {};
      $scope.verification.state = undefined;
      $scope.verification.result = undefined;

      // Close modal afterwards
      var closeCallback = function closeCallback() {
        $uibModalInstance.close();
      };
      var object = {
        id: $scope.endpoint.id,
        uid: $scope.endpoint.uid,
        url: $scope.endpoint.url,
        apiKey: $scope.endpoint.apiKey,
        description: $scope.endpoint.description,
        connectTimeout: $scope.endpoint.connectTimeout,
        readTimeout: $scope.endpoint.readTimeout
      };
      if ($scope.endpoint.id) {
        GrafanaEndpointsService.update(object, closeCallback, handleErrorResponse);
      } else {
        GrafanaEndpointsService.create(object, closeCallback, handleErrorResponse);
      }
    };
    $scope.cancel = function () {
      $uibModalInstance.dismiss('Cancelled by User');
    };
  }]);
})();

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

},[["./src/main/assets/js/apps/onms-endpoints/index.js","vendor"]]]);
});
//# sourceMappingURL=onms-endpoints.js.map