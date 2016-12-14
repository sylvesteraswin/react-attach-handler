import React, {Component, PropTypes} from 'react'; //eslint-disable-line no-unused-vars
import shallowCompare from 'react-addons-shallow-compare';
import * as helpers from './helpers';

const defaultEventOptions = {
    capture: false,
    passive: false,
    debounce: false,
    debounceDelay: 250,
};

const {addEventListener, removeEventListener, passiveOptions} = helpers;

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

const switchOn = (target, eventName, cb, opts = {}) => {
    // Only supports modern browsers Sorry IE10- users
    if (addEventListener) {
        const {
            debounce = false,
            debounceDelay,
        } = opts;
        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply
        target
            .addEventListener
            .apply(target, getEventsArgs(eventName, debounce
                ? debounceFn(cb, debounceDelay)
                : cb, opts));
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
        this.addEventListener();
    };

    componentDidUpdate = () => {
        this.addEventListener();
    };

    componentWillUnMount = () => {
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
