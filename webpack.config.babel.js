import * as path from 'path';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SystemBellPlugin from 'system-bell-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';

const pkh = require('./package.json');

const TARGET = process.env.npm_lifecycle_event || '';
const ROOT_PATH = __dirname;
const config = {
    paths: {
        build: path.join(ROOT_PATH, 'build'),
        src: path.join(ROOT_PATH, 'src'),
        example: path.join(ROOT_PATH, 'example'),
    },
    filename: `${pkg.name}.js`,
    library: pnk.moduleName,
};

process.env.BASE_ENV = TARGET;

const common = {
    resolve: {
        extensions: ['', 'js', 'jsx'],
    },
    module: {
        preLoader: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: [
                    config.paths.build,
                    config.paths.example,
                ],
            },
        ],
        loaders: [
            {
                test: /\.md$/,
                loaders: ['catalog/lib/loader', 'raw'],
            }, {
                test: /\.json$/,
                loader: 'json',
                include: path.join(ROOT_PATH, 'package.json'),
            },
        ],
        plugins: [
            new SystemBellPlugin()
        ],
    },
};

const siteCommon = {
    plugins: [
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'), //eslint-disable-line global-require
            inject: false,
            mobile: true,
            title: pkg.name,
            appMountId: 'app',
        }),
        new webpack.DefinePlugin({
            NAME: JSON.stringify(pkg.name),
            VERSION: JSON.stringify(pkg.version),
        }),
    ],
};

if (TARGET === 'start') {
    module.exports = merge(common, siteCommon, {
        devtool: 'eval-source-map',
        entry: {
            example: [config.pats.example],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"',
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
        module: {
            loaders: [
                {
                    test: /.jsx?$/,
                    loaders: ['babel?cacheDirectory'],
                    include: [
                        config.paths.example,
                        config.path.src,
                    ],
                },
            ],
        },
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            host: process.env.HOST || '0.0.0.0',
            port: process.env.PORT || 4002,
            stats: 'error-only',
        },
    });
}

if (TARGET === 'gh-pages' || TARGET === 'gh-pages:stats') {
    module.exports = merge(common, siteCommon, {
        entry: {
            app: config.paths.example,
            vendors: [
                'react',
                'react-dom',
            ],
        },
        output: {
            path: './gh-pages',
            filename: '[name].[chunkhash].js',
            chunkFilename: '[chunkhash].js',
        },
        plugins: [
            new CleanWebpackPlugin(['gh-pages'], {
                vebose: false,
            }),
            new ExtractTextPlugin('[name].[chunkhash].css'),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"',
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
            }),
            new webpack.optimize.CommonsChunkPlugin(
                'vendor',
                '[name].[chunkhash].js',
            ),
        ],
        module: {
            loaders: [
                {
                    test: /.jsx?$/,
                    loaders: ['babel'],
                    include: [
                        config.paths.example,
                        config.path.src,
                    ],
                },
            ],
        },
    });
}

const buildCommon = {
    devtool: 'source-map',
    output: {
        path: configs.paths.build,
        libraryTarget: 'umd',
        library: config.library,
    },
    entry: config.paths.src,
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React',
        },
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['babel'],
                include: config.path.src,
            },
        ],
    },
    plugins: [
        new SystemBellPlugin(),
    ],
};

if (TARGET === 'build') {
    module.exports = merge(buildCommon, {
        output: {
            filename: `${config.filename}.js`,
        },
    });
}

if (TARGET === 'build:min') {
    module.exports = merge(buildCommon, {
        output: {
            filename: `${config.filename}.min.js`,
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false,
                },
                compress: {
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                },
                sourceMap: true,
            }),
        ],
    });
}

if (!TARGET) {
    module.exports = common;
}
