import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';

import 'purecss/build/pure.css';

import Resize from './resize';

const documentationImports = {};
const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef
const pages = [
    {
        path: '/',
        title: 'Introduction',
        component: require('../README.md'), // eslint-disable-line global-require
    }, {
        path: 'resize',
        'title': 'Resize Event',
        component: Resize,
    },
];

const CatalogEl = (
    <Catalog
        useBrowserHistory
        imports={documentationImports}
        pages={pages}
        title={title}
        specimens={{
            javascript: props => <CodeSpecimen {...props} lang="javascript" />,
            js: props => <CodeSpecimen {...props} lang="javascript" />,
            jsx: props => <ReactSpecimen {...props} />,
        }}
    />
);

ReactDOM.render(CatalogEl, document.getElementById('app'));
