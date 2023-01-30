import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ProgressPlugin, WebpackPluginInstance} from "webpack";
import {BuildOptions} from "../types/config";

const plugins = (options: BuildOptions): WebpackPluginInstance[] => {
   const {name, paths} = options;

   return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: name.css
        })
   ]
}

export default plugins;
