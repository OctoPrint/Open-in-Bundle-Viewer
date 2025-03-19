const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    background: "./source/background",
  },
  output: {
    path: path.join(__dirname, "distribution"),
    filename: "[name].js",
  },
};
