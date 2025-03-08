const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

module.exports = {
  entry: [
    "./oioioi/base/static/js/index.js", 
    "./oioioi/base/static/scss/style.scss",
    ...glob.sync("./**/static/common/**/*.{scss,css,js}").map(f => path.resolve(__dirname, f))
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist-webpack'),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                loadPaths: ["./oioioi/base/static/scss"],
              },
            },
          },
        ],
      },
    ],
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: 'jquery',
  //     jQuery: 'jquery',
  //   })
  // ]
};