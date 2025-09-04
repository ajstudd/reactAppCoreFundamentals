const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",  // starting point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,       // JS & JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // sends code → Babel
        },
      },
      {
        test: /\.css$/,           // CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // allow imports without extension
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // injects bundle into HTML
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000,
    hot: true,
    open: true,
  },
  mode: "development",
};
