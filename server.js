const express = require('express');
const path = require('path');
const port = (process.env.PORT || 8080);
const app = express();
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, '../dist'));

app.use('/dist', publicPath);

// serve index file
app.get('/', function (_, res) { res.sendFile(indexPath) });


// add webpack dev server middleware
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.production.config.js');
  const compiler = webpack(config);
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
  app.use(webpackDevMiddleware(compiler, {
    stats: {colors: true},
  }));
}

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
