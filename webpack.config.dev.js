const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const path = require('path');

module.exports = (env) => ({
  ...webpackConfig,
  devtool: 'eval-source-map',
  mode: 'development',
  plugins: [
    ...webpackConfig.plugins,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      env,
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ],
});