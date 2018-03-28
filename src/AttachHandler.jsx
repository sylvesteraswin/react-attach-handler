import PropTypes from 'prop-types'; //eslint-disable-line no-unused-vars
import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import * as helpers from './helpers';

const defaultEventOptions = {
    capture: false,
    passive: false,
    debounce: false,
    throttle: false,
    debounceDelay: 250,
    throttleDelay: 250,
};

const {addEventListener, removeEventListener, passiveOptions, canUseDom} = helpers;

const mergeOptionsWithDefault = (obj) => {
    return Object.assign({}, defaultEventOptions, obj);
};

const getEventsArgs = (eventName, cb, opts) => {
    const args = [eventName, cb];
    args.push(passiveOptions
        ? opts
        : opts.capture);
    return args;
};

// Inspired from http://davidwalsh.name/javascript-debounce-function
const debounceFn = function (cb, delay) {
    let timeout;

    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timeout);
        timeout = setTimeout(function () {
            cb.apply(context, args);
        }, delay);
    };
};
// Inspired from underscore throttle https://github.com/jashkenas/underscore/blob/master/underscore.js
const throttleFn = function (cb, delay, options = {}) {
    let context;
    let args;
    let result;

    let timeout = null;
    let previous = 0;

    const {
        leading = true,
        trailing = false,
    } = options;

    const later = function() {
        previous = !leading ? 0 : Date.now();
        timeout = null;
        result = cb.apply(context, args);
        if (!timeout) {
            context = args = null;
        }
    };

    return function() {
        context = this;
        args = arguments;

        const now = Date.now();
        if (!previous && !leading) {
            previous = now;
        }

        const remaining = wait - (now - previous);

        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }

            previous = now;
            result = cb.apply(context, args);

            if (!timeout) {
                context = args = null;
            }
        } else if (!timeout && trailing) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};

const switchOn = (target, eventName, cb, opts = {}) => {
    // Only supports modern browsers Sorry IE10- users
    if (addEventListener) {
        const {
            debounce = false,
            throttle = false,
            debounceDelay,
            throttleDelay,
        } = opts;

        let handler = cb;
        if (debounce) {
            handler = debounceFn(cb, debounceDelay);
        } else if (throttle) {
            handler = throttleFn(cb, throttleDelay);
        }

        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply
        target
            .addEventListener
            .apply(target, getEventsArgs(eventName, handler, opts));
    }
};

const switchOff = (target, eventName, cb, opts = {}) => {
    // Only supports modern browsers Sorry IE10- users
    if (removeEventListener) {
        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply
        target
            .removeEventListener
            .apply(target, getEventsArgs(eventName, cb, opts));
    }
};

class AttachHandler extends Component {
    static propTypes = {
        // The Component will take one child
        children: PropTypes.element,
        // DOM target to listen to
        target: PropTypes
            .oneOfType([PropTypes.object, PropTypes.string])
            .isRequired,
        events: PropTypes
            .oneOfType([PropTypes.object, PropTypes.func])
            .isRequired,
    };

    state = {};

    componentDidMount = () => {
        this.addEventListener();
    };

    shouldComponentUpdate = (nextProps) => {
        return shallowCompare({
            props: this.props,
            state: this.state,
        }, nextProps, this.state);
    };

    componentWillUpdate = () => {
        canUseDom && this.addEventListener();
    };

    componentDidUpdate = () => {
        canUseDom && this.addEventListener();
    };

    componentWillUnmount = () => {
        this.removeEventListener();
    };

    addEventListener = () => {
        this.setListeners(switchOn);
    };

    removeEventListener = () => {
        this.setListeners(switchOff);
    };

    setListeners = (switchOnOff) => {
        const {target, events} = this.props;

        if (target) {
            let element;

            if (typeof target === 'string') {
                element = window[target];
            }

            Object
                .keys(events)
                .forEach((event) => {
                    const value = events[event];
                    const valueType = typeof value;
                    const isObject = valueType === 'object';
                    const isFunction = valueType === 'function';

                    // This check is to make sure we have the right typeof value
                    if (!isObject && !isFunction) {
                        return;
                    }
                    let eventHandler,
                        options;

                    if (isObject) {

                        const {
                            handler = null,
                            opts = {},
                        } = value;

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
        }
    };

    render = () => {
        return this.props.children || null;
    };
}

export default AttachHandler;
