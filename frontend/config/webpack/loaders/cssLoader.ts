import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {RuleSetRule} from 'webpack';

const cssLoader = (isDev: boolean): RuleSetRule => ({
	exclude: /node_modules/,
	test: /\.s[ac]ss$/i,
	use: [
		isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				modules: {
					auto: (resPath: string) =>
						Boolean(resPath.includes('.module.')),
					localIdentName: isDev
						? '[name]__[local]'
						: '[hash:base64:8]',
				},
			},
		},
		'sass-loader',
	],
});

export default cssLoader;
