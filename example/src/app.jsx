import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import AttachHandler, { attachHandler } from '../../lib/AttachHandler';

class App extends Component {
    handleMouseMove = () => {
        console.log(`mousemove ${this.iamhere} Hello`);
    };

    iamhere = 'Something is here';

    render = () => {
        return (
            <section
                className="app">
                <AttachHandler
                    target="window"
                    events={{
                        resize: {
                            handler: this.handleMouseMove,
                            opts: {
                                debounce: true,
                                debounceDelay: 100,
                            }
                        },
                    }}
                    />
            </section>
        );
    }
}

const eventHandler = {
    resize: {
        handler: () => {},
        opts: {
            debounce: true,
        }
    },
};

@attachHandler
class AppNew extends Component {
    render = () => {
        return (
            <section
                className="appnew">
                {this.props.title} World!
            </section>
        );
    };
}

ReactDOM.render(<AppNew title={"Hello"} />, document.getElementById('container'));
