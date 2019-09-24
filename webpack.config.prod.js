const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const path = require('path');

module.exports = (env) => ({
  ...webpackConfig,
  mode: 'production',
  plugins: [
    ...webpackConfig.plugins,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.ejs'),
      env,
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
  ],
});
