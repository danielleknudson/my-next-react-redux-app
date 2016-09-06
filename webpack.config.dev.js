import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './app/application'
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './app'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
};
