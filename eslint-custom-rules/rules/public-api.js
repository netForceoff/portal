const { isPathRelative, shouldBeRelative } = require('../helpers')

module.exports = function (context) {
  const alias = context.options[0]?.alias || ''

  return {
    ImportDeclaration (node) {
      const value = node.source.value
      const importPath = alias ? value.replace(`${alias}/`, '') : value

      if (isPathRelative(importPath)) {
        return false
      }

      const paths = importPath.split('/')

      const layers = {
        widgets: 'widgets',
        entities: 'entities',
        features: 'features',
        pages: 'pages'
      }

      const layer = paths[0]

      if (!layer || !layers[layer]) {
        return false
      }

      const fullPath = context.getFilename()
      const projectPath = context.getCwd()

      if (shouldBeRelative(fullPath, importPath, projectPath)) {
        return false
      }

      const segments = ['ui', 'model', 'api']

      if (paths.some(path => segments.includes(path))) {
        context.report(node, 'Импорт должен быть из PUBLIC API (index.ts)')
      }
    }
  }
}
