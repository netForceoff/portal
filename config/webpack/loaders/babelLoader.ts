import { RuleSetRule } from 'webpack'

const babelLoader = (): RuleSetRule => ({
  exclude: /node_modules/,
  test: /\.(ts|js)x?$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        envName: 'dev'
      }
    }
  ]
})

export default babelLoader
