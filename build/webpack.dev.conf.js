'use strict'

const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: [
    {
      app1: './src/pages/app1/index.js',
      app2: './src/pages/app2/index.js'
    }
  ],
  output: {
    filename: '[name].bundle.js'
  }
}