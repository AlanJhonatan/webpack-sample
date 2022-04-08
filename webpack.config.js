const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [ '@babel/polyfill', path.resolve('src', 'index.ts')],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
  },
  devServer: {
    static: {
      directory: path.resolve('public'),
    },
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', 'index.html')
    }), 
  ],
};