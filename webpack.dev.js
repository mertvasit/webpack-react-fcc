const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 3000;

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    devServer: {
        host: 'localhost',
        port: PORT,
        historyApiFallback: true,
        open: true,
    },
});