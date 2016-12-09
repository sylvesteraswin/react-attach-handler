Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _helpers = require('./helpers');

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //eslint-disable-line no-unused-vars


var defaultEventOptions = {
    capture: false,
    passive: false,
    debounce: false
};

var addEventListener = helpers.addEventListener,
    removeEventListener = helpers.removeEventListener,
    passiveOptions = helpers.passiveOptions;


var mergeOptionsWithDefault = function mergeOptionsWithDefault(obj) {
    return Object.assign({}, defaultEventOptions, obj);
};

var getEventsArgs = function getEventsArgs(eventName, cb, opts) {
    var args = [eventName, cb];
    args.push(passiveOptions ? opts : opts.capture);
    return args;
};

// Inspired from http://davidwalsh.name/javascript-debounce-function
var debounceFn = function debounceFn(cb, delay) {
    var timeout = void 0;

    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timeout);
        timeout = setTimeout(function () {
            cb.apply(context, args);
        }, delay);
    };
};

var switchOn = function switchOn(target, eventName, cb, opts) {
    // Only supports modern browsers
    // Sorry IE10- users
    if (addEventListener) {
        var _opts$debounce = opts.debounce,
            debounce = _opts$debounce === undefined ? false : _opts$debounce;
        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply

        target.addEventListener.apply(target, getEventsArgs(eventName, debounce ? debounceFn(cb, 250) : cb, opts));
    }
};

var switchOff = function switchOff(target, eventName, cb, opts) {
    // Only supports modern browsers
    // Sorry IE10- users
    if (removeEventListener) {
        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply
        target.removeEventListener.apply(target, getEventsArgs(eventName, cb, opts));
    }
};

var AttachHandler = function (_Component) {
    _inherits(AttachHandler, _Component);

    function AttachHandler() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AttachHandler);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AttachHandler.__proto__ || Object.getPrototypeOf(AttachHandler)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.componentDidMount = function () {
            _this.addEventListener();
        }, _this.shouldComponentUpdate = function (nextProps) {
            return (0, _reactAddonsShallowCompare2.default)({
                props: _this.props,
                state: _this.state
            }, nextProps, _this.state);
        }, _this.componentWillUpdate = function () {
            _this.addEventListener();
        }, _this.componentDidUpdate = function () {
            _this.addEventListener();
        }, _this.componentWillUnMount = function () {
            _this.removeEventListener();
        }, _this.addEventListener = function () {
            _this.setListeners(switchOn);
        }, _this.removeEventListener = function () {
            _this.setListeners(switchOff);
        }, _this.setListeners = function (switchOnOff) {
            var _this$props = _this.props,
                target = _this$props.target,
                events = _this$props.events;


            if (target) {
                (function () {
                    var element = void 0;

                    if (typeof target === 'string') {
                        element = window[target];
                    }

                    Object.keys(events).forEach(function (event) {
                        var value = events[event];
                        var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
                        var isObject = valueType === 'object';
                        var isFunction = valueType === 'function';

                        // This check is to make sure we have the right typeof value
                        if (!isObject && !isFunction) {
                            return;
                        }
                        var eventHandler = void 0,
                            options = void 0;

                        if (isObject) {
                            var _value$handler = value.handler,
                                handler = _value$handler === undefined ? null : _value$handler,
                                _value$opts = value.opts,
                                opts = _value$opts === undefined ? {} : _value$opts;


                            if (handler) {
                                eventHandler = handler;
                            }
                            if (opts) {
                                options = mergeOptionsWithDefault(opts);
                            }
                        } else {
                            eventHandler = value;
                        }

                        if (eventHandler) {
                            switchOnOff(element, event, eventHandler, options);
                        }
                    });
                })();
            }
        }, _this.render = function () {
            return _this.props.children || null;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return AttachHandler;
}(_react.Component);

AttachHandler.propTypes = {
    // The Component will take one child
    children: _react.PropTypes.element,
    // DOM target to listen to
    target: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]).isRequired,
    events: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]).isRequired
};
exports.default = AttachHandler;