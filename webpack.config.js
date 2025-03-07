const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './oioioi/base/static/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist-webpack'),
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: 'jquery',
  //     jQuery: 'jquery',
  //   })
  // ]
};