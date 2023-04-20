const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new FaviconsWebpackPlugin('public/favicon.ico'),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    port: 3001,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
}
