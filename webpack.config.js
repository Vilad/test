var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
};
