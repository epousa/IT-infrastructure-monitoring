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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onms-schedule-editor"],{

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

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./src/main/assets/js/lib/onms-schedule-editor/index.js","vendor"]]]);
});
//# sourceMappingURL=onms-schedule-editor.js.map