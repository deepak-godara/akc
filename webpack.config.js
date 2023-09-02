const path = require("path");
const ClearnTerminal = require("clean-terminal-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
console.log(process.env.NODE_ENV);
module.exports = {
  entry: {
    main: "./src/index.tsx",
    hot: "webpack/hot/dev-server.js",
    client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "[name].[contenthash].js",
    clean: true,
  },
  parallelism: 1,
  // |
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", "..."],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@images": path.resolve(__dirname, "src/images"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@app": path.resolve(__dirname, "src/app"),
      "@lib": path.resolve(__dirname, "lib"),
      "@API": path.resolve(__dirname, "src/API"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      filename: "index.html",
    }),
    new ClearnTerminal(),
    sentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "personal-edu",
      project: "akc",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
  ],
  devServer: {
    static: "./dist",
    hot: false,
    client: false,
    watchFiles: ["src/**/*", "lib/**/*"],
  },
  devServer: {
    devMiddleware: {
      writeToDisk: false,
    },
    historyApiFallback: true,
    client: {
      // progress: true,
    },
  },
  watchOptions: {
    ignored: ["./*/node_modules/*"],
  },
};
