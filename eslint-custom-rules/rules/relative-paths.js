const path = require('path');

const {isPathRelative, shouldBeRelative} = require('../helpers');

module.exports = function (context) {
	const alias = context.options[0]?.alias || '';

	return {
		ImportDeclaration(node) {
			const value = node.source.value;
			const importPath = alias ? value.replace(`${alias}/`, '') : value;

			if (isPathRelative(importPath)) {
				return false;
			}

			const fullPath = context.getFilename();
			const projectPath = context.getCwd();

			if (shouldBeRelative(fullPath, importPath, projectPath)) {
				context.report({
					node,
					message: 'Путь должен быть относительным',
					fix(fixer) {
						const normalizeProjectPath =
							path.toNamespacedPath(projectPath);
						const normalizeFullPath =
							path.toNamespacedPath(fullPath);

						const partialPath = normalizeFullPath.slice(
							normalizeProjectPath.length
						);

						const layers = {
							app: 'app',
							widgets: 'widgets',
							entities: 'entities',
							shared: 'shared',
							features: 'features',
							pages: 'pages',
						};

						const fromArray = partialPath.split('/');
						const pathWithoutFile = fromArray.slice(0, -1);

						const indexLayer = pathWithoutFile.findIndex((item) =>
							Boolean(layers[item])
						);
						const newPath = pathWithoutFile.slice(indexLayer);
						let fixedPath = path.relative(
							`/${newPath.join('/')}`,
							`/${importPath}`
						);

						if (!fixedPath.startsWith('.')) {
							fixedPath = `./${fixedPath}`;
						}
						// если будет импорт из public API, то фикс не будет работать
						return fixer.replaceText(node.source, `'${fixedPath}'`);
					},
				});
			}
		},
	};
};
