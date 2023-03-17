require("@babel/polyfill");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


const webpackConfig = {
    mode : 'development',
    entry: ["@babel/polyfill",'./src/index.js'],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[contenthash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title : 'Custom template',
            template: path.resolve(__dirname,'./src/index.html'),
        }),
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, ''),
        },
        port: 9000,
      },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.less$/i,
            use: [ "style-loader","css-loader","less-loader"],
          },
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader","css-loader","sass-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ],
      },
};

module.exports = webpackConfig;