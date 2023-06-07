const {isPathRelative, shouldBeRelative} = require('../helpers');
// TODO - должен орать и на относительные пути, чтоб защититься от дурака
module.exports = function (context) {
	const alias = context.options[0]?.alias || '';
	const ignorePatterns = context.options[0]?.ignorePatterns || [];

	return {
		ImportDeclaration(node) {
			const value = node.source.value;
			const importPath = alias ? value.replace(`${alias}/`, '') : value;
			const isIgnored = ignorePatterns.some(
				(path) => importPath === path
			);

			// TODO - по хорошему надо подумать что делать с app/store/config/types, т.к. он идет в нижележащие слои, скорее всего это просто исключение из правил

			if (isIgnored) {
				return false;
			}

			if (isPathRelative(importPath)) {
				return false;
			}

			const paths = importPath.split('/');
			const [layer, slice] = paths;

			const layers = {
				app: 'app',
				widgets: 'widgets',
				entities: 'entities',
				features: 'features',
				pages: 'pages',
			};

			if (!layer || !layers[layer]) {
				return false;
			}

			const fullPath = context.getFilename();
			const projectPath = context.getCwd();

			if (shouldBeRelative(fullPath, importPath, projectPath)) {
				return false;
			}

			const segments = ['ui', 'model', 'api', 'config', 'lib'];

			if (paths.some((path) => segments.includes(path))) {
				context.report({
					node,
					message: 'Импорт должен быть из PUBLIC API (index.ts)',
					fix(fixer) {
						const withAlias = alias ? `${alias}/` : '';
						return fixer.replaceText(
							node.source,
							`'${withAlias}${layer}/${slice}'`
						);
					},
				});
			}
		},
	};
};
