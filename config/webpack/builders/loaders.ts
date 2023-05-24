import { RuleSetRule } from 'webpack'

import babelLoader from '../loaders/babelLoader'
import cssLoader from '../loaders/cssLoader'
import svgLoader from '../loaders/svgLoader'
import { BuildOptions } from '../types/config'

const loaders = (options: BuildOptions): RuleSetRule[] => ([
  babelLoader(options.mode),
  cssLoader(options.isDev),
  svgLoader(),
  {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }
])

export default loaders
