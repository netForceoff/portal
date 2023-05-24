import { RuleSetRule } from 'webpack'

import { Mode } from '../types/config'

const babelLoader = (env: Mode): RuleSetRule => ({
  exclude: /node_modules/,
  test: /\.(ts|js)x?$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        envName: env
      }
    }
  ]
})

export default babelLoader
