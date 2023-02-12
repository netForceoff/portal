import { resolve } from 'path'
import { type Configuration } from 'webpack'
import configBuilder from './builders/config'
import { type Env, Mode } from './types/config'

export default (env: Env): Configuration => {
  const mode = env.mode || Mode.DEVELOPMENT
  const isDev = mode === Mode.DEVELOPMENT

  return configBuilder({
    mode,
    isDev,
    name: {
      css: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
      js: isDev ? '[name].js' : '[name].[contenthash].js'
    },
    paths: {
      assets: {
        svg: 'static/[hash][ext][query]'
      },
      entry: resolve(__dirname, '../src', 'index.tsx'),
      html: resolve(__dirname, '../public', 'index.html'),
      build: resolve(__dirname, '../build'),
      src: resolve(__dirname, '../src')
    },
    port: env.port || 3000
  })
}
