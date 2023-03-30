import { type BuildOptions } from '../types/config'
import { type Configuration } from 'webpack'
import plugins from './plugins'
import loaders from './loaders'
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
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: server(options)
  }
}

export default config
