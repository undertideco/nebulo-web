const path = require('path');

// PostCSS processors
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const precss = require('precss');
const lost = require('lost');
const mqpacker = require('css-mqpacker');
const fontmagician = require('postcss-font-magician')({hosted : './src/fonts'});

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.tsx',
  ],
  output: {
    path: path.resolve('dist'),
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'typings-for-css-modules-loader', options: { modules: true, namedExport: true } },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [autoprefixer, precss, cssnext, lost, mqpacker, fontmagician];
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'img-loader',
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['raw-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },
  plugins: [],
};
