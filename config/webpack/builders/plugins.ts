import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack'
import { type BuildOptions } from '../types/config'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const plugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const { isDev, name, paths } = options

  const devPlugins = []

  if (isDev) {
    devPlugins.push(
      new HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin({ overlay: false }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      })
    )
  }

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
    }),
  ].concat(devPlugins)
}

export default plugins
