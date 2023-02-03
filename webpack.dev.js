const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv').config();

module.exports = merge(common, {
  mode: process.env.DEV_ENV,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
});
