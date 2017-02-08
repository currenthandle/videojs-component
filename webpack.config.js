let webpack = require('webpack')

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js'
    ],
    //__dirname + '/src',
    output: {
        path: require("path").resolve("./dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-maps',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                //loader: 'babel',
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
                    plugins: ['transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    }
}
