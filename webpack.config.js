const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [{loader: 'babel-loader'}]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, 'client', 'src', 'index.html')})],
};