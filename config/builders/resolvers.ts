import {ResolveOptions} from "webpack";

const resolvers = (): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js']
})

export default resolvers;
