import { Configuration, DefinePlugin, RuleSetRule } from 'webpack'
import { Mode, Paths } from '../webpack/types/config'
import { resolve } from 'path'
import cssLoader from '../webpack/loaders/cssLoader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import svgLoader from '../webpack/loaders/svgLoader'

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: Paths = {
    assets: {
      svg: ''
    },
    build: '',
    html: '',
    entry: '',
    src: resolve(__dirname, '..', '..', 'src')
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  if (config.resolve?.alias) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': paths.src
    }
  }

  config.plugins?.push(new MiniCssExtractPlugin())

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true
  }))

  config.module?.rules?.push(cssLoader(config.mode === Mode.DEVELOPMENT))

  const currentRules: RuleSetRule[] = config.module?.rules ? [...config.module?.rules as RuleSetRule[]] : []

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const svgRuleIndex = currentRules.findIndex((rule: RuleSetRule) => /svg/.test(rule.test))

  if (svgRuleIndex >= 0) {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...currentRules.slice(0, svgRuleIndex),
          {
            ...currentRules[svgRuleIndex],
            exclude: /\.svg$/i
          },
          ...currentRules.slice(svgRuleIndex + 1)
        ].concat(svgLoader())
      }
    }
  }

  return config
}
