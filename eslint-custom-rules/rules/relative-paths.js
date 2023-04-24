const { isPathRelative, shouldBeRelative } = require('../helpers/relative-paths')

module.exports = function (context) {
  return {
    ImportDeclaration (node) {
      const importPath = node.source.value

      if (isPathRelative(importPath)) {
        return false
      }

      const fullPath = context.getFilename()
      const projectPath = context.getCwd()

      if (shouldBeRelative(fullPath, importPath, projectPath)) {
        context.report(node, 'Путь должен быть относительным')
      }
    }
  }
}
