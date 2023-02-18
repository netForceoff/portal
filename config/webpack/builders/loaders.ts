import { RuleSetRule } from 'webpack'
import { BuildOptions } from '../types/config'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import cssLoader from '../loaders/cssLoader'

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
  cssLoader(options.isDev),
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
