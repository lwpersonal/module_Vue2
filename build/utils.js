'use strict'
const path = require('path')
const config = require('../config')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageConfig = require('../package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const appList = require('../config/app_list')

exports.assetsPath = function (_path, _pre = '') {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(_pre, assetsSubDirectory, _path)
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

const createHtmlWebpackConfig = (template, chunkname, pluginConfig) => {
  return new HtmlWebpackPlugin({
    filename: `./${chunkname}/index.html`,
    template,
    inject: true,
    favicon: '',
    chunks: [chunkname, `${chunkname}_manifest`, 'vendor', 'manifest'], // 必须放在数组中，单个字符串不生效
    ...pluginConfig
  })
}
// HtmlWebpackConfig 配置
exports.getAllHtmlWebpackConfig = (pluginConfig = {}) => {
  let res = []
  Object.keys(appList).map(key => {
    const item = appList[key]
    return res.push(createHtmlWebpackConfig(config.base.pathPrefix + item.html, key, pluginConfig))
  })
  return res
}
// 打包压缩公共配置
exports.getOptimizationConfig = () => {
  let res = {}
  Object.keys(appList).map(key => {
    return Object.assign(res, {
      [`${key}_manifest`]: {
        // test: /[\\/]src[\\/]/,
        test: new RegExp('[\\/]src[\\/]' + key + '[\\/]'), // 例如：/src/app1/
        name: `${key}_manifest`,
        minSize: 1,
        chunks: 'all',
        minChunks: 1
      }
    })
  })
  return res
}
// webpack 入口配置
exports.getEntryWebpackConfig = () => {
  let res = {}
  Object.keys(appList).map(key => {
    const item = appList[key]
    return Object.assign(res, { [key]: item.js })
  })
  return res
}
// historyApiFallback 配置
exports.getHistoryApiFallback = () => {
  let res = []
  Object.keys(appList).map(key => {
    res.push({
      from: new RegExp(`^\\/${key}`),
      to: `/${key}/index.html`
    })
  })
  return res
}
