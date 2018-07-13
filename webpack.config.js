const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    }
                ]
            },
            {
                test: /\.svg$/,
                exclude: [/fonts/],
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "react-svg-loader",
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|ico)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|otf?)(\?[a-z0-9]+)?$/,
                exclude: [/assets/],
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            output: 'fonts/',
                            publicPath: '../'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: "public/favicon.ico"
        })
        
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
    }
};