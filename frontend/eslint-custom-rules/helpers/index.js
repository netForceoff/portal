const path = require('path');

const isPathRelative = (path) => {
	return path === '.' || path.startsWith('./') || path.startsWith('../');
};

const shouldBeRelative = (fullPath, importPath, projectPath) => {
	const toArray = importPath.split('/');
	const toLayer = toArray[0];
	const toSlice = toArray[1];

	const layers = {
		app: 'app',
		widgets: 'widgets',
		entities: 'entities',
		shared: 'shared',
		features: 'features',
		pages: 'pages',
	};

	const normalizeProjectPath = path.toNamespacedPath(projectPath);
	const normalizeFullPath = path.toNamespacedPath(fullPath);

	if (
		!toLayer ||
		!toSlice ||
		!layers[toLayer] ||
		!normalizeFullPath.startsWith(normalizeProjectPath)
	) {
		return false;
	}

	const partialPath = normalizeFullPath.slice(normalizeProjectPath.length);
	const fromArray = partialPath.split('/');

	const indexLayer = fromArray.findIndex((item) => Boolean(layers[item]));
	const fromLayer = fromArray[indexLayer];
	const fromSlice = fromArray[indexLayer + 1];

	if (!fromLayer || !fromSlice || !layers[fromLayer]) {
		return false;
	}

	return fromSlice === toSlice && fromLayer === toLayer;
};

module.exports = {
	isPathRelative,
	shouldBeRelative,
};
