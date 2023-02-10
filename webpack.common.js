const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: path.resolve(__dirname, 'src/app/index.ts'),
    worker: path.resolve(__dirname, 'src/worker.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
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
      excludeChunks: ['src/worker.ts'],
    }),
  ],
};
