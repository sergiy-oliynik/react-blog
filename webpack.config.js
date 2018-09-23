const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const publicPath = path.resolve(__dirname, './public');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, "./src/index.js")
        ]
    },
    output: {
        filename: "[name].js",
        path: publicPath,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, '/node_modules/'),
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                exclude: path.resolve(__dirname, "node_modules"),
                include: path.resolve(__dirname, './asset'),
                use: "url-loader?limit=10000?name=public/img/[name]-[hash].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            filename: "index.html",
            path: publicPath
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: publicPath,
        port: 8082,
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: '0.0.0.0'
    }
};