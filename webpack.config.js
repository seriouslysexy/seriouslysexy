const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      }
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },
  devServer: {
		port: 3000,
		static: {
			directory: path.join(__dirname, "dist"),
			publicPath: "http://localhost:3000/"
		},
		historyApiFallback: true,
		open: true
  },
  plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: "src/index.ejs",
			filename: "index.html"
		})
	]
};