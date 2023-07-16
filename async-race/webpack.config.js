/* eslint-disable @typescript-eslint/quotes */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PostcssPresetEnv = require("postcss-preset-env");

const SRC = path.resolve(__dirname, "./src/script.ts");

const mode = process.env.NODE_ENV || "development"; // явно указываем мод ENV
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist"; // определяем под какой браузер идёт сборка
const devtool = devMode ? "source-map" : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 4000,
    open: true,
  },
  entry: ["@babel/polyfill", SRC],
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "bundle.[contenthash].js",
    assetModuleFilename: "assets/[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    // new FaviconsWebpackPlugin({
    //   logo: './src/assets/svg/favicon.svg',
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.[tj]s$/i,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [PostcssPresetEnv],
              },
            },
          },
          { loader: "resolve-url-loader" },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // <-- IMPORTANT!
              // sourceMapContents: false
            },
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.woff2?$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/svg/[name][ext]",
        },
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        // type: 'asset/resource',
        include: SRC,
        loader: "file-loader",
        generator: {
          filename: "assets/sounds/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
