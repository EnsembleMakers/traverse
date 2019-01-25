const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: '',
  },
  output: {
    path: '',
    filename: '',
    publicPath: '',
  },
  module: {

  },
  plugins: [],
  optimization: {},
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      '@store$': '/store',
      '@pages$': '/pages',
      '@containers$': '/containers',
      '@components$': '/components',
      '@styles$': '/styles'
    }
  },
};