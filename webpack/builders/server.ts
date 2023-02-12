import { type BuildOptions } from '../types/config'
import { type Configuration } from 'webpack-dev-server'

const server = (options: BuildOptions): Configuration => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true
})

export default server
