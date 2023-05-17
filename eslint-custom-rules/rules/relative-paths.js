const { isPathRelative, shouldBeRelative } = require('../helpers/relative-paths')

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
      console.log(fullPath, 'fullPath')
      console.log(projectPath, 'projectPath')
      if (shouldBeRelative(fullPath, importPath, projectPath)) {
        context.report(node, 'Путь должен быть относительным')
      }
    }
  }
}
