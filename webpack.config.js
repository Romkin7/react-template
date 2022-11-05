const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Where files should be sent once they are bundled
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: process.env.PORT || 3000,
        hot: true,
        open: [`http://locahost:${this.port}`],
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        // make all svg images to work in IE
                        iesafe: true,
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new MiniCssExtractPlugin(),
    ],
};
