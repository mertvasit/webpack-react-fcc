const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[contentHash].bundle.js',
        publicPath: '/',
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExractPlugin({ filename: '[name].[contentHash].bundle.css'}), 
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExractPlugin.loader, "css-loader"],
            },
        ]
    },
    optimization: {
        minimizer: [ new OptimizeCssAssetsWebpackPlugin(), new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
                vendor: {
                    name: 'vendor',
                    test: 'vendor',
                    chunks: 'initial',
                    enforce: true,
                }
            }
        },
    }
});