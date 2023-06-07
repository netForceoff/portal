import {Project, SourceFile, ImportDeclaration} from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const folders = [
	'shared',
	'entities',
	'widgets',
	'pages',
	'features',
	'entities',
	'app',
];

const files = project.getSourceFiles();

files.forEach((file: SourceFile) => {
	const declarations = file.getImportDeclarations();

	declarations.forEach((declaration: ImportDeclaration) => {
		const path = declaration.getModuleSpecifierValue();

		if (folders.some((folder) => path.startsWith(folder))) {
			declaration.setModuleSpecifier('@/' + path);
		}
	});
});

project.save();
