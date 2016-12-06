// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
export const canUseDom = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

export const addEventListener = canUseDom && 'addEventListener' in window;
export const removeEventListener = canUseDom && 'removeEventListener' in window;

const defineProperty = (o, p, attr) => {
    return Object.defineProperty(o, p, attr);
}

// Passive events
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js

export const passiveOptions = (() => {
    let cache = null;
    return (() => {
        if (cache !== null) {
            return cache;
        }
        let passiveOptionsSupport = false;
        try {
            window.addEventListener('test', null, defineProperty({}, 'passive', {
                get() {
                    passiveOptionsSupport = true;
                }
            }));
        } catch(e) {} //eslint-disable-line no-empty

        cache = passiveOptionsSupport;
        return passiveOptionsSupport;
    })();
})();
