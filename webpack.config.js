const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const { title, description } = require('./config/app.config');

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
        liveReload: true,
        port: process.env.PORT || 3000,
        hot: true,
        open: true,
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
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('public/index.html'),
        }),
        // Makes the public URL available as %PUBLIC_URL% in index.html, e.g.:
        // <link rel="icon" href="%PUBLIC_URL%/favicon.ico">
        new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
            TITLE: title,
            DESCRIPTION: description,
            // You can pass any key-value pairs, this was just an example.
            // TITLE: React Template App will replace %TITLE% with React Template App in index.html.
        }),
        new MiniCssExtractPlugin(),
    ],
};
