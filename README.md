# React Attach Handler

A very simple and intuitive way of attaching events to DOM or components in ReactJS.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```code
npm install react-attach-handler --save
```

## Why?
This module provides a reactjs way to bind events to global `targets`. It uses native React lifecycle to bind and unbind events.

## Props
* `children`, Element, default `null`.
* `target`, (required) String or Object, default `''`.
* `events`, (required) Function or Object,
    * If events is an Object its accepts `capture`, `passive` `debounce` & `debounceDelay` as options.

## Usage
[`example/src/app.jsx`](https://github.com/sylvesteraswin/react-attach-handler/tree/master/example/src)
```code
import AttachHandler from '../../lib/AttachHandler';

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
                        resize: this.handleMouseMove,
                    }}
                    />
            </section>
        );
    }
}
```

## License

MIT
