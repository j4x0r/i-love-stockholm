module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/app.es6']
  },
  output: {
    path: '.',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  module: {
    loaders: [
      { test: /\.(es6|js)$/, loader: 'babel-loader' }
    ]
  }
};
