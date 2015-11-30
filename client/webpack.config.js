var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    module: {
        loaders: [{
            test: [
              /\.jsx?$/,
              /\.js?$/
            ],
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
    ]
};
