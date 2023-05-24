import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type BuildOptions } from '../types/config'

const plugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const { isDev, isProd, name, paths } = options

  const plugins = [
    new ForkTsCheckerWebpackPlugin(),
    new DefinePlugin({
      __IS_DEV__: isDev
    }),
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin()
  ]

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: name.css,
        chunkFilename: name.css
      })
    )
  }

  if (isDev) {
    plugins.push(
      new HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin({ overlay: false }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true
      })
    )
  }

  return plugins
}

export default plugins
