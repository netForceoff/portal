import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { DefinePlugin, ProgressPlugin, type WebpackPluginInstance } from 'webpack'
import { type BuildOptions } from '../types/config'

const plugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const { isDev, name, paths } = options

  return [
    new DefinePlugin({
      __IS_DEV__: isDev
    }),
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: name.css,
      chunkFilename: name.css
    })
  ]
}

export default plugins
