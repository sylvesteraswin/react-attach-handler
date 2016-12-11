import AttachHandler from '../AttachHandler';

const _classWrapper = (WrapperComponent, events = {}) => {
    // console.log('classwrapper', events);
    return class AttachHandlerDecorator extends AttachHandler {
        componentDidMount = () => {
            console.log('Loading from decorator');
        };

        render = () => {
            console.log(events);
            return <WrapperComponent {...{...this.props, events: events}}   />
        };
    }
};

const _decorator = (...args) => {
    console.log(...args);
    // return (wrapper) => {
        // return _classWrapper(wrapper, ...args)
    // };
};

const attachHandler = (...args) => {
    return _decorator(...args);
};

export default attachHandler;
