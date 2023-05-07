import { RuleSetRule } from 'webpack'

const babelLoader = (): RuleSetRule => ({
  exclude: /node_modules/,
  test: /\.(ts|js)x?$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
      }
    }
  ]
})

export default babelLoader
