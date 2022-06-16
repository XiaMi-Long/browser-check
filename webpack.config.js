/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-06-16 17:32:15
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-16 17:49:09
 */
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", // string
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
