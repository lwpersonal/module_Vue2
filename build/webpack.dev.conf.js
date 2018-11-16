'use strict'

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(process.env.NODE_ENV)

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  mode: 'development',
  context: path.resolve(__dirname, '../'),
  entry: {
    app1: './src/pages/app1/index.js',
    app2: './src/pages/app2/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', 'less'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './app1/index.html',
      template: './src/pages/app1/index.html',
      inject: true,
      chunks: ['app1']
    }),
    new HtmlWebpackPlugin({
      filename: './app2/index.html',
      template: './src/pages/app2/index.html',
      inject: true,
      chunks: ['app2']
    }),
  ],
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

module.exports = webpackConfig

