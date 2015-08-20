module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/main.es6']
  },
  output: {
    path: '.',
    filename: 'main.js'
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
