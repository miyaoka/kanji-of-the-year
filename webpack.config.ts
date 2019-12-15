import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: 'static', to: '.' }]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    })
  ],
  devServer: {
    open: true,
    contentBase: path.join(__dirname, './static')
  }
}

export default config
