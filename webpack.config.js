const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', '*.js'),
  output:{
    path: path.join(__dirname, 'dist'),
    filename: "bundles.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: "index.html"
    })
  ],
  module: {
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8000,
    static: path.join(__dirname, 'dist')
  }
}