const path = require('path');
var fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const PATHS = require('./paths');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        PATHS.index
    ],
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot', 'babel'],
                include: PATHS.src
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                loader: combineLoaders([
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        query: {
                            sourceMap: true,
                            includePaths: [
                                'src'
                            ]
                        }
                    }
                ])
            },
            { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}