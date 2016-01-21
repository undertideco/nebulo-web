// PostCSS processors
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var lost = require('lost');
var mqpacker = require('css-mqpacker');


module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  },
  postcss: function() {
    return [autoprefixer, precss, cssnext, lost, mqpacker];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
