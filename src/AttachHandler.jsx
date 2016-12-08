import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import * as helpers from './helpers';

const defaultEventOptions = {
    capture: false,
    passive: false
};

const {addEventListener, removeEventListener, passiveOptions} = helpers;

const mergeOptionsWithDefault = (obj) => {
    return Object.assign({}, defaultEventOptions, obj);
};

const getEvents = (eventName, cb, opts) => {
    const args = [eventName, cb];
    args.push(passiveOptions
        ? opts
        : opts.capture);
    return args;
};

// Inspired from http://davidwalsh.name/javascript-debounce-function
const debounce = (cb, delay) => {
    let timeout;

    return function(){
        let context = this;
        let args = arguments;

        clearTimeout(timeout);
        timeout = setTimeoue(function(){
            cb.apply(context, args);
        }, delay);
    };
};

const switchOn = (target, eventName, cb, opts) => {
    console.log(arguments);
    // Only supports modern browsers
    // Sorry IE10- users
    if (addEventListener) {
        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply
        target.addEventListener.apply(target, getEvents(eventName, cb, opts));
    }
};

const switchOff = (target, eventName, cb, opts) => {
    // Only supports modern browsers
    // Sorry IE10- users
    if (removeEventListener) {
        // http://stackoverflow.com/questions/2891096/addeventlistener-using-apply
        target.removeEventListener.apply(target, getEvents(eventName, cb, opts));
    }
};

class AttachHandler extends Component {
    static propTypes = {
        // The Component will take one child
        children: PropTypes.element,
        // DOM target to listen to
        target: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    };

    state = {};

    componentDidMount = () => {
        this.addEventListener();
    };

    shouldComponentUpdate = (nextProps) => {
        return shallowCompare({
            props: this.props,
            state: this.state
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

    removeEventListener = () => {};

    setListeners = (switchOnOff) => {
        const {target, events} = this.props;

        if (target) {
            let element;

            if (typeof target === 'string') {
                element = window[target];
            }

            Object.keys(events).forEach((event) => {
                const value = events[event];
                const valueType = typeof value;
                const isObject = valueType === 'object';
                const isFunction = valueType === 'function';

                // This check is to make sure we have the right typeof value
                if (!isObject && !isFunction)
                    return;
                let eventHandler,
                    options;

                if (isObject) {
                    let {
                        handler: eventHandler = null,
                        opts: options = {}
                    } = value;
                } else {
                    handler = value;
                }

                switchOnOff(target, event, handler, mergeOptionsWithDefault(options
                    ? options
                    : {}));
            });
        }
    };

    render = () => {
        return this.props.children || null;
    };
}

export default AttachHandler;
