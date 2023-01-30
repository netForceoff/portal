import path from 'path';
import {Configuration} from 'webpack';
import configBuilder from "./builders/config";
import {Env, Mode} from "./types/config";

export default  (env: Env): Configuration => {
    const mode = env.mode || Mode.DEVELOPMENT;
    const isDev = mode === Mode.DEVELOPMENT;

    return configBuilder({
        mode,
        isDev,
        name: {
            css: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
            js: isDev ? '[name].js' : '[name].[contenthash].js'
        },
        paths: {
            entry: path.resolve(__dirname, '../src', 'index.tsx'),
            html: path.resolve(__dirname, '../public', 'index.html'),
            build: path.resolve(__dirname, '../build')
        },
        port: env.port || 3000
    });
};
