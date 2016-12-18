/* eslint no-console: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AttachHandler from '../../lib/AttachHandler';

class App extends Component {
    handleMouseMove = (e) => {
        console.log(e);
        console.log(`mousemove ${this.iamhere} Hello`);
    };

    iamhere = 'Something is here';

    render = () => (
        <section className="app">
            <AttachHandler
                target="window"
                events={{
                    resize: {
                        handler: this.handleMouseMove,
                        opts: {
                            debounce: true,
                            debounceDelay: 100,
                        },
                    },
                    scroll: this.handleMouseMove,
                }}
            />
        </section>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
