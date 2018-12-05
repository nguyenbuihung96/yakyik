var path    = require('path');
var hwp     = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'build/bundle.js',
        sourceMapFilename: 'build/bundle.map',
        path: path.resolve(__dirname, './public')
    },
    devtool: '#source-map',
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'env']
            }
        }]
    },
    plugins:[
        new hwp({template:path.join(__dirname, './views/index.hjs')})
    ]
}