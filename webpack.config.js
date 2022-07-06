const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devmode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'production',
  entry: './Frontend/app.js',
  output: {
    path: path.join(__dirname, 'Backend/public'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          devmode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './Frontend/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css',
    }),
  ],
  devtool: 'source-map'
};
