import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import AttachHandler from '../../lib/AttachHandler';

class App extends Component {
    handleMouseMove = () => {
        console.log('mousemove');
    };

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
                            }
                        },
                    }}
                    />
            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
