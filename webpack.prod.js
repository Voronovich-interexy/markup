const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv').config();

module.exports = merge(common, {
  mode: process.env.PROD_ENV,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name][contenthash].js',
    clean: true,
  },
  devtool: 'source-map',
});
