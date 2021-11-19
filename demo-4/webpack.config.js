const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),

    clean: true, //清理 /dist 文件夹
  },
  devtool: "inline-source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    static: "./dist",
    port: "3001",
    open: false,
  },
  //   optimization: {
  //     splitChunks: {
  //       chunks: "all",
  //     },
  //   },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React——NEW Test",
      template: "public/index.html",
      favicon: "public/favicon.png",
    }),
    new MiniCssExtractPlugin(),
  ],
  // externals: [{
  //   'react': {
  //     root: 'React',
  //     commonjs2: 'react',
  //     commonjs: 'react',
  //     amd: 'react'
  //   }
  // }, {
  //   'react-dom': {
  //     root: 'ReactDOM',
  //     commonjs2: 'react-dom',
  //     commonjs: 'react-dom',
  //     amd: 'react-dom'
  //   }
  // }],
  module: {
    rules: [
      // { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/, // 处理除了nodde_modules里的js文件
        loader: "babel-loader", // 用babel-loader处理
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.less$/,    // node_modules中的内容关闭模块化
        exclude: [/src/],

        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
