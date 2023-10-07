import {Project, SourceFile, SyntaxKind} from 'ts-morph';
const project = new Project();

project.addSourceFilesAtPaths('src/**/ArticlePage.tsx');

const removedFeatureName = process.argv[2];
const featureFnName = process.argv[3];

if (!removedFeatureName) {
	throw new Error('feaute name has not been written');
}
console.log(removedFeatureName, 'name');
if (!featureFnName) {
	throw new Error('Please, add feature fn name');
}

const fnNames = ['on', 'off'];

if (!fnNames.includes(featureFnName)) {
	throw new Error('Your feature name is not correct!');
}

// project.addSourceFilesAtPaths('src/**/*.ts');
// project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

files.forEach((file: SourceFile) => {
	file.forEachDescendant((node) => {
		if (node.isKind(SyntaxKind.CallExpression)) {
			let isToggle = false;

			node.forEachChild((child) => {
				if (
					child.isKind(SyntaxKind.Identifier) &&
					child.getText() === 'toggleFeatures'
				) {
					isToggle = true;
				}
			});

			if (isToggle) {
				const objOptions = node.getFirstDescendantByKind(
					SyntaxKind.ObjectLiteralExpression
				);

				if (objOptions) {
					const on = objOptions.getProperty('on');
					const off = objOptions.getProperty('off');
					const name = objOptions.getProperty('name');

					if (on && off && name) {
						const onFn = on.getFirstDescendantByKind(
							SyntaxKind.ArrowFunction
						);
						const offFn = off.getFirstDescendantByKind(
							SyntaxKind.ArrowFunction
						);
						const nameValue = name.getFirstDescendantByKind(
							SyntaxKind.StringLiteral
						);

						if (onFn && offFn && nameValue) {
							const value = nameValue.getText().slice(1, -1);

							if (removedFeatureName === value) {
								if (featureFnName === 'on') {
									node.replaceWithText(
										onFn.getBody().getText()
									);
								}

								if (featureFnName === 'off') {
									node.replaceWithText(
										offFn.getBody().getText()
									);
								}
							}
						}
					}
				}

				return;
			}
		}
	});
});

project.save();
