const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development"; //define node environment

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./assets/index.js", // path to our input file
  output: {
    filename: "index-bundle.js", // output bundle file name
    path: path.resolve(__dirname, "./static"), // path to our Django static directory
  },
  plugins: [
    // fix "process is not defined" error:
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),

    new HtmlWebpackPlugin({
      template: "templates/utils/ketcher.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /(\.png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
};
