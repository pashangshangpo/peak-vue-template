/**
 * @file webpack common config
 * @author xiaozhihua
 * @date 2018-11-22 16:52:48
 */

const path = require('path')

const resolve = (...arg) => {
  return path.resolve('.', ...arg)
}

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: resolve('build'),
    filename: '[name].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '$api': resolve('src/api'),
      '$common': resolve('src/common'),
      '$components': resolve('src/components'),
      '$store': resolve('src/store'),
      '$reducers': resolve('src/store/reducers'),
      '$actions': resolve('src/store/actions'),
      '$router': resolve('src/router'),
      '$style': resolve('src/style'),
      '$svg': resolve('src/svg')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)/,
        include: [
          resolve('src')
        ],
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'image/[name].[hash].[ext]',
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.svg/,
        include: [
          resolve('src')
        ],
        exclude: /(node_modules|bower_components)/,
        use: ['svg-sprite-loader']
      }
    ]
  },
  plugins: [
  ]
}
