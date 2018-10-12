const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module:{
    rules: [
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env']
      }
    },
    {
      test: /\.scss$/,
      use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(
      {filename: 'style.css'}
    ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};