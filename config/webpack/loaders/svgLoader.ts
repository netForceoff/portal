import { RuleSetRule } from 'webpack'

const svgLoader = (): RuleSetRule => ({
  test: /\.svg$/,
  use: ['@svgr/webpack']
})

export default svgLoader
