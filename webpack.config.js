const path = require('path');

module.exports = {
  entry: [    
    './app/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          include: path.join(__dirname, 'app'),
          exclude: /node_modules/,
          options: { presets: ['es2015'] }
        }],
      },

      // Loaders for other file types can go here
    ],
  }
}
