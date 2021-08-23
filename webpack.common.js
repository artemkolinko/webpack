const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pagesDir = './src/pug/pages/';
const pagesName = fs.readdirSync(pagesDir);

const generateHtmlWebpackPlugins = pagesName.map((page) => {
  // new HtmlWebpackPlugin({
  //   template: './pug/pages/about.pug',
  //   filename: './about.html',
  // })
  return new HtmlWebpackPlugin({
    template: `./pug/pages/${page}`,
    filename: `./${page.replace(/\.pug/, '.html')}`,
  });
});

module.exports = {
  // entry: './src/index.js',
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    print: './print.js',
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    // clean dist folder
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    ...generateHtmlWebpackPlugins,
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
