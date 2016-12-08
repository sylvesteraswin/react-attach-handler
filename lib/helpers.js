Object.defineProperty(exports, "__esModule", {
    value: true
});
// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
var canUseDom = exports.canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = canUseDom && 'addEventListener' in window;
var removeEventListener = exports.removeEventListener = canUseDom && 'removeEventListener' in window;

var defineProperty = function defineProperty(o, p, attr) {
    return Object.defineProperty(o, p, attr);
};

// Passive events
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOptions = exports.passiveOptions = function () {
    var cache = null;
    return function () {
        if (cache !== null) {
            return cache;
        }
        var passiveOptionsSupport = false;
        try {
            window.addEventListener('test', null, defineProperty({}, 'passive', {
                get: function get() {
                    passiveOptionsSupport = true;
                }
            }));
        } catch (e) {} //eslint-disable-line no-empty

        cache = passiveOptionsSupport;
        return passiveOptionsSupport;
    }();
}();