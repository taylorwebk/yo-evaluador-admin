const path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    },
    {
      test: /\.css?$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    },
    {
      test: /\.ttf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
