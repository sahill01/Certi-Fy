const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Add CSS loader
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Use this to extract CSS into a separate file
          'css-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    // Add MiniCssExtractPlugin to extract CSS into a separate file
    new MiniCssExtractPlugin({
      filename: './static/css/[name].css', // You can adjust the output filename as needed
    }),
  ],
};
