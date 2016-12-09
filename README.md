# react-attach-handler

React attach event handlers to targets.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install react-attach-handler --save
```

## Why?
THis module provides a reactjs way to bind events to global `targets`. It uses native React lifecycle to bind and unbind events.

## Props
* `children`, Element, default `null`.
* `target`, (required) String or Object, default `''`.
* `events`, (required) Function or Object,
    * If events its an Objet its accepts `capture`, `passive` & `debounce` as options.

## Usage
[`example/src/app.jsx`](https://github.com/sylvesteraswin/react-attach-handler/tree/master/example/src)
```js
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

## Dependencies

- [classnames](https://github.com/JedWatson/classnames): A simple utility for conditionally joining classNames together
- [react-addons-shallow-compare](https://github.com/facebook/react): This package provides the React shallowCompare add-on.

## Dev Dependencies

- [autoprefixer](https://github.com/postcss/autoprefixer): Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website
- [babel](https://github.com/babel/babel/tree/master/packages): Turn ES6 code into readable vanilla ES5 with source maps
- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-eslint](https://github.com/babel/babel-eslint): Custom parser for ESLint
- [babel-loader](https://github.com/babel/babel-loader): babel module loader for webpack
- [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform): Babel plugin to instrument React components with custom transforms
- [babel-plugin-transform-remove-strict-mode](https://github.com/genify/babel-plugin-transform-remove-strict-mode): remove &quot;use strict&quot; directive
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babel-preset-react](https://github.com/babel/babel/tree/master/packages): Babel preset for all React plugins.
- [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages): Babel preset for stage 0 plugins
- [babel-preset-stage-1](https://github.com/babel/babel/tree/master/packages): Babel preset for stage 1 plugins
- [babel-register](https://github.com/babel/babel/tree/master/packages): babel require hook
- [babelify](https://github.com/babel/babelify): Babel browserify transform
- [bootstrap](https://github.com/twbs/bootstrap): The most popular front-end framework for developing responsive, mobile first projects on the web.
- [browserify](https://github.com/substack/node-browserify): browser-side require() the node way
- [camelcase](https://github.com/sindresorhus/camelcase): Convert a dash/dot/underscore/space separated string to camelCase: foo-bar → fooBar
- [core-js](https://github.com/zloirock/core-js): Standard library
- [css-loader](https://github.com/webpack/css-loader): css loader module for webpack
- [cssnano](https://github.com/ben-eb/cssnano): A modular minifier, built on top of the PostCSS ecosystem.
- [del](https://github.com/sindresorhus/del): Delete files and folders
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-loader](https://github.com/MoOx/eslint-loader): eslint loader (for webpack)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): React specific linting rules for ESLint
- [express](https://github.com/expressjs/express): Fast, unopinionated, minimalist web framework
- [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin): Extract text from bundle into a file.
- [file-loader](https://github.com/webpack/file-loader): file loader module for webpack
- [gulp](https://github.com/gulpjs/gulp): The streaming build system
- [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer): Prefix CSS
- [gulp-babel](https://github.com/babel/gulp-babel): Use next generation JavaScript, today
- [gulp-cli](https://github.com/gulpjs/gulp-cli): Command line interface for gulp
- [gulp-concat](https://github.com/contra/gulp-concat): Concatenates files
- [gulp-connect](https://github.com/avevlad/gulp-connect): Gulp plugin to run a webserver (with LiveReload)
- [gulp-eslint](https://github.com/adametry/gulp-eslint): A gulp plugin for processing files with ESLint
- [gulp-filter](https://github.com/sindresorhus/gulp-filter): Filter files in a vinyl stream
- [gulp-livereload](https://github.com/vohof/gulp-livereload): Gulp plugin for livereload.
- [gulp-minify-css](https://github.com/sylvesteraswin/react-attach-handler.git): Minify css with clean-css.
- [gulp-postcss](https://github.com/postcss/gulp-postcss): PostCSS gulp plugin
- [gulp-rename](https://github.com/hparra/gulp-rename): Rename files
- [gulp-replace](https://github.com/lazd/gulp-replace): A string replace plugin for gulp
- [gulp-sass](https://github.com/dlmanning/gulp-sass): Gulp plugin for sass
- [gulp-uglify](https://github.com/terinjokes/gulp-uglify): Minify files with UglifyJS.
- [gulp-wrap](https://github.com/adamayres/gulp-wrap): A gulp plugin to wrap the stream contents with a template.
- [gulp-wrap-umd](https://github.com/phated/gulp-wrap-umd): Wrap files with an UMD wrapper
- [history](https://github.com/mjackson/history): Manage session history with JavaScript
- [html-loader](https://github.com/webpack/html-loader): html loader module for webpack
- [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin): Simplifies creation of HTML files to serve your webpack bundles
- [http-proxy](https://github.com/nodejitsu/node-http-proxy): HTTP proxying for the masses
- [json-loader](https://github.com/webpack/json-loader): json loader module for webpack
- [less](https://github.com/less/less.js): Leaner CSS
- [less-loader](https://github.com/webpack/less-loader): less loader module for webpack
- [node-sass](https://github.com/sass/node-sass): Wrapper around libsass
- [opn](https://github.com/sindresorhus/opn): A better node-open. Opens stuff like websites, files, executables. Cross-platform.
- [postcss-loader](https://github.com/postcss/postcss-loader): PostCSS loader for webpack
- [react](https://github.com/facebook/react): React is a JavaScript library for building user interfaces.
- [react-dom](https://github.com/facebook/react): React package for working with the DOM.
- [react-router](https://github.com/reactjs/react-router): A complete routing library for React
- [react-transform-hmr](https://github.com/gaearon/react-transform-hmr): A React Transform that enables hot reloading React classes using Hot Module Replacement API
- [run-sequence](https://github.com/OverZealous/run-sequence): Run a series of dependent gulp tasks in order
- [sass-loader](https://github.com/jtangelder/sass-loader): Sass loader for webpack
- [style-loader](https://github.com/webpack/style-loader): style loader module for webpack
- [task-dir](https://github.com/vn38minhtran/task-dir): Import gulp tasks from directory.
- [vinyl-buffer](https://github.com/hughsk/vinyl-buffer): Convert streaming vinyl files to use buffers
- [vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream): Use conventional text streams at the start of your gulp or vinyl pipelines
- [webpack](https://github.com/webpack/webpack): Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jade, coffee, css, less, ... and your custom stuff.
- [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware): Offers a dev middleware for webpack, which arguments a live bundle to a directory
- [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware): Webpack hot reloading you can attach to your own server
- [webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin): webpack plugin for generating asset manifests
- [webpack-stream](https://github.com/shama/webpack-stream): Run webpack as a stream


## License

MIT
