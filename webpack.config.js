/* webpack import */
var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/* Export modules de info */
module.exports = {
  entry: "./app/conf/app.js",
  output: {
    path: path.join(__dirname, 'public/dist/js'),
    filename: "bundle.min.js",
    publicPath: "/"
  },

  plugins: process.env.NODE_ENV === 'production'
    ? [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
    : [],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  }
};
