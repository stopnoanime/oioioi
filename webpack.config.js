const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

// This needs to match the setting in default_settings.py
const COMMON_MEDIA_PREFIX = 'common/'

module.exports = {
  entry: [
    ...glob.sync(
      `./**/static/${COMMON_MEDIA_PREFIX}**/*.js`
    ).map(f => path.resolve(__dirname, f))
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist-webpack'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ]
};