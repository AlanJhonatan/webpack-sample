const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [ 
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve('public', 'index.html')
    }), 
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    clean: true,
  },
};