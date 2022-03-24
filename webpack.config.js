const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'bundle'),
    filename: 'app.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css'
    }),
  ],
}