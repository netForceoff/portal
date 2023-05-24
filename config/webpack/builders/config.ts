import { type Configuration } from 'webpack'

import { type BuildOptions } from '../types/config'

import loaders from './loaders'
import plugins from './plugins'
import resolvers from './resolvers'
import server from './server'

const config = (options: BuildOptions): Configuration => {
  const { mode, name, isDev, paths } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: name.js,
      path: paths.build,
      clean: true,
      publicPath: '/'
    },
    plugins: plugins(options),
    module: {
      rules: loaders(options)
    },
    resolve: resolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: server(options)
  }
}

export default config
