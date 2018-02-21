import webpack from 'webpack'
import path from 'path'
import Dotenv from 'dotenv-webpack'


export default {
  entry: path.join(__dirname, 'src/app/app.js'),
  output: {
    filename: 'pwd.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 3000,
    public: 'localhost:3000'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new Dotenv({
      path: './.env',
      safe: false
    }),
  ]
}
