import { BuildOptions } from "../types/config";
import {ResolveOptions} from "webpack";

const resolvers = (options: BuildOptions): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {}
})

export default resolvers;
