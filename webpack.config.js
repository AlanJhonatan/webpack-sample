const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src',
  plugins: [ 
    new HtmlWebpackPlugin({
      hash: true,
      // filename: './src/index.html'
    }), 
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist'),
    clean: true,
  },
};