const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const glob = require('glob');

const isDev = process.env.APP_ENV === 'dev';
const files = glob.sync("./src/!(assets)/index.jsx");

let config = {};
const entry = {};
const HtmlWebpackPlugins= [];

files.forEach((filename) => {
    const match = filename.match(/src\/(.*)\/index/);
    const pageName = match[1];
    if (pageName) {
        entry[pageName] = filename;
        HtmlWebpackPlugins.push(new HtmlWebpackPlugin({
            filename: `${pageName}.html`,
            template: './template.html',
            inject: true,
            chunks: [pageName]
        }));
    }
});

let plugins = [
    new CleanWebpackPlugin()
];

if (isDev) {
    config.mode = 'development';
    config.devtool = "cheap-module-eval-source-map";
} else {
    config.mode = 'production';
    config.devtool = "cheap-module-source-map";
}
plugins = [
    new MiniCssExtractPlugin({
        filename: "[name].[chunkhash:6].css",
        chunkFilename:  "[id].css"
    }),
    ...plugins,
    ...HtmlWebpackPlugins
];

config = {
    ...config,
    entry,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpg|png)$/,
                use: 'file-loader'
            },
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins,
    optimization: {
        // splitChunks: {
        //     chunks: 'async',
        //     minSize: 1000,
        //     minChunks: 1,
        //     maxAsyncRequests: 5,
        //     maxInitialRequests: 3,
        //     name: true,
        //     cacheGroups: {
        //       vendors: {
        //         test: /[\\/]node_modules[\\/]/,
        //       },
        //       default: {
        //         minChunks: 2,
        //         reuseExistingChunk: true
        //       }
        //     }
        // }
    }
};
module.exports = config;
