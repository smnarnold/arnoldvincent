/**
 * webpack.config.js
 * ===============
 */

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  cache: isDev,
  devtool: isDev ? 'inline-source-map' : false,
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader', // config file can be found at _frontend/.babelrc.js
        test: /\.js$/,
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  output: {
    filename: '[name].js',
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
  ],
};
