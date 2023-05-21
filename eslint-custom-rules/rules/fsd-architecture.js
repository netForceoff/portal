const { isPathRelative, shouldBeRelative } = require('../helpers')
const path = require('path')

// TODO - надо бы порефакторить, общие части вытащить в отдельный модуль
module.exports = function (context) {
  const alias = context.options[0]?.alias || ''
  const ignorePatterns = context.options[0]?.ignorePatterns || []

  return {
    ImportDeclaration (node) {
      const value = node.source.value
      const importPath = alias ? value.replace(`${alias}/`, '') : value
      const isIgnored = ignorePatterns.some(path => importPath === path)

      // TODO - по хорошему надо подумать что делать с app/store/config/types, т.к. он идет в нижележащие слои, скорее всего это просто исключение из правил

      if (isIgnored) {
        return false
      }

      if (isPathRelative(importPath)) {
        return false
      }

      const paths = importPath.split('/')

      const layersWithAcceptableLayers = {
        pages: ['widgets', 'features', 'entities', 'shared'],
        widgets: ['features', 'entities', 'shared'],
        features: ['entities', 'shared'],
        entities: ['shared'],
        shared: ['shared']
      }

      const layer = paths[0]

      if (!layer || !layersWithAcceptableLayers[layer]) {
        return false
      }

      const fullPath = context.getFilename()
      const projectPath = context.getCwd()

      if (shouldBeRelative(fullPath, importPath, projectPath)) {
        return false
      }

      const normalizeProjectPath = path.toNamespacedPath(projectPath)
      const normalizeFullPath = path.toNamespacedPath(fullPath)

      if (!normalizeFullPath.startsWith(normalizeProjectPath)) {
        return false
      }

      const pathChunks = normalizeFullPath.split('/')

      const layersKeys = Object.keys(layersWithAcceptableLayers)

      const currentLayer = pathChunks.find(chunk => layersKeys.includes(chunk))

      if (!currentLayer || layersWithAcceptableLayers[currentLayer].includes(layer)) {
        return false
      } else {
        context.report(node, 'Слой должен быть на уровень ниже')
      }
    }
  }
}
