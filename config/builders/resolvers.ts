import { type BuildOptions } from '../types/config'
import { type ResolveOptions } from 'webpack'

const resolvers = (options: BuildOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [options.paths.src, 'node_modules'],
  alias: {}
})

export default resolvers
