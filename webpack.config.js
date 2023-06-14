const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),

    args = process.argv,
    debug = args.indexOf('--debug') > -1,
    output = {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js'
    },
    plugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            template: path.resolve(__dirname, './lib/index.tpl.html')
        }),
        new ExtractTextPlugin('[name].[hash].css')
    ];

if (!debug) {
    plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = {
    context: path.resolve(__dirname, './lib'),
    entry: {
        app: './app.js'
    },
    output: output,
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader'
            }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader'],
                fallback: 'style-loader'
            })
        }]
    },
    devServer: {
        host: 'localhost',
        contentBase: path.resolve(__dirname, './docs'),
        historyApiFallback: true,
        open: true
    },
    plugins: plugins
}