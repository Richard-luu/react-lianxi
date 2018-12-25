const path = require('path');
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  // 配置入口
  entry: './src/index.js',

  // 配置出口
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },

  // 使用插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  // 配置 webpack-dev-server 相关内容
  devServer: {
    disableHostCheck: true
  }
}
