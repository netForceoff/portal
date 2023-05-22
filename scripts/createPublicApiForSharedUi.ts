import { Project, SourceFile, ImportDeclaration } from 'ts-morph'
import path from 'path'
const project = new Project()

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const folders = ['shared', 'entities', 'widgets', 'pages', 'features', 'entities', 'app']

const files = project.getSourceFiles()
const uiPath = path.resolve(__dirname, '..', 'src', 'shared', 'ui')
const sharedUiDirectory = project.getDirectory(uiPath)
const componentsDirs = sharedUiDirectory?.getDirectories()

componentsDirs?.forEach(directory => {
  const indexFilePath = `${directory.getPath()}/index.ts`
  const indexFile = directory.getSourceFile(indexFilePath)
  const moduleNamePath = directory.getBaseName()

  if (!indexFile) {
    const sourceCode = `import ${moduleNamePath} from './${moduleNamePath}'\nexport { ${moduleNamePath} }\n`
    const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true })

    file.save()
  }
})

files.forEach((file: SourceFile) => {
  const declarations = file.getImportDeclarations()

  declarations.forEach((declaration: ImportDeclaration) => {
    const path = declaration.getModuleSpecifierValue()
    const pathWithoutAlias = path.replace('@/', '')
    const segments = pathWithoutAlias.split('/')
    const [layer, slice] = segments
    const isShared = layer === 'shared'
    const isUi = slice === 'ui'

    if (folders.some(folder => pathWithoutAlias.startsWith(folder)) && isShared && isUi) {
      const result = segments.slice(0, 3).join('/')
      declaration.setModuleSpecifier('@/' + result)

      if (!declaration.getNamedImports().length) {
        declaration.removeDefaultImport()
        declaration.addNamedImport(segments[segments.length - 1] || '')
      }
    }
  })
})

project.save()
