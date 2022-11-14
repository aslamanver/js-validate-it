const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    libs: ["./src/browser.js"],
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "validate-it.min.js",
    library: "",
    libraryExport: "",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
