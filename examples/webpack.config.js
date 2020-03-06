const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: './examples/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module:  {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        use: {
          loader: '@codeinc.mx/manage-images-loader',
          options: {
            quality: 70
          }
        }
      },
      {
        test: /\.png|webp$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 1000,
                name: '[name].[ext]',
                outputPath: 'assets'
            }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Css backgrounds manager',
      template: './examples/index.html'
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '65-75'
      }
    }),
  ]
}