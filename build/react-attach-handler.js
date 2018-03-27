(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["AttachHandler"] = factory(require("react"));
	else
		root["AttachHandler"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/AttachHandler */ \"./lib/AttachHandler.js\").default;\n\n//# sourceURL=webpack://AttachHandler/./index.js?");

/***/ }),

/***/ "./lib/AttachHandler.js":
/*!******************************!*\
  !*** ./lib/AttachHandler.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof2 = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\" ? function (obj) {\n    return typeof obj === \"undefined\" ? \"undefined\" : _typeof2(obj);\n} : function (obj) {\n    return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof2(obj);\n};\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactAddonsShallowCompare = __webpack_require__(/*! react-addons-shallow-compare */ \"./node_modules/react-addons-shallow-compare/index.js\");\n\nvar _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./lib/helpers.js\");\n\nvar helpers = _interopRequireWildcard(_helpers);\n\nfunction _interopRequireWildcard(obj) {\n    if (obj && obj.__esModule) {\n        return obj;\n    } else {\n        var newObj = {};if (obj != null) {\n            for (var key in obj) {\n                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n            }\n        }newObj.default = obj;return newObj;\n    }\n}\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n    if (!self) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof2(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof2(superClass)));\n    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n} //eslint-disable-line no-unused-vars\n\n\nvar defaultEventOptions = {\n    capture: false,\n    passive: false,\n    debounce: false,\n    throttle: false,\n    debounceDelay: 250,\n    throttleDelay: 250\n};\n\nvar addEventListener = helpers.addEventListener,\n    removeEventListener = helpers.removeEventListener,\n    passiveOptions = helpers.passiveOptions;\n\nvar mergeOptionsWithDefault = function mergeOptionsWithDefault(obj) {\n    return Object.assign({}, defaultEventOptions, obj);\n};\n\nvar getEventsArgs = function getEventsArgs(eventName, cb, opts) {\n    var args = [eventName, cb];\n    args.push(passiveOptions ? opts : opts.capture);\n    return args;\n};\n\n// Inspired from http://davidwalsh.name/javascript-debounce-function\nvar debounceFn = function debounceFn(cb, delay) {\n    var timeout = void 0;\n\n    return function () {\n        var context = this;\n        var args = arguments;\n\n        clearTimeout(timeout);\n        timeout = setTimeout(function () {\n            cb.apply(context, args);\n        }, delay);\n    };\n};\n// Inspired from underscore throttle https://github.com/jashkenas/underscore/blob/master/underscore.js\nvar throttleFn = function throttleFn(cb, delay) {\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    var context = void 0;\n    var args = void 0;\n    var result = void 0;\n\n    var timeout = null;\n    var previous = 0;\n\n    var _options$leading = options.leading,\n        leading = _options$leading === undefined ? true : _options$leading,\n        _options$trailing = options.trailing,\n        trailing = _options$trailing === undefined ? false : _options$trailing;\n\n    var later = function later() {\n        previous = !leading ? 0 : Date.now();\n        timeout = null;\n        result = cb.apply(context, args);\n        if (!timeout) {\n            context = args = null;\n        }\n    };\n\n    return function () {\n        context = this;\n        args = arguments;\n\n        var now = Date.now();\n        if (!previous && !leading) {\n            previous = now;\n        }\n\n        var remaining = wait - (now - previous);\n\n        if (remaining <= 0 || remaining > wait) {\n            if (timeout) {\n                clearTimeout(timeout);\n                timeout = null;\n            }\n\n            previous = now;\n            result = cb.apply(context, args);\n\n            if (!timeout) {\n                context = args = null;\n            }\n        } else if (!timeout && trailing) {\n            timeout = setTimeout(later, remaining);\n        }\n        return result;\n    };\n};\n\nvar switchOn = function switchOn(target, eventName, cb) {\n    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n\n    // Only supports modern browsers Sorry IE10- users\n    if (addEventListener) {\n        var _opts$debounce = opts.debounce,\n            debounce = _opts$debounce === undefined ? false : _opts$debounce,\n            _opts$throttle = opts.throttle,\n            throttle = _opts$throttle === undefined ? false : _opts$throttle,\n            debounceDelay = opts.debounceDelay,\n            throttleDelay = opts.throttleDelay;\n\n        var handler = cb;\n        if (debounce) {\n            handler = debounceFn(cb, debounceDelay);\n        } else if (throttle) {\n            handler = throttleFn(cb, throttleDelay);\n        }\n\n        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply\n        target.addEventListener.apply(target, getEventsArgs(eventName, handler, opts));\n    }\n};\n\nvar switchOff = function switchOff(target, eventName, cb) {\n    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n\n    // Only supports modern browsers Sorry IE10- users\n    if (removeEventListener) {\n        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply\n        target.removeEventListener.apply(target, getEventsArgs(eventName, cb, opts));\n    }\n};\n\nvar AttachHandler = function (_Component) {\n    _inherits(AttachHandler, _Component);\n\n    function AttachHandler() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, AttachHandler);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AttachHandler.__proto__ || Object.getPrototypeOf(AttachHandler)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.componentDidMount = function () {\n            _this.addEventListener();\n        }, _this.shouldComponentUpdate = function (nextProps) {\n            return (0, _reactAddonsShallowCompare2.default)({\n                props: _this.props,\n                state: _this.state\n            }, nextProps, _this.state);\n        }, _this.componentWillUpdate = function () {\n            _this.addEventListener();\n        }, _this.componentDidUpdate = function () {\n            _this.addEventListener();\n        }, _this.componentWillUnmount = function () {\n            _this.removeEventListener();\n        }, _this.addEventListener = function () {\n            _this.setListeners(switchOn);\n        }, _this.removeEventListener = function () {\n            _this.setListeners(switchOff);\n        }, _this.setListeners = function (switchOnOff) {\n            var _this$props = _this.props,\n                target = _this$props.target,\n                events = _this$props.events;\n\n            if (target) {\n                var element = void 0;\n\n                if (typeof target === 'string') {\n                    element = window[target];\n                }\n\n                Object.keys(events).forEach(function (event) {\n                    var value = events[event];\n                    var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);\n                    var isObject = valueType === 'object';\n                    var isFunction = valueType === 'function';\n\n                    // This check is to make sure we have the right typeof value\n                    if (!isObject && !isFunction) {\n                        return;\n                    }\n                    var eventHandler = void 0,\n                        options = void 0;\n\n                    if (isObject) {\n                        var _value$handler = value.handler,\n                            handler = _value$handler === undefined ? null : _value$handler,\n                            _value$opts = value.opts,\n                            opts = _value$opts === undefined ? {} : _value$opts;\n\n                        if (handler) {\n                            eventHandler = handler;\n                        }\n                        if (opts) {\n                            options = mergeOptionsWithDefault(opts);\n                        }\n                    } else {\n                        eventHandler = value;\n                    }\n\n                    if (eventHandler) {\n                        switchOnOff(element, event, eventHandler, options);\n                    }\n                });\n            }\n        }, _this.render = function () {\n            return _this.props.children || null;\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    return AttachHandler;\n}(_react.Component);\n\nAttachHandler.propTypes = {\n    // The Component will take one child\n    children: _propTypes2.default.element,\n    // DOM target to listen to\n    target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired,\n    events: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]).isRequired\n};\nexports.default = AttachHandler;\n\n//# sourceURL=webpack://AttachHandler/./lib/AttachHandler.js?");

/***/ }),

/***/ "./lib/helpers.js":
/*!************************!*\
  !*** ./lib/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js\nvar canUseDom = exports.canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);\n\nvar addEventListener = exports.addEventListener = canUseDom && 'addEventListener' in window;\nvar removeEventListener = exports.removeEventListener = canUseDom && 'removeEventListener' in window;\n\nvar defineProperty = function defineProperty(o, p, attr) {\n    return Object.defineProperty(o, p, attr);\n};\n\n// Passive events\n// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js\nvar passiveOptions = exports.passiveOptions = function () {\n    var cache = null;\n    return function () {\n        if (cache !== null) {\n            return cache;\n        }\n        var passiveOptionsSupport = false;\n        try {\n            window.addEventListener('test', null, defineProperty({}, 'passive', {\n                get: function get() {\n                    passiveOptionsSupport = true;\n                }\n            }));\n        } catch (e) {} //eslint-disable-line no-empty\n\n        cache = passiveOptionsSupport;\n        return passiveOptionsSupport;\n    }();\n}();\n\n//# sourceURL=webpack://AttachHandler/./lib/helpers.js?");

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n * \n */\n\nfunction makeEmptyFunction(arg) {\n  return function () {\n    return arg;\n  };\n}\n\n/**\n * This function accepts and discards inputs; it has no side effects. This is\n * primarily useful idiomatically for overridable function endpoints which\n * always need to be callable, since JS lacks a null-call idiom ala Cocoa.\n */\nvar emptyFunction = function emptyFunction() {};\n\nemptyFunction.thatReturns = makeEmptyFunction;\nemptyFunction.thatReturnsFalse = makeEmptyFunction(false);\nemptyFunction.thatReturnsTrue = makeEmptyFunction(true);\nemptyFunction.thatReturnsNull = makeEmptyFunction(null);\nemptyFunction.thatReturnsThis = function () {\n  return this;\n};\nemptyFunction.thatReturnsArgument = function (arg) {\n  return arg;\n};\n\nmodule.exports = emptyFunction;\n\n//# sourceURL=webpack://AttachHandler/./node_modules/fbjs/lib/emptyFunction.js?");

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar validateFormat = function validateFormat(format) {};\n\nif (false) {}\n\nfunction invariant(condition, format, a, b, c, d, e, f) {\n  validateFormat(format);\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(format.replace(/%s/g, function () {\n        return args[argIndex++];\n      }));\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n}\n\nmodule.exports = invariant;\n\n//# sourceURL=webpack://AttachHandler/./node_modules/fbjs/lib/invariant.js?");

/***/ }),

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
/*!***********************************************!*\
  !*** ./node_modules/fbjs/lib/shallowEqual.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n * @typechecks\n * \n */\n\n/*eslint-disable no-self-compare */\n\n\n\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\n\n/**\n * inlined Object.is polyfill to avoid requiring consumers ship their own\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n */\nfunction is(x, y) {\n  // SameValue algorithm\n  if (x === y) {\n    // Steps 1-5, 7-10\n    // Steps 6.b-6.e: +0 != -0\n    // Added the nonzero y check to make Flow happy, but it is redundant\n    return x !== 0 || y !== 0 || 1 / x === 1 / y;\n  } else {\n    // Step 6.a: NaN == NaN\n    return x !== x && y !== y;\n  }\n}\n\n/**\n * Performs equality by iterating through keys on an object and returning false\n * when any key has values which are not strictly equal between the arguments.\n * Returns true when the values of all keys are strictly equal.\n */\nfunction shallowEqual(objA, objB) {\n  if (is(objA, objB)) {\n    return true;\n  }\n\n  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {\n    return false;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  // Test for A's keys different from B.\n  for (var i = 0; i < keysA.length; i++) {\n    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = shallowEqual;\n\n//# sourceURL=webpack://AttachHandler/./node_modules/fbjs/lib/shallowEqual.js?");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ \"./node_modules/fbjs/lib/emptyFunction.js\");\nvar invariant = __webpack_require__(/*! fbjs/lib/invariant */ \"./node_modules/fbjs/lib/invariant.js\");\nvar ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n\nmodule.exports = function() {\n  function shim(props, propName, componentName, location, propFullName, secret) {\n    if (secret === ReactPropTypesSecret) {\n      // It is still safe when called from React.\n      return;\n    }\n    invariant(\n      false,\n      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n      'Use PropTypes.checkPropTypes() to call them. ' +\n      'Read more at http://fb.me/use-check-prop-types'\n    );\n  };\n  shim.isRequired = shim;\n  function getShim() {\n    return shim;\n  };\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.\n  var ReactPropTypes = {\n    array: shim,\n    bool: shim,\n    func: shim,\n    number: shim,\n    object: shim,\n    string: shim,\n    symbol: shim,\n\n    any: shim,\n    arrayOf: getShim,\n    element: shim,\n    instanceOf: getShim,\n    node: shim,\n    objectOf: getShim,\n    oneOf: getShim,\n    oneOfType: getShim,\n    shape: getShim,\n    exact: getShim\n  };\n\n  ReactPropTypes.checkPropTypes = emptyFunction;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n\n//# sourceURL=webpack://AttachHandler/./node_modules/prop-types/factoryWithThrowingShims.js?");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {\n  // By explicitly using `prop-types` you are opting into new production behavior.\n  // http://fb.me/prop-types-in-prod\n  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ \"./node_modules/prop-types/factoryWithThrowingShims.js\")();\n}\n\n\n//# sourceURL=webpack://AttachHandler/./node_modules/prop-types/index.js?");

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//# sourceURL=webpack://AttachHandler/./node_modules/prop-types/lib/ReactPropTypesSecret.js?");

/***/ }),

/***/ "./node_modules/react-addons-shallow-compare/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-addons-shallow-compare/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n * @providesModule shallowCompare\n */\n\n\n\nvar shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ \"./node_modules/fbjs/lib/shallowEqual.js\");\n\n/**\n * Does a shallow comparison for props and state.\n * See ReactComponentWithPureRenderMixin\n * See also https://facebook.github.io/react/docs/shallow-compare.html\n */\nfunction shallowCompare(instance, nextProps, nextState) {\n  return (\n    !shallowEqual(instance.props, nextProps) ||\n    !shallowEqual(instance.state, nextState)\n  );\n}\n\nmodule.exports = shallowCompare;\n\n\n//# sourceURL=webpack://AttachHandler/./node_modules/react-addons-shallow-compare/index.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://AttachHandler/external_%7B%22root%22:%22React%22,%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ });
});