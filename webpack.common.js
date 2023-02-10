const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/app/index.js'),
    worker: path.resolve(__dirname, 'src/worker.js'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Markup',
      filename: 'index.html',
      template: 'src/app/template.html',
      inject: 'body',
      excludeChunks: ['src/worker'],
    }),
  ],
};
