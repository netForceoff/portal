import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { BuildOptions } from '../types/config'
import ReactRefreshTypeScript from 'react-refresh-typescript'

const loaders = (options: BuildOptions): RuleSetRule[] => ([
  {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [{
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: options.isDev ? [ReactRefreshTypeScript()] : []
        }),
        transpileOnly: options.isDev
      }
    }]
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev ? '[name]__[local]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  },
  {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }
])

export default loaders
