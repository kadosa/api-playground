const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    'webpack-hot-middleware/client',
    './app/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',    
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }]
  },
};
