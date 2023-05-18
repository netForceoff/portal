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

      const fullPath = context.getFilename()
      const projectPath = context.getCwd()

      if (shouldBeRelative(fullPath, importPath, projectPath)) {
        context.report(node, 'Путь должен быть относительным')
      }
    }
  }
}
