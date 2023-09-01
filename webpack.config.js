const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => ({
  entry: "./src/index.js",
  mode: argv.mode || "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(jpg|json)$/,
        exclude: /node_modules/,
        type: "asset/resource"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
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
			template: "src/index.ejs", // these are default values
      filename: "index.html", // these are default values
      templateParameters: { env, argv } // passing in everything from the command-line
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/static/img/favicon-*", to: "[name].[ext]" },
        { from: "src/robots.txt", to: "[name][ext]" }
      ]
    })
	]
});