import * as path from 'path'
import * as webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
  entry: {
    client: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { targets: { browsers: 'last 2 versions' } },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              'babel-plugin-styled-components',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new HtmlWebpackPlugin()],
}

export default config
