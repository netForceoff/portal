import { type ResolveOptions } from 'webpack'

import { type BuildOptions } from '../types/config'

const resolvers = (options: BuildOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [options.paths.src, 'node_modules'],
  alias: {
    '@': options.paths.src
  }
})

export default resolvers
