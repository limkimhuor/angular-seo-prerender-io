'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';
console.log('the env is ' + ENV)

module.exports = function makeWebpackConfig() {
  var config = {};
  config.entry = {
    app: './src/app/app.js'
  };
  config.output = {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  };
  config.devtool = 'eval-source-map';

  // Initialize module
  config.module = {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [
          {loader: 'css-loader', query: {sourceMap: true}},
          {loader: 'postcss-loader'}
        ],
      })
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader?sourceMap',
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader'
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  };
  config.plugins = [
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/i,
      options: {
        postcss: {
          plugins: [autoprefixer]
        }
      }
    })
  ];

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/public/public.html',
      inject: 'body',
      filename: "public.html"
    }), new ExtractTextPlugin({filename: 'css/[name].css', disable: !isProd, allChunks: true})
  )

  config.devServer = {
    contentBase: './src/public',
    stats: 'minimal'
  };

  return config;
}();
