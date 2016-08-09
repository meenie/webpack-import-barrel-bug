var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
};
