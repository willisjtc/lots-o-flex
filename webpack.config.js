const path = require('path');
const IcosetWebpackPlugin = require('@icoset/icoset-webpack-plugin');
const icons = require('./icons');
const Fiber = require('fibers');

const config = {};
config.entry = path.resolve(__dirname, 'src/index.js');
config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'build/'),
  publicPath: '/',
};

config.devtool = 'source-map';

config.resolve = {
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    shared: path.resolve(__dirname, 'src/shared/'),
  },
};

config.module = {
  rules: [
    {
      test: /\.js/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        {
          loader: 'kremling-inline-loader',
          options: {
            sass: {
              data: `@import "${path.resolve(
                __dirname,
                'src/styles/variables.scss'
              )}";`
            },
          },
        },
      ]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /main\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          implementation: require("sass"),
          fiber: Fiber,
        },
      }],
    },
    {
      test: /\.svg$/,
      exclude: /node_modules/,
      use: 'raw-loader',
    },
    {
      test: /\.(png|jpg)$/i,
      exclude: /node_modules/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 500000,
          },
        },
      ],
    },
  ],
};

config.plugins = [
  new IcosetWebpackPlugin({
    directory: path.resolve(
      __dirname,
      'node_modules/@fortawesome/fontawesome-pro/svgs'
    ),
    icons,
  }),
];

config.devServer = {
  index: 'index.html',
  contentBase: path.resolve(__dirname, 'src'),
  historyApiFallback: true,
  port: 8080,
};

module.exports = config;
