import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import * as helpers from './helpers';

const defaultEventOptions = {
    capture: false,
    passive: false,
};

const mergeOptionsWithDefault = (obj) => {
    return Object.assign({}, defaultEventOptions, obj);
};

class AttachEvent extends Component {
    static propTypes = {
        // The Component will take one child
        children: PropTypes.element,
        // DOM target to listen to
        target: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
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

    };

    removeEventListener = () => {

    };

    render = () => {
        return this.props.children || null;
    };
}

export default AttachEvent;
