const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html'
        })
    ]
};