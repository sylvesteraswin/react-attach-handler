Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AttachHandler2 = require('../AttachHandler');

var _AttachHandler3 = _interopRequireDefault(_AttachHandler2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _classWrapper = function _classWrapper(WrapperComponent) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // console.log('classwrapper', events);
    return function (_AttachHandler) {
        _inherits(AttachHandlerDecorator, _AttachHandler);

        function AttachHandlerDecorator() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, AttachHandlerDecorator);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AttachHandlerDecorator.__proto__ || Object.getPrototypeOf(AttachHandlerDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
                console.log('Loading from decorator');
            }, _this.render = function () {
                console.log(events);
                return React.createElement(WrapperComponent, _extends({}, _this.props, { events: events }));
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        return AttachHandlerDecorator;
    }(_AttachHandler3.default);
};

var _decorator = function _decorator() {
    var _console;

    (_console = console).log.apply(_console, arguments);
    // return (wrapper) => {
    // return _classWrapper(wrapper, ...args)
    // };
};

var attachHandler = function attachHandler() {
    return _decorator.apply(undefined, arguments);
};

exports.default = attachHandler;