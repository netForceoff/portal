import { RuleSetRule } from 'webpack'
import { BuildOptions } from '../types/config'
import cssLoader from '../loaders/cssLoader'
import svgLoader from '../loaders/svgLoader'
import babelLoader from '../loaders/babelLoader'

const loaders = (options: BuildOptions): RuleSetRule[] => ([
  babelLoader(),
  cssLoader(options.isDev),
  svgLoader(),
  {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }
])

export default loaders
