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
                    target={window}
                    events={{
                        resize: this.handleMouseMove,
                    }}
                    />
            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
