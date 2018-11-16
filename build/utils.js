'use strict'
const path = require('path')
const fs = require('fs-extra')
const slash = require('slash')
const config = require('./index')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageConfig = require('../package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pageList = require('./pageList')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return [MiniCssExtractPlugin.loader].concat(loaders)
    } else {
      return ['style-loader'].concat(loaders)
    }
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

// 系统提示弹窗
exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

const createHtmlWebpackConfig = (template, chunkname) => {
  const dev = process.env.NODE_ENV === 'production' ? false : true
  const pluginConfig = dev
    ? {
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      hash: true,
      chunksSortMode: 'dependency'
    } : { }

  return new HtmlWebpackPlugin({
    filename: `${dev ? config.dev.assetsRoot : config.build.assetsRoot}/${chunkname}/index.html`,
    template,
    inject: true,
    favicon: '',
    chunks: chunkname,
    ...pluginConfig
  })
}
// HtmlWebpackConfig 配置
exports.getAllHtmlWebpackConfig = () => {
  let res = []
  Object.keys(pageList).map(key => {
    const item = pageList[key]
    return res.push(createHtmlWebpackConfig(item.html, key))
  })
  return res
}
// webpack 入口配置
exports.getEntryWebpackConfig = () => {
  let res = {}
  Object.keys(pageList).map(key => {
    const item = pageList[key]
    return Object.assign(res, { [key]: item.js })
  })
  return res
}
