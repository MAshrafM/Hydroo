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
        presets: ['@babel/preset-env']
      }
    },
    {
      test: /\.scss$/,
      use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
    },
    {
      test: /\.(gif|png|jpg|svg)$/i,
      loader: 'image-webpack-loader',
      enforce: 'pre',
      options: {
        disable: true
      }
    },
    {
      test: /\.(gif|png|jpg|svg)$/i,
      exclude: /node_modules/,
      loader: 'url-loader'
    },
    {
      test: /\.(html)$/,
      use: [{
        loader: 'html-loader'
      }]
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