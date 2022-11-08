const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

// Пути для конфига
const entryPath = path.join(__dirname, 'src', 'index.js');
const bundlePath = path.join(__dirname, 'dist');
const htmlTemplatePath = path.join(__dirname, 'public', 'index.html');
const srcPath = path.join(__dirname, 'src');
const assetsPath = path.join(__dirname, 'assets');
const faviconPath = path.join(__dirname, 'public', 'favicon.ico');

module.exports = {
  entry: entryPath,
  devtool: 'inline-source-map',
  devServer: {
    static: bundlePath,
    hot: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  output: {
    filename: '[name].bundle.js',
    path: bundlePath,
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SongBird',
      alwaysWriteToDisk: true,
      template: htmlTemplatePath,
      inject: 'body',
      // filename: `index.html`,
      // chunks: 'index.html',
      favicon: faviconPath,
      clean: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  resolve: {
    alias: {
      assets: assetsPath,
      src: srcPath,
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(html)$/i,
        use: ['html-loader'],
      },
    ],
  },
};
