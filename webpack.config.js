const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';
const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/dist';

module.exports = {
  entry: [
    SRC_DIR + '/index.jsx'
  ],
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.(eot|ttf|png|jpg|jpeg|gif|svg|woff|woff2)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: 'images/[name].[ext]',
                  },
              },
          ],
      },
      {
        test: /\.js|\.jsx|\.es6$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
        ],
    },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
        'sass-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                query: {
                    modules: true,
                    sourceMap: false,
                    importLoaders: 2,
                    localIdentName: '[local]',
                },
            },
            {
                loader: 'less-loader',
                options: {
                    sourceMap: false,
                    modifyVars: {
                        '@primary-color': '#fdae26',
                        '@border-radius-base': '4px',
                        '@text-color': '#9a9fa9',
                        '@heading-color': '#484848',
                        '@text-color-secondary': '#c3c9d5',
                        '@border-color-base': '#ebedf0',
                        '@link-color': '#fdae26',
                        '@font-family': "'montserrat', sans-serif !important",
                    },
                },
            },
        ],
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {minimize: true}
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'es6', '.css', '.scss'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  devServer: {
    historyApiFallback: true,
  }
};
